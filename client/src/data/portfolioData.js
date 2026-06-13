// ────────────────────────────────────────────────────────────────
//  EDIT ME: every piece of text on the site comes from this file.
//  Replace the placeholders below with your own information.
// ────────────────────────────────────────────────────────────────

export const profile = {
  name: "Chandan panigrahi",
  role: "Software & Web Developer",
  tagline:
    "I build fast, accessible web applications — from pixel-perfect UI to the APIs behind them.",
  location: "Surat, India",
  email: "chandanpanigrahi916@example.com",
  resumeUrl: "/resume.pdf",
  availability: "Open to new opportunities",
  version: "v1.0.0",
  socials: [
    { label: "GitHub", href: "https://github.com/chandanpanigrahi45", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/chandan-panigrahi-38b153358", icon: "linkedin" },
    { label: "Twitter", href: "https://twitter.com/yourusername", icon: "twitter" },
  ],
};

export const navTabs = [
  { id: "home", label: "hero.tsx" },
  { id: "about", label: "about.md" },
  { id: "skills", label: "skills.json" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience.log" },
  { id: "contact", label: "contact.sh" },
];

export const about = {
  heading: "About",
  paragraphs: [
    "I'm a developer who enjoys turning complex problems into clean, maintainable code. My focus is the modern JavaScript ecosystem — React on the front end, Node.js and Express on the back end — with an eye for performance, accessibility, and design detail.",
    "Outside of work I contribute to open-source projects, write about web development, and spend a lot of time tinkering with side projects that usually start as 'just a quick experiment'.",
  ],
  facts: [
    { key: "name", value: "Chandan panigrahi" },
    { key: "role", value: "software Developer" },
    { key: "based_in", value: "Surat, Gujrat, India" },
    { key: "focus", value: ["React", "Node.js", "DSA","AI","System design"] },
    { key: "status", value: "open_to_work" },
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    accent: "accent",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "Redux", "HTML5 & CSS3"],
  },
  {
    title: "Backend",
    accent: "add",
    skills: ["Node.js", "Express", "REST APIs", "JWT Auth", "Socket.io"],
  },
  {
    title: "Database & Cloud",
    accent: "accent",
    skills: ["MongoDB", "PostgreSQL", "AWS", "Docker", "Vercel"],
  },
  {
    title: "Tools & Practices",
    accent: "add",
    skills: ["Git & GitHub", "Webpack & Vite","vs code"],
  },
];

export const projects = [
  {
    title: "Realtime Chat Platform",
    description:
      "A multi-room chat application with live presence, typing indicators, and message history, built on Socket.io with a Node/Express backend and a React client.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    live: "https://example.com",
    code: "https://github.com/yourusername/realtime-chat",
    status: "shipped",
  },
  {
    title: "E-commerce Storefront",
    description:
      "A full-stack storefront with product search, cart, and Stripe checkout. Includes an admin dashboard for managing inventory and orders.",
    tech: ["Next.js", "Express", "PostgreSQL", "Stripe"],
    live: "https://example.com",
    code: "https://github.com/yourusername/ecommerce-storefront",
    status: "shipped",
  },
  {
    title: "Task Management API",
    description:
      "A documented REST API for team task management with role-based access control, rate limiting, and automated test coverage.",
    tech: ["Node.js", "Express", "MongoDB", "Jest"],
    live: "https://example.com",
    code: "https://github.com/yourusername/task-api",
    status: "in-progress",
  },
  {
    title: "Markdown Blog Engine",
    description:
      "A lightweight blogging engine that compiles Markdown posts into a static site with syntax highlighting, tags, and RSS support.",
    tech: ["Node.js", "React", "Tailwind CSS"],
    live: "https://example.com",
    code: "https://github.com/yourusername/markdown-blog",
    status: "shipped",
  },
];

export const experience = [

  {
    range: "2026(may-15)-2026(june-15)",
    month: "1 month",
    role: "Full stack Web Developer",
    company: "Codify Infotech",
    description:
      "",
  },
];

export const contact = {
  heading: "Get in touch",
  subheading:
    "Developed scalable backend services and RESTful APIs using Node.js and Express.js. Integrated MongoDB for efficient data storage, managed middleware for user authentication, and optimized API routing to connect seamlessly with front-end React components.",
};
