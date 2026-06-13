import { experience } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 px-4 sm:px-6 border-t border-line"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeading
            file="experience.log"
            title="Experience"
            subtitle="A quick log of where I've worked and what I focused on."
          />
        </Reveal>

        <div className="relative">
          {/* vertical line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-line"
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {experience.map((item, i) => (
              <Reveal key={item.role + item.company} delay={i * 100}>
                <li className="relative pl-8">
                  <span
                    className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-ink border-2 border-accent"
                    aria-hidden="true"
                  />
                  <p className="font-mono text-xs sm:text-sm text-muted">
                    {item.range}
                  </p>
                  <h3 className="font-display font-semibold text-lg sm:text-xl mt-1">
                    {item.role}{" "}
                    <span className="text-muted font-normal">
                      @ {item.company}
                    </span>
                  </h3>
                  <p className="text-muted mt-2 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
