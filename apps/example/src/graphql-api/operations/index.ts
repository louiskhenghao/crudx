import * as Types from '../../graphql/@types/index';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LoginMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.LoginInput>;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  Login?: {
    __typename?: 'LoginResponse';
    status: boolean;
    message: string;
    TokenResponse?: {
      __typename?: 'TokenResponse';
      token?: string | null;
      token_type?: string | null;
    } | null;
  } | null;
};

export type RecipientListingQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.RecipientListingInput>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type RecipientListingQuery = {
  __typename?: 'Query';
  RecipientListing?: {
    __typename?: 'RecipientListingPaginator';
    data: Array<{
      __typename?: 'RecipientListing';
      recipient_id?: number | null;
      recipient_email?: string | null;
      recipient_type?: Types.RecipientType | null;
      recipient_mobile_number?: string | null;
      recipient_bank_holder_name?: string | null;
      recipient_bank_account_number?: string | null;
      total_amount?: number | null;
      bank?: {
        __typename?: 'Bank';
        bank_id?: number | null;
        bank_name?: string | null;
      } | null;
      customer?: {
        __typename?: 'Customer';
        customer_id?: number | null;
        customer_name?: string | null;
      } | null;
      recipient_category?: {
        __typename?: 'RecipientCategory';
        recipient_category_id?: number | null;
        recipient_category_name?: string | null;
      } | null;
    }>;
    paginatorInfo: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem?: number | null;
      hasMorePages: boolean;
      lastItem?: number | null;
      lastPage: number;
      perPage: number;
      total: number;
    };
  } | null;
};

export type RecipientCategoryDropdownQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type RecipientCategoryDropdownQuery = {
  __typename?: 'Query';
  RecipientCategoryDropdown?: Array<{
    __typename?: 'RecipientCategory';
    recipient_category_id?: number | null;
    recipient_category_name?: string | null;
    recipient_category_badge_colour?: string | null;
    recipient_category_created?: any | null;
    recipient_category_updated?: any | null;
    is_deleted?: boolean | null;
  } | null> | null;
};

export type RejectReasonDropdownQueryVariables = Types.Exact<{
  reject_reason_type?: Types.InputMaybe<Types.RejectReasonType>;
}>;

export type RejectReasonDropdownQuery = {
  __typename?: 'Query';
  RejectReasonDropdown?: Array<{
    __typename?: 'RejectReason';
    reject_reason_id?: number | null;
    reject_reason_name?: string | null;
    reject_reason_description?: string | null;
    reject_reason_type?: string | null;
    is_deleted?: boolean | null;
  } | null> | null;
};

export type PaymentRepeatTypeListingQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.PaymentRepeatTypeListingInput>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type PaymentRepeatTypeListingQuery = {
  __typename?: 'Query';
  PaymentRepeatTypeListing?: {
    __typename?: 'PaymentRepeatTypePaginator';
    data: Array<{
      __typename?: 'PaymentRepeatType';
      is_deleted?: number | null;
      is_display?: boolean | null;
      is_extra_charges?: boolean | null;
      is_disabled?: boolean | null;
      payment_repeat_type_additional_days?: number | null;
      payment_repeat_type_category?: Types.PaymentRepeatTypeCategory | null;
      payment_repeat_type_charges_rate?: number | null;
      payment_repeat_type_charges_type?: Types.PaymentRepeatTypeChargesType | null;
      payment_repeat_type_id?: number | null;
      payment_repeat_type_name?: any | null;
      payment_repeat_type_parent_id?: number | null;
      standard_fee?: number | null;
    }>;
    paginatorInfo: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem?: number | null;
      hasMorePages: boolean;
      lastItem?: number | null;
      lastPage: number;
      perPage: number;
      total: number;
    };
  } | null;
};

export type PaymentRepeatTypeUpdateMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.PaymentRepeatTypeInput>;
}>;

export type PaymentRepeatTypeUpdateMutation = {
  __typename?: 'Mutation';
  PaymentRepeatTypeUpdate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type PaymentListingQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.PaymentListingInput>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type PaymentListingQuery = {
  __typename?: 'Query';
  PaymentListing?: {
    __typename?: 'PaymentPaginator';
    data: Array<{
      __typename?: 'Payment';
      is_refund_requested?: boolean | null;
      payment_referer_code?: string | null;
      is_payment_repeat?: boolean | null;
      payment_amount?: number | null;
      payment_amount_total?: number | null;
      payment_schedule_total_number?: number | null;
      payment_subtotal?: number | null;
      payment_id?: number | null;
      payment_created?: any | null;
      payment_reference?: string | null;
      payment_schedule?: Array<{
        __typename?: 'PaymentSchedule';
        payment_schedule_id?: number | null;
        payment_schedule_amount?: number | null;
        payment_schedule_number?: number | null;
        payment_schedule_complete_date?: any | null;
        payment_schedule_created?: any | null;
        payment_schedule_date?: any | null;
        payment_schedule_referer_code?: string | null;
        payment_status?: {
          __typename?: 'PaymentStatus';
          payment_status_id?: number | null;
          payment_status_name?: string | null;
        } | null;
        payment?: {
          __typename?: 'Payment';
          payment_amount?: number | null;
          payment_amount_total?: number | null;
          payment_complete_date?: any | null;
          payment_created?: any | null;
          payment_end_date?: any | null;
          payment_extra_charges?: number | null;
          payment_extra_charges_rate?: number | null;
          payment_extra_charges_total?: number | null;
          payment_grandtotal?: number | null;
          payment_id?: number | null;
          payment_reference?: string | null;
          payment_referer_code?: string | null;
          payment_schedule_number_current?: number | null;
          payment_start_date?: any | null;
          payment_subtotal?: number | null;
          payment_updated?: any | null;
          is_payment_repeat?: boolean | null;
          payment_recipient?: Array<{
            __typename?: 'PaymentRecipientDetails';
            payment_recipient_account_name?: string | null;
            payment_recipient_account_number?: string | null;
            payment_recipient_amount?: number | null;
          } | null> | null;
        } | null;
        payment_repeat_type?: {
          __typename?: 'PaymentRepeatType';
          payment_repeat_type_charges_rate?: number | null;
          payment_repeat_type_name?: any | null;
          is_extra_charges?: boolean | null;
        } | null;
        user_card?: {
          __typename?: 'UserCard';
          user_id?: number | null;
          user_card_id?: number | null;
          user_card_cardholder_name?: string | null;
          user_card_expiration_month?: number | null;
          user_card_expiration_year?: number | null;
          user_card_last_4_digit?: number | null;
        } | null;
        payment_schedule_complete_media?: Array<{
          __typename?: 'Media';
          file_name?: string | null;
          url?: string | null;
        } | null> | null;
      } | null> | null;
      payment_type?: {
        __typename?: 'PaymentType';
        payment_type_id?: number | null;
        payment_type_name?: any | null;
      } | null;
      payment_log?: Array<{
        __typename?: 'PaymentLog';
        payment_log_description?: string | null;
        payment_log_action?: string | null;
        payment_log_created?: any | null;
        user?: { __typename?: 'User'; user_fullname?: string | null } | null;
      } | null> | null;
      payment_repeat_type?: {
        __typename?: 'PaymentRepeatType';
        payment_repeat_type_name?: any | null;
      } | null;
      payment_complete_media?: Array<{
        __typename?: 'Media';
        id?: number | null;
        collection_name?: string | null;
        name?: string | null;
        file_name?: string | null;
        mime_type?: string | null;
        url?: string | null;
        full_url?: string | null;
        path?: string | null;
        conversions?: any | null;
      } | null> | null;
      payment_supporting_media?: Array<{
        __typename?: 'Media';
        id?: number | null;
        collection_name?: string | null;
        name?: string | null;
        file_name?: string | null;
        mime_type?: string | null;
        url?: string | null;
        full_url?: string | null;
        path?: string | null;
        conversions?: any | null;
      } | null> | null;
      customer?: {
        __typename?: 'Customer';
        customer_id?: number | null;
        customer_name?: string | null;
        customer_contact_person?: string | null;
      } | null;
      payment_recipient?: Array<{
        __typename?: 'PaymentRecipientDetails';
        payment_recipient_id?: number | null;
        payment_recipient_amount?: number | null;
        recipient?: {
          __typename?: 'Recipient';
          recipient_id?: number | null;
          recipient_bank_holder_name?: string | null;
          recipient_bank_account_number?: string | null;
          recipient_type?: Types.RecipientType | null;
          bank?: { __typename?: 'Bank'; bank_name?: string | null } | null;
          user?: {
            __typename?: 'User';
            user_id: number;
            user_fullname?: string | null;
          } | null;
          recipient_category?: {
            __typename?: 'RecipientCategory';
            recipient_category_id?: number | null;
            recipient_category_name?: string | null;
          } | null;
        } | null;
      } | null> | null;
      payment_status?: {
        __typename?: 'PaymentStatus';
        payment_status_id?: number | null;
        payment_status_name?: string | null;
        payment_status_desc?: string | null;
      } | null;
    }>;
    paginatorInfo: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem?: number | null;
      hasMorePages: boolean;
      lastItem?: number | null;
      lastPage: number;
      perPage: number;
      total: number;
    };
  } | null;
};

export type PaymentScheduleRefundListingQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.PaymentScheduleListingInput>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type PaymentScheduleRefundListingQuery = {
  __typename?: 'Query';
  PaymentScheduleRefundListing?: {
    __typename?: 'PaymentSchedulePaginator';
    data: Array<{
      __typename?: 'PaymentSchedule';
      payment_schedule_id?: number | null;
      payment_schedule_amount?: number | null;
      payment_schedule_number?: number | null;
      payment_schedule_complete_date?: any | null;
      payment_schedule_created?: any | null;
      payment_schedule_date?: any | null;
      payment_schedule_referer_code?: string | null;
      payment_schedule_log?: Array<{
        __typename?: 'PaymentScheduleLog';
        payment_schedule_log_description?: string | null;
        payment_schedule_log_action?: string | null;
      } | null> | null;
      payment_status?: {
        __typename?: 'PaymentStatus';
        payment_status_id?: number | null;
        payment_status_name?: string | null;
      } | null;
      customer?: {
        __typename?: 'Customer';
        customer_id?: number | null;
        customer_name?: string | null;
        customer_contact_person?: string | null;
      } | null;
      payment?: {
        __typename?: 'Payment';
        payment_amount?: number | null;
        payment_amount_total?: number | null;
        payment_complete_date?: any | null;
        payment_created?: any | null;
        payment_end_date?: any | null;
        payment_extra_charges?: number | null;
        payment_extra_charges_rate?: number | null;
        payment_extra_charges_total?: number | null;
        payment_grandtotal?: number | null;
        payment_id?: number | null;
        payment_reference?: string | null;
        payment_referer_code?: string | null;
        payment_schedule_number_current?: number | null;
        payment_start_date?: any | null;
        payment_subtotal?: number | null;
        payment_updated?: any | null;
        is_payment_repeat?: boolean | null;
        payment_recipient?: Array<{
          __typename?: 'PaymentRecipientDetails';
          payment_recipient_account_name?: string | null;
          payment_recipient_account_number?: string | null;
          payment_recipient_amount?: number | null;
          recipient?: {
            __typename?: 'Recipient';
            recipient_id?: number | null;
            recipient_bank_holder_name?: string | null;
            recipient_bank_account_number?: string | null;
            recipient_type?: Types.RecipientType | null;
            bank?: { __typename?: 'Bank'; bank_name?: string | null } | null;
            user?: {
              __typename?: 'User';
              user_id: number;
              user_fullname?: string | null;
            } | null;
            recipient_category?: {
              __typename?: 'RecipientCategory';
              recipient_category_id?: number | null;
              recipient_category_name?: string | null;
            } | null;
          } | null;
        } | null> | null;
      } | null;
      payment_repeat_type?: {
        __typename?: 'PaymentRepeatType';
        payment_repeat_type_charges_rate?: number | null;
        payment_repeat_type_name?: any | null;
        is_extra_charges?: boolean | null;
      } | null;
      user_card?: {
        __typename?: 'UserCard';
        user_id?: number | null;
        user_card_id?: number | null;
        user_card_cardholder_name?: string | null;
        user_card_expiration_month?: number | null;
        user_card_expiration_year?: number | null;
        user_card_last_4_digit?: number | null;
      } | null;
      payment_schedule_complete_media?: Array<{
        __typename?: 'Media';
        file_name?: string | null;
        url?: string | null;
      } | null> | null;
    }>;
    paginatorInfo: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem?: number | null;
      hasMorePages: boolean;
      lastItem?: number | null;
      lastPage: number;
      perPage: number;
      total: number;
    };
  } | null;
};

export type PaymentRefundRequestCountQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type PaymentRefundRequestCountQuery = {
  __typename?: 'Query';
  PaymentScheduleRefundListing?: {
    __typename?: 'PaymentSchedulePaginator';
    paginatorInfo: { __typename?: 'PaginatorInfo'; total: number };
  } | null;
};

export type PaymentDetailQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type PaymentDetailQuery = {
  __typename?: 'Query';
  PaymentDetail?: {
    __typename?: 'PaymentDetails';
    is_payment_repeat?: boolean | null;
    payment_amount?: number | null;
    payment_amount_total?: number | null;
    payment_extra_charges_total?: number | null;
    payment_grandtotal?: number | null;
    payment_extra_charges_rate?: number | null;
    payment_extra_charges?: number | null;
    payment_subtotal?: number | null;
    payment_id?: number | null;
    payment_created?: any | null;
    payment_reference?: string | null;
    payment_referer_code?: string | null;
    payment_start_date?: any | null;
    payment_end_date?: any | null;
    payment_schedule_number_current?: number | null;
    payment_schedule?: Array<{
      __typename?: 'PaymentSchedule';
      payment_schedule_id?: number | null;
      payment_schedule_date?: any | null;
      payment_schedule_referer_code?: string | null;
      payment_schedule_number?: number | null;
      payment_schedule_amount?: number | null;
      payment?: {
        __typename?: 'Payment';
        payment_schedule_number_current?: number | null;
        payment_schedule_total_number?: number | null;
        payment_amount?: number | null;
      } | null;
      payment_status?: {
        __typename?: 'PaymentStatus';
        payment_status_name?: string | null;
      } | null;
    } | null> | null;
    payment_type?: {
      __typename?: 'PaymentType';
      payment_type_id?: number | null;
      payment_type_name?: any | null;
    } | null;
    payment_complete_media?: Array<{
      __typename?: 'Media';
      id?: number | null;
      collection_name?: string | null;
      name?: string | null;
      file_name?: string | null;
      mime_type?: string | null;
      url?: string | null;
      full_url?: string | null;
      path?: string | null;
      conversions?: any | null;
    } | null> | null;
    payment_supporting_media?: Array<{
      __typename?: 'Media';
      id?: number | null;
      collection_name?: string | null;
      name?: string | null;
      file_name?: string | null;
      mime_type?: string | null;
      url?: string | null;
      full_url?: string | null;
      path?: string | null;
      conversions?: any | null;
    } | null> | null;
    customer?: {
      __typename?: 'Customer';
      customer_id?: number | null;
      customer_name?: string | null;
      customer_contact_person?: string | null;
      customer_registration_number?: string | null;
      customer_website?: string | null;
      customer_address?: string | null;
      customer_address2?: string | null;
      customer_postcode?: string | null;
      customer_mobile?: string | null;
      customer_fax?: string | null;
      customer_email?: string | null;
      customer_contact_person_mobile?: string | null;
      city?: { __typename?: 'City'; city_name: string } | null;
      state?: { __typename?: 'State'; state_name?: string | null } | null;
      country?: { __typename?: 'Country'; country_name?: string | null } | null;
      user?: { __typename?: 'User'; user_fullname?: string | null } | null;
    } | null;
    payment_recipient?: Array<{
      __typename?: 'PaymentRecipientDetails';
      payment_recipient_id?: number | null;
      payment_recipient_amount?: number | null;
      recipient?: {
        __typename?: 'Recipient';
        recipient_id?: number | null;
        recipient_bank_holder_name?: string | null;
        recipient_bank_account_number?: string | null;
        recipient_type?: Types.RecipientType | null;
        bank?: { __typename?: 'Bank'; bank_name?: string | null } | null;
        user?: {
          __typename?: 'User';
          user_id: number;
          user_fullname?: string | null;
        } | null;
        recipient_category?: {
          __typename?: 'RecipientCategory';
          recipient_category_id?: number | null;
          recipient_category_name?: string | null;
        } | null;
      } | null;
    } | null> | null;
    payment_status?: {
      __typename?: 'PaymentStatus';
      payment_status_id?: number | null;
      payment_status_name?: string | null;
      payment_status_desc?: string | null;
    } | null;
    payment_repeat_type?: {
      __typename?: 'PaymentRepeatType';
      payment_repeat_type_name?: any | null;
    } | null;
    payment_reject_details?: {
      __typename?: 'PaymentLog';
      payment_log_remark?: string | null;
      reject_reason?: {
        __typename?: 'RejectReason';
        reject_reason_name?: string | null;
        reject_reason_id?: number | null;
        reject_reason_description?: string | null;
        reject_reason_type?: string | null;
      } | null;
    } | null;
  } | null;
};

export type PaymentTypeDropdownQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type PaymentTypeDropdownQuery = {
  __typename?: 'Query';
  PaymentTypeDropdown?: Array<{
    __typename?: 'PaymentTypeDropdown';
    payment_type_id?: number | null;
    payment_type_name?: any | null;
    payment_type_document?: string | null;
    is_allowed_payment_repeat?: boolean | null;
  } | null> | null;
};

export type PaymentStatusListingQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type PaymentStatusListingQuery = {
  __typename?: 'Query';
  PaymentStatusListing?: {
    __typename?: 'PaymentStatusPaginator';
    data: Array<{
      __typename?: 'PaymentStatus';
      payment_status_id?: number | null;
      payment_status_name?: string | null;
      payment_status_desc?: string | null;
    }>;
  } | null;
};

export type PaymentApproveMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type PaymentApproveMutation = {
  __typename?: 'Mutation';
  PaymentApprove?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type PaymentRejectMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.PaymentRejectInput>;
}>;

