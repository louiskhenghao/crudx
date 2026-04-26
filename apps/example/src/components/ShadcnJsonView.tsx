/**
 * ShadcnJsonView
 * --------------------------------
 *
 * Tailwind / shadcn-flavoured twin of `JsonView`. Same hand-rolled
 * tokeniser, but rendered with shadcn semantic colours and a sharper
 * visual treatment so it sits naturally inside the shadcn demo
 * pages' detail drawers.
 */

import { Fragment, ReactNode, useMemo, useState } from 'react';
import { Check, Copy } from 'lucide-react';

export type ShadcnJsonViewProps = {
  data: unknown;
  loading?: boolean;
  headerActions?: ReactNode;
  title?: string;
};

const TOKEN_CLASS: Record<string, string> = {
  key: 'text-fuchsia-600 font-semibold',
  string: 'text-emerald-600',
  number: 'text-orange-600',
  boolean: 'text-blue-600',
  null: 'text-zinc-400',
  punctuation: 'text-zinc-500',
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

export function ShadcnJsonView({
  data,
  loading,
  headerActions,
  title = 'Response',
}: ShadcnJsonViewProps) {
  const [copied, setCopied] = useState(false);

  const json = useMemo(() => {
    try {
      return JSON.stringify(data, null, 2);
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
    <div className="overflow-hidden rounded-md border border-border bg-muted/30">
      <div className="flex items-center justify-between border-b border-border bg-muted/60 px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            {title}
          </span>
          {!loading && !isEmpty ? (
            <span className="rounded border border-border bg-background px-1.5 py-0 font-mono text-[10px] text-muted-foreground">
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
              className="grid h-7 w-7 place-items-center rounded text-muted-foreground hover:bg-accent hover:text-accent-foreground"
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
          <div className="flex flex-col items-center gap-2 py-8 text-sm text-muted-foreground">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-border border-t-foreground" />
            <span>Loading…</span>
          </div>
        ) : isEmpty ? (
          <div className="py-8 text-center text-xs text-muted-foreground">
            No data to display.
          </div>
        ) : (
          <pre className="m-0 whitespace-pre font-mono text-[13px] leading-[1.55]">
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

export default ShadcnJsonView;
