import { useInView } from "../hooks/useInView";

/**
 * Wraps content and fades/slides it in once it scrolls into view.
 * `delay` is in milliseconds, useful for staggering lists.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