export type PaymentRejectMutation = {
  __typename?: 'Mutation';
  PaymentReject?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type PaymentCancelApproveMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type PaymentCancelApproveMutation = {
  __typename?: 'Mutation';
  PaymentCancelApprove?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type PaymentCancelRejectMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type PaymentCancelRejectMutation = {
  __typename?: 'Mutation';
  PaymentCancelReject?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type PaymentCompleteMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.PaymentCompleteInput>;
}>;

export type PaymentCompleteMutation = {
  __typename?: 'Mutation';
  PaymentComplete?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type PaymentScheduleCompleteMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.PaymentScheduleCompleteInput>;
}>;

export type PaymentScheduleCompleteMutation = {
  __typename?: 'Mutation';
  PaymentScheduleComplete?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type PaymentScheduleRefundApproveMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type PaymentScheduleRefundApproveMutation = {
  __typename?: 'Mutation';
  PaymentScheduleRefundApprove?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type PaymentScheduleRefundRejectMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.PaymentScheduleRefundRejectInput>;
}>;

export type PaymentScheduleRefundRejectMutation = {
  __typename?: 'Mutation';
  PaymentScheduleRefundReject?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type PaymentScheduleVoidMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.PaymentScheduleVoidInput>;
}>;

export type PaymentScheduleVoidMutation = {
  __typename?: 'Mutation';
  PaymentScheduleVoid?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type PaymentListingStatusCountQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.PaymentListingInput>;
}>;

export type PaymentListingStatusCountQuery = {
  __typename?: 'Query';
  PaymentListingStatusCount?: Array<{
    __typename?: 'PaymentStatusCount';
    payment_status_id?: number | null;
    payment_status_name?: string | null;
    count?: number | null;
  } | null> | null;
};

export type PaymentScheduleListingStatusCountQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.PaymentScheduleListingInput>;
}>;

export type PaymentScheduleListingStatusCountQuery = {
  __typename?: 'Query';
  PaymentScheduleListingStatusCount?: Array<{
    __typename?: 'PaymentStatusCount';
    payment_status_id?: number | null;
    payment_status_name?: string | null;
    count?: number | null;
  } | null> | null;
};

export type PaymentScheduleListingQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.PaymentScheduleListingInput>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type PaymentScheduleListingQuery = {
  __typename?: 'Query';
  PaymentScheduleListing?: {
    __typename?: 'PaymentSchedulePaginator';
    data: Array<{
      __typename?: 'PaymentSchedule';
      is_refund_requested?: boolean | null;
      payment_schedule_id?: number | null;
      payment_schedule_referer_code?: string | null;
      payment_schedule_amount?: number | null;
      payment_schedule_number?: number | null;
      payment_schedule_complete_date?: any | null;
      payment_schedule_created?: any | null;
      payment_schedule_date?: any | null;
      payment_schedule_log?: Array<{
        __typename?: 'PaymentScheduleLog';
        payment_schedule_log_description?: string | null;
        payment_schedule_log_action?: string | null;
        payment_schedule_log_created?: any | null;
        payment_schedule_log_updated?: any | null;
        admin?: { __typename?: 'User'; user_fullname?: string | null } | null;
      } | null> | null;
      payment_status?: {
        __typename?: 'PaymentStatus';
        payment_status_id?: number | null;
        payment_status_name?: string | null;
      } | null;
      payment_schedule_complete_media?: Array<{
        __typename?: 'Media';
        id?: number | null;
        collection_name?: string | null;
        name?: string | null;
        file_name?: string | null;
        mime_type?: string | null;
        url?: string | null;
        full_url?: string | null;
        path?: string | null;
        conversions?: any | null;
      } | null> | null;
      customer?: {
        __typename?: 'Customer';
        customer_id?: number | null;
        customer_name?: string | null;
        customer_contact_person?: string | null;
      } | null;
      user_card?: {
        __typename?: 'UserCard';
        user_id?: number | null;
        user_card_id?: number | null;
        user_card_cardholder_name?: string | null;
        user_card_expiration_month?: number | null;
        user_card_expiration_year?: number | null;
        user_card_last_4_digit?: number | null;
      } | null;
      payment?: {
        __typename?: 'Payment';
        payment_schedule_total_number?: number | null;
        payment_amount_total?: number | null;
        payment_amount?: number | null;
        payment_id?: number | null;
        payment_reference?: string | null;
        is_payment_repeat?: boolean | null;
        payment_schedule?: Array<{
          __typename?: 'PaymentSchedule';
          payment_schedule_referer_code?: string | null;
          payment_schedule_date?: any | null;
          payment_schedule_amount?: number | null;
          payment_schedule_number?: number | null;
          payment_status?: {
            __typename?: 'PaymentStatus';
            payment_status_id?: number | null;
            payment_status_name?: string | null;
          } | null;
        } | null> | null;
        payment_type?: {
          __typename?: 'PaymentType';
          payment_type_name?: any | null;
        } | null;
        payment_recipient?: Array<{
          __typename?: 'PaymentRecipientDetails';
          payment_recipient_account_name?: string | null;
          payment_recipient_account_number?: string | null;
          payment_recipient_amount?: number | null;
        } | null> | null;
        payment_supporting_media?: Array<{
          __typename?: 'Media';
          file_name?: string | null;
          url?: string | null;
        } | null> | null;
      } | null;
      payment_recipient?: Array<{
        __typename?: 'PaymentRecipientDetails';
        payment_recipient_account_name?: string | null;
        payment_recipient_account_number?: string | null;
        payment_recipient_amount?: number | null;
        payment?: {
          __typename?: 'Payment';
          payment_reference?: string | null;
        } | null;
        recipient?: {
          __typename?: 'Recipient';
          recipient_id?: number | null;
          recipient_bank_holder_name?: string | null;
          recipient_bank_account_number?: string | null;
          recipient_type?: Types.RecipientType | null;
          recipient_category?: {
            __typename?: 'RecipientCategory';
            recipient_category_name?: string | null;
          } | null;
          bank?: {
            __typename?: 'Bank';
            bank_name?: string | null;
            bank_logo?: { __typename?: 'Images'; thumb?: string | null } | null;
          } | null;
        } | null;
      } | null> | null;
      payment_repeat_type?: {
        __typename?: 'PaymentRepeatType';
        payment_repeat_type_charges_rate?: number | null;
        payment_repeat_type_name?: any | null;
        is_extra_charges?: boolean | null;
      } | null;
    }>;
    paginatorInfo: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem?: number | null;
      hasMorePages: boolean;
      lastItem?: number | null;
      lastPage: number;
      perPage: number;
      total: number;
    };
  } | null;
};

export type BankDetailQueryVariables = Types.Exact<{
  bank_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type BankDetailQuery = {
  __typename?: 'Query';
  BankDetail?: {
    __typename?: 'Bank';
    bank_created?: any | null;
    bank_id?: number | null;
    bank_name?: string | null;
    is_deleted?: number | null;
    bank_logo?: {
      __typename?: 'Images';
      full?: string | null;
      media_id?: number | null;
      thumb?: string | null;
    } | null;
  } | null;
};

export type BankListingQueryVariables = Types.Exact<{
  keyword?: Types.InputMaybe<Types.Scalars['String']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type BankListingQuery = {
  __typename?: 'Query';
  BankListing?: {
    __typename?: 'BankPaginator';
    data: Array<{
      __typename?: 'Bank';
      bank_created?: any | null;
      bank_id?: number | null;
      bank_name?: string | null;
      is_deleted?: number | null;
      bank_logo?: {
        __typename?: 'Images';
        full?: string | null;
        media_id?: number | null;
        thumb?: string | null;
      } | null;
    }>;
    paginatorInfo: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem?: number | null;
      hasMorePages: boolean;
      lastItem?: number | null;
      lastPage: number;
      perPage: number;
      total: number;
    };
  } | null;
};

export type BankDeleteMutationVariables = Types.Exact<{
  bank_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type BankDeleteMutation = {
  __typename?: 'Mutation';
  BankDelete?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type BankCreateMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<
    Array<Types.InputMaybe<Types.BankInput>> | Types.InputMaybe<Types.BankInput>
  >;
}>;

export type BankCreateMutation = {
  __typename?: 'Mutation';
  BankCreate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type BankUpdateMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.BankInput>;
}>;

export type BankUpdateMutation = {
  __typename?: 'Mutation';
  BankUpdate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type RoleListingQueryVariables = Types.Exact<{
  user_type_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type RoleListingQuery = {
  __typename?: 'Query';
  RoleListing?: Array<{
    __typename?: 'RoleListing';
    id?: number | null;
    name?: string | null;
    total?: number | null;
    user_type_id?: number | null;
    user_type_name?: string | null;
    users?: Array<{
      __typename?: 'UserLessDetailWithImages';
      user_id?: number | null;
      user_email?: string | null;
      user_fullname?: string | null;
      user_mobile?: string | null;
      user_profile_image?: {
        __typename?: 'Images';
        full?: string | null;
        media_id?: number | null;
        thumb?: string | null;
      } | null;
    } | null> | null;
  } | null> | null;
};

export type RoleDetailQueryVariables = Types.Exact<{
  role_id: Types.Scalars['Int']['input'];
}>;

export type RoleDetailQuery = {
  __typename?: 'Query';
  RoleDetail?: {
    __typename?: 'RoleDetail';
    id?: number | null;
    name?: string | null;
    user_type_id?: number | null;
    user_type_name?: string | null;
    permissions?: Array<{
      __typename?: 'Permission';
      id?: number | null;
      name?: string | null;
      display_name?: string | null;
      group_name?: string | null;
    } | null> | null;
  } | null;
};

export type RoleUpdateMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.RoleUpdateInput>;
}>;

export type RoleUpdateMutation = {
  __typename?: 'Mutation';
  RoleUpdate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type RoleDeleteMutationVariables = Types.Exact<{
  role_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type RoleDeleteMutation = {
  __typename?: 'Mutation';
  RoleDelete?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type RoleCreateMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.RoleCreateInput>;
}>;

export type RoleCreateMutation = {
  __typename?: 'Mutation';
  RoleCreate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type PermissionListingQueryVariables = Types.Exact<{
  user_type_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type PermissionListingQuery = {
  __typename?: 'Query';
  PermissionListing?: Array<{
    __typename?: 'Permission';
    id?: number | null;
    display_name?: string | null;
    group_name?: string | null;
    name?: string | null;
  } | null> | null;
};

export type AdminListingQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.AdminListingInput>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type AdminListingQuery = {
  __typename?: 'Query';
  AdminListing?: {
    __typename?: 'UserListingPaginator';
    data: Array<{
      __typename?: 'UserListing';
      user_id: number;
      user_fullname?: string | null;
      user_mobile?: string | null;
      user_email?: string | null;
      user_status?: Types.UserStatus | null;
      user_code?: string | null;
      user_address?: string | null;
      user_address2?: string | null;
      user_created: any;
      user_dob?: any | null;
      user_nric?: string | null;
      user_postcode?: string | null;
      user_updated: any;
      username?: string | null;
      user_role?: {
        __typename?: 'Role';
        name?: string | null;
        id?: number | null;
      } | null;
      user_city?: {
        __typename?: 'City';
        city_id: number;
        city_name: string;
      } | null;
      user_state?: {
        __typename?: 'State';
        state_id?: number | null;
        state_name?: string | null;
      } | null;
      user_nationality?: {
        __typename?: 'Country';
        country_id?: number | null;
        country_name?: string | null;
      } | null;
      user_profile_image?: {
        __typename?: 'Images';
        media_id?: number | null;
        full?: string | null;
        thumb?: string | null;
      } | null;
      user_type?: {
        __typename?: 'UserType';
        user_type_id: number;
        user_type_name: string;
        user_type_slug: string;
      } | null;
    }>;
    paginatorInfo: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem?: number | null;
      hasMorePages: boolean;
      lastItem?: number | null;
      lastPage: number;
      perPage: number;
      total: number;
    };
  } | null;
};

export type AdminListingExportQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.AdminListingInput>;
}>;

export type AdminListingExportQuery = {
  __typename?: 'Query';
  AdminListingExport?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type UserDetailQueryVariables = Types.Exact<{
  user_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type UserDetailQuery = {
  __typename?: 'Query';
  UserDetail?: {
    __typename?: 'User';
    user_id: number;
    user_email?: string | null;
    user_fullname?: string | null;
    username?: string | null;
    user_mobile?: string | null;
    user_status?: Types.UserStatus | null;
    user_join_date?: any | null;
    user_dob?: any | null;
    user_gender?: Types.UserGender | null;
    user_role?: {
      __typename?: 'Role';
      name?: string | null;
      id?: number | null;
    } | null;
    customer?: {
      __typename?: 'Customer';
      customer_id?: number | null;
      customer_address?: string | null;
      customer_address2?: string | null;
      customer_annual_revenue?: Types.CustomerAnnualRevenue | null;
      customer_approved?: any | null;
      customer_company_size?: Types.CustomerCompanySize | null;
      customer_contact_person?: string | null;
      customer_contact_person_mobile?: string | null;
      customer_contact_person_role?: Types.CustomerContactPersonRole | null;
      customer_created?: any | null;
      customer_fax?: string | null;
      customer_mobile?: string | null;
      customer_name?: string | null;
      customer_postcode?: string | null;
      customer_remark?: string | null;
      customer_status?: Types.CustomerStatus | null;
      customer_type?: Types.CustomerType | null;
      customer_updated?: any | null;
      customer_email?: string | null;
      customer_registration_number?: string | null;
      business_type?: {
        __typename?: 'BusinessType';
        business_type_id?: number | null;
        business_type_name?: any | null;
        business_type_status?: string | null;
        is_deleted?: boolean | null;
      } | null;
      business_year?: {
        __typename?: 'BusinessYear';
        year_of_business_id?: number | null;
        year_of_business_name?: any | null;
      } | null;
      ssm_business_certificate?: Array<{
        __typename?: 'Media';
        id?: number | null;
        name?: string | null;
        file_name?: string | null;
        full_url?: string | null;
        mime_type?: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export type UserCreateMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.UserCreateInput>;
}>;

export type UserCreateMutation = {
  __typename?: 'Mutation';
  UserCreate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type UserDeleteMutationVariables = Types.Exact<{
  user_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type UserDeleteMutation = {
  __typename?: 'Mutation';
  UserDelete?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type UserUpdateMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.UserUpdateInput>;
}>;

export type UserUpdateMutation = {
  __typename?: 'Mutation';
  UserUpdate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type UpdatePasswordMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.UpdatePasswordInput>;
}>;

export type UpdatePasswordMutation = {
  __typename?: 'Mutation';
  UpdatePassword: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  };
};

export type ApplicationListingQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CustomerListingInput>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type ApplicationListingQuery = {
  __typename?: 'Query';
  ApplicationListing?: {
    __typename?: 'CustomerPaginator';
    data: Array<{
      __typename?: 'Customer';
      customer_id?: number | null;
      customer_address?: string | null;
      customer_address2?: string | null;
      customer_approved?: any | null;
      customer_contact_person?: string | null;
      customer_contact_person_mobile?: string | null;
      customer_contact_person_role?: Types.CustomerContactPersonRole | null;
      customer_contact_person_email?: string | null;
      customer_created?: any | null;
      customer_fax?: string | null;
      customer_mobile?: string | null;
      customer_name?: string | null;
      customer_postcode?: string | null;
      customer_remark?: string | null;
      customer_status?: Types.CustomerStatus | null;
      customer_type?: Types.CustomerType | null;
      customer_updated?: any | null;
      customer_email?: string | null;
      customer_registration_number?: string | null;
      business_type?: {
        __typename?: 'BusinessType';
        business_type_id?: number | null;
        business_type_name?: any | null;
        business_type_status?: string | null;
        is_deleted?: boolean | null;
      } | null;
      setting_annual_revenue?: {
        __typename?: 'AnnualRevenue';
        setting_annual_revenue_id?: number | null;
        setting_annual_revenue_name?: string | null;
      } | null;
      setting_company_size?: {
        __typename?: 'CompanySize';
        setting_company_size_id?: number | null;
        setting_company_size_name?: string | null;
      } | null;
      city?: { __typename?: 'City'; city_name: string } | null;
      state?: { __typename?: 'State'; state_name?: string | null } | null;
      business_year?: {
        __typename?: 'BusinessYear';
        year_of_business_id?: number | null;
        year_of_business_name?: any | null;
      } | null;
      ssm_business_certificate?: Array<{
        __typename?: 'Media';
        id?: number | null;
        name?: string | null;
        file_name?: string | null;
        full_url?: string | null;
        mime_type?: string | null;
      } | null> | null;
    }>;
    paginatorInfo: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem?: number | null;
      hasMorePages: boolean;
      lastItem?: number | null;
      lastPage: number;
      perPage: number;
      total: number;
    };
  } | null;
};

export type ApplicationListingExportQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CustomerListingInput>;
}>;

export type ApplicationListingExportQuery = {
  __typename?: 'Query';
  ApplicationListingExport?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type ApplicationStatusCountQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CustomerStatus>;
}>;

export type ApplicationStatusCountQuery = {
  __typename?: 'Query';
  ApplicationStatusCount?: Array<{
    __typename?: 'ApplicationStatusCount';
    customer_status?: Types.CustomerStatus | null;
    count?: number | null;
  } | null> | null;
};

export type UserListingQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.UserListingInput>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type UserListingQuery = {
  __typename?: 'Query';
  UserListing?: {
    __typename?: 'UserListingPaginator';
    data: Array<{
      __typename?: 'UserListing';
      user_id: number;
      username?: string | null;
      user_email?: string | null;
      user_fullname?: string | null;
      user_nric?: string | null;
      user_mobile?: string | null;
      user_status?: Types.UserStatus | null;
      user_gender?: string | null;
      user_address?: string | null;
      user_nationality?: {
        __typename?: 'Country';
        country_id?: number | null;
        country_name?: string | null;
      } | null;
      user_role?: {
        __typename?: 'Role';
        id?: number | null;
        name?: string | null;
      } | null;
      user_type?: {
        __typename?: 'UserType';
        user_type_id: number;
        user_type_name: string;
        user_type_group?: string | null;
      } | null;
      user_profile_image?: {
        __typename?: 'Images';
        full?: string | null;
        thumb?: string | null;
      } | null;
    }>;
    paginatorInfo: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem?: number | null;
      hasMorePages: boolean;
      lastItem?: number | null;
      lastPage: number;
      perPage: number;
      total: number;
    };
  } | null;
};

export type UserActivateMutationVariables = Types.Exact<{
  user_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type UserActivateMutation = {
  __typename?: 'Mutation';
  UserActivate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type UserSuspendMutationVariables = Types.Exact<{
  user_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type UserSuspendMutation = {
  __typename?: 'Mutation';
  UserSuspend?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type CustomerListingQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CustomerListingInput>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type CustomerListingQuery = {
  __typename?: 'Query';
  CustomerListing?: {
    __typename?: 'CustomerListingPaginator';
    data: Array<{
      __typename?: 'CustomerListing';
      customer_id?: number | null;
      customer_address?: string | null;
      customer_address2?: string | null;
      customer_approved?: any | null;
      customer_contact_person?: string | null;
      customer_contact_person_mobile?: string | null;
      customer_contact_person_role?: Types.CustomerContactPersonRole | null;
      customer_created?: any | null;
      customer_fax?: string | null;
      customer_mobile?: string | null;
      customer_name?: string | null;
      customer_postcode?: string | null;
      customer_remark?: string | null;
      customer_status?: Types.CustomerStatus | null;
      customer_type?: Types.CustomerType | null;
      customer_updated?: any | null;
      customer_email?: string | null;
      customer_registration_number?: string | null;
      total_usage?: number | null;
      total_transaction?: number | null;
      total_recipient?: number | null;
      total_card?: number | null;
      total_fee?: number | null;
      business_type_id?: {
        __typename?: 'BusinessType';
        business_type_id?: number | null;
        business_type_name?: any | null;
        business_type_status?: string | null;
        is_deleted?: boolean | null;
      } | null;
      setting_annual_revenue?: {
        __typename?: 'AnnualRevenue';
        setting_annual_revenue_id?: number | null;
        setting_annual_revenue_name?: string | null;
      } | null;
      setting_company_size?: {
        __typename?: 'CompanySize';
        setting_company_size_id?: number | null;
        setting_company_size_name?: string | null;
      } | null;
      city?: { __typename?: 'City'; city_name: string } | null;
      state?: { __typename?: 'State'; state_name?: string | null } | null;
      year_of_business_id?: {
        __typename?: 'BusinessYear';
        year_of_business_id?: number | null;
        year_of_business_name?: any | null;
      } | null;
      ssm_business_certificate?: Array<{
        __typename?: 'Media';
        id?: number | null;
        name?: string | null;
        file_name?: string | null;
        full_url?: string | null;
        mime_type?: string | null;
      } | null> | null;
    }>;
    paginatorInfo: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem?: number | null;
      hasMorePages: boolean;
      lastItem?: number | null;
      lastPage: number;
      perPage: number;
      total: number;
    };
  } | null;
};

export type CustomerDetailQueryVariables = Types.Exact<{
  customer_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type CustomerDetailQuery = {
  __typename?: 'Query';
  CustomerDetail?: {
    __typename?: 'CustomerFullDetail';
    business_type_id?: number | null;
    customer_id?: number | null;
    customer_address?: string | null;
    customer_address2?: string | null;
    customer_approved?: any | null;
    customer_contact_person?: string | null;
    customer_contact_person_mobile?: string | null;
    customer_contact_person_role?: Types.CustomerContactPersonRole | null;
    customer_contact_person_email?: string | null;
    customer_created?: any | null;
    customer_fax?: string | null;
    customer_mobile?: string | null;
    customer_name?: string | null;
    customer_postcode?: string | null;
    customer_remark?: string | null;
    customer_status?: Types.CustomerStatus | null;
    customer_type?: Types.CustomerType | null;
    customer_updated?: any | null;
    customer_email?: string | null;
    customer_registration_number?: string | null;
    customer_website?: string | null;
    year_of_business_id?: number | null;
    business_type?: {
      __typename?: 'BusinessType';
      business_type_id?: number | null;
      business_type_name?: any | null;
      business_type_status?: string | null;
      is_deleted?: boolean | null;
    } | null;
    setting_annual_revenue?: {
      __typename?: 'AnnualRevenue';
      setting_annual_revenue_id?: number | null;
      setting_annual_revenue_name?: string | null;
    } | null;
    setting_company_size?: {
      __typename?: 'CompanySize';
      setting_company_size_id?: number | null;
      setting_company_size_name?: string | null;
    } | null;
    business_year?: {
      __typename?: 'BusinessYear';
      year_of_business_id?: number | null;
      year_of_business_name?: any | null;
    } | null;
    ssm_business_certificate?: Array<{
      __typename?: 'Media';
      id?: number | null;
      name?: string | null;
      file_name?: string | null;
      full_url?: string | null;
      mime_type?: string | null;
    } | null> | null;
    country?: {
      __typename?: 'Country';
      country_id?: number | null;
      country_name?: string | null;
    } | null;
    state?: {
      __typename?: 'State';
      state_id?: number | null;
      state_name?: string | null;
    } | null;
    city?: { __typename?: 'City'; city_id: number; city_name: string } | null;
    user?: { __typename?: 'User'; user_id: number } | null;
  } | null;
};

export type CustomerLogListingQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CustomerLogListingInput>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type CustomerLogListingQuery = {
  __typename?: 'Query';
  CustomerLogListing?: {
    __typename?: 'CustomerLogPaginator';
    data: Array<{
      __typename?: 'CustomerLog';
      customer_log_id?: number | null;
      customer_log_action?: string | null;
      customer_log_description?: string | null;
      customer_log_created?: any | null;
    }>;
    paginatorInfo: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem?: number | null;
      hasMorePages: boolean;
      lastItem?: number | null;
      lastPage: number;
      perPage: number;
      total: number;
    };
  } | null;
};

export type CustomerApproveMutationVariables = Types.Exact<{
  customer_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type CustomerApproveMutation = {
  __typename?: 'Mutation';
  CustomerApprove?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type CustomerRejectMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CustomerRejectInput>;
}>;

export type CustomerRejectMutation = {
  __typename?: 'Mutation';
  CustomerReject?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type CustomerListingExportQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CustomerListingInput>;
}>;

export type CustomerListingExportQuery = {
  __typename?: 'Query';
  CustomerListingExport?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type CustomerUpdateMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CustomerUpdateInput>;
}>;

export type CustomerUpdateMutation = {
  __typename?: 'Mutation';
  CustomerUpdate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type CustomerSuspendMutationVariables = Types.Exact<{
  customer_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type CustomerSuspendMutation = {
  __typename?: 'Mutation';
  CustomerSuspend?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type CustomerActivateMutationVariables = Types.Exact<{
  customer_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type CustomerActivateMutation = {
  __typename?: 'Mutation';
  CustomerActivate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type CountryDropdownQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type CountryDropdownQuery = {
  __typename?: 'Query';
  CountryDropdown?: Array<{
    __typename?: 'Country';
    country_code?: string | null;
    country_currency_code?: string | null;
    country_id?: number | null;
    country_international_code?: string | null;
    country_name?: string | null;
    is_deleted?: number | null;
  } | null> | null;
};

export type StateDropdownQueryVariables = Types.Exact<{
  country_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type StateDropdownQuery = {
  __typename?: 'Query';
  StateDropdown?: Array<{
    __typename?: 'State';
    state_id?: number | null;
    state_name?: string | null;
    is_deleted?: number | null;
  } | null> | null;
};

export type CityDropdownQueryVariables = Types.Exact<{
  state_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type CityDropdownQuery = {
  __typename?: 'Query';
  CityDropdown?: Array<{
    __typename?: 'City';
    city_id: number;
    city_name: string;
    is_deleted?: number | null;
  } | null> | null;
};

export type QuestionListingQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.QuestionListingInput>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type QuestionListingQuery = {
  __typename?: 'Query';
  QuestionListing?: {
    __typename?: 'QuestionPaginator';
    data: Array<{
      __typename?: 'Question';
      question_id: number;
      question_title?: string | null;
      question_value?: any | null;
      question_priority?: number | null;
      question_section?: number | null;
      question_status?: Types.QuestionStatus | null;
      question_type?: string | null;
      question_value_column?: number | null;
    }>;
    paginatorInfo: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem?: number | null;
      hasMorePages: boolean;
      lastItem?: number | null;
      lastPage: number;
      perPage: number;
      total: number;
    };
  } | null;
};

export type QuestionDetailQueryVariables = Types.Exact<{
  question_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type QuestionDetailQuery = {
  __typename?: 'Query';
  QuestionDetail?: {
    __typename?: 'Question';
    question_id: number;
    question_title?: string | null;
    question_value?: any | null;
    question_priority?: number | null;
    question_section?: number | null;
    question_status?: Types.QuestionStatus | null;
    question_type?: string | null;
    question_value_column?: number | null;
  } | null;
};

export type QuestionCreateMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.QuestionInput>;
}>;

export type QuestionCreateMutation = {
  __typename?: 'Mutation';
  QuestionCreate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type QuestionUpdateMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.QuestionInput>;
}>;

export type QuestionUpdateMutation = {
  __typename?: 'Mutation';
  QuestionUpdate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type QuestionDeleteMutationVariables = Types.Exact<{
  question_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type QuestionDeleteMutation = {
  __typename?: 'Mutation';
  QuestionDelete?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type CustomerQuestionListingQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CustomerQuestionListingInput>;
}>;

export type CustomerQuestionListingQuery = {
  __typename?: 'Query';
  CustomerQuestionListing?: {
    __typename?: 'CustomerQuestionPaginator';
    data: Array<{
      __typename?: 'CustomerQuestion';
      customer_question_id?: number | null;
      customer_question_title?: string | null;
      customer_question_value?: any | null;
      customer_question_created?: any | null;
      question?: {
        __typename?: 'Question';
        question_id: number;
        question_type?: string | null;
        question_value?: any | null;
      } | null;
    }>;
  } | null;
};

export type CustomerContactPersonUpdateMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CustomerContactPersonUpdateInput>;
}>;

export type CustomerContactPersonUpdateMutation = {
  __typename?: 'Mutation';
  CustomerContactPersonUpdate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type CustomerSsmUpdateMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CustomerSsmUpdateInput>;
}>;

export type CustomerSsmUpdateMutation = {
  __typename?: 'Mutation';
  CustomerSSMUpdate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type CustomerDetailsUpdateMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CustomerDetailsUpdateInput>;
}>;

export type CustomerDetailsUpdateMutation = {
  __typename?: 'Mutation';
  CustomerDetailsUpdate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type PaymentReleasedReportQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.ReportInput>;
}>;

export type PaymentReleasedReportQuery = {
  __typename?: 'Query';
  PaymentReleasedReport?: {
    __typename?: 'ReportPaginator';
    data?: {
      __typename?: 'PaymentReportData';
      title?: string | null;
      payment_type?: string | null;
      year?: string | null;
      data?: any | null;
    } | null;
    paginatorInfo?: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem?: number | null;
      hasMorePages: boolean;
      lastItem?: number | null;
      lastPage: number;
      perPage: number;
      total: number;
    } | null;
  } | null;
};

export type PaymentRejectedReportQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.ReportInput>;
}>;

export type PaymentRejectedReportQuery = {
  __typename?: 'Query';
  PaymentRejectedReport?: {
    __typename?: 'ReportPaginator';
    data?: {
      __typename?: 'PaymentReportData';
      title?: string | null;
      payment_type?: string | null;
      year?: string | null;
      data?: any | null;
    } | null;
    paginatorInfo?: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem?: number | null;
      hasMorePages: boolean;
      lastItem?: number | null;
      lastPage: number;
      perPage: number;
      total: number;
    } | null;
  } | null;
};

export type PaymentRequestListingExportQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.PaymentListingInput>;
}>;

export type PaymentRequestListingExportQuery = {
  __typename?: 'Query';
  PaymentRequestListingExport?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type PaymentReleaseListingExportQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.PaymentScheduleListingInput>;
}>;

export type PaymentReleaseListingExportQuery = {
  __typename?: 'Query';
  PaymentReleaseListingExport?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type PaymentRejectedReportExportQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.ReportInput>;
}>;

export type PaymentRejectedReportExportQuery = {
  __typename?: 'Query';
  PaymentRejectedReportExport?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type PaymentReleasedReportExportQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.ReportInput>;
}>;

export type PaymentReleasedReportExportQuery = {
  __typename?: 'Query';
  PaymentReleasedReportExport?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type PaymentListingExportQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.PaymentListingInput>;
}>;

export type PaymentListingExportQuery = {
  __typename?: 'Query';
  PaymentListingExport?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type DashboardAdminQueryVariables = Types.Exact<{
  year?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type DashboardAdminQuery = {
  __typename?: 'Query';
  DashboardAdmin?: {
    __typename?: 'DashboardData';
    message?: string | null;
    total_application?: {
      __typename?: 'TotalApplicationData';
      total?: number | null;
      data?: Array<{
        __typename?: 'ApplicationStatusData';
        status?: string | null;
        applicant_count?: number | null;
      } | null> | null;
    } | null;
    payment_request?: {
      __typename?: 'PaymentRequestData';
      total?: number | null;
      data?: Array<{
        __typename?: 'PaymentStatusData';
        status?: string | null;
        payment_count?: number | null;
      } | null> | null;
    } | null;
    total_customers?: {
      __typename?: 'TotalCustomersData';
      total_count?: number | null;
      increase_count?: number | null;
      data?: Array<{
        __typename?: 'MonthlyCustomerData';
        month?: string | null;
        customer_count?: number | null;
      } | null> | null;
    } | null;
    customer_conversion?: {
      __typename?: 'CustomerConversionData';
      total_rate?: number | null;
      data?: Array<{
        __typename?: 'MonthlyConversionData';
        month?: string | null;
        approved_count?: number | null;
        applicant_count?: number | null;
        conversion_rate?: number | null;
      } | null> | null;
    } | null;
    sales_overview?: {
      __typename?: 'SalesOverviewData';
      year?: number | null;
      total_released_payment?: number | null;
      total_profit_by_charges?: number | null;
      data?: any | null;
    } | null;
  } | null;
};

export type DashboardPendingApproveApplicationQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type DashboardPendingApproveApplicationQuery = {
  __typename?: 'Query';
  DashboardAdmin?: {
    __typename?: 'DashboardData';
    message?: string | null;
    pending_approve_application?: {
      __typename?: 'CustomerPaginator';
      data: Array<{
        __typename?: 'Customer';
        customer_id?: number | null;
        customer_address?: string | null;
        customer_address2?: string | null;
        customer_contact_person?: string | null;
        customer_contact_person_mobile?: string | null;
        customer_created?: any | null;
        customer_mobile?: string | null;
        customer_name?: string | null;
        customer_email?: string | null;
        customer_registration_number?: string | null;
        setting_annual_revenue?: {
          __typename?: 'AnnualRevenue';
          setting_annual_revenue_id?: number | null;
          setting_annual_revenue_name?: string | null;
        } | null;
        setting_company_size?: {
          __typename?: 'CompanySize';
          setting_company_size_id?: number | null;
          setting_company_size_name?: string | null;
        } | null;
      }>;
      paginatorInfo: {
        __typename?: 'PaginatorInfo';
        count: number;
        currentPage: number;
        firstItem?: number | null;
        hasMorePages: boolean;
        lastItem?: number | null;
        lastPage: number;
        perPage: number;
        total: number;
      };
    } | null;
  } | null;
};

export type ContactUsListingQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.ContactUsListingInput>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type ContactUsListingQuery = {
  __typename?: 'Query';
  ContactUsListing?: {
    __typename?: 'ContactUsPaginator';
    data: Array<{
      __typename?: 'ContactUs';
      contact_us_id?: number | null;
      contact_us_user_firstname?: string | null;
      contact_us_user_lastname?: string | null;
      contact_us_user_email?: string | null;
      contact_us_company_name?: string | null;
      contact_us_message?: string | null;
      contact_us_status?: Types.ContactUsStatus | null;
      contact_us_action_admin_id?: number | null;
      contact_us_action_remark?: string | null;
    }>;
    paginatorInfo: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem?: number | null;
      hasMorePages: boolean;
      lastItem?: number | null;
      lastPage: number;
      perPage: number;
      total: number;
    };
  } | null;
};

export type ContactUsPendingCountQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type ContactUsPendingCountQuery = {
  __typename?: 'Query';
  ContactUsPendingCount?: number | null;
};

export type ContactUsUpdateMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.ContactUsUpdateInput>;
}>;

export type ContactUsUpdateMutation = {
  __typename?: 'Mutation';
  ContactUsUpdate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type ContactUsDeleteMutationVariables = Types.Exact<{
  contact_us_id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type ContactUsDeleteMutation = {
  __typename?: 'Mutation';
  ContactUsDelete?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type ContactUsStatusUpdateMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.ContactUsStatusUpdateInput>;
}>;

export type ContactUsStatusUpdateMutation = {
  __typename?: 'Mutation';
  ContactUsStatusUpdate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type SettingListingQueryVariables = Types.Exact<{
  keyword?: Types.InputMaybe<Types.Scalars['String']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type SettingListingQuery = {
  __typename?: 'Query';
  SettingListing?: {
    __typename?: 'SettingPaginator';
    data: Array<{
      __typename?: 'Setting';
      setting_id?: number | null;
      setting_slug?: string | null;
      setting_value?: string | null;
      setting_description?: string | null;
      is_editable?: number | null;
    }>;
    paginatorInfo: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem?: number | null;
      hasMorePages: boolean;
      lastItem?: number | null;
      lastPage: number;
      perPage: number;
      total: number;
    };
  } | null;
};

export type SettingDetailQueryVariables = Types.Exact<{
  setting_slug?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type SettingDetailQuery = {
  __typename?: 'Query';
  SettingDetail?: {
    __typename?: 'Setting';
    setting_id?: number | null;
    setting_slug?: string | null;
    setting_value?: string | null;
    setting_description?: string | null;
    is_editable?: number | null;
  } | null;
};

export type SettingUpdateMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.SettingInput>;
}>;

export type SettingUpdateMutation = {
  __typename?: 'Mutation';
  SettingUpdate?: {
    __typename?: 'SuccessResponse';
    data?: any | null;
    status: boolean;
    message?: string | null;
  } | null;
};

export type AnnualRevenueDropdownQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type AnnualRevenueDropdownQuery = {
  __typename?: 'Query';
  AnnualRevenueDropdown?: Array<{
    __typename?: 'AnnualRevenue';
    setting_annual_revenue_id?: number | null;
    setting_annual_revenue_name?: string | null;
  } | null> | null;
};

export type CompanySizeDropdownQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type CompanySizeDropdownQuery = {
  __typename?: 'Query';
  CompanySizeDropdown?: Array<{
    __typename?: 'CompanySize';
    setting_company_size_id?: number | null;
    setting_company_size_name?: string | null;
  } | null> | null;
};

export type TokenResponseFragment = {
  __typename?: 'TokenResponse';
  token?: string | null;
  token_type?: string | null;
};

export type PaginatorInfoFragment = {
  __typename?: 'PaginatorInfo';
  count: number;
  currentPage: number;
  firstItem?: number | null;
  hasMorePages: boolean;
  lastItem?: number | null;
  lastPage: number;
  perPage: number;
  total: number;
};

export type SuccessResponseInfoFragment = {
  __typename?: 'SuccessResponse';
  data?: any | null;
  status: boolean;
  message?: string | null;
};

export type ImagesInfoFragment = {
  __typename?: 'Images';
  full?: string | null;
  media_id?: number | null;
  thumb?: string | null;
};

export const TokenResponseFragmentDoc = gql`
  fragment TokenResponse on TokenResponse {
    token
    token_type
  }
`;
export const PaginatorInfoFragmentDoc = gql`
  fragment PaginatorInfo on PaginatorInfo {
    count
    currentPage
    firstItem
    hasMorePages
    lastItem
    lastPage
    perPage
    total
  }
`;
export const SuccessResponseInfoFragmentDoc = gql`
  fragment SuccessResponseInfo on SuccessResponse {
    data
    status
    message
  }
`;
export const ImagesInfoFragmentDoc = gql`
  fragment ImagesInfo on Images {
    full
    media_id
    thumb
  }
`;
export const LoginDocument = gql`
  mutation Login($input: LoginInput) {
    Login(input: $input) {
      status
      message
      TokenResponse {
        ...TokenResponse
      }
    }
  }
  ${TokenResponseFragmentDoc}
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const RecipientListingDocument = gql`
  query RecipientListing(
    $input: RecipientListingInput
    $first: Int
    $page: Int
  ) {
    RecipientListing(input: $input, first: $first, page: $page) {
      data {
        recipient_id
        bank {
          bank_id
          bank_name
        }
        customer {
          customer_id
          customer_name
        }
        recipient_category {
          recipient_category_id
          recipient_category_name
        }
        recipient_email
        recipient_type
        recipient_mobile_number
        recipient_bank_holder_name
        recipient_bank_account_number
        total_amount
      }
      paginatorInfo {
        ...PaginatorInfo
      }
    }
  }
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __useRecipientListingQuery__
 *
 * To run a query within a React component, call `useRecipientListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipientListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipientListingQuery({
 *   variables: {
 *      input: // value for 'input'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useRecipientListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    RecipientListingQuery,
    RecipientListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RecipientListingQuery, RecipientListingQueryVariables>(
    RecipientListingDocument,
    options
  );
}
export function useRecipientListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RecipientListingQuery,
    RecipientListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    RecipientListingQuery,
    RecipientListingQueryVariables
  >(RecipientListingDocument, options);
}
export type RecipientListingQueryHookResult = ReturnType<
  typeof useRecipientListingQuery
>;
export type RecipientListingLazyQueryHookResult = ReturnType<
  typeof useRecipientListingLazyQuery
>;
export type RecipientListingQueryResult = Apollo.QueryResult<
  RecipientListingQuery,
  RecipientListingQueryVariables
>;
export const RecipientCategoryDropdownDocument = gql`
  query RecipientCategoryDropdown {
    RecipientCategoryDropdown {
      recipient_category_id
      recipient_category_name
      recipient_category_badge_colour
      recipient_category_created
      recipient_category_updated
      is_deleted
    }
  }
`;

/**
 * __useRecipientCategoryDropdownQuery__
 *
 * To run a query within a React component, call `useRecipientCategoryDropdownQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipientCategoryDropdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipientCategoryDropdownQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecipientCategoryDropdownQuery(
  baseOptions?: Apollo.QueryHookOptions<
    RecipientCategoryDropdownQuery,
    RecipientCategoryDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    RecipientCategoryDropdownQuery,
    RecipientCategoryDropdownQueryVariables
  >(RecipientCategoryDropdownDocument, options);
}
export function useRecipientCategoryDropdownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RecipientCategoryDropdownQuery,
    RecipientCategoryDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    RecipientCategoryDropdownQuery,
    RecipientCategoryDropdownQueryVariables
  >(RecipientCategoryDropdownDocument, options);
}
export type RecipientCategoryDropdownQueryHookResult = ReturnType<
  typeof useRecipientCategoryDropdownQuery
>;
export type RecipientCategoryDropdownLazyQueryHookResult = ReturnType<
  typeof useRecipientCategoryDropdownLazyQuery
>;
export type RecipientCategoryDropdownQueryResult = Apollo.QueryResult<
  RecipientCategoryDropdownQuery,
  RecipientCategoryDropdownQueryVariables
>;
export const RejectReasonDropdownDocument = gql`
  query RejectReasonDropdown($reject_reason_type: RejectReasonType) {
    RejectReasonDropdown(reject_reason_type: $reject_reason_type) {
      reject_reason_id
      reject_reason_name
      reject_reason_description
      reject_reason_type
      is_deleted
    }
  }
`;

/**
 * __useRejectReasonDropdownQuery__
 *
 * To run a query within a React component, call `useRejectReasonDropdownQuery` and pass it any options that fit your needs.
 * When your component renders, `useRejectReasonDropdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRejectReasonDropdownQuery({
 *   variables: {
 *      reject_reason_type: // value for 'reject_reason_type'
 *   },
 * });
 */
export function useRejectReasonDropdownQuery(
  baseOptions?: Apollo.QueryHookOptions<
    RejectReasonDropdownQuery,
    RejectReasonDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    RejectReasonDropdownQuery,
    RejectReasonDropdownQueryVariables
  >(RejectReasonDropdownDocument, options);
}
export function useRejectReasonDropdownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RejectReasonDropdownQuery,
    RejectReasonDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    RejectReasonDropdownQuery,
    RejectReasonDropdownQueryVariables
  >(RejectReasonDropdownDocument, options);
}
export type RejectReasonDropdownQueryHookResult = ReturnType<
  typeof useRejectReasonDropdownQuery
>;
export type RejectReasonDropdownLazyQueryHookResult = ReturnType<
  typeof useRejectReasonDropdownLazyQuery
>;
export type RejectReasonDropdownQueryResult = Apollo.QueryResult<
  RejectReasonDropdownQuery,
  RejectReasonDropdownQueryVariables
>;
export const PaymentRepeatTypeListingDocument = gql`
  query PaymentRepeatTypeListing(
    $input: PaymentRepeatTypeListingInput
    $page: Int
    $first: Int
  ) {
    PaymentRepeatTypeListing(input: $input, page: $page, first: $first) {
      data {
        is_deleted
        is_display
        is_extra_charges
        is_disabled
        payment_repeat_type_additional_days
        payment_repeat_type_category
        payment_repeat_type_charges_rate
        payment_repeat_type_charges_type
        payment_repeat_type_id
        payment_repeat_type_name
        payment_repeat_type_parent_id
        standard_fee
      }
      paginatorInfo {
        ...PaginatorInfo
      }
    }
  }
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __usePaymentRepeatTypeListingQuery__
 *
 * To run a query within a React component, call `usePaymentRepeatTypeListingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentRepeatTypeListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentRepeatTypeListingQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *      first: // value for 'first'
 *   },
 * });
 */
export function usePaymentRepeatTypeListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentRepeatTypeListingQuery,
    PaymentRepeatTypeListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaymentRepeatTypeListingQuery,
    PaymentRepeatTypeListingQueryVariables
  >(PaymentRepeatTypeListingDocument, options);
}
export function usePaymentRepeatTypeListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentRepeatTypeListingQuery,
    PaymentRepeatTypeListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaymentRepeatTypeListingQuery,
    PaymentRepeatTypeListingQueryVariables
  >(PaymentRepeatTypeListingDocument, options);
}
export type PaymentRepeatTypeListingQueryHookResult = ReturnType<
  typeof usePaymentRepeatTypeListingQuery
>;
export type PaymentRepeatTypeListingLazyQueryHookResult = ReturnType<
  typeof usePaymentRepeatTypeListingLazyQuery
>;
export type PaymentRepeatTypeListingQueryResult = Apollo.QueryResult<
  PaymentRepeatTypeListingQuery,
  PaymentRepeatTypeListingQueryVariables
>;
export const PaymentRepeatTypeUpdateDocument = gql`
  mutation PaymentRepeatTypeUpdate($input: PaymentRepeatTypeInput) {
    PaymentRepeatTypeUpdate(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type PaymentRepeatTypeUpdateMutationFn = Apollo.MutationFunction<
  PaymentRepeatTypeUpdateMutation,
  PaymentRepeatTypeUpdateMutationVariables
>;

/**
 * __usePaymentRepeatTypeUpdateMutation__
 *
 * To run a mutation, you first call `usePaymentRepeatTypeUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaymentRepeatTypeUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paymentRepeatTypeUpdateMutation, { data, loading, error }] = usePaymentRepeatTypeUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentRepeatTypeUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PaymentRepeatTypeUpdateMutation,
    PaymentRepeatTypeUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PaymentRepeatTypeUpdateMutation,
    PaymentRepeatTypeUpdateMutationVariables
  >(PaymentRepeatTypeUpdateDocument, options);
}
export type PaymentRepeatTypeUpdateMutationHookResult = ReturnType<
  typeof usePaymentRepeatTypeUpdateMutation
>;
export type PaymentRepeatTypeUpdateMutationResult =
  Apollo.MutationResult<PaymentRepeatTypeUpdateMutation>;
export type PaymentRepeatTypeUpdateMutationOptions = Apollo.BaseMutationOptions<
  PaymentRepeatTypeUpdateMutation,
  PaymentRepeatTypeUpdateMutationVariables
>;
export const PaymentListingDocument = gql`
  query PaymentListing($input: PaymentListingInput, $page: Int, $first: Int) {
    PaymentListing(input: $input, page: $page, first: $first) {
      data {
        is_refund_requested
        payment_schedule {
          payment_schedule_id
          payment_schedule_amount
          payment_schedule_number
          payment_schedule_complete_date
          payment_schedule_created
          payment_schedule_date
          payment_schedule_referer_code
          payment_status {
            payment_status_id
            payment_status_name
          }
          payment {
            payment_amount
            payment_amount_total
            payment_complete_date
            payment_created
            payment_end_date
            payment_extra_charges
            payment_extra_charges_rate
            payment_extra_charges_total
            payment_grandtotal
            payment_id
            payment_reference
            payment_referer_code
            payment_schedule_number_current
            payment_start_date
            payment_subtotal
            payment_updated
            is_payment_repeat
            payment_recipient {
              payment_recipient_account_name
              payment_recipient_account_number
              payment_recipient_amount
            }
          }
          payment_repeat_type {
            payment_repeat_type_charges_rate
            payment_repeat_type_name
            is_extra_charges
          }
          user_card {
            user_id
            user_card_id
            user_card_cardholder_name
            user_card_expiration_month
            user_card_expiration_year
            user_card_last_4_digit
          }
          payment_schedule_complete_media {
            file_name
            url
          }
        }
        payment_referer_code
        payment_type {
          payment_type_id
          payment_type_name
        }
        payment_log {
          payment_log_description
          payment_log_action
          payment_log_created
          user {
            user_fullname
          }
        }
        is_payment_repeat
        payment_amount
        payment_amount_total
        payment_schedule_total_number
        payment_subtotal
        payment_id
        payment_created
        payment_reference
        payment_repeat_type {
          payment_repeat_type_name
        }
        payment_complete_media {
          id
          collection_name
          name
          file_name
          mime_type
          url
          full_url
          path
          conversions
        }
        payment_supporting_media {
          id
          collection_name
          name
          file_name
          mime_type
          url
          full_url
          path
          conversions
        }
        customer {
          customer_id
          customer_name
          customer_contact_person
        }
        payment_recipient {
          payment_recipient_id
          payment_recipient_amount
          recipient {
            recipient_id
            recipient_bank_holder_name
            recipient_bank_account_number
            bank {
              bank_name
            }
            user {
              user_id
              user_fullname
            }
            recipient_category {
              recipient_category_id
              recipient_category_name
            }
            recipient_type
          }
        }
        payment_status {
          payment_status_id
          payment_status_name
          payment_status_desc
        }
      }
      paginatorInfo {
        ...PaginatorInfo
      }
    }
  }
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __usePaymentListingQuery__
 *
 * To run a query within a React component, call `usePaymentListingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentListingQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *      first: // value for 'first'
 *   },
 * });
 */
export function usePaymentListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentListingQuery,
    PaymentListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PaymentListingQuery, PaymentListingQueryVariables>(
    PaymentListingDocument,
    options
  );
}
export function usePaymentListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentListingQuery,
    PaymentListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PaymentListingQuery, PaymentListingQueryVariables>(
    PaymentListingDocument,
    options
  );
}
export type PaymentListingQueryHookResult = ReturnType<
  typeof usePaymentListingQuery
>;
export type PaymentListingLazyQueryHookResult = ReturnType<
  typeof usePaymentListingLazyQuery
>;
export type PaymentListingQueryResult = Apollo.QueryResult<
  PaymentListingQuery,
  PaymentListingQueryVariables
>;
export const PaymentScheduleRefundListingDocument = gql`
  query PaymentScheduleRefundListing(
    $input: PaymentScheduleListingInput
    $page: Int
    $first: Int
  ) {
    PaymentScheduleRefundListing(input: $input, page: $page, first: $first) {
      data {
        payment_schedule_id
        payment_schedule_amount
        payment_schedule_number
        payment_schedule_complete_date
        payment_schedule_created
        payment_schedule_date
        payment_schedule_referer_code
        payment_schedule_log {
          payment_schedule_log_description
          payment_schedule_log_action
        }
        payment_status {
          payment_status_id
          payment_status_name
        }
        customer {
          customer_id
          customer_name
          customer_contact_person
        }
        payment {
          payment_amount
          payment_amount_total
          payment_complete_date
          payment_created
          payment_end_date
          payment_extra_charges
          payment_extra_charges_rate
          payment_extra_charges_total
          payment_grandtotal
          payment_id
          payment_reference
          payment_referer_code
          payment_schedule_number_current
          payment_start_date
          payment_subtotal
          payment_updated
          is_payment_repeat
          payment_recipient {
            payment_recipient_account_name
            payment_recipient_account_number
            payment_recipient_amount
            recipient {
              recipient_id
              recipient_bank_holder_name
              recipient_bank_account_number
              bank {
                bank_name
              }
              user {
                user_id
                user_fullname
              }
              recipient_category {
                recipient_category_id
                recipient_category_name
              }
              recipient_type
            }
          }
        }
        payment_repeat_type {
          payment_repeat_type_charges_rate
          payment_repeat_type_name
          is_extra_charges
        }
        user_card {
          user_id
          user_card_id
          user_card_cardholder_name
          user_card_expiration_month
          user_card_expiration_year
          user_card_last_4_digit
        }
        payment_schedule_complete_media {
          file_name
          url
        }
      }
      paginatorInfo {
        ...PaginatorInfo
      }
    }
  }
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __usePaymentScheduleRefundListingQuery__
 *
 * To run a query within a React component, call `usePaymentScheduleRefundListingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentScheduleRefundListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentScheduleRefundListingQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *      first: // value for 'first'
 *   },
 * });
 */
export function usePaymentScheduleRefundListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentScheduleRefundListingQuery,
    PaymentScheduleRefundListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaymentScheduleRefundListingQuery,
    PaymentScheduleRefundListingQueryVariables
  >(PaymentScheduleRefundListingDocument, options);
}
export function usePaymentScheduleRefundListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentScheduleRefundListingQuery,
    PaymentScheduleRefundListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaymentScheduleRefundListingQuery,
    PaymentScheduleRefundListingQueryVariables
  >(PaymentScheduleRefundListingDocument, options);
}
export type PaymentScheduleRefundListingQueryHookResult = ReturnType<
  typeof usePaymentScheduleRefundListingQuery
