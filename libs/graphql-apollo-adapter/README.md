# `@crudx/graphql-apollo-adapter`

Apollo Client transport adapter for [`@crudx/core`](../core/README.md).

`@crudx/core` is transport-agnostic — it consumes any hook that matches
its `TransportQueryHook` / `TransportMutationHook` contract. Apollo's
generated hooks already satisfy that contract, so this package is a
thin typing layer + a few identity helpers that make the wiring
explicit at the call site.

> 💡 **Tip:** Skip the manual wiring with [`@crudx/skills`](../skills/README.md).
> `npx @crudx/skills install` adds `/crudx-resource` to Claude Code, which
> scaffolds a complete CRUD page (types + Apollo hooks + adapter schema)
> from templates.

## Install

```bash
yarn add @crudx/graphql-apollo-adapter @crudx/core @crudx/common \
  react react-dom \
  axios currency-symbol-map dayjs lodash numeral \
  @apollo/client graphql
```

Everything from `react` onward is a peer dependency. `@apollo/client`
and `graphql` are required so the adapter shares your existing Apollo
client; the rest come from `@crudx/{core,common}`'s helpers (date /
currency / numeric formatters, axios, lodash). Yarn 1 won't pull peer
deps automatically — install them all explicitly.

## Usage

```ts
import { CRUD } from '@crudx/core';
import { graphqlGet, graphqlList, graphqlMutation } from '@crudx/graphql-apollo-adapter';
import {
  useBankListingQuery,
  useBankDetailLazyQuery,
  useBankCreateMutation,
  useBankUpdateMutation,
  useBankDeleteMutation,
} from './graphql';

const bank = new CRUD('bank', {
  list:   { key: 'BankListing', query: graphqlList(useBankListingQuery) },
  get:    { key: 'BankDetail',  query: graphqlGet(useBankDetailLazyQuery) },
  create: { key: 'BankCreate',  query: graphqlMutation(useBankCreateMutation) },
  update: { key: 'BankUpdate',  query: graphqlMutation(useBankUpdateMutation) },
  delete: { key: 'BankDelete',  query: graphqlMutation(useBankDeleteMutation) },
});
```

Passing raw Apollo hooks (without the helpers) also works — they
already satisfy the transport contract. The helpers are an opt-in
clarity affordance.

## Why a separate package?

Splitting the GraphQL/Apollo specifics out of `@crudx/core` lets the
core stay lean and lets us ship parallel adapters
(`@crudx/rest-tanstack-adapter` is already shipping;
`@crudx/rest-swr-adapter` is on the roadmap) without forcing every
consumer to install Apollo.
