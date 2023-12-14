import { useMemo } from 'react';
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
import { CRUD, CrudGraphApiListType } from '@crudx/core';
import {
  BreadcrumbView,
  ButtonDropdown,
  CrudFilterView,
  CrudPageHeaderView,
  CrudTableView,
  Dialog,
  RenderFlexView,
  RenderNodeView,
  Table,
  TableColumnType,
  useCrudTableItemAction,
} from '@crudx/mui';
import { TableDataIndex } from '@crudx/mui';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import { Button, Chip, Tab, Tabs, Typography } from '@mui/material';
import includes from 'lodash/includes';
import Image from 'next/image';
import { type } from 'os';

export function Index() {
  const crudHelper = new CRUD<{
    get: [
      BankDetailQuery,
      BankDetailQueryVariables,
      BankDetailQuery['BankDetail']
    ];
    list: [BankListingQuery, BankListingQueryVariables];
    create: [BankCreateMutation, BankCreateMutationVariables];
    update: [BankUpdateMutation, BankUpdateMutationVariables];
    delete: [BankDeleteMutation, BankDeleteMutationVariables];
  }>(
    'role',
    {
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
    },
    {
      paging: {
        strategy: 'CUSTOM',
        pageSize: 2,
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
      },
      itemActions: useCrudTableItemAction({
        name: 'bank',
        identifier: 'bank_name',
        enableAlert: ['view', 'update', 'export', 'delete'],
        enableDelete: true,
        enableExport: true,
        enableUpdate: true,
        enableView: true,
        nodeType: 'menu',
        tooltips: {
          view: 'KNN',
        },
      }),
      modalForms: {
        create: {
          title: 'Casd',
          node: (options) => {
            return (
              <Dialog
                type="custom"
                title={options.title ?? "Use Google's location service?"}
                message="Let Google help apps determine location. This means sending anonymous location data to Google, even when no
                apps are running."
                visible={options.visible}
                onClose={() => options.onHide()}
                onClickAction={() => {
                  options.onHide();
                }}
              >
                <Button>asdas</Button>
              </Dialog>
            );
          },
        },
      },
      nodes: {
        notification: (options) => {
          // notification will pass back `type`, duration`, `message`, you can consume it based on your need
          const { type, message } = options;
          switch (type) {
            case 'success':
              toast.success(message);
              break;
            case 'error':
              toast.error(message);
              break;
          }
        },
        pageHeader: (props) => {
          return (
            <CrudPageHeaderView
              title="Hey"
              backPath="/test-crud"
              items={[
                {
                  icon: <HomeIcon />,
                  label: 'one',
                  url: '/test-crud-api',
                },
                {
                  icon: <ExpandMoreIcon />,
                  label: 'two',
                  url: '/test-crud',
                },
                {
                  // label: <Chip label="Three 3" />,

                  label: 'Three',
                },
              ]}
              actions={[
                {
                  key: 'create',
                  content: (
                    <Button size="small" variant="outlined">
                      CB
                    </Button>
                  ),
                },
              ]}
            />
          );
        },
        filter: (props) => {
          return (
            <CrudFilterView title="Page title header">asdasd</CrudFilterView>
          );
        },
        table: (nodeProps) => {
          const {
            accessibility,
            context,
            pagination,
            data,
            loading,
            rowSelection,
            renderActionButtons,
            ...restProps
          } = nodeProps;
          const { pagingProps } = context;

          const columns: TableColumnType<BankDetailQuery['BankDetail']>[] = [
            {
              key: 'id',
              title: 'ID',
              width: 50,
              dataIndex: 'bank_id',
            },
            {
              key: 'name',
              title: 'Name',
              width: 300,
              dataIndex: 'bank_name',
            },
            {
              key: 'logo',
              title: 'Image',
              render(value, record, index) {
                return (
                  <>
                    <Image
                      alt={record?.bank_name ?? ''}
                      width={150}
                      height={30}
                      style={{ objectFit: 'contain' }}
                      src={record?.bank_logo?.full ?? ''}
                    />
                    {JSON.stringify(value)}
                  </>
                );
              },
            },
          ];

          return (
            <CrudTableView<BankDetailQuery['BankDetail']>
              title={<Typography variant="h5">My Table</Typography>}
              data={data}
              columns={columns}
              page={pagination.current}
              pageSize={2}
              totalSelected={accessibility.totalSelected}
              enableItemGroupAction
              columnActions={['view', 'delete', 'export']}
              headerActions={[
                {
                  action: 'settings',
                  items: [{ key: '1', title: 'One 1 Satu' }],
                },
                { action: 'create' },
                { action: 'expand', enabled: true },
                { action: 'refresh' },
                { action: 'density' },
              ]}
              headerTabsProps={{}}
              headerTabs={[
                {
                  key: 'zero',
                  label: 'Zero',
                  count: 2,
                  // icon: <ExpandMoreIcon />,
                },
                {
                  key: 'one',
                  label: 'One',
                  count: '1',
                },
                { key: 'two', label: 'Two', count: 2000 },
                {
                  key: 'three',
                  label: 'Three',
                  count: (
                    <Chip
                      color="primary"
                      // sx={{
                      //   padding: 1,
                      //   background: 'red',
                      //   borderRadius: ' 50%',
                      //   height:
                      // }}
                      label="3"
                    />
                  ),
                },
              ]}
              headerExpandView={<div>knn</div>}
              totalRecord={pagingProps.data.total}
              // actionColumnPosition={2}
              // enableItemGroupAction
              // paginateType="button"
              renderActionButtons={renderActionButtons}
              tableProps={{
                enableTableHeadDivider: true,
                checkbox: {
                  enabled: rowSelection.isSelectable,
                  // dataIndex: undefined,
                  dataIndex: 'bank_id',
                },
                checked: rowSelection.selections as TableDataIndex<
                  BankDetailQuery['BankDetail']
                >[],
                pageSizeOptions: [2, 4, 6, 8, 10],
                expandable: true,
                renderExpandedView: (e) => {
                  return <>{e?.bank_name}</>;
                },
              }}
              onCheck={(data) => {
                console.log('onCheck ---->', data);
                rowSelection.setSelections(data);
                // data.map(e => e.)
              }}
              onPageSizeChange={(size) => {
                pagingProps.onUpdatePageSize(size);
              }}
              onPageChange={(page) => {
                pagination.paginateTo(page);
              }}
              enableNext={accessibility.enableNext}
              enablePrevious={accessibility.enablePrevious}
              onPaginateNext={pagingProps.onPaginateNext}
              onPaginatePrevious={pagingProps.onPaginatePrevious}
              onTriggerCreate={accessibility.onTriggerCreate}
              onTriggerRefresh={accessibility.onTriggerRefresh}
              onTriggerSorting={accessibility.onTriggerSorting}

              // headerViewNode={
              //   <>
              //     <button
              //       onClick={() => {
              //         console.log('----->', context.controllers);
              //         context.controllers.create?.onShow();
              //       }}
              //     >
              //       show
              //     </button>
              //   </>
              // }
            />
          );
        },
      },
    }
  );

  const crudProps = crudHelper.use({
    first: 2,
  });
  const {
    result, // useQuery result from list action
    detail, // crud fetch methods
    mutation, // GraphQL Tuple for mutation
    components, // component props for Table & CrudPanel
    rowSelection, // hooks for controlling table
    pagination, // hooks for pagination
  } = crudProps;
  // console.log('crud ----->', crudProps);

  return (
    <div>
      <RenderFlexView
        items={[
          [
            { children: '1-1', xs: 12, sm: 'auto', md: 6 },
            { children: '1-2' },
            { children: '1-3' },
            { children: '1-4' },
          ],

          [{ children: '2-1' }, { children: '2-2' }],
          [{ children: '3-1' }, { children: '3-2' }],
        ]}
        // items={[
        //   {
        //     items: [
        //       { children: '1-1' },
        //       { children: '1-2' },
        //       { children: '1-3' },
        //     ],
        //   },
        //   { items: [{ children: '2-1' }, { children: '2-2' }] },
        //   { items: [{ children: '3-1' }, { children: '3-2' }] },
        // ]}
      />
      {/* <ButtonDropdown
        items={[
          {
            key: '1',
            title: 'One',
            onClick: () => {
              // do something
            },
          },
        ]}
      />
      ;
      <button
        onClick={() => {
          console.log('------->', rowSelection, rowSelection.selections);
        }}
      >
        check selection
      </button>
      <button
        onClick={() => {
          rowSelection.clear();
        }}
      >
        clear all selections
      </button>
      <button
        onClick={() => {
          rowSelection.toggle();
        }}
      >
        toggle selections
      </button> */}
      {components.renderPageHeader?.()}
      {components.renderFilter?.()}
      {components.renderTable?.()}
      {components.renderModalForms?.()}
      {/* <hr />
      <Table<string>
        stickyHeader
        // striped
        checkbox={{
          enabled: true,
          dataIndex: null,
        }}
        // loading
        data={['one', 'two', 'three']}
        columns={[
          {
            key: 'id',
            title: 'ID',
          },
          {
            key: 'name',
            title: 'Name',
            render(value, record, index) {
              return value.toUpperCase();
            },
          },
        ]}
        expandable
        renderExpandedView={(e) => {
          return <>This is spartan {e}</>;
        }}
        onCheck={(data) => {
          // data.map(e => e.)
        }}
      /> */}
    </div>
  );
}

export default Index;