>;
export type PaymentScheduleRefundListingLazyQueryHookResult = ReturnType<
  typeof usePaymentScheduleRefundListingLazyQuery
>;
export type PaymentScheduleRefundListingQueryResult = Apollo.QueryResult<
  PaymentScheduleRefundListingQuery,
  PaymentScheduleRefundListingQueryVariables
>;
export const PaymentRefundRequestCountDocument = gql`
  query PaymentRefundRequestCount {
    PaymentScheduleRefundListing {
      paginatorInfo {
        total
      }
    }
  }
`;

/**
 * __usePaymentRefundRequestCountQuery__
 *
 * To run a query within a React component, call `usePaymentRefundRequestCountQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentRefundRequestCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentRefundRequestCountQuery({
 *   variables: {
 *   },
 * });
 */
export function usePaymentRefundRequestCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentRefundRequestCountQuery,
    PaymentRefundRequestCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaymentRefundRequestCountQuery,
    PaymentRefundRequestCountQueryVariables
  >(PaymentRefundRequestCountDocument, options);
}
export function usePaymentRefundRequestCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentRefundRequestCountQuery,
    PaymentRefundRequestCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaymentRefundRequestCountQuery,
    PaymentRefundRequestCountQueryVariables
  >(PaymentRefundRequestCountDocument, options);
}
export type PaymentRefundRequestCountQueryHookResult = ReturnType<
  typeof usePaymentRefundRequestCountQuery
