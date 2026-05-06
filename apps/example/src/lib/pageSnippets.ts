/**
 * pageSnippets
 * --------------------------------
 *
 * Server-only helper that reads a demo page from disk and extracts
 * the `return ( ... )` JSX body of every function preceded by a
 * `// @demo:KEY` marker, then prepends any top-level constants the
 * snippet references so the rendered code block is self-contained.
 *
 * Convention:
 *
 *   // @demo:button-dropdown
 *   function ButtonDropdownDemo() {
 *     ...
 *     return (
 *       <ButtonDropdown ... />
 *     );
 *   }
 *
 * The extractor pulls out everything inside the matching parentheses
 * of the function's `return (`, dedents it, and stores it under the
 * key (`button-dropdown`).  Any `UPPER_SNAKE_CASE` identifier
 * referenced in the body that has a corresponding top-level
 * `const NAME = ...;` declaration in the same file is prepended to
 * the snippet, so that what gets rendered in the showcase doubles
 * as a copy-paste recipe.
 *
 * Likewise, top-level `type X = ...;` aliases referenced in JSX
 * generic position (e.g. `<Table<Row>`) are prepended too.
 */

import fs from 'fs';
import path from 'path';

import { readPageSource } from './pageSource';

const MARKER = /\/\/\s*@demo:([\w-]+)\s*\r?\n[\s\S]*?function\s+\w+\s*\(/g;

export function readDemoSnippets(relPath: string): Record<string, string> {
  const source = readPageSource(relPath);
  if (!source.startsWith('// Could not load source')) {
    return parseSnippets(source);
  }
  // Fallback path resolution for environments where the helper above
  // returns its diagnostic stub.
  const cwd = process.cwd();
  for (const candidate of [
    path.join(cwd, relPath),
    path.join(cwd, '..', '..', relPath),
  ]) {
    try {
      if (fs.existsSync(candidate)) {
        return parseSnippets(fs.readFileSync(candidate, 'utf8'));
      }
    } catch {
      // try next candidate
    }
  }
  return {};
}

function parseSnippets(source: string): Record<string, string> {
  const out: Record<string, string> = {};
  let match: RegExpExecArray | null;
  MARKER.lastIndex = 0;
  while ((match = MARKER.exec(source))) {
    const key = match[1];
    const fnOpenParen = match.index + match[0].length - 1;
    const argsClose = matchClosing(source, fnOpenParen, '(', ')');
    if (argsClose < 0) continue;
    const braceOpen = source.indexOf('{', argsClose);
    if (braceOpen < 0) continue;
    const returnIdx = source.indexOf('return (', braceOpen);
    if (returnIdx < 0) continue;
    const start = returnIdx + 'return ('.length;
    const end = matchClosing(source, returnIdx + 'return '.length, '(', ')');
    if (end < 0) continue;

    const body = dedent(
      source.slice(start, end).replace(/^\s*\n/, '').replace(/\s+$/, '')
    );
    const preamble = collectPreamble(body, source);
    out[key] = preamble ? `${preamble}\n\n${body}` : body;
  }
  return out;
}

/**
 * Find any UPPER_SNAKE_CASE identifiers and `<TypeName>` generic refs
 * in `body` that have top-level `const`/`type` declarations in
 * `source`. Returns the joined declarations (in source order).
 */
function collectPreamble(body: string, source: string): string {
  const referenced = new Set<string>();

  // UPPER_SNAKE_CASE constants (e.g. SAMPLE_ROWS, STICKY_COLUMNS)
  for (const m of body.matchAll(/\b[A-Z][A-Z0-9_]+\b/g)) {
    referenced.add(m[0]);
  }
  // Types in JSX generic position: `<Foo<Bar>` / `<Foo<Bar.Baz>`
  for (const m of body.matchAll(/<[A-Z][A-Za-z0-9_]*<([A-Z][A-Za-z0-9_]*)/g)) {
    referenced.add(m[1]);
  }

  const declarations: { name: string; index: number; text: string }[] = [];

  for (const name of referenced) {
    // Top-level const declaration
    const constRe = new RegExp(
      `^const\\s+${escape(name)}\\b[^=]*=`,
      'm'
    );
    const constMatch = constRe.exec(source);
    if (constMatch) {
      const decl = readDeclaration(source, constMatch.index);
      if (decl) {
        declarations.push({ name, index: constMatch.index, text: decl });
        continue;
      }
    }
    // Top-level type alias
    const typeRe = new RegExp(`^type\\s+${escape(name)}\\b[^=]*=`, 'm');
    const typeMatch = typeRe.exec(source);
    if (typeMatch) {
      const decl = readDeclaration(source, typeMatch.index);
      if (decl) {
        declarations.push({ name, index: typeMatch.index, text: decl });
      }
    }
  }

  if (!declarations.length) return '';
  declarations.sort((a, b) => a.index - b.index);
  return declarations.map((d) => d.text).join('\n\n');
}

/**
 * Read a top-level `const NAME ... = <expr>;` or `type NAME = <expr>;`
 * starting at `start` (position of `const` / `type`). Walks forward
 * tracking string/comment/bracket state and stops at the first `;`
 * encountered at depth 0.
 */
function readDeclaration(source: string, start: number): string | null {
  let i = start;
  let depth = 0;
  let inString: string | null = null;
  let inLineComment = false;
  let inBlockComment = false;

  while (i < source.length) {
    const ch = source[i];
    const next = source[i + 1];

    if (inLineComment) {
      if (ch === '\n') inLineComment = false;
      i++;
      continue;
    }
    if (inBlockComment) {
      if (ch === '*' && next === '/') {
        inBlockComment = false;
        i += 2;
        continue;
      }
      i++;
      continue;
    }
    if (inString) {
      if (ch === '\\') {
        i += 2;
        continue;
      }
      if (ch === inString) inString = null;
      i++;
      continue;
    }
    if (ch === '/' && next === '/') {
      inLineComment = true;
      i += 2;
      continue;
    }
    if (ch === '/' && next === '*') {
      inBlockComment = true;
      i += 2;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      inString = ch;
      i++;
      continue;
    }
    if (ch === '(' || ch === '[' || ch === '{') {
      depth++;
      i++;
      continue;
    }
    if (ch === ')' || ch === ']' || ch === '}') {
      depth--;
      i++;
      continue;
    }
    if (ch === ';' && depth === 0) {
      return source.slice(start, i + 1);
    }
    i++;
  }
  return null;
}

function matchClosing(
  source: string,
  openIdx: number,
  open: string,
  close: string
): number {
  if (source[openIdx] !== open) return -1;
  let depth = 0;
  for (let i = openIdx; i < source.length; i++) {
    const c = source[i];
    if (c === open) depth++;
    else if (c === close) {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function dedent(input: string): string {
  const lines = input.replace(/\t/g, '  ').split('\n');
  const indents = lines
    .filter((l) => l.trim().length > 0)
    .map((l) => l.match(/^ */)?.[0].length ?? 0);
  if (!indents.length) return input;
  const min = Math.min(...indents);
  return lines.map((l) => l.slice(min)).join('\n').trimEnd();
}

function escape(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
