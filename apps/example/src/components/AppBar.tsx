/**
 * AppBar
 * --------------------------------
 *
 * Unified, framework-neutral chrome shared by the landing page and
 * every demo. Plain HTML + Tailwind utilities only — no MUI, no
 * shadcn primitives — so it sits naturally above either the MUI or
 * the shadcn `CrudPanelView` without dragging in an extra theme.
 */

import { ReactNode } from 'react';
import { Github } from 'lucide-react';
import Link from 'next/link';

export const REPO_URL = 'https://github.com/louiskhenghao/crudx';

export type AppBarProps = {
  /** Short label rendered next to the brand mark — e.g. "GraphQL CRUD". */
  context?: string;
  /** Optional content rendered inline at the right of the bar. */
  actions?: ReactNode;
};

export function AppBar({ context, actions }: AppBarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-screen-lg items-center gap-3 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-zinc-900 hover:text-zinc-700"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-zinc-900 text-white text-xs font-bold">
            cx
          </span>
          <span className="text-base font-bold">@crudx</span>
        </Link>
        {context ? (
          <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600">
            {context}
          </span>
        ) : null}
        <div className="flex-1" />
        {actions}
        <Link
          href="/"
          className="rounded-md px-2.5 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
        >
          Demos
        </Link>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="grid h-8 w-8 place-items-center rounded-md text-zinc-900 hover:bg-zinc-100"
        >
          <Github className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

export default AppBar;
