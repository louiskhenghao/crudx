import { ApolloQueryResult, QueryResult } from '@apollo/client';
import { UsePaginationHookProps } from '@crudx/common';
import merge from 'lodash/merge';

import { UseOperationVariables } from '../../@types/apollo';
import {
  CrudPagingExtractInfo,
  CrudPagingKey,
  CrudPagingKeyType,
  CrudPagingOptions,
  CrudPagingPageInfo,
  CrudPagingProps,
  CrudPagingQueryVariables,
  CrudPagingStrategy,
} from '../../@types/crud/paging';
import { CrudSchemataTypes } from '../../@types/crud/schema';

import { fallbackCustomPagingOptions } from './defaults';
import {
  cleanQueryVariable,
  constructQueryVariable,
  emptyQueryVariable,
} from './helpers';
import { CrudPagingPaginateResource } from './paginate';
import { CrudPagingResultResource } from './results';

const defaultFetch = () => {
  return Promise.reject(
    `"fetch" method is not available at the moment, please provide "list" schema in order to use this resource.`
  );
};

/**
 * ===========================
 * MAIN
 * ===========================
 */
/**
 * CRUD Paging Resource
 * -----------------------------
 * Provide necessary methods for query request & allow access informative paging properties
 */
export class CrudPagingResource<TSchema extends CrudSchemataTypes = any> {
  // the name of the module for crud, eg: admin, user
  public name: string;

  // the schema of API
  public strategy: CrudPagingStrategy = 'OFFSET';

  // default per page size
  public defaultPageSize = 25;

  // default page number
  public defaultPageNumber = 1;

  // current page
  public pageNumber = 1;

  // page size
  public pageSize = 25;

  // the paging result key eg: data
  public resultKey: string;

  // paging variable key
  public keys: NonNullable<CrudPagingKey> = {
    filter: 'filter',
    paging: 'paging',
    sorting: 'sorting',
    totalCount: 'total',
  };

  public custom: NonNullable<CrudPagingOptions<TSchema>['custom']>;

  // --- query variables
  private initialQueryVariables: CrudPagingQueryVariables = {};
  private queryVariables: CrudPagingQueryVariables = {};

  // paging pagination resource
  private paginate: CrudPagingPaginateResource<TSchema>;

  // paging result resource
  private result: CrudPagingResultResource<TSchema>;

  private fetchMethod: (
    variables?: Partial<UseOperationVariables<TSchema['list'][1]>>
  ) => Promise<ApolloQueryResult<TSchema['list'][0]>> = defaultFetch;

  // =============== CONSTRUCTOR
  constructor(
    name: string,
    options: CrudPagingOptions<TSchema> & {
      resultKey: string;
    }
  ) {
    const keys = options?.keys;
    const strategy = options?.strategy || 'OFFSET';
    // if is CUSTOM strategy, make sure "custom" options is provided
    if (strategy === 'CUSTOM' && !options.custom) {
      throw new Error('Please provide "custom" options for this strategy!');
    }
    // assign to property
    this.name = name;
    this.strategy = strategy;
    this.resultKey = options.resultKey;
    this.pageSize = options?.pageSize || this.defaultPageSize;
    this.pageNumber = options?.pageNumber || this.defaultPageNumber;
    this.defaultPageNumber = options?.pageNumber || this.defaultPageNumber;
    this.custom = options.custom ?? fallbackCustomPagingOptions;

    this.keys = {
      totalCount: keys?.totalCount ?? 'total',
      filter:
        keys?.filter ??
        CrudPagingResource.getOptionsKey(this.strategy, 'filter'),
      paging:
        keys?.paging ??
        CrudPagingResource.getOptionsKey(this.strategy, 'paging'),
      sorting:
        keys?.sorting ??
        CrudPagingResource.getOptionsKey(this.strategy, 'sorting'),
    };

    // initialize paging paginate resource
    this.paginate = new CrudPagingPaginateResource(this);

    // initialize paging result resource
    this.result = new CrudPagingResultResource(this);
  }

  // =============== STATIC
  static getOptionsKey = (
    strategy: CrudPagingStrategy = 'OFFSET',
    type: CrudPagingKeyType
  ): string | null => {
    if (strategy === 'CURSOR') {
      if (type === 'paging') return 'paging';
      return type === 'sorting' ? 'sorting' : 'filter';
    }
    if (strategy === 'OFFSET') {
      if (type === 'paging') return 'paging';
      return type === 'sorting' ? 'sorting' : 'filter';
    }
    if (strategy === 'NONE') {
      if (type === 'paging') return null;
      return type === 'sorting' ? 'sorting' : 'filter';
    }
    // if custom strategy always return null;
    return null;
  };

  // =============== GETTER
  get isCursor(): boolean {
    return this.strategy === 'CURSOR';
  }

  get isOffset(): boolean {
    return this.strategy === 'OFFSET';
  }

  get isNone(): boolean {
    return this.strategy === 'NONE';
  }

  get isCustom(): boolean {
    return this.strategy === 'CUSTOM';
  }

  get variableKeys(): string[] {
    const { keys } = this;
    const list: string[] = [];
    if (keys?.sorting) list.push(keys.sorting);
    if (keys?.filter) list.push(keys.filter);
    if (keys?.paging) list.push(keys.paging);
    return list;
  }

  get keyFilter(): string {
    return this.keys.filter ?? 'filter';
  }

  get keySorting(): string {
    return this.keys.sorting ?? 'sorting';
  }

  get keyPaging(): string {
    return this.keys.paging ?? 'paging';
  }

