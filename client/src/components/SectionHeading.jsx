export default function SectionHeading({ file, title, subtitle }) {
  return (
    <div className="mb-10 sm:mb-12">
      <p className="font-mono text-sm text-muted">
        <span className="text-accent">//</span> {file}
      </p>
      <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-2 text-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted mt-3 max-w-xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
