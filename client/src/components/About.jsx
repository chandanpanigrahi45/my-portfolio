import { about } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function FactValue({ value }) {
  if (Array.isArray(value)) {
    return (
      <span className="text-text">
        [
        {value.map((v, i) => (
          <span key={v}>
            <span className="text-add">"{v}"</span>
            {i < value.length - 1 ? ", " : ""}
          </span>
        ))}
        ]
      </span>
    );
  }
  return <span className="text-add">"{value}"</span>;
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeading file="about.md" title="About" />
        </Reveal>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
          <Reveal>
            <div className="space-y-5 text-base sm:text-lg text-muted leading-relaxed">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 16)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-lg border border-line bg-surface overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-surface-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rm/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-add/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
                <span className="ml-3 font-mono text-xs text-muted">
                  profile.json
                </span>
              </div>
              <pre className="p-5 font-mono text-sm leading-relaxed overflow-x-auto">
                <code>
                  {"{\n"}
                  {about.facts.map((f, i) => (
                    <span key={f.key}>
                      {"  "}
                      <span className="text-accent">"{f.key}"</span>
                      {": "}
                      <FactValue value={f.value} />
                      {i < about.facts.length - 1 ? "," : ""}
                      {"\n"}
                    </span>
                  ))}
                  {"}"}
                </code>
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
