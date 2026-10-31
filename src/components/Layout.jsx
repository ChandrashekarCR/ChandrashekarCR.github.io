import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { GitBranch, Link2, Mail, Menu, X } from 'lucide-react';
import { navLinks, personalInfo } from '../data';
import ContactCTA from './ContactCTA';
import ThemeToggle from './ThemeToggle';

const navLinkClass = ({ isActive }) =>
  `relative px-1 py-1 transition-colors ${
    isActive
      ? 'text-foreground after:absolute after:inset-x-1 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary'
      : 'text-muted-foreground hover:text-foreground'
  }`;

function BrandMark() {
  return (
    <span className="grid h-9 w-9 shrink-0 grid-cols-2 grid-rows-2 overflow-hidden rounded-lg shadow-sm" aria-hidden="true">
      <span className="bg-base-a" />
      <span className="bg-base-c" />
      <span className="bg-base-g" />
      <span className="bg-base-t" />
    </span>
  );
}

function Layout({ children }) {
  const { pathname } = useLocation();
  // The menu remembers the page it was opened on, so navigating closes it.
  const [menuPath, setMenuPath] = useState(null);
  const menuOpen = menuPath === pathname;
  const closeMenu = () => setMenuPath(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuPath(null);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans page-shell">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] btn btn-primary">
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
          <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <BrandMark />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-sm sm:text-base font-bold tracking-tight">
                <span className="min-[400px]:hidden">{personalInfo.name.split(' ')[0]}</span>
                <span className="hidden min-[400px]:inline">{personalInfo.name}</span>
              </span>
              <span className="hidden sm:block font-mono text-[11px] text-muted-foreground">bioinformatics engineering</span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <Link to="/contact" className="btn btn-primary py-2! px-3! text-sm sm:px-4!">
              <Mail size={16} /> <span className="hidden sm:inline">Contact me</span>
              <span className="sm:hidden">Contact</span>
            </Link>
            <button
              type="button"
              className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-foreground"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuPath(menuOpen ? null : pathname)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="lg:hidden border-t border-border bg-background animate-fade-in-up [animation-duration:0.25s] max-h-[calc(100dvh-4rem)] overflow-y-auto"
          >
            <ul className="max-w-6xl mx-auto px-5 sm:px-6 py-4 grid gap-1">
              {[{ to: '/', label: 'Home' }, ...navLinks, { to: '/contact', label: 'Contact' }].map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                        isActive ? 'bg-secondary text-primary' : 'text-foreground hover:bg-card'
                      }`
                    }
                  >
                    {link.label}
                    <span className="font-mono text-xs text-muted-foreground">{link.to === '/' ? '~' : link.to}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="max-w-6xl mx-auto px-5 sm:px-6 pb-4 sm:hidden">
              <ThemeToggle showLabel className="w-full justify-center" />
            </div>
            <div className="max-w-6xl mx-auto px-5 sm:px-6 pb-6 flex flex-wrap gap-2">
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
          </nav>
        )}
      </header>

      {menuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={-1}
          className="lg:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
          onClick={closeMenu}
        />
      )}

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