>;
export type PaymentRefundRequestCountLazyQueryHookResult = ReturnType<
  typeof usePaymentRefundRequestCountLazyQuery
>;
export type PaymentRefundRequestCountQueryResult = Apollo.QueryResult<
  PaymentRefundRequestCountQuery,
  PaymentRefundRequestCountQueryVariables
>;
export const PaymentDetailDocument = gql`
  query PaymentDetail($input: Int) {
    PaymentDetail(payment_id: $input) {
      payment_schedule {
        payment_schedule_id
        payment_schedule_date
        payment_schedule_referer_code
        payment_schedule_number
        payment_schedule_amount
        payment {
          payment_schedule_number_current
          payment_schedule_total_number
          payment_amount
        }
        payment_status {
          payment_status_name
        }
      }
      payment_type {
        payment_type_id
        payment_type_name
      }
      is_payment_repeat
      payment_amount
      payment_amount_total
      payment_extra_charges_total
      payment_grandtotal
      payment_extra_charges_rate
      payment_extra_charges
      payment_extra_charges_total
      payment_subtotal
      payment_id
      payment_created
      payment_reference
      payment_referer_code
      payment_created
      payment_start_date
      payment_end_date
      payment_schedule_number_current
      payment_complete_media {
        id
        collection_name
        name
        file_name
        mime_type
        url
        full_url
        path
        conversions
      }
      payment_supporting_media {
        id
        collection_name
        name
        file_name
        mime_type
        url
        full_url
        path
        conversions
      }
      customer {
        customer_id
        customer_name
        customer_contact_person
        customer_registration_number
        customer_website
        customer_address
        customer_address2
        customer_postcode
        city {
          city_name
        }
        state {
          state_name
        }
        country {
          country_name
        }
        customer_mobile
        customer_fax
        customer_email
        customer_contact_person_mobile
        user {
          user_fullname
        }
      }
      payment_recipient {
        payment_recipient_id
        payment_recipient_amount
        recipient {
          recipient_id
          recipient_bank_holder_name
          recipient_bank_account_number
          bank {
            bank_name
          }
          user {
            user_id
            user_fullname
          }
          recipient_category {
            recipient_category_id
            recipient_category_name
          }
          recipient_type
        }
      }
      payment_status {
        payment_status_id
        payment_status_name
        payment_status_desc
      }
      payment_repeat_type {
        payment_repeat_type_name
      }
      payment_schedule {
        payment_schedule_date
      }
      payment_reject_details {
        payment_log_remark
        reject_reason {
          reject_reason_name
          reject_reason_id
          reject_reason_description
          reject_reason_type
        }
      }
    }
  }
`;

/**
 * __usePaymentDetailQuery__
 *
 * To run a query within a React component, call `usePaymentDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentDetailQuery,
    PaymentDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PaymentDetailQuery, PaymentDetailQueryVariables>(
    PaymentDetailDocument,
    options
  );
}
export function usePaymentDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentDetailQuery,
    PaymentDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PaymentDetailQuery, PaymentDetailQueryVariables>(
    PaymentDetailDocument,
    options
  );
}
export type PaymentDetailQueryHookResult = ReturnType<
  typeof usePaymentDetailQuery
>;
export type PaymentDetailLazyQueryHookResult = ReturnType<
  typeof usePaymentDetailLazyQuery
>;
export type PaymentDetailQueryResult = Apollo.QueryResult<
  PaymentDetailQuery,
  PaymentDetailQueryVariables
>;
export const PaymentTypeDropdownDocument = gql`
  query PaymentTypeDropdown {
    PaymentTypeDropdown {
      payment_type_id
      payment_type_name
      payment_type_document
      is_allowed_payment_repeat
    }
  }
`;

/**
 * __usePaymentTypeDropdownQuery__
 *
 * To run a query within a React component, call `usePaymentTypeDropdownQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentTypeDropdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentTypeDropdownQuery({
 *   variables: {
 *   },
 * });
 */
export function usePaymentTypeDropdownQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentTypeDropdownQuery,
    PaymentTypeDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaymentTypeDropdownQuery,
    PaymentTypeDropdownQueryVariables
  >(PaymentTypeDropdownDocument, options);
}
export function usePaymentTypeDropdownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentTypeDropdownQuery,
    PaymentTypeDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaymentTypeDropdownQuery,
    PaymentTypeDropdownQueryVariables
  >(PaymentTypeDropdownDocument, options);
}
export type PaymentTypeDropdownQueryHookResult = ReturnType<
  typeof usePaymentTypeDropdownQuery
>;
export type PaymentTypeDropdownLazyQueryHookResult = ReturnType<
  typeof usePaymentTypeDropdownLazyQuery
>;
export type PaymentTypeDropdownQueryResult = Apollo.QueryResult<
  PaymentTypeDropdownQuery,
  PaymentTypeDropdownQueryVariables
>;
export const PaymentStatusListingDocument = gql`
  query PaymentStatusListing {
    PaymentStatusListing {
      data {
        payment_status_id
        payment_status_name
        payment_status_desc
      }
    }
  }
`;

/**
 * __usePaymentStatusListingQuery__
 *
 * To run a query within a React component, call `usePaymentStatusListingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentStatusListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentStatusListingQuery({
 *   variables: {
 *   },
 * });
 */
export function usePaymentStatusListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentStatusListingQuery,
    PaymentStatusListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaymentStatusListingQuery,
    PaymentStatusListingQueryVariables
  >(PaymentStatusListingDocument, options);
}
export function usePaymentStatusListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentStatusListingQuery,
    PaymentStatusListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaymentStatusListingQuery,
    PaymentStatusListingQueryVariables
  >(PaymentStatusListingDocument, options);
}
export type PaymentStatusListingQueryHookResult = ReturnType<
  typeof usePaymentStatusListingQuery
>;
export type PaymentStatusListingLazyQueryHookResult = ReturnType<
  typeof usePaymentStatusListingLazyQuery
>;
export type PaymentStatusListingQueryResult = Apollo.QueryResult<
  PaymentStatusListingQuery,
  PaymentStatusListingQueryVariables
>;
export const PaymentApproveDocument = gql`
  mutation PaymentApprove($input: Int) {
    PaymentApprove(payment_id: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type PaymentApproveMutationFn = Apollo.MutationFunction<
  PaymentApproveMutation,
  PaymentApproveMutationVariables
>;

/**
 * __usePaymentApproveMutation__
 *
 * To run a mutation, you first call `usePaymentApproveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaymentApproveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paymentApproveMutation, { data, loading, error }] = usePaymentApproveMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentApproveMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PaymentApproveMutation,
    PaymentApproveMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PaymentApproveMutation,
    PaymentApproveMutationVariables
  >(PaymentApproveDocument, options);
}
export type PaymentApproveMutationHookResult = ReturnType<
  typeof usePaymentApproveMutation
>;
export type PaymentApproveMutationResult =
  Apollo.MutationResult<PaymentApproveMutation>;
export type PaymentApproveMutationOptions = Apollo.BaseMutationOptions<
  PaymentApproveMutation,
  PaymentApproveMutationVariables
>;
export const PaymentRejectDocument = gql`
  mutation PaymentReject($input: PaymentRejectInput) {
    PaymentReject(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type PaymentRejectMutationFn = Apollo.MutationFunction<
  PaymentRejectMutation,
  PaymentRejectMutationVariables
>;

/**
 * __usePaymentRejectMutation__
 *
 * To run a mutation, you first call `usePaymentRejectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaymentRejectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paymentRejectMutation, { data, loading, error }] = usePaymentRejectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentRejectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PaymentRejectMutation,
    PaymentRejectMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PaymentRejectMutation,
    PaymentRejectMutationVariables
  >(PaymentRejectDocument, options);
}
export type PaymentRejectMutationHookResult = ReturnType<
  typeof usePaymentRejectMutation
>;
export type PaymentRejectMutationResult =
  Apollo.MutationResult<PaymentRejectMutation>;
export type PaymentRejectMutationOptions = Apollo.BaseMutationOptions<
  PaymentRejectMutation,
  PaymentRejectMutationVariables
>;
export const PaymentCancelApproveDocument = gql`
  mutation PaymentCancelApprove($input: Int) {
    PaymentCancelApprove(payment_id: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type PaymentCancelApproveMutationFn = Apollo.MutationFunction<
  PaymentCancelApproveMutation,
  PaymentCancelApproveMutationVariables
>;

/**
 * __usePaymentCancelApproveMutation__
 *
 * To run a mutation, you first call `usePaymentCancelApproveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaymentCancelApproveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paymentCancelApproveMutation, { data, loading, error }] = usePaymentCancelApproveMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentCancelApproveMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PaymentCancelApproveMutation,
    PaymentCancelApproveMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PaymentCancelApproveMutation,
    PaymentCancelApproveMutationVariables
  >(PaymentCancelApproveDocument, options);
}
export type PaymentCancelApproveMutationHookResult = ReturnType<
  typeof usePaymentCancelApproveMutation
>;
export type PaymentCancelApproveMutationResult =
  Apollo.MutationResult<PaymentCancelApproveMutation>;
export type PaymentCancelApproveMutationOptions = Apollo.BaseMutationOptions<
  PaymentCancelApproveMutation,
  PaymentCancelApproveMutationVariables
>;
export const PaymentCancelRejectDocument = gql`
  mutation PaymentCancelReject($input: Int) {
    PaymentCancelReject(payment_id: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type PaymentCancelRejectMutationFn = Apollo.MutationFunction<
  PaymentCancelRejectMutation,
  PaymentCancelRejectMutationVariables
>;

/**
 * __usePaymentCancelRejectMutation__
 *
 * To run a mutation, you first call `usePaymentCancelRejectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaymentCancelRejectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paymentCancelRejectMutation, { data, loading, error }] = usePaymentCancelRejectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentCancelRejectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PaymentCancelRejectMutation,
    PaymentCancelRejectMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PaymentCancelRejectMutation,
    PaymentCancelRejectMutationVariables
  >(PaymentCancelRejectDocument, options);
}
export type PaymentCancelRejectMutationHookResult = ReturnType<
  typeof usePaymentCancelRejectMutation
>;
export type PaymentCancelRejectMutationResult =
  Apollo.MutationResult<PaymentCancelRejectMutation>;
export type PaymentCancelRejectMutationOptions = Apollo.BaseMutationOptions<
  PaymentCancelRejectMutation,
  PaymentCancelRejectMutationVariables
>;
export const PaymentCompleteDocument = gql`
  mutation PaymentComplete($input: PaymentCompleteInput) {
    PaymentComplete(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type PaymentCompleteMutationFn = Apollo.MutationFunction<
  PaymentCompleteMutation,
  PaymentCompleteMutationVariables
>;

/**
 * __usePaymentCompleteMutation__
 *
 * To run a mutation, you first call `usePaymentCompleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaymentCompleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paymentCompleteMutation, { data, loading, error }] = usePaymentCompleteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentCompleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PaymentCompleteMutation,
    PaymentCompleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PaymentCompleteMutation,
    PaymentCompleteMutationVariables
  >(PaymentCompleteDocument, options);
}
export type PaymentCompleteMutationHookResult = ReturnType<
  typeof usePaymentCompleteMutation
>;
export type PaymentCompleteMutationResult =
  Apollo.MutationResult<PaymentCompleteMutation>;
export type PaymentCompleteMutationOptions = Apollo.BaseMutationOptions<
  PaymentCompleteMutation,
  PaymentCompleteMutationVariables
>;
export const PaymentScheduleCompleteDocument = gql`
  mutation PaymentScheduleComplete($input: PaymentScheduleCompleteInput) {
    PaymentScheduleComplete(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type PaymentScheduleCompleteMutationFn = Apollo.MutationFunction<
  PaymentScheduleCompleteMutation,
  PaymentScheduleCompleteMutationVariables
>;

/**
 * __usePaymentScheduleCompleteMutation__
 *
 * To run a mutation, you first call `usePaymentScheduleCompleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaymentScheduleCompleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paymentScheduleCompleteMutation, { data, loading, error }] = usePaymentScheduleCompleteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentScheduleCompleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PaymentScheduleCompleteMutation,
    PaymentScheduleCompleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PaymentScheduleCompleteMutation,
    PaymentScheduleCompleteMutationVariables
  >(PaymentScheduleCompleteDocument, options);
}
export type PaymentScheduleCompleteMutationHookResult = ReturnType<
  typeof usePaymentScheduleCompleteMutation
>;
export type PaymentScheduleCompleteMutationResult =
  Apollo.MutationResult<PaymentScheduleCompleteMutation>;
export type PaymentScheduleCompleteMutationOptions = Apollo.BaseMutationOptions<
  PaymentScheduleCompleteMutation,
  PaymentScheduleCompleteMutationVariables
>;
export const PaymentScheduleRefundApproveDocument = gql`
  mutation PaymentScheduleRefundApprove($input: Int) {
    PaymentScheduleRefundApprove(payment_schedule_id: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type PaymentScheduleRefundApproveMutationFn = Apollo.MutationFunction<
  PaymentScheduleRefundApproveMutation,
  PaymentScheduleRefundApproveMutationVariables
>;

/**
 * __usePaymentScheduleRefundApproveMutation__
 *
 * To run a mutation, you first call `usePaymentScheduleRefundApproveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaymentScheduleRefundApproveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paymentScheduleRefundApproveMutation, { data, loading, error }] = usePaymentScheduleRefundApproveMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentScheduleRefundApproveMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PaymentScheduleRefundApproveMutation,
    PaymentScheduleRefundApproveMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PaymentScheduleRefundApproveMutation,
    PaymentScheduleRefundApproveMutationVariables
  >(PaymentScheduleRefundApproveDocument, options);
}
export type PaymentScheduleRefundApproveMutationHookResult = ReturnType<
  typeof usePaymentScheduleRefundApproveMutation
>;
export type PaymentScheduleRefundApproveMutationResult =
  Apollo.MutationResult<PaymentScheduleRefundApproveMutation>;
export type PaymentScheduleRefundApproveMutationOptions =
  Apollo.BaseMutationOptions<
    PaymentScheduleRefundApproveMutation,
    PaymentScheduleRefundApproveMutationVariables
  >;