  // =============== SETTER
  private setPagingInfo(info: CrudPagingPageInfo) {
    this.pageSize = info?.pageSize ?? this.defaultPageSize;
  }

  public setVariables = (
    inVariables?: CrudPagingQueryVariables,
    empty = false
  ): { [key: string]: any } => {
    const payload = empty
      ? merge({}, emptyQueryVariable(this.queryVariables), inVariables)
      : cleanQueryVariable(merge({}, this.queryVariables, inVariables));
    this.queryVariables = payload;
    return payload;
  };

  // =============== HELPERS - Construct Initial Variable
  private constructInitialValue = (
    options: UseOperationVariables<TSchema['list'][1]> = {}
  ): UseOperationVariables<TSchema['list'][1]> => {
    const variables = options;
    const custom = this.custom;
    const pagingKey = this.keys?.paging;
    let payload = options;

    // --- custom strategy
    if (this.isCustom && custom.compose?.variables) {
      // -- custom strategy
      payload = custom.compose.variables(
        {
          pageNumber: this.pageNumber,
          pageSize: this.pageSize,
        },
        options
      );
    }
    // --- cursor strategy
    if (this.isCursor) {
      payload = constructQueryVariable(options, {
        [`${pagingKey}`]: {
          first: this.pageSize,
          ...(variables?.[`${pagingKey}`] ?? {}),
        },
      });
    }
    // --- offset strategy
    if (this.isOffset) {
      const page = this.pageNumber >= 1 ? this.pageNumber - 1 : 0;
      payload = constructQueryVariable(options, {
        [`${pagingKey}`]: {
          limit: this.pageSize,
          offset: page * this.pageSize,
          ...(variables?.[`${pagingKey}`] ?? {}),
        },
      });
    }
    return payload;
  };

  public setInitialValue = (
    variables: UseOperationVariables<TSchema['list'][1]> = {}
  ): UseOperationVariables<TSchema['list'][1]> => {
    const payload = this.constructInitialValue(variables);
    this.initialQueryVariables = payload;
    this.setPagingInfo(this.result.paging(payload));
    return payload;
  };

  // =============== HELPERS - Extract Paging Data
  private extract = (
    result: QueryResult<TSchema['list'][0], TSchema['list'][1]>
  ): CrudPagingExtractInfo => {
    const variables = result?.variables ?? {};

    // --- extract data & get pagination props
    const dataInfo = this.result.extract(result?.data);
    // --- extract paging information
    const pagingInfo = this.result.paging(variables);
    // --- extract variable info
    const variablesInfo = this.result.variables(variables);

    // set variables & paging info
    this.setVariables(variables);
    this.setPagingInfo(pagingInfo);

    return {
      data: dataInfo,
      paging: pagingInfo,
      variables: variablesInfo,
    };
  };

  // =============== HELPERS - FETCH WITH VARIABLES
  public fetch = (
    inVariables?: UseOperationVariables<TSchema['list'][1]>,
    empty = false
  ): Promise<ApolloQueryResult<any>> => {
    const options = this.setVariables(inVariables, empty);
    return this.fetchMethod(options);
  };

  public nativeFetch = (
    inVariables?: UseOperationVariables<TSchema['list'][1]>
  ): Promise<ApolloQueryResult<any>> => {
    return this.fetchMethod(inVariables);
  };

  /**
   * compose paging props
   */
  public compose = (
    result: QueryResult<TSchema['list'][0], TSchema['list'][1]>,
    paginate: UsePaginationHookProps
  ): CrudPagingProps<TSchema> => {
    this.pageNumber = paginate.current;
    const custom = this.custom;

    // --- setup fetch method
    this.fetchMethod = result?.refetch ?? defaultFetch;

    const info = this.extract(result);
    const paginateProps = this.paginate.use(info, paginate);

    return {
      loading: result?.loading ?? false,
      fetch: this.fetch,
      nativeFetch: this.nativeFetch,
      refresh: () => this.fetch(),
      clearAndRefresh: () => {
        this.fetch(
          this.constructInitialValue(this.initialQueryVariables),
          true
        );
      },
      onUpdatePageSize: (size = 10) => {
        this.pageSize = size;
        this.pageNumber = this.defaultPageNumber;
        this.setVariables({
          [`${this.keyPaging}`]: null,
        });
        this.fetch(this.constructInitialValue());
      },
      onResetSorting: () => {
        // --- custom strategy
        if (this.isCustom) {
          if (!custom.compose.sorting) return;
          const variables = this.custom.compose.sorting(
            { reset: true },
            this.constructInitialValue()
          );
          this.fetch(variables);
          return;
        }
        // --- offset & cursor strategy
        this.setVariables({
          [`${this.keySorting}`]: null,
          [`${this.keyPaging}`]: null,
        });
        this.nativeFetch({
          ...this.constructInitialValue(),
          [`${this.keySorting}`]: [],
        });
      },
      onUpdateSorting: (direction: 'ASC' | 'DESC', field = 'createdAt') => {
        // --- custom strategy
        if (this.isCustom) {
          if (!custom.compose.sorting) return;
          const variables = custom.compose.sorting(
            { direction, field },
            this.constructInitialValue()
          );
          this.fetch(variables);
          return;
        }

        this.setVariables({
          [`${this.keySorting}`]: null,
          [`${this.keyPaging}`]: null,
        });
        this.fetch({
          ...this.constructInitialValue(),
          [`${this.keySorting}`]: [{ direction, field }],
        });
      },
      ...info,
      ...paginateProps,
    };
  };
}

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default CrudPagingResource;
