import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { GitBranch, Link2, Mail } from 'lucide-react';
import { navLinks, personalInfo } from '../data';
import ContactCTA from './ContactCTA';

const navLinkClass = ({ isActive }) =>
  `relative px-1 py-1 transition-colors ${
    isActive
      ? 'text-foreground after:absolute after:inset-x-1 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary'
      : 'text-muted-foreground hover:text-foreground'
  }`;

function BrandMark() {
  return (
    <span className="grid h-9 w-9 grid-cols-2 grid-rows-2 overflow-hidden rounded-lg shadow-sm" aria-hidden="true">
      <span className="bg-base-a" />
      <span className="bg-base-c" />
      <span className="bg-base-g" />
      <span className="bg-base-t" />
    </span>
  );
}

function Layout({ children }) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans page-shell">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] btn btn-primary">
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <BrandMark />
            <span className="leading-tight">
              <span className="block font-display text-base font-bold tracking-tight">{personalInfo.name}</span>
              <span className="block font-mono text-[11px] text-muted-foreground">bioinformatics engineering</span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="btn btn-primary hidden lg:inline-flex py-2!">
            <Mail size={16} /> Contact me
          </Link>
        </div>
      </header>

      <main id="main" className="pt-16 relative z-10">
        {children}
      </main>

      {pathname !== '/contact' && <ContactCTA />}

      <footer className="border-t border-border bg-card/60">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display font-bold">{personalInfo.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {personalInfo.role} · {personalInfo.location}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href={`mailto:${personalInfo.email}`} className="chip">
              <Mail size={13} /> Email
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="chip">
              <Link2 size={13} /> LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="chip">
              <GitBranch size={13} /> GitHub
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-5 sm:px-6 pb-8 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name} · Built with React &amp; deployed on GitHub Pages
        </div>
      </footer>
    </div>
  );
}

export default Layout;