export const PaymentScheduleRefundRejectDocument = gql`
  mutation PaymentScheduleRefundReject(
    $input: PaymentScheduleRefundRejectInput
  ) {
    PaymentScheduleRefundReject(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type PaymentScheduleRefundRejectMutationFn = Apollo.MutationFunction<
  PaymentScheduleRefundRejectMutation,
  PaymentScheduleRefundRejectMutationVariables
>;

/**
 * __usePaymentScheduleRefundRejectMutation__
 *
 * To run a mutation, you first call `usePaymentScheduleRefundRejectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaymentScheduleRefundRejectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paymentScheduleRefundRejectMutation, { data, loading, error }] = usePaymentScheduleRefundRejectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentScheduleRefundRejectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PaymentScheduleRefundRejectMutation,
    PaymentScheduleRefundRejectMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PaymentScheduleRefundRejectMutation,
    PaymentScheduleRefundRejectMutationVariables
  >(PaymentScheduleRefundRejectDocument, options);
}
export type PaymentScheduleRefundRejectMutationHookResult = ReturnType<
  typeof usePaymentScheduleRefundRejectMutation
>;
export type PaymentScheduleRefundRejectMutationResult =
  Apollo.MutationResult<PaymentScheduleRefundRejectMutation>;
export type PaymentScheduleRefundRejectMutationOptions =
  Apollo.BaseMutationOptions<
    PaymentScheduleRefundRejectMutation,
    PaymentScheduleRefundRejectMutationVariables
  >;
export const PaymentScheduleVoidDocument = gql`
  mutation PaymentScheduleVoid($input: PaymentScheduleVoidInput) {
    PaymentScheduleVoid(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type PaymentScheduleVoidMutationFn = Apollo.MutationFunction<
  PaymentScheduleVoidMutation,
  PaymentScheduleVoidMutationVariables
>;

/**
 * __usePaymentScheduleVoidMutation__
 *
 * To run a mutation, you first call `usePaymentScheduleVoidMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaymentScheduleVoidMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paymentScheduleVoidMutation, { data, loading, error }] = usePaymentScheduleVoidMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentScheduleVoidMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PaymentScheduleVoidMutation,
    PaymentScheduleVoidMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PaymentScheduleVoidMutation,
    PaymentScheduleVoidMutationVariables
  >(PaymentScheduleVoidDocument, options);
}
export type PaymentScheduleVoidMutationHookResult = ReturnType<
  typeof usePaymentScheduleVoidMutation
>;
export type PaymentScheduleVoidMutationResult =
  Apollo.MutationResult<PaymentScheduleVoidMutation>;
export type PaymentScheduleVoidMutationOptions = Apollo.BaseMutationOptions<
  PaymentScheduleVoidMutation,
  PaymentScheduleVoidMutationVariables
>;
export const PaymentListingStatusCountDocument = gql`
  query PaymentListingStatusCount($input: PaymentListingInput) {
    PaymentListingStatusCount(input: $input) {
      payment_status_id
      payment_status_name
      count
    }
  }
`;

/**
 * __usePaymentListingStatusCountQuery__
 *
 * To run a query within a React component, call `usePaymentListingStatusCountQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentListingStatusCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentListingStatusCountQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentListingStatusCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentListingStatusCountQuery,
    PaymentListingStatusCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaymentListingStatusCountQuery,
    PaymentListingStatusCountQueryVariables
  >(PaymentListingStatusCountDocument, options);
}
export function usePaymentListingStatusCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentListingStatusCountQuery,
    PaymentListingStatusCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaymentListingStatusCountQuery,
    PaymentListingStatusCountQueryVariables
  >(PaymentListingStatusCountDocument, options);
}
export type PaymentListingStatusCountQueryHookResult = ReturnType<
  typeof usePaymentListingStatusCountQuery
>;
export type PaymentListingStatusCountLazyQueryHookResult = ReturnType<
  typeof usePaymentListingStatusCountLazyQuery
>;
export type PaymentListingStatusCountQueryResult = Apollo.QueryResult<
  PaymentListingStatusCountQuery,
  PaymentListingStatusCountQueryVariables
>;
export const PaymentScheduleListingStatusCountDocument = gql`
  query PaymentScheduleListingStatusCount($input: PaymentScheduleListingInput) {
    PaymentScheduleListingStatusCount(input: $input) {
      payment_status_id
      payment_status_name
      count
    }
  }
`;

/**
 * __usePaymentScheduleListingStatusCountQuery__
 *
 * To run a query within a React component, call `usePaymentScheduleListingStatusCountQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentScheduleListingStatusCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentScheduleListingStatusCountQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentScheduleListingStatusCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentScheduleListingStatusCountQuery,
    PaymentScheduleListingStatusCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaymentScheduleListingStatusCountQuery,
    PaymentScheduleListingStatusCountQueryVariables
  >(PaymentScheduleListingStatusCountDocument, options);
}
export function usePaymentScheduleListingStatusCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentScheduleListingStatusCountQuery,
    PaymentScheduleListingStatusCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaymentScheduleListingStatusCountQuery,
    PaymentScheduleListingStatusCountQueryVariables
  >(PaymentScheduleListingStatusCountDocument, options);
}
export type PaymentScheduleListingStatusCountQueryHookResult = ReturnType<
  typeof usePaymentScheduleListingStatusCountQuery
>;
export type PaymentScheduleListingStatusCountLazyQueryHookResult = ReturnType<
  typeof usePaymentScheduleListingStatusCountLazyQuery
>;
export type PaymentScheduleListingStatusCountQueryResult = Apollo.QueryResult<
  PaymentScheduleListingStatusCountQuery,
  PaymentScheduleListingStatusCountQueryVariables
>;
export const PaymentScheduleListingDocument = gql`
  query PaymentScheduleListing(
    $input: PaymentScheduleListingInput
    $page: Int
    $first: Int
  ) {
    PaymentScheduleListing(input: $input, page: $page, first: $first) {
      data {
        is_refund_requested
        payment_schedule_id
        payment_schedule_log {
          payment_schedule_log_description
          payment_schedule_log_action
        }
        payment_schedule_referer_code
        payment_status {
          payment_status_id
          payment_status_name
        }
        payment_schedule_amount
        payment_schedule_number
        payment_schedule_complete_media {
          id
          collection_name
          name
          file_name
          mime_type
          url
          full_url
          path
          conversions
        }
        payment_schedule_complete_date
        payment_schedule_created
        payment_schedule_date
        payment_status {
          payment_status_id
          payment_status_name
        }
        customer {
          customer_id
          customer_name
          customer_contact_person
        }
        user_card {
          user_id
          user_card_id
          user_card_cardholder_name
          user_card_expiration_month
          user_card_expiration_year
          user_card_last_4_digit
        }
        payment {
          payment_schedule_total_number
          payment_amount_total
          payment_amount
          payment_id
          payment_reference
          is_payment_repeat
          payment_schedule {
            payment_schedule_referer_code
            payment_status {
              payment_status_id
              payment_status_name
            }
            payment_schedule_date
            payment_schedule_amount
            payment_schedule_number
          }
          payment_type {
            payment_type_name
          }
          payment_recipient {
            payment_recipient_account_name
            payment_recipient_account_number
            payment_recipient_amount
          }
          payment_supporting_media {
            file_name
            url
          }
        }
        payment_recipient {
          payment {
            payment_reference
          }
          payment_recipient_account_name
          payment_recipient_account_number
          payment_recipient_amount
          recipient {
            recipient_id
            recipient_category {
              recipient_category_name
            }
            recipient_bank_holder_name
            recipient_bank_account_number
            bank {
              bank_name
              bank_logo {
                thumb
              }
            }
            recipient_type
          }
        }
        payment_repeat_type {
          payment_repeat_type_charges_rate
          payment_repeat_type_name
          is_extra_charges
        }
        payment_schedule_complete_media {
          file_name
          url
        }
        payment_schedule_log {
          payment_schedule_log_action
          payment_schedule_log_description
          payment_schedule_log_created
          payment_schedule_log_updated
          admin {
            user_fullname
          }
        }
      }
      paginatorInfo {
        ...PaginatorInfo
      }
    }
  }
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __usePaymentScheduleListingQuery__
 *
 * To run a query within a React component, call `usePaymentScheduleListingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentScheduleListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentScheduleListingQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *      first: // value for 'first'
 *   },
 * });
 */
export function usePaymentScheduleListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentScheduleListingQuery,
    PaymentScheduleListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaymentScheduleListingQuery,
    PaymentScheduleListingQueryVariables
  >(PaymentScheduleListingDocument, options);
}
export function usePaymentScheduleListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentScheduleListingQuery,
    PaymentScheduleListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaymentScheduleListingQuery,
    PaymentScheduleListingQueryVariables
  >(PaymentScheduleListingDocument, options);
}
export type PaymentScheduleListingQueryHookResult = ReturnType<
  typeof usePaymentScheduleListingQuery
>;
export type PaymentScheduleListingLazyQueryHookResult = ReturnType<
  typeof usePaymentScheduleListingLazyQuery
>;
export type PaymentScheduleListingQueryResult = Apollo.QueryResult<
  PaymentScheduleListingQuery,
  PaymentScheduleListingQueryVariables
>;
export const BankDetailDocument = gql`
  query BankDetail($bank_id: Int) {
    BankDetail(bank_id: $bank_id) {
      bank_created
      bank_id
      bank_name
      is_deleted
      bank_logo {
        ...ImagesInfo
      }
    }
  }
  ${ImagesInfoFragmentDoc}
`;

/**
 * __useBankDetailQuery__
 *
 * To run a query within a React component, call `useBankDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useBankDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBankDetailQuery({
 *   variables: {
 *      bank_id: // value for 'bank_id'
 *   },
 * });
 */
export function useBankDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BankDetailQuery,
    BankDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BankDetailQuery, BankDetailQueryVariables>(
    BankDetailDocument,
    options
  );
}
export function useBankDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BankDetailQuery,
    BankDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BankDetailQuery, BankDetailQueryVariables>(
    BankDetailDocument,
    options
  );
}
export type BankDetailQueryHookResult = ReturnType<typeof useBankDetailQuery>;
export type BankDetailLazyQueryHookResult = ReturnType<
  typeof useBankDetailLazyQuery
>;
export type BankDetailQueryResult = Apollo.QueryResult<
  BankDetailQuery,
  BankDetailQueryVariables
>;
export const BankListingDocument = gql`
  query BankListing($keyword: String, $page: Int, $first: Int) {
    BankListing(keyword: $keyword, page: $page, first: $first) {
      data {
        bank_created
        bank_id
        bank_name
        is_deleted
        bank_logo {
          ...ImagesInfo
        }
      }
      paginatorInfo {
        ...PaginatorInfo
      }
    }
  }
  ${ImagesInfoFragmentDoc}
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __useBankListingQuery__
 *
 * To run a query within a React component, call `useBankListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useBankListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBankListingQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *      page: // value for 'page'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useBankListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BankListingQuery,
    BankListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BankListingQuery, BankListingQueryVariables>(
    BankListingDocument,
    options
  );
}
export function useBankListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BankListingQuery,
    BankListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BankListingQuery, BankListingQueryVariables>(
    BankListingDocument,
    options
  );
}
export type BankListingQueryHookResult = ReturnType<typeof useBankListingQuery>;
export type BankListingLazyQueryHookResult = ReturnType<
  typeof useBankListingLazyQuery
>;
export type BankListingQueryResult = Apollo.QueryResult<
  BankListingQuery,
  BankListingQueryVariables
>;
export const BankDeleteDocument = gql`
  mutation BankDelete($bank_id: Int) {
    BankDelete(bank_id: $bank_id) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type BankDeleteMutationFn = Apollo.MutationFunction<
  BankDeleteMutation,
  BankDeleteMutationVariables
>;

/**
 * __useBankDeleteMutation__
 *
 * To run a mutation, you first call `useBankDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBankDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bankDeleteMutation, { data, loading, error }] = useBankDeleteMutation({
 *   variables: {
 *      bank_id: // value for 'bank_id'
 *   },
 * });
 */
export function useBankDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    BankDeleteMutation,
    BankDeleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<BankDeleteMutation, BankDeleteMutationVariables>(
    BankDeleteDocument,
    options
  );
}
export type BankDeleteMutationHookResult = ReturnType<
  typeof useBankDeleteMutation
>;
export type BankDeleteMutationResult =
  Apollo.MutationResult<BankDeleteMutation>;
export type BankDeleteMutationOptions = Apollo.BaseMutationOptions<
  BankDeleteMutation,
  BankDeleteMutationVariables
>;
export const BankCreateDocument = gql`
  mutation BankCreate($input: [BankInput]) {
    BankCreate(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type BankCreateMutationFn = Apollo.MutationFunction<
  BankCreateMutation,
  BankCreateMutationVariables
>;

/**
 * __useBankCreateMutation__
 *
 * To run a mutation, you first call `useBankCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBankCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bankCreateMutation, { data, loading, error }] = useBankCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBankCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    BankCreateMutation,
    BankCreateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<BankCreateMutation, BankCreateMutationVariables>(
    BankCreateDocument,
    options
  );
}
export type BankCreateMutationHookResult = ReturnType<
  typeof useBankCreateMutation
>;
export type BankCreateMutationResult =
  Apollo.MutationResult<BankCreateMutation>;
export type BankCreateMutationOptions = Apollo.BaseMutationOptions<
  BankCreateMutation,
  BankCreateMutationVariables
>;
export const BankUpdateDocument = gql`
  mutation BankUpdate($input: BankInput) {
    BankUpdate(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type BankUpdateMutationFn = Apollo.MutationFunction<
  BankUpdateMutation,
  BankUpdateMutationVariables
>;

/**
 * __useBankUpdateMutation__
 *
 * To run a mutation, you first call `useBankUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBankUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bankUpdateMutation, { data, loading, error }] = useBankUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBankUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    BankUpdateMutation,
    BankUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<BankUpdateMutation, BankUpdateMutationVariables>(
    BankUpdateDocument,
    options
  );
}
export type BankUpdateMutationHookResult = ReturnType<
  typeof useBankUpdateMutation
>;
export type BankUpdateMutationResult =
  Apollo.MutationResult<BankUpdateMutation>;
export type BankUpdateMutationOptions = Apollo.BaseMutationOptions<
  BankUpdateMutation,
  BankUpdateMutationVariables
>;
export const RoleListingDocument = gql`
  query RoleListing($user_type_id: Int) {
    RoleListing(user_type_id: $user_type_id) {
      id
      name
      total
      user_type_id
      user_type_name
      users {
        user_id
        user_email
        user_fullname
        user_mobile
        user_profile_image {
          full
          media_id
          thumb
        }
      }
    }
  }
`;

/**
 * __useRoleListingQuery__
 *
 * To run a query within a React component, call `useRoleListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoleListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoleListingQuery({
 *   variables: {
 *      user_type_id: // value for 'user_type_id'
 *   },
 * });
 */
export function useRoleListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    RoleListingQuery,
    RoleListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RoleListingQuery, RoleListingQueryVariables>(
    RoleListingDocument,
    options
  );
}
export function useRoleListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RoleListingQuery,
    RoleListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RoleListingQuery, RoleListingQueryVariables>(
    RoleListingDocument,
    options
  );
}
export type RoleListingQueryHookResult = ReturnType<typeof useRoleListingQuery>;
export type RoleListingLazyQueryHookResult = ReturnType<
  typeof useRoleListingLazyQuery
>;
export type RoleListingQueryResult = Apollo.QueryResult<
  RoleListingQuery,
  RoleListingQueryVariables
>;
export const RoleDetailDocument = gql`
  query RoleDetail($role_id: Int!) {
    RoleDetail(role_id: $role_id) {
      id
      name
      user_type_id
      user_type_name
      permissions {
        id
        name
        display_name
        group_name
      }
    }
  }
`;

/**
 * __useRoleDetailQuery__
 *
 * To run a query within a React component, call `useRoleDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoleDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoleDetailQuery({
 *   variables: {
 *      role_id: // value for 'role_id'
 *   },
 * });
 */
export function useRoleDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    RoleDetailQuery,
    RoleDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RoleDetailQuery, RoleDetailQueryVariables>(
    RoleDetailDocument,
    options
  );
}
export function useRoleDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RoleDetailQuery,
    RoleDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RoleDetailQuery, RoleDetailQueryVariables>(
    RoleDetailDocument,
    options
  );
}
export type RoleDetailQueryHookResult = ReturnType<typeof useRoleDetailQuery>;
export type RoleDetailLazyQueryHookResult = ReturnType<
  typeof useRoleDetailLazyQuery
>;
export type RoleDetailQueryResult = Apollo.QueryResult<
  RoleDetailQuery,
  RoleDetailQueryVariables
>;
export const RoleUpdateDocument = gql`
  mutation RoleUpdate($input: RoleUpdateInput) {
    RoleUpdate(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type RoleUpdateMutationFn = Apollo.MutationFunction<
  RoleUpdateMutation,
  RoleUpdateMutationVariables
>;

/**
 * __useRoleUpdateMutation__
 *
 * To run a mutation, you first call `useRoleUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoleUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [roleUpdateMutation, { data, loading, error }] = useRoleUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRoleUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RoleUpdateMutation,
    RoleUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RoleUpdateMutation, RoleUpdateMutationVariables>(
    RoleUpdateDocument,
    options
  );
}
export type RoleUpdateMutationHookResult = ReturnType<
  typeof useRoleUpdateMutation
>;
export type RoleUpdateMutationResult =
  Apollo.MutationResult<RoleUpdateMutation>;
export type RoleUpdateMutationOptions = Apollo.BaseMutationOptions<
  RoleUpdateMutation,
  RoleUpdateMutationVariables
>;
export const RoleDeleteDocument = gql`
  mutation RoleDelete($role_id: Int) {
    RoleDelete(role_id: $role_id) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type RoleDeleteMutationFn = Apollo.MutationFunction<
  RoleDeleteMutation,
  RoleDeleteMutationVariables
>;

/**
 * __useRoleDeleteMutation__
 *
 * To run a mutation, you first call `useRoleDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoleDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [roleDeleteMutation, { data, loading, error }] = useRoleDeleteMutation({
 *   variables: {
 *      role_id: // value for 'role_id'
 *   },
 * });
 */
export function useRoleDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RoleDeleteMutation,
    RoleDeleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RoleDeleteMutation, RoleDeleteMutationVariables>(
    RoleDeleteDocument,
    options
  );
}
export type RoleDeleteMutationHookResult = ReturnType<
  typeof useRoleDeleteMutation
>;
export type RoleDeleteMutationResult =
  Apollo.MutationResult<RoleDeleteMutation>;
export type RoleDeleteMutationOptions = Apollo.BaseMutationOptions<
  RoleDeleteMutation,
  RoleDeleteMutationVariables
>;
export const RoleCreateDocument = gql`
  mutation RoleCreate($input: RoleCreateInput) {
    RoleCreate(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type RoleCreateMutationFn = Apollo.MutationFunction<
  RoleCreateMutation,
  RoleCreateMutationVariables
>;

/**
 * __useRoleCreateMutation__
 *
 * To run a mutation, you first call `useRoleCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoleCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [roleCreateMutation, { data, loading, error }] = useRoleCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRoleCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RoleCreateMutation,
    RoleCreateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RoleCreateMutation, RoleCreateMutationVariables>(
    RoleCreateDocument,
    options
  );
}
export type RoleCreateMutationHookResult = ReturnType<
  typeof useRoleCreateMutation
>;
export type RoleCreateMutationResult =
  Apollo.MutationResult<RoleCreateMutation>;
export type RoleCreateMutationOptions = Apollo.BaseMutationOptions<
  RoleCreateMutation,
  RoleCreateMutationVariables
>;
export const PermissionListingDocument = gql`
  query PermissionListing($user_type_id: Int) {
    PermissionListing(user_type_id: $user_type_id) {
      id
      display_name
      group_name
      name
    }
  }
`;

/**
 * __usePermissionListingQuery__
 *
 * To run a query within a React component, call `usePermissionListingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePermissionListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePermissionListingQuery({
 *   variables: {
 *      user_type_id: // value for 'user_type_id'
 *   },
 * });
 */
export function usePermissionListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PermissionListingQuery,
    PermissionListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PermissionListingQuery,
    PermissionListingQueryVariables
  >(PermissionListingDocument, options);
}
export function usePermissionListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PermissionListingQuery,
    PermissionListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PermissionListingQuery,
    PermissionListingQueryVariables
  >(PermissionListingDocument, options);
}
export type PermissionListingQueryHookResult = ReturnType<
  typeof usePermissionListingQuery
>;
export type PermissionListingLazyQueryHookResult = ReturnType<
  typeof usePermissionListingLazyQuery
>;
export type PermissionListingQueryResult = Apollo.QueryResult<
  PermissionListingQuery,
  PermissionListingQueryVariables
>;
export const AdminListingDocument = gql`
  query AdminListing($input: AdminListingInput, $page: Int, $first: Int) {
    AdminListing(input: $input, page: $page, first: $first) {
      data {
        user_id
        user_fullname
        user_mobile
        user_email
        user_status
        user_role {
          name
          id
        }
        user_code
        user_address
        user_address2
        user_city {
          city_id
          city_name
        }
        user_state {
          state_id
          state_name
        }
        user_created
        user_dob
        user_nationality {
          country_id
          country_name
        }
        user_nric
        user_postcode
        user_profile_image {
          media_id
          full
          thumb
        }
        user_type {
          user_type_id
          user_type_name
          user_type_slug
        }
        user_updated
        username
      }
      paginatorInfo {
        ...PaginatorInfo
      }
    }
  }
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __useAdminListingQuery__
 *
 * To run a query within a React component, call `useAdminListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminListingQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useAdminListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AdminListingQuery,
    AdminListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AdminListingQuery, AdminListingQueryVariables>(
    AdminListingDocument,
    options
  );
}
export function useAdminListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AdminListingQuery,
    AdminListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AdminListingQuery, AdminListingQueryVariables>(
    AdminListingDocument,
    options
  );
}
export type AdminListingQueryHookResult = ReturnType<
  typeof useAdminListingQuery
