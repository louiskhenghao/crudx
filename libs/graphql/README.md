# `@crudx/graphql`

Apollo Client transport adapter for [`@crudx/core`](../core/README.md).

`@crudx/core` is transport-agnostic — it consumes any hook that matches
its `TransportQueryHook` / `TransportMutationHook` contract. Apollo's
generated hooks already satisfy that contract, so this package is a
thin typing layer + a few identity helpers that make the wiring
explicit at the call site.

## Install

```bash
yarn add @crudx/graphql @crudx/core @apollo/client graphql
```

`@apollo/client` and `graphql` are peer dependencies so the adapter
shares the consumer's Apollo client.

## Usage

```ts
import { CRUD } from '@crudx/core';
import { graphqlGet, graphqlList, graphqlMutation } from '@crudx/graphql';
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
core stay lean and lets us ship parallel adapters (`@crudx/rest`
on TanStack Query / SWR is next) without forcing every consumer to
install Apollo.
