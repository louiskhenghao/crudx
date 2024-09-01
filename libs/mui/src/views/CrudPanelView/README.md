# CurdPanelView

Crud panel view help to handle CRUD operations with UI easily

---

## Props

```TypeScript
import { ReactNode, RefAttributes } from 'react';
import {
  CrudComponentAlertNodeProps,
  CrudComponentContentNodeProps,
  CrudComponentDetailNodeProps,
  CrudComponentFilterModalNodeProps,
  CrudComponentFilterNodeProps,
  CrudComponentPageHeaderNodeProps,
  CrudComponentTableNodeProps,
  CrudGraphApiListType,
  CrudMutationResourceEvents,
  CrudPagingOptions,
  CrudSchemata,
  CrudSchemataTypes,
  IfTypeAny,
  UseOperationVariables,
} from '@crudx/core';
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer';

import { TableDataIndex } from '../../@types';
import { DialogProps, DialogRefProps } from '../../components/Dialog';
import { CrudContentViewProps } from '../CrudContentView';
import { CrudFilterViewProps } from '../CrudFilterView';
import { CrudPageHeaderViewProps } from '../CrudPageHeaderView';
import { CrudTableViewProps } from '../CrudTableView';

import { UseCrudModalFormProps } from './hooks/useCrudModalForm';
import { CrudTableItemActionProps } from './hooks/useCrudTableItemAction';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type CrudPanelViewProps<
  TSchema extends CrudSchemataTypes = any,
  TColumnData = any
> = {
  /**
   * css class name to be display
   */
  className?: string;
  /**
   * CRUD configuration
   * ===========================
   */
  /**
   * the name of the module
   * eg: user, admin, whatever
   */
  name: string;
  /**
   * [crud] the schema configuration for query or mutation
   */
  schema: CrudSchemata<TSchema>;
  /**
   * [crud] paging options
   */
  paging?: CrudPagingOptions;
  /**
   * [crud] query variable to be consume
   */
  variables?: UseOperationVariables<TSchema['list'][1]>;
  /**
   * [crud] the callback mutation events for create/update/delete/exports
   */
  events?: CrudMutationResourceEvents<TSchema>;

  /**
   * whether preselect check of items
   */
  checked?: CrudTableViewProps['checked'];

  /**
   * PAGE HEADER PROPS
   * ===========================
   */
  /**
   * page header title
   */
  pageTitle?: CrudPageHeaderViewProps['title'];
  /**
   * whether show back button on page header
   * @default null
   */
  pageBackPath?: CrudPageHeaderViewProps['backPath'];
  /**
   * whether show breadcrumbs on page header
   */
  pageBreadcrumbs?: CrudPageHeaderViewProps['items'];
  /**
   * whether show actions view on page header
   */
  pageActions?: CrudPageHeaderViewProps['actions'];

  /**
   * FILTER VIEW PROPS
   * ===========================
   */
  /**
   * filter view title
   */
  filterTitle?: CrudFilterViewProps['title'];
  /**
   * content to be show within filter view
   */
  filterNode?: CrudFilterViewProps['children'];
  /**
   * actions to show on filter view
   */
  filterActions?: CrudFilterViewProps['actions'];

  /**
   * TABLE PROPS
   * ===========================
   */
  /**
   * table tabs configuration
   */
  tableTitle?: CrudTableViewProps['title'];
  /**
   * table tabs configuration
   */
  tableTabState?: CrudTableViewProps['headerTabState'];
  /**
   * table tabs configuration
   */
  tableTabs?: CrudTableViewProps['headerTabs'];
  /**
   * table header info configuration
   */
  tableInfos?: CrudTableViewProps['headerInfos'];
  /**
   * table header actions button configuration
   */
  tableActions?: CrudTableViewProps['headerActions'];
  /**
   * indicate whether table header expanded view is expand by default
   */
  tableExpandState?: CrudTableViewProps['expanded'];
  /**
   * table header expanded view node
   */
  tableExpandView?: CrudTableViewProps['headerExpandView'];
  /**
   * table header extra view node which is under header tab
   */
  tableExtraView?: CrudTableViewProps['headerExtraView'];
  /**
   * Added 0.0.21
   * whether should fixed column for checkbox
   * NOTE: this will be ignored if `contentViewType` is not `table`
   *
   * @default false
   */
  tableCheckboxColumnSticky?: boolean;
  /**
   * Added 0.0.21
   * whether should fixed column for action column
   * NOTE: this will be ignored if `contentViewType` is not `table`
   *
   * @default false
   */
  tableActionColumnSticky?: boolean;
  /**
   * Added 0.0.3
   * table tab on change callback
   */
  onTableTabChange?: CrudTableViewProps['onTabChange'];
  /**
   * Added 0.0.4
   * table item on check callback
   */
  onTableItemCheck?: CrudTableViewProps['onCheck'];
  /**
   * Added 0.0.16
   * table column on sort callback
   */
  onTableColumnSort?: CrudTableViewProps['onColumnSort'];

  /**
   * TABLE COLUMN PROPS
   * ===========================
   */
  /**
   * table columns to be display
   */
  columns?: CrudTableViewProps<
    IfTypeAny<TColumnData, CrudGraphApiListType<TSchema>, TColumnData>
  >['columns'];
  /**
   * column actions configuration
   */
  columnActions?: Partial<
    CrudTableItemActionProps<
      TSchema,
      IfTypeAny<TColumnData, CrudGraphApiListType<TSchema>, TColumnData>
    >
  >;
  /**
   * column actions configuration
   */
  columnExtraActions?: CrudTableItemActionProps<
    TSchema,
    IfTypeAny<TColumnData, CrudGraphApiListType<TSchema>, TColumnData>
  >['extraActions'];
  /**
   * table data index to for checkbox
   */
  columnDataIndex?: TableDataIndex<
    IfTypeAny<TColumnData, CrudGraphApiListType<TSchema>, TColumnData>
  >;
  /**
   * column action sequence arrangement
   * @default ['view','update','delete','export','extra']
   */
  columnActionSequence?: CrudTableViewProps['columnActions'];
  /**
   * ALERT PROPS
   * ===========================
   */
  // to extends props from alert node
  alertProps?: Omit<
    DialogProps,
    'ref' | 'visible' | 'title' | 'message' | 'onClickAction'
  > &
    RefAttributes<DialogRefProps>;

  /**
   * MODAL PROPS
   * ===========================
   */
  /**
   * modal form configuration for mutation
   * create, update, delete, exports
   */
  modalForms?: Partial<UseCrudModalFormProps<TSchema>>;
  /**
   * VIEW PROPS
   * ===========================
   */
  /**
   * Added 0.0.7
   * whether to show data in table or view form
   * @default table
   */
  contentViewType?: 'table' | 'view';
  /**
   * whether to have detail view shown in modal or drawer form
   * @default true
   */
  detailsViewType?: 'drawer' | 'modal';
  /**
   * whether to have filter view shown in modal or drawer form
   * @default true
   */
  filterModalViewType?: 'drawer' | 'modal';
  /**
   * Added 0.0.19
   *
   * Render empty view for table / content
   */
  emptyView?: ReactNode;
  /**
   * Added 0.0.19
   *
   * Render no data view for table / content
   * NOTE: by providing `emptyView`, this will be overwritten
   *
   * @default "No Data"
   */
  noDataView?: ReactNode;
  /**
   * whether to have unstyled view
   */
  unstyled?: boolean;
  /**
   * spacing multiplier for padding & margin across table, filter
   * @default null
   */
  spacingMultiplier?: number;
  /**
   * whether to have page header on crud panel
   * @default true
   */
  enablePageHeader?: boolean;
  /**
   * whether to have filter box under page header on crud panel
   * @default true
   */
  enableFilterView?: boolean;
  /**
   * whether to have detail view on crud panel
   * @default true
   */
  enableDetailView?: boolean;
  /**
   * whether to have filter view show on modal on crud panel
   * @default true
   */
  enableFilterModalView?: boolean;
  /**
   * whether to have notification on any mutation events happen
   * NOTE: Hot reload doesn't reflect, have to refresh in order to take effect
   * @default true
   */
  enableNotification?: boolean;
  /**
   * whether to enable row selection on table
   * NOTE: Hot reload doesn't reflect, have to refresh in order to take effect
   * @default true
   */
  enableRowSelection?: boolean;
  /**
   * Added 0.0.7
   * whether to have column action column
   * NOTE: if all actions in `columnActions` was disabled, even if this props set to true, the column will not be shown
   *
   * @default true
   */
  enableActionColumn?: boolean;
  /**
   * whether to group table action column action into dropdown,
   * @default false
   */
  enableItemGroupAction?: boolean;

  /**
   * CUSTOM PROPS
   * ===========================
   */
  /**
   * props to extend alert props
   */
  prepareAlertProps?: (
    nodeProps: CrudComponentAlertNodeProps<TSchema>
  ) => Omit<
    DialogProps,
    'ref' | 'visible' | 'title' | 'message' | 'onClickAction'
  > &
    RefAttributes<DialogRefProps>;
  /**
   * props to extend existing page header props
   */
  prepareHeaderViewProps?: (
    nodeProps: CrudComponentPageHeaderNodeProps<TSchema>
  ) => CrudPageHeaderViewProps;
  /**
   * props to override existing crud page header props
   */
  prepareFilterViewProps?: (
    nodeProps: CrudComponentFilterNodeProps<TSchema>
  ) => CrudFilterViewProps;
  /**
   * props to override existing crud table props
   */
  prepareTableViewProps?: (
    nodeProps: CrudComponentTableNodeProps<TSchema>
  ) => Omit<
    CrudTableViewProps,
    'renderActionButtons' | 'onPaginateTo' | 'columns'
  >;
  /**
   * Added 0.0.7
   * props to override existing crud content props
   */
  prepareContentViewProps?: (
    nodeProps: CrudComponentContentNodeProps<TSchema>
  ) => Omit<CrudContentViewProps, 'renderActionButtons' | 'onPaginateTo'>;
  /**
   * props to override details view props
   */
  prepareDetailViewProps?: (
    nodeProps: CrudComponentDetailNodeProps<TSchema>
  ) => {
    modalProps?: DialogProps;
    drawerProps?: SwipeableDrawerProps;
  };
  /**
   * props to override filter modal view props
   */
  prepareFilterModalViewProps?: (
    nodeProps: CrudComponentFilterModalNodeProps<TSchema>
  ) => CrudFilterViewProps & {
    modalProps?: DialogProps;
    drawerProps?: SwipeableDrawerProps;
  };

  /**
   * CUSTOM VIEW RENDER
   * ===========================
   */
  /**
   * custom function to override existing notification view
   * NOTE: @crudx/mui using `react-hot-toast` by default
   */
  renderNotificationView?: (options: {
    type: 'success' | 'error';
    message: string;
  }) => void | ReactNode;
  /**
   * function to render detail information on modal/drawer view
   */
  renderDetailsView?: (
    nodeProps: CrudComponentDetailNodeProps<TSchema>
  ) => ReactNode;
  /**
   * function to render filter on modal/drawer view
   */
  renderFilterModalView?: (
    nodeProps: CrudComponentFilterModalNodeProps<TSchema>
  ) => ReactNode;
  /**
   * Added 0.0.7
   * function to render row item
   * NOTE: only applied for `contentViewType` = `view`
   */
  renderItemView?: CrudContentViewProps<
    CrudGraphApiListType<TSchema>
  >['renderItemView'];
};
```

