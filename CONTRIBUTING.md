# Contributing to crudx

Thanks for considering a contribution. This monorepo ships several
packages under the `@crudx/*` scope plus an `apps/example` Next.js app
that exercises them. Whether you're filing a bug, adding a feature,
shipping a new transport adapter, or scaffolding a brand-new lib, the
flow below applies.

## Quick links

- [Local setup](#local-setup)
- [Branch + commit conventions](#branch--commit-conventions)
- [Pull requests](#pull-requests)
- [Building a transport adapter](./ADAPTERS.md) — naming + author guide
- [Scaffolding a new library](./libs/core/docs/library-setup.md) — Nx
  config, peer deps, release wiring
- [Releases](#releases) — how packages get versioned and published

---

## Local setup

```bash
git clone git@github.com:louiskhenghao/crudx.git
cd crudx
yarn install
yarn example:dev          # http://localhost:3333
```

The example app is the easiest way to exercise changes end-to-end. It
covers the four transport × UI demo routes (GraphQL/REST × MUI/shadcn)
plus component-reference pages.

To rebuild any single library:

```bash
yarn nx build core
yarn nx build mui
yarn nx build rest-tanstack-adapter
# …or all at once:
yarn build:libs
```

---

## Branch + commit conventions

Branches: `feat/<topic>`, `fix/<topic>`, `chore/<topic>`. There's no
strict rule, but predictable prefixes help when scanning the branch
list.

Commits follow [conventional commits](https://www.conventionalcommits.org/)
with the **lib's directory name as the scope**:

```
feat(core): introduce paging strategy callback
fix(rest-tanstack-adapter): forward onError from request callback
docs(shadcn): note tailwind preset usage
chore(example): drop dead fixture page
```

Why scope matters: `@jscutlery/semver` reads commit scopes to decide
which packages get bumped on release. A commit without a matching scope
won't move any version. See [Releases](#releases).

For breaking changes, append `!` after the scope **and** add a
`BREAKING CHANGE:` footer:

```
feat(core)!: drop legacy CrudSchemata.exportAs slot

BREAKING CHANGE: `CrudSchemata.exportAs` was removed.
Use `CrudSchemata.exports` instead.
```

---

## Pull requests

1. Create the PR against `main`. The repo template will prompt you for
   a summary, references, and a checklist.
2. Run locally before pushing:
   ```bash
   yarn nx run-many --target=lint --all
   yarn nx run-many --target=build --all
   yarn nx run-many --target=test --all
   ```
3. If your change touches the example app or a UI lib, smoke-test it in
   the dev server (`yarn example:dev`) — the four CRUD demos exercise
   most of the surface in a few clicks.
4. Tick the checklist boxes that genuinely apply. The reviewer reads
   them.

Self-reviews catch most issues. Look at your own diff in GitHub before
requesting review.

---

## What lives where

| Path | Owns |
| --- | --- |
| `libs/core/` | `CRUD` class, schema types, paging strategies, transport contract. No transport baked in. |
| `libs/common/` | Shared hooks/utilities consumed by UI libs. |
| `libs/<transport>-<client>-adapter/` | Per-client transport adapters (`graphql-apollo-adapter`, `rest-tanstack-adapter`, …). |
| `libs/mui/`, `libs/shadcn/` | UI implementations of the CRUD surface. API-compatible with each other. |
| `libs/skills/` | Installable Claude Code skills (`/crudx-setup`, `/crudx-resource`, `/crudx-component`) that scaffold integration code from templates. |
| `apps/example/` | Next.js demo app — also the smoke-test harness. |

For the architecture rationale see the [root README](./README.md), and
for adapter specifics see [`ADAPTERS.md`](./ADAPTERS.md).

---

## Releases

Each library is versioned **independently** via
[`@jscutlery/semver`](https://github.com/jscutlery/semver). There are
two ways to cut a release:

### 1. From your machine

```bash
yarn release:core                       # auto level from conventional commits
yarn release:rest-tanstack-adapter      # ditto
yarn release:mui --releaseAs=minor      # force a level
yarn release:all                        # everything with unreleased commits in scope
```

Each command bumps `package.json` + `CHANGELOG.md`, tags
`<project>@<version>`, and builds `dist/libs/<project>/`. You still need
to `git push --follow-tags` and `npm publish` yourself.

### 2. From the CI (recommended)

The **Release packages** workflow
(`.github/workflows/release.yml`) runs on `workflow_dispatch` only.
Pick each lib's bump level in the form (`skip` / `auto` / `patch` /
`minor` / `major`); the workflow runs the version target, pushes the
commits + tags back to `main`, and publishes to npm.

`auto` defers to conventional commits — same as the local
`yarn release:<lib>` flow. Pick `patch` / `minor` / `major` to override
when you need a specific level.

The CI requires an `NPM_TOKEN` repo secret with publish rights for the
`@crudx` scope.

---

## Looking for a deeper guide?

- **Building a transport adapter** → [`ADAPTERS.md`](./ADAPTERS.md) (orientation + naming) and [`libs/core/docs/adapters.md`](./libs/core/docs/adapters.md) (contract reference + step-by-step build).
- **Scaffolding a new library** → [`libs/core/docs/library-setup.md`](./libs/core/docs/library-setup.md).
