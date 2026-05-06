/**
 * SourceView
 * --------------------------------
 *
 * Slide-in drawer that shows the raw source code of the current
 * demo page so a developer can read (and steal) the exact JSX that
 * produced the surface they are looking at. Includes a hand-rolled
 * TypeScript / JSX tokeniser for syntax highlighting and a copy
 * button.
 *
 * Source is loaded via `getStaticProps` reading the file with `fs`
 * — that guarantees we render the original `.tsx` source, not the
 * compiled JS that Next.js's SWC pipeline would otherwise emit.
 */

import {
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Check, Code2, Copy, ExternalLink, X } from 'lucide-react';

import { tokenize, TOKEN_CLASS } from '../lib/syntax';
import { REPO_URL } from './AppBar';

export type SourceViewProps = {
  /** Raw source string. Loaded via `getStaticProps` + `fs.readFileSync`. */
  source: string;
  /** Display filename, e.g. `apps/example/src/pages/test-crud-public-rest-shadcn.tsx`. */
  filename: string;
  /** Optional repo path used to build a "View on GitHub" link. */
  repoPath?: string;
  /** Optional render slot for the open-button. Defaults to a pill button. */
  trigger?: (open: () => void) => ReactNode;
};

/**
 * --------------------------
 * Drawer
 * --------------------------
 */
export function SourceView({
  source,
  filename,
  repoPath,
  trigger,
}: SourceViewProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(source);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore — clipboard might be unavailable in some browsers
    }
  }, [source]);

  // Lock body scroll while the drawer is open and close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const tokens = useMemo(() => tokenize(source ?? ''), [source]);

  const lineCount = useMemo(() => (source ?? '').split('\n').length, [source]);

  const githubHref = repoPath
    ? `${REPO_URL}/blob/main/${repoPath}`
    : undefined;

  const triggerNode = trigger ? (
    trigger(() => setOpen(true))
  ) : (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="inline-flex h-8 items-center gap-1.5 rounded-md border border-zinc-300 bg-white px-2.5 text-xs font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
      title="View page source"
    >
      <Code2 className="h-3.5 w-3.5" />
      View source
      <span className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
        {lineCount}L
      </span>
    </button>
  );

  return (
    <Fragment>
      {triggerNode}

      {open ? (
        <div className="fixed inset-0 z-[60] flex">
          {/* Backdrop */}
          <div
            className="flex-1 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          {/* Panel */}
          <div className="flex h-full w-full max-w-[min(960px,95vw)] flex-col bg-zinc-950 text-zinc-100 shadow-2xl">
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-zinc-800 px-4 py-3">
              <div className="flex min-w-0 items-center gap-2">
                <Code2 className="h-4 w-4 shrink-0 text-zinc-400" />
                <span className="truncate font-mono text-xs font-medium text-zinc-200">
                  {filename}
                </span>
                <span className="hidden rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400 sm:inline">
                  {lineCount} lines
                </span>
              </div>
              <div className="flex items-center gap-1">
                {githubHref ? (
                  <a
                    href={githubHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-7 items-center gap-1 rounded px-2 text-[11px] font-medium text-zinc-300 hover:bg-zinc-800"
                    title="Open on GitHub"
                  >
                    <ExternalLink className="h-3 w-3" />
                    GitHub
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex h-7 items-center gap-1 rounded px-2 text-[11px] font-medium text-zinc-300 hover:bg-zinc-800"
                  title={copied ? 'Copied!' : 'Copy source'}
                >
                  {copied ? (
                    <Check className="h-3 w-3 text-emerald-400" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  {copied ? 'Copied' : 'Copy'}
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-7 w-7 place-items-center rounded text-zinc-300 hover:bg-zinc-800"
                  aria-label="Close"
                  title="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-auto">
              <pre className="m-0 px-4 py-3 font-mono text-[12.5px] leading-[1.6]">
                <code>
                  {tokens.map((tok, idx) =>
                    tok.kind === 'whitespace' ? (
                      <Fragment key={idx}>{tok.value}</Fragment>
                    ) : (
                      <span key={idx} className={TOKEN_CLASS[tok.kind]}>
                        {tok.value}
                      </span>
                    )
                  )}
                </code>
              </pre>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

export default SourceView;
