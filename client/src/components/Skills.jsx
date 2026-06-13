import { skillGroups } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const dotClass = {
  accent: "bg-accent",
  add: "bg-add",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 px-4 sm:px-6 border-t border-line"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeading
            file="skills.json"
            title="Skills & Tools"
            subtitle="Technologies I reach for most often, grouped by where they fit in the stack."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="h-full rounded-lg border border-line bg-surface p-5 sm:p-6">
                <h3 className="font-display font-semibold text-lg flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${dotClass[group.accent]}`}
                  />
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs sm:text-sm text-text border border-line bg-surface-2 rounded px-2.5 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
