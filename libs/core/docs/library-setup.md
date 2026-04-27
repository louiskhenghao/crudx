# Scaffolding a new library

This guide covers the workflow for adding a brand-new package under
`@crudx/*`. If you're specifically building a transport adapter, read
[`adapters.md`](./adapters.md) instead — the contract + builder pattern
for adapters has its own conventions.

## When to add a new library

- The code is reusable across more than one consumer.
- It has a coherent public surface (one or two responsibilities).
- It's stable enough to version independently.

If any of those is "no" yet, keep the code inside an existing lib until
it stabilises. Splitting later is cheap; merging two underbaked libs is
not.

## 1. Pick a name

Naming follows the same scheme as adapters: explicit and self-describing.

| Kind | Convention | Examples |
| --- | --- | --- |
| Foundation | `@crudx/<topic>` | `@crudx/core`, `@crudx/common` |
| Transport adapter | `@crudx/<transport>-<client>-adapter` | `@crudx/rest-tanstack-adapter` |
| UI implementation | `@crudx/<ui-lib>` | `@crudx/mui`, `@crudx/shadcn` |
| Other | `@crudx/<topic>` | (anything new) |

The lib's **directory name** must match the package suffix
(everything after `@crudx/`). That name is also the conventional-commit
scope: `feat(rest-tanstack-adapter): …`.

## 2. Generate the lib via Nx

```bash
yarn nx g @nx/react:library <name> \
  --directory=libs/<name> \
  --bundler=rollup \
  --publishable \
  --importPath=@crudx/<name> \
  --no-interactive
```

Nx scaffolds:

- `libs/<name>/src/index.ts` — public entry
- `libs/<name>/package.json` — package manifest (peer deps go here)
- `libs/<name>/project.json` — Nx targets (build/lint/test)
- `libs/<name>/tsconfig*.json`, `jest.config.ts`, `README.md`

It also adds a `paths` entry to `tsconfig.base.json` so workspace
imports (`@crudx/<name>`) resolve to `libs/<name>/src/index.ts`.

If you don't want to use the generator, copy a sibling lib (e.g.
`libs/rest-tanstack-adapter/`) and search-replace the name. Make sure to
update both `tsconfig.base.json` and `package.json` scripts (see
sections below).

## 3. Fill in the package manifest

Edit `libs/<name>/package.json`:

```json
{
  "name": "@crudx/<name>",
  "version": "0.0.0",
  "license": "MIT",
  "author": "Louis Loo <louiskhenghao@gmail.com> (https://github.com/louiskhenghao)",
  "homepage": "https://github.com/louiskhenghao/crudx/blob/main/libs/<name>#readme",
  "keywords": ["react", "crud", "<topic>", "..."],
  "peerDependencies": {
    "@crudx/core": "^0.0.27",
    "react": ">=17"
  }
}
```

**Always declare runtime deps as `peerDependencies`**, not
`dependencies`. The lib must reuse the consumer's React, MUI, Apollo,
TanStack Query, etc. — never bundle its own copy.

## 4. Wire the Nx project config

`libs/<name>/project.json` should mirror the template used by other
libs:

- `name` matches the directory.
- `sourceRoot: "libs/<name>/src"`.
- `build` target uses `@nx/rollup:rollup`, with `outputPath:
  dist/libs/<name>` and the lib's runtime peers listed under `external`
  so they're not bundled.
- `lint` target points `lintFilePatterns` at `libs/<name>/**/*`.
- `version` target uses `@jscutlery/semver:version` with
  `tagPrefix: "${projectName}@"` and `postTargets:
  ["<name>:build"]`.

Cross-check against `libs/rest-tanstack-adapter/project.json` if
unsure.

## 5. Register release scripts

Add to root `package.json` `scripts`:

```jsonc
"build:lib:<name>": "yarn build <name>",
"release:<name>": "yarn nx run <name>:version",
```

And include `<name>` in `release:all` and `build:libs` if you want it
swept up in the all-targets paths.

Add `<name>` to the per-package input list of
`.github/workflows/release.yml` if you want CI-driven releases.

## 6. Add docs

Every lib must ship a `README.md` with:

- One-line description and what layer it sits at (foundation /
  transport adapter / UI / other).
- Install snippet, including peer deps.
- Minimum-viable usage example.
- Link back to the [root README](../../README.md) for the full picture.

Cross-reference siblings if relevant — e.g. an adapter README links
back to `@crudx/core` and to [`ADAPTERS.md`](../../ADAPTERS.md).

## 7. Smoke-test it

Drop a demo into `apps/example/src/pages/` exercising the lib's public
API end-to-end. The four `test-crud-public-*` demos are the template.
Spin up `yarn example:dev` and click through.

## 8. Release

Follow the [release guide in CONTRIBUTING.md](../../CONTRIBUTING.md#releases).
First releases typically go out as a `0.0.1` or `0.1.0` (force the
level via `--releaseAs=patch` / `--releaseAs=minor` since there's no
prior version for `@jscutlery/semver` to diff against).

---

## Checklist

- [ ] Lib created under `libs/<name>/` with name matching the package suffix.
- [ ] `package.json` declares runtime deps as `peerDependencies`.
- [ ] `project.json` has `build`, `lint`, `test`, `version` targets configured.
- [ ] `tsconfig.base.json` has a `paths` entry for `@crudx/<name>`.
- [ ] Root `package.json` has `release:<name>` and `build:lib:<name>` scripts.
- [ ] `.github/workflows/release.yml` has the lib in its inputs list.
- [ ] `README.md` covers install + usage + link-back to the root README.
- [ ] At least one `apps/example` demo exercises the lib.
- [ ] First release shipped (typically `0.0.1` via
      `yarn release:<name> --releaseAs=patch`).
