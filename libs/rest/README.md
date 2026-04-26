# `@crudx/rest`

REST transport adapter for [`@crudx/core`](../core/README.md), backed
by [`@tanstack/react-query`](https://tanstack.com/query/latest).

## Install

```bash
yarn add @crudx/rest @crudx/core @tanstack/react-query
```

`@tanstack/react-query` is a peer dependency — wrap your app in a
`QueryClientProvider` as you would for any TanStack Query usage.

## Usage

```ts
import { CRUD } from '@crudx/core';
import { restGet, restList, restMutation } from '@crudx/rest';

const list = restList<BankList, ListVars>({
  resource: 'banks',
  fetch: ({ variables, signal }) =>
    fetch(`/api/banks?${qs(variables)}`, { signal }).then((r) => r.json()),
});

const get = restGet<Bank, GetVars>({
  resource: ['banks', 'detail'],
  fetch: ({ variables }) =>
    fetch(`/api/banks/${variables.id}`).then((r) => r.json()),
});

const create = restMutation<Bank, CreateVars>({
  resource: ['banks', 'create'],
  request: ({ variables }) =>
    fetch('/api/banks', {
      method: 'POST',
      body: JSON.stringify(variables),
    }).then((r) => r.json()),
});

new CRUD<BankSchemata>('bank', {
  list:   { key: 'banks', query: list },
  get:    { key: 'banks', query: get },
  create: { key: 'banks', query: create },
});
```

## Status

This adapter is a scaffold. The core wiring is in place and matches
the transport contract end-to-end, but the following polish work is
still on the roadmap:

- Pagination strategy bridge (cursor / offset translation onto
  TanStack Query's `useInfiniteQuery`).
- Cache-invalidation helpers tied into `CrudCallbackComposer`.
- An optional SWR-backed sibling (`@crudx/rest-swr`) that mirrors
  the same surface.

Contributions welcome.
