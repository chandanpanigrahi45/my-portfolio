import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import { profile } from "../data/portfolioData";
import Reveal from "./Reveal";

const socialIcons = { github: GithubIcon, linkedin: LinkedinIcon, twitter: TwitterIcon };

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 bg-grid bg-repeat bg-top"
    >
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* left column */}
        <Reveal>
          <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-add bg-add-soft border border-add/30 rounded-full px-3 py-1">
            <span className="text-add">+</span> {profile.version} released
          </span>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mt-5 text-text">
            {profile.name}
          </h1>
          <p className="font-mono text-accent text-base sm:text-lg mt-3">
            {profile.role}
          </p>
          <p className="text-muted text-base sm:text-lg mt-5 max-w-md leading-relaxed">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-mono text-sm bg-accent text-ink font-medium px-4 py-2.5 rounded-md hover:opacity-90 transition-opacity"
            >
              view ./projects
              <ArrowRight size={15} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 font-mono text-sm border border-line text-text px-4 py-2.5 rounded-md hover:border-accent transition-colors"
            >
              <Download size={15} />
              resume.pdf
            </a>
          </div>

          <div className="flex items-center gap-4 mt-8">
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
        </Reveal>

        {/* right column - terminal card */}
        <Reveal delay={150}>
          <div className="rounded-lg border border-line bg-surface shadow-2xl shadow-black/40 overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line bg-surface-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rm/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-add/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
              <span className="ml-3 font-mono text-xs text-muted">
                zsh — whoami
              </span>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed">
              <p>
                <span className="text-accent">$</span>{" "}
                <span className="text-text">whoami</span>
              </p>
              <p className="text-add mt-1">{`> ${profile.name}`}</p>
              <p className="text-add">{`> ${profile.role}`}</p>

              <p className="mt-4">
                <span className="text-accent">$</span>{" "}
                <span className="text-text">cat status.txt</span>
              </p>
              <p className="text-add mt-1">{`> ${profile.availability}`}</p>
              <p className="text-add">{`> location: ${profile.location}`}</p>

              <p className="mt-4">
                <span className="text-accent">$</span>{" "}
                <span className="text-text cursor-blink"></span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
