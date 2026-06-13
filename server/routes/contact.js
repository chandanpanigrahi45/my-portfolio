import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

// Very small in-memory rate limiter: max 5 requests per IP per 10 minutes.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", async (req, res) => {
  if (isRateLimited(req.ip)) {
    return res.status(429).json({ error: "Too many requests. Try again later." });
  }

  const { name, email, message } = req.body || {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  if (!EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  if (message.trim().length > 5000) {
    return res.status(400).json({ error: "Message is too long." });
  }

  const submission = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  };

  // Always log the submission so nothing is lost even without SMTP set up.
  console.log("New contact form submission:", submission);

  const transporter = getTransporter();

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
        replyTo: submission.email,
        subject: `New message from ${submission.name}`,
        text: `From: ${submission.name} <${submission.email}>\n\n${submission.message}`,
      });
    } catch (err) {
      console.error("Failed to send contact email:", err);
      return res
        .status(502)
        .json({ error: "Could not send your message right now. Please try again later." });
    }
  }

  res.status(200).json({ success: true });
});

export default router;