>;
export type AdminListingLazyQueryHookResult = ReturnType<
  typeof useAdminListingLazyQuery
>;
export type AdminListingQueryResult = Apollo.QueryResult<
  AdminListingQuery,
  AdminListingQueryVariables
>;
export const AdminListingExportDocument = gql`
  query AdminListingExport($input: AdminListingInput) {
    AdminListingExport(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;

/**
 * __useAdminListingExportQuery__
 *
 * To run a query within a React component, call `useAdminListingExportQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminListingExportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminListingExportQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminListingExportQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AdminListingExportQuery,
    AdminListingExportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    AdminListingExportQuery,
    AdminListingExportQueryVariables
  >(AdminListingExportDocument, options);
}
export function useAdminListingExportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AdminListingExportQuery,
    AdminListingExportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AdminListingExportQuery,
    AdminListingExportQueryVariables
  >(AdminListingExportDocument, options);
}
export type AdminListingExportQueryHookResult = ReturnType<
  typeof useAdminListingExportQuery
>;
export type AdminListingExportLazyQueryHookResult = ReturnType<
  typeof useAdminListingExportLazyQuery
>;
export type AdminListingExportQueryResult = Apollo.QueryResult<
  AdminListingExportQuery,
  AdminListingExportQueryVariables
>;
export const UserDetailDocument = gql`
  query UserDetail($user_id: Int) {
    UserDetail(user_id: $user_id) {
      user_id
      user_email
      user_fullname
      username
      user_mobile
      user_status
      user_join_date
      user_dob
      user_gender
      user_role {
        name
        id
      }
      customer {
        business_type {
          business_type_id
          business_type_name
          business_type_status
          is_deleted
        }
        customer_id
        customer_address
        customer_address2
        customer_id
        customer_address
        customer_address2
        customer_annual_revenue
        customer_approved
        customer_company_size
        customer_contact_person
        customer_contact_person_mobile
        customer_contact_person_role
        customer_created
        customer_fax
        customer_mobile
        customer_name
        customer_postcode
        customer_remark
        customer_status
        customer_type
        customer_updated
        customer_email
        customer_registration_number
        business_year {
          year_of_business_id
          year_of_business_name
        }
        ssm_business_certificate {
          id
          name
          file_name
          full_url
          mime_type
        }
        customer_annual_revenue
        customer_approved
        customer_company_size
        customer_contact_person
        customer_contact_person_mobile
        customer_contact_person_role
        customer_created
        customer_fax
        customer_mobile
        customer_name
        customer_postcode
        customer_remark
        customer_status
        customer_type
        customer_updated
        customer_email
        customer_registration_number
        ssm_business_certificate {
          id
          name
          file_name
          full_url
          mime_type
        }
      }
    }
  }
`;

/**
 * __useUserDetailQuery__
 *
 * To run a query within a React component, call `useUserDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDetailQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useUserDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UserDetailQuery,
    UserDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserDetailQuery, UserDetailQueryVariables>(
    UserDetailDocument,
    options
  );
}
export function useUserDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserDetailQuery,
    UserDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserDetailQuery, UserDetailQueryVariables>(
    UserDetailDocument,
    options
  );
}
export type UserDetailQueryHookResult = ReturnType<typeof useUserDetailQuery>;
export type UserDetailLazyQueryHookResult = ReturnType<
  typeof useUserDetailLazyQuery
>;
export type UserDetailQueryResult = Apollo.QueryResult<
  UserDetailQuery,
  UserDetailQueryVariables
>;
export const UserCreateDocument = gql`
  mutation UserCreate($input: UserCreateInput) {
    UserCreate(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type UserCreateMutationFn = Apollo.MutationFunction<
  UserCreateMutation,
  UserCreateMutationVariables
>;

/**
 * __useUserCreateMutation__
 *
 * To run a mutation, you first call `useUserCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCreateMutation, { data, loading, error }] = useUserCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserCreateMutation,
    UserCreateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UserCreateMutation, UserCreateMutationVariables>(
    UserCreateDocument,
    options
  );
}
export type UserCreateMutationHookResult = ReturnType<
  typeof useUserCreateMutation
>;
export type UserCreateMutationResult =
  Apollo.MutationResult<UserCreateMutation>;
export type UserCreateMutationOptions = Apollo.BaseMutationOptions<
  UserCreateMutation,
  UserCreateMutationVariables
>;
export const UserDeleteDocument = gql`
  mutation UserDelete($user_id: Int) {
    UserDelete(user_id: $user_id) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type UserDeleteMutationFn = Apollo.MutationFunction<
  UserDeleteMutation,
  UserDeleteMutationVariables
>;

/**
 * __useUserDeleteMutation__
 *
 * To run a mutation, you first call `useUserDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userDeleteMutation, { data, loading, error }] = useUserDeleteMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useUserDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserDeleteMutation,
    UserDeleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UserDeleteMutation, UserDeleteMutationVariables>(
    UserDeleteDocument,
    options
  );
}
export type UserDeleteMutationHookResult = ReturnType<
  typeof useUserDeleteMutation
>;
export type UserDeleteMutationResult =
  Apollo.MutationResult<UserDeleteMutation>;
export type UserDeleteMutationOptions = Apollo.BaseMutationOptions<
  UserDeleteMutation,
  UserDeleteMutationVariables
>;
export const UserUpdateDocument = gql`
  mutation UserUpdate($input: UserUpdateInput) {
    UserUpdate(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type UserUpdateMutationFn = Apollo.MutationFunction<
  UserUpdateMutation,
  UserUpdateMutationVariables
>;

/**
 * __useUserUpdateMutation__
 *
 * To run a mutation, you first call `useUserUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateMutation, { data, loading, error }] = useUserUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserUpdateMutation,
    UserUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UserUpdateMutation, UserUpdateMutationVariables>(
    UserUpdateDocument,
    options
  );
}
export type UserUpdateMutationHookResult = ReturnType<
  typeof useUserUpdateMutation
>;
export type UserUpdateMutationResult =
  Apollo.MutationResult<UserUpdateMutation>;
export type UserUpdateMutationOptions = Apollo.BaseMutationOptions<
  UserUpdateMutation,
  UserUpdateMutationVariables
>;
export const UpdatePasswordDocument = gql`
  mutation UpdatePassword($input: UpdatePasswordInput) {
    UpdatePassword(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<
  UpdatePasswordMutation,
  UpdatePasswordMutationVariables
>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePasswordMutation,
    UpdatePasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdatePasswordMutation,
    UpdatePasswordMutationVariables
  >(UpdatePasswordDocument, options);
}
export type UpdatePasswordMutationHookResult = ReturnType<
  typeof useUpdatePasswordMutation
>;
export type UpdatePasswordMutationResult =
  Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<
  UpdatePasswordMutation,
  UpdatePasswordMutationVariables
>;
export const ApplicationListingDocument = gql`
  query ApplicationListing(
    $input: CustomerListingInput
    $page: Int
    $first: Int
  ) {
    ApplicationListing(input: $input, page: $page, first: $first) {
      data {
        business_type {
          business_type_id
          business_type_name
          business_type_status
          is_deleted
        }
        customer_id
        customer_address
        customer_address2
        setting_annual_revenue {
          setting_annual_revenue_id
          setting_annual_revenue_name
        }
        customer_approved
        setting_company_size {
          setting_company_size_id
          setting_company_size_name
        }
        city {
          city_name
        }
        state {
          state_name
        }
        customer_contact_person
        customer_contact_person_mobile
        customer_contact_person_role
        customer_contact_person_email
        customer_created
        customer_fax
        customer_mobile
        customer_name
        customer_postcode
        customer_remark
        customer_status
        customer_type
        customer_updated
        customer_email
        customer_registration_number
        business_year {
          year_of_business_id
          year_of_business_name
        }
        ssm_business_certificate {
          id
          name
          file_name
          full_url
          mime_type
        }
      }
      paginatorInfo {
        ...PaginatorInfo
      }
    }
  }
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __useApplicationListingQuery__
 *
 * To run a query within a React component, call `useApplicationListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useApplicationListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApplicationListingQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useApplicationListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApplicationListingQuery,
    ApplicationListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ApplicationListingQuery,
    ApplicationListingQueryVariables
  >(ApplicationListingDocument, options);
}
export function useApplicationListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApplicationListingQuery,
    ApplicationListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ApplicationListingQuery,
    ApplicationListingQueryVariables
  >(ApplicationListingDocument, options);
}
export type ApplicationListingQueryHookResult = ReturnType<
  typeof useApplicationListingQuery
>;
export type ApplicationListingLazyQueryHookResult = ReturnType<
  typeof useApplicationListingLazyQuery
>;
export type ApplicationListingQueryResult = Apollo.QueryResult<
  ApplicationListingQuery,
  ApplicationListingQueryVariables
>;
export const ApplicationListingExportDocument = gql`
  query ApplicationListingExport($input: CustomerListingInput) {
    ApplicationListingExport(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;

/**
 * __useApplicationListingExportQuery__
 *
 * To run a query within a React component, call `useApplicationListingExportQuery` and pass it any options that fit your needs.
 * When your component renders, `useApplicationListingExportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApplicationListingExportQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useApplicationListingExportQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApplicationListingExportQuery,
    ApplicationListingExportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ApplicationListingExportQuery,
    ApplicationListingExportQueryVariables
  >(ApplicationListingExportDocument, options);
}
export function useApplicationListingExportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApplicationListingExportQuery,
    ApplicationListingExportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ApplicationListingExportQuery,
    ApplicationListingExportQueryVariables
  >(ApplicationListingExportDocument, options);
}
export type ApplicationListingExportQueryHookResult = ReturnType<
  typeof useApplicationListingExportQuery
>;
export type ApplicationListingExportLazyQueryHookResult = ReturnType<
  typeof useApplicationListingExportLazyQuery
>;
export type ApplicationListingExportQueryResult = Apollo.QueryResult<
  ApplicationListingExportQuery,
  ApplicationListingExportQueryVariables
>;
export const ApplicationStatusCountDocument = gql`
  query ApplicationStatusCount($input: CustomerStatus) {
    ApplicationStatusCount(customer_status: $input) {
      customer_status
      count
    }
  }
`;

/**
 * __useApplicationStatusCountQuery__
 *
 * To run a query within a React component, call `useApplicationStatusCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useApplicationStatusCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApplicationStatusCountQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useApplicationStatusCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApplicationStatusCountQuery,
    ApplicationStatusCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ApplicationStatusCountQuery,
    ApplicationStatusCountQueryVariables
  >(ApplicationStatusCountDocument, options);
}
export function useApplicationStatusCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApplicationStatusCountQuery,
    ApplicationStatusCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ApplicationStatusCountQuery,
    ApplicationStatusCountQueryVariables
  >(ApplicationStatusCountDocument, options);
}
export type ApplicationStatusCountQueryHookResult = ReturnType<
  typeof useApplicationStatusCountQuery
>;
export type ApplicationStatusCountLazyQueryHookResult = ReturnType<
  typeof useApplicationStatusCountLazyQuery
>;
export type ApplicationStatusCountQueryResult = Apollo.QueryResult<
  ApplicationStatusCountQuery,
  ApplicationStatusCountQueryVariables
>;
export const UserListingDocument = gql`
  query UserListing($input: UserListingInput, $page: Int, $first: Int) {
    UserListing(input: $input, page: $page, first: $first) {
      data {
        user_id
        username
        user_email
        user_fullname
        user_nric
        user_mobile
        user_status
        user_nationality {
          country_id
          country_name
        }
        user_role {
          id
          name
        }
        user_type {
          user_type_id
          user_type_name
          user_type_group
        }
        user_profile_image {
          full
          thumb
        }
        user_gender
        user_address
      }
      paginatorInfo {
        ...PaginatorInfo
      }
    }
  }
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __useUserListingQuery__
 *
 * To run a query within a React component, call `useUserListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserListingQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useUserListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UserListingQuery,
    UserListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserListingQuery, UserListingQueryVariables>(
    UserListingDocument,
    options
  );
}
export function useUserListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserListingQuery,
    UserListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserListingQuery, UserListingQueryVariables>(
    UserListingDocument,
    options
  );
}
export type UserListingQueryHookResult = ReturnType<typeof useUserListingQuery>;
export type UserListingLazyQueryHookResult = ReturnType<
  typeof useUserListingLazyQuery
>;
export type UserListingQueryResult = Apollo.QueryResult<
  UserListingQuery,
  UserListingQueryVariables
>;
export const UserActivateDocument = gql`
  mutation UserActivate($user_id: Int) {
    UserActivate(user_id: $user_id) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type UserActivateMutationFn = Apollo.MutationFunction<
  UserActivateMutation,
  UserActivateMutationVariables
>;

/**
 * __useUserActivateMutation__
 *
 * To run a mutation, you first call `useUserActivateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserActivateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userActivateMutation, { data, loading, error }] = useUserActivateMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useUserActivateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserActivateMutation,
    UserActivateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UserActivateMutation,
    UserActivateMutationVariables
  >(UserActivateDocument, options);
}
export type UserActivateMutationHookResult = ReturnType<
  typeof useUserActivateMutation
>;
export type UserActivateMutationResult =
  Apollo.MutationResult<UserActivateMutation>;
export type UserActivateMutationOptions = Apollo.BaseMutationOptions<
  UserActivateMutation,
  UserActivateMutationVariables
>;
export const UserSuspendDocument = gql`
  mutation UserSuspend($user_id: Int) {
    UserSuspend(user_id: $user_id) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type UserSuspendMutationFn = Apollo.MutationFunction<
  UserSuspendMutation,
  UserSuspendMutationVariables
>;

/**
 * __useUserSuspendMutation__
 *
 * To run a mutation, you first call `useUserSuspendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSuspendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSuspendMutation, { data, loading, error }] = useUserSuspendMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useUserSuspendMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserSuspendMutation,
    UserSuspendMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UserSuspendMutation, UserSuspendMutationVariables>(
    UserSuspendDocument,
    options
  );
}
export type UserSuspendMutationHookResult = ReturnType<
  typeof useUserSuspendMutation
>;
export type UserSuspendMutationResult =
  Apollo.MutationResult<UserSuspendMutation>;
export type UserSuspendMutationOptions = Apollo.BaseMutationOptions<
  UserSuspendMutation,
  UserSuspendMutationVariables
>;
export const CustomerListingDocument = gql`
  query CustomerListing($input: CustomerListingInput, $page: Int, $first: Int) {
    CustomerListing(input: $input, page: $page, first: $first) {
      data {
        business_type_id {
          business_type_id
          business_type_name
          business_type_status
          is_deleted
        }
        customer_id
        customer_address
        customer_address2
        setting_annual_revenue {
          setting_annual_revenue_id
          setting_annual_revenue_name
        }
        customer_approved
        setting_company_size {
          setting_company_size_id
          setting_company_size_name
        }
        city {
          city_name
        }
        state {
          state_name
        }
        customer_contact_person
        customer_contact_person_mobile
        customer_contact_person_role
        customer_created
        customer_fax
        customer_mobile
        customer_name
        customer_postcode
        customer_remark
        customer_status
        customer_type
        customer_updated
        customer_email
        customer_registration_number
        year_of_business_id {
          year_of_business_id
          year_of_business_name
        }
        ssm_business_certificate {
          id
          name
          file_name
          full_url
          mime_type
        }
        total_usage
        total_transaction
        total_recipient
        total_card
        total_fee
      }
      paginatorInfo {
        ...PaginatorInfo
      }
    }
  }
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __useCustomerListingQuery__
 *
 * To run a query within a React component, call `useCustomerListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerListingQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useCustomerListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CustomerListingQuery,
    CustomerListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CustomerListingQuery, CustomerListingQueryVariables>(
    CustomerListingDocument,
    options
  );
}
export function useCustomerListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CustomerListingQuery,
    CustomerListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CustomerListingQuery,
    CustomerListingQueryVariables
  >(CustomerListingDocument, options);
}
export type CustomerListingQueryHookResult = ReturnType<
  typeof useCustomerListingQuery
>;
export type CustomerListingLazyQueryHookResult = ReturnType<
  typeof useCustomerListingLazyQuery
>;
export type CustomerListingQueryResult = Apollo.QueryResult<
  CustomerListingQuery,
  CustomerListingQueryVariables
>;
export const CustomerDetailDocument = gql`
  query CustomerDetail($customer_id: Int) {
    CustomerDetail(customer_id: $customer_id) {
      business_type_id
      business_type {
        business_type_id
        business_type_name
        business_type_status
        is_deleted
      }
      customer_id
      customer_address
      customer_address2
      setting_annual_revenue {
        setting_annual_revenue_id
        setting_annual_revenue_name
      }
      customer_approved
      setting_company_size {
        setting_company_size_id
        setting_company_size_name
      }
      customer_contact_person
      customer_contact_person_mobile
      customer_contact_person_role
      customer_contact_person_email
      customer_created
      customer_fax
      customer_mobile
      customer_name
      customer_postcode
      customer_remark
      customer_status
      customer_type
      customer_updated
      customer_email
      customer_registration_number
      customer_website
      year_of_business_id
      business_year {
        year_of_business_id
        year_of_business_name
      }
      ssm_business_certificate {
        id
        name
        file_name
        full_url
        mime_type
      }
      country {
        country_id
        country_name
      }
      state {
        state_id
        state_name
      }
      city {
        city_id
        city_name
      }
      user {
        user_id
      }
    }
  }
`;

/**
 * __useCustomerDetailQuery__
 *
 * To run a query within a React component, call `useCustomerDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerDetailQuery({
 *   variables: {
 *      customer_id: // value for 'customer_id'
 *   },
 * });
 */
export function useCustomerDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CustomerDetailQuery,
    CustomerDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CustomerDetailQuery, CustomerDetailQueryVariables>(
    CustomerDetailDocument,
    options
  );
}
export function useCustomerDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CustomerDetailQuery,
    CustomerDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CustomerDetailQuery, CustomerDetailQueryVariables>(
    CustomerDetailDocument,
    options
  );
}
export type CustomerDetailQueryHookResult = ReturnType<
  typeof useCustomerDetailQuery
>;
export type CustomerDetailLazyQueryHookResult = ReturnType<
  typeof useCustomerDetailLazyQuery
>;
export type CustomerDetailQueryResult = Apollo.QueryResult<
  CustomerDetailQuery,
  CustomerDetailQueryVariables
>;
export const CustomerLogListingDocument = gql`
  query CustomerLogListing(
    $input: CustomerLogListingInput
    $page: Int
    $first: Int
  ) {
    CustomerLogListing(input: $input, page: $page, first: $first) {
      data {
        customer_log_id
        customer_log_action
        customer_log_description
        customer_log_created
      }
      paginatorInfo {
        ...PaginatorInfo
      }
    }
  }
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __useCustomerLogListingQuery__
 *
 * To run a query within a React component, call `useCustomerLogListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerLogListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerLogListingQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useCustomerLogListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CustomerLogListingQuery,
    CustomerLogListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CustomerLogListingQuery,
    CustomerLogListingQueryVariables
  >(CustomerLogListingDocument, options);
}
export function useCustomerLogListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CustomerLogListingQuery,
    CustomerLogListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CustomerLogListingQuery,
    CustomerLogListingQueryVariables
  >(CustomerLogListingDocument, options);
}
export type CustomerLogListingQueryHookResult = ReturnType<
  typeof useCustomerLogListingQuery
>;
export type CustomerLogListingLazyQueryHookResult = ReturnType<
  typeof useCustomerLogListingLazyQuery
>;
export type CustomerLogListingQueryResult = Apollo.QueryResult<
  CustomerLogListingQuery,
  CustomerLogListingQueryVariables
>;
export const CustomerApproveDocument = gql`
  mutation CustomerApprove($customer_id: Int) {
    CustomerApprove(customer_id: $customer_id) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type CustomerApproveMutationFn = Apollo.MutationFunction<
  CustomerApproveMutation,
  CustomerApproveMutationVariables
>;

/**
 * __useCustomerApproveMutation__
 *
 * To run a mutation, you first call `useCustomerApproveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerApproveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerApproveMutation, { data, loading, error }] = useCustomerApproveMutation({
 *   variables: {
 *      customer_id: // value for 'customer_id'
 *   },
 * });
 */
export function useCustomerApproveMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CustomerApproveMutation,
    CustomerApproveMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CustomerApproveMutation,
    CustomerApproveMutationVariables
  >(CustomerApproveDocument, options);
}
export type CustomerApproveMutationHookResult = ReturnType<
  typeof useCustomerApproveMutation
>;
export type CustomerApproveMutationResult =
  Apollo.MutationResult<CustomerApproveMutation>;
export type CustomerApproveMutationOptions = Apollo.BaseMutationOptions<
  CustomerApproveMutation,
  CustomerApproveMutationVariables
>;
export const CustomerRejectDocument = gql`
  mutation CustomerReject($input: CustomerRejectInput) {
    CustomerReject(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type CustomerRejectMutationFn = Apollo.MutationFunction<
  CustomerRejectMutation,
  CustomerRejectMutationVariables
>;

/**
 * __useCustomerRejectMutation__
 *
 * To run a mutation, you first call `useCustomerRejectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerRejectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerRejectMutation, { data, loading, error }] = useCustomerRejectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCustomerRejectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CustomerRejectMutation,
    CustomerRejectMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CustomerRejectMutation,
    CustomerRejectMutationVariables
  >(CustomerRejectDocument, options);
}
export type CustomerRejectMutationHookResult = ReturnType<
  typeof useCustomerRejectMutation
>;
export type CustomerRejectMutationResult =
  Apollo.MutationResult<CustomerRejectMutation>;
export type CustomerRejectMutationOptions = Apollo.BaseMutationOptions<
  CustomerRejectMutation,
  CustomerRejectMutationVariables
