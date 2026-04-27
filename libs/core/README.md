# @crudx/core

Transport-agnostic CRUD orchestration for React. The `CRUD` class consolidates
schema slots (list, get, create, update, delete, exports), paging strategies,
mutation callbacks, and component visibility into a single primitive that any
UI layer can consume.

The data-fetching client is **plug-in**: this package depends on neither
`@apollo/client` nor `@tanstack/react-query`. It defines the `Transport*`
adapter contract (`TransportQueryHook`, `TransportLazyQueryHook`,
`TransportMutationHook` and their result/options shapes) and pairs with one
of:

- [`@crudx/graphql-apollo-adapter`](https://github.com/louiskhenghao/crudx/blob/main/libs/graphql-apollo-adapter/README.md) — Apollo Client adapter.
- [`@crudx/rest-tanstack-adapter`](https://github.com/louiskhenghao/crudx/blob/main/libs/rest-tanstack-adapter/README.md) — TanStack Query adapter.

See [`ADAPTERS.md`](https://github.com/louiskhenghao/crudx/blob/main/ADAPTERS.md)
for the naming convention and the build-your-own adapter guide.

---

## Installation

```bash
yarn add @crudx/core @crudx/common react react-dom
# plus a transport adapter — choose one:
yarn add @crudx/graphql-apollo-adapter @apollo/client graphql
# or:
yarn add @crudx/rest-tanstack-adapter @tanstack/react-query
```

---

## Usage

```ts
import { CRUD } from '@crudx/core';
import { graphqlGet, graphqlList, graphqlMutation } from '@crudx/graphql-apollo-adapter';

const post = new CRUD<PostSchemata>('post', {
  list:   { key: 'posts',      query: graphqlList(usePostsListQuery) },
  get:    { key: 'post',       query: graphqlGet(usePostDetailLazyQuery) },
  create: { key: 'createPost', query: graphqlMutation(usePostCreateMutation) },
  update: { key: 'updatePost', query: graphqlMutation(usePostUpdateMutation) },
  delete: { key: 'deletePost', query: graphqlMutation(usePostDeleteMutation) },
});

// Inside a component:
const props = post.use();
//          ^ CrudProps<PostSchemata> — feeds @crudx/mui or @crudx/shadcn
```

The same `post` value can be wired through `@crudx/rest-tanstack-adapter`'s
`restList` / `restGet` / `restMutation` instead — `@crudx/core` doesn't care
which transport produces the hooks.

See the [main README](https://github.com/louiskhenghao/crudx#available-packages)
for the full picture and live demos covering every transport × UI combination.
