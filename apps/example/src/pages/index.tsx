/**
 * Landing page for the @crudx example app.
 *
 * Plain HTML + Tailwind only — no MUI, no shadcn primitives — so the
 * page is framework-neutral and stays in sync with the unified
 * `AppBar` chrome shared by every demo.
 */

import { ReactNode } from 'react';
import { ArrowRight, ExternalLink, Network, Server } from 'lucide-react';
import Link from 'next/link';

import { AppBar, REPO_URL } from '../components';

/**
 * --------------------------
 * Visual theming per quadrant
 * --------------------------
 *
 * Each (transport, ui) combination gets its own colour pair so the
 * four cards read at a glance. Transport colour follows convention
 * (Apollo pink for GraphQL, amber for REST). UI colour distinguishes
 * MUI (Material blue) from shadcn (zinc/black).
 */
type Transport = 'GraphQL' | 'REST';
type Ui = 'MUI' | 'shadcn';

const TRANSPORT_COLOR: Record<Transport, string> = {
  GraphQL: '#E535AB', // Apollo pink
  REST: '#F76707', // amber-orange
};

const UI_COLOR: Record<Ui, string> = {
  MUI: '#1976D2', // Material blue
  shadcn: '#18181B', // zinc-900
};

type DemoCardProps = {
  badge: Transport;
  ui: Ui;
  title: string;
  tagline: string;
  packages: string[];
  href: string;
  icon: ReactNode;
  endpoint: string;
};

const DEMOS: DemoCardProps[] = [
  {
    badge: 'GraphQL',
    ui: 'MUI',
    title: 'GraphQL · Material UI',
    tagline:
      'Apollo Client wired through @crudx/graphql against the public GraphQLZero API. Read, create, update, delete — all live, no auth.',
    packages: ['@crudx/core', '@crudx/graphql', '@crudx/mui'],
    href: '/test-crud-public-graphql',
    icon: <Network className="h-7 w-7" />,
    endpoint: 'graphqlzero.almansi.me/api',
  },
  {
    badge: 'GraphQL',
    ui: 'shadcn',
    title: 'GraphQL · shadcn/ui',
    tagline:
      'Same GraphQLZero CRUD flow, rendered through @crudx/shadcn (Tailwind + Radix). API-compatible with the MUI variant.',
    packages: ['@crudx/core', '@crudx/graphql', '@crudx/shadcn'],
    href: '/test-crud-public-graphql-shadcn',
    icon: <Network className="h-7 w-7" />,
    endpoint: 'graphqlzero.almansi.me/api',
  },
  {
    badge: 'REST',
    ui: 'MUI',
    title: 'REST · Material UI',
    tagline:
      'TanStack Query wired through @crudx/rest against the public JSONPlaceholder API. Mutations auto-invalidate the list cache via the adapter.',
    packages: ['@crudx/core', '@crudx/rest', '@crudx/mui'],
    href: '/test-crud-public-rest',
    icon: <Server className="h-7 w-7" />,
    endpoint: 'jsonplaceholder.typicode.com',
  },
  {
    badge: 'REST',
    ui: 'shadcn',
    title: 'REST · shadcn/ui',
    tagline:
      'Same JSONPlaceholder CRUD flow, rendered through @crudx/shadcn (Tailwind + Radix). Drop-in alternative to the MUI variant.',
    packages: ['@crudx/core', '@crudx/rest', '@crudx/shadcn'],
    href: '/test-crud-public-rest-shadcn',
    icon: <Server className="h-7 w-7" />,
    endpoint: 'jsonplaceholder.typicode.com',
  },
];

const PACKAGES: { name: string; description: string }[] = [
  {
    name: '@crudx/core',
    description:
      'Transport-agnostic CRUD orchestration: schema slots, paging strategies, mutation callbacks. No transport dependency.',
  },
  {
    name: '@crudx/common',
    description:
      'Shared hooks and utilities (pagination, row selection, formatting) consumed by the UI packages.',
  },
  {
    name: '@crudx/graphql',
    description:
      'GraphQL transport adapter on top of Apollo Client. Identity helpers + Apollo-narrowed type aliases.',
  },
  {
    name: '@crudx/rest',
    description:
      'REST transport adapter on top of TanStack Query. Cache invalidation, offset / cursor pagination presets.',
  },
  {
    name: '@crudx/mui',
    description:
      'Material UI + Emotion implementation of the CRUD surface (CrudPanelView, CrudTableView, …).',
  },
  {
    name: '@crudx/shadcn',
    description:
      'Tailwind + Radix (shadcn-style) implementation of the same surface; API-compatible with @crudx/mui.',
  },
];

