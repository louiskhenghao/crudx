export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
  JSONObject: { input: any; output: any };
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String']['output'];
  expiresIn: Scalars['Float']['output'];
  refreshExpiresIn: Scalars['Float']['output'];
  refreshToken: Scalars['String']['output'];
};

export enum ApplicationActionTypes {
  AcceptApplication = 'ACCEPT_APPLICATION',
  DownloadDocument = 'DOWNLOAD_DOCUMENT',
  EkycVerify = 'EKYC_VERIFY',
  UploadDocument = 'UPLOAD_DOCUMENT',
}

export type ApplicationDto = {
  __typename?: 'ApplicationDto';
  actionRequires?: Maybe<Scalars['JSONObject']['output']>;
  address: Scalars['JSONObject']['output'];
  applicantSnapshot: Scalars['JSONObject']['output'];
  createdAt: Scalars['DateTime']['output'];
  customer?: Maybe<User>;
  dateApplied?: Maybe<Scalars['DateTime']['output']>;
  dateApproved?: Maybe<Scalars['DateTime']['output']>;
  deposit: Scalars['Float']['output'];
  dipOffered?: Maybe<Scalars['JSONObject']['output']>;
  documentsUploaded: Scalars['Boolean']['output'];
  emergencyContact: Scalars['JSONObject']['output'];
  employmentDetails: Scalars['JSONObject']['output'];
  finalApproved?: Maybe<Scalars['JSONObject']['output']>;
  financeAmount: Scalars['Float']['output'];
  financialPlanSnapshot: Scalars['JSONObject']['output'];
  id: Scalars['Int']['output'];
  monthlyInstalment: Scalars['Float']['output'];
  motorCarSnapshot: Scalars['JSONObject']['output'];
  motorcarSwap?: Maybe<Scalars['Boolean']['output']>;
  outletId: Scalars['Float']['output'];
  outletSnapshot: Scalars['JSONObject']['output'];
  profitRate: Scalars['Float']['output'];
  refNo: Scalars['String']['output'];
  salutation?: Maybe<Scalars['String']['output']>;
  sellingPrice: Scalars['Float']['output'];
  status: ApplicationStatusType;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Float']['output'];
};

export type ApplicationDtoFilter = {
  and?: InputMaybe<Array<ApplicationDtoFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  motorCarSnapshot?: InputMaybe<JsonObjectFilterComparison>;
  motorcarSwap?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ApplicationDtoFilter>>;
  outletId?: InputMaybe<NumberFieldComparison>;
  refNo?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<ApplicationStatusTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<NumberFieldComparison>;
};

