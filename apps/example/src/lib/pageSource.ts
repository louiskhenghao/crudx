/**
 * pageSource
 * --------------------------------
 *
 * Server-only helper that reads a project file from disk and returns
 * its raw contents. Used inside `getStaticProps` on the demo pages to
 * feed `<SourceView>` the actual `.tsx` source as written — instead
 * of whatever Next.js's SWC pipeline would emit if the page tried to
 * import itself.
 *
 * Tries a few cwd candidates so the helper works whether Next.js was
 * launched from the workspace root (Nx default) or from
 * `apps/example` directly.
 */

import fs from 'fs';
import path from 'path';

/**
 * @param relPath   path relative to the workspace root,
 *                  e.g. `apps/example/src/pages/test-crud-public-rest-shadcn.tsx`
 */
export function readPageSource(relPath: string): string {
  const cwd = process.cwd();
  const candidates = [
    path.join(cwd, relPath),
    path.join(cwd, '..', '..', relPath),
    path.join(
      cwd,
      relPath.startsWith('apps/example/')
        ? relPath.slice('apps/example/'.length)
        : relPath
    ),
  ];

  for (const candidate of candidates) {
    try {
      if (fs.existsSync(candidate)) {
        return fs.readFileSync(candidate, 'utf8');
      }
    } catch {
      // try next candidate
    }
  }

  return `// Could not load source for ${relPath}\n// cwd=${cwd}\n`;
}
