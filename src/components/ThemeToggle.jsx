import React, { useEffect, useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

const STORAGE_KEY = 'theme';
const THEME_COLORS = { light: '#f7f6f1', dark: '#0d1417' };
const darkQuery = () => window.matchMedia('(prefers-color-scheme: dark)');

// The theme lives on <html data-theme>, set before first paint by the inline script in index.html.
function subscribe(callback) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

const getTheme = () => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
}

function readStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function ThemeToggle({ showLabel = false, className = '' }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'light');
  const isDark = theme === 'dark';

  // Follow OS changes until the visitor makes an explicit choice.
  useEffect(() => {
    applyTheme(getTheme());
    const query = darkQuery();
    const onChange = (event) => {
      if (!readStoredTheme()) applyTheme(event.matches ? 'dark' : 'light');
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next = isDark ? 'light' : 'dark';
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode); the choice still applies for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label="Dark theme"
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`inline-flex items-center gap-2 rounded-xl border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary ${
        showLabel ? 'px-4 py-2.5 text-sm font-medium' : 'h-10 w-10 justify-center'
      } ${className}`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
      {showLabel && <span>{isDark ? 'Light theme' : 'Dark theme'}</span>}
    </button>
  );
}

export default ThemeToggle;
