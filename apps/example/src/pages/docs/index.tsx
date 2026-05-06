/**
 * Docs landing page. Lists every guide bundled into the example app —
 * each card links to a `/docs/[slug]` route that renders the
 * corresponding markdown source.
 */

import { ArrowRight, BookOpen, Hammer, Plug, Rocket, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { AppBar } from '../../components';
import { DOC_ORDER, DOCS, DocSlug } from '../../data/docs';

const ICONS: Record<DocSlug, JSX.Element> = {
  'getting-started': <Rocket className="h-5 w-5" />,
  skills: <Sparkles className="h-5 w-5" />,
  contributing: <BookOpen className="h-5 w-5" />,
  'library-setup': <Hammer className="h-5 w-5" />,
  adapters: <Plug className="h-5 w-5" />,
};

export default function DocsIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppBar context="Docs" />
      <main className="mx-auto max-w-screen-md px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
          <p className="mt-2 text-muted-foreground">
            Guides for using <code className="rounded bg-muted px-1.5 py-0.5 text-sm">@crudx</code> in your own app, contributing to this repo, and extending it.
          </p>
        </header>

        <ul className="space-y-3">
          {DOC_ORDER.map((slug) => {
            const meta = DOCS[slug];
            return (
              <li key={slug}>
                <Link
                  href={`/docs/${slug}`}
                  className="group flex items-start gap-4 rounded-xl border border-border p-5 transition hover:border-foreground/40 hover:bg-accent hover:text-accent-foreground"
                >
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-foreground text-background">
                    {ICONS[slug]}
                  </span>
                  <span className="flex-1">
                    <span className="flex items-center gap-2">
                      <span className="text-base font-semibold">{meta.title}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {meta.description}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
