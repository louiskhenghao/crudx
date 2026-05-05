/**
 * SourceView
 * --------------------------------
 *
 * Collapsible source-code panel with copy button. Used at the bottom
 * of each demo page so a developer can read (and steal) the exact
 * JSX that produced the surface they are looking at.
 *
 * The page imports its own file via the `?raw` resourceQuery webpack
 * rule (configured in `next.config.js`) and hands the resulting string
 * to this component.
 */

import { useState } from 'react';
import { Check, ChevronDown, Code2, Copy, ExternalLink } from 'lucide-react';

import { REPO_URL } from './AppBar';

export type SourceViewProps = {
  /** Raw source string. Imported via `import src from './page.tsx?raw'`. */
  source: string;
  /** Display filename, e.g. `apps/example/src/pages/test-crud-public-rest-shadcn.tsx`. */
  filename: string;
  /** Optional repo path used to build a "View on GitHub" link. */
  repoPath?: string;
  /** Start expanded if true. Defaults to false. */
  defaultOpen?: boolean;
};

export function SourceView({
  source,
  filename,
  repoPath,
  defaultOpen = false,
}: SourceViewProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(source);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore — clipboard might be unavailable in some browsers
    }
  };

  const githubHref = repoPath
    ? `${REPO_URL}/blob/main/${repoPath}`
    : undefined;

  const lineCount = source.split('\n').length;

  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 border-b border-zinc-200 bg-zinc-50 px-3 py-2 text-left transition-colors hover:bg-zinc-100"
      >
        <div className="flex min-w-0 items-center gap-2">
          <Code2 className="h-4 w-4 shrink-0 text-zinc-600" />
          <span className="truncate font-mono text-xs font-medium text-zinc-800">
            {filename}
          </span>
          <span className="hidden rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-[10px] text-zinc-700 sm:inline">
            {lineCount} lines
          </span>
        </div>
        <div className="flex items-center gap-1">
          {githubHref ? (
            <a
              href={githubHref}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex h-7 items-center gap-1 rounded px-2 text-[11px] font-medium text-zinc-700 hover:bg-zinc-200"
              title="Open on GitHub"
            >
              <ExternalLink className="h-3 w-3" />
              GitHub
            </a>
          ) : null}
          <span
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                handleCopy();
              }
            }}
            className="inline-flex h-7 cursor-pointer items-center gap-1 rounded px-2 text-[11px] font-medium text-zinc-700 hover:bg-zinc-200"
            title={copied ? 'Copied!' : 'Copy source'}
          >
            {copied ? (
              <Check className="h-3 w-3 text-emerald-600" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
            {copied ? 'Copied' : 'Copy'}
          </span>
          <ChevronDown
            className={`h-4 w-4 text-zinc-500 transition-transform ${
              open ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>
      {open ? (
        <div className="max-h-[520px] overflow-auto bg-zinc-950">
          <pre className="m-0 px-4 py-3 font-mono text-[12.5px] leading-[1.55] text-zinc-100">
            <code>{source}</code>
          </pre>
        </div>
      ) : (
        <div className="px-3 py-2 text-[11px] text-zinc-500">
          Click to expand the full source for this page.
        </div>
      )}
    </div>
  );
}

export default SourceView;
