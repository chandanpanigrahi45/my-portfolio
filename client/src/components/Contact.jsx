import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import { contact, profile } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const socialIcons = { github: GithubIcon, linkedin: LinkedinIcon, twitter: TwitterIcon };

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 border-t border-line"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeading
            file="contact.sh"
            title={contact.heading}
            subtitle={contact.subheading}
          />
        </Reveal>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
          <Reveal>
            <div className="space-y-4 font-mono text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-text hover:text-accent transition-colors"
              >
                <Mail size={16} className="text-accent" />
                {profile.email}
              </a>
              <p className="flex items-center gap-3 text-muted">
                <MapPin size={16} className="text-accent" />
                {profile.location}
              </p>

              <div className="flex items-center gap-4 pt-4">
                {profile.socials.map((s) => {
                  const Icon = socialIcons[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={s.label}
                      className="text-muted hover:text-accent transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-line bg-surface p-5 sm:p-6 space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs text-muted mb-1.5"
                >
                  name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full rounded-md border border-line bg-surface-2 px-3 py-2.5 text-sm text-text placeholder:text-muted/60 focus:border-accent outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs text-muted mb-1.5"
                >
                  email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full rounded-md border border-line bg-surface-2 px-3 py-2.5 text-sm text-text placeholder:text-muted/60 focus:border-accent outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs text-muted mb-1.5"
                >
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-md border border-line bg-surface-2 px-3 py-2.5 text-sm text-text placeholder:text-muted/60 focus:border-accent outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 font-mono text-sm bg-accent text-ink font-medium px-4 py-2.5 rounded-md hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                <Send size={15} />
                {status === "sending" ? "sending..." : "send message"}
              </button>

              {status === "success" && (
                <p className="font-mono text-sm text-add">
                  {"> message sent — thanks for reaching out, I'll reply soon."}
                </p>
              )}
              {status === "error" && (
                <p className="font-mono text-sm text-rm">
                  {`> error: ${errorMsg}`}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
