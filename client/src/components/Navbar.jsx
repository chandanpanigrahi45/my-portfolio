import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navTabs, profile } from "../data/portfolioData";

const dotColor = {
  "hero.tsx": "bg-accent",
  "about.md": "bg-accent",
  "skills.json": "bg-add",
  "projects": "bg-add",
  "experience.log": "bg-muted",
  "contact.sh": "bg-rm",
};

export default function Navbar() {
  const [active, setActive] = useState(navTabs[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navTabs
      .map((tab) => document.getElementById(tab.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center h-14 gap-2">
          {/* window controls */}
          <div className="hidden sm:flex items-center gap-1.5 pr-3 mr-1 border-r border-line">
            <span className="w-2.5 h-2.5 rounded-full bg-rm/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-add/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
          </div>

          {/* tabs - desktop */}
          <nav className="hidden md:flex items-stretch h-14 overflow-x-auto">
            {navTabs.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className={`group flex items-center gap-2 px-4 h-full text-sm font-mono border-r border-line transition-colors whitespace-nowrap ${
                  active === tab.id
                    ? "bg-surface text-text border-t-2 border-t-accent -mt-px"
                    : "text-muted hover:text-text hover:bg-surface/60"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${dotColor[tab.label] ?? "bg-muted"}`}
                />
                {tab.label}
              </a>
            ))}
          </nav>

          <div className="flex-1" />

          {/* resume button */}
          <a
            href={profile.resumeUrl}
            download
            className="hidden sm:inline-flex items-center gap-2 text-sm font-mono px-3 py-1.5 rounded border border-line text-muted hover:text-text hover:border-accent transition-colors"
          >
            <Download size={14} />
            resume.pdf
          </a>

          {/* mobile menu toggle */}
          <button
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden ml-auto p-2 text-muted hover:text-text"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* mobile menu */}
        {open && (
          <nav className="md:hidden flex flex-col border-t border-line py-2">
            {navTabs.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-2 py-2.5 text-sm font-mono rounded transition-colors ${
                  active === tab.id ? "text-text bg-surface" : "text-muted"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${dotColor[tab.label] ?? "bg-muted"}`}
                />
                {tab.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-2 px-2 py-2.5 text-sm font-mono text-muted"
            >
              <Download size={14} />
              resume.pdf
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