---

## Example

```TypeScript

import { CrudPanelView } from '@crudx/mui';


// define schema type
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

// define ref
const ref = useRef<CrudProps<BankSchemata>>(null);

// ====== VIEWS
<CrudPanelView
  ref={ref}
  // define module name
  name="bank"
  // define schema for crud
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
  // define paging strategy
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
  pageBackPath="/dashboard"
  pageBreadcrumbs={[
    {
      icon: <HomeIcon />,
      label: 'Dashboard',
      url: '/dashboard',
    },
    { label: 'Banks', url: '/banks', }
  ]}
  pageActions={[
    {
      key: 'create',
      content: (
        <Button
          size="small"
          variant="outlined"
          onClick={() => {
            // to control the create form visibility manually
            ref.current?.components.modalFormProps?.create?.onShow();
          }}
        >
          Add Bank
        </Button>
      ),
    },
  ]}
  /**
   * --------------------
   * TABLE & COLUMNS
   * --------------------
   */
  tableTabs={[
    {
      key: 'zero',
      label: 'Zero',
      icon: <ExpandMoreIcon />,
    },
    {
      key: 'one',
      label: 'One',
      count: '1',
    },
    {
      key: 'two',
      label: 'Two',
      count: (
        <Chip
          sx={{ marginLeft: 1 }}
          color="primary"
          label="3"
        />
      ),
    },
  ]}
  // arrange sequence based on your preference
  columnActionSequence={['delete']}
  // the column data index that used for checkbox
  columnDataIndex="bank_id"
  // column configuration
  columns={[
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
  // whether to group actions items in each table row, default to `false`
  enableItemGroupAction
  // column actions configuration
  columnActions={{
    name: 'bank',
    identifier: 'bank_name',
    // which action to have confirmation
    enableAlert: ['update', 'export', 'delete'],
    enableDelete: true,
    enableExport: true,
    enableUpdate: true,
    enableView: true,
    enableExtra: true,
    // custom view action
    viewAction: (e, ctx) => {
      const dataId = ctx?.data?.bank_id;
      if (!dataId) return;
      ctx?.context?.detail?.query({
        variables: { bank_id: dataId },
      });
      ctx.context?.controllers?.details?.onShow();
    },
  }}
  // extra column action
  columnExtraActions={[
    {
      key: 'some-extra-button',
      title: 'Some Extra Button',
      alert: true,
      action(e, context) {
        console.log('do something with extra button', context);
      },
    },
  ]}
/**
 * --------------------
 * MODAL CONFIGURATION
 * --------------------
 */
  modalForms={{
    create: {
      title: "Create Modal",
      props: { fullWidth: true, maxWidth: 'md' },
      render: () => {
        return <div>Create modal content</div>;
      }
    },
    update: {
      title: "update modal",
      props: { fullWidth: true, maxWidth: 'md' },
      render: () => {
        return <div>Update modal content</div>;
      }
    }
  }}
  /**
   * --------------------
   * DETAIL VIEW
   * --------------------
   */
  renderDetailsView={(nodeProps) => {
    const { loading, data } = nodeProps;
    return (
      <div>{loading ? "loading,,," : JSON.stringify(data, null, 2)}</div>
    );
  }}
/>;
```
