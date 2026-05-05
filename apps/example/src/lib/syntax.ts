/**
 * syntax
 * --------------------------------
 *
 * Pragmatic, regex-based TypeScript / TSX tokeniser shared by
 * `SourceView` (full-page drawer) and `CodeBlock` (per-snippet
 * inline view).  Not a real parser — but covers the cases we need
 * for the demo pages: keywords, types, strings, numbers, comments,
 * JSX tags, JSX attribute names.
 */

export type TokenKind =
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

export type Token = { kind: TokenKind; value: string };

export const TOKEN_CLASS: Record<TokenKind, string> = {
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

export function tokenize(source: string): Token[] {
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
      // JSX tag context.
      if (kind === 'identifier' && source[j] === '=') {
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
