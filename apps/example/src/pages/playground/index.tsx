/**
 * Playground landing. Lists every Sandpack preset that lives under
 * /playground/[slug] — each one fetches `@crudx/*` from npm so the
 * preview validates the actually-published artifact, not the workspace
 * source.
 */

import { ArrowRight, Layers, Network, PlayCircle, Server } from 'lucide-react';
import Link from 'next/link';

import { AppBar } from '../../components';
import {
  DemoKind,
  PRESET_ORDER,
  PRESETS,
  PresetSlug,
  UiKind,
} from '../../data/playground-presets';

const KIND_LABEL: Record<DemoKind, string> = {
  component: 'Component',
  crud: 'CRUD',
};

const UI_BADGE: Record<UiKind, { label: string; color: string }> = {
  mui: { label: 'MUI', color: '#1976D2' },
  shadcn: { label: 'shadcn', color: '#18181B' },
};

const ICONS: Record<PresetSlug, JSX.Element> = {
  'mui-table': <Layers className="h-5 w-5" />,
  'shadcn-table': <Layers className="h-5 w-5" />,
  'mui-crud': <Network className="h-5 w-5" />,
  'shadcn-crud': <Server className="h-5 w-5" />,
};

export default function PlaygroundIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppBar context="Playground" />
      <main className="mx-auto max-w-screen-md px-4 py-10">
        <header className="mb-8">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <PlayCircle className="h-3.5 w-3.5" />
            Live preview · published npm packages
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Playground</h1>
          <p className="mt-2 text-muted-foreground">
            Each preset boots a Sandpack sandbox that installs{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
              @crudx/*
            </code>{' '}
            from npm — so you're exercising the actually-published bundle, not
            the workspace source. Edit the code on the left, see the rendered
            output on the right.
          </p>
        </header>

        <ul className="grid gap-3 sm:grid-cols-2">
          {PRESET_ORDER.map((slug) => {
            const meta = PRESETS[slug];
            const ui = UI_BADGE[meta.ui];
            return (
              <li key={slug}>
                <Link
                  href={`/playground/${slug}`}
                  className="group flex h-full flex-col gap-3 rounded-xl border border-border p-5 transition hover:border-foreground/40 hover:bg-accent hover:text-accent-foreground"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-foreground text-background">
                      {ICONS[slug]}
                    </span>
                    <span className="flex items-center gap-2 text-xs font-medium">
                      <span
                        className="rounded-full px-2 py-0.5 text-white"
                        style={{ backgroundColor: ui.color }}
                      >
                        {ui.label}
                      </span>
                      <span className="rounded-full border border-border px-2 py-0.5 text-muted-foreground">
                        {KIND_LABEL[meta.kind]}
                      </span>
                    </span>
                  </div>
                  <span className="flex items-center gap-2">
                    <span className="text-base font-semibold">
                      {meta.title}
                    </span>
                    <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {meta.description}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-xs text-muted-foreground">
          Sandpack pulls dependencies from the public npm registry. If a preset
          fails to load, double-check that the matching{' '}
          <code className="rounded bg-muted px-1 py-0.5">@crudx/*</code>{' '}
          version has actually been published.
        </p>
      </main>
    </div>
  );
}
