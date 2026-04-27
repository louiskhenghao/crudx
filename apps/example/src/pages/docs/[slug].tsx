/**
 * Renders a single guide. Markdown comes in as a raw string (imported
 * via the `asset/source` webpack rule) and is rendered through
 * `react-markdown` with GFM tables/strikethrough/task-lists.
 */

import { ComponentPropsWithoutRef } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { AppBar, REPO_URL } from '../../components';
import { DOCS, DocMeta, DocSlug } from '../../data/docs';

/**
 * Map known markdown filenames to their in-app slug. We compare on
 * the bare filename (lowercased) so any depth of `./` / `../` prefix
 * resolves correctly. ADAPTERS.md (root orientation) and
 * libs/core/docs/adapters.md (deep guide) both land on the same
 * `/docs/adapters` route since they're the same conceptual destination.
 */
const DOC_FILENAME_TO_SLUG: Record<string, DocSlug> = {
  'getting-started.md': 'getting-started',
  'contributing.md': 'contributing',
  'library-setup.md': 'library-setup',
  'adapters.md': 'adapters',
};

type LinkResolution =
  | { kind: 'docs'; slug: DocSlug; fragment: string }
  | { kind: 'external'; href: string }
  | { kind: 'as-is'; href: string };

const resolveDocLink = (raw: string): LinkResolution => {
  if (/^(https?:|mailto:|tel:)/.test(raw) || raw.startsWith('#')) {
    return { kind: 'as-is', href: raw };
  }

  const [pathPart, hashPart] = raw.split('#');
  const fragment = hashPart ? `#${hashPart}` : '';
  const filename = pathPart.split('/').pop()?.toLowerCase() ?? '';

  const slug = DOC_FILENAME_TO_SLUG[filename];
  if (slug) return { kind: 'docs', slug, fragment };

  // Unknown markdown / source-code reference → punt to the repo so the
  // user lands somewhere useful instead of a 404.
  if (/\.(md|tsx?|jsx?|json|ya?ml)$/.test(filename)) {
    return { kind: 'external', href: REPO_URL };
  }

  return { kind: 'as-is', href: raw };
};

type Props = { meta: DocMeta };

const components: ComponentPropsWithoutRef<typeof ReactMarkdown>['components'] =
  {
    h1: (props) => (
      <h1
        className="mt-10 mb-4 text-3xl font-bold tracking-tight first:mt-0"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="mt-10 mb-3 border-b border-zinc-200 pb-2 text-2xl font-semibold"
        {...props}
      />
    ),
    h3: (props) => (
      <h3 className="mt-6 mb-2 text-xl font-semibold" {...props} />
    ),
    h4: (props) => (
      <h4
        className="mt-4 mb-2 text-base font-semibold uppercase tracking-wide text-zinc-700"
        {...props}
      />
    ),
    p: (props) => (
      <p className="my-4 leading-7 text-zinc-800" {...props} />
    ),
    a: ({ href, children, ...props }) => {
      if (!href) {
        return (
          <a
            className="text-blue-700 underline-offset-2 hover:underline"
            {...props}
          >
            {children}
          </a>
        );
      }

      const resolution = resolveDocLink(href);

      if (resolution.kind === 'docs') {
        return (
          <Link
            href={`/docs/${resolution.slug}${resolution.fragment}`}
            className="text-blue-700 underline-offset-2 hover:underline"
          >
            {children}
          </Link>
        );
      }

      const finalHref = resolution.href;
      const isExternal = /^https?:\/\//.test(finalHref);
      return (
        <a
          href={finalHref}
          className="text-blue-700 underline-offset-2 hover:underline"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer' : undefined}
          {...props}
        >
          {children}
        </a>
      );
    },
    ul: (props) => (
      <ul className="my-4 list-disc space-y-1 pl-6" {...props} />
    ),
    ol: (props) => (
      <ol className="my-4 list-decimal space-y-1 pl-6" {...props} />
    ),
    li: (props) => <li className="leading-7" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="my-4 border-l-4 border-zinc-300 bg-zinc-50 px-4 py-2 italic text-zinc-700"
        {...props}
      />
    ),
    hr: () => <hr className="my-8 border-zinc-200" />,
    table: (props) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm" {...props} />
      </div>
    ),
    th: (props) => (
      <th
        className="border-b-2 border-zinc-300 px-3 py-2 text-left font-semibold"
        {...props}
      />
    ),
    td: (props) => (
      <td className="border-b border-zinc-200 px-3 py-2 align-top" {...props} />
    ),
    code: ({ className, children, ...props }) => {
      // Inline code (no language class) renders compact.
      const isBlock = /^language-/.test(className ?? '');
      if (!isBlock) {
        return (
          <code
            className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.9em] text-zinc-800"
            {...props}
          >
            {children}
          </code>
        );
      }
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    pre: (props) => (
      <pre
        className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm leading-6 text-zinc-100"
        {...props}
      />
    ),
  };

export default function DocPage({ meta }: Props) {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <AppBar context="Docs" />
      <main className="mx-auto max-w-screen-md px-4 py-8">
        <Link
          href="/docs"
          className="inline-flex items-center gap-1 text-sm text-zinc-600 hover:text-zinc-900"
        >
          <ArrowLeft className="h-4 w-4" />
          All docs
        </Link>
        <article className="mt-4">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={components}
          >
            {meta.source}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Object.keys(DOCS).map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as DocSlug | undefined;
  const meta = slug ? DOCS[slug] : undefined;
  if (!meta) return { notFound: true };
  return { props: { meta } };
};
