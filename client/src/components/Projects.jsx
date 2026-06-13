import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const statusStyles = {
  shipped: "text-add border-add/30 bg-add-soft",
  "in-progress": "text-accent border-accent/30 bg-accent-soft",
};

const statusLabel = {
  shipped: "+ shipped",
  "in-progress": "~ in progress",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6 border-t border-line"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeading
            file="projects/"
            title="Selected Projects"
            subtitle="A few things I've built recently — see the README in each repo for setup details."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <article className="h-full flex flex-col rounded-lg border border-line bg-surface p-5 sm:p-6 hover:border-accent/40 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-semibold text-lg sm:text-xl">
                    {project.title}
                  </h3>
                  <span
                    className={`shrink-0 font-mono text-xs border rounded-full px-2 py-0.5 ${statusStyles[project.status]}`}
                  >
                    {statusLabel[project.status]}
                  </span>
                </div>

                <p className="text-muted text-sm sm:text-base mt-3 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-muted border border-line rounded px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-5 pt-4 border-t border-line font-mono text-sm">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-text hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-text hover:text-accent transition-colors"
                  >
                    <GithubIcon size={14} />
                    Source
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
