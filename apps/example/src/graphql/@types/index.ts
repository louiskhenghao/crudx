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
  Date: { input: any; output: any };
  DateTime: { input: any; output: any };
  Json: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type AdminListingInput = {
  keyword?: InputMaybe<Scalars['String']['input']>;
  user_gender?: InputMaybe<UserGender>;
  user_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  user_role_id?: InputMaybe<Scalars['Int']['input']>;
  user_status?: InputMaybe<UserStatus>;
  user_type_id?: InputMaybe<Scalars['Int']['input']>;
};

export type AnnualRevenue = {
  __typename?: 'AnnualRevenue';
  setting_annual_revenue_id?: Maybe<Scalars['Int']['output']>;
  setting_annual_revenue_name?: Maybe<Scalars['String']['output']>;
};

export type ApplicationStatusCount = {
  __typename?: 'ApplicationStatusCount';
  count?: Maybe<Scalars['Int']['output']>;
  customer_status?: Maybe<CustomerStatus>;
};

export type ApplicationStatusData = {
  __typename?: 'ApplicationStatusData';
  applicant_count?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Bank = {
  __typename?: 'Bank';
  bank_created?: Maybe<Scalars['DateTime']['output']>;
  bank_id?: Maybe<Scalars['Int']['output']>;
  bank_logo?: Maybe<Images>;
  bank_name?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Int']['output']>;
};

export type BankInput = {
  bank_id?: InputMaybe<Scalars['Int']['input']>;
  bank_logo?: InputMaybe<Scalars['Upload']['input']>;
  bank_name?: InputMaybe<Scalars['String']['input']>;
};

/** A paginated list of Bank items. */
export type BankPaginator = {
  __typename?: 'BankPaginator';
  /** A list of Bank items. */
  data: Array<Bank>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type BusinessType = {
  __typename?: 'BusinessType';
  business_type_id?: Maybe<Scalars['Int']['output']>;
  business_type_name?: Maybe<Scalars['Json']['output']>;
  business_type_status?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
};

/** A paginated list of BusinessType items. */
export type BusinessTypePaginator = {
  __typename?: 'BusinessTypePaginator';
  /** A list of BusinessType items. */
  data: Array<BusinessType>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type BusinessYear = {
  __typename?: 'BusinessYear';
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  year_of_business_id?: Maybe<Scalars['Int']['output']>;
  year_of_business_name?: Maybe<Scalars['Json']['output']>;
  year_of_business_status?: Maybe<Scalars['String']['output']>;
};

/** A paginated list of BusinessYear items. */
export type BusinessYearPaginator = {
  __typename?: 'BusinessYearPaginator';
  /** A list of BusinessYear items. */
  data: Array<BusinessYear>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type City = {
  __typename?: 'City';
  city_id: Scalars['Int']['output'];
  city_name: Scalars['String']['output'];
  is_deleted?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<State>;
};

export type CityInput = {
  city_id?: InputMaybe<Scalars['Int']['input']>;
  city_name?: InputMaybe<Scalars['String']['input']>;
  state_id?: InputMaybe<Scalars['Int']['input']>;
};

export type CityListingInput = {
  keyword?: InputMaybe<Scalars['String']['input']>;
  state_id?: InputMaybe<Scalars['Int']['input']>;
};

/** A paginated list of City items. */
export type CityPaginator = {
  __typename?: 'CityPaginator';
  /** A list of City items. */
  data: Array<City>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CompanySize = {
  __typename?: 'CompanySize';
  setting_company_size_id?: Maybe<Scalars['Int']['output']>;
  setting_company_size_name?: Maybe<Scalars['String']['output']>;
};

export type ContactUs = {
  __typename?: 'ContactUs';
  contact_us_action_admin_id?: Maybe<Scalars['Int']['output']>;
  contact_us_action_remark?: Maybe<Scalars['String']['output']>;
  contact_us_company_name?: Maybe<Scalars['String']['output']>;
  contact_us_id?: Maybe<Scalars['Int']['output']>;
  contact_us_loan_amount?: Maybe<Scalars['Float']['output']>;
  contact_us_message?: Maybe<Scalars['String']['output']>;
  contact_us_status?: Maybe<ContactUsStatus>;
  contact_us_user_email?: Maybe<Scalars['String']['output']>;
  contact_us_user_firstname?: Maybe<Scalars['String']['output']>;
  contact_us_user_lastname?: Maybe<Scalars['String']['output']>;
  contact_us_user_mobile?: Maybe<Scalars['String']['output']>;
};

export type ContactUsListingInput = {
  contact_us_status?: InputMaybe<ContactUsStatus>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};

/** A paginated list of ContactUs items. */
export type ContactUsPaginator = {
  __typename?: 'ContactUsPaginator';
  /** A list of ContactUs items. */
  data: Array<ContactUs>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum ContactUsStatus {
  Completed = 'completed',
  Pending = 'pending',
  Rejected = 'rejected',
}

export type ContactUsStatusCount = {
  __typename?: 'ContactUsStatusCount';
  contact_us_status?: Maybe<ContactUsStatus>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ContactUsStatusUpdateInput = {
  contact_us_id?: InputMaybe<Scalars['Int']['input']>;
  contact_us_status?: InputMaybe<ContactUsStatus>;
};

export type ContactUsUpdateInput = {
  contact_us_action_admin_id?: InputMaybe<Scalars['String']['input']>;
  contact_us_action_remark?: InputMaybe<Scalars['String']['input']>;
  contact_us_company_name?: InputMaybe<Scalars['String']['input']>;
  contact_us_id?: InputMaybe<Scalars['Int']['input']>;
  contact_us_loan_amount?: InputMaybe<Scalars['Float']['input']>;
  contact_us_message?: InputMaybe<Scalars['String']['input']>;
  contact_us_status?: InputMaybe<ContactUsStatus>;
  contact_us_user_email?: InputMaybe<Scalars['String']['input']>;
  contact_us_user_firstname?: InputMaybe<Scalars['String']['input']>;
  contact_us_user_lastname?: InputMaybe<Scalars['String']['input']>;
  contact_us_user_mobile?: InputMaybe<Scalars['String']['input']>;
};

export type Country = {
  __typename?: 'Country';
  country_code?: Maybe<Scalars['String']['output']>;
  country_currency_code?: Maybe<Scalars['String']['output']>;
  country_id?: Maybe<Scalars['Int']['output']>;
  country_international_code?: Maybe<Scalars['String']['output']>;
  country_name?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Array<Maybe<State>>>;
};

export type CountryInput = {
  country_code?: InputMaybe<Scalars['String']['input']>;
  country_currency_code?: InputMaybe<Scalars['String']['input']>;
  country_id?: InputMaybe<Scalars['Int']['input']>;
  country_international_code?: InputMaybe<Scalars['String']['input']>;
  country_name?: InputMaybe<Scalars['String']['input']>;
};

/** A paginated list of Country items. */
export type CountryPaginator = {
  __typename?: 'CountryPaginator';
  /** A list of Country items. */
  data: Array<Country>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Customer = {
  __typename?: 'Customer';
  business_type?: Maybe<BusinessType>;
  business_year?: Maybe<BusinessYear>;
  city?: Maybe<City>;
  country?: Maybe<Country>;
  customer_address?: Maybe<Scalars['String']['output']>;
  customer_address2?: Maybe<Scalars['String']['output']>;
  customer_annual_revenue?: Maybe<CustomerAnnualRevenue>;
  customer_approved?: Maybe<Scalars['DateTime']['output']>;
  customer_company_size?: Maybe<CustomerCompanySize>;
  customer_contact_person?: Maybe<Scalars['String']['output']>;
  customer_contact_person_email?: Maybe<Scalars['String']['output']>;
  customer_contact_person_mobile?: Maybe<Scalars['String']['output']>;
  customer_contact_person_role?: Maybe<CustomerContactPersonRole>;
  customer_created?: Maybe<Scalars['DateTime']['output']>;
  customer_email?: Maybe<Scalars['String']['output']>;
  customer_fax?: Maybe<Scalars['String']['output']>;
  customer_id?: Maybe<Scalars['Int']['output']>;
  customer_log?: Maybe<Array<Maybe<CustomerLog>>>;
  customer_mobile?: Maybe<Scalars['String']['output']>;
  customer_name?: Maybe<Scalars['String']['output']>;
  customer_postcode?: Maybe<Scalars['String']['output']>;
  customer_question?: Maybe<Array<Maybe<CustomerQuestion>>>;
  customer_registration_number?: Maybe<Scalars['String']['output']>;
  customer_remark?: Maybe<Scalars['String']['output']>;
  customer_status?: Maybe<CustomerStatus>;
  customer_type?: Maybe<CustomerType>;
  customer_updated?: Maybe<Scalars['DateTime']['output']>;
  customer_website?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  reject_reason?: Maybe<RejectReason>;
  reject_reason_remark?: Maybe<Scalars['String']['output']>;
  setting_annual_revenue?: Maybe<AnnualRevenue>;
  setting_company_size?: Maybe<CompanySize>;
  ssm_business_certificate?: Maybe<Array<Maybe<Media>>>;
  state?: Maybe<State>;
  user?: Maybe<User>;
};

export enum CustomerAnnualRevenue {
  /** 10000-100000 */
  Between_10000_100000 = 'BETWEEN_10000_100000',
  /** 10000- */
  LessThan_10000 = 'LESS_THAN_10000',
  /** 100000+ */
  MoreThan_100000 = 'MORE_THAN_100000',
}

export type CustomerBank = {
  __typename?: 'CustomerBank';
  bank?: Maybe<Bank>;
  customer?: Maybe<Customer>;
  customer_bank_account_number?: Maybe<Scalars['Int']['output']>;
  customer_bank_created?: Maybe<Scalars['DateTime']['output']>;
  customer_bank_holder_name?: Maybe<Scalars['String']['output']>;
  customer_bank_id?: Maybe<Scalars['Int']['output']>;
  customer_bank_updated?: Maybe<Scalars['DateTime']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
};

export type CustomerBankCreateInput = {
  bank_id?: InputMaybe<Scalars['Int']['input']>;
  customer_bank_account_number?: InputMaybe<Scalars['Int']['input']>;
  customer_bank_holder_name?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerBankListingInput = {
  bank_id?: InputMaybe<Scalars['Int']['input']>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};

/** A paginated list of CustomerBank items. */
export type CustomerBankPaginator = {
  __typename?: 'CustomerBankPaginator';
  /** A list of CustomerBank items. */
  data: Array<CustomerBank>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CustomerBankUpdateInput = {
  bank_id?: InputMaybe<Scalars['Int']['input']>;
  customer_bank_account_number?: InputMaybe<Scalars['Int']['input']>;
  customer_bank_holder_name?: InputMaybe<Scalars['String']['input']>;
  customer_bank_id?: InputMaybe<Scalars['Int']['input']>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
};

export enum CustomerCompanySize {
  /** 11-25 */
  Between_11_25 = 'BETWEEN_11_25',
  /** 26-50 */
  Between_26_50 = 'BETWEEN_26_50',
  /** 1-10 */
  LessThan_10 = 'LESS_THAN_10',
  /** 50+ */
  MoreThan_50 = 'MORE_THAN_50',
}

export enum CustomerContactPersonRole {
  Owner = 'Owner',
  Partner = 'Partner',
}

export type CustomerContactPersonUpdateInput = {
  customer_contact_person?: InputMaybe<Scalars['String']['input']>;
  customer_contact_person_email?: InputMaybe<Scalars['String']['input']>;
  customer_contact_person_mobile?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerConversionData = {
  __typename?: 'CustomerConversionData';
  data?: Maybe<Array<Maybe<MonthlyConversionData>>>;
  total_rate?: Maybe<Scalars['Float']['output']>;
};

export type CustomerCreateInput = {
  business_type_id?: InputMaybe<Scalars['Int']['input']>;
  city_id?: InputMaybe<Scalars['Int']['input']>;
  country_id?: InputMaybe<Scalars['Int']['input']>;
  customer_address?: InputMaybe<Scalars['String']['input']>;
  customer_address2?: InputMaybe<Scalars['String']['input']>;
  customer_annual_revenue?: InputMaybe<CustomerAnnualRevenue>;
  customer_company_size?: InputMaybe<CustomerCompanySize>;
  customer_contact_person_role?: InputMaybe<CustomerContactPersonRole>;
  customer_email?: InputMaybe<Scalars['String']['input']>;
  customer_mobile?: InputMaybe<Scalars['String']['input']>;
  customer_name?: InputMaybe<Scalars['String']['input']>;
  customer_postcode?: InputMaybe<Scalars['String']['input']>;
  customer_question?: InputMaybe<Array<InputMaybe<CustomerQuestionInput>>>;
  customer_registration_number?: InputMaybe<Scalars['String']['input']>;
  customer_remark?: InputMaybe<Scalars['String']['input']>;
  customer_type?: InputMaybe<CustomerType>;
  customer_website?: InputMaybe<Scalars['String']['input']>;
  setting_annual_revenue_id?: InputMaybe<Scalars['Int']['input']>;
  setting_company_size_id?: InputMaybe<Scalars['Int']['input']>;
  ssm_business_certificate?: InputMaybe<
    Array<InputMaybe<Scalars['Upload']['input']>>
  >;
  state_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
  year_of_business_id?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerDetailsUpdateInput = {
  business_type_id?: InputMaybe<Scalars['Int']['input']>;
  city_id?: InputMaybe<Scalars['Int']['input']>;
  country_id?: InputMaybe<Scalars['Int']['input']>;
  customer_address?: InputMaybe<Scalars['String']['input']>;
  customer_address2?: InputMaybe<Scalars['String']['input']>;
  customer_annual_revenue?: InputMaybe<CustomerAnnualRevenue>;
  customer_company_size?: InputMaybe<CustomerCompanySize>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  customer_name?: InputMaybe<Scalars['String']['input']>;
  customer_postcode?: InputMaybe<Scalars['String']['input']>;
  customer_registration_number?: InputMaybe<Scalars['String']['input']>;
  customer_status?: InputMaybe<CustomerStatus>;
  customer_website?: InputMaybe<Scalars['String']['input']>;
  setting_annual_revenue_id?: InputMaybe<Scalars['Int']['input']>;
  setting_company_size_id?: InputMaybe<Scalars['Int']['input']>;
  state_id?: InputMaybe<Scalars['Int']['input']>;
  year_of_business_id?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerFullDetail = {
  __typename?: 'CustomerFullDetail';
  approve_reject_details?: Maybe<CustomerLog>;
  business_type?: Maybe<BusinessType>;
  business_type_id?: Maybe<Scalars['Int']['output']>;
  business_year?: Maybe<BusinessYear>;
  city?: Maybe<City>;
  country?: Maybe<Country>;
  customer_address?: Maybe<Scalars['String']['output']>;
  customer_address2?: Maybe<Scalars['String']['output']>;
  customer_annual_revenue?: Maybe<CustomerAnnualRevenue>;
  customer_approved?: Maybe<Scalars['DateTime']['output']>;
  customer_company_size?: Maybe<CustomerCompanySize>;
  customer_contact_person?: Maybe<Scalars['String']['output']>;
  customer_contact_person_email?: Maybe<Scalars['String']['output']>;
  customer_contact_person_mobile?: Maybe<Scalars['String']['output']>;
  customer_contact_person_role?: Maybe<CustomerContactPersonRole>;
  customer_created?: Maybe<Scalars['DateTime']['output']>;
  customer_email?: Maybe<Scalars['String']['output']>;
  customer_fax?: Maybe<Scalars['String']['output']>;
  customer_id?: Maybe<Scalars['Int']['output']>;
  customer_mobile?: Maybe<Scalars['String']['output']>;
  customer_name?: Maybe<Scalars['String']['output']>;
  customer_postcode?: Maybe<Scalars['String']['output']>;
  customer_question?: Maybe<Array<Maybe<CustomerQuestion>>>;
  customer_registration_number?: Maybe<Scalars['String']['output']>;
  customer_remark?: Maybe<Scalars['String']['output']>;
  customer_status?: Maybe<CustomerStatus>;
  customer_type?: Maybe<CustomerType>;
  customer_updated?: Maybe<Scalars['DateTime']['output']>;
  customer_user?: Maybe<Array<Maybe<CustomerUser>>>;
  customer_website?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  setting_annual_revenue?: Maybe<AnnualRevenue>;
  setting_company_size?: Maybe<CompanySize>;
  ssm_business_certificate?: Maybe<Array<Maybe<Media>>>;
  state?: Maybe<State>;
  total_card?: Maybe<Scalars['Int']['output']>;
  total_recipient?: Maybe<Scalars['Int']['output']>;
  total_transaction?: Maybe<Scalars['Int']['output']>;
  total_usage?: Maybe<Scalars['Float']['output']>;
  user?: Maybe<User>;
  year_of_business_id?: Maybe<Scalars['Int']['output']>;
};

export type CustomerLessDetail = {
  __typename?: 'CustomerLessDetail';
  customer_email?: Maybe<Scalars['String']['output']>;
  customer_id?: Maybe<Scalars['Int']['output']>;
  customer_mobile?: Maybe<Scalars['String']['output']>;
  customer_name?: Maybe<Scalars['String']['output']>;
  customer_type?: Maybe<CustomerType>;
  user?: Maybe<User>;
};

export type CustomerListing = {
  __typename?: 'CustomerListing';
  business_type_id?: Maybe<BusinessType>;
  city?: Maybe<City>;
  country?: Maybe<Country>;
  customer_address?: Maybe<Scalars['String']['output']>;
  customer_address2?: Maybe<Scalars['String']['output']>;
  customer_annual_revenue?: Maybe<CustomerAnnualRevenue>;
  customer_approved?: Maybe<Scalars['DateTime']['output']>;
  customer_company_size?: Maybe<CustomerCompanySize>;
  customer_contact_person?: Maybe<Scalars['String']['output']>;
  customer_contact_person_email?: Maybe<Scalars['String']['output']>;
  customer_contact_person_mobile?: Maybe<Scalars['String']['output']>;
  customer_contact_person_role?: Maybe<CustomerContactPersonRole>;
  customer_created?: Maybe<Scalars['DateTime']['output']>;
  customer_email?: Maybe<Scalars['String']['output']>;
  customer_fax?: Maybe<Scalars['String']['output']>;
  customer_id?: Maybe<Scalars['Int']['output']>;
  customer_mobile?: Maybe<Scalars['String']['output']>;
  customer_name?: Maybe<Scalars['String']['output']>;
  customer_postcode?: Maybe<Scalars['String']['output']>;
  customer_question?: Maybe<Array<Maybe<CustomerQuestion>>>;
  customer_registration_number?: Maybe<Scalars['String']['output']>;
  customer_remark?: Maybe<Scalars['String']['output']>;
  customer_status?: Maybe<CustomerStatus>;
  customer_type?: Maybe<CustomerType>;
  customer_updated?: Maybe<Scalars['DateTime']['output']>;
  customer_user?: Maybe<Array<Maybe<CustomerUser>>>;
  customer_website?: Maybe<Scalars['String']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  setting_annual_revenue?: Maybe<AnnualRevenue>;
  setting_company_size?: Maybe<CompanySize>;
  ssm_business_certificate?: Maybe<Array<Maybe<Media>>>;
  state?: Maybe<State>;
  total_card?: Maybe<Scalars['Int']['output']>;
  total_fee?: Maybe<Scalars['Float']['output']>;
  total_recipient?: Maybe<Scalars['Int']['output']>;
  total_transaction?: Maybe<Scalars['Int']['output']>;
  total_usage?: Maybe<Scalars['Float']['output']>;
  user?: Maybe<User>;
  year_of_business_id?: Maybe<BusinessYear>;
};

export type CustomerListingInput = {
  customer_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  customer_status?: InputMaybe<CustomerStatus>;
  customer_type?: InputMaybe<CustomerType>;
  end_date?: InputMaybe<Scalars['Date']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['Date']['input']>;
};

/** A paginated list of CustomerListing items. */
export type CustomerListingPaginator = {
  __typename?: 'CustomerListingPaginator';
  /** A list of CustomerListing items. */
  data: Array<CustomerListing>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CustomerLog = {
  __typename?: 'CustomerLog';
  customer?: Maybe<Customer>;
  customer_log_action?: Maybe<Scalars['String']['output']>;
  customer_log_created?: Maybe<Scalars['DateTime']['output']>;
  customer_log_description?: Maybe<Scalars['String']['output']>;
  customer_log_id?: Maybe<Scalars['Int']['output']>;
  customer_log_remark?: Maybe<Scalars['String']['output']>;
  reject_reason?: Maybe<RejectReason>;
  user?: Maybe<User>;
};

export enum CustomerLogAction {
  Approve = 'approve',
  Create = 'create',
  Reject = 'reject',
  UpdateProfile = 'update_profile',
}

export type CustomerLogListingInput = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  customer_log_action?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['Date']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['Date']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** A paginated list of CustomerLog items. */
export type CustomerLogPaginator = {
  __typename?: 'CustomerLogPaginator';
  /** A list of CustomerLog items. */
  data: Array<CustomerLog>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of Customer items. */
export type CustomerPaginator = {
  __typename?: 'CustomerPaginator';
  /** A list of Customer items. */
  data: Array<Customer>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CustomerQuestion = {
  __typename?: 'CustomerQuestion';
  customer?: Maybe<Customer>;
  customer_question_created?: Maybe<Scalars['DateTime']['output']>;
  customer_question_id?: Maybe<Scalars['Int']['output']>;
  customer_question_title?: Maybe<Scalars['String']['output']>;
  customer_question_value?: Maybe<Scalars['Json']['output']>;
  question?: Maybe<Question>;
};

export type CustomerQuestionInput = {
  customer_question_title?: InputMaybe<Scalars['String']['input']>;
  customer_question_value?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  question_id?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerQuestionListingInput = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  question_id?: InputMaybe<Scalars['Int']['input']>;
};

/** A paginated list of CustomerQuestion items. */
export type CustomerQuestionPaginator = {
  __typename?: 'CustomerQuestionPaginator';
  /** A list of CustomerQuestion items. */
  data: Array<CustomerQuestion>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CustomerRejectInput = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  customer_log_remark?: InputMaybe<Scalars['String']['input']>;
  reject_reason_id?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerSsmUpdateInput = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  ssm_business_certificate?: InputMaybe<
    Array<InputMaybe<Scalars['Upload']['input']>>
  >;
  ssm_business_certificate_id?: InputMaybe<
    Array<InputMaybe<Scalars['Int']['input']>>
  >;
};

export enum CustomerStatus {
  Active = 'Active',
  Pending = 'Pending',
  Rejected = 'Rejected',
  Suspend = 'Suspend',
}

export enum CustomerType {
  Company = 'Company',
  Personal = 'Personal',
}

export type CustomerUpdateInput = {
  business_type_id?: InputMaybe<Scalars['Int']['input']>;
  city_id?: InputMaybe<Scalars['Int']['input']>;
  country_id?: InputMaybe<Scalars['Int']['input']>;
  customer_address?: InputMaybe<Scalars['String']['input']>;
  customer_address2?: InputMaybe<Scalars['String']['input']>;
  customer_annual_revenue?: InputMaybe<CustomerAnnualRevenue>;
  customer_company_size?: InputMaybe<CustomerCompanySize>;
  customer_contact_person?: InputMaybe<Scalars['String']['input']>;
  customer_contact_person_email?: InputMaybe<Scalars['String']['input']>;
  customer_contact_person_mobile?: InputMaybe<Scalars['String']['input']>;
  customer_email?: InputMaybe<Scalars['String']['input']>;
  customer_fax?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  customer_mobile?: InputMaybe<Scalars['String']['input']>;
  customer_name?: InputMaybe<Scalars['String']['input']>;
  customer_postcode?: InputMaybe<Scalars['String']['input']>;
  customer_question?: InputMaybe<Array<InputMaybe<CustomerQuestionInput>>>;
  customer_registration_number?: InputMaybe<Scalars['String']['input']>;
  customer_remark?: InputMaybe<Scalars['String']['input']>;
  customer_status?: InputMaybe<CustomerStatus>;
  customer_type?: InputMaybe<CustomerType>;
  customer_website?: InputMaybe<Scalars['String']['input']>;
  setting_annual_revenue_id?: InputMaybe<Scalars['Int']['input']>;
  setting_company_size_id?: InputMaybe<Scalars['Int']['input']>;
  ssm_business_certificate?: InputMaybe<
    Array<InputMaybe<Scalars['Upload']['input']>>
  >;
  ssm_business_certificate_id?: InputMaybe<
    Array<InputMaybe<Scalars['Int']['input']>>
  >;
  state_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
  year_of_business_id?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerUser = {
  __typename?: 'CustomerUser';
  customer?: Maybe<Customer>;
  customer_user_id?: Maybe<Scalars['Int']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

export type CustomerUserCreateInput = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerUserListingInput = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
};

/** A paginated list of CustomerUser items. */
export type CustomerUserPaginator = {
  __typename?: 'CustomerUserPaginator';
  /** A list of CustomerUser items. */
  data: Array<CustomerUser>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CustomerUserUpdateInput = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  customer_user_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

export type DashboardData = {
  __typename?: 'DashboardData';
  customer_conversion?: Maybe<CustomerConversionData>;
  message?: Maybe<Scalars['String']['output']>;
  payment_request?: Maybe<PaymentRequestData>;
  pending_approve_application?: Maybe<CustomerPaginator>;
  sales_overview?: Maybe<SalesOverviewData>;
  total_application?: Maybe<TotalApplicationData>;
  total_customers?: Maybe<TotalCustomersData>;
};

export type DashboardDataCustomer_ConversionArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type DashboardDataPending_Approve_ApplicationArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type DashboardDataSales_OverviewArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type DashboardDataTotal_ApplicationArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type DashboardDataTotal_CustomersArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageDetail = {
  __typename?: 'ImageDetail';
  media_id?: Maybe<Scalars['Int']['output']>;
  url_media?: Maybe<Scalars['String']['output']>;
};

export type Images = {
  __typename?: 'Images';
  full?: Maybe<Scalars['String']['output']>;
  media_id?: Maybe<Scalars['Int']['output']>;
  thumb?: Maybe<Scalars['String']['output']>;
};

export enum Language {
  /** Bahasa Malaysia */
  Bm = 'bm',
  /** Chinese */
  Cn = 'cn',
  /** English */
  En = 'en',
}

export type LanguageStringInput = {
  bm?: InputMaybe<Scalars['String']['input']>;
  cn?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  device_id: Scalars['String']['input'];
  password: Scalars['String']['input'];
  user_mobile: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  TokenResponse?: Maybe<TokenResponse>;
  message: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
};

export type Media = {
  __typename?: 'Media';
  collection_name?: Maybe<Scalars['String']['output']>;
  conversions?: Maybe<Scalars['Json']['output']>;
  file_name?: Maybe<Scalars['String']['output']>;
  full_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  mime_type?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Message = {
  __typename?: 'Message';
  is_published: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  message_id: Scalars['Int']['output'];
  message_priority?: Maybe<Scalars['Int']['output']>;
  message_slug: Scalars['String']['output'];
};

export type MessageLessDetail = {
  __typename?: 'MessageLessDetail';
  message: Scalars['String']['output'];
  message_id: Scalars['Int']['output'];
};

export enum MessageType {
  LocationFeedback = 'location_feedback',
  TransactionReservationCancel = 'transaction_reservation_cancel',
  UserDeleteReason = 'user_delete_reason',
}

export type MonthlyConversionData = {
  __typename?: 'MonthlyConversionData';
  applicant_count?: Maybe<Scalars['Int']['output']>;
  approved_count?: Maybe<Scalars['Int']['output']>;
  conversion_rate?: Maybe<Scalars['Float']['output']>;
  month?: Maybe<Scalars['String']['output']>;
};

export type MonthlyCustomerData = {
  __typename?: 'MonthlyCustomerData';
  customer_count?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  BankCreate?: Maybe<SuccessResponse>;
  BankDelete?: Maybe<SuccessResponse>;
  BankUpdate?: Maybe<SuccessResponse>;
  CityCreate?: Maybe<SuccessResponse>;
  CityDelete?: Maybe<SuccessResponse>;
  CityUpdate?: Maybe<SuccessResponse>;
  ContactUsDelete?: Maybe<SuccessResponse>;
  ContactUsStatusUpdate?: Maybe<SuccessResponse>;
  ContactUsUpdate?: Maybe<SuccessResponse>;
  CountryCreate?: Maybe<SuccessResponse>;
  CountryDelete?: Maybe<SuccessResponse>;
  CountryUpdate?: Maybe<SuccessResponse>;
  CustomerActivate?: Maybe<SuccessResponse>;
  CustomerApprove?: Maybe<SuccessResponse>;
  CustomerBankCreate?: Maybe<SuccessResponse>;
  CustomerBankDelete?: Maybe<SuccessResponse>;
  CustomerBankUpdate?: Maybe<SuccessResponse>;
  CustomerContactPersonUpdate?: Maybe<SuccessResponse>;
  CustomerCreate?: Maybe<SuccessResponse>;
  CustomerDelete?: Maybe<SuccessResponse>;
  CustomerDetailsUpdate?: Maybe<SuccessResponse>;
  CustomerReject?: Maybe<SuccessResponse>;
  CustomerRequestApproval?: Maybe<SuccessResponse>;
  CustomerSSMUpdate?: Maybe<SuccessResponse>;
  CustomerSuspend?: Maybe<SuccessResponse>;
  CustomerUpdate?: Maybe<SuccessResponse>;
  CustomerUserCreate?: Maybe<SuccessResponse>;
  CustomerUserDelete?: Maybe<SuccessResponse>;
  CustomerUserUpdate?: Maybe<SuccessResponse>;
  Login?: Maybe<LoginResponse>;
  Logout?: Maybe<SuccessResponse>;
  PaymentApprove?: Maybe<SuccessResponse>;
  PaymentCancelApprove?: Maybe<SuccessResponse>;
  PaymentCancelReject?: Maybe<SuccessResponse>;
  PaymentComplete?: Maybe<SuccessResponse>;
  PaymentRefundApprove?: Maybe<SuccessResponse>;
  PaymentRefundReject?: Maybe<SuccessResponse>;
  PaymentReject?: Maybe<SuccessResponse>;
  PaymentRepeatTypeCreate?: Maybe<SuccessResponse>;
  PaymentRepeatTypeDelete?: Maybe<SuccessResponse>;
  PaymentRepeatTypeUpdate?: Maybe<SuccessResponse>;
  PaymentScheduleComplete?: Maybe<SuccessResponse>;
  PaymentScheduleRefundApprove?: Maybe<SuccessResponse>;
  PaymentScheduleRefundReject?: Maybe<SuccessResponse>;
  PaymentScheduleVoid?: Maybe<SuccessResponse>;
  PaymentTypeCreate?: Maybe<SuccessResponse>;
  PaymentTypeDelete?: Maybe<SuccessResponse>;
  PaymentTypeUpdate?: Maybe<SuccessResponse>;
  PaymentVoid?: Maybe<SuccessResponse>;
  QuestionCreate?: Maybe<SuccessResponse>;
  QuestionDelete?: Maybe<SuccessResponse>;
  QuestionUpdate?: Maybe<SuccessResponse>;
  RecipientCategoryCreate?: Maybe<SuccessResponse>;
  RecipientCategoryDelete?: Maybe<SuccessResponse>;
  RecipientCategoryUpdate?: Maybe<SuccessResponse>;
  RecipientCreate?: Maybe<SuccessResponse>;
  RecipientDelete?: Maybe<SuccessResponse>;
  RecipientUpdate?: Maybe<SuccessResponse>;
  RejectReasonCreate?: Maybe<SuccessResponse>;
  RejectReasonDelete?: Maybe<SuccessResponse>;
  RejectReasonUpdate?: Maybe<SuccessResponse>;
  ResetPassword?: Maybe<SuccessResponse>;
  ResetPasswordCheck?: Maybe<SuccessResponse>;
  ResetPasswordSendEmail?: Maybe<SuccessResponse>;
  RoleCreate?: Maybe<SuccessResponse>;
  RoleDelete?: Maybe<SuccessResponse>;
  RoleUpdate?: Maybe<SuccessResponse>;
  SettingCreate?: Maybe<SuccessResponse>;
  SettingDelete?: Maybe<SuccessResponse>;
  SettingUpdate?: Maybe<SuccessResponse>;
  StateCreate?: Maybe<SuccessResponse>;
  StateDelete?: Maybe<SuccessResponse>;
  StateUpdate?: Maybe<SuccessResponse>;
  UpdatePassword: SuccessResponse;
  UserActivate?: Maybe<SuccessResponse>;
  UserBasicDetailsUpdate?: Maybe<SuccessResponse>;
  UserCardCreate?: Maybe<SuccessResponse>;
  UserCardDelete?: Maybe<SuccessResponse>;
  UserCardUpdateDefault?: Maybe<SuccessResponse>;
  UserCardUpdateStatus?: Maybe<SuccessResponse>;
  UserCreate?: Maybe<SuccessResponse>;
  UserDelete?: Maybe<SuccessResponse>;
  UserDeleteCurrentAccount?: Maybe<SuccessResponse>;
  UserProfileImageUpload: SuccessResponse;
  UserSuspend?: Maybe<SuccessResponse>;
  UserUpdate?: Maybe<SuccessResponse>;
  UserUpdatePassword: SuccessResponse;
};

export type MutationBankCreateArgs = {
  input?: InputMaybe<Array<InputMaybe<BankInput>>>;
};

export type MutationBankDeleteArgs = {
  bank_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationBankUpdateArgs = {
  input?: InputMaybe<BankInput>;
};

export type MutationCityCreateArgs = {
  input?: InputMaybe<Array<InputMaybe<CityInput>>>;
};

export type MutationCityDeleteArgs = {
  city_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationCityUpdateArgs = {
  input?: InputMaybe<CityInput>;
};

export type MutationContactUsDeleteArgs = {
  contact_us_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationContactUsStatusUpdateArgs = {
  input?: InputMaybe<ContactUsStatusUpdateInput>;
};

export type MutationContactUsUpdateArgs = {
  input?: InputMaybe<ContactUsUpdateInput>;
};

export type MutationCountryCreateArgs = {
  input?: InputMaybe<Array<InputMaybe<CountryInput>>>;
};

export type MutationCountryDeleteArgs = {
  country_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationCountryUpdateArgs = {
  input?: InputMaybe<CountryInput>;
};

export type MutationCustomerActivateArgs = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationCustomerApproveArgs = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationCustomerBankCreateArgs = {
  input?: InputMaybe<CustomerBankCreateInput>;
};

export type MutationCustomerBankDeleteArgs = {
  customer_bank_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationCustomerBankUpdateArgs = {
  input?: InputMaybe<CustomerBankUpdateInput>;
};

export type MutationCustomerContactPersonUpdateArgs = {
  input?: InputMaybe<CustomerContactPersonUpdateInput>;
};

export type MutationCustomerCreateArgs = {
  input?: InputMaybe<CustomerCreateInput>;
};

export type MutationCustomerDeleteArgs = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationCustomerDetailsUpdateArgs = {
  input?: InputMaybe<CustomerDetailsUpdateInput>;
};

export type MutationCustomerRejectArgs = {
  input?: InputMaybe<CustomerRejectInput>;
};

export type MutationCustomerRequestApprovalArgs = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationCustomerSsmUpdateArgs = {
  input?: InputMaybe<CustomerSsmUpdateInput>;
};

export type MutationCustomerSuspendArgs = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationCustomerUpdateArgs = {
  input?: InputMaybe<CustomerUpdateInput>;
};

export type MutationCustomerUserCreateArgs = {
  input?: InputMaybe<CustomerUserCreateInput>;
};

export type MutationCustomerUserDeleteArgs = {
  customer_user_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationCustomerUserUpdateArgs = {
  input?: InputMaybe<CustomerUserUpdateInput>;
};

export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};

export type MutationPaymentApproveArgs = {
  payment_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationPaymentCancelApproveArgs = {
  payment_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationPaymentCancelRejectArgs = {
  payment_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationPaymentCompleteArgs = {
  input?: InputMaybe<PaymentCompleteInput>;
};

export type MutationPaymentRefundApproveArgs = {
  payment_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationPaymentRefundRejectArgs = {
  input?: InputMaybe<PaymentRefundRejectInput>;
};

export type MutationPaymentRejectArgs = {
  input?: InputMaybe<PaymentRejectInput>;
};

export type MutationPaymentRepeatTypeCreateArgs = {
  input?: InputMaybe<PaymentRepeatTypeInput>;
};

export type MutationPaymentRepeatTypeDeleteArgs = {
  payment_repeat_type_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationPaymentRepeatTypeUpdateArgs = {
  input?: InputMaybe<PaymentRepeatTypeInput>;
};

export type MutationPaymentScheduleCompleteArgs = {
  input?: InputMaybe<PaymentScheduleCompleteInput>;
};

export type MutationPaymentScheduleRefundApproveArgs = {
  payment_schedule_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationPaymentScheduleRefundRejectArgs = {
  input?: InputMaybe<PaymentScheduleRefundRejectInput>;
};

export type MutationPaymentScheduleVoidArgs = {
  input?: InputMaybe<PaymentScheduleVoidInput>;
};

export type MutationPaymentTypeCreateArgs = {
  input?: InputMaybe<PaymentTypeCreateInput>;
};

export type MutationPaymentTypeDeleteArgs = {
  payment_type_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationPaymentTypeUpdateArgs = {
  input?: InputMaybe<PaymentTypeUpdateInput>;
};

export type MutationPaymentVoidArgs = {
  input?: InputMaybe<PaymentVoidInput>;
};

export type MutationQuestionCreateArgs = {
  input?: InputMaybe<QuestionInput>;
};

export type MutationQuestionDeleteArgs = {
  question_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationQuestionUpdateArgs = {
  input?: InputMaybe<QuestionInput>;
};

export type MutationRecipientCategoryCreateArgs = {
  input?: InputMaybe<Array<InputMaybe<RecipientCategoryCreateInput>>>;
};

export type MutationRecipientCategoryDeleteArgs = {
  recipient_category_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationRecipientCategoryUpdateArgs = {
  input?: InputMaybe<RecipientCategoryUpdateInput>;
};

export type MutationRecipientCreateArgs = {
  input?: InputMaybe<RecipientCreateInput>;
};

export type MutationRecipientDeleteArgs = {
  recipient_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationRecipientUpdateArgs = {
  input?: InputMaybe<RecipientUpdateInput>;
};

export type MutationRejectReasonCreateArgs = {
  input?: InputMaybe<RejectReasonInput>;
};

export type MutationRejectReasonDeleteArgs = {
  reject_reason_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationRejectReasonUpdateArgs = {
  input?: InputMaybe<RejectReasonInput>;
};

export type MutationResetPasswordArgs = {
  input?: InputMaybe<ResetPasswordInput>;
};

export type MutationResetPasswordCheckArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type MutationResetPasswordSendEmailArgs = {
  user_email: Scalars['String']['input'];
};

export type MutationRoleCreateArgs = {
  input?: InputMaybe<RoleCreateInput>;
};

export type MutationRoleDeleteArgs = {
  role_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationRoleUpdateArgs = {
  input?: InputMaybe<RoleUpdateInput>;
};

export type MutationSettingCreateArgs = {
  input?: InputMaybe<SettingInput>;
};

export type MutationSettingDeleteArgs = {
  setting_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationSettingUpdateArgs = {
  input?: InputMaybe<SettingInput>;
};

export type MutationStateCreateArgs = {
  input?: InputMaybe<Array<InputMaybe<StateInput>>>;
};

export type MutationStateDeleteArgs = {
  state_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationStateUpdateArgs = {
  input?: InputMaybe<StateInput>;
};

export type MutationUpdatePasswordArgs = {
  input?: InputMaybe<UpdatePasswordInput>;
};

export type MutationUserActivateArgs = {
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationUserBasicDetailsUpdateArgs = {
  input?: InputMaybe<UserBasicDetailsUpdateInput>;
};

export type MutationUserCardCreateArgs = {
  input?: InputMaybe<UserCardCreateInput>;
};

export type MutationUserCardDeleteArgs = {
  user_card_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationUserCardUpdateDefaultArgs = {
  input?: InputMaybe<UserCardUpdateDefaultInput>;
};

export type MutationUserCardUpdateStatusArgs = {
  input?: InputMaybe<UserCardUpdateStatusInput>;
};

export type MutationUserCreateArgs = {
  input?: InputMaybe<UserCreateInput>;
};

export type MutationUserDeleteArgs = {
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationUserDeleteCurrentAccountArgs = {
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserProfileImageUploadArgs = {
  user_profile_image?: InputMaybe<Scalars['Upload']['input']>;
};

export type MutationUserSuspendArgs = {
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationUserUpdateArgs = {
  input?: InputMaybe<UserUpdateInput>;
};

export type MutationUserUpdatePasswordArgs = {
  input?: InputMaybe<UserUpdatePasswordInput>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT',
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM',
}

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Number of nodes in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']['output']>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int']['output'];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']['output']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']['output']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** Number of items per page. */
  perPage: Scalars['Int']['output'];
  /** Number of total available items. */
  total: Scalars['Int']['output'];
};

export type Payment = {
  __typename?: 'Payment';
  customer?: Maybe<Customer>;
  is_payment_repeat?: Maybe<Scalars['Boolean']['output']>;
  is_refund_requested?: Maybe<Scalars['Boolean']['output']>;
  is_repeated?: Maybe<Scalars['Boolean']['output']>;
  payment_amount?: Maybe<Scalars['Float']['output']>;
  payment_amount_total?: Maybe<Scalars['Float']['output']>;
  payment_complete_date?: Maybe<Scalars['Date']['output']>;
  payment_complete_media?: Maybe<Array<Maybe<Media>>>;
  payment_created?: Maybe<Scalars['DateTime']['output']>;
  payment_end_date?: Maybe<Scalars['Date']['output']>;
  payment_extra_charges?: Maybe<Scalars['Float']['output']>;
  payment_extra_charges_rate?: Maybe<Scalars['Float']['output']>;
  payment_extra_charges_total?: Maybe<Scalars['Float']['output']>;
  payment_extra_charges_type?: Maybe<Scalars['String']['output']>;
  payment_grandtotal?: Maybe<Scalars['Float']['output']>;
  payment_id?: Maybe<Scalars['Int']['output']>;
  payment_log?: Maybe<Array<Maybe<PaymentLog>>>;
  payment_recipient?: Maybe<Array<Maybe<PaymentRecipientDetails>>>;
  payment_reference?: Maybe<Scalars['String']['output']>;
  payment_referer_code?: Maybe<Scalars['String']['output']>;
  payment_repeat_type?: Maybe<PaymentRepeatType>;
  payment_schedule?: Maybe<Array<Maybe<PaymentSchedule>>>;
  payment_schedule_number_current?: Maybe<Scalars['Int']['output']>;
  payment_schedule_total_number?: Maybe<Scalars['Int']['output']>;
  payment_start_date?: Maybe<Scalars['Date']['output']>;
  payment_status?: Maybe<PaymentStatus>;
  payment_subtotal?: Maybe<Scalars['Float']['output']>;
  payment_supporting_media?: Maybe<Array<Maybe<Media>>>;
  payment_type?: Maybe<PaymentType>;
  payment_updated?: Maybe<Scalars['DateTime']['output']>;
  user_card?: Maybe<UserCard>;
};

export type PaymentCompleteInput = {
  payment_complete_date?: InputMaybe<Scalars['Date']['input']>;
  payment_complete_media?: InputMaybe<
    Array<InputMaybe<Scalars['Upload']['input']>>
  >;
  payment_id?: InputMaybe<Scalars['Int']['input']>;
};

export type PaymentDetails = {
  __typename?: 'PaymentDetails';
  customer?: Maybe<Customer>;
  is_payment_repeat?: Maybe<Scalars['Boolean']['output']>;
  is_repeated?: Maybe<Scalars['Boolean']['output']>;
  payment_amount?: Maybe<Scalars['Float']['output']>;
  payment_amount_total?: Maybe<Scalars['Float']['output']>;
  payment_complete_date?: Maybe<Scalars['Date']['output']>;
  payment_complete_media?: Maybe<Array<Maybe<Media>>>;
  payment_created?: Maybe<Scalars['DateTime']['output']>;
  payment_end_date?: Maybe<Scalars['Date']['output']>;
  payment_extra_charges?: Maybe<Scalars['Float']['output']>;
  payment_extra_charges_rate?: Maybe<Scalars['Float']['output']>;
  payment_extra_charges_total?: Maybe<Scalars['Float']['output']>;
  payment_extra_charges_type?: Maybe<Scalars['String']['output']>;
  payment_grandtotal?: Maybe<Scalars['Float']['output']>;
  payment_id?: Maybe<Scalars['Int']['output']>;
  payment_recipient?: Maybe<Array<Maybe<PaymentRecipientDetails>>>;
  payment_reference?: Maybe<Scalars['String']['output']>;
  payment_referer_code?: Maybe<Scalars['String']['output']>;
  payment_reject_details?: Maybe<PaymentLog>;
  payment_repeat_type?: Maybe<PaymentRepeatType>;
  payment_schedule?: Maybe<Array<Maybe<PaymentSchedule>>>;
  payment_schedule_number_current?: Maybe<Scalars['Int']['output']>;
  payment_schedule_total_number?: Maybe<Scalars['Int']['output']>;
  payment_start_date?: Maybe<Scalars['Date']['output']>;
  payment_status?: Maybe<PaymentStatus>;
  payment_subtotal?: Maybe<Scalars['Float']['output']>;
  payment_supporting_media?: Maybe<Array<Maybe<Media>>>;
  payment_type?: Maybe<PaymentType>;
  payment_updated?: Maybe<Scalars['DateTime']['output']>;
  user_card?: Maybe<UserCard>;
};

export enum PaymentExtraChargesType {
  Amount = 'Amount',
  Percentage = 'Percentage',
  Standard = 'Standard',
}

export enum PaymentGroupStatus {
  All = 'All',
  Cancelled = 'Cancelled',
  Completed = 'Completed',
  Draft = 'Draft',
  Failed = 'Failed',
  OnTheWay = 'On_the_way',
  Rejected = 'Rejected',
  Scheduled = 'Scheduled',
}

export type PaymentGroupStatusCount = {
  __typename?: 'PaymentGroupStatusCount';
  count?: Maybe<Scalars['Int']['output']>;
  payment_group_status?: Maybe<Scalars['String']['output']>;
};

export type PaymentLessDetail = {
  __typename?: 'PaymentLessDetail';
  payment_end_date?: Maybe<Scalars['Date']['output']>;
  payment_id?: Maybe<Scalars['Int']['output']>;
  payment_status?: Maybe<PaymentStatus>;
  recipients?: Maybe<Array<Maybe<RecipientLessDetail>>>;
};

export type PaymentListingInput = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  is_payment_repeat?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  payment_end_date?: InputMaybe<Scalars['Date']['input']>;
  payment_group_status?: InputMaybe<Scalars['String']['input']>;
  payment_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  payment_repeat_type_id?: InputMaybe<Scalars['Int']['input']>;
  payment_start_date?: InputMaybe<Scalars['Date']['input']>;
  payment_status_id?: InputMaybe<Scalars['Int']['input']>;
  payment_type_id?: InputMaybe<Scalars['Int']['input']>;
  recipient_id?: InputMaybe<Scalars['Int']['input']>;
  sort_by?: InputMaybe<PaymentSortBy>;
  sort_order?: InputMaybe<SortOrder>;
};

export type PaymentLog = {
  __typename?: 'PaymentLog';
  payment_id?: Maybe<Scalars['Int']['output']>;
  payment_log_action?: Maybe<Scalars['String']['output']>;
  payment_log_created?: Maybe<Scalars['DateTime']['output']>;
  payment_log_description?: Maybe<Scalars['String']['output']>;
  payment_log_id?: Maybe<Scalars['Int']['output']>;
  payment_log_remark?: Maybe<Scalars['String']['output']>;
  reject_reason?: Maybe<RejectReason>;
  user?: Maybe<User>;
};

export type PaymentMake = {
  __typename?: 'PaymentMake';
  payment?: Maybe<Payment>;
  payment_number?: Maybe<Scalars['String']['output']>;
  payment_url?: Maybe<Scalars['String']['output']>;
};

/** A paginated list of Payment items. */
export type PaymentPaginator = {
  __typename?: 'PaymentPaginator';
  /** A list of Payment items. */
  data: Array<Payment>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type PaymentRecipient = {
  __typename?: 'PaymentRecipient';
  bank_id?: Maybe<Scalars['Int']['output']>;
  payment_id?: Maybe<Scalars['Int']['output']>;
  payment_recipient_account_name?: Maybe<Scalars['String']['output']>;
  payment_recipient_account_number?: Maybe<Scalars['String']['output']>;
  payment_recipient_amount?: Maybe<Scalars['Float']['output']>;
  payment_recipient_id?: Maybe<Scalars['Int']['output']>;
  recipient_id?: Maybe<Scalars['Int']['output']>;
};

export type PaymentRecipientDetails = {
  __typename?: 'PaymentRecipientDetails';
  bank_id?: Maybe<Scalars['Int']['output']>;
  payment?: Maybe<Payment>;
  payment_recipient_account_name?: Maybe<Scalars['String']['output']>;
  payment_recipient_account_number?: Maybe<Scalars['String']['output']>;
  payment_recipient_amount?: Maybe<Scalars['Float']['output']>;
  payment_recipient_id?: Maybe<Scalars['Int']['output']>;
  recipient?: Maybe<Recipient>;
};

export type PaymentRecipientListing = {
  __typename?: 'PaymentRecipientListing';
  bank_id?: Maybe<Scalars['Int']['output']>;
  payment?: Maybe<Payment>;
  payment_recipient_account_name?: Maybe<Scalars['String']['output']>;
  payment_recipient_account_number?: Maybe<Scalars['String']['output']>;
  payment_recipient_amount?: Maybe<Scalars['Float']['output']>;
  payment_recipient_id?: Maybe<Scalars['Int']['output']>;
  recipient?: Maybe<Recipient>;
};

export type PaymentRefundRejectInput = {
  payment_id?: InputMaybe<Scalars['Int']['input']>;
  reject_reason?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentRejectInput = {
  payment_id?: InputMaybe<Scalars['Int']['input']>;
  payment_log_remark?: InputMaybe<Scalars['String']['input']>;
  reject_reason_id?: InputMaybe<Scalars['Int']['input']>;
};

export type PaymentReleaseData = {
  __typename?: 'PaymentReleaseData';
  data?: Maybe<Scalars['Json']['output']>;
  pending_release_percentage?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PaymentRepeatType = {
  __typename?: 'PaymentRepeatType';
  is_deleted?: Maybe<Scalars['Int']['output']>;
  is_disabled?: Maybe<Scalars['Boolean']['output']>;
  is_display?: Maybe<Scalars['Boolean']['output']>;
  is_extra_charges?: Maybe<Scalars['Boolean']['output']>;
  payment_repeat_type_additional_days?: Maybe<Scalars['Int']['output']>;
  payment_repeat_type_category?: Maybe<PaymentRepeatTypeCategory>;
  payment_repeat_type_charges_rate?: Maybe<Scalars['Float']['output']>;
  payment_repeat_type_charges_type?: Maybe<PaymentRepeatTypeChargesType>;
  payment_repeat_type_id?: Maybe<Scalars['Int']['output']>;
  payment_repeat_type_name?: Maybe<Scalars['Json']['output']>;
  payment_repeat_type_parent_id?: Maybe<Scalars['Int']['output']>;
  standard_fee?: Maybe<Scalars['Float']['output']>;
};

export enum PaymentRepeatTypeCategory {
  Repeat = 'Repeat',
  Standard = 'Standard',
}

export enum PaymentRepeatTypeChargesType {
  Amount = 'Amount',
  Percentage = 'Percentage',
}

export type PaymentRepeatTypeDropdown = {
  __typename?: 'PaymentRepeatTypeDropdown';
  is_extra_charges?: Maybe<Scalars['Boolean']['output']>;
  payment_repeat_type_additional_days?: Maybe<Scalars['Int']['output']>;
  payment_repeat_type_category?: Maybe<Scalars['String']['output']>;
  payment_repeat_type_charges_rate?: Maybe<Scalars['Float']['output']>;
  payment_repeat_type_charges_type?: Maybe<Scalars['String']['output']>;
  payment_repeat_type_id?: Maybe<Scalars['Int']['output']>;
  payment_repeat_type_name?: Maybe<Scalars['Json']['output']>;
  standard_fee?: Maybe<Scalars['Float']['output']>;
};

export type PaymentRepeatTypeInput = {
  is_disabled?: InputMaybe<Scalars['Boolean']['input']>;
  is_display?: InputMaybe<Scalars['Boolean']['input']>;
  is_extra_charges?: InputMaybe<Scalars['Boolean']['input']>;
  payment_repeat_type_additional_days?: InputMaybe<Scalars['Int']['input']>;
  payment_repeat_type_category?: InputMaybe<PaymentRepeatTypeCategory>;
  payment_repeat_type_charges_rate?: InputMaybe<Scalars['Float']['input']>;
  payment_repeat_type_charges_type?: InputMaybe<PaymentRepeatTypeChargesType>;
  payment_repeat_type_id?: InputMaybe<Scalars['Int']['input']>;
  payment_repeat_type_name?: InputMaybe<LanguageStringInput>;
  payment_repeat_type_parent_id?: InputMaybe<Scalars['Int']['input']>;
};

export type PaymentRepeatTypeListingInput = {
  keyword?: InputMaybe<Scalars['String']['input']>;
  payment_repeat_type_category?: InputMaybe<PaymentRepeatTypeCategory>;
  payment_repeat_type_charges_type?: InputMaybe<PaymentRepeatTypeChargesType>;
  payment_repeat_type_id?: InputMaybe<Scalars['Int']['input']>;
};

/** A paginated list of PaymentRepeatType items. */
export type PaymentRepeatTypePaginator = {
  __typename?: 'PaymentRepeatTypePaginator';
  /** A list of PaymentRepeatType items. */
  data: Array<PaymentRepeatType>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type PaymentReportData = {
  __typename?: 'PaymentReportData';
  data?: Maybe<Scalars['Json']['output']>;
  payment_type?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

export type PaymentRequestData = {
  __typename?: 'PaymentRequestData';
  data?: Maybe<Array<Maybe<PaymentStatusData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PaymentSchedule = {
  __typename?: 'PaymentSchedule';
  customer?: Maybe<Customer>;
  is_refund_requested?: Maybe<Scalars['Boolean']['output']>;
  payment?: Maybe<Payment>;
  payment_recipient?: Maybe<Array<Maybe<PaymentRecipientDetails>>>;
  payment_repeat_type?: Maybe<PaymentRepeatType>;
  payment_schedule_amount?: Maybe<Scalars['Float']['output']>;
  payment_schedule_complete_date?: Maybe<Scalars['Date']['output']>;
  payment_schedule_complete_media?: Maybe<Array<Maybe<Media>>>;
  payment_schedule_created?: Maybe<Scalars['DateTime']['output']>;
  payment_schedule_date?: Maybe<Scalars['Date']['output']>;
  payment_schedule_id?: Maybe<Scalars['Int']['output']>;
  payment_schedule_log?: Maybe<Array<Maybe<PaymentScheduleLog>>>;
  payment_schedule_number?: Maybe<Scalars['Int']['output']>;
  payment_schedule_referer_code?: Maybe<Scalars['String']['output']>;
  payment_schedule_refund?: Maybe<Array<Maybe<PaymentScheduleRefund>>>;
  payment_schedule_updated?: Maybe<Scalars['DateTime']['output']>;
  payment_status?: Maybe<PaymentStatus>;
  user_card?: Maybe<UserCard>;
};

export type PaymentScheduleCompleteInput = {
  payment_schedule_complete_date?: InputMaybe<Scalars['Date']['input']>;
  payment_schedule_complete_media?: InputMaybe<
    Array<InputMaybe<Scalars['Upload']['input']>>
  >;
  payment_schedule_id?: InputMaybe<Scalars['Int']['input']>;
};

export type PaymentScheduleListingInput = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  end_date?: InputMaybe<Scalars['Date']['input']>;
  is_payment_repeat?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  payment_repeat_type_id?: InputMaybe<Scalars['Int']['input']>;
  payment_schedule_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  payment_status_id?: InputMaybe<Scalars['Int']['input']>;
  recipient_id?: InputMaybe<Scalars['Int']['input']>;
  sort_by?: InputMaybe<PaymentScheduleSortBy>;
  sort_order?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<Scalars['Date']['input']>;
};

export type PaymentScheduleLog = {
  __typename?: 'PaymentScheduleLog';
  admin?: Maybe<User>;
  payment_id?: Maybe<Scalars['Int']['output']>;
  payment_schedule_id?: Maybe<Scalars['Int']['output']>;
  payment_schedule_log_action?: Maybe<Scalars['String']['output']>;
  payment_schedule_log_created?: Maybe<Scalars['DateTime']['output']>;
  payment_schedule_log_description?: Maybe<Scalars['String']['output']>;
  payment_schedule_log_id?: Maybe<Scalars['Int']['output']>;
  payment_schedule_log_updated?: Maybe<Scalars['DateTime']['output']>;
};

/** A paginated list of PaymentSchedule items. */
export type PaymentSchedulePaginator = {
  __typename?: 'PaymentSchedulePaginator';
  /** A list of PaymentSchedule items. */
  data: Array<PaymentSchedule>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type PaymentScheduleRefund = {
  __typename?: 'PaymentScheduleRefund';
  payment_schedule_id?: Maybe<Scalars['Int']['output']>;
  refund_reason?: Maybe<Scalars['String']['output']>;
  refund_request_created?: Maybe<Scalars['DateTime']['output']>;
  refund_request_status?: Maybe<RefundRequestStatus>;
  reject_reason?: Maybe<Scalars['String']['output']>;
};

export type PaymentScheduleRefundListingInput = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  end_date?: InputMaybe<Scalars['Date']['input']>;
  is_payment_repeat?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  payment_repeat_type_id?: InputMaybe<Scalars['Int']['input']>;
  payment_schedule_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  recipient_id?: InputMaybe<Scalars['Int']['input']>;
  sort_by?: InputMaybe<PaymentScheduleSortBy>;
  sort_order?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<Scalars['Date']['input']>;
};

export type PaymentScheduleRefundRejectInput = {
  payment_schedule_id?: InputMaybe<Scalars['Int']['input']>;
  reject_reason?: InputMaybe<Scalars['String']['input']>;
};

export enum PaymentScheduleSortBy {
  PaymentScheduleCompleteDate = 'payment_schedule_complete_date',
  PaymentScheduleCreated = 'payment_schedule_created',
  PaymentScheduleDate = 'payment_schedule_date',
  PaymentScheduleUpdated = 'payment_schedule_updated',
}

export type PaymentScheduleVoidInput = {
  payment_schedule_id?: InputMaybe<Scalars['Int']['input']>;
  refund_reason?: InputMaybe<Scalars['String']['input']>;
};

export enum PaymentSortBy {
  PaymentCreated = 'payment_created',
  PaymentEndDate = 'payment_end_date',
  PaymentStartDate = 'payment_start_date',
  PaymentUpdated = 'payment_updated',
}

export type PaymentStatus = {
  __typename?: 'PaymentStatus';
  payment_status_desc?: Maybe<Scalars['String']['output']>;
  payment_status_id?: Maybe<Scalars['Int']['output']>;
  payment_status_name?: Maybe<Scalars['String']['output']>;
};

export type PaymentStatusCount = {
  __typename?: 'PaymentStatusCount';
  count?: Maybe<Scalars['Int']['output']>;
  payment_status_id?: Maybe<Scalars['Int']['output']>;
  payment_status_name?: Maybe<Scalars['String']['output']>;
};

export type PaymentStatusData = {
  __typename?: 'PaymentStatusData';
  payment_count?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type PaymentStatusInput = {
  keyword?: InputMaybe<Scalars['String']['input']>;
};

/** A paginated list of PaymentStatus items. */
export type PaymentStatusPaginator = {
  __typename?: 'PaymentStatusPaginator';
  /** A list of PaymentStatus items. */
  data: Array<PaymentStatus>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type PaymentType = {
  __typename?: 'PaymentType';
  is_allowed_payment_repeat?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  payment_type_created?: Maybe<Scalars['DateTime']['output']>;
  payment_type_document?: Maybe<Scalars['String']['output']>;
  payment_type_id?: Maybe<Scalars['Int']['output']>;
  payment_type_name?: Maybe<Scalars['Json']['output']>;
  payment_type_updated?: Maybe<Scalars['DateTime']['output']>;
};

export type PaymentTypeCreateInput = {
  is_allowed_payment_repeat?: InputMaybe<Scalars['Boolean']['input']>;
  payment_type_document?: InputMaybe<Scalars['String']['input']>;
  payment_type_name?: InputMaybe<LanguageStringInput>;
};

export type PaymentTypeDropdown = {
  __typename?: 'PaymentTypeDropdown';
  is_allowed_payment_repeat?: Maybe<Scalars['Boolean']['output']>;
  payment_type_document?: Maybe<Scalars['String']['output']>;
  payment_type_id?: Maybe<Scalars['Int']['output']>;
  payment_type_name?: Maybe<Scalars['Json']['output']>;
};

export type PaymentTypeListingInput = {
  is_allowed_payment_repeat?: InputMaybe<Scalars['Int']['input']>;
  is_deleted?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};

/** A paginated list of PaymentType items. */
export type PaymentTypePaginator = {
  __typename?: 'PaymentTypePaginator';
  /** A list of PaymentType items. */
  data: Array<PaymentType>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type PaymentTypeUpdateInput = {
  is_allowed_payment_repeat?: InputMaybe<Scalars['Boolean']['input']>;
  payment_type_document?: InputMaybe<Scalars['String']['input']>;
  payment_type_id?: InputMaybe<Scalars['Int']['input']>;
  payment_type_name?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentVoidInput = {
  payment_id?: InputMaybe<Scalars['Int']['input']>;
  refund_reason?: InputMaybe<Scalars['String']['input']>;
};

export type Permission = {
  __typename?: 'Permission';
  display_name?: Maybe<Scalars['String']['output']>;
  group_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user_type_id?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  AdminListing?: Maybe<UserListingPaginator>;
  AdminListingExport?: Maybe<SuccessResponse>;
  AnnualRevenueDropdown?: Maybe<Array<Maybe<AnnualRevenue>>>;
  ApplicationCount?: Maybe<Scalars['Int']['output']>;
  ApplicationListing?: Maybe<CustomerPaginator>;
  ApplicationListingExport?: Maybe<SuccessResponse>;
  ApplicationStatusCount?: Maybe<Array<Maybe<ApplicationStatusCount>>>;
  BankDetail?: Maybe<Bank>;
  BankDropdown?: Maybe<Array<Maybe<Bank>>>;
  BankListing?: Maybe<BankPaginator>;
  BankNameSearch?: Maybe<Bank>;
  BusinessTypeDropdown?: Maybe<Array<Maybe<BusinessType>>>;
  BusinessTypeListing?: Maybe<BusinessTypePaginator>;
  BusinessYearDropdown?: Maybe<Array<Maybe<BusinessYear>>>;
  BusinessYearListing?: Maybe<BusinessYearPaginator>;
  CityDetail?: Maybe<City>;
  CityDropdown?: Maybe<Array<Maybe<City>>>;
  CityListing?: Maybe<CityPaginator>;
  CompanySizeDropdown?: Maybe<Array<Maybe<CompanySize>>>;
  ContactUsDetail?: Maybe<ContactUs>;
  ContactUsListing?: Maybe<ContactUsPaginator>;
  ContactUsPendingCount?: Maybe<Scalars['Int']['output']>;
  ContactUsStatusCount?: Maybe<ContactUsPaginator>;
  CountryDetail?: Maybe<Country>;
  CountryDropdown?: Maybe<Array<Maybe<Country>>>;
  CountryListing?: Maybe<CountryPaginator>;
  CustomerBankDetail?: Maybe<CustomerBank>;
  CustomerBankListing?: Maybe<CustomerBankPaginator>;
  CustomerDetail?: Maybe<CustomerFullDetail>;
  CustomerListing?: Maybe<CustomerListingPaginator>;
  CustomerListingExport?: Maybe<SuccessResponse>;
  CustomerLogDetail?: Maybe<CustomerLog>;
  CustomerLogListing?: Maybe<CustomerLogPaginator>;
  CustomerQuestionDetail?: Maybe<CustomerQuestion>;
  CustomerQuestionListing?: Maybe<CustomerQuestionPaginator>;
  CustomerUserDetail?: Maybe<CustomerUser>;
  CustomerUserListing?: Maybe<CustomerUserPaginator>;
  DashboardAdmin?: Maybe<DashboardData>;
  Me?: Maybe<User>;
  PaymentDetail?: Maybe<PaymentDetails>;
  PaymentGroupListingStatusCount?: Maybe<Array<Maybe<PaymentGroupStatusCount>>>;
  PaymentListing?: Maybe<PaymentPaginator>;
  PaymentListingExport?: Maybe<SuccessResponse>;
  PaymentListingStatusCount?: Maybe<Array<Maybe<PaymentStatusCount>>>;
  PaymentRejectedReport?: Maybe<ReportPaginator>;
  PaymentRejectedReportExport?: Maybe<SuccessResponse>;
  PaymentReleaseListingExport?: Maybe<SuccessResponse>;
  PaymentReleasedReport?: Maybe<ReportPaginator>;
  PaymentReleasedReportExport?: Maybe<SuccessResponse>;
  PaymentRepeatTypeDetail?: Maybe<Scalars['Json']['output']>;
  PaymentRepeatTypeDropdown?: Maybe<Array<Maybe<PaymentRepeatTypeDropdown>>>;
  PaymentRepeatTypeListing?: Maybe<PaymentRepeatTypePaginator>;
  PaymentRequestListingExport?: Maybe<SuccessResponse>;
  PaymentScheduleListing?: Maybe<PaymentSchedulePaginator>;
  PaymentScheduleListingExport?: Maybe<SuccessResponse>;
  PaymentScheduleListingStatusCount?: Maybe<Array<Maybe<PaymentStatusCount>>>;
  PaymentScheduleRefundListing?: Maybe<PaymentSchedulePaginator>;
  PaymentStatusDropdown?: Maybe<Array<Maybe<PaymentStatus>>>;
  PaymentStatusListing?: Maybe<PaymentStatusPaginator>;
  PaymentTypeDetail?: Maybe<PaymentType>;
  PaymentTypeDropdown?: Maybe<Array<Maybe<PaymentTypeDropdown>>>;
  PaymentTypeListing?: Maybe<PaymentTypePaginator>;
  PermissionListing?: Maybe<Array<Maybe<Permission>>>;
  QuestionDetail?: Maybe<Question>;
  QuestionListing?: Maybe<QuestionPaginator>;
  RecipientCategoryDetail?: Maybe<RecipientCategory>;
  RecipientCategoryDropdown?: Maybe<Array<Maybe<RecipientCategory>>>;
  RecipientCategoryListing?: Maybe<RecipientCategoryPaginator>;
  RecipientDetail?: Maybe<Recipient>;
  RecipientListing?: Maybe<RecipientListingPaginator>;
  RecipientListingDropdown?: Maybe<Array<Maybe<Recipient>>>;
  RecipientListingExport?: Maybe<SuccessResponse>;
  RejectReasonDetail?: Maybe<RejectReason>;
  RejectReasonDropdown?: Maybe<Array<Maybe<RejectReason>>>;
  RejectReasonListing?: Maybe<RejectReasonPaginator>;
  RoleDetail?: Maybe<RoleDetail>;
  RoleListing?: Maybe<Array<Maybe<RoleListing>>>;
  SettingDetail?: Maybe<Setting>;
  SettingDetails?: Maybe<Scalars['Json']['output']>;
  SettingListing?: Maybe<SettingPaginator>;
  StateDetail?: Maybe<State>;
  StateDropdown?: Maybe<Array<Maybe<State>>>;
  StateListing?: Maybe<StatePaginator>;
  UserCardDropdown?: Maybe<Array<Maybe<UserCardDropdown>>>;
  UserCardListing?: Maybe<UserCardListingPaginator>;
  UserDetail?: Maybe<User>;
  UserListing?: Maybe<UserListingPaginator>;
  UserTypeListing?: Maybe<Array<Maybe<UserType>>>;
};

export type QueryAdminListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<AdminListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryAdminListingExportArgs = {
  input?: InputMaybe<AdminListingInput>;
};

export type QueryApplicationListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<CustomerListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryApplicationListingExportArgs = {
  input?: InputMaybe<CustomerListingInput>;
};

export type QueryApplicationStatusCountArgs = {
  customer_status?: InputMaybe<CustomerStatus>;
};

export type QueryBankDetailArgs = {
  bank_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryBankListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryBankNameSearchArgs = {
  bank_name: Scalars['String']['input'];
};

export type QueryBusinessTypeListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryBusinessYearListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCityDetailArgs = {
  city_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCityDropdownArgs = {
  state_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCityListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<CityListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryContactUsDetailArgs = {
  contact_us_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryContactUsListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<ContactUsListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryContactUsStatusCountArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<ContactUsListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCountryDetailArgs = {
  country_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCountryListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCustomerBankDetailArgs = {
  customer_bank_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCustomerBankListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<CustomerBankListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCustomerDetailArgs = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCustomerListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<CustomerListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCustomerListingExportArgs = {
  input?: InputMaybe<CustomerListingInput>;
};

export type QueryCustomerLogDetailArgs = {
  customer_log_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCustomerLogListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<CustomerLogListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCustomerQuestionDetailArgs = {
  customer_question_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCustomerQuestionListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<CustomerQuestionListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCustomerUserDetailArgs = {
  customer_user_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCustomerUserListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<CustomerUserListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPaymentDetailArgs = {
  payment_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPaymentGroupListingStatusCountArgs = {
  input?: InputMaybe<PaymentListingInput>;
};

export type QueryPaymentListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<PaymentListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPaymentListingExportArgs = {
  input?: InputMaybe<PaymentListingInput>;
};

export type QueryPaymentListingStatusCountArgs = {
  input?: InputMaybe<PaymentListingInput>;
};

export type QueryPaymentRejectedReportArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<ReportInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPaymentRejectedReportExportArgs = {
  input?: InputMaybe<ReportInput>;
};

export type QueryPaymentReleaseListingExportArgs = {
  input?: InputMaybe<PaymentScheduleListingInput>;
};

export type QueryPaymentReleasedReportArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<ReportInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPaymentReleasedReportExportArgs = {
  input?: InputMaybe<ReportInput>;
};

export type QueryPaymentRepeatTypeDetailArgs = {
  payment_repeat_type_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPaymentRepeatTypeDropdownArgs = {
  payment_repeat_type_category?: InputMaybe<PaymentRepeatTypeCategory>;
};

export type QueryPaymentRepeatTypeListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<PaymentRepeatTypeListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPaymentRequestListingExportArgs = {
  input?: InputMaybe<PaymentListingInput>;
};

export type QueryPaymentScheduleListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<PaymentScheduleListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPaymentScheduleListingExportArgs = {
  input?: InputMaybe<PaymentScheduleListingInput>;
};

export type QueryPaymentScheduleListingStatusCountArgs = {
  input?: InputMaybe<PaymentScheduleListingInput>;
};

export type QueryPaymentScheduleRefundListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<PaymentScheduleListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPaymentStatusListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<PaymentStatusInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPaymentTypeDetailArgs = {
  payment_type_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPaymentTypeListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<PaymentTypeListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryPermissionListingArgs = {
  user_type_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryQuestionDetailArgs = {
  question_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryQuestionListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<QuestionListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryRecipientCategoryDetailArgs = {
  recipient_category_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryRecipientCategoryListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryRecipientDetailArgs = {
  recipient_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryRecipientListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<RecipientListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryRecipientListingExportArgs = {
  input?: InputMaybe<RecipientListingInput>;
};

export type QueryRejectReasonDetailArgs = {
  reject_reason_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryRejectReasonDropdownArgs = {
  reject_reason_type?: InputMaybe<RejectReasonType>;
};

export type QueryRejectReasonListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<RejectReasonListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryRoleDetailArgs = {
  role_id: Scalars['Int']['input'];
};

export type QueryRoleListingArgs = {
  user_type_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QuerySettingDetailArgs = {
  setting_slug?: InputMaybe<Scalars['String']['input']>;
};

export type QuerySettingDetailsArgs = {
  setting_slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySettingListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryStateDetailArgs = {
  state_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryStateDropdownArgs = {
  country_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryStateListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<StateListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryUserCardListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<UserCardListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryUserDetailArgs = {
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryUserListingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  input?: InputMaybe<UserListingInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Question = {
  __typename?: 'Question';
  question_id: Scalars['Int']['output'];
  question_priority?: Maybe<Scalars['Int']['output']>;
  question_section?: Maybe<Scalars['Int']['output']>;
  question_status?: Maybe<QuestionStatus>;
  question_title?: Maybe<Scalars['String']['output']>;
  question_type?: Maybe<Scalars['String']['output']>;
  question_value?: Maybe<Scalars['Json']['output']>;
  question_value_column?: Maybe<Scalars['Int']['output']>;
};

export type QuestionInput = {
  question_id?: InputMaybe<Scalars['Int']['input']>;
  question_priority?: InputMaybe<Scalars['Int']['input']>;
  question_section?: InputMaybe<Scalars['Int']['input']>;
  question_title?: InputMaybe<Scalars['String']['input']>;
  question_type?: InputMaybe<QuestionType>;
  question_value?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  question_value_column?: InputMaybe<Scalars['Int']['input']>;
};

export type QuestionListingInput = {
  keyword?: InputMaybe<Scalars['String']['input']>;
  question_priority?: InputMaybe<Scalars['Int']['input']>;
  question_section?: InputMaybe<Scalars['Int']['input']>;
  question_type?: InputMaybe<QuestionType>;
};

/** A paginated list of Question items. */
export type QuestionPaginator = {
  __typename?: 'QuestionPaginator';
  /** A list of Question items. */
  data: Array<Question>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum QuestionStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

export enum QuestionType {
  /** Multi-select */
  MultiSelect = 'MULTI_SELECT',
  /** Single-select */
  SingleSelect = 'SINGLE_SELECT',
}

export type Recipient = {
  __typename?: 'Recipient';
  bank?: Maybe<Bank>;
  country?: Maybe<Country>;
  customer?: Maybe<Customer>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_notify?: Maybe<Scalars['Boolean']['output']>;
  recipient_bank_account_number?: Maybe<Scalars['String']['output']>;
  recipient_bank_holder_name?: Maybe<Scalars['String']['output']>;
  recipient_category?: Maybe<RecipientCategory>;
  recipient_created?: Maybe<Scalars['DateTime']['output']>;
  recipient_email?: Maybe<Scalars['String']['output']>;
  recipient_id?: Maybe<Scalars['Int']['output']>;
  recipient_mobile_number?: Maybe<Scalars['String']['output']>;
  recipient_status?: Maybe<RecipientStatus>;
  recipient_type?: Maybe<RecipientType>;
  recipient_updated?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type RecipientCategory = {
  __typename?: 'RecipientCategory';
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  recipient_category_badge_colour?: Maybe<Scalars['String']['output']>;
  recipient_category_created?: Maybe<Scalars['DateTime']['output']>;
  recipient_category_id?: Maybe<Scalars['Int']['output']>;
  recipient_category_name?: Maybe<Scalars['String']['output']>;
  recipient_category_updated?: Maybe<Scalars['DateTime']['output']>;
};

export type RecipientCategoryCreateInput = {
  recipient_category_badge_colour?: InputMaybe<Scalars['String']['input']>;
  recipient_category_name?: InputMaybe<Scalars['String']['input']>;
};

/** A paginated list of RecipientCategory items. */
export type RecipientCategoryPaginator = {
  __typename?: 'RecipientCategoryPaginator';
  /** A list of RecipientCategory items. */
  data: Array<RecipientCategory>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type RecipientCategoryUpdateInput = {
  recipient_category_badge_colour?: InputMaybe<Scalars['String']['input']>;
  recipient_category_id?: InputMaybe<Scalars['Int']['input']>;
  recipient_category_name?: InputMaybe<Scalars['String']['input']>;
};

export type RecipientCreateInput = {
  bank_id?: InputMaybe<Scalars['Int']['input']>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  is_notifiy?: InputMaybe<Scalars['Boolean']['input']>;
  recipient_bank_account_number?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_holder_name?: InputMaybe<Scalars['String']['input']>;
  recipient_category_id?: InputMaybe<Scalars['Int']['input']>;
  recipient_email?: InputMaybe<Scalars['String']['input']>;
  recipient_mobile_number?: InputMaybe<Scalars['String']['input']>;
  recipient_status?: InputMaybe<RecipientStatus>;
  recipient_type?: InputMaybe<RecipientType>;
};

export type RecipientLessDetail = {
  __typename?: 'RecipientLessDetail';
  bank?: Maybe<Bank>;
  country?: Maybe<Country>;
  recipient_bank_account_number?: Maybe<Scalars['String']['output']>;
  recipient_bank_holder_name?: Maybe<Scalars['String']['output']>;
  recipient_email?: Maybe<Scalars['String']['output']>;
  recipient_id?: Maybe<Scalars['Int']['output']>;
};

export type RecipientListing = {
  __typename?: 'RecipientListing';
  bank?: Maybe<Bank>;
  country?: Maybe<Country>;
  customer?: Maybe<Customer>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_notify?: Maybe<Scalars['Boolean']['output']>;
  recipient_bank_account_number?: Maybe<Scalars['String']['output']>;
  recipient_bank_holder_name?: Maybe<Scalars['String']['output']>;
  recipient_category?: Maybe<RecipientCategory>;
  recipient_created?: Maybe<Scalars['DateTime']['output']>;
  recipient_email?: Maybe<Scalars['String']['output']>;
  recipient_id?: Maybe<Scalars['Int']['output']>;
  recipient_mobile_number?: Maybe<Scalars['String']['output']>;
  recipient_status?: Maybe<RecipientStatus>;
  recipient_type?: Maybe<RecipientType>;
  recipient_updated?: Maybe<Scalars['DateTime']['output']>;
  total_amount?: Maybe<Scalars['Float']['output']>;
  user?: Maybe<User>;
};

export type RecipientListingInput = {
  bank_id?: InputMaybe<Scalars['Int']['input']>;
  country_currency_code?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  recipient_category_id?: InputMaybe<Scalars['Int']['input']>;
  recipient_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  recipient_type?: InputMaybe<RecipientType>;
};

/** A paginated list of RecipientListing items. */
export type RecipientListingPaginator = {
  __typename?: 'RecipientListingPaginator';
  /** A list of RecipientListing items. */
  data: Array<RecipientListing>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum RecipientStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

export enum RecipientType {
  Company = 'Company',
  Personal = 'Personal',
}

export type RecipientUpdateInput = {
  bank_id?: InputMaybe<Scalars['Int']['input']>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  recipient_bank_account_number?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_holder_name?: InputMaybe<Scalars['String']['input']>;
  recipient_category_id?: InputMaybe<Scalars['Int']['input']>;
  recipient_email?: InputMaybe<Scalars['String']['input']>;
  recipient_id?: InputMaybe<Scalars['Int']['input']>;
  recipient_mobile_number?: InputMaybe<Scalars['String']['input']>;
  recipient_status?: InputMaybe<RecipientStatus>;
  recipient_type?: InputMaybe<RecipientType>;
};

export enum RefundRequestStatus {
  Approved = 'approved',
  Pending = 'pending',
  Rejected = 'rejected',
}

export type RejectReason = {
  __typename?: 'RejectReason';
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  reject_reason_description?: Maybe<Scalars['String']['output']>;
  reject_reason_id?: Maybe<Scalars['Int']['output']>;
  reject_reason_name?: Maybe<Scalars['String']['output']>;
  reject_reason_type?: Maybe<Scalars['String']['output']>;
};

export type RejectReasonInput = {
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  reject_reason_description?: InputMaybe<Scalars['String']['input']>;
  reject_reason_id?: InputMaybe<Scalars['Int']['input']>;
  reject_reason_name?: InputMaybe<Scalars['String']['input']>;
  reject_reason_type?: InputMaybe<RejectReasonType>;
};

export type RejectReasonListingInput = {
  keyword?: InputMaybe<Scalars['String']['input']>;
  reject_reason_type?: InputMaybe<RejectReasonType>;
};

/** A paginated list of RejectReason items. */
export type RejectReasonPaginator = {
  __typename?: 'RejectReasonPaginator';
  /** A list of RejectReason items. */
  data: Array<RejectReason>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum RejectReasonType {
  Application = 'Application',
  Payment = 'Payment',
}

export enum RepeatType {
  Repeat = 'Repeat',
  Standard = 'Standard',
}

export type ReportInput = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  customer_name?: InputMaybe<Scalars['String']['input']>;
  payment_type_id?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type ReportPaginator = {
  __typename?: 'ReportPaginator';
  data?: Maybe<PaymentReportData>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export type ResetPasswordInput = {
  password?: InputMaybe<Scalars['String']['input']>;
  password_confirmation?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Role = {
  __typename?: 'Role';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type RoleCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  user_type_id?: InputMaybe<Scalars['Int']['input']>;
};

export type RoleDetail = {
  __typename?: 'RoleDetail';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
  user_type_id?: Maybe<Scalars['Int']['output']>;
  user_type_name?: Maybe<Scalars['String']['output']>;
};

export type RoleListing = {
  __typename?: 'RoleListing';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
  user_type_id?: Maybe<Scalars['Int']['output']>;
  user_type_name?: Maybe<Scalars['String']['output']>;
  users?: Maybe<Array<Maybe<UserLessDetailWithImages>>>;
};

export type RoleUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  role_id?: InputMaybe<Scalars['Int']['input']>;
  user_type_id?: InputMaybe<Scalars['Int']['input']>;
};

export type SalesOverviewData = {
  __typename?: 'SalesOverviewData';
  data?: Maybe<Scalars['Json']['output']>;
  total_profit_by_charges?: Maybe<Scalars['Float']['output']>;
  total_released_payment?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Setting = {
  __typename?: 'Setting';
  is_editable?: Maybe<Scalars['Int']['output']>;
  setting_description?: Maybe<Scalars['String']['output']>;
  setting_id?: Maybe<Scalars['Int']['output']>;
  setting_media?: Maybe<Media>;
  setting_slug?: Maybe<Scalars['String']['output']>;
  setting_value?: Maybe<Scalars['String']['output']>;
};

export type SettingInput = {
  is_editable?: InputMaybe<Scalars['Boolean']['input']>;
  setting_description?: InputMaybe<Scalars['String']['input']>;
  setting_id?: InputMaybe<Scalars['Int']['input']>;
  setting_slug?: InputMaybe<Scalars['String']['input']>;
  setting_value?: InputMaybe<Scalars['String']['input']>;
  setting_value_media?: InputMaybe<Scalars['Upload']['input']>;
};

/** A paginated list of Setting items. */
export type SettingPaginator = {
  __typename?: 'SettingPaginator';
  /** A list of Setting items. */
  data: Array<Setting>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum SettingStatus {
  Draft = 'draft',
  Publish = 'publish',
}

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']['output']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']['output']>;
  /** Number of items per page. */
  perPage: Scalars['Int']['output'];
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC',
}

export type State = {
  __typename?: 'State';
  city?: Maybe<Array<Maybe<City>>>;
  country?: Maybe<Country>;
  is_deleted?: Maybe<Scalars['Int']['output']>;
  state_id?: Maybe<Scalars['Int']['output']>;
  state_name?: Maybe<Scalars['String']['output']>;
};

export type StateInput = {
  country_id?: InputMaybe<Scalars['Int']['input']>;
  state_id?: InputMaybe<Scalars['Int']['input']>;
  state_name?: InputMaybe<Scalars['String']['input']>;
};

export type StateListingInput = {
  country_id?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};

/** A paginated list of State items. */
export type StatePaginator = {
  __typename?: 'StatePaginator';
  /** A list of State items. */
  data: Array<State>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  data?: Maybe<Scalars['Json']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['Boolean']['output'];
};

export type TokenResponse = {
  __typename?: 'TokenResponse';
  token?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
};

export type TotalApplicationData = {
  __typename?: 'TotalApplicationData';
  data?: Maybe<Array<Maybe<ApplicationStatusData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type TotalCustomersData = {
  __typename?: 'TotalCustomersData';
  data?: Maybe<Array<Maybe<MonthlyCustomerData>>>;
  increase_count?: Maybe<Scalars['Int']['output']>;
  total_count?: Maybe<Scalars['Int']['output']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT',
}

export type UpdatePasswordInput = {
  password?: InputMaybe<Scalars['String']['input']>;
  password_confirmation?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  __typename?: 'User';
  customer?: Maybe<Customer>;
  email_verified_at?: Maybe<Scalars['DateTime']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  user_address?: Maybe<Scalars['String']['output']>;
  user_address2?: Maybe<Scalars['String']['output']>;
  user_alternative_email?: Maybe<Scalars['String']['output']>;
  user_alternative_mobile?: Maybe<Scalars['String']['output']>;
  user_city?: Maybe<City>;
  user_code?: Maybe<Scalars['String']['output']>;
  user_created: Scalars['DateTime']['output'];
  user_dob?: Maybe<Scalars['Date']['output']>;
  user_email?: Maybe<Scalars['String']['output']>;
  user_fullname?: Maybe<Scalars['String']['output']>;
  user_gender?: Maybe<UserGender>;
  user_id: Scalars['Int']['output'];
  user_ip?: Maybe<Scalars['String']['output']>;
  user_join_date?: Maybe<Scalars['Date']['output']>;
  user_language?: Maybe<Scalars['String']['output']>;
  user_logindate?: Maybe<Scalars['DateTime']['output']>;
  user_mobile?: Maybe<Scalars['String']['output']>;
  user_mobile_verified?: Maybe<Scalars['Boolean']['output']>;
  user_nationality?: Maybe<Country>;
  user_nric?: Maybe<Scalars['String']['output']>;
  user_permissions?: Maybe<Array<Maybe<Permission>>>;
  user_postcode?: Maybe<Scalars['String']['output']>;
  user_profile_image?: Maybe<Images>;
  user_role?: Maybe<Role>;
  user_state?: Maybe<State>;
  user_status?: Maybe<UserStatus>;
  user_type?: Maybe<UserType>;
  user_updated: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type UserBasicDetailsUpdateInput = {
  user_email: Scalars['String']['input'];
  user_fullname: Scalars['String']['input'];
  user_id: Scalars['Int']['input'];
  user_mobile: Scalars['String']['input'];
};

export type UserCard = {
  __typename?: 'UserCard';
  is_default_card?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  user_card_cardholder_name?: Maybe<Scalars['String']['output']>;
  user_card_created?: Maybe<Scalars['DateTime']['output']>;
  user_card_expiration_month?: Maybe<Scalars['Int']['output']>;
  user_card_expiration_year?: Maybe<Scalars['Int']['output']>;
  user_card_id?: Maybe<Scalars['Int']['output']>;
  user_card_last_4_digit?: Maybe<Scalars['Int']['output']>;
  user_card_network_type?: Maybe<UserCardNetworkType>;
  user_card_status?: Maybe<UserCardStatus>;
  user_card_token?: Maybe<Scalars['String']['output']>;
  user_card_updated?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

export type UserCardCreateInput = {
  is_default_card?: InputMaybe<Scalars['Boolean']['input']>;
  user_card_address?: InputMaybe<Scalars['String']['input']>;
  user_card_address2?: InputMaybe<Scalars['String']['input']>;
  user_card_cardholder_name?: InputMaybe<Scalars['String']['input']>;
  user_card_cvv?: InputMaybe<Scalars['String']['input']>;
  user_card_expiration_date?: InputMaybe<Scalars['String']['input']>;
  user_card_nationality_id?: InputMaybe<Scalars['Int']['input']>;
  user_card_no?: InputMaybe<Scalars['String']['input']>;
  user_card_postcode?: InputMaybe<Scalars['Int']['input']>;
  user_card_state_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

export type UserCardDropdown = {
  __typename?: 'UserCardDropdown';
  is_default_card?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
  user_card_cardholder_name?: Maybe<Scalars['String']['output']>;
  user_card_expiration_month?: Maybe<Scalars['Int']['output']>;
  user_card_expiration_year?: Maybe<Scalars['Int']['output']>;
  user_card_id?: Maybe<Scalars['Int']['output']>;
  user_card_last_4_digit?: Maybe<Scalars['Int']['output']>;
  user_card_network_type?: Maybe<Scalars['String']['output']>;
};

export type UserCardListing = {
  __typename?: 'UserCardListing';
  is_default_card?: Maybe<Scalars['Boolean']['output']>;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
  user_card_cardholder_name?: Maybe<Scalars['String']['output']>;
  user_card_created?: Maybe<Scalars['DateTime']['output']>;
  user_card_expiration_month?: Maybe<Scalars['Int']['output']>;
  user_card_expiration_year?: Maybe<Scalars['Int']['output']>;
  user_card_id?: Maybe<Scalars['Int']['output']>;
  user_card_last_4_digit?: Maybe<Scalars['Int']['output']>;
  user_card_network_type?: Maybe<Scalars['String']['output']>;
  user_card_status?: Maybe<Scalars['String']['output']>;
  user_card_updated?: Maybe<Scalars['DateTime']['output']>;
};

export type UserCardListingInput = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  is_default_card?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  user_card_network_type?: InputMaybe<UserCardNetworkType>;
  user_card_status?: InputMaybe<UserCardStatus>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** A paginated list of UserCardListing items. */
export type UserCardListingPaginator = {
  __typename?: 'UserCardListingPaginator';
  /** A list of UserCardListing items. */
  data: Array<UserCardListing>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum UserCardNetworkType {
  /** American Express */
  AmericanExpress = 'AMERICAN_EXPRESS',
  /** Master */
  Master = 'MASTER',
  /** Visa */
  Visa = 'VISA',
}

export enum UserCardStatus {
  Active = 'active',
  Suspend = 'suspend',
}

export type UserCardUpdateDefaultInput = {
  is_default_card?: InputMaybe<Scalars['Boolean']['input']>;
  user_card_id?: InputMaybe<Scalars['Int']['input']>;
};

export type UserCardUpdateStatusInput = {
  user_card_id?: InputMaybe<Scalars['Int']['input']>;
  user_card_status?: InputMaybe<UserCardStatus>;
};

export type UserCreateInput = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
  user_address?: InputMaybe<Scalars['String']['input']>;
  user_address2?: InputMaybe<Scalars['String']['input']>;
  user_alternative_email?: InputMaybe<Scalars['String']['input']>;
  user_alternative_mobile?: InputMaybe<Scalars['String']['input']>;
  user_city_id?: InputMaybe<Scalars['Int']['input']>;
  user_code?: InputMaybe<Scalars['String']['input']>;
  user_dob?: InputMaybe<Scalars['Date']['input']>;
  user_email: Scalars['String']['input'];
  user_fullname: Scalars['String']['input'];
  user_gender: UserGender;
  user_mobile: Scalars['String']['input'];
  user_nationality_id?: InputMaybe<Scalars['Int']['input']>;
  user_nric?: InputMaybe<Scalars['String']['input']>;
  user_postcode?: InputMaybe<Scalars['String']['input']>;
  user_profile_image?: InputMaybe<Scalars['Upload']['input']>;
  user_role_id?: InputMaybe<Scalars['Int']['input']>;
  user_state_id?: InputMaybe<Scalars['Int']['input']>;
  user_status?: InputMaybe<UserStatus>;
  user_type_id: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};

export enum UserGender {
  Female = 'Female',
  Male = 'Male',
}

export type UserLessDetail = {
  __typename?: 'UserLessDetail';
  user_email?: Maybe<Scalars['String']['output']>;
  user_fullname?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  user_mobile?: Maybe<Scalars['String']['output']>;
  user_status?: Maybe<UserStatus>;
};

export type UserLessDetailWithImages = {
  __typename?: 'UserLessDetailWithImages';
  user_email?: Maybe<Scalars['String']['output']>;
  user_fullname?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  user_mobile?: Maybe<Scalars['String']['output']>;
  user_profile_image?: Maybe<Images>;
};

export type UserLessDetailWithRoleAndImages = {
  __typename?: 'UserLessDetailWithRoleAndImages';
  user_email?: Maybe<Scalars['String']['output']>;
  user_fullname?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  user_mobile?: Maybe<Scalars['String']['output']>;
  user_profile_image?: Maybe<Images>;
  user_role?: Maybe<Role>;
  user_status?: Maybe<UserStatus>;
};

export type UserListing = {
  __typename?: 'UserListing';
  customer_user?: Maybe<Array<Maybe<Customer>>>;
  user_address?: Maybe<Scalars['String']['output']>;
  user_address2?: Maybe<Scalars['String']['output']>;
  user_alternative_email?: Maybe<Scalars['String']['output']>;
  user_alternative_mobile?: Maybe<Scalars['String']['output']>;
  user_city?: Maybe<City>;
  user_code?: Maybe<Scalars['String']['output']>;
  user_created: Scalars['DateTime']['output'];
  user_dob?: Maybe<Scalars['Date']['output']>;
  user_email?: Maybe<Scalars['String']['output']>;
  user_fullname?: Maybe<Scalars['String']['output']>;
  user_gender?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['Int']['output'];
  user_mobile?: Maybe<Scalars['String']['output']>;
  user_nationality?: Maybe<Country>;
  user_nric?: Maybe<Scalars['String']['output']>;
  user_postcode?: Maybe<Scalars['String']['output']>;
  user_profile_image?: Maybe<Images>;
  user_role?: Maybe<Role>;
  user_state?: Maybe<State>;
  user_status?: Maybe<UserStatus>;
  user_type?: Maybe<UserType>;
  user_updated: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type UserListingInput = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  user_gender?: InputMaybe<UserGender>;
  user_role_id?: InputMaybe<Scalars['Int']['input']>;
  user_status?: InputMaybe<UserStatus>;
  user_type_group?: InputMaybe<UserTypeGroup>;
  user_type_id?: InputMaybe<Scalars['Int']['input']>;
};

export type UserListingLessDetail = {
  __typename?: 'UserListingLessDetail';
  user_fullname?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** A paginated list of UserListing items. */
export type UserListingPaginator = {
  __typename?: 'UserListingPaginator';
  /** A list of UserListing items. */
  data: Array<UserListing>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum UserStatus {
  Active = 'active',
  Pending = 'pending',
  Suspend = 'suspend',
}

export type UserType = {
  __typename?: 'UserType';
  user_type_group?: Maybe<Scalars['String']['output']>;
  user_type_id: Scalars['Int']['output'];
  user_type_name: Scalars['String']['output'];
  user_type_slug: Scalars['String']['output'];
};

export enum UserTypeGroup {
  Management = 'management',
  User = 'user',
}

export type UserUpdateInput = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  password_confirmation?: InputMaybe<Scalars['String']['input']>;
  user_address?: InputMaybe<Scalars['String']['input']>;
  user_address2?: InputMaybe<Scalars['String']['input']>;
  user_alternative_email?: InputMaybe<Scalars['String']['input']>;
  user_alternative_mobile?: InputMaybe<Scalars['String']['input']>;
  user_city_id?: InputMaybe<Scalars['Int']['input']>;
  user_dob?: InputMaybe<Scalars['Date']['input']>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  user_fullname: Scalars['String']['input'];
  user_gender: UserGender;
  user_id: Scalars['Int']['input'];
  user_language?: InputMaybe<Language>;
  user_mobile: Scalars['String']['input'];
  user_nationality_id?: InputMaybe<Scalars['Int']['input']>;
  user_nric?: InputMaybe<Scalars['String']['input']>;
  user_postcode?: InputMaybe<Scalars['String']['input']>;
  user_profile_image?: InputMaybe<Scalars['Upload']['input']>;
  user_role_id: Scalars['Int']['input'];
  user_state_id?: InputMaybe<Scalars['Int']['input']>;
  user_status: UserStatus;
  user_type_id: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};

export type UserUpdatePasswordInput = {
  current_password?: InputMaybe<Scalars['String']['input']>;
  new_password?: InputMaybe<Scalars['String']['input']>;
  password_confirmation?: InputMaybe<Scalars['String']['input']>;
};
