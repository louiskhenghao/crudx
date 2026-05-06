/**
 * JsonView
 * --------------------------------
 *
 * Framework-neutral JSON code panel used inside `renderDetailsView`
 * across every demo page (MUI and shadcn alike). Plain HTML + Tailwind
 * — no MUI, no shadcn primitives — so the same component works on
 * either rendering surface.
 *
 * Hand-rolled tokeniser; no syntax-highlighter dep.
 */

import { Fragment, ReactNode, useMemo, useState } from 'react';
import { Check, Copy } from 'lucide-react';

export type JsonViewProps = {
  /** The value to render. Anything `JSON.stringify` accepts. */
  data: unknown;
  /** Loading state — shows a spinner instead of the JSON. */
  loading?: boolean;
  /** Extra header content rendered to the right of the title. */
  headerActions?: ReactNode;
  /** Title shown in the header bar. */
  title?: string;
};

const TOKEN_CLASS: Record<string, string> = {
  key: 'text-fuchsia-600 font-semibold dark:text-fuchsia-400',
  string: 'text-emerald-600 dark:text-emerald-400',
  number: 'text-orange-600 dark:text-orange-400',
  boolean: 'text-blue-600 dark:text-blue-400',
  null: 'text-zinc-400 dark:text-zinc-500',
  punctuation: 'text-zinc-500 dark:text-zinc-400',
};

type Token =
  | { type: 'key'; value: string }
  | { type: 'string'; value: string }
  | { type: 'number'; value: string }
  | { type: 'boolean'; value: string }
  | { type: 'null'; value: string }
  | { type: 'punctuation'; value: string }
  | { type: 'whitespace'; value: string };

function tokenize(json: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < json.length) {
    const ch = json[i];

    if (ch === '"') {
      let j = i + 1;
      while (j < json.length) {
        if (json[j] === '\\') {
          j += 2;
          continue;
        }
        if (json[j] === '"') break;
        j += 1;
      }
      const value = json.slice(i, j + 1);
      let k = j + 1;
      while (k < json.length && /\s/.test(json[k])) k += 1;
      const isKey = json[k] === ':';
      tokens.push({ type: isKey ? 'key' : 'string', value });
      i = j + 1;
      continue;
    }

    if (/[-0-9]/.test(ch)) {
      let j = i;
      while (j < json.length && /[-0-9.eE+]/.test(json[j])) j += 1;
      tokens.push({ type: 'number', value: json.slice(i, j) });
      i = j;
      continue;
    }

    if (json.startsWith('true', i) || json.startsWith('false', i)) {
      const value = json.startsWith('true', i) ? 'true' : 'false';
      tokens.push({ type: 'boolean', value });
      i += value.length;
      continue;
    }

    if (json.startsWith('null', i)) {
      tokens.push({ type: 'null', value: 'null' });
      i += 4;
      continue;
    }

    if (/\s/.test(ch)) {
      let j = i;
      while (j < json.length && /\s/.test(json[j])) j += 1;
      tokens.push({ type: 'whitespace', value: json.slice(i, j) });
      i = j;
      continue;
    }

    tokens.push({ type: 'punctuation', value: ch });
    i += 1;
  }
  return tokens;
}

export function JsonView({
  data,
  loading,
  headerActions,
  title = 'Response',
}: JsonViewProps) {
  const [copied, setCopied] = useState(false);

  const json = useMemo(() => {
    try {
      return JSON.stringify(data ?? {}, null, 2);
    } catch {
      return String(data);
    }
  }, [data]);

  const tokens = useMemo(() => tokenize(json), [json]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(json);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // clipboard might be unavailable; silently no-op
    }
  };

  const isEmpty = data === null || data === undefined;

  return (
    <div className="overflow-hidden rounded-md border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-100 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900/60">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
            {title}
          </span>
          {!loading && !isEmpty ? (
            <span className="rounded border border-zinc-200 bg-white px-1.5 py-0 font-mono text-[10px] text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
              JSON
            </span>
          ) : null}
        </div>
        <div className="flex items-center gap-1">
          {headerActions}
          {!loading && !isEmpty ? (
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy JSON"
              className="grid h-7 w-7 place-items-center rounded text-zinc-600 hover:bg-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-800"
              title={copied ? 'Copied!' : 'Copy JSON'}
            >
              {copied ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          ) : null}
        </div>
      </div>
      <div className="max-h-[480px] overflow-auto px-3 py-2">
        {loading ? (
          <div className="flex flex-col items-center gap-2 py-8 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-200 border-t-zinc-700 dark:border-zinc-700 dark:border-t-zinc-200" />
            <span>Loading…</span>
          </div>
        ) : isEmpty ? (
          <div className="py-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
            No data to display.
          </div>
        ) : (
          <pre className="m-0 whitespace-pre font-mono text-[13px] leading-[1.55] text-zinc-900 dark:text-zinc-100">
            <code>
              {tokens.map((tok, idx) => {
                if (tok.type === 'whitespace') {
                  return <Fragment key={idx}>{tok.value}</Fragment>;
                }
                return (
                  <span key={idx} className={TOKEN_CLASS[tok.type]}>
                    {tok.value}
                  </span>
                );
              })}
            </code>
          </pre>
        )}
      </div>
    </div>
  );
}

export default JsonView;
