/**
 * Sandpack-hosted playground for a single preset. The `@crudx/*` deps
 * come from npm, so what runs in the iframe is whatever the registry
 * currently serves — the playground doubles as a smoke test for the
 * published artifacts.
 */

import { ArrowLeft } from 'lucide-react';
import { GetStaticPaths, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { AppBar, useThemeMode } from '../../components';
import { Preset, PRESETS, PresetSlug } from '../../data/playground-presets';

// Sandpack ships its own Monaco-style editor and pulls in a fair bit
// of code; load it client-side only so it doesn't bloat the initial
// HTML payload of the static export.
const Sandpack = dynamic(
  () => import('@codesandbox/sandpack-react').then((m) => m.Sandpack),
  { ssr: false }
);

type Props = { preset: Preset };

export default function PlaygroundSlugPage({ preset }: Props) {
  const { mode } = useThemeMode();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppBar context="Playground" />
      <main className="mx-auto max-w-screen-2xl px-4 py-6">
        <Link
          href="/playground"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All playgrounds
        </Link>

        <header className="mt-3 mb-5">
          <h1 className="text-2xl font-bold tracking-tight">{preset.title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{preset.description}</p>
        </header>

        <Sandpack
          template="react-ts"
          theme={mode}
          files={preset.files}
          customSetup={{ dependencies: preset.dependencies }}
          options={{
            showTabs: true,
            showLineNumbers: true,
            showInlineErrors: true,
            wrapContent: true,
            editorHeight: 640,
            editorWidthPercentage: 50,
          }}
        />
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Object.keys(PRESETS).map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as PresetSlug | undefined;
  const preset = slug ? PRESETS[slug] : undefined;
  if (!preset) return { notFound: true };
  return { props: { preset } };
};
