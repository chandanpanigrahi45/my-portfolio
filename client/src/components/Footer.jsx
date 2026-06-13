import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Built with React, Node.js &amp; Express.</p>
      </div>
    </footer>
  );
}