>;
export const CustomerListingExportDocument = gql`
  query CustomerListingExport($input: CustomerListingInput) {
    CustomerListingExport(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;

/**
 * __useCustomerListingExportQuery__
 *
 * To run a query within a React component, call `useCustomerListingExportQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerListingExportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerListingExportQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCustomerListingExportQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CustomerListingExportQuery,
    CustomerListingExportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CustomerListingExportQuery,
    CustomerListingExportQueryVariables
  >(CustomerListingExportDocument, options);
}
export function useCustomerListingExportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CustomerListingExportQuery,
    CustomerListingExportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CustomerListingExportQuery,
    CustomerListingExportQueryVariables
  >(CustomerListingExportDocument, options);
}
export type CustomerListingExportQueryHookResult = ReturnType<
  typeof useCustomerListingExportQuery
>;
export type CustomerListingExportLazyQueryHookResult = ReturnType<
  typeof useCustomerListingExportLazyQuery
>;
export type CustomerListingExportQueryResult = Apollo.QueryResult<
  CustomerListingExportQuery,
  CustomerListingExportQueryVariables
>;
export const CustomerUpdateDocument = gql`
  mutation CustomerUpdate($input: CustomerUpdateInput) {
    CustomerUpdate(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type CustomerUpdateMutationFn = Apollo.MutationFunction<
  CustomerUpdateMutation,
  CustomerUpdateMutationVariables
>;

/**
 * __useCustomerUpdateMutation__
 *
 * To run a mutation, you first call `useCustomerUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerUpdateMutation, { data, loading, error }] = useCustomerUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCustomerUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CustomerUpdateMutation,
    CustomerUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CustomerUpdateMutation,
    CustomerUpdateMutationVariables
  >(CustomerUpdateDocument, options);
}
export type CustomerUpdateMutationHookResult = ReturnType<
  typeof useCustomerUpdateMutation
>;
export type CustomerUpdateMutationResult =
  Apollo.MutationResult<CustomerUpdateMutation>;
export type CustomerUpdateMutationOptions = Apollo.BaseMutationOptions<
  CustomerUpdateMutation,
  CustomerUpdateMutationVariables
>;
export const CustomerSuspendDocument = gql`
  mutation CustomerSuspend($customer_id: Int) {
    CustomerSuspend(customer_id: $customer_id) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type CustomerSuspendMutationFn = Apollo.MutationFunction<
  CustomerSuspendMutation,
  CustomerSuspendMutationVariables
>;

/**
 * __useCustomerSuspendMutation__
 *
 * To run a mutation, you first call `useCustomerSuspendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerSuspendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerSuspendMutation, { data, loading, error }] = useCustomerSuspendMutation({
 *   variables: {
 *      customer_id: // value for 'customer_id'
 *   },
 * });
 */
export function useCustomerSuspendMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CustomerSuspendMutation,
    CustomerSuspendMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CustomerSuspendMutation,
    CustomerSuspendMutationVariables
  >(CustomerSuspendDocument, options);
}
export type CustomerSuspendMutationHookResult = ReturnType<
  typeof useCustomerSuspendMutation
>;
export type CustomerSuspendMutationResult =
  Apollo.MutationResult<CustomerSuspendMutation>;
export type CustomerSuspendMutationOptions = Apollo.BaseMutationOptions<
  CustomerSuspendMutation,
  CustomerSuspendMutationVariables
>;
export const CustomerActivateDocument = gql`
  mutation CustomerActivate($customer_id: Int) {
    CustomerActivate(customer_id: $customer_id) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type CustomerActivateMutationFn = Apollo.MutationFunction<
  CustomerActivateMutation,
  CustomerActivateMutationVariables
>;

/**
 * __useCustomerActivateMutation__
 *
 * To run a mutation, you first call `useCustomerActivateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerActivateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerActivateMutation, { data, loading, error }] = useCustomerActivateMutation({
 *   variables: {
 *      customer_id: // value for 'customer_id'
 *   },
 * });
 */
export function useCustomerActivateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CustomerActivateMutation,
    CustomerActivateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CustomerActivateMutation,
    CustomerActivateMutationVariables
  >(CustomerActivateDocument, options);
}
export type CustomerActivateMutationHookResult = ReturnType<
  typeof useCustomerActivateMutation
>;
export type CustomerActivateMutationResult =
  Apollo.MutationResult<CustomerActivateMutation>;
export type CustomerActivateMutationOptions = Apollo.BaseMutationOptions<
  CustomerActivateMutation,
  CustomerActivateMutationVariables
>;
export const CountryDropdownDocument = gql`
  query CountryDropdown {
    CountryDropdown {
      country_code
      country_currency_code
      country_id
      country_international_code
      country_name
      is_deleted
    }
  }
`;

/**
 * __useCountryDropdownQuery__
 *
 * To run a query within a React component, call `useCountryDropdownQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryDropdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryDropdownQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountryDropdownQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CountryDropdownQuery,
    CountryDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CountryDropdownQuery, CountryDropdownQueryVariables>(
    CountryDropdownDocument,
    options
  );
}
export function useCountryDropdownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CountryDropdownQuery,
    CountryDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CountryDropdownQuery,
    CountryDropdownQueryVariables
  >(CountryDropdownDocument, options);
}
export type CountryDropdownQueryHookResult = ReturnType<
  typeof useCountryDropdownQuery
>;
export type CountryDropdownLazyQueryHookResult = ReturnType<
  typeof useCountryDropdownLazyQuery
>;
export type CountryDropdownQueryResult = Apollo.QueryResult<
  CountryDropdownQuery,
  CountryDropdownQueryVariables
>;
export const StateDropdownDocument = gql`
  query StateDropdown($country_id: Int) {
    StateDropdown(country_id: $country_id) {
      state_id
      state_name
      is_deleted
    }
  }
`;

/**
 * __useStateDropdownQuery__
 *
 * To run a query within a React component, call `useStateDropdownQuery` and pass it any options that fit your needs.
 * When your component renders, `useStateDropdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStateDropdownQuery({
 *   variables: {
 *      country_id: // value for 'country_id'
 *   },
 * });
 */
export function useStateDropdownQuery(
  baseOptions?: Apollo.QueryHookOptions<
    StateDropdownQuery,
    StateDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<StateDropdownQuery, StateDropdownQueryVariables>(
    StateDropdownDocument,
    options
  );
}
export function useStateDropdownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StateDropdownQuery,
    StateDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<StateDropdownQuery, StateDropdownQueryVariables>(
    StateDropdownDocument,
    options
  );
}
export type StateDropdownQueryHookResult = ReturnType<
  typeof useStateDropdownQuery
>;
export type StateDropdownLazyQueryHookResult = ReturnType<
  typeof useStateDropdownLazyQuery
>;
export type StateDropdownQueryResult = Apollo.QueryResult<
  StateDropdownQuery,
  StateDropdownQueryVariables
>;
export const CityDropdownDocument = gql`
  query CityDropdown($state_id: Int) {
    CityDropdown(state_id: $state_id) {
      city_id
      city_name
      is_deleted
    }
  }
`;

/**
 * __useCityDropdownQuery__
 *
 * To run a query within a React component, call `useCityDropdownQuery` and pass it any options that fit your needs.
 * When your component renders, `useCityDropdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCityDropdownQuery({
 *   variables: {
 *      state_id: // value for 'state_id'
 *   },
 * });
 */
export function useCityDropdownQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CityDropdownQuery,
    CityDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CityDropdownQuery, CityDropdownQueryVariables>(
    CityDropdownDocument,
    options
  );
}
export function useCityDropdownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CityDropdownQuery,
    CityDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CityDropdownQuery, CityDropdownQueryVariables>(
    CityDropdownDocument,
    options
  );
}
export type CityDropdownQueryHookResult = ReturnType<
  typeof useCityDropdownQuery
>;
export type CityDropdownLazyQueryHookResult = ReturnType<
  typeof useCityDropdownLazyQuery
>;
export type CityDropdownQueryResult = Apollo.QueryResult<
  CityDropdownQuery,
  CityDropdownQueryVariables
>;
export const QuestionListingDocument = gql`
  query QuestionListing($input: QuestionListingInput, $page: Int, $first: Int) {
    QuestionListing(input: $input, page: $page, first: $first) {
      data {
        question_id
        question_title
        question_value
        question_priority
        question_section
        question_status
        question_type
        question_value_column
      }
      paginatorInfo {
        ...PaginatorInfo
      }
    }
  }
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __useQuestionListingQuery__
 *
 * To run a query within a React component, call `useQuestionListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionListingQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useQuestionListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    QuestionListingQuery,
    QuestionListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<QuestionListingQuery, QuestionListingQueryVariables>(
    QuestionListingDocument,
    options
  );
}
export function useQuestionListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    QuestionListingQuery,
    QuestionListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    QuestionListingQuery,
    QuestionListingQueryVariables
  >(QuestionListingDocument, options);
}
export type QuestionListingQueryHookResult = ReturnType<
  typeof useQuestionListingQuery
>;
export type QuestionListingLazyQueryHookResult = ReturnType<
  typeof useQuestionListingLazyQuery
>;
export type QuestionListingQueryResult = Apollo.QueryResult<
  QuestionListingQuery,
  QuestionListingQueryVariables
>;
export const QuestionDetailDocument = gql`
  query QuestionDetail($question_id: Int) {
    QuestionDetail(question_id: $question_id) {
      question_id
      question_title
      question_value
      question_priority
      question_section
      question_status
      question_type
      question_value_column
    }
  }
`;

/**
 * __useQuestionDetailQuery__
 *
 * To run a query within a React component, call `useQuestionDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionDetailQuery({
 *   variables: {
 *      question_id: // value for 'question_id'
 *   },
 * });
 */
export function useQuestionDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    QuestionDetailQuery,
    QuestionDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<QuestionDetailQuery, QuestionDetailQueryVariables>(
    QuestionDetailDocument,
    options
  );
}
export function useQuestionDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    QuestionDetailQuery,
    QuestionDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<QuestionDetailQuery, QuestionDetailQueryVariables>(
    QuestionDetailDocument,
    options
  );
}
export type QuestionDetailQueryHookResult = ReturnType<
  typeof useQuestionDetailQuery
>;
export type QuestionDetailLazyQueryHookResult = ReturnType<
  typeof useQuestionDetailLazyQuery
>;
export type QuestionDetailQueryResult = Apollo.QueryResult<
  QuestionDetailQuery,
  QuestionDetailQueryVariables
>;
export const QuestionCreateDocument = gql`
  mutation QuestionCreate($input: QuestionInput) {
    QuestionCreate(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type QuestionCreateMutationFn = Apollo.MutationFunction<
  QuestionCreateMutation,
  QuestionCreateMutationVariables
>;

/**
 * __useQuestionCreateMutation__
 *
 * To run a mutation, you first call `useQuestionCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQuestionCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [questionCreateMutation, { data, loading, error }] = useQuestionCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useQuestionCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    QuestionCreateMutation,
    QuestionCreateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    QuestionCreateMutation,
    QuestionCreateMutationVariables
  >(QuestionCreateDocument, options);
}
export type QuestionCreateMutationHookResult = ReturnType<
  typeof useQuestionCreateMutation
>;
export type QuestionCreateMutationResult =
  Apollo.MutationResult<QuestionCreateMutation>;
export type QuestionCreateMutationOptions = Apollo.BaseMutationOptions<
  QuestionCreateMutation,
  QuestionCreateMutationVariables
>;
export const QuestionUpdateDocument = gql`
  mutation QuestionUpdate($input: QuestionInput) {
    QuestionUpdate(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type QuestionUpdateMutationFn = Apollo.MutationFunction<
  QuestionUpdateMutation,
  QuestionUpdateMutationVariables
>;

/**
 * __useQuestionUpdateMutation__
 *
 * To run a mutation, you first call `useQuestionUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQuestionUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [questionUpdateMutation, { data, loading, error }] = useQuestionUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useQuestionUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    QuestionUpdateMutation,
    QuestionUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    QuestionUpdateMutation,
    QuestionUpdateMutationVariables
  >(QuestionUpdateDocument, options);
}
export type QuestionUpdateMutationHookResult = ReturnType<
  typeof useQuestionUpdateMutation
>;
export type QuestionUpdateMutationResult =
  Apollo.MutationResult<QuestionUpdateMutation>;
export type QuestionUpdateMutationOptions = Apollo.BaseMutationOptions<
  QuestionUpdateMutation,
  QuestionUpdateMutationVariables
>;
export const QuestionDeleteDocument = gql`
  mutation QuestionDelete($question_id: Int) {
    QuestionDelete(question_id: $question_id) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type QuestionDeleteMutationFn = Apollo.MutationFunction<
  QuestionDeleteMutation,
  QuestionDeleteMutationVariables
>;

/**
 * __useQuestionDeleteMutation__
 *
 * To run a mutation, you first call `useQuestionDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQuestionDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [questionDeleteMutation, { data, loading, error }] = useQuestionDeleteMutation({
 *   variables: {
 *      question_id: // value for 'question_id'
 *   },
 * });
 */
export function useQuestionDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    QuestionDeleteMutation,
    QuestionDeleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    QuestionDeleteMutation,
    QuestionDeleteMutationVariables
  >(QuestionDeleteDocument, options);
}
export type QuestionDeleteMutationHookResult = ReturnType<
  typeof useQuestionDeleteMutation
>;
export type QuestionDeleteMutationResult =
  Apollo.MutationResult<QuestionDeleteMutation>;
export type QuestionDeleteMutationOptions = Apollo.BaseMutationOptions<
  QuestionDeleteMutation,
  QuestionDeleteMutationVariables
>;
export const CustomerQuestionListingDocument = gql`
  query CustomerQuestionListing($input: CustomerQuestionListingInput) {
    CustomerQuestionListing(input: $input) {
      data {
        customer_question_id
        customer_question_title
        customer_question_value
        customer_question_created
        question {
          question_id
          question_type
          question_value
        }
      }
    }
  }
`;

/**
 * __useCustomerQuestionListingQuery__
 *
 * To run a query within a React component, call `useCustomerQuestionListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerQuestionListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerQuestionListingQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCustomerQuestionListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CustomerQuestionListingQuery,
    CustomerQuestionListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CustomerQuestionListingQuery,
    CustomerQuestionListingQueryVariables
  >(CustomerQuestionListingDocument, options);
}
export function useCustomerQuestionListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CustomerQuestionListingQuery,
    CustomerQuestionListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CustomerQuestionListingQuery,
    CustomerQuestionListingQueryVariables
  >(CustomerQuestionListingDocument, options);
}
export type CustomerQuestionListingQueryHookResult = ReturnType<
  typeof useCustomerQuestionListingQuery
>;
export type CustomerQuestionListingLazyQueryHookResult = ReturnType<
  typeof useCustomerQuestionListingLazyQuery
>;
export type CustomerQuestionListingQueryResult = Apollo.QueryResult<
  CustomerQuestionListingQuery,
  CustomerQuestionListingQueryVariables
>;
export const CustomerContactPersonUpdateDocument = gql`
  mutation CustomerContactPersonUpdate(
    $input: CustomerContactPersonUpdateInput
  ) {
    CustomerContactPersonUpdate(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type CustomerContactPersonUpdateMutationFn = Apollo.MutationFunction<
  CustomerContactPersonUpdateMutation,
  CustomerContactPersonUpdateMutationVariables
>;

/**
 * __useCustomerContactPersonUpdateMutation__
 *
 * To run a mutation, you first call `useCustomerContactPersonUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerContactPersonUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerContactPersonUpdateMutation, { data, loading, error }] = useCustomerContactPersonUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCustomerContactPersonUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CustomerContactPersonUpdateMutation,
    CustomerContactPersonUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CustomerContactPersonUpdateMutation,
    CustomerContactPersonUpdateMutationVariables
  >(CustomerContactPersonUpdateDocument, options);
}
export type CustomerContactPersonUpdateMutationHookResult = ReturnType<
  typeof useCustomerContactPersonUpdateMutation
>;
export type CustomerContactPersonUpdateMutationResult =
  Apollo.MutationResult<CustomerContactPersonUpdateMutation>;
export type CustomerContactPersonUpdateMutationOptions =
  Apollo.BaseMutationOptions<
    CustomerContactPersonUpdateMutation,
    CustomerContactPersonUpdateMutationVariables
  >;
export const CustomerSsmUpdateDocument = gql`
  mutation CustomerSSMUpdate($input: CustomerSSMUpdateInput) {
    CustomerSSMUpdate(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type CustomerSsmUpdateMutationFn = Apollo.MutationFunction<
  CustomerSsmUpdateMutation,
  CustomerSsmUpdateMutationVariables
>;

/**
 * __useCustomerSsmUpdateMutation__
 *
 * To run a mutation, you first call `useCustomerSsmUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerSsmUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerSsmUpdateMutation, { data, loading, error }] = useCustomerSsmUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCustomerSsmUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CustomerSsmUpdateMutation,
    CustomerSsmUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CustomerSsmUpdateMutation,
    CustomerSsmUpdateMutationVariables
  >(CustomerSsmUpdateDocument, options);
}
export type CustomerSsmUpdateMutationHookResult = ReturnType<
  typeof useCustomerSsmUpdateMutation
>;
export type CustomerSsmUpdateMutationResult =
  Apollo.MutationResult<CustomerSsmUpdateMutation>;
export type CustomerSsmUpdateMutationOptions = Apollo.BaseMutationOptions<
  CustomerSsmUpdateMutation,
  CustomerSsmUpdateMutationVariables
>;
export const CustomerDetailsUpdateDocument = gql`
  mutation CustomerDetailsUpdate($input: CustomerDetailsUpdateInput) {
    CustomerDetailsUpdate(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type CustomerDetailsUpdateMutationFn = Apollo.MutationFunction<
  CustomerDetailsUpdateMutation,
  CustomerDetailsUpdateMutationVariables
>;

/**
 * __useCustomerDetailsUpdateMutation__
 *
 * To run a mutation, you first call `useCustomerDetailsUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerDetailsUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerDetailsUpdateMutation, { data, loading, error }] = useCustomerDetailsUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCustomerDetailsUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CustomerDetailsUpdateMutation,
    CustomerDetailsUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CustomerDetailsUpdateMutation,
    CustomerDetailsUpdateMutationVariables
  >(CustomerDetailsUpdateDocument, options);
}
export type CustomerDetailsUpdateMutationHookResult = ReturnType<
  typeof useCustomerDetailsUpdateMutation
>;
export type CustomerDetailsUpdateMutationResult =
  Apollo.MutationResult<CustomerDetailsUpdateMutation>;
export type CustomerDetailsUpdateMutationOptions = Apollo.BaseMutationOptions<
  CustomerDetailsUpdateMutation,
  CustomerDetailsUpdateMutationVariables
>;
export const PaymentReleasedReportDocument = gql`
  query PaymentReleasedReport($input: ReportInput) {
    PaymentReleasedReport(input: $input) {
      data {
        title
        payment_type
        year
        data
      }
      paginatorInfo {
        ...PaginatorInfo
      }
    }
  }
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __usePaymentReleasedReportQuery__
 *
 * To run a query within a React component, call `usePaymentReleasedReportQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentReleasedReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentReleasedReportQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentReleasedReportQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentReleasedReportQuery,
    PaymentReleasedReportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaymentReleasedReportQuery,
    PaymentReleasedReportQueryVariables
  >(PaymentReleasedReportDocument, options);
}
export function usePaymentReleasedReportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentReleasedReportQuery,
    PaymentReleasedReportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaymentReleasedReportQuery,
    PaymentReleasedReportQueryVariables
  >(PaymentReleasedReportDocument, options);
}
export type PaymentReleasedReportQueryHookResult = ReturnType<
  typeof usePaymentReleasedReportQuery
>;
export type PaymentReleasedReportLazyQueryHookResult = ReturnType<
  typeof usePaymentReleasedReportLazyQuery
>;
export type PaymentReleasedReportQueryResult = Apollo.QueryResult<
  PaymentReleasedReportQuery,
  PaymentReleasedReportQueryVariables
>;
export const PaymentRejectedReportDocument = gql`
  query PaymentRejectedReport($input: ReportInput) {
    PaymentRejectedReport(input: $input) {
      data {
        title
        payment_type
        year
        data
      }
      paginatorInfo {
        ...PaginatorInfo
      }
    }
  }
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __usePaymentRejectedReportQuery__
 *
 * To run a query within a React component, call `usePaymentRejectedReportQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentRejectedReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentRejectedReportQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentRejectedReportQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentRejectedReportQuery,
    PaymentRejectedReportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaymentRejectedReportQuery,
    PaymentRejectedReportQueryVariables
  >(PaymentRejectedReportDocument, options);
}
export function usePaymentRejectedReportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentRejectedReportQuery,
    PaymentRejectedReportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaymentRejectedReportQuery,
    PaymentRejectedReportQueryVariables
  >(PaymentRejectedReportDocument, options);
}
export type PaymentRejectedReportQueryHookResult = ReturnType<
  typeof usePaymentRejectedReportQuery
>;
export type PaymentRejectedReportLazyQueryHookResult = ReturnType<
  typeof usePaymentRejectedReportLazyQuery
>;
export type PaymentRejectedReportQueryResult = Apollo.QueryResult<
  PaymentRejectedReportQuery,
  PaymentRejectedReportQueryVariables
>;
export const PaymentRequestListingExportDocument = gql`
  query PaymentRequestListingExport($input: PaymentListingInput) {
    PaymentRequestListingExport(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;

/**
 * __usePaymentRequestListingExportQuery__
 *
 * To run a query within a React component, call `usePaymentRequestListingExportQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentRequestListingExportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentRequestListingExportQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentRequestListingExportQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentRequestListingExportQuery,
    PaymentRequestListingExportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaymentRequestListingExportQuery,
    PaymentRequestListingExportQueryVariables
  >(PaymentRequestListingExportDocument, options);
}
export function usePaymentRequestListingExportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentRequestListingExportQuery,
    PaymentRequestListingExportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaymentRequestListingExportQuery,
    PaymentRequestListingExportQueryVariables
  >(PaymentRequestListingExportDocument, options);
}
export type PaymentRequestListingExportQueryHookResult = ReturnType<
  typeof usePaymentRequestListingExportQuery
>;
export type PaymentRequestListingExportLazyQueryHookResult = ReturnType<
  typeof usePaymentRequestListingExportLazyQuery
>;
export type PaymentRequestListingExportQueryResult = Apollo.QueryResult<
  PaymentRequestListingExportQuery,
  PaymentRequestListingExportQueryVariables
>;
export const PaymentReleaseListingExportDocument = gql`
  query PaymentReleaseListingExport($input: PaymentScheduleListingInput) {
    PaymentReleaseListingExport(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;

/**
 * __usePaymentReleaseListingExportQuery__
 *
 * To run a query within a React component, call `usePaymentReleaseListingExportQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentReleaseListingExportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentReleaseListingExportQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentReleaseListingExportQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentReleaseListingExportQuery,
    PaymentReleaseListingExportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaymentReleaseListingExportQuery,
    PaymentReleaseListingExportQueryVariables
  >(PaymentReleaseListingExportDocument, options);
}
export function usePaymentReleaseListingExportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentReleaseListingExportQuery,
    PaymentReleaseListingExportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaymentReleaseListingExportQuery,
    PaymentReleaseListingExportQueryVariables
  >(PaymentReleaseListingExportDocument, options);
}
export type PaymentReleaseListingExportQueryHookResult = ReturnType<
  typeof usePaymentReleaseListingExportQuery
>;
export type PaymentReleaseListingExportLazyQueryHookResult = ReturnType<
  typeof usePaymentReleaseListingExportLazyQuery
>;
export type PaymentReleaseListingExportQueryResult = Apollo.QueryResult<
  PaymentReleaseListingExportQuery,
  PaymentReleaseListingExportQueryVariables
>;
export const PaymentRejectedReportExportDocument = gql`
  query PaymentRejectedReportExport($input: ReportInput) {
    PaymentRejectedReportExport(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;

/**
 * __usePaymentRejectedReportExportQuery__
 *
 * To run a query within a React component, call `usePaymentRejectedReportExportQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentRejectedReportExportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentRejectedReportExportQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentRejectedReportExportQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentRejectedReportExportQuery,
    PaymentRejectedReportExportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaymentRejectedReportExportQuery,
    PaymentRejectedReportExportQueryVariables
  >(PaymentRejectedReportExportDocument, options);
}
export function usePaymentRejectedReportExportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentRejectedReportExportQuery,
    PaymentRejectedReportExportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaymentRejectedReportExportQuery,
    PaymentRejectedReportExportQueryVariables
  >(PaymentRejectedReportExportDocument, options);
}
export type PaymentRejectedReportExportQueryHookResult = ReturnType<
  typeof usePaymentRejectedReportExportQuery
>;
export type PaymentRejectedReportExportLazyQueryHookResult = ReturnType<
  typeof usePaymentRejectedReportExportLazyQuery
>;
export type PaymentRejectedReportExportQueryResult = Apollo.QueryResult<
  PaymentRejectedReportExportQuery,
  PaymentRejectedReportExportQueryVariables
>;
export const PaymentReleasedReportExportDocument = gql`
  query PaymentReleasedReportExport($input: ReportInput) {
    PaymentReleasedReportExport(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;

/**
 * __usePaymentReleasedReportExportQuery__
 *
 * To run a query within a React component, call `usePaymentReleasedReportExportQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentReleasedReportExportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentReleasedReportExportQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentReleasedReportExportQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentReleasedReportExportQuery,
    PaymentReleasedReportExportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaymentReleasedReportExportQuery,
    PaymentReleasedReportExportQueryVariables
  >(PaymentReleasedReportExportDocument, options);
}
export function usePaymentReleasedReportExportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentReleasedReportExportQuery,
    PaymentReleasedReportExportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaymentReleasedReportExportQuery,
    PaymentReleasedReportExportQueryVariables
  >(PaymentReleasedReportExportDocument, options);
}
export type PaymentReleasedReportExportQueryHookResult = ReturnType<
  typeof usePaymentReleasedReportExportQuery
>;
export type PaymentReleasedReportExportLazyQueryHookResult = ReturnType<
  typeof usePaymentReleasedReportExportLazyQuery
>;
export type PaymentReleasedReportExportQueryResult = Apollo.QueryResult<
  PaymentReleasedReportExportQuery,
  PaymentReleasedReportExportQueryVariables
>;
export const PaymentListingExportDocument = gql`
  query PaymentListingExport($input: PaymentListingInput) {
    PaymentListingExport(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;

/**
 * __usePaymentListingExportQuery__
 *
 * To run a query within a React component, call `usePaymentListingExportQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentListingExportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentListingExportQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaymentListingExportQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaymentListingExportQuery,
    PaymentListingExportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaymentListingExportQuery,
    PaymentListingExportQueryVariables
  >(PaymentListingExportDocument, options);
}
export function usePaymentListingExportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaymentListingExportQuery,
    PaymentListingExportQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaymentListingExportQuery,
    PaymentListingExportQueryVariables
  >(PaymentListingExportDocument, options);
}
export type PaymentListingExportQueryHookResult = ReturnType<
  typeof usePaymentListingExportQuery
>;
export type PaymentListingExportLazyQueryHookResult = ReturnType<
  typeof usePaymentListingExportLazyQuery
>;
export type PaymentListingExportQueryResult = Apollo.QueryResult<
  PaymentListingExportQuery,
  PaymentListingExportQueryVariables
>;
export const DashboardAdminDocument = gql`
  query DashboardAdmin($year: Int) {
    DashboardAdmin {
      message
      total_application(year: $year) {
        total
        data {
          status
          applicant_count
        }
      }
      payment_request {
        total
        data {
          status
          payment_count
        }
      }
      total_customers(year: $year) {
        total_count
        increase_count
        data {
          month
          customer_count
        }
      }
      customer_conversion(year: $year) {
        total_rate
        data {
          month
          approved_count
          applicant_count
          conversion_rate
        }
      }
      sales_overview(year: $year) {
        year
        total_released_payment
        total_profit_by_charges
        data
      }
    }
  }
`;

/**
 * __useDashboardAdminQuery__
 *
 * To run a query within a React component, call `useDashboardAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardAdminQuery({
 *   variables: {
 *      year: // value for 'year'
 *   },
 * });
 */
