/**
 * test-crud-public-graphql.tsx
 * --------------------------------
 *
 * Self-contained demo of `@crudx/core` + `@crudx/graphql` against the
 * public Rick & Morty GraphQL API (https://rickandmortyapi.com/graphql).
 *
 * Proves the transport adapter works end-to-end without depending on
 * the internal API in the rest of this example app — just open the
 * page and the table renders live data.
 */

import { useMemo, useState } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  gql,
  HttpLink,
  InMemoryCache,
  useLazyQuery,
  useQuery,
} from '@apollo/client';
import { CrudProps, CRUD } from '@crudx/core';
import { graphqlGet, graphqlList } from '@crudx/graphql';
import { CrudPanelView } from '@crudx/mui';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Chip, TextField } from '@mui/material';

/**
 * --------------------------
 * Public Apollo client
 * --------------------------
 *
 * Pointed at Rick & Morty's free, unauthenticated GraphQL endpoint.
 * Defined inline so the demo page is self-contained — the rest of the
 * example app uses a different (authenticated) Apollo client wired via
 * `_app.tsx`, and `ApolloProvider` happily nests.
 */
const PUBLIC_ENDPOINT = 'https://rickandmortyapi.com/graphql';

const createPublicClient = () =>
  new ApolloClient({
    link: new HttpLink({ uri: PUBLIC_ENDPOINT }),
    cache: new InMemoryCache(),
  });

/**
 * --------------------------
 * Schema typings
 * --------------------------
 */
type Character = {
  id: string;
  name: string;
  species?: string | null;
  status?: string | null;
  gender?: string | null;
  image?: string | null;
};

type CharactersListResponse = {
  characters: {
    info: {
      count: number;
      pages: number;
      next: number | null;
      prev: number | null;
    };
    results: Character[];
  };
};

type CharactersListVariables = {
  page?: number;
  filter?: { name?: string; status?: string; species?: string };
};

type CharacterDetailResponse = { character: Character };
type CharacterDetailVariables = { id: string };

/**
 * --------------------------
 * Hand-rolled Apollo hooks
 * --------------------------
 *
 * No codegen needed for a demo — `gql` + `useQuery` / `useLazyQuery`
 * already produce the shape `@crudx/graphql` expects.
 */
const CHARACTERS_LIST = gql`
  query CharactersList($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
        status
        gender
        image
      }
    }
  }
`;

const CHARACTER_DETAIL = gql`
  query CharacterDetail($id: ID!) {
    character(id: $id) {
      id
      name
      species
      status
      gender
      image
    }
  }
`;

const useCharactersListQuery = (
  options?: Parameters<
    typeof useQuery<CharactersListResponse, CharactersListVariables>
  >[1]
) => useQuery<CharactersListResponse, CharactersListVariables>(
    CHARACTERS_LIST,
    options
  );

const useCharacterDetailLazyQuery = (
  options?: Parameters<
    typeof useLazyQuery<CharacterDetailResponse, CharacterDetailVariables>
  >[1]
) => useLazyQuery<CharacterDetailResponse, CharacterDetailVariables>(
    CHARACTER_DETAIL,
    options
  );

/**
 * --------------------------
 * The CRUD page
 * --------------------------
 */
type CharacterSchemata = {
  get: [CharacterDetailResponse, CharacterDetailVariables, Character];
  list: [CharactersListResponse, CharactersListVariables, Character];
};

function CharactersPanel() {
  const [search, setSearch] = useState('');

  return (
    <CrudPanelView<CharacterSchemata>
      name="character"
      schema={{
        list: {
          key: 'characters',
          query: graphqlList(useCharactersListQuery),
        },
        get: {
          key: 'character',
          query: graphqlGet(useCharacterDetailLazyQuery),
        },
      }}
      /**
       * Rick & Morty's pagination is page-based with a `{ info: { pages,
       * next, prev } }` envelope — classic "CUSTOM" strategy territory.
       */
      paging={{
        strategy: 'CUSTOM',
        pageSize: 20,
        custom: {
          extract: {
            paging: () => ({ pageSize: 20 }),
            pagination: (_context, options) => {
              const data = options.data?.characters;
              return {
                list: data?.results ?? [],
                total: data?.info?.count ?? 0,
                page: {
                  next: data?.info?.next ?? null,
                  previous: data?.info?.prev ?? null,
                  canPaginateToPage: true,
                },
              };
            },
          },
          compose: {
            variables: (context, variables) => ({
              ...(variables ?? {}),
              page: context.pageNumber,
            }),
            sorting: (_ctx, variables) => variables ?? {},
            pagination: (context) => ({ page: context.pageNumber }),
          },
        },
      }}
      pageTitle="Rick & Morty Characters"
      pageBackPath="/"
      pageBreadcrumbs={[
        { icon: <HomeIcon />, label: 'Home', url: '/' },
        { label: 'Public GraphQL demo' },
      ]}
      filterTitle="Search by name"
      filterNode={
        <Box>
          <TextField
            value={search}
            placeholder="Try: rick, morty, beth…"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
      }
      tableActions={[{ action: 'refresh' }]}
      columnDataIndex="id"
      columns={[
        { key: 'id', title: 'ID', width: 80, dataIndex: 'id' },
        { key: 'name', title: 'Name', width: 220, dataIndex: 'name' },
        {
          key: 'image',
          title: 'Avatar',
          width: 80,
          render: (_value, record) =>
            record?.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt={record.name}
                src={record.image}
                width={48}
                height={48}
                style={{ borderRadius: '50%', objectFit: 'cover' }}
              />
            ) : null,
        },
        { key: 'species', title: 'Species', dataIndex: 'species' },
        { key: 'gender', title: 'Gender', dataIndex: 'gender' },
        {
          key: 'status',
          title: 'Status',
          render: (_value, record) => (
            <Chip
              size="small"
              label={record?.status ?? '—'}
              color={
                record?.status === 'Alive'
                  ? 'success'
                  : record?.status === 'Dead'
                  ? 'error'
                  : 'default'
              }
            />
          ),
        },
      ]}
      columnActions={{
        name: 'character',
        identifier: 'name',
        enableView: true,
        enableUpdate: false,
        enableDelete: false,
        enableExport: false,
      }}
      enableRowSelection={false}
    />
  );
}

export function Index() {
  const client = useMemo(createPublicClient, []);

  return (
    <ApolloProvider client={client}>
      <CharactersPanel />
    </ApolloProvider>
  );
}

export default Index;
// keep CrudProps imported so future ref-based interactions stay typed
export type _CharactersCrudProps = CrudProps<CharacterSchemata>;