/**
 * Tiny mock UI rendered inside each demo card so the visual identity
 * of the chosen UI library reads at a glance — rounded blue MUI
 * controls vs. sharp zinc shadcn controls.
 */
function UiPreview({ ui, transport }: { ui: Ui; transport: Transport }) {
  const transportColor = TRANSPORT_COLOR[transport];
  const uiColor = UI_COLOR[ui];

  if (ui === 'MUI') {
    return (
      <div
        className="flex flex-col gap-2 rounded-lg border p-3"
        style={{
          borderColor: `${uiColor}33`,
          backgroundColor: `${uiColor}0A`,
        }}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-1">
            <span
              className="h-2 w-9 rounded-full"
              style={{ backgroundColor: `${uiColor}66` }}
            />
            <span
              className="h-2 w-6 rounded-full"
              style={{ backgroundColor: `${uiColor}33` }}
            />
          </div>
          <span
            className="rounded-full px-2 py-0.5 text-[10px] font-bold text-white shadow"
            style={{ backgroundColor: uiColor }}
          >
            CREATE
          </span>
        </div>
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full border"
              style={{
                backgroundColor: `${transportColor}2E`,
                borderColor: `${transportColor}73`,
              }}
            />
            <span
              className="h-1.5 flex-1 rounded-full"
              style={{ backgroundColor: `${uiColor}1F` }}
            />
            <span
              className="h-1.5 w-8 rounded-full"
              style={{ backgroundColor: `${uiColor}2E` }}
            />
          </div>
        ))}
      </div>
    );
  }

  // shadcn variant — sharper corners, monospace, zinc tones
  return (
    <div
      className="flex flex-col gap-2 rounded-md border p-3 font-mono"
      style={{
        borderColor: `${uiColor}2E`,
        backgroundColor: `${uiColor}08`,
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-1">
          <span
            className="h-2 w-9 rounded-sm"
            style={{ backgroundColor: `${uiColor}99` }}
          />
          <span
            className="h-2 w-6 rounded-sm"
            style={{ backgroundColor: `${uiColor}40` }}
          />
        </div>
        <span
          className="rounded-sm px-2 py-0.5 text-[10px] font-semibold text-white"
          style={{ backgroundColor: uiColor }}
        >
          + create
        </span>
      </div>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`flex items-center gap-2 ${
            i === 0 ? '' : 'border-t border-dashed pt-2'
          }`}
          style={i === 0 ? undefined : { borderColor: `${uiColor}1F` }}
        >
          <span
            className="h-3 w-3 rounded-sm border"
            style={{
              backgroundColor: `${transportColor}2E`,
              borderColor: `${transportColor}80`,
            }}
          />
          <span
            className="h-1.5 flex-1 rounded-sm"
            style={{ backgroundColor: `${uiColor}2E` }}
          />
          <span
            className="h-1.5 w-8 rounded-sm"
            style={{ backgroundColor: `${uiColor}52` }}
          />
        </div>
      ))}
    </div>
  );
}

