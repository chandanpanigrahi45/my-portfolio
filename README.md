# my-portfolio
😎 Welcome to my portfolio! I am a final-year Computer Engineering student dedicated to building modern digital solutions. My expertise lies in designing seamless user experiences and powerful backends using MongoDB, Express, React, and Node.js.

# Developer Portfolio — React + Node/Express

A full-stack developer portfolio site. The frontend is a React app (Vite +
Tailwind CSS v4) and the backend is a small Node.js/Express API that powers
the contact form and serves the production build.

The design is themed around a code editor: the nav bar looks like open
editor tabs (`hero.tsx`, `about.md`, `skills.json`, ...), the hero is framed
as a release/changelog entry with a terminal panel, and the experience
section reads like a git log.

---

## Tech stack

- **Frontend:** React 19, Vite, Tailwind CSS v4, lucide-react icons
- **Backend:** Node.js, Express 5, CORS, dotenv, Nodemailer (optional email)
- **Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono (code/labels)

## Project structure

```
portfolio/
├── client/              # React app (Vite)
│   ├── public/          # static assets — put resume.pdf here
│   └── src/
│       ├── components/  # Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer
│       ├── data/
│       │   └── portfolioData.js   # ← all your content lives here
│       ├── hooks/
│       └── App.jsx
├── server/               # Express API
│   ├── routes/
│   │   └── contact.js   # contact form endpoint
│   ├── index.js
│   └── .env.example
├── package.json          # root scripts to run both at once
└── README.md
```

---

## Getting started

### 1. Install dependencies

```bash
npm run install:all
```

This installs dependencies for the root, `client/`, and `server/`.

### 2. Configure environment variables (optional)

The contact form works out of the box — submissions are validated and
logged to the server console even without any configuration. To actually
**email** yourself when someone submits the form:

```bash
cp server/.env.example server/.env
```

Then fill in `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, etc. (e.g. using a
Gmail App Password, SendGrid, Mailgun, or any SMTP provider).

### 3. Run in development

```bash
npm run dev
```

This starts:
- the Vite dev server at `http://localhost:5173` (the site you'll view)
- the Express API at `http://localhost:5000`

The Vite dev server proxies `/api/*` requests to Express, so the contact
form works seamlessly in development.

### 4. Build for production

```bash
npm run build
```

This builds the React app into `client/dist`. Express is already configured
to serve that folder, so for a single-server deployment you just run:

```bash
npm start
```

which builds the client and starts the Express server at
`http://localhost:5000` — serving both the site and the API.

---

## Customizing the content

Almost everything on the page is driven by one file:

**`client/src/data/portfolioData.js`**

Edit this to update:
- your name, role, tagline, location, email, resume link, and social links
- the About section bio and "facts" panel
- skill groups and the tags inside them
- your projects (title, description, tech tags, live/code links, status)
- your work experience timeline
- the contact section heading/subheading

### Adding your resume

Drop your resume file into `client/public/resume.pdf` — the "resume.pdf"
buttons in the nav bar and hero already link to `/resume.pdf`.

### Changing colors and fonts

The color palette and fonts are defined as design tokens at the top of
**`client/src/index.css`** under the `@theme` block:

```css
@theme {
  --color-ink: #0E1117;     /* page background */
  --color-surface: #161A24; /* card background */
  --color-accent: #8C8CFF;  /* primary accent (links, buttons) */
  --color-add: #5FBF8D;     /* "added" / success accent */
  --color-rm: #E0727A;      /* "removed" / error accent */
  --font-display: "Space Grotesk", ...;
  --font-body: "Inter", ...;
  --font-mono: "JetBrains Mono", ...;
}
```

Change these values and the whole site updates — Tailwind utilities like
`bg-accent`, `text-add`, `font-display`, etc. are generated from these
tokens automatically.

---

## Contact form API

`POST /api/contact` accepts JSON: `{ name, email, message }`.

- Validates that all fields are present, the email looks valid, and the
  message isn't excessively long.
- Includes a simple in-memory rate limit (5 requests / 10 minutes per IP).
- Logs every submission to the server console.
- If SMTP credentials are set in `server/.env`, also emails the submission
  to `CONTACT_RECEIVER` (or `SMTP_USER` if unset).

`GET /api/health` returns a simple `{ status: "ok" }` for uptime checks.

---

## Deploying

You have a few good options:

**Option A — single server (simplest):**
Deploy the whole `portfolio/` folder to a Node host (Render, Railway,
Fly.io, a VPS, etc.). Set the start command to `npm start` (run from the
repo root) — it builds the client and serves everything from Express on
one port.

**Option B — split deployment:**
- Deploy `client/` to a static host (Vercel, Netlify, GitHub Pages).
- Deploy `server/` to a Node host (Render, Railway, etc.).
- Set the client's API calls to point at your deployed server URL (e.g. via
  a Vite environment variable), or configure a redirect/proxy from your
  static host to the API.

---

## Pushing this to GitHub

From the `portfolio/` folder:

```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(`node_modules/`, `client/dist/`, and `.env` files are already excluded via
`.gitignore`.)
