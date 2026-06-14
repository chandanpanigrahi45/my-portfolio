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
  version: "developer_mode",
  socials: [
    { label: "GitHub", href: "https://github.com/chandanpanigrahi45", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/chandan-panigrahi-38b153358", icon: "linkedin" },
    { label: "Twitter", href: "https://x.com/P_Chandan_", icon: "twitter" },
  ],
};

export const navTabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
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
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing my work and skills, built with React and styled with Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Vite","node.js","mongoDB"],
    live: "https://chandan-panigrahi-dev.onrender.com",
    code: "https://github.com/chandanpanigrahi45/my-portfolio",
    status: "shipped",
  },
  {
    title: "Library_Management_System",
    description:
      "A backend-based Library Management System built with Node.js, Express. Supports CRUD operations for managing books and handling requests via Thunder Client.",
    tech: ["Node.js", "Express", "CRUD", "Middleware"],
    live: "https://example.com",
    code: "https://github.com/chandanpanigrahi45/Library_management_system/tree/main",
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
