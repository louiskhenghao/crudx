/**
 * Docs surfaced under `/docs`. Each entry imports the raw markdown
 * via the `asset/source` webpack rule configured in `next.config.js`,
 * so the source-of-truth files stay outside `apps/example`.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — resolved via the asset/source webpack rule + md.d.ts
import gettingStartedMd from '../../../../libs/core/docs/getting-started.md';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import contributingMd from '../../../../CONTRIBUTING.md';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import librarySetupMd from '../../../../libs/core/docs/library-setup.md';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import adaptersMd from '../../../../libs/core/docs/adapters.md';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import skillsMd from '../../../../libs/skills/README.md';

export type DocSlug =
  | 'getting-started'
  | 'contributing'
  | 'library-setup'
  | 'adapters'
  | 'skills';

export type DocMeta = {
  slug: DocSlug;
  title: string;
  description: string;
  source: string;
};

export const DOCS: Record<DocSlug, DocMeta> = {
  'getting-started': {
    slug: 'getting-started',
    title: 'Getting started',
    description:
      'Use @crudx in your app: pick a stack, install, type your schema, drop CrudPanelView onto a page.',
    source: gettingStartedMd as unknown as string,
  },
  contributing: {
    slug: 'contributing',
    title: 'Contributing',
    description:
      'Local setup, branch + commit conventions, pull requests, and the release flow.',
    source: contributingMd as unknown as string,
  },
  'library-setup': {
    slug: 'library-setup',
    title: 'Set up a new library',
    description:
      'Scaffold a new package under @crudx/* in this monorepo: Nx generator, peer deps, project.json, release scripts.',
    source: librarySetupMd as unknown as string,
  },
  adapters: {
    slug: 'adapters',
    title: 'Build a transport adapter',
    description:
      'The transport contract, step-by-step adapter build, the optional schema() builder, testing, and release.',
    source: adaptersMd as unknown as string,
  },
  skills: {
    slug: 'skills',
    title: 'Claude Code skills',
    description:
      'Installable skills (/crudx-setup, /crudx-resource, /crudx-component) that scaffold integration code from templates instead of regenerating boilerplate.',
    source: skillsMd as unknown as string,
  },
};

export const DOC_ORDER: DocSlug[] = [
  'getting-started',
  'skills',
  'contributing',
  'library-setup',
  'adapters',
];
