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
 * Tokeniser — TS / TSX
 * --------------------------
 *
 * Pragmatic, regex-based. Not a real parser — but covers the cases
 * we need for the demo pages (keywords, types, strings, numbers,
 * comments, JSX tags, JSX attribute names).
 */
type TokenKind =
  | 'comment'
  | 'string'
  | 'number'
  | 'boolean'
  | 'keyword'
  | 'type'
  | 'jsx-tag'
  | 'jsx-attr'
  | 'punctuation'
  | 'identifier'
  | 'whitespace'
  | 'plain';

type Token = { kind: TokenKind; value: string };

const TOKEN_CLASS: Record<TokenKind, string> = {
  comment: 'text-zinc-500 italic',
  string: 'text-emerald-300',
  number: 'text-orange-300',
  boolean: 'text-orange-300',
  keyword: 'text-violet-300',
  type: 'text-sky-300',
  'jsx-tag': 'text-rose-300',
  'jsx-attr': 'text-amber-200',
  punctuation: 'text-zinc-400',
  identifier: 'text-zinc-100',
  whitespace: '',
  plain: 'text-zinc-100',
};

const KEYWORDS = new Set([
  'as',
  'async',
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'declare',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'export',
  'extends',
  'finally',
  'for',
  'from',
  'function',
  'if',
  'implements',
  'import',
  'in',
  'instanceof',
  'interface',
  'let',
  'new',
  'of',
  'public',
  'private',
  'protected',
  'readonly',
  'return',
  'static',
  'super',
  'switch',
  'this',
  'throw',
  'try',
  'type',
  'typeof',
  'undefined',
  'var',
  'void',
  'while',
  'yield',
]);

const BUILTIN_TYPES = new Set([
  'any',
  'bigint',
  'boolean',
  'never',
  'null',
  'number',
  'object',
  'Promise',
  'Record',
  'string',
  'symbol',
  'unknown',
  'Array',
  'ReadonlyArray',
  'Partial',
  'Required',
  'Readonly',
  'Pick',
  'Omit',
  'Exclude',
  'Extract',
]);

const BOOLEAN_LITERALS = new Set(['true', 'false', 'null']);

function tokenize(source: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  const n = source.length;

  // Track whether the previous *non-whitespace* token suggests we're at a
  // position where `<` likely opens a JSX tag (e.g. after `(`, `=`, `return`).
  let prevSig: Token | null = null;
  const setPrev = (tok: Token) => {
    if (tok.kind !== 'whitespace') prevSig = tok;
  };

  const expectsJsx = () => {
    if (!prevSig) return true;
    if (prevSig.kind === 'punctuation') {
      return /[(,=>{}[;:?&|!]/.test(prevSig.value);
    }
    if (prevSig.kind === 'keyword') {
      return /^(return|yield|await|in|of|typeof|void|delete|new|throw)$/.test(
        prevSig.value
      );
    }
    return false;
  };

  while (i < n) {
    const ch = source[i];
    const next = source[i + 1];

    // Block comment
    if (ch === '/' && next === '*') {
      let j = i + 2;
      while (j < n && !(source[j] === '*' && source[j + 1] === '/')) j += 1;
      j = Math.min(j + 2, n);
      const tok: Token = { kind: 'comment', value: source.slice(i, j) };
      tokens.push(tok);
      setPrev(tok);
      i = j;
      continue;
    }

    // Line comment
    if (ch === '/' && next === '/') {
      let j = i + 2;
      while (j < n && source[j] !== '\n') j += 1;
      const tok: Token = { kind: 'comment', value: source.slice(i, j) };
      tokens.push(tok);
      setPrev(tok);
      i = j;
      continue;
    }

    // String literals (', ", `)
    if (ch === '"' || ch === "'" || ch === '`') {
      const quote = ch;
      let j = i + 1;
      while (j < n) {
        if (source[j] === '\\') {
          j += 2;
          continue;
        }
        if (source[j] === quote) {
          j += 1;
          break;
        }
        if (quote !== '`' && source[j] === '\n') break;
        j += 1;
      }
      const tok: Token = { kind: 'string', value: source.slice(i, j) };
      tokens.push(tok);
      setPrev(tok);
      i = j;
      continue;
    }

    // Whitespace
    if (/\s/.test(ch)) {
      let j = i;
      while (j < n && /\s/.test(source[j])) j += 1;
      const tok: Token = { kind: 'whitespace', value: source.slice(i, j) };
      tokens.push(tok);
      i = j;
      continue;
    }

    // Number
    if (/[0-9]/.test(ch)) {
      let j = i;
      while (j < n && /[0-9._eExX+\-a-fA-F]/.test(source[j])) j += 1;
      const tok: Token = { kind: 'number', value: source.slice(i, j) };
      tokens.push(tok);
      setPrev(tok);
      i = j;
      continue;
    }

    // JSX-ish tag: `<Identifier`, `</Identifier`, `<Identifier.Sub`
    if (ch === '<' && expectsJsx() && /[A-Za-z/]/.test(next ?? '')) {
      let j = i + 1;
      if (source[j] === '/') j += 1;
      const start = j;
      while (j < n && /[A-Za-z0-9._]/.test(source[j])) j += 1;
      if (j > start) {
        // Push the `<` (or `</`) as punctuation and the name as jsx-tag
        const open: Token = {
          kind: 'punctuation',
          value: source.slice(i, start),
        };
        const name: Token = { kind: 'jsx-tag', value: source.slice(start, j) };
        tokens.push(open, name);
        setPrev(name);
        i = j;
        continue;
      }
    }

    // Identifier / keyword
    if (/[A-Za-z_$]/.test(ch)) {
      let j = i;
      while (j < n && /[A-Za-z0-9_$]/.test(source[j])) j += 1;
      const word = source.slice(i, j);

      let kind: TokenKind = 'identifier';
      if (KEYWORDS.has(word)) kind = 'keyword';
      else if (BOOLEAN_LITERALS.has(word)) kind = 'boolean';
      else if (BUILTIN_TYPES.has(word)) kind = 'type';

      // JSX attribute name: identifier immediately followed by `=` inside a
      // JSX tag context. We approximate by looking ahead past whitespace.
      if (kind === 'identifier' && source[j] === '=') {
        // Only treat as jsx-attr if we're after a jsx-tag or another jsx-attr
        const recent = [...tokens]
          .reverse()
          .find((t) => t.kind !== 'whitespace');
        if (
          recent &&
          (recent.kind === 'jsx-tag' ||
            recent.kind === 'jsx-attr' ||
            recent.kind === 'string')
        ) {
          kind = 'jsx-attr';
        }
      }

      const tok: Token = { kind, value: word };
      tokens.push(tok);
      setPrev(tok);
      i = j;
      continue;
    }

    // Punctuation (single char)
    const tok: Token = { kind: 'punctuation', value: ch };
    tokens.push(tok);
    setPrev(tok);
    i += 1;
  }

  return tokens;
}

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
      className="inline-flex h-8 items-center gap-1.5 rounded-md border border-zinc-300 bg-white px-2.5 text-xs font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
      title="View page source"
    >
      <Code2 className="h-3.5 w-3.5" />
      View source
      <span className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[10px] text-zinc-600">
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
