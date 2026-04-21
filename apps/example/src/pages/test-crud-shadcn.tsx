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
import { CrudPanelView, CrudTableViewProps } from '@crudx/shadcn';
import { ChevronDown, Home } from 'lucide-react';
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

// Small HTML/Tailwind helpers so this page stays self-contained and uses no
// UI library beyond @crudx/shadcn itself. A production app would typically
// paste shadcn/ui's Input/Button snippets and use those.
const textInputClass =
  'h-9 rounded-md border border-[hsl(var(--border))] bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(var(--ring))]';

const btnClass =
  'inline-flex items-center justify-center rounded-md border border-[hsl(var(--border))] bg-transparent px-3 h-9 text-sm font-medium hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]';

const chipClass =
  'inline-flex items-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-2 py-0.5 text-xs';

export function Index() {
  const ref = useRef<CrudProps<BankSchemata>>(null);

  const [tabValue, setTabValue] = useState('one');

  const [tabInfo, setTabInfo] = useState<CrudTableViewProps['headerTabs']>([
    {
      key: 'zero',
      label: 'Zero',
      icon: <ChevronDown className="h-4 w-4" />,
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
      count: <span className={chipClass}>3</span>,
    },
  ]);

  return (
    <div className="p-6 space-y-3">
      <div className="flex gap-2">
        <button
          className={btnClass}
          onClick={() => {
            setTabInfo([
              {
                key: 'zero',
                label: 'Zero',
                icon: <ChevronDown className="h-4 w-4" />,
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
                count: <span className={chipClass}>3</span>,
              },
            ]);
          }}
        >
          update tab count
        </button>
        <button
          className={btnClass}
          onClick={() => {
            console.log('check --->', ref.current?.rowSelection.selections);
          }}
        >
          check selected
        </button>
      </div>

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
          create: { key: 'BankCreate', query: useBankCreateMutation },
          update: { key: 'BankUpdate', query: useBankUpdateMutation },
          delete: { key: 'BankDelete', query: useBankDeleteMutation },
        }}
        paging={{
          strategy: 'CUSTOM',
          pageSize: 5,
          custom: {
            extract: {
              paging: (context, variables) => {
                return { pageSize: variables.first };
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
              sorting: () => ({}),
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
        pageTitle="Bank Listing (shadcn)"
        pageBackPath="/"
        pageBreadcrumbs={[
          {
            icon: <Home className="h-4 w-4" />,
            label: 'Dashboard',
            url: '/',
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
          <div className="flex flex-wrap items-center gap-2">
            <input
              className={textInputClass}
              placeholder="Search..."
              onChange={(e) => {
                ref.current?.pagingProps.nativeFetch({
                  keyword: e.target.value,
                });
              }}
            />
            <button
              className={btnClass}
              onClick={() => {
                ref.current?.pagingProps.nativeFetch({ keyword: 'CIMB' });
              }}
            >
              Test filter
            </button>
            <button
              className={btnClass}
              onClick={() => {
                ref.current?.pagingProps.clearAndRefresh();
              }}
            >
              CLEAR
            </button>
          </div>
        }
        filterActions={[
          { children: <button className={btnClass}>SEARCH</button> },
          { xs: true },
          { children: <button className={btnClass}>EXPORT</button> },
        ]}
        /**
         * --------------------
         * TABLE & COLUMNS
         * --------------------
         */
        tableTabState={tabValue}
        tableTabs={tabInfo}
        tableExtraView={<div className="p-2">EXTRA VIEW</div>}
        onTableTabChange={(e) => {
          console.log('onTableTabChange --->', e);
          setTabValue(e as any);
        }}
        tableActions={[
          { action: 'expand' },
          { action: 'refresh' },
          { action: 'create' },
        ]}
        tableExpandState
        tableExpandView={<div className="p-2">Expandable Content</div>}
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
            render(value, record) {
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
        columnActions={{
          name: 'bank',
          identifier: 'bank_name',
          enableAlert: ['view', 'update', 'export', 'delete'],
          enableDelete: true,
          enableExport: true,
          enableUpdate: true,
          enableView: (ctx) => ctx?.data?.bank_id === 1,
          enableExtra: true,
          tooltips: {
            view: { title: 'View details', side: 'top' },
          },
          links: {
            view: (ctx) => {
              return `https://www.google.com?query=view ${ctx.data?.bank_name}`;
            },
            update: (ctx) => ({
              path: `https://www.google.com?query=update ${ctx.data?.bank_name}`,
              openNewTab: false,
            }),
            delete: (ctx) => ({
              path: `https://www.google.com?query=delete ${ctx.data?.bank_name}`,
              openNewTab: true,
            }),
          },
          viewAction: (e, ctx) => {
            const dataId = ctx?.data?.bank_id;
            if (!dataId) return;
            ctx?.context?.detail?.query({ variables: { bank_id: dataId } });
            ctx.context?.controllers?.details?.onShow();
          },
          title: (option) => {
            if (option.action === 'view') return 'This is custom message';
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
            enabled: (ctx) => ctx?.data?.bank_id === 3,
            link: (ctx) => ({
              path: `https://www.google.com?query=${ctx.data?.bank_name}`,
              openNewTab: true,
            }),
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
            render() {
              return <div className="py-4">Create form</div>;
            },
          },
          update: {
            title: 'Update form',
            render() {
              return <div className="py-4">Update form</div>;
            },
          },
          delete: {
            title: 'Delete form',
            render() {
              return <div className="py-4">Delete form</div>;
            },
          },
          extra: {
            test: {
              title: 'Test dialog',
              render() {
                return (
                  <div className="py-4">
                    Dialog that is for extra modal testing [test]
                  </div>
                );
              },
            },
            verify: {
              title: 'Verify dialog',
              render() {
                return (
                  <div className="py-4">
                    Dialog that is for extra modal testing [verify]
                  </div>
                );
              },
            },
          },
        }}
        renderDetailsView={(nodeProps) => {
          const { loading, data } = nodeProps;
          return (
            <div className="p-4 text-sm">
              {loading ? 'loading...' : JSON.stringify(data, null, 2)}
            </div>
          );
        }}
        prepareHeaderViewProps={(nodeProps) => {
          return {
            actions: [
              {
                key: 'extraModalTest',
                content: (
                  <button
                    className={btnClass}
                    onClick={() => {
                      nodeProps.context.controllers.extraModal?.[
                        'test'
                      ].onShow();
                    }}
                  >
                    Extra Modal [test]
                  </button>
                ),
              },
              {
                key: 'extraModalVerify',
                content: (
                  <button
                    className={btnClass}
                    onClick={() => {
                      nodeProps.context.controllers.extraModal?.[
                        'verify'
                      ].onShow();
                    }}
                  >
                    Extra Modal [verify]
                  </button>
                ),
              },
              {
                key: 'filter',
                content: (
                  <button
                    className={btnClass}
                    onClick={() => {
                      ref.current?.components.filterModalProps.onShow();
                    }}
                  >
                    OPEN FILTER
                  </button>
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
        prepareTableViewProps={() => {
          return {
            tableProps: { striped: true },
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
            drawerProps: { width: 800 },
          };
        }}
        renderItemView={(record, views, state) => {
          return (
            <div className="flex items-center gap-3 border-b border-[hsl(var(--border))] py-2">
              {views.checkbox()}
              <Image
                alt={record?.bank_name ?? ''}
                width={150}
                height={30}
                style={{ objectFit: 'contain' }}
                src={record?.bank_logo?.full ?? ''}
              />
              <div className="ml-auto">{views.action()}</div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default Index;
