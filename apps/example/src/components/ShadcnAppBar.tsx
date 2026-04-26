/**
 * ShadcnAppBar
 * --------------------------------
 *
 * Tailwind / shadcn-styled twin of `DemoAppBar` for use on demo pages
 * that render via `@crudx/shadcn`. Uses only raw HTML elements +
 * Tailwind classes so it shares no MUI dependency with the rest of
 * the example app.
 */

import { ReactNode } from 'react';
import { Github } from 'lucide-react';
import Link from 'next/link';

import { REPO_URL } from './DemoAppBar';

export type ShadcnAppBarProps = {
  /** Short label rendered next to the brand mark — e.g. "GraphQL CRUD". */
  context?: string;
  /** Optional content rendered inline at the right of the bar. */
  actions?: ReactNode;
};

export function ShadcnAppBar({ context, actions }: ShadcnAppBarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 items-center gap-3 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground hover:text-foreground/90"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground text-xs font-bold">
            cx
          </span>
          <span className="text-base font-bold">@crudx</span>
        </Link>
        {context ? (
          <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
            {context}
          </span>
        ) : null}
        <div className="flex-1" />
        {actions}
        <Link
          href="/"
          className="rounded-md px-2.5 py-1.5 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
        >
          Demos
        </Link>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="grid h-8 w-8 place-items-center rounded-md text-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <Github className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

export default ShadcnAppBar;