export type ApplicationDtoOffsetConnection = {
  __typename?: 'ApplicationDtoOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ApplicationDto>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ApplicationDtoSort = {
  direction: SortDirection;
  field: ApplicationDtoSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ApplicationDtoSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  MotorCarSnapshot = 'motorCarSnapshot',
  MotorcarSwap = 'motorcarSwap',
  OutletId = 'outletId',
  RefNo = 'refNo',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type ApplicationHistory = {
  __typename?: 'ApplicationHistory';
  action: ApplicationHistoryActionType;
  applicationId: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  meta: Scalars['JSONObject']['output'];
  remark: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Float']['output'];
};

export enum ApplicationHistoryActionType {
  ApplicationSubmission = 'APPLICATION_SUBMISSION',
  ApplicationUpdate = 'APPLICATION_UPDATE',
  CreateApplication = 'CREATE_APPLICATION',
  DocUpload = 'DOC_UPLOAD',
  StatusUpdate = 'STATUS_UPDATE',
}

export type ApplicationHistoryActionTypeFilterComparison = {
  eq?: InputMaybe<ApplicationHistoryActionType>;
  gt?: InputMaybe<ApplicationHistoryActionType>;
  gte?: InputMaybe<ApplicationHistoryActionType>;
  iLike?: InputMaybe<ApplicationHistoryActionType>;
  in?: InputMaybe<Array<ApplicationHistoryActionType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<ApplicationHistoryActionType>;
  lt?: InputMaybe<ApplicationHistoryActionType>;
  lte?: InputMaybe<ApplicationHistoryActionType>;
  neq?: InputMaybe<ApplicationHistoryActionType>;
  notILike?: InputMaybe<ApplicationHistoryActionType>;
  notIn?: InputMaybe<Array<ApplicationHistoryActionType>>;
  notLike?: InputMaybe<ApplicationHistoryActionType>;
};

export type ApplicationHistoryConnection = {
  __typename?: 'ApplicationHistoryConnection';
  /** Array of nodes. */
  nodes: Array<ApplicationHistory>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ApplicationHistoryFilter = {
  action?: InputMaybe<ApplicationHistoryActionTypeFilterComparison>;
  and?: InputMaybe<Array<ApplicationHistoryFilter>>;
  applicationId?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<ApplicationHistoryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<NumberFieldComparison>;
};

export type ApplicationHistoryOffsetConnection = {
  __typename?: 'ApplicationHistoryOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ApplicationHistory>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ApplicationHistorySort = {
  direction: SortDirection;
  field: ApplicationHistorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ApplicationHistorySortFields {
  Action = 'action',
  ApplicationId = 'applicationId',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export enum ApplicationStatusType {
  Accepted = 'ACCEPTED',
  Approved = 'APPROVED',
  Cancelled = 'CANCELLED',
  ConditionalApproval = 'CONDITIONAL_APPROVAL',
  Declined = 'DECLINED',
  Draft = 'DRAFT',
  InProcess = 'IN_PROCESS',
  ManualKycRequired = 'MANUAL_KYC_REQUIRED',
}

export type ApplicationStatusTypeFilterComparison = {
  eq?: InputMaybe<ApplicationStatusType>;
  gt?: InputMaybe<ApplicationStatusType>;
  gte?: InputMaybe<ApplicationStatusType>;
  iLike?: InputMaybe<ApplicationStatusType>;
  in?: InputMaybe<Array<ApplicationStatusType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<ApplicationStatusType>;
  lt?: InputMaybe<ApplicationStatusType>;
  lte?: InputMaybe<ApplicationStatusType>;
  neq?: InputMaybe<ApplicationStatusType>;
  notILike?: InputMaybe<ApplicationStatusType>;
  notIn?: InputMaybe<Array<ApplicationStatusType>>;
  notLike?: InputMaybe<ApplicationStatusType>;
};

export type BasicBrand = {
  __typename?: 'BasicBrand';
  brandCode: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['JSONObject']['output']>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type BasicCategory = {
  __typename?: 'BasicCategory';
  categoryCode: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['JSONObject']['output']>;
  name: Scalars['String']['output'];
};

export type BasicFinancialPlan = {
  __typename?: 'BasicFinancialPlan';
  autoAssign: Scalars['Boolean']['output'];
  calculationMethod: FinancialPlanCalculationType;
  conditions: Scalars['JSONObject']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['JSONObject']['output']>;
  isFeatured: Scalars['Boolean']['output'];
  maxFinanceRate?: Maybe<Scalars['Float']['output']>;
  maxTenure?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  profitRate: Scalars['Float']['output'];
  status: GeneralStatusType;
  tenure: Scalars['JSON']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BasicFinancialPlanConnection = {
  __typename?: 'BasicFinancialPlanConnection';
  /** Array of nodes. */
  nodes: Array<BasicFinancialPlan>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type BasicFinancialPlanFilter = {
  and?: InputMaybe<Array<BasicFinancialPlanFilter>>;
  autoAssign?: InputMaybe<BooleanFieldComparison>;
  calculationMethod?: InputMaybe<FinancialPlanCalculationTypeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  isFeatured?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BasicFinancialPlanFilter>>;
  status?: InputMaybe<GeneralStatusTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type BasicFinancialPlanSort = {
  direction: SortDirection;
  field: BasicFinancialPlanSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BasicFinancialPlanSortFields {
  AutoAssign = 'autoAssign',
  CalculationMethod = 'calculationMethod',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsFeatured = 'isFeatured',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type BasicPromotionDto = {
  __typename?: 'BasicPromotionDTO';
  description?: Maybe<Scalars['String']['output']>;
  endDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  instalment?: Maybe<Instalment>;
  profitRateReduction: Scalars['Float']['output'];
  startDate: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
};

/** This input used to bind 2FA. */
export type BindTwoFactorInput = {
  code: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Brand = {
  __typename?: 'Brand';
  brandCode: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['JSONObject']['output']>;
  motorcarCount?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  popularityCount: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  status: GeneralStatusType;
  updatedAt: Scalars['DateTime']['output'];
};

export type BrandConnection = {
  __typename?: 'BrandConnection';
  /** Array of nodes. */
  nodes: Array<Brand>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type BrandFilter = {
  and?: InputMaybe<Array<BrandFilter>>;
  brandCode?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BrandFilter>>;
  popularityCount?: InputMaybe<NumberFieldComparison>;
  slug?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<GeneralStatusTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type BrandOffsetConnection = {
  __typename?: 'BrandOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Brand>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type BrandSort = {
  direction: SortDirection;
  field: BrandSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BrandSortFields {
  BrandCode = 'brandCode',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  PopularityCount = 'popularityCount',
  Slug = 'slug',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type Category = {
  __typename?: 'Category';
  categoryCode: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['JSONObject']['output']>;
  mobileImage?: Maybe<Scalars['JSONObject']['output']>;
  name: Scalars['String']['output'];
  popularityCount: Scalars['Float']['output'];
  status: GeneralStatusType;
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /** Array of nodes. */
  nodes: Array<Category>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CategoryDeleteResponse = {
  __typename?: 'CategoryDeleteResponse';
  categoryCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['JSONObject']['output']>;
  mobileImage?: Maybe<Scalars['JSONObject']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  popularityCount?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<GeneralStatusType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryFilter = {
  and?: InputMaybe<Array<CategoryFilter>>;
  categoryCode?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CategoryFilter>>;
  popularityCount?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<GeneralStatusTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CategoryOffsetConnection = {
  __typename?: 'CategoryOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Category>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CategorySort = {
  direction: SortDirection;
  field: CategorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CategorySortFields {
  CategoryCode = 'categoryCode',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  PopularityCount = 'popularityCount',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type CityState = {
  __typename?: 'CityState';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  postcode: Scalars['String']['output'];
  state: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ComputeUpdateApplicationInput = {
  address?: InputMaybe<CreateBasicAddressInput>;
  emergencyContact?: InputMaybe<EmergencyContactInput>;
  employmentDetails?: InputMaybe<EmploymentDetailsInput>;
  motorcarId: Scalars['Float']['input'];
  outletId: Scalars['Float']['input'];
  salutation?: InputMaybe<Scalars['String']['input']>;
  tenure?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateApplicationInput = {
  address?: InputMaybe<CreateBasicAddressInput>;
  emergencyContact?: InputMaybe<EmergencyContactInput>;
  employmentDetails?: InputMaybe<EmploymentDetailsInput>;
  motorcarId: Scalars['Float']['input'];
  outletId: Scalars['Float']['input'];
  salutation?: InputMaybe<Scalars['String']['input']>;
  tenure: Scalars['Float']['input'];
};

export type CreateBasicAddressInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBrandInput = {
  brandCode: Scalars['String']['input'];
  image?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  status: GeneralStatusType;
};

export type CreateCategoryInput = {
  categoryCode: Scalars['String']['input'];
  image?: InputMaybe<ImageInput>;
  mobileImage?: InputMaybe<ImageInput>;
  name: Scalars['String']['input'];
  status: GeneralStatusType;
};

export type CreateFaqInput = {
  answer: Scalars['String']['input'];
  priority: Scalars['Float']['input'];
  question: Scalars['String']['input'];
  status: GeneralStatusType;
};

export type CreateFinancialPlanInput = {
  autoAssign: Scalars['Boolean']['input'];
  calculationMethod?: InputMaybe<FinancialPlanCalculationType>;
  conditions?: InputMaybe<Scalars['JSONObject']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['JSON']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  profitRate: Scalars['Float']['input'];
  status: GeneralStatusType;
  tenure: Scalars['JSON']['input'];
};

export type CreateHomeBannerInput = {
  actions: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['JSON']['input'];
  isInternalLink: Scalars['Boolean']['input'];
  mobileImage?: InputMaybe<Scalars['JSON']['input']>;
  priority: Scalars['Float']['input'];
  status?: InputMaybe<GeneralStatusType>;
  title: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMiscInput = {
  key: MiscType;
  status: GeneralStatusType;
  value?: InputMaybe<Scalars['JSONObject']['input']>;
};

export type CreateMotorCarInput = {
  brandId: Scalars['Float']['input'];
  categoryId: Scalars['Float']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  financialPlanId?: InputMaybe<Scalars['Float']['input']>;
  images?: InputMaybe<Scalars['JSON']['input']>;
  modelName: Scalars['String']['input'];
  popularityCount?: InputMaybe<Scalars['Float']['input']>;
  promotionId?: InputMaybe<Scalars['Float']['input']>;
  sellingPriceEM: Scalars['Float']['input'];
  sellingPriceWM: Scalars['Float']['input'];
  specification?: InputMaybe<Scalars['JSONObject']['input']>;
  status: GeneralStatusType;
};

export type CreateOneCategoryInput = {
  /** The record to create */
  category: CreateCategoryInput;
};

export type CreateOneFaqInput = {
  /** The record to create */
  faq: CreateFaqInput;
};

export type CreateOneMiscInput = {
  /** The record to create */
  misc: CreateMiscInput;
};

export type CreateOnePromotionInput = {
  /** The record to create */
  promotion: CreatePromotionInput;
};

export type CreateOneRoleInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slugs: Array<Scalars['String']['input']>;
};

export type CreateOutletInput = {
  address1: Scalars['String']['input'];
  address2?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  code: Scalars['String']['input'];
  country?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  faxNo?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['JSON']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  postcode: Scalars['String']['input'];
  profileImage?: InputMaybe<Scalars['JSON']['input']>;
  registrationNo: Scalars['String']['input'];
  state: Scalars['String']['input'];
  status: OutletStatusType;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreatePortalUserAddressInput = {
  address1: Scalars['String']['input'];
  address2?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  country?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  postcode: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type CreatePortalUserInput = {
  address?: InputMaybe<CreatePortalUserAddressInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname: Scalars['String']['input'];
  gender: UserGenderType;
  password: Scalars['String']['input'];
  phoneCode?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<PortalUserStatusType>;
};

export type CreateProductBannerInput = {
  actions: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['JSON']['input'];
  isFeatured: Scalars['Boolean']['input'];
  isInternalLink: Scalars['Boolean']['input'];
  mobileImage?: InputMaybe<Scalars['JSON']['input']>;
  priority: Scalars['Float']['input'];
  status?: InputMaybe<GeneralStatusType>;
  title: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePromotionBannerInput = {
  actions: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['JSON']['input'];
  isInternalLink: Scalars['Boolean']['input'];
  mobileImage?: InputMaybe<Scalars['JSON']['input']>;
  position?: InputMaybe<PagePlacementType>;
  priority: Scalars['Float']['input'];
  status?: InputMaybe<GeneralStatusType>;
  title: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePromotionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['DateTime']['input'];
  motorcars?: InputMaybe<CreateMotorCarInput>;
  profitRateReduction: Scalars['Float']['input'];
  startDate: Scalars['DateTime']['input'];
  status: GeneralStatusType;
  title: Scalars['String']['input'];
};

export type Dashboard = {
  __typename?: 'Dashboard';
  adoptionRate?: Maybe<Scalars['Float']['output']>;
  applStatusCount?: Maybe<Scalars['JSON']['output']>;
  mostAppliedMotorcar?: Maybe<Scalars['JSON']['output']>;
  popularMotorcar?: Maybe<Array<MotorCar>>;
  totalApplication?: Maybe<Scalars['JSON']['output']>;
  totalUser?: Maybe<Scalars['Float']['output']>;
  userApplied?: Maybe<Scalars['Float']['output']>;
  verifiedUser?: Maybe<Scalars['Float']['output']>;
};

export enum DataIoFilesTypes {
  Csv = 'CSV',
  Excel = 'EXCEL',
}

export enum DataIoPurposeType {
  AddMotorcar = 'ADD_MOTORCAR',
  AddSpecifications = 'ADD_SPECIFICATIONS',
}

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime']['input'];
  upper: Scalars['DateTime']['input'];
};

export type DeleteOneCategoryInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneFaqInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneHomeBannerInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneMiscInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneMotorCarInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneProductBannerInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOnePromotionBannerInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOnePromotionInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type EmergencyContactInput = {
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  contactPerson?: InputMaybe<Scalars['String']['input']>;
  otherRelationship?: InputMaybe<Scalars['String']['input']>;
  relationship?: InputMaybe<Scalars['String']['input']>;
};

export type EmploymentDetailsInput = {
  address?: InputMaybe<CreateBasicAddressInput>;
  employerName?: InputMaybe<Scalars['String']['input']>;
  grossSalary?: InputMaybe<Scalars['Float']['input']>;
  monthOfService?: InputMaybe<Scalars['Float']['input']>;
  officeNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  yearOfService?: InputMaybe<Scalars['Float']['input']>;
};

export type Faq = {
  __typename?: 'Faq';
  answer: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  priority: Scalars['Float']['output'];
  question: Scalars['String']['output'];
  status: GeneralStatusType;
  updatedAt: Scalars['DateTime']['output'];
};

export type FaqConnection = {
  __typename?: 'FaqConnection';
  /** Array of nodes. */
  nodes: Array<Faq>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type FaqDeleteResponse = {
  __typename?: 'FaqDeleteResponse';
  answer?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
  question?: Maybe<Scalars['String']['output']>;
  status?: Maybe<GeneralStatusType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FaqFilter = {
  and?: InputMaybe<Array<FaqFilter>>;
  answer?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<FaqFilter>>;
  priority?: InputMaybe<NumberFieldComparison>;
  question?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<GeneralStatusTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FaqOffsetConnection = {
  __typename?: 'FaqOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Faq>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type FaqSort = {
  direction: SortDirection;
  field: FaqSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FaqSortFields {
  Answer = 'answer',
  CreatedAt = 'createdAt',
  Id = 'id',
  Priority = 'priority',
  Question = 'question',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type FinancialPlan = {
  __typename?: 'FinancialPlan';
  autoAssign: Scalars['Boolean']['output'];
  conditions: Scalars['JSONObject']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['JSONObject']['output']>;
  isFeatured: Scalars['Boolean']['output'];
  maxFinanceRate?: Maybe<Scalars['Float']['output']>;
  maxTenure?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  profitRate: Scalars['Float']['output'];
  status: GeneralStatusType;
  tenure: Scalars['JSON']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum FinancialPlanCalculationType {
  ReducingBalance = 'REDUCING_BALANCE',
  StraightLine = 'STRAIGHT_LINE',
}

export type FinancialPlanCalculationTypeFilterComparison = {
  eq?: InputMaybe<FinancialPlanCalculationType>;
  gt?: InputMaybe<FinancialPlanCalculationType>;
  gte?: InputMaybe<FinancialPlanCalculationType>;
  iLike?: InputMaybe<FinancialPlanCalculationType>;
  in?: InputMaybe<Array<FinancialPlanCalculationType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<FinancialPlanCalculationType>;
  lt?: InputMaybe<FinancialPlanCalculationType>;
  lte?: InputMaybe<FinancialPlanCalculationType>;
  neq?: InputMaybe<FinancialPlanCalculationType>;
  notILike?: InputMaybe<FinancialPlanCalculationType>;
  notIn?: InputMaybe<Array<FinancialPlanCalculationType>>;
  notLike?: InputMaybe<FinancialPlanCalculationType>;
};

export type FinancialPlanFilter = {
  and?: InputMaybe<Array<FinancialPlanFilter>>;
  autoAssign?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  isFeatured?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FinancialPlanFilter>>;
  status?: InputMaybe<GeneralStatusTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FinancialPlanOffsetConnection = {
  __typename?: 'FinancialPlanOffsetConnection';
  /** Array of nodes. */
  nodes: Array<FinancialPlan>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type FinancialPlanSort = {
  direction: SortDirection;
  field: FinancialPlanSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FinancialPlanSortFields {
  AutoAssign = 'autoAssign',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsFeatured = 'isFeatured',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export enum GeneralStatusType {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
}

export type GeneralStatusTypeFilterComparison = {
  eq?: InputMaybe<GeneralStatusType>;
  gt?: InputMaybe<GeneralStatusType>;
  gte?: InputMaybe<GeneralStatusType>;
  iLike?: InputMaybe<GeneralStatusType>;
  in?: InputMaybe<Array<GeneralStatusType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<GeneralStatusType>;
  lt?: InputMaybe<GeneralStatusType>;
  lte?: InputMaybe<GeneralStatusType>;
  neq?: InputMaybe<GeneralStatusType>;
  notILike?: InputMaybe<GeneralStatusType>;
  notIn?: InputMaybe<Array<GeneralStatusType>>;
  notLike?: InputMaybe<GeneralStatusType>;
};

/** This input is used to generate auth related OTP */
export type GenerateOtpInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  purpose: TokenPurpose;
};

export type GroupedPopularLogDto = {
  __typename?: 'GroupedPopularLogDto';
  brands?: Maybe<Scalars['JSON']['output']>;
  categories?: Maybe<Scalars['JSON']['output']>;
  motorCars?: Maybe<Scalars['JSON']['output']>;
  searchQuery?: Maybe<Scalars['JSON']['output']>;
};

export type HomeBanner = {
  __typename?: 'HomeBanner';
  actions: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['JSONObject']['output'];
  isInternalLink: Scalars['Boolean']['output'];
  mobileImage?: Maybe<Scalars['JSONObject']['output']>;
  priority: Scalars['Float']['output'];
  status: GeneralStatusType;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type HomeBannerConnection = {
  __typename?: 'HomeBannerConnection';
  /** Array of nodes. */
  nodes: Array<HomeBanner>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type HomeBannerDeleteResponse = {
  __typename?: 'HomeBannerDeleteResponse';
  actions?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['JSONObject']['output']>;
  isInternalLink?: Maybe<Scalars['Boolean']['output']>;
  mobileImage?: Maybe<Scalars['JSONObject']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<GeneralStatusType>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type HomeBannerFilter = {
  actions?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<HomeBannerFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<HomeBannerFilter>>;
  priority?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<GeneralStatusTypeFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type HomeBannerOffsetConnection = {
  __typename?: 'HomeBannerOffsetConnection';
  /** Array of nodes. */
  nodes: Array<HomeBanner>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type HomeBannerSort = {
  direction: SortDirection;
  field: HomeBannerSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum HomeBannerSortFields {
  Actions = 'actions',
  CreatedAt = 'createdAt',
  Id = 'id',
  Priority = 'priority',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type ImageInput = {
  fileSize: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  sequence?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<ShenmaImageType>;
  url: Scalars['String']['input'];
};

export type Instalment = {
  __typename?: 'Instalment';
  em: Scalars['Float']['output'];
  wm: Scalars['Float']['output'];
};

export type IntFieldComparison = {
  between?: InputMaybe<IntFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  notBetween?: InputMaybe<IntFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntFieldComparisonBetween = {
  lower: Scalars['Int']['input'];
  upper: Scalars['Int']['input'];
};

export type JsonObjectFilterComparison = {
  eq?: InputMaybe<Scalars['JSONObject']['input']>;
  gt?: InputMaybe<Scalars['JSONObject']['input']>;
  gte?: InputMaybe<Scalars['JSONObject']['input']>;
  iLike?: InputMaybe<Scalars['JSONObject']['input']>;
  in?: InputMaybe<Array<Scalars['JSONObject']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSONObject']['input']>;
  lt?: InputMaybe<Scalars['JSONObject']['input']>;
  lte?: InputMaybe<Scalars['JSONObject']['input']>;
  neq?: InputMaybe<Scalars['JSONObject']['input']>;
  notILike?: InputMaybe<Scalars['JSONObject']['input']>;
  notIn?: InputMaybe<Array<Scalars['JSONObject']['input']>>;
  notLike?: InputMaybe<Scalars['JSONObject']['input']>;
};

export type Misc = {
  __typename?: 'Misc';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  key: MiscType;
  status: GeneralStatusType;
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['JSONObject']['output'];
};

export type MiscDeleteResponse = {
  __typename?: 'MiscDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<MiscType>;
  status?: Maybe<GeneralStatusType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['JSONObject']['output']>;
};

export type MiscFilter = {
  and?: InputMaybe<Array<MiscFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  key?: InputMaybe<MiscTypeFilterComparison>;
  or?: InputMaybe<Array<MiscFilter>>;
  status?: InputMaybe<GeneralStatusTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type MiscOffsetConnection = {
  __typename?: 'MiscOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Misc>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type MiscSort = {
  direction: SortDirection;
  field: MiscSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum MiscSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Key = 'key',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export enum MiscType {
  AddMotorcarTemplate = 'ADD_MOTORCAR_TEMPLATE',
  AddSpecificationTemplate = 'ADD_SPECIFICATION_TEMPLATE',
  Logo = 'LOGO',
  Pdpa = 'PDPA',
  Privacy = 'PRIVACY',
  Tnc = 'TNC',
}

export type MiscTypeFilterComparison = {
  eq?: InputMaybe<MiscType>;
  gt?: InputMaybe<MiscType>;
  gte?: InputMaybe<MiscType>;
  iLike?: InputMaybe<MiscType>;
  in?: InputMaybe<Array<MiscType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<MiscType>;
  lt?: InputMaybe<MiscType>;
  lte?: InputMaybe<MiscType>;
  neq?: InputMaybe<MiscType>;
  notILike?: InputMaybe<MiscType>;
  notIn?: InputMaybe<Array<MiscType>>;
  notLike?: InputMaybe<MiscType>;
};

export type Model = {
  __typename?: 'Model';
  brandCode: Scalars['String']['output'];
  brandSlug: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type ModelBrandCodeFilterComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
};

export type ModelBrandSlugFilterComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
};

export type ModelFilter = {
  and?: InputMaybe<Array<ModelFilter>>;
  brandCode?: InputMaybe<ModelBrandCodeFilterComparison>;
  brandSlug?: InputMaybe<ModelBrandSlugFilterComparison>;
  name?: InputMaybe<ModelNameFilterComparison>;
  or?: InputMaybe<Array<ModelFilter>>;
  slug?: InputMaybe<ModelSlugFilterComparison>;
};

export type ModelNameFilterComparison = {
  iLike?: InputMaybe<Scalars['String']['input']>;
};

export type ModelOffsetConnection = {
  __typename?: 'ModelOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Model>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ModelSlugFilterComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
};

export type ModelSort = {
  direction: SortDirection;
  field: ModelSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ModelSortFields {
  BrandCode = 'brandCode',
  BrandSlug = 'brandSlug',
  Name = 'name',
  Slug = 'slug',
}

export enum ModuleType {
  Application = 'APPLICATION',
  ApplicationHistory = 'APPLICATION_HISTORY',
  Brand = 'BRAND',
  Category = 'CATEGORY',
  DataIo = 'DATA_IO',
  Faq = 'FAQ',
  FinancingPlan = 'FINANCING_PLAN',
  HomeBanner = 'HOME_BANNER',
  Misc = 'MISC',
  Motorcar = 'MOTORCAR',
  Notification = 'NOTIFICATION',
  Outlet = 'OUTLET',
  Permission = 'PERMISSION',
  PortalUser = 'PORTAL_USER',
  PortalUserActivity = 'PORTAL_USER_ACTIVITY',
  PortalUserAddress = 'PORTAL_USER_ADDRESS',
  ProductBanner = 'PRODUCT_BANNER',
  Promotion = 'PROMOTION',
  PromotionBanner = 'PROMOTION_BANNER',
  Role = 'ROLE',
  User = 'USER',
  UserAddress = 'USER_ADDRESS',
}

export type ModuleTypeFilterComparison = {
  eq?: InputMaybe<ModuleType>;
  gt?: InputMaybe<ModuleType>;
  gte?: InputMaybe<ModuleType>;
  iLike?: InputMaybe<ModuleType>;
  in?: InputMaybe<Array<ModuleType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<ModuleType>;
  lt?: InputMaybe<ModuleType>;
  lte?: InputMaybe<ModuleType>;
  neq?: InputMaybe<ModuleType>;
  notILike?: InputMaybe<ModuleType>;
  notIn?: InputMaybe<Array<ModuleType>>;
  notLike?: InputMaybe<ModuleType>;
};

export type MotorCar = {
  __typename?: 'MotorCar';
  brand?: Maybe<BasicBrand>;
  brandId: Scalars['Float']['output'];
  category?: Maybe<BasicCategory>;
  categoryId: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** Current Active Promotion, base on promotion condition. If no active/ongoing promotion will return null */
  currentPromotion?: Maybe<BasicPromotionDto>;
  description?: Maybe<Scalars['String']['output']>;
  financialPlan?: Maybe<BasicFinancialPlan>;
  financialPlanId: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  images?: Maybe<Scalars['JSON']['output']>;
  instalment?: Maybe<Instalment>;
  instalmentRate?: Maybe<Scalars['Int']['output']>;
  modelName: Scalars['String']['output'];
  outlets?: Maybe<Array<Outlet>>;
  popularityCount: Scalars['Float']['output'];
  /** Selected Promotions for the motorcar */
  promotions?: Maybe<BasicPromotionDto>;
  sellingPriceEM: Scalars['Float']['output'];
  sellingPriceWM: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  specification?: Maybe<Scalars['JSONObject']['output']>;
  status: GeneralStatusType;
  totalPopularityCount?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type MotorCarDeleteResponse = {
  __typename?: 'MotorCarDeleteResponse';
  brandId?: Maybe<Scalars['Float']['output']>;
  categoryId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  financialPlanId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  images?: Maybe<Scalars['JSON']['output']>;
  modelName?: Maybe<Scalars['String']['output']>;
  popularityCount?: Maybe<Scalars['Float']['output']>;
  sellingPriceEM?: Maybe<Scalars['Float']['output']>;
  sellingPriceWM?: Maybe<Scalars['Float']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  specification?: Maybe<Scalars['JSONObject']['output']>;
  status?: Maybe<GeneralStatusType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MotorCarFilter = {
  and?: InputMaybe<Array<MotorCarFilter>>;
  brandId?: InputMaybe<NumberFieldComparison>;
  categoryId?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  financialPlanId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  modelName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<MotorCarFilter>>;
  popularityCount?: InputMaybe<NumberFieldComparison>;
  sellingPriceEM?: InputMaybe<NumberFieldComparison>;
  sellingPriceWM?: InputMaybe<NumberFieldComparison>;
  slug?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<GeneralStatusTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type MotorCarOffsetConnection = {
  __typename?: 'MotorCarOffsetConnection';
  /** Array of nodes. */
  nodes: Array<MotorCar>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type MotorCarSort = {
  direction: SortDirection;
  field: MotorCarSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum MotorCarSortFields {
  BrandId = 'brandId',
  CategoryId = 'categoryId',
  CreatedAt = 'createdAt',
  Description = 'description',
  FinancialPlanId = 'financialPlanId',
  Id = 'id',
  ModelName = 'modelName',
  PopularityCount = 'popularityCount',
  SellingPriceEm = 'sellingPriceEM',
  SellingPriceWm = 'sellingPriceWM',
  Slug = 'slug',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type Mutation = {
  __typename?: 'Mutation';
  /** This API used to assign motorcar to an outlet */
  assignOutletMotorcar: Outlet;
  /** Bind 2FA to user */
  bindTwoFactor: Scalars['Boolean']['output'];
  /** This API used to cancel Application */
  cancelApplication: ApplicationDto;
  /** This API used to create Application */
  createApplication: ApplicationDto;
  /** This API used for create one brand */
  createOneBrand: Brand;
  createOneCategory: Category;
  createOneFaq: Faq;
  /** This API used for create one Financial Plan */
  createOneFinancialPlan: BasicFinancialPlan;
  /** This API used for create one home banner */
  createOneHomeBanner: HomeBanner;
  createOneMisc: Misc;
  /** This API used to create One motorcar */
  createOneMotorCar?: Maybe<MotorCar>;
  /** This API used for create one outlet */
  createOneOutlet: Outlet;
  /** This API used for create one Product banner */
  createOneProductBanner: ProductBanner;
  createOnePromotion: Promotion;
  /** This API used for create one Promotion banner */
  createOnePromotionBanner: PromotionBanner;
  /** This API used for create one role */
  createOneRole: Role;
  /** This API used to create portal user */
  createPortalUser: PortalUser;
  /** This API used for delete draft application */
  deleteDraftApplication: Scalars['Boolean']['output'];
  /** This API used for delete brand */
  deleteOneBrand: Scalars['Boolean']['output'];
  deleteOneCategory: CategoryDeleteResponse;
  deleteOneFaq: FaqDeleteResponse;
  /** This API used for delete financial plan */
  deleteOneFinancialPlan: Scalars['Boolean']['output'];
  deleteOneHomeBanner: HomeBannerDeleteResponse;
  deleteOneMisc: MiscDeleteResponse;
  deleteOneMotorCar: MotorCarDeleteResponse;
  deleteOneProductBanner: ProductBannerDeleteResponse;
  deleteOnePromotion: PromotionDeleteResponse;
  deleteOnePromotionBanner: PromotionBannerDeleteResponse;
  /** This API used for delete role */
  deleteOneRole: Scalars['Boolean']['output'];
  /** This API used to delete portal user */
  deletePortalUser: PortalUser;
  /** This API is used to change the user password */
  forgotPassword: Scalars['Boolean']['output'];
  /** This API is used to change the user password when they have forgotten with OTP */
  forgotPasswordWithOTP: Scalars['Boolean']['output'];
  /** This API is used to change the portal user password when they have forgotten with OTP */
  forgotPortalPasswordWithOTP: Scalars['Boolean']['output'];
  /** This API is used to change the user password when they have forgotten */
  generateOTP: Scalars['Int']['output'];
  generateSignedUrl: SignedUrl;
  /** This API used to generate 2fa info for user to bind later */
  generateTwoFactor: TwoFactorInfo;
  /** This API used for check whether email is registerable */
  isRegisterable: Scalars['Boolean']['output'];
  /** This API used to mark all notification as read */
  markAllAsRead: Scalars['Boolean']['output'];
  /** This API used to mark a single notification as read. */
  markAsRead: Scalars['Boolean']['output'];
  /** This API used for login with OTP */
  otpSignIn: AccessToken;
  /** Bind 2FA to user */
  portalBindTwoFactor: Scalars['Boolean']['output'];
  /** This API used to change login password */
  portalChangePassword: Scalars['Boolean']['output'];
  /** This API used to generate 2fa info for user to bind later */
  portalGenerateTwoFactor: TwoFactorInfo;
  /** This API used to exchange new access token with an old token */
  portalRefreshToken: AccessToken;
  /** This API used for login */
  portalSignIn: AccessToken;
  /** Unbind two factor */
  portalUnbindTwoFactor: Scalars['Boolean']['output'];
  /** This API used to verify 2fa code from user. This API mostly do not needed */
  portalVerifyTwoFactor: Scalars['Boolean']['output'];
  /** This API used to exchange new access token with an old token */
  refreshToken: AccessToken;
  /** This API used to requesting new token whenever switching visiting company */
  register: AccessToken;
  /** This API is used to generate email for reset password on portal */
  resetPortalUserPasswordWithUrl: Scalars['Boolean']['output'];
  /** This API is used to generate email for reset password */
  resetUserPasswordWithUrl: Scalars['Boolean']['output'];
  /** This API used for login */
  signIn: AccessToken;
  /** Unbind 2FA */
  unbindTwoFactor: Scalars['Boolean']['output'];
  /** This API used to update Application */
  updateApplication: ApplicationDto;
  /** This API used for update one brand */
  updateOneBrand: Brand;
  updateOneCategory: Category;
  updateOneFaq: Faq;
  /** This API used for update one Financial Plan */
  updateOneFinancialPlan: BasicFinancialPlan;
  /** This API used for update one brand */
  updateOneHomeBanner: HomeBanner;
  updateOneMisc: Misc;
  /** This API used to create One motorcar */
  updateOneMotorCar?: Maybe<MotorCar>;
  /** This API used for update one outlet */
  updateOneOutlet: Outlet;
  /** This API used for update one Product banner */
  updateOneProductBanner: ProductBanner;
  updateOnePromotion: Promotion;
  /** This API used for update one Promotion banner */
  updateOnePromotionBanner: PromotionBanner;
  /** This API used for update one role */
  updateOneRole: Role;
  updateOneUser: User;
  /** This API used to update portal user */
  updatePortalUser: PortalUser;
  /** This API used for update user profile */
  updateUserProfile: User;
  uploadExcelFile: Scalars['JSON']['output'];
  utilsLoanOffered?: Maybe<Scalars['Boolean']['output']>;
  utilsSubmitShenma?: Maybe<Scalars['Boolean']['output']>;
  utilsUpdateAppl?: Maybe<Scalars['Boolean']['output']>;
  /** This API used to verify 2fa code from user. This API mostly do not needed */
  verifyTwoFactor: Scalars['Boolean']['output'];
};

export type MutationAssignOutletMotorcarArgs = {
  input: AssignOutletMotorcarInput;
};

export type MutationBindTwoFactorArgs = {
  input: BindTwoFactorInput;
};

export type MutationCancelApplicationArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationCreateApplicationArgs = {
  input: CreateApplicationInput;
  safeAsDraft?: InputMaybe<Scalars['Boolean']['input']>;
  supportDocs?: InputMaybe<Array<ImageInput>>;
};

export type MutationCreateOneBrandArgs = {
  input: CreateBrandInput;
};

export type MutationCreateOneCategoryArgs = {
  input: CreateOneCategoryInput;
};

export type MutationCreateOneFaqArgs = {
  input: CreateOneFaqInput;
};

export type MutationCreateOneFinancialPlanArgs = {
  input: CreateFinancialPlanInput;
};

export type MutationCreateOneHomeBannerArgs = {
  input: CreateHomeBannerInput;
};

export type MutationCreateOneMiscArgs = {
  input: CreateOneMiscInput;
};

export type MutationCreateOneMotorCarArgs = {
  input: CreateMotorCarInput;
};

export type MutationCreateOneOutletArgs = {
  input: CreateOutletInput;
};

export type MutationCreateOneProductBannerArgs = {
  input: CreateProductBannerInput;
};

export type MutationCreateOnePromotionArgs = {
  input: CreateOnePromotionInput;
};

export type MutationCreateOnePromotionBannerArgs = {
  input: CreatePromotionBannerInput;
};

export type MutationCreateOneRoleArgs = {
  input: CreateOneRoleInput;
};

export type MutationCreatePortalUserArgs = {
  input: CreatePortalUserInput;
};

export type MutationDeleteOneBrandArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationDeleteOneCategoryArgs = {
  input: DeleteOneCategoryInput;
};

export type MutationDeleteOneFaqArgs = {
  input: DeleteOneFaqInput;
};

export type MutationDeleteOneFinancialPlanArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationDeleteOneHomeBannerArgs = {
  input: DeleteOneHomeBannerInput;
};

export type MutationDeleteOneMiscArgs = {
  input: DeleteOneMiscInput;
};

export type MutationDeleteOneMotorCarArgs = {
  input: DeleteOneMotorCarInput;
};

export type MutationDeleteOneProductBannerArgs = {
  input: DeleteOneProductBannerInput;
};

export type MutationDeleteOnePromotionArgs = {
  input: DeleteOnePromotionInput;
};

export type MutationDeleteOnePromotionBannerArgs = {
  input: DeleteOnePromotionBannerInput;
};

export type MutationDeleteOneRoleArgs = {
  id: Scalars['Int']['input'];
};

export type MutationDeletePortalUserArgs = {
  id: Scalars['Int']['input'];
};

export type MutationForgotPasswordArgs = {
  input: PasswordInput;
};

export type MutationForgotPasswordWithOtpArgs = {
  input: PasswordWithOtpInput;
};

export type MutationForgotPortalPasswordWithOtpArgs = {
  input: PasswordWithOtpInput;
};

export type MutationGenerateOtpArgs = {
  audience?: InputMaybe<Scalars['String']['input']>;
  input: GenerateOtpInput;
};

export type MutationGenerateSignedUrlArgs = {
  input: UploadRequest;
};

export type MutationIsRegisterableArgs = {
  email: Scalars['String']['input'];
};

export type MutationMarkAsReadArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationOtpSignInArgs = {
  input: OtpSignInInput;
};

export type MutationPortalBindTwoFactorArgs = {
  input: BindTwoFactorInput;
};

export type MutationPortalChangePasswordArgs = {
  input: PortalAuthChangePasswordInput;
};

export type MutationPortalRefreshTokenArgs = {
  input: RefreshAccessTokenInput;
};

export type MutationPortalSignInArgs = {
  input: PortalAuthSignInInput;
};

export type MutationPortalUnbindTwoFactorArgs = {
  input: UnbindTwoFactorInput;
};

export type MutationPortalVerifyTwoFactorArgs = {
  code: Scalars['String']['input'];
};

export type MutationRefreshTokenArgs = {
  input: RefreshAccessTokenInput;
};

export type MutationRegisterArgs = {
  input: RegisterInput;
  token: ValidateSecuredTokenInput;
};

export type MutationResetPortalUserPasswordWithUrlArgs = {
  input: ResetPasswordEmailInput;
};

export type MutationResetUserPasswordWithUrlArgs = {
  input: ResetPasswordEmailInput;
};

export type MutationSignInArgs = {
  input: SignInInput;
};

export type MutationUnbindTwoFactorArgs = {
  input: UnbindTwoFactorInput;
};

export type MutationUpdateApplicationArgs = {
  id: Scalars['Int']['input'];
  safeAsDraft?: InputMaybe<Scalars['Boolean']['input']>;
  supportDocs?: InputMaybe<Array<ImageInput>>;
  update: ComputeUpdateApplicationInput;
};

export type MutationUpdateOneBrandArgs = {
  input: UpdateOneBrandInput;
};

export type MutationUpdateOneCategoryArgs = {
  input: UpdateOneCategoryInput;
};

export type MutationUpdateOneFaqArgs = {
  input: UpdateOneFaqInput;
};

export type MutationUpdateOneFinancialPlanArgs = {
  input: UpdateOneFinancialPlanInput;
};

export type MutationUpdateOneHomeBannerArgs = {
  input: UpdateOneHomeBannerInput;
};

export type MutationUpdateOneMiscArgs = {
  input: UpdateOneMiscInput;
};

export type MutationUpdateOneMotorCarArgs = {
  id: Scalars['Int']['input'];
  input: UpdateMotorCarInput;
};

export type MutationUpdateOneOutletArgs = {
  input: UpdateOneOutletInput;
};

export type MutationUpdateOneProductBannerArgs = {
  input: UpdateOneProductBannerInput;
};

export type MutationUpdateOnePromotionArgs = {
  input: UpdateOnePromotionInput;
};

export type MutationUpdateOnePromotionBannerArgs = {
  input: UpdateOnePromotionBannerInput;
};

export type MutationUpdateOneRoleArgs = {
  input: UpdateOneRoleInput;
};

export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};

export type MutationUpdatePortalUserArgs = {
  id: Scalars['Int']['input'];
  update: UpdatePortalUserInput;
};

export type MutationUpdateUserProfileArgs = {
  input: UpdateProfileInput;
};

export type MutationUploadExcelFileArgs = {
  fileType: DataIoFilesTypes;
  purpose: DataIoPurposeType;
  signedUrl: Scalars['String']['input'];
};

export type MutationUtilsLoanOfferedArgs = {
  amount: Scalars['Float']['input'];
  finalApproval: Scalars['Boolean']['input'];
  refNo: Scalars['String']['input'];
};

export type MutationUtilsSubmitShenmaArgs = {
  refNo: Scalars['String']['input'];
};

export type MutationUtilsUpdateApplArgs = {
  actionType?: InputMaybe<ApplicationActionTypes>;
  refNo: Scalars['String']['input'];
  status: Scalars['String']['input'];
};

export type MutationVerifyTwoFactorArgs = {
  code: Scalars['String']['input'];
};

export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['DateTime']['output'];
  hasRead: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  meta: Scalars['JSONObject']['output'];
  title: Scalars['String']['output'];
  type: NotificationType;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Float']['output'];
};

export type NotificationFilter = {
  and?: InputMaybe<Array<NotificationFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  hasRead?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<NotificationFilter>>;
  type?: InputMaybe<NotificationTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<NumberFieldComparison>;
};

export type NotificationOffsetConnection = {
  __typename?: 'NotificationOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Notification>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type NotificationSort = {
  direction: SortDirection;
  field: NotificationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum NotificationSortFields {
  CreatedAt = 'createdAt',
  HasRead = 'hasRead',
  Id = 'id',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export enum NotificationType {
  Reminder = 'REMINDER',
  Success = 'SUCCESS',
  Warning = 'WARNING',
}

export type NotificationTypeFilterComparison = {
  eq?: InputMaybe<NotificationType>;
  gt?: InputMaybe<NotificationType>;
  gte?: InputMaybe<NotificationType>;
  iLike?: InputMaybe<NotificationType>;
  in?: InputMaybe<Array<NotificationType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<NotificationType>;
  lt?: InputMaybe<NotificationType>;
  lte?: InputMaybe<NotificationType>;
  neq?: InputMaybe<NotificationType>;
  notILike?: InputMaybe<NotificationType>;
  notIn?: InputMaybe<Array<NotificationType>>;
  notLike?: InputMaybe<NotificationType>;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float']['input'];
  upper: Scalars['Float']['input'];
};

/** This input used to sign in with OTP */
export type OtpSignInInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  token: ValidateSecuredTokenInput;
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Outlet = {
  __typename?: 'Outlet';
  address1: Scalars['String']['output'];
  address2: Scalars['String']['output'];
  city: Scalars['String']['output'];
  code: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  faxNo?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  images: Scalars['JSON']['output'];
  isFeatured: Scalars['Boolean']['output'];
  latitude: Scalars['String']['output'];
  longitude: Scalars['String']['output'];
  name: Scalars['String']['output'];
  postcode: Scalars['String']['output'];
  profileImage?: Maybe<Scalars['JSON']['output']>;
  registrationNo: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  state: Scalars['String']['output'];
  status: OutletStatusType;
  totalApplications: Scalars['Float']['output'];
  totalMotorcar: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};

export type OutletConnection = {
  __typename?: 'OutletConnection';
  /** Array of nodes. */
  nodes: Array<Outlet>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OutletFilter = {
  and?: InputMaybe<Array<OutletFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  country?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  isFeatured?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OutletFilter>>;
  postcode?: InputMaybe<StringFieldComparison>;
  slug?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OutletStatusTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  verified?: InputMaybe<BooleanFieldComparison>;
};

export type OutletOffsetConnection = {
  __typename?: 'OutletOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Outlet>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OutletSort = {
  direction: SortDirection;
  field: OutletSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OutletSortFields {
  City = 'city',
  Code = 'code',
  Country = 'country',
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  IsFeatured = 'isFeatured',
  Name = 'name',
  Postcode = 'postcode',
  Slug = 'slug',
  State = 'state',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  Verified = 'verified',
}

export enum OutletStatusType {
  Activated = 'ACTIVATED',
  Deactivated = 'DEACTIVATED',
  Pending = 'PENDING',
}

export type OutletStatusTypeFilterComparison = {
  eq?: InputMaybe<OutletStatusType>;
  gt?: InputMaybe<OutletStatusType>;
  gte?: InputMaybe<OutletStatusType>;
  iLike?: InputMaybe<OutletStatusType>;
  in?: InputMaybe<Array<OutletStatusType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<OutletStatusType>;
  lt?: InputMaybe<OutletStatusType>;
  lte?: InputMaybe<OutletStatusType>;
  neq?: InputMaybe<OutletStatusType>;
  notILike?: InputMaybe<OutletStatusType>;
  notIn?: InputMaybe<Array<OutletStatusType>>;
  notLike?: InputMaybe<OutletStatusType>;
};

export enum PagePlacementType {
  HomePageBottom = 'HOME_PAGE_BOTTOM',
  HomePageMiddle = 'HOME_PAGE_MIDDLE',
  ModelDetailsBottom = 'MODEL_DETAILS_BOTTOM',
  ModelListingBottom = 'MODEL_LISTING_BOTTOM',
}

export type PagePlacementTypeFilterComparison = {
  eq?: InputMaybe<PagePlacementType>;
  gt?: InputMaybe<PagePlacementType>;
  gte?: InputMaybe<PagePlacementType>;
  iLike?: InputMaybe<PagePlacementType>;
  in?: InputMaybe<Array<PagePlacementType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<PagePlacementType>;
  lt?: InputMaybe<PagePlacementType>;
  lte?: InputMaybe<PagePlacementType>;
  neq?: InputMaybe<PagePlacementType>;
  notILike?: InputMaybe<PagePlacementType>;
  notIn?: InputMaybe<Array<PagePlacementType>>;
  notLike?: InputMaybe<PagePlacementType>;
};

/** This input used to reset password or changing password */
export type PasswordInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  newPassword: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

/** This input used to reset password or changing password with OTP */
export type PasswordWithOtpInput = {
  newPassword: Scalars['String']['input'];
  token: ValidateSecuredTokenInput;
};

export type Permission = {
  __typename?: 'Permission';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  module: ModuleType;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PermissionFilter = {
  and?: InputMaybe<Array<PermissionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  module?: InputMaybe<ModuleTypeFilterComparison>;
  or?: InputMaybe<Array<PermissionFilter>>;
  slug?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PermissionSort = {
  direction: SortDirection;
  field: PermissionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PermissionSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Module = 'module',
  Slug = 'slug',
  UpdatedAt = 'updatedAt',
}

export type PopularSearch = {
  __typename?: 'PopularSearch';
  popularityCount: Scalars['Float']['output'];
  searchQuery: Scalars['String']['output'];
};

export type PopularSearchConnection = {
  __typename?: 'PopularSearchConnection';
  /** Array of nodes. */
  nodes: Array<PopularSearch>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type PopularSearchFilter = {
  and?: InputMaybe<Array<PopularSearchFilter>>;
  or?: InputMaybe<Array<PopularSearchFilter>>;
  popularityCount?: InputMaybe<NumberFieldComparison>;
  searchQuery?: InputMaybe<StringFieldComparison>;
};

export type PopularSearchSort = {
  direction: SortDirection;
  field: PopularSearchSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PopularSearchSortFields {
  PopularityCount = 'popularityCount',
  SearchQuery = 'searchQuery',
}

export type PortalAuthChangePasswordInput = {
  /** New password */
  password: Scalars['String']['input'];
};

export type PortalAuthSignInInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type PortalUser = {
  __typename?: 'PortalUser';
  addresses?: Maybe<Array<PortalUserAddress>>;
  createdAt: Scalars['DateTime']['output'];
  dateOfBirth?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname: Scalars['String']['output'];
  gender: UserGenderType;
  id: Scalars['Int']['output'];
  lastLoginDate?: Maybe<Scalars['DateTime']['output']>;
  phoneCode?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Role>;
  status: PortalUserStatusType;
  twoFactorEnabled: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type PortalUserAddressesArgs = {
  filter?: PortalUserAddressFilter;
  sorting?: Array<PortalUserAddressSort>;
};

export type PortalUserActivity = {
  __typename?: 'PortalUserActivity';
  action: PortalUserActivityActionType;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  macAddress?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<Scalars['JSONObject']['output']>;
  recordId?: Maybe<Scalars['String']['output']>;
  table?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Float']['output'];
};

export enum PortalUserActivityActionType {
  Create = 'CREATE',
  Delete = 'DELETE',
  Signin = 'SIGNIN',
  Signout = 'SIGNOUT',
  Update = 'UPDATE',
  View = 'VIEW',
}

export type PortalUserActivityActionTypeFilterComparison = {
  eq?: InputMaybe<PortalUserActivityActionType>;
  gt?: InputMaybe<PortalUserActivityActionType>;
  gte?: InputMaybe<PortalUserActivityActionType>;
  iLike?: InputMaybe<PortalUserActivityActionType>;
  in?: InputMaybe<Array<PortalUserActivityActionType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<PortalUserActivityActionType>;
  lt?: InputMaybe<PortalUserActivityActionType>;
  lte?: InputMaybe<PortalUserActivityActionType>;
  neq?: InputMaybe<PortalUserActivityActionType>;
  notILike?: InputMaybe<PortalUserActivityActionType>;
  notIn?: InputMaybe<Array<PortalUserActivityActionType>>;
  notLike?: InputMaybe<PortalUserActivityActionType>;
};

export type PortalUserActivityConnection = {
  __typename?: 'PortalUserActivityConnection';
  /** Array of nodes. */
  nodes: Array<PortalUserActivity>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type PortalUserActivityFilter = {
  action?: InputMaybe<PortalUserActivityActionTypeFilterComparison>;
  and?: InputMaybe<Array<PortalUserActivityFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<PortalUserActivityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<PortalUserActivityUserIdFilterComparison>;
};

export type PortalUserActivitySort = {
  direction: SortDirection;
  field: PortalUserActivitySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PortalUserActivitySortFields {
  Action = 'action',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type PortalUserActivityUserIdFilterComparison = {
  eq?: InputMaybe<Scalars['Float']['input']>;
};

export type PortalUserAddress = {
  __typename?: 'PortalUserAddress';
  address1: Scalars['String']['output'];
  address2: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  latitude: Scalars['String']['output'];
  longitude: Scalars['String']['output'];
  postcode: Scalars['String']['output'];
  state: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PortalUserAddressFilter = {
  and?: InputMaybe<Array<PortalUserAddressFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  country?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<PortalUserAddressFilter>>;
  postcode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PortalUserAddressSort = {
  direction: SortDirection;
  field: PortalUserAddressSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PortalUserAddressSortFields {
  City = 'city',
  Country = 'country',
  CreatedAt = 'createdAt',
  Id = 'id',
  Postcode = 'postcode',
  State = 'state',
  UpdatedAt = 'updatedAt',
}

export type PortalUserConnection = {
  __typename?: 'PortalUserConnection';
  /** Array of nodes. */
  nodes: Array<PortalUser>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type PortalUserFilter = {
  and?: InputMaybe<Array<PortalUserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  fullname?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<UserGenderTypeFilterComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<PortalUserFilter>>;
  roles?: InputMaybe<PortalUserFilterRoleFilter>;
  status?: InputMaybe<PortalUserStatusTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PortalUserFilterRoleFilter = {
  and?: InputMaybe<Array<PortalUserFilterRoleFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PortalUserFilterRoleFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PortalUserSort = {
  direction: SortDirection;
  field: PortalUserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PortalUserSortFields {
  CreatedAt = 'createdAt',
  Email = 'email',
  Fullname = 'fullname',
  Gender = 'gender',
  Id = 'id',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export enum PortalUserStatusType {
  Activated = 'ACTIVATED',
  Suspended = 'SUSPENDED',
}

export type PortalUserStatusTypeFilterComparison = {
  eq?: InputMaybe<PortalUserStatusType>;
  gt?: InputMaybe<PortalUserStatusType>;
  gte?: InputMaybe<PortalUserStatusType>;
  iLike?: InputMaybe<PortalUserStatusType>;
  in?: InputMaybe<Array<PortalUserStatusType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<PortalUserStatusType>;
  lt?: InputMaybe<PortalUserStatusType>;
  lte?: InputMaybe<PortalUserStatusType>;
  neq?: InputMaybe<PortalUserStatusType>;
  notILike?: InputMaybe<PortalUserStatusType>;
  notIn?: InputMaybe<Array<PortalUserStatusType>>;
  notLike?: InputMaybe<PortalUserStatusType>;
};

export type Pricing = {
  __typename?: 'Pricing';
  amount: Scalars['Float']['output'];
  deposit: Scalars['Float']['output'];
  instalment: Scalars['Float']['output'];
  promotion?: Maybe<Scalars['Float']['output']>;
  sellingPrice: Scalars['Float']['output'];
};

export type ProductBanner = {
  __typename?: 'ProductBanner';
  actions: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['JSONObject']['output'];
  isFeatured: Scalars['Boolean']['output'];
  isInternalLink: Scalars['Boolean']['output'];
  mobileImage?: Maybe<Scalars['JSONObject']['output']>;
  priority: Scalars['Float']['output'];
  status: GeneralStatusType;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type ProductBannerConnection = {
  __typename?: 'ProductBannerConnection';
  /** Array of nodes. */
  nodes: Array<ProductBanner>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductBannerDeleteResponse = {
  __typename?: 'ProductBannerDeleteResponse';
  actions?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['JSONObject']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  isInternalLink?: Maybe<Scalars['Boolean']['output']>;
  mobileImage?: Maybe<Scalars['JSONObject']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<GeneralStatusType>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ProductBannerFilter = {
  actions?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<ProductBannerFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  isFeatured?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ProductBannerFilter>>;
  priority?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<GeneralStatusTypeFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductBannerOffsetConnection = {
  __typename?: 'ProductBannerOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ProductBanner>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductBannerSort = {
  direction: SortDirection;
  field: ProductBannerSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductBannerSortFields {
  Actions = 'actions',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsFeatured = 'isFeatured',
  Priority = 'priority',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type Promotion = {
  __typename?: 'Promotion';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  endDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  profitRateReduction: Scalars['Float']['output'];
  startDate: Scalars['DateTime']['output'];
  status: GeneralStatusType;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PromotionBanner = {
  __typename?: 'PromotionBanner';
  actions: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['JSONObject']['output'];
  isInternalLink: Scalars['Boolean']['output'];
  mobileImage?: Maybe<Scalars['JSONObject']['output']>;
  position?: Maybe<PagePlacementType>;
  priority: Scalars['Float']['output'];
  status: GeneralStatusType;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type PromotionBannerConnection = {
  __typename?: 'PromotionBannerConnection';
  /** Array of nodes. */
  nodes: Array<PromotionBanner>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type PromotionBannerDeleteResponse = {
  __typename?: 'PromotionBannerDeleteResponse';
  actions?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['JSONObject']['output']>;
  isInternalLink?: Maybe<Scalars['Boolean']['output']>;
  mobileImage?: Maybe<Scalars['JSONObject']['output']>;
  position?: Maybe<PagePlacementType>;
  priority?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<GeneralStatusType>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PromotionBannerFilter = {
  actions?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<PromotionBannerFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<PromotionBannerFilter>>;
  position?: InputMaybe<PagePlacementTypeFilterComparison>;
  priority?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<GeneralStatusTypeFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PromotionBannerOffsetConnection = {
  __typename?: 'PromotionBannerOffsetConnection';
  /** Array of nodes. */
  nodes: Array<PromotionBanner>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type PromotionBannerSort = {
  direction: SortDirection;
  field: PromotionBannerSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PromotionBannerSortFields {
  Actions = 'actions',
  CreatedAt = 'createdAt',
  Id = 'id',
  Position = 'position',
  Priority = 'priority',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type PromotionConnection = {
  __typename?: 'PromotionConnection';
  /** Array of nodes. */
  nodes: Array<Promotion>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type PromotionDeleteResponse = {
  __typename?: 'PromotionDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  profitRateReduction?: Maybe<Scalars['Float']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<GeneralStatusType>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PromotionFilter = {
  and?: InputMaybe<Array<PromotionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<PromotionFilter>>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<GeneralStatusTypeFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PromotionSort = {
  direction: SortDirection;
  field: PromotionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PromotionSortFields {
  CreatedAt = 'createdAt',
  Description = 'description',
  EndDate = 'endDate',
  Id = 'id',
  StartDate = 'startDate',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type Query = {
  __typename?: 'Query';
  /** This API used to retrieve popular searched keyword of the day */
  computePopularMotorcar?: Maybe<Scalars['JSON']['output']>;
  /** This API used to retrieve popular searched keyword of the day */
  computePopularSearch?: Maybe<GroupedPopularLogDto>;
  exportApplications: Scalars['String']['output'];
  exportBrands: Scalars['String']['output'];
  exportCustomers: Scalars['String']['output'];
  exportOutlets: Scalars['String']['output'];
  /** This API used for get a list of application history */
  getApplHistory: ApplicationHistoryOffsetConnection;
  /** This API used for get the Application details for the user */
  getApplication: ApplicationDto;
  /** This API used for get the Application details for the user based on the status provided */
  getApplicationByStatus?: Maybe<ApplicationDto>;
  /** This API used to get applications status with total applications count */
  getApplicationStatus: Scalars['JSON']['output'];
  /** This API used for get a list of applications of the user */
  getApplications: ApplicationDtoOffsetConnection;
  /** This API used to retrieve current profile */
  getAuthProfile?: Maybe<User>;
  /** This API used for get the Brand details */
  getBrand?: Maybe<Brand>;
  /** This API used for get a list of available brands */
  getBrands: BrandOffsetConnection;
  /** This API used for get a list of available categories */
  getCategories: CategoryOffsetConnection;
  /** This API used for get the Category details */
  getCategory: Category;
  /** This API used for get the City State by postcode */
  getCityState?: Maybe<CityState>;
  /** This API used to retrieve dashboard data. Default Filter for a month data */
  getDashboardData?: Maybe<Dashboard>;
  /** This API used to retrive eKYC url from Shenma. */
  getEKYCUrl?: Maybe<Scalars['JSON']['output']>;
  /** This API used to calculate the instalment for a motorcar all tenure for potal during create motorcar */
  getEstimatedTenureRate: Array<TenureRate>;
  /** This API used for get a list of faq */
  getFaqs: FaqOffsetConnection;
  /** This API used for get a list of featured financial plan */
  getFeatureFinancialPlans: FinancialPlanOffsetConnection;
  /** This API used for get a list of homepage banner */
  getHomeBanners: HomeBannerOffsetConnection;
  /** This API used for get the Misc details by using key */
  getMiscByKey: Misc;
  getModels: ModelOffsetConnection;
  /** This API used for get the motorcar details for the user */
  getMotorCar?: Maybe<MotorCar>;
  /** This API used to get motorcar count and respective filters data. */
  getMotorCarCountWithFilters: Scalars['JSONObject']['output'];
  /** This API used for get a list of available motorcar filter configs. */
  getMotorCarFilters: Scalars['JSONObject']['output'];
  /** This API used for get a list of motorcars with custom filter */
  getMotorCars: MotorCarOffsetConnection;
  getMotorCarsCount: Scalars['Float']['output'];
  /** This API used for get all motorcars slug */
  getMotorcarsSlug?: Maybe<Scalars['JSON']['output']>;
  /** This API used for get a list of notifications for the user */
  getNotifications: NotificationOffsetConnection;
  /** This API used for get the Outlet details */
  getOutlet?: Maybe<Outlet>;
  /** This API used for get a list of available outlets */
  getOutlets: Array<Outlet>;
  getPermission: Permission;
  getPermissions: Array<Permission>;
  getPopularSearchKeyword: PopularSearch;
  getPopularSearchKeywords: PopularSearchConnection;
  getPortalAppHistories: ApplicationHistoryConnection;
  getPortalAppHistory: ApplicationHistory;
  /** This API used for get the Application details for portal */
  getPortalApplication: ApplicationDto;
  /** This API used for get a list of applications for portal */
  getPortalApplications: ApplicationDtoOffsetConnection;
  /** This API used to retrieve profile */
  getPortalAuthProfile?: Maybe<PortalUser>;
  getPortalBrand: Brand;
  getPortalBrands: BrandConnection;
  getPortalCategories: CategoryConnection;
  getPortalCategory: Category;
  getPortalFaq: Faq;
  getPortalFaqs: FaqConnection;
  getPortalFinancialsPlan: BasicFinancialPlan;
  getPortalFinancialsPlans: BasicFinancialPlanConnection;
  getPortalHomeBanner: HomeBanner;
  getPortalHomeBanners: HomeBannerConnection;
  getPortalMisc: Misc;
  /** This API used for get the motorcar details for portal */
  getPortalMotorCar?: Maybe<MotorCar>;
  /** This API used for get a list of motorcars for portal */
  getPortalMotorCars: MotorCarOffsetConnection;
  getPortalOutlet: Outlet;
  getPortalOutlets: OutletConnection;
  /** This API used for get a list of policies */
  getPortalPolicies: MiscOffsetConnection;
  getPortalProductBanner: ProductBanner;
  getPortalProductBanners: ProductBannerConnection;
  getPortalPromotionBanner: PromotionBanner;
  getPortalPromotionBanners: PromotionBannerConnection;
  getPortalRole: Role;
  getPortalRoles: RoleConnection;
  getPortalUser: PortalUser;
  getPortalUserActivities: PortalUserActivityConnection;
  getPortalUsers: PortalUserConnection;
  /** This API used for get a list of Product banner */
  getProductBanners: ProductBannerOffsetConnection;
  getPromotion: Promotion;
  /** This API used for get a list of Promotion banner */
  getPromotionBanners: PromotionBannerOffsetConnection;
  getPromotions: PromotionConnection;
  /** This API used to calculate the instalment for a motorcar all tenure */
  getTenureRate: Array<TenureRate>;
  getUnreadNotificationsCount: Scalars['Float']['output'];
  getUser: User;
  getUsers: UserConnection;
  /** This API used for check user currently has on applications by status. */
  hasApplication: Scalars['Boolean']['output'];
  utilsTest?: Maybe<Scalars['JSON']['output']>;
  /** Session ID or contact must provided for secured OTP */
  validateSecuredToken: Scalars['Boolean']['output'];
};

export type QueryExportApplicationsArgs = {
  filter?: ApplicationDtoFilter;
  modelName?: InputMaybe<Scalars['String']['input']>;
  paging?: OffsetPaging;
  sorting?: Array<ApplicationDtoSort>;
};

export type QueryExportBrandsArgs = {
  filter?: BrandFilter;
  fullList?: InputMaybe<Scalars['Boolean']['input']>;
  outletId?: InputMaybe<Scalars['Float']['input']>;
  outletState?: InputMaybe<Scalars['String']['input']>;
  paging?: OffsetPaging;
  popular?: InputMaybe<Scalars['Boolean']['input']>;
  sorting?: Array<BrandSort>;
};

export type QueryExportCustomersArgs = {
  filter?: UserFilter;
  paging?: OffsetPaging;
  sorting?: Array<UserSort>;
};

export type QueryExportOutletsArgs = {
  boundingCoordinates?: InputMaybe<Scalars['JSONObject']['input']>;
  brands?: InputMaybe<Array<Scalars['String']['input']>>;
  filter?: OutletFilter;
  fullList?: InputMaybe<Scalars['Boolean']['input']>;
  paging?: OffsetPaging;
  sorting?: Array<OutletSort>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetApplHistoryArgs = {
  filter?: ApplicationHistoryFilter;
  paging?: OffsetPaging;
  sorting?: Array<ApplicationHistorySort>;
};

export type QueryGetApplicationArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetApplicationByStatusArgs = {
  status?: InputMaybe<ApplicationStatusType>;
};

export type QueryGetApplicationStatusArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  modelName?: InputMaybe<Scalars['String']['input']>;
  outletId?: InputMaybe<Scalars['Float']['input']>;
  refNo?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<ApplicationStatusType>;
  userId?: InputMaybe<Scalars['Float']['input']>;
};

export type QueryGetApplicationsArgs = {
  filter?: ApplicationDtoFilter;
  modelName?: InputMaybe<Scalars['String']['input']>;
  paging?: OffsetPaging;
  sorting?: Array<ApplicationDtoSort>;
};

export type QueryGetBrandArgs = {
  id?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetBrandsArgs = {
  filter?: BrandFilter;
  fullList?: InputMaybe<Scalars['Boolean']['input']>;
  outletId?: InputMaybe<Scalars['Float']['input']>;
  outletState?: InputMaybe<Scalars['String']['input']>;
  paging?: OffsetPaging;
  popular?: InputMaybe<Scalars['Boolean']['input']>;
  sorting?: Array<BrandSort>;
};

export type QueryGetCategoriesArgs = {
  filter?: CategoryFilter;
  fullList?: InputMaybe<Scalars['Boolean']['input']>;
  paging?: OffsetPaging;
  popular?: InputMaybe<Scalars['Boolean']['input']>;
  sorting?: Array<CategorySort>;
};

export type QueryGetCategoryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetCityStateArgs = {
  postcode: Scalars['String']['input'];
};

export type QueryGetDashboardDataArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type QueryGetEkycUrlArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetEstimatedTenureRateArgs = {
  financialPlanId: Scalars['Int']['input'];
  priceEM: Scalars['Int']['input'];
  priceWM: Scalars['Int']['input'];
  promotionId?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetFaqsArgs = {
  filter?: FaqFilter;
  paging?: OffsetPaging;
  sorting?: Array<FaqSort>;
};

export type QueryGetFeatureFinancialPlansArgs = {
  filter?: FinancialPlanFilter;
  paging?: OffsetPaging;
  sorting?: Array<FinancialPlanSort>;
};

export type QueryGetHomeBannersArgs = {
  filter?: HomeBannerFilter;
  paging?: OffsetPaging;
  sorting?: Array<HomeBannerSort>;
};

export type QueryGetMiscByKeyArgs = {
  key?: InputMaybe<MiscType>;
};

export type QueryGetModelsArgs = {
  filter?: ModelFilter;
  paging?: OffsetPaging;
  sorting?: Array<ModelSort>;
};

export type QueryGetMotorCarArgs = {
  id?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetMotorCarCountWithFiltersArgs = {
  brandSlug?: InputMaybe<Scalars['String']['input']>;
  budget?: InputMaybe<Scalars['JSONObject']['input']>;
  categoryCode?: InputMaybe<Scalars['String']['input']>;
  filter?: MotorCarFilter;
  hasPromotion?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  outletIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  outletStates?: InputMaybe<Array<Scalars['String']['input']>>;
  popular?: InputMaybe<Scalars['Boolean']['input']>;
  rangeSpecification?: InputMaybe<Scalars['JSONObject']['input']>;
  specification?: InputMaybe<Scalars['JSONObject']['input']>;
};

export type QueryGetMotorCarFiltersArgs = {
  brandSlug?: InputMaybe<Scalars['String']['input']>;
  budget?: InputMaybe<Scalars['JSONObject']['input']>;
  categoryCode?: InputMaybe<Scalars['String']['input']>;
  filter?: MotorCarFilter;
  hasPromotion?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  outletIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  outletStates?: InputMaybe<Array<Scalars['String']['input']>>;
  popular?: InputMaybe<Scalars['Boolean']['input']>;
  rangeSpecification?: InputMaybe<Scalars['JSONObject']['input']>;
  specification?: InputMaybe<Scalars['JSONObject']['input']>;
};

export type QueryGetMotorCarsArgs = {
  brandSlug?: InputMaybe<Scalars['String']['input']>;
  budget?: InputMaybe<Scalars['JSONObject']['input']>;
  categoryCode?: InputMaybe<Scalars['String']['input']>;
  filter?: MotorCarFilter;
  hasPromotion?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  outletIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  outletStates?: InputMaybe<Array<Scalars['String']['input']>>;
  paging?: OffsetPaging;
  popular?: InputMaybe<Scalars['Boolean']['input']>;
  rangeSpecification?: InputMaybe<Scalars['JSONObject']['input']>;
  sorting?: Array<MotorCarSort>;
  specification?: InputMaybe<Scalars['JSONObject']['input']>;
};

export type QueryGetMotorCarsCountArgs = {
  brandSlug?: InputMaybe<Scalars['String']['input']>;
  budget?: InputMaybe<Scalars['JSONObject']['input']>;
  categoryCode?: InputMaybe<Scalars['String']['input']>;
  filter?: MotorCarFilter;
  hasPromotion?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  outletIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  outletStates?: InputMaybe<Array<Scalars['String']['input']>>;
  popular?: InputMaybe<Scalars['Boolean']['input']>;
  rangeSpecification?: InputMaybe<Scalars['JSONObject']['input']>;
  specification?: InputMaybe<Scalars['JSONObject']['input']>;
};

export type QueryGetMotorcarsSlugArgs = {
  promo?: Scalars['Boolean']['input'];
};

export type QueryGetNotificationsArgs = {
  filter?: NotificationFilter;
  paging?: OffsetPaging;
  sorting?: Array<NotificationSort>;
};

export type QueryGetOutletArgs = {
  id?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetOutletsArgs = {
  boundingCoordinates?: InputMaybe<Scalars['JSONObject']['input']>;
  brands?: InputMaybe<Array<Scalars['String']['input']>>;
  filter?: OutletFilter;
  fullList?: InputMaybe<Scalars['Boolean']['input']>;
  sorting?: Array<OutletSort>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetPermissionArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetPermissionsArgs = {
  filter?: PermissionFilter;
  sorting?: Array<PermissionSort>;
};

export type QueryGetPopularSearchKeywordArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetPopularSearchKeywordsArgs = {
  filter?: PopularSearchFilter;
  paging?: OffsetPaging;
  sorting?: Array<PopularSearchSort>;
};

export type QueryGetPortalAppHistoriesArgs = {
  filter?: ApplicationHistoryFilter;
  paging?: OffsetPaging;
  sorting?: Array<ApplicationHistorySort>;
};

export type QueryGetPortalAppHistoryArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetPortalApplicationArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetPortalApplicationsArgs = {
  filter?: ApplicationDtoFilter;
  modelName?: InputMaybe<Scalars['String']['input']>;
  paging?: OffsetPaging;
  sorting?: Array<ApplicationDtoSort>;
};

export type QueryGetPortalBrandArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetPortalBrandsArgs = {
  filter?: BrandFilter;
  paging?: OffsetPaging;
  sorting?: Array<BrandSort>;
};

export type QueryGetPortalCategoriesArgs = {
  filter?: CategoryFilter;
  paging?: OffsetPaging;
  sorting?: Array<CategorySort>;
};

export type QueryGetPortalCategoryArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetPortalFaqArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetPortalFaqsArgs = {
  filter?: FaqFilter;
  paging?: OffsetPaging;
  sorting?: Array<FaqSort>;
};

export type QueryGetPortalFinancialsPlanArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetPortalFinancialsPlansArgs = {
  filter?: BasicFinancialPlanFilter;
  paging?: OffsetPaging;
  sorting?: Array<BasicFinancialPlanSort>;
};

export type QueryGetPortalHomeBannerArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetPortalHomeBannersArgs = {
  filter?: HomeBannerFilter;
  paging?: OffsetPaging;
  sorting?: Array<HomeBannerSort>;
};

export type QueryGetPortalMiscArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetPortalMotorCarArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetPortalMotorCarsArgs = {
  filter?: MotorCarFilter;
  outletId?: InputMaybe<Scalars['Float']['input']>;
  paging?: OffsetPaging;
  sorting?: Array<MotorCarSort>;
};

export type QueryGetPortalOutletArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetPortalOutletsArgs = {
  filter?: OutletFilter;
  paging?: OffsetPaging;
  sorting?: Array<OutletSort>;
};

export type QueryGetPortalPoliciesArgs = {
  filter?: MiscFilter;
  paging?: OffsetPaging;
  sorting?: Array<MiscSort>;
};

export type QueryGetPortalProductBannerArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetPortalProductBannersArgs = {
  filter?: ProductBannerFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProductBannerSort>;
};

export type QueryGetPortalPromotionBannerArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetPortalPromotionBannersArgs = {
  filter?: PromotionBannerFilter;
  paging?: OffsetPaging;
  sorting?: Array<PromotionBannerSort>;
};

export type QueryGetPortalRoleArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetPortalRolesArgs = {
  filter?: RoleFilter;
  paging?: OffsetPaging;
  sorting?: Array<RoleSort>;
};

export type QueryGetPortalUserArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetPortalUserActivitiesArgs = {
  filter?: PortalUserActivityFilter;
  paging?: OffsetPaging;
  sorting?: Array<PortalUserActivitySort>;
};

export type QueryGetPortalUsersArgs = {
  filter?: PortalUserFilter;
  paging?: OffsetPaging;
  sorting?: Array<PortalUserSort>;
};

export type QueryGetProductBannersArgs = {
  filter?: ProductBannerFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProductBannerSort>;
};

export type QueryGetPromotionArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetPromotionBannersArgs = {
  filter?: PromotionBannerFilter;
  paging?: OffsetPaging;
  sorting?: Array<PromotionBannerSort>;
};

export type QueryGetPromotionsArgs = {
  filter?: PromotionFilter;
  paging?: OffsetPaging;
  sorting?: Array<PromotionSort>;
};

export type QueryGetTenureRateArgs = {
  motorcarId?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetUserArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGetUsersArgs = {
  filter?: UserFilter;
  paging?: OffsetPaging;
  sorting?: Array<UserSort>;
};

export type QueryHasApplicationArgs = {
  status?: InputMaybe<Array<ApplicationStatusType>>;
};

export type QueryValidateSecuredTokenArgs = {
  input: ValidateSecuredTokenInput;
};

/** This input used to prolong user access. NOTE: refreshToken must matched with connected wallet */
export type RefreshAccessTokenInput = {
  refreshToken: Scalars['String']['input'];
};

/** This input used to register user */
export type RegisterInput = {
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  gender: UserGenderType;
  idNo: Scalars['String']['input'];
  idType: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneCode: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  referralCode?: InputMaybe<Scalars['String']['input']>;
};

/** This input is used to send email for password reset */
export type ResetPasswordEmailInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  purpose: TokenPurpose;
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Permission>>;
  totalPortalUser?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type RolePermissionsArgs = {
  filter?: PermissionFilter;
  sorting?: Array<PermissionSort>;
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  /** Array of nodes. */
  nodes: Array<Role>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type RoleFilter = {
  and?: InputMaybe<Array<RoleFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<RoleFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type RoleSort = {
  direction: SortDirection;
  field: RoleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RoleSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export enum ShenmaImageType {
  BankStatement_1 = 'BANK_STATEMENT_1',
  BankStatement_2 = 'BANK_STATEMENT_2',
  BankStatement_3 = 'BANK_STATEMENT_3',
  IdCardPic_1 = 'ID_CARD_PIC_1',
  IdCardPic_2 = 'ID_CARD_PIC_2',
  Others_1 = 'OTHERS_1',
  Others_2 = 'OTHERS_2',
  Others_3 = 'OTHERS_3',
  Salary_1 = 'SALARY_1',
  Salary_2 = 'SALARY_2',
  Salary_3 = 'SALARY_3',
}

/** This input used to sign in */
export type SignInInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type SignedUrl = {
  __typename?: 'SignedUrl';
  signedUrl: Scalars['String']['output'];
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST',
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iLike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notILike?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TenureRate = {
  __typename?: 'TenureRate';
  em: Pricing;
  tenure: Scalars['Float']['output'];
  wm: Pricing;
};

export enum TokenPurpose {
  Invitation = 'INVITATION',
  ResetPassword = 'RESET_PASSWORD',
  SignIn = 'SIGN_IN',
  SignUp = 'SIGN_UP',
}

/** The 2fa info used to bind to user */
export type TwoFactorInfo = {
  __typename?: 'TwoFactorInfo';
  output: Scalars['String']['output'];
  secret: Scalars['String']['output'];
};

/** This input used to unbind 2FA. */
export type UnbindTwoFactorInput = {
  code: Scalars['String']['input'];
};

export type UpdateBrandInput = {
  brandCode?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<GeneralStatusType>;
};

export type UpdateCategoryInput = {
  categoryCode?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<ImageInput>;
  mobileImage?: InputMaybe<ImageInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<GeneralStatusType>;
};

export type UpdateFaqInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Float']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<GeneralStatusType>;
};

export type UpdateFinancialPlanInput = {
  autoAssign?: InputMaybe<Scalars['Boolean']['input']>;
  calculationMethod?: InputMaybe<FinancialPlanCalculationType>;
  conditions?: InputMaybe<Scalars['JSONObject']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['JSON']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profitRate?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<GeneralStatusType>;
  tenure?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateHomeBannerInput = {
  actions?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['JSON']['input']>;
  isInternalLink?: InputMaybe<Scalars['Boolean']['input']>;
  mobileImage?: InputMaybe<Scalars['JSON']['input']>;
  priority?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<GeneralStatusType>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMiscInput = {
  key?: InputMaybe<MiscType>;
  status?: InputMaybe<GeneralStatusType>;
  value?: InputMaybe<Scalars['JSONObject']['input']>;
};

export type UpdateMotorCarInput = {
  brandId?: InputMaybe<Scalars['Float']['input']>;
  categoryId?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  financialPlanId?: InputMaybe<Scalars['Float']['input']>;
  images?: InputMaybe<Scalars['JSON']['input']>;
  modelName?: InputMaybe<Scalars['String']['input']>;
  popularityCount?: InputMaybe<Scalars['Float']['input']>;
  promotionId?: InputMaybe<Scalars['Float']['input']>;
  sellingPriceEM?: InputMaybe<Scalars['Float']['input']>;
  sellingPriceWM?: InputMaybe<Scalars['Float']['input']>;
  specification?: InputMaybe<Scalars['JSONObject']['input']>;
  status?: InputMaybe<GeneralStatusType>;
};

export type UpdateOneBrandInput = {
  id: Scalars['Float']['input'];
  update: UpdateBrandInput;
};

export type UpdateOneCategoryInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateCategoryInput;
};

export type UpdateOneFaqInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateFaqInput;
};

export type UpdateOneFinancialPlanInput = {
  id: Scalars['Float']['input'];
  update: UpdateFinancialPlanInput;
};

export type UpdateOneHomeBannerInput = {
  id: Scalars['Float']['input'];
  update: UpdateHomeBannerInput;
};

export type UpdateOneMiscInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateMiscInput;
};

export type UpdateOneOutletInput = {
  id: Scalars['Float']['input'];
  update: UpdateOutletInput;
};

export type UpdateOneProductBannerInput = {
  id: Scalars['Float']['input'];
  update: UpdateProductBannerInput;
};

export type UpdateOnePromotionBannerInput = {
  id: Scalars['Float']['input'];
  update: UpdatePromotionBannerInput;
};

export type UpdateOnePromotionInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdatePromotionInput;
};

export type UpdateOneRoleInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateRoleInput;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateUserInput;
};

export type UpdateOutletInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  faxNo?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['JSON']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['JSON']['input']>;
  registrationNo?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OutletStatusType>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdatePortalUserInput = {
  address?: InputMaybe<CreatePortalUserAddressInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<UserGenderType>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneCode?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<PortalUserStatusType>;
};

export type UpdateProductBannerInput = {
  actions?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['JSON']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isInternalLink?: InputMaybe<Scalars['Boolean']['input']>;
  mobileImage?: InputMaybe<Scalars['JSON']['input']>;
  priority?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<GeneralStatusType>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileInput = {
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<UserGenderType>;
  idNo?: InputMaybe<Scalars['String']['input']>;
  idType?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePromotionBannerInput = {
  actions?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['JSON']['input']>;
  isInternalLink?: InputMaybe<Scalars['Boolean']['input']>;
  mobileImage?: InputMaybe<Scalars['JSON']['input']>;
  position?: InputMaybe<PagePlacementType>;
  priority?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<GeneralStatusType>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePromotionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  motorcars?: InputMaybe<CreateMotorCarInput>;
  profitRateReduction?: InputMaybe<Scalars['Float']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<GeneralStatusType>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateUserInput = {
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<UserGenderType>;
  idNo?: InputMaybe<Scalars['String']['input']>;
  idType?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneCode?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<UserStatusType>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export enum UploadPurpose {
  Document = 'DOCUMENT',
  Image = 'IMAGE',
}

/** Specifies the upload request. */
export type UploadRequest = {
  mimeType: Scalars['String']['input'];
  purpose: UploadPurpose;
};

export type User = {
  __typename?: 'User';
  acceptedLoan: Scalars['Float']['output'];
  addresses?: Maybe<Array<UserAddress>>;
  approvedLoan: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  dateOfBirth?: Maybe<Scalars['DateTime']['output']>;
  ekycVerified: Scalars['Boolean']['output'];
  email?: Maybe<Scalars['String']['output']>;
  fullname: Scalars['String']['output'];
  gender: UserGenderType;
  id: Scalars['Int']['output'];
  idNo: Scalars['String']['output'];
  idType: Scalars['String']['output'];
  loanOffered: Scalars['Float']['output'];
  phoneCode?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  referralCode?: Maybe<Scalars['String']['output']>;
  remark?: Maybe<Scalars['String']['output']>;
  status: UserStatusType;
  totalApplication: Scalars['Float']['output'];
  twoFactorEnabled: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type UserAddressesArgs = {
  filter?: UserAddressFilter;
  sorting?: Array<UserAddressSort>;
};

export type UserAddress = {
  __typename?: 'UserAddress';
  address1: Scalars['String']['output'];
  address2: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  latitude: Scalars['String']['output'];
  longitude: Scalars['String']['output'];
  postcode: Scalars['String']['output'];
  state: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserAddressFilter = {
  and?: InputMaybe<Array<UserAddressFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  country?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<UserAddressFilter>>;
  postcode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserAddressSort = {
  direction: SortDirection;
  field: UserAddressSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserAddressSortFields {
  City = 'city',
  Country = 'country',
  CreatedAt = 'createdAt',
  Id = 'id',
  Postcode = 'postcode',
  State = 'state',
  UpdatedAt = 'updatedAt',
}

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  ekycVerified?: InputMaybe<BooleanFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  fullname?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<UserGenderTypeFilterComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  status?: InputMaybe<UserStatusTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export enum UserGenderType {
  Female = 'FEMALE',
  Male = 'MALE',
  Others = 'OTHERS',
}

export type UserGenderTypeFilterComparison = {
  eq?: InputMaybe<UserGenderType>;
  gt?: InputMaybe<UserGenderType>;
  gte?: InputMaybe<UserGenderType>;
  iLike?: InputMaybe<UserGenderType>;
  in?: InputMaybe<Array<UserGenderType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<UserGenderType>;
  lt?: InputMaybe<UserGenderType>;
  lte?: InputMaybe<UserGenderType>;
  neq?: InputMaybe<UserGenderType>;
  notILike?: InputMaybe<UserGenderType>;
  notIn?: InputMaybe<Array<UserGenderType>>;
  notLike?: InputMaybe<UserGenderType>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  CreatedAt = 'createdAt',
  EkycVerified = 'ekycVerified',
  Email = 'email',
  Fullname = 'fullname',
  Gender = 'gender',
  Id = 'id',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export enum UserStatusType {
  Active = 'ACTIVE',
  Pending = 'PENDING',
  Suspended = 'SUSPENDED',
}

export type UserStatusTypeFilterComparison = {
  eq?: InputMaybe<UserStatusType>;
  gt?: InputMaybe<UserStatusType>;
  gte?: InputMaybe<UserStatusType>;
  iLike?: InputMaybe<UserStatusType>;
  in?: InputMaybe<Array<UserStatusType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<UserStatusType>;
  lt?: InputMaybe<UserStatusType>;
  lte?: InputMaybe<UserStatusType>;
  neq?: InputMaybe<UserStatusType>;
  notILike?: InputMaybe<UserStatusType>;
  notIn?: InputMaybe<Array<UserStatusType>>;
  notLike?: InputMaybe<UserStatusType>;
};

export type ValidateSecuredTokenInput = {
  /** Contact info that tied to the secured token (email/phone number). Is optional for SECURED_TOKEN */
  contact?: InputMaybe<Scalars['String']['input']>;
  /** Better to provide if token type TIMED_OTP, but in some case like frontend are not exposed to id, then use contact field instead  */
  id?: InputMaybe<Scalars['Float']['input']>;
  /** Secured token or secured otp in string form */
  token: Scalars['String']['input'];
};

export type AssignOutletMotorcarInput = {
  motorcarIds: Array<Scalars['Int']['input']>;
  outletId: Scalars['Float']['input'];
};
