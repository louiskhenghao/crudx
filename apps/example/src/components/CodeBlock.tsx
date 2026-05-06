/**
 * CodeBlock
 * --------------------------------
 *
 * Inline syntax-highlighted code view with a click-to-copy button in
 * the top-right corner. Used by the per-component showcase pages so
 * each demo's snippet is both readable (TS/TSX colors) and one click
 * away from the clipboard.
 */

import { Fragment, useCallback, useMemo, useState } from 'react';
import { Check, Copy } from 'lucide-react';

import { tokenize, TOKEN_CLASS } from '../lib/syntax';

export type CodeBlockProps = {
  /** Raw source string to render. */
  code: string;
  /** Optional language label rendered as a small chip in the header. */
  language?: string;
  /** Optional className applied to the outer wrapper. */
  className?: string;
};

export function CodeBlock({ code, language = 'tsx', className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore — clipboard might be unavailable in some browsers
    }
  }, [code]);

  const tokens = useMemo(() => tokenize(code ?? ''), [code]);

  return (
    <div
      className={
        'group relative overflow-hidden rounded-md border border-zinc-800 bg-zinc-950' +
        (className ? ` ${className}` : '')
      }
    >
      <div className="flex items-center justify-between border-b border-zinc-800/80 px-3 py-1.5">
        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
          {language}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex h-6 items-center gap-1 rounded px-1.5 text-[11px] font-medium text-zinc-300 transition-colors hover:bg-zinc-800"
          title={copied ? 'Copied!' : 'Copy code'}
          aria-label={copied ? 'Copied' : 'Copy code'}
        >
          {copied ? (
            <Check className="h-3 w-3 text-emerald-400" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
          <span className="text-[11px]">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="m-0 overflow-auto px-3 py-2.5 font-mono text-[12px] leading-[1.55] text-zinc-100">
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
  );
}

export default CodeBlock;
