import { useRef, useState } from 'react';
import {
  BankCreateMutation,
  BankCreateMutationVariables,
  BankDeleteMutation,
  BankDeleteMutationVariables,
  BankDetailQuery,
  BankDetailQueryVariables,
  BankListingQuery,
  BankListingQueryVariables,
  BankUpdateMutation,
  BankUpdateMutationVariables,
  useBankCreateMutation,
  useBankDeleteMutation,
  useBankDetailLazyQuery,
  useBankListingQuery,
  useBankUpdateMutation,
} from '@apps/graphql-api';
import { CrudProps } from '@crudx/core';
import { CrudPanelView, CrudTableViewProps } from '@crudx/mui';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Button, Chip, IconButton, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import includes from 'lodash/includes';
import Image from 'next/image';

type BankSchemata = {
  get: [
    BankDetailQuery,
    BankDetailQueryVariables,
    BankDetailQuery['BankDetail']
  ];
  list: [BankListingQuery, BankListingQueryVariables];
  create: [BankCreateMutation, BankCreateMutationVariables];
  update: [BankUpdateMutation, BankUpdateMutationVariables];
  delete: [BankDeleteMutation, BankDeleteMutationVariables];
};

export function Index() {
  const ref = useRef<CrudProps<BankSchemata>>(null);

  const [tabValue, setTabValue] = useState('one');

  const [tabInfo, setTabInfo] = useState<CrudTableViewProps['headerTabs']>([
    {
      key: 'zero',
      label: 'Zero',
      icon: <ExpandMoreIcon />,
    },
    {
      key: 'one',
      label: 'One',
      count: '10000',
      countColor: 'error',
    },
    {
      key: 'two',
      label: 'Two',
      count: <Chip sx={{ marginLeft: 1 }} color="primary" label="3" />,
    },
  ]);

  return (
    <div>
      <button
        onClick={() => {
          setTabInfo([
            {
              key: 'zero',
              label: 'Zero',
              icon: <ExpandMoreIcon />,
            },
            {
              key: 'one',
              label: 'One',
              count: '100000000',
              countColor: 'error',
            },
            {
              key: 'two',
              label: 'Two',
              count: <Chip sx={{ marginLeft: 1 }} color="primary" label="3" />,
            },
          ]);
        }}
      >
        update
      </button>

      <button
        onClick={() => {
          console.log('check --->', ref.current?.rowSelection.selections);
        }}
      >
        check selected
      </button>
      <CrudPanelView<BankSchemata>
        ref={ref}
        name="bank"
        /**
         * --------------------
         * CRUD
         * --------------------
         */
        schema={{
          get: { key: 'BankDetail', query: useBankDetailLazyQuery },
          list: { key: 'BankListing', query: useBankListingQuery },
          create: {
            key: 'BankCreate',
            query: useBankCreateMutation,
          },
          update: {
            key: 'BankUpdate',
            query: useBankUpdateMutation,
          },
          delete: {
            key: 'BankDelete',
            query: useBankDeleteMutation,
          },
        }}
        paging={{
          strategy: 'CUSTOM',
          pageSize: 5,
          custom: {
            extract: {
              paging: (context, variables) => {
                return {
                  pageSize: variables.first,
                };
              },
              pagination: (context, options) => {
                const { data } = options;
                const result = data?.BankListing;
                const paginator = result?.paginatorInfo;
                const hasMorePages = paginator?.hasMorePages;
                return {
                  list: result?.data ?? [],
                  total: paginator?.total ?? 0,
                  page: {
                    next: hasMorePages ? options.intentNext : null,
                    previous: !includes([0], options.intentPrev)
                      ? options.intentPrev
                      : null,
                    canPaginateToPage: !!paginator,
                  },
                };
              },
            },
            compose: {
              variables: (context, options) => {
                return {
                  ...options,
                  first: context.pageSize,
                  page: context.pageNumber,
                };
              },
              sorting: () => {
                return {};
              },
              pagination: (context) => {
                return {
                  page: context.pageNumber,
                  first: context.pageSize,
                };
              },
            },
          },
        }}
        /**
         * --------------------
         * PAGE HEADER
         * --------------------
         */
        pageTitle="Bank Listing"
        pageBackPath="/test-crud-api"
        pageBreadcrumbs={[
          {
            icon: <HomeIcon />,
            label: 'Dashboard',
            url: '/test-crud-api',
          },
          { label: 'Banks', url: '/banks' },
        ]}
        /**
         * --------------------
         * FILTER
         * --------------------
         */
        filterTitle="Search"
        filterNode={
          <Box>
            <TextField
              placeholder="Search..."
              onChange={(e) => {
                ref.current?.pagingProps.nativeFetch({
                  keyword: e.target.value,
                });
              }}
            />
            <Button
              onClick={() => {
                ref.current?.pagingProps.nativeFetch({
                  keyword: 'CIMB',
                });
              }}
            >
              Test filter
            </Button>
            <Button
              onClick={() => {
                ref.current?.pagingProps.clearAndRefresh();
              }}
            >
              CLEAR
            </Button>
          </Box>
        }
        filterActions={[
          {
            children: <Button variant="outlined">SEARCH</Button>,
          },
          { flex: 'auto' },
          {
            children: <Button variant="outlined">EXPORT</Button>,
          },
        ]}
        alertProps={{
          primaryButtonVariant: 'contained',
          secondaryButtonVariant: 'outlined',
        }}
        /**
         * --------------------
         * TABLE & COLUMNS
         * --------------------
         */
        // tableTitle="Table tile"
        tableTabState={tabValue}
        tableTabs={tabInfo}
        tableExtraView={<div>EXTRA VIEW</div>}
        onTableTabChange={(e) => {
          console.log('onTableTabChange --->', e);
          setTabValue(e as any);
        }}
        // tableInfos={[]}
        tableActions={[
          { action: 'expand' },
          { action: 'refresh' },
          { action: 'create' },
        ]}
        tableExpandState
        tableExpandView={<Box>Expandable Content</Box>}
        // columnActionSequence={['extra', 'delete']}
        enableRowSelection
        columnDataIndex="bank_id"
        columns={[
          {
            key: 'id',
            title: 'ID',
            width: 50,
            sortable: true,
            dataIndex: 'bank_id',
          },
          {
            key: 'name',
            title: 'Name',
            width: 300,
            sortable: true,
            dataIndex: 'bank_name',
          },
          {
            key: 'logo',
            title: 'Image',
            render(value, record, index) {
              return (
                <Image
                  alt={record?.bank_name ?? ''}
                  width={150}
                  height={30}
                  style={{ objectFit: 'contain' }}
                  src={record?.bank_logo?.full ?? ''}
                />
              );
            },
          },
        ]}
        // enableItemGroupAction
        columnActions={{
          name: 'bank',
          identifier: 'bank_name',
          enableAlert: ['view', 'update', 'export', 'delete'],
          enableDelete: true,
          enableExport: true,
          enableUpdate: true,
          enableView: (ctx) => {
            return ctx?.data?.bank_id === 1;
          },
          enableExtra: true,
          tooltips: {
            view: {
              title: 'knn',
              placement: 'top',
            },
          },
          links: {
            view: 'https://www.google.com',
            update: { path: 'https://www.youtube.com', openNewTab: true },
            delete: { path: 'https://www.google.com', openNewTab: false },
          },
          // viewNode: (context, events) => {
          //   return <button onClick={events}>asd</button>;
          // },
          viewAction: (e, ctx) => {
            const dataId = ctx?.data?.bank_id;
            if (!dataId) return;
            ctx?.context?.detail?.query({
              variables: { bank_id: dataId },
            });
            ctx.context?.controllers?.details?.onShow();
          },
          title: (option) => {
            if (option.action === 'view') {
              return 'This is custom message';
            }
            return null;
          },
          message: (option) => {
            const data = option.resource?.identifier;
            if (option.action === 'view') {
              return `[ Custom message for view action ] ${data}`;
            }
            if (option.action === 'some-extra-button-1') {
              return (
                <>
                  <b>
                    <i>Custom node</i>
                  </b>{' '}
                  {data}
                </>
              );
            }
            return null;
          },
        }}
        columnExtraActions={[
          {
            key: 'some-extra-button',
            title: 'Some Extra Button',
            alert: true,
            enabled: true,
            action(e, context) {
              context?.context?.controllers.details?.onShow();
            },
          },
          {
            key: 'some-extra-button-1',
            enabled: (ctx) => {
              return ctx?.data?.bank_id === 3;
            },
            // node: (ctx, e) => {
            //   return (
            //     <IconButton onClick={e}>
            //       <HomeIcon />
            //     </IconButton>
            //   );
            // },
            link: 'https://www.google.com',
            title: 'Some Extra Button 1',
            alert: true,
            tooltip: false,
            action(e, context) {
              console.log('do something with extra button', context);
            },
          },
        ]}
        /**
         * --------------------
         * OTHER CONFIGURATION
         * --------------------
         */
        // enableItemGroupAction
        spacingMultiplier={2}
        detailsViewType="drawer"
        modalForms={{
          create: {
            title: 'Create form',
            props: { fullWidth: true, maxWidth: 'md' },
            render(options) {
              return <Box>Create form</Box>;
            },
          },
          update: {
            title: 'Update form',
            props: { fullWidth: true, maxWidth: 'md' },
            render(options) {
              return <Box>Update form</Box>;
            },
          },
          delete: {
            title: 'Delete form',
            props: { fullWidth: true, maxWidth: 'md' },
            render(options) {
              return <Box>Delete form</Box>;
            },
          },
          extra: {
            test: {
              title: 'Test dialog',
              props: { fullWidth: true, maxWidth: 'md' },
              render(options) {
                return <Box>Dialog that is for extra modal testing [test]</Box>;
              },
            },
            verify: {
              title: 'Verify dialog',
              props: { fullWidth: true, maxWidth: 'md' },
              render(options) {
                return (
                  <Box>Dialog that is for extra modal testing [verify]</Box>
                );
              },
            },
          },
        }}
        // tableActions={[{ action: 'create' }]}
        renderDetailsView={(nodeProps) => {
          const { loading, data } = nodeProps;
          return (
            <div>{loading ? 'loading,,,' : JSON.stringify(data, null, 2)}</div>
          );
        }}
        prepareHeaderViewProps={(nodeProps) => {
          return {
            actions: [
              {
                key: 'extraModalTest',
                content: (
                  <Button
                    variant="outlined"
                    onClick={() => {
                      nodeProps.context.controllers.extraModal?.[
                        'test'
                      ].onShow();
                    }}
                  >
                    Extra Modal [test]
                  </Button>
                ),
              },
              {
                key: 'extraModalVerify',
                content: (
                  <Button
                    variant="outlined"
                    onClick={() => {
                      nodeProps.context.controllers.extraModal?.[
                        'verify'
                      ].onShow();
                    }}
                  >
                    Extra Modal [verify]
                  </Button>
                ),
              },
              {
                key: 'filter',
                content: (
                  <Button
                    variant="outlined"
                    onClick={() => {
                      ref.current?.components.filterModalProps.onShow();
                    }}
                  >
                    OPEN FILTER
                  </Button>
                ),
              },
            ],
          };
        }}
        onTableColumnSort={(key, direction, e) => {
          console.log(
            'onTableColumnSort [lower priority] ----->',
            key,
            direction,
            e
          );
        }}
        prepareTableViewProps={(node) => {
          return {
            tableProps: {
              striped: true,
              // bordered: false,
            },
            onColumnSort: (key, direction, e) => {
              console.log(
                'onColumnSort [higher priority] ----->',
                key,
                direction,
                e
              );
            },
          };
        }}
        checked={[1, 21]}
        onTableItemCheck={(checked) => {
          console.log('checked ----->', checked);
        }}
        prepareDetailViewProps={() => {
          return {
            modalProps: {
              fullScreen: true,
              // maxWidth: 'lg',
            },
            // drawerProps: {
            //   sx: {
            //     width: 800,
            //   },
            //   PaperProps: {
            //     sx: {
            //       width: 800,
            //     },
            //   },
            // },
          };
        }}
        // contentViewType="view"
        renderItemView={(record, views, state) => {
          return (
            <div>
              {views.checkbox()}
              <Checkbox
                onClick={(e) => e.stopPropagation()}
                checked={state.checked}
                onChange={(e) => {
                  e.stopPropagation();
                  const isChecked = e.target.checked;
                  state.onCheck(isChecked);
                }}
              />

              <Image
                alt={record?.bank_name ?? ''}
                width={150}
                height={30}
                style={{ objectFit: 'contain' }}
                src={record?.bank_logo?.full ?? ''}
              />
              {views.action()}
            </div>
          );
        }}
        prepareContentViewProps={() => {
          return {
            // loading: true,
          };
        }}
      />
    </div>
  );
}

export default Index;
