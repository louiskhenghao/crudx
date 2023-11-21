import { useMemo, useRef } from 'react';
import toast from 'react-hot-toast';
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
import { CRUD, CrudGraphApiListType, CrudProps } from '@crudx/core';
import {
  BreadcrumbView,
  ButtonDropdown,
  CrudFilterView,
  CrudPageHeaderView,
  CrudPanelView,
  CrudTableView,
  Dialog,
  RenderFlexView,
  RenderNodeView,
  Table,
  TableColumnType,
} from '@crudx/mui';
import { TableDataIndex } from '@crudx/mui';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import {
  Box,
  Button,
  Chip,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
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

  return (
    <div>
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
        pageActions={[
          {
            key: 'create',
            content: (
              <Button
                variant="outlined"
                onClick={() => {
                  ref.current?.components.modalFormProps?.create?.onShow();
                }}
              >
                ADD BANK
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
          {
            key: 'xxx',
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
        /**
         * --------------------
         * TABLE & COLUMNS
         * --------------------
         */
        // tableTitle="Table tile"
        tableTabs={[
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
        ]}
        // tableInfos={[]}
        tableActions={[
          { action: 'expand' },
          { action: 'refresh' },
          { action: 'create' },
        ]}
        // tableExpandState
        tableExpandView={<Box>COntent</Box>}
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
        // enableGroupColumnAction
        columnActions={{
          name: 'bank',
          identifier: 'bank_name',
          enableAlert: ['export', 'delete'],
          enableDelete: true,
          enableExport: true,
          enableUpdate: true,
          enableView: true,
          enableExtra: true,
          tooltips: {
            view: {
              title: 'knn',
              placement: 'top',
            },
          },
          viewAction: (e, ctx) => {
            const dataId = ctx?.data?.bank_id;
            if (!dataId) return;
            ctx?.context?.detail?.query({
              variables: { bank_id: dataId },
            });
            ctx.context?.controllers?.details?.onShow();
          },
          // deleteAction: (e, ctx) => {
          //   const dataId = ctx?.data?.bank_id;
          //   if (!dataId) return;
          //   ctx.accessibility?.onTriggerRefresh();
          // },
          title: (option) => {
            if (option.action === 'view') {
              return 'ABC';
            }
            return null;
          },
          message: (option) => {
            const data = option.resource?.identifier;
            if (option.action === 'view') {
              return `KNN BUCIBAI ${data}`;
            }
            if (option.action === 'some-extra-button-1') {
              return `KNN BUCIBAI ${data}`;
            }
            return null;
          },
        }}
        // enableGroupColumnAction
        columnExtraActions={[
          {
            key: 'some-extra-button',
            title: 'Some Extra Button',
            alert: true,
            action(e, context) {
              context?.context?.controllers.details?.onShow();
            },
          },
          {
            key: 'some-extra-button-1',
            // node: <HomeIcon />,
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
        spacingMultiplier={2}
        detailsViewType="drawer"
        modalForms={{
          create: {
            title: 'Create form',
            props: { fullWidth: true, maxWidth: 'md' },
            render(options) {
              return <Box>adasdasd as d asda dx</Box>;
            },
          },
          update: {
            title: 'Update form',
            props: { fullWidth: true, maxWidth: 'md' },
            render(options) {
              return <Box>adasdasd as d asda dx</Box>;
            },
          },
          delete: {
            title: 'Delete form',
            props: { fullWidth: true, maxWidth: 'md' },
            render(options) {
              return <Box>adasdasd as d asda dx</Box>;
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
                key: 'create',
                content: (
                  <Button
                    variant="outlined"
                    onClick={() => {
                      nodeProps.context.controllers.create?.onShow();
                    }}
                  >
                    ADD BANK
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
        prepareTableViewProps={() => {
          return {
            tableProps: {
              striped: true,
              // bordered: false,
            },
          };
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
      />
    </div>
  );
}

export default Index;