export function useDashboardAdminQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DashboardAdminQuery,
    DashboardAdminQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DashboardAdminQuery, DashboardAdminQueryVariables>(
    DashboardAdminDocument,
    options
  );
}
export function useDashboardAdminLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DashboardAdminQuery,
    DashboardAdminQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DashboardAdminQuery, DashboardAdminQueryVariables>(
    DashboardAdminDocument,
    options
  );
}
export type DashboardAdminQueryHookResult = ReturnType<
  typeof useDashboardAdminQuery
>;
export type DashboardAdminLazyQueryHookResult = ReturnType<
  typeof useDashboardAdminLazyQuery
>;
export type DashboardAdminQueryResult = Apollo.QueryResult<
  DashboardAdminQuery,
  DashboardAdminQueryVariables
>;
export const DashboardPendingApproveApplicationDocument = gql`
  query DashboardPendingApproveApplication($first: Int, $page: Int) {
    DashboardAdmin {
      message
      pending_approve_application(first: $first, page: $page) {
        data {
          customer_id
          customer_address
          customer_address2
          setting_annual_revenue {
            setting_annual_revenue_id
            setting_annual_revenue_name
          }
          setting_company_size {
            setting_company_size_id
            setting_company_size_name
          }
          customer_contact_person
          customer_contact_person_mobile
          customer_created
          customer_mobile
          customer_name
          customer_email
          customer_registration_number
        }
        paginatorInfo {
          ...PaginatorInfo
        }
      }
    }
  }
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __useDashboardPendingApproveApplicationQuery__
 *
 * To run a query within a React component, call `useDashboardPendingApproveApplicationQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardPendingApproveApplicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardPendingApproveApplicationQuery({
 *   variables: {
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useDashboardPendingApproveApplicationQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DashboardPendingApproveApplicationQuery,
    DashboardPendingApproveApplicationQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DashboardPendingApproveApplicationQuery,
    DashboardPendingApproveApplicationQueryVariables
  >(DashboardPendingApproveApplicationDocument, options);
}
export function useDashboardPendingApproveApplicationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DashboardPendingApproveApplicationQuery,
    DashboardPendingApproveApplicationQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DashboardPendingApproveApplicationQuery,
    DashboardPendingApproveApplicationQueryVariables
  >(DashboardPendingApproveApplicationDocument, options);
}
export type DashboardPendingApproveApplicationQueryHookResult = ReturnType<
  typeof useDashboardPendingApproveApplicationQuery
>;
export type DashboardPendingApproveApplicationLazyQueryHookResult = ReturnType<
  typeof useDashboardPendingApproveApplicationLazyQuery
>;
export type DashboardPendingApproveApplicationQueryResult = Apollo.QueryResult<
  DashboardPendingApproveApplicationQuery,
  DashboardPendingApproveApplicationQueryVariables
>;
export const ContactUsListingDocument = gql`
  query ContactUsListing(
    $input: ContactUsListingInput
    $first: Int
    $page: Int
  ) {
    ContactUsListing(input: $input, first: $first, page: $page) {
      data {
        contact_us_id
        contact_us_user_firstname
        contact_us_user_lastname
        contact_us_user_email
        contact_us_company_name
        contact_us_message
        contact_us_status
        contact_us_action_admin_id
        contact_us_action_remark
      }
      paginatorInfo {
        ...PaginatorInfo
      }
    }
  }
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __useContactUsListingQuery__
 *
 * To run a query within a React component, call `useContactUsListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactUsListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactUsListingQuery({
 *   variables: {
 *      input: // value for 'input'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useContactUsListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ContactUsListingQuery,
    ContactUsListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ContactUsListingQuery, ContactUsListingQueryVariables>(
    ContactUsListingDocument,
    options
  );
}
export function useContactUsListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ContactUsListingQuery,
    ContactUsListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ContactUsListingQuery,
    ContactUsListingQueryVariables
  >(ContactUsListingDocument, options);
}
export type ContactUsListingQueryHookResult = ReturnType<
  typeof useContactUsListingQuery
>;
export type ContactUsListingLazyQueryHookResult = ReturnType<
  typeof useContactUsListingLazyQuery
>;
export type ContactUsListingQueryResult = Apollo.QueryResult<
  ContactUsListingQuery,
  ContactUsListingQueryVariables
>;
export const ContactUsPendingCountDocument = gql`
  query ContactUsPendingCount {
    ContactUsPendingCount
  }
`;

/**
 * __useContactUsPendingCountQuery__
 *
 * To run a query within a React component, call `useContactUsPendingCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactUsPendingCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactUsPendingCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useContactUsPendingCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ContactUsPendingCountQuery,
    ContactUsPendingCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ContactUsPendingCountQuery,
    ContactUsPendingCountQueryVariables
  >(ContactUsPendingCountDocument, options);
}
export function useContactUsPendingCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ContactUsPendingCountQuery,
    ContactUsPendingCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ContactUsPendingCountQuery,
    ContactUsPendingCountQueryVariables
  >(ContactUsPendingCountDocument, options);
}
export type ContactUsPendingCountQueryHookResult = ReturnType<
  typeof useContactUsPendingCountQuery
>;
export type ContactUsPendingCountLazyQueryHookResult = ReturnType<
  typeof useContactUsPendingCountLazyQuery
>;
export type ContactUsPendingCountQueryResult = Apollo.QueryResult<
  ContactUsPendingCountQuery,
  ContactUsPendingCountQueryVariables
>;
export const ContactUsUpdateDocument = gql`
  mutation ContactUsUpdate($input: ContactUsUpdateInput) {
    ContactUsUpdate(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type ContactUsUpdateMutationFn = Apollo.MutationFunction<
  ContactUsUpdateMutation,
  ContactUsUpdateMutationVariables
>;

/**
 * __useContactUsUpdateMutation__
 *
 * To run a mutation, you first call `useContactUsUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactUsUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactUsUpdateMutation, { data, loading, error }] = useContactUsUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContactUsUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ContactUsUpdateMutation,
    ContactUsUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ContactUsUpdateMutation,
    ContactUsUpdateMutationVariables
  >(ContactUsUpdateDocument, options);
}
export type ContactUsUpdateMutationHookResult = ReturnType<
  typeof useContactUsUpdateMutation
>;
export type ContactUsUpdateMutationResult =
  Apollo.MutationResult<ContactUsUpdateMutation>;
export type ContactUsUpdateMutationOptions = Apollo.BaseMutationOptions<
  ContactUsUpdateMutation,
  ContactUsUpdateMutationVariables
>;
export const ContactUsDeleteDocument = gql`
  mutation ContactUsDelete($contact_us_id: Int) {
    ContactUsDelete(contact_us_id: $contact_us_id) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type ContactUsDeleteMutationFn = Apollo.MutationFunction<
  ContactUsDeleteMutation,
  ContactUsDeleteMutationVariables
>;

/**
 * __useContactUsDeleteMutation__
 *
 * To run a mutation, you first call `useContactUsDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactUsDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactUsDeleteMutation, { data, loading, error }] = useContactUsDeleteMutation({
 *   variables: {
 *      contact_us_id: // value for 'contact_us_id'
 *   },
 * });
 */
export function useContactUsDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ContactUsDeleteMutation,
    ContactUsDeleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ContactUsDeleteMutation,
    ContactUsDeleteMutationVariables
  >(ContactUsDeleteDocument, options);
}
export type ContactUsDeleteMutationHookResult = ReturnType<
  typeof useContactUsDeleteMutation
>;
export type ContactUsDeleteMutationResult =
  Apollo.MutationResult<ContactUsDeleteMutation>;
export type ContactUsDeleteMutationOptions = Apollo.BaseMutationOptions<
  ContactUsDeleteMutation,
  ContactUsDeleteMutationVariables
>;
export const ContactUsStatusUpdateDocument = gql`
  mutation ContactUsStatusUpdate($input: ContactUsStatusUpdateInput) {
    ContactUsStatusUpdate(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type ContactUsStatusUpdateMutationFn = Apollo.MutationFunction<
  ContactUsStatusUpdateMutation,
  ContactUsStatusUpdateMutationVariables
>;

/**
 * __useContactUsStatusUpdateMutation__
 *
 * To run a mutation, you first call `useContactUsStatusUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactUsStatusUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactUsStatusUpdateMutation, { data, loading, error }] = useContactUsStatusUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContactUsStatusUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ContactUsStatusUpdateMutation,
    ContactUsStatusUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ContactUsStatusUpdateMutation,
    ContactUsStatusUpdateMutationVariables
  >(ContactUsStatusUpdateDocument, options);
}
export type ContactUsStatusUpdateMutationHookResult = ReturnType<
  typeof useContactUsStatusUpdateMutation
>;
export type ContactUsStatusUpdateMutationResult =
  Apollo.MutationResult<ContactUsStatusUpdateMutation>;
export type ContactUsStatusUpdateMutationOptions = Apollo.BaseMutationOptions<
  ContactUsStatusUpdateMutation,
  ContactUsStatusUpdateMutationVariables
>;
export const SettingListingDocument = gql`
  query SettingListing($keyword: String, $first: Int, $page: Int) {
    SettingListing(keyword: $keyword, first: $first, page: $page) {
      data {
        setting_id
        setting_slug
        setting_value
        setting_description
        is_editable
      }
      paginatorInfo {
        ...PaginatorInfo
      }
    }
  }
  ${PaginatorInfoFragmentDoc}
`;

/**
 * __useSettingListingQuery__
 *
 * To run a query within a React component, call `useSettingListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingListingQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useSettingListingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SettingListingQuery,
    SettingListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SettingListingQuery, SettingListingQueryVariables>(
    SettingListingDocument,
    options
  );
}
export function useSettingListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SettingListingQuery,
    SettingListingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SettingListingQuery, SettingListingQueryVariables>(
    SettingListingDocument,
    options
  );
}
export type SettingListingQueryHookResult = ReturnType<
  typeof useSettingListingQuery
>;
export type SettingListingLazyQueryHookResult = ReturnType<
  typeof useSettingListingLazyQuery
>;
export type SettingListingQueryResult = Apollo.QueryResult<
  SettingListingQuery,
  SettingListingQueryVariables
>;
export const SettingDetailDocument = gql`
  query SettingDetail($setting_slug: String) {
    SettingDetail(setting_slug: $setting_slug) {
      setting_id
      setting_slug
      setting_value
      setting_description
      is_editable
    }
  }
`;

/**
 * __useSettingDetailQuery__
 *
 * To run a query within a React component, call `useSettingDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingDetailQuery({
 *   variables: {
 *      setting_slug: // value for 'setting_slug'
 *   },
 * });
 */
export function useSettingDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SettingDetailQuery,
    SettingDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SettingDetailQuery, SettingDetailQueryVariables>(
    SettingDetailDocument,
    options
  );
}
export function useSettingDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SettingDetailQuery,
    SettingDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SettingDetailQuery, SettingDetailQueryVariables>(
    SettingDetailDocument,
    options
  );
}
export type SettingDetailQueryHookResult = ReturnType<
  typeof useSettingDetailQuery
>;
export type SettingDetailLazyQueryHookResult = ReturnType<
  typeof useSettingDetailLazyQuery
>;
export type SettingDetailQueryResult = Apollo.QueryResult<
  SettingDetailQuery,
  SettingDetailQueryVariables
>;
export const SettingUpdateDocument = gql`
  mutation SettingUpdate($input: SettingInput) {
    SettingUpdate(input: $input) {
      ...SuccessResponseInfo
    }
  }
  ${SuccessResponseInfoFragmentDoc}
`;
export type SettingUpdateMutationFn = Apollo.MutationFunction<
  SettingUpdateMutation,
  SettingUpdateMutationVariables
>;

/**
 * __useSettingUpdateMutation__
 *
 * To run a mutation, you first call `useSettingUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettingUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settingUpdateMutation, { data, loading, error }] = useSettingUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSettingUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SettingUpdateMutation,
    SettingUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SettingUpdateMutation,
    SettingUpdateMutationVariables
  >(SettingUpdateDocument, options);
}
export type SettingUpdateMutationHookResult = ReturnType<
  typeof useSettingUpdateMutation
>;
export type SettingUpdateMutationResult =
  Apollo.MutationResult<SettingUpdateMutation>;
export type SettingUpdateMutationOptions = Apollo.BaseMutationOptions<
  SettingUpdateMutation,
  SettingUpdateMutationVariables
>;
export const AnnualRevenueDropdownDocument = gql`
  query AnnualRevenueDropdown {
    AnnualRevenueDropdown {
      setting_annual_revenue_id
      setting_annual_revenue_name
    }
  }
`;

/**
 * __useAnnualRevenueDropdownQuery__
 *
 * To run a query within a React component, call `useAnnualRevenueDropdownQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnnualRevenueDropdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnnualRevenueDropdownQuery({
 *   variables: {
 *   },
 * });
 */
export function useAnnualRevenueDropdownQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AnnualRevenueDropdownQuery,
    AnnualRevenueDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    AnnualRevenueDropdownQuery,
    AnnualRevenueDropdownQueryVariables
  >(AnnualRevenueDropdownDocument, options);
}
export function useAnnualRevenueDropdownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AnnualRevenueDropdownQuery,
    AnnualRevenueDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AnnualRevenueDropdownQuery,
    AnnualRevenueDropdownQueryVariables
  >(AnnualRevenueDropdownDocument, options);
}
export type AnnualRevenueDropdownQueryHookResult = ReturnType<
  typeof useAnnualRevenueDropdownQuery
>;
export type AnnualRevenueDropdownLazyQueryHookResult = ReturnType<
  typeof useAnnualRevenueDropdownLazyQuery
>;
export type AnnualRevenueDropdownQueryResult = Apollo.QueryResult<
  AnnualRevenueDropdownQuery,
  AnnualRevenueDropdownQueryVariables
>;
export const CompanySizeDropdownDocument = gql`
  query CompanySizeDropdown {
    CompanySizeDropdown {
      setting_company_size_id
      setting_company_size_name
    }
  }
`;

/**
 * __useCompanySizeDropdownQuery__
 *
 * To run a query within a React component, call `useCompanySizeDropdownQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanySizeDropdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanySizeDropdownQuery({
 *   variables: {
 *   },
 * });
 */
export function useCompanySizeDropdownQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CompanySizeDropdownQuery,
    CompanySizeDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CompanySizeDropdownQuery,
    CompanySizeDropdownQueryVariables
  >(CompanySizeDropdownDocument, options);
}
export function useCompanySizeDropdownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CompanySizeDropdownQuery,
    CompanySizeDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CompanySizeDropdownQuery,
    CompanySizeDropdownQueryVariables
  >(CompanySizeDropdownDocument, options);
}
export type CompanySizeDropdownQueryHookResult = ReturnType<
  typeof useCompanySizeDropdownQuery
>;
export type CompanySizeDropdownLazyQueryHookResult = ReturnType<
  typeof useCompanySizeDropdownLazyQuery
>;
export type CompanySizeDropdownQueryResult = Apollo.QueryResult<
  CompanySizeDropdownQuery,
  CompanySizeDropdownQueryVariables
>;
