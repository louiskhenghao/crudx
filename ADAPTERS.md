# Transport adapters

`@crudx/core` doesn't talk to your API directly. It consumes a small set of
React hooks that match the **transport contract** in
[`libs/core/src/@types/transport.ts`](./libs/core/src/@types/transport.ts).
Anything that produces those hook shapes — Apollo, TanStack Query, SWR, raw
`fetch`, a custom client — can plug in.

A **transport adapter** is the package that bridges your data-fetching client
to that contract. Pick one when you install `@crudx/core`; you can also write
your own.

## Naming convention

```
@crudx/<transport>-<client>-adapter
```

- `<transport>` — the protocol or shape you're talking to (`graphql`, `rest`, …).
- `<client>` — the concrete library that does the fetching
  (`apollo`, `tanstack`, `swr`, …).
- `-adapter` — fixed suffix that identifies the package as a transport adapter.

Both segments are visible at install time, so `yarn add @crudx/rest-tanstack-adapter`
already tells the reader that REST is fronted by TanStack Query — no
README spelunking required. When a second REST adapter ships
(`@crudx/rest-swr-adapter`), the names disambiguate cleanly.

## Available adapters

| Package | Transport | Client | Highlights |
| --- | --- | --- | --- |
| [`@crudx/graphql-apollo-adapter`](./libs/graphql-apollo-adapter/README.md) | GraphQL | Apollo Client | Identity helpers + `createGraphqlApolloAdapter().schema()` builder |
| [`@crudx/rest-tanstack-adapter`](./libs/rest-tanstack-adapter/README.md) | REST | TanStack Query | Cache invalidation, offset/cursor pagination presets, `createRestTanstackAdapter().schema()` builder |

Roadmap: `@crudx/rest-swr-adapter` (mirrors the TanStack adapter on top of SWR).

## Building your own

The deep guide — contract reference, step-by-step build of a new adapter,
testing harness, release flow — lives at
[`libs/core/docs/adapters.md`](./libs/core/docs/adapters.md). Read it
before opening a PR for a new adapter.

## Contributing

- Follow the naming convention above. PRs that introduce an adapter under a
  different scheme will be asked to rename.
- Add a smoke demo under `apps/example/src/pages/test-crud-public-<your-adapter>.tsx`
  exercising list/get/create/update/delete against a public API. The four
  existing demos are the template.
- Use a conventional-commit scope that matches your lib's directory name
  (e.g. `feat(rest-swr-adapter): ...`). Per-package versioning via
  [`@jscutlery/semver`](https://github.com/jscutlery/semver) keys off the
  scope; commits without it won't bump your adapter.

For the general contribution flow (install, branch naming, PRs, releases)
see [`CONTRIBUTING.md`](./CONTRIBUTING.md). For scaffolding a new
non-adapter library see
[`libs/core/docs/library-setup.md`](./libs/core/docs/library-setup.md).