function DemoCard(props: DemoCardProps) {
  const { badge, ui, title, tagline, packages, href, icon, endpoint } = props;
  const transportColor = TRANSPORT_COLOR[badge];
  const uiColor = UI_COLOR[ui];
  const isShadcn = ui === 'shadcn';

  return (
    <Link
      href={href}
      className={`group relative flex h-full flex-col overflow-hidden border bg-white p-5 pt-6 transition-all hover:-translate-y-0.5 hover:shadow-lg ${
        isShadcn ? 'rounded-md' : 'rounded-xl'
      }`}
      style={{
        borderColor: `${transportColor}40`,
        boxShadow: undefined,
      }}
    >
      {/* Top gradient stripe — transport color → UI color */}
      <span
        className="absolute inset-x-0 top-0 h-1"
        style={{
          background: `linear-gradient(90deg, ${transportColor} 0%, ${uiColor} 100%)`,
        }}
      />

      {/* Header row — icon + tags + title */}
      <div className="flex items-center gap-3">
        <div
          className={`grid place-items-center ${
            isShadcn ? 'h-12 w-12 rounded-md' : 'h-12 w-12 rounded-lg'
          }`}
          style={{
            backgroundColor: `${transportColor}1F`,
            color: transportColor,
          }}
        >
          {icon}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span
              className="rounded-full px-2 py-0.5 text-[11px] font-bold text-white"
              style={{ backgroundColor: transportColor }}
            >
              {badge}
            </span>
            <span
              className={`px-2 py-0.5 font-mono text-[11px] font-medium ${
                isShadcn
                  ? 'rounded-sm border border-dashed'
                  : 'rounded-full border'
              }`}
              style={{
                color: uiColor,
                borderColor: uiColor,
                backgroundColor: `${uiColor}0A`,
              }}
            >
              {ui}
            </span>
          </div>
          <div
            className={`mt-1 text-base font-bold text-zinc-900 ${
              isShadcn ? 'font-mono' : ''
            }`}
          >
            {title}
          </div>
        </div>
      </div>

      {/* UI preview tile */}
      <div className="mt-4">
        <UiPreview ui={ui} transport={badge} />
      </div>

      {/* Tagline */}
      <p className="mt-3 text-sm text-zinc-600">{tagline}</p>

      <div className="flex-1" />

      {/* Package chips */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {packages.map((p) => (
          <span
            key={p}
            className={`px-2 py-0.5 font-mono text-[11px] text-zinc-600 ${
              isShadcn
                ? 'rounded-sm border border-zinc-200'
                : 'rounded-full border border-zinc-200'
            }`}
          >
            {p}
          </span>
        ))}
      </div>

      {/* Footer row — endpoint + open demo */}
      <div className="mt-3 flex items-center justify-between">
        <span className="font-mono text-xs text-zinc-500">{endpoint}</span>
        <span
          className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide"
          style={{ color: transportColor }}
        >
          Open demo
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function Index() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <AppBar />
      <div className="mx-auto max-w-screen-lg px-4 py-12 md:py-14">
        {/* HERO */}
        <section className="mb-12 md:mb-20">
          <span className="inline-block rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700">
            Transport-agnostic CRUD primitives for React
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            CRUD apps without the wiring tax.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-600">
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-base">
              @crudx
            </code>{' '}
            gives you a tiny core that orchestrates list, detail, create,
            update, and delete operations — and pluggable transport adapters so
            you can ship the same UI on top of GraphQL, REST, or anything you
            wire up next.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/test-crud-public-graphql"
              className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: TRANSPORT_COLOR.GraphQL }}
            >
              Try the GraphQL demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/test-crud-public-rest"
              className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: TRANSPORT_COLOR.REST }}
            >
              Try the REST demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              View on GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* DEMO CARDS */}
        <section className="mb-12 md:mb-20">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Live demos
          </div>
          <h2 className="mt-1 text-2xl font-bold md:text-3xl">
            Pick your transport, pick your UI
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            The same CRUD orchestration, four entry points: GraphQL or REST,
            Material UI or shadcn/ui — fully interchangeable.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {DEMOS.map((d) => (
              <DemoCard key={d.href} {...d} />
            ))}
          </div>
        </section>

        {/* PACKAGES */}
        <section className="mb-12 md:mb-20">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Packages
          </div>
          <h2 className="mt-1 text-2xl font-bold md:text-3xl">
            Six packages, one mental model
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-lg border border-zinc-200 bg-white p-4"
              >
                <div className="font-mono text-sm font-bold text-zinc-900">
                  {pkg.name}
                </div>
                <p className="mt-2 text-sm text-zinc-600">{pkg.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="flex flex-wrap justify-between gap-2 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
          <div>
            MIT licensed · maintained by{' '}
            <a
              href="https://github.com/louiskhenghao"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-700 hover:underline"
            >
              louiskhenghao
            </a>
          </div>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-700 hover:underline"
          >
            github.com/louiskhenghao/crudx
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Index;
