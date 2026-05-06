/**
 * AppBar
 * --------------------------------
 *
 * Unified, framework-neutral chrome shared by the landing page and
 * every demo. Plain HTML + Tailwind utilities only — no MUI, no
 * shadcn primitives — so it sits naturally above either the MUI or
 * the shadcn `CrudPanelView` without dragging in an extra theme.
 *
 * On viewports below `md` the nav links collapse into a hamburger
 * menu that slides down beneath the bar. The brand mark, context
 * chip, and GitHub icon stay visible at every breakpoint.
 */

import { ReactNode, useEffect, useState } from 'react';
import { Github, Menu, Moon, Sun, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useThemeMode } from './ThemeProvider';

export const REPO_URL = 'https://github.com/louiskhenghao/crudx';

export type AppBarProps = {
  /** Short label rendered next to the brand mark — e.g. "GraphQL CRUD". */
  context?: string;
  /** Optional content rendered inline at the right of the bar. */
  actions?: ReactNode;
};

const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Demos', href: '/' },
  { label: 'Docs', href: '/docs' },
  { label: 'Playground', href: '/playground' },
];

export function AppBar({ context, actions }: AppBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { mode, toggle } = useThemeMode();
  const router = useRouter();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    const close = () => setMenuOpen(false);
    router.events.on('routeChangeStart', close);
    return () => router.events.off('routeChangeStart', close);
  }, [router.events]);

  // Lock body scroll while the menu is open and close on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const themeToggle = (
    <button
      type="button"
      aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={mode === 'dark'}
      onClick={toggle}
      className="grid h-8 w-8 shrink-0 place-items-center rounded-md text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
    >
      {mode === 'dark' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/85 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/85">
      <div className="mx-auto flex h-14 max-w-screen-lg items-center gap-2 px-3 sm:gap-3 sm:px-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-zinc-900 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-zinc-300"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-zinc-900 text-xs font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">
            cx
          </span>
          <span className="hidden text-base font-bold sm:inline">@crudx</span>
        </Link>
        {context ? (
          <span className="min-w-0 truncate rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
            {context}
          </span>
        ) : null}
        <div className="flex-1" />
        {actions ? <div className="hidden md:flex">{actions}</div> : null}

        {/* Inline nav — md and up */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {themeToggle}

        <a
          href={REPO_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-md text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
        >
          <Github className="h-4 w-4" />
        </a>

        {/* Hamburger — below md */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-md text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800 md:hidden"
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen ? (
        <div className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          <nav className="mx-auto flex max-w-screen-lg flex-col gap-1 px-3 py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2.5 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                {link.label}
              </Link>
            ))}
            {actions ? (
              <div className="flex flex-wrap items-center gap-2 px-2.5 pb-1 pt-2">
                {actions}
              </div>
            ) : null}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default AppBar;
