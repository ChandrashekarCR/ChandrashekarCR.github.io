import React from 'react';
import { Terminal } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { personalInfo } from '../data';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans page-shell">
      <div className="hero-ambient" aria-hidden="true" />
      <nav className="fixed w-full top-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-bold text-xl tracking-tighter text-primary flex items-center gap-2"
          >
            <Terminal size={20} />
            <span>chandra_shekar.sh</span>
          </Link>          <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary transition-colors'}>
              About
            </NavLink>
            <NavLink to="/experience" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary transition-colors'}>
              Experience
            </NavLink>
            <NavLink to="/education" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary transition-colors'}>
              Education
            </NavLink>
            <NavLink to="/skills" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary transition-colors'}>
              Skills
            </NavLink>
            <NavLink to="/publications" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary transition-colors'}>
              Publications
            </NavLink>
            <NavLink to="/more" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary transition-colors'}>
              More
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="pt-24 relative z-10">
        {children}
      </div>

      <footer className="text-center py-8 text-sm text-muted-foreground font-mono border-t border-border mt-20">
        <p>Deployed from GitHub Pages.</p>
        <p className="mt-2 text-foreground">© {new Date().getFullYear()} {personalInfo.name}</p>
      </footer>
    </div>
  );
}

export default Layout;
