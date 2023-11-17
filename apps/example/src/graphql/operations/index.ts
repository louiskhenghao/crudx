import * as Types from '../@types/index';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PortalSignInMutationVariables = Types.Exact<{
  input: Types.PortalAuthSignInInput;
}>;

export type PortalSignInMutation = {
  __typename?: 'Mutation';
  portalSignIn: {
    __typename?: 'AccessToken';
    accessToken: string;
    expiresIn: number;
    refreshExpiresIn: number;
    refreshToken: string;
  };
};

export type GetPortalAuthProfileQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetPortalAuthProfileQuery = {
  __typename?: 'Query';
  getPortalAuthProfile?: {
    __typename?: 'PortalUser';
    createdAt: any;
    dateOfBirth?: any | null;
    email?: string | null;
    fullname: string;
    gender: Types.UserGenderType;
    id: number;
    lastLoginDate?: any | null;
    phoneCode?: string | null;
    phoneNumber?: string | null;
    reference?: string | null;
    status: Types.PortalUserStatusType;
    twoFactorEnabled: boolean;
    updatedAt: any;
    username?: string | null;
    addresses?: Array<{
      __typename?: 'PortalUserAddress';
      address1: string;
      address2: string;
      city: string;
      country: string;
      createdAt: any;
      id: number;
      postcode: string;
      state: string;
      updatedAt: any;
    }> | null;
    roles?: {
      __typename?: 'Role';
      id: number;
      name: string;
      description: string;
      createdAt: any;
      updatedAt: any;
      totalPortalUser?: number | null;
      permissions?: Array<{
        __typename?: 'Permission';
        id: number;
        name: string;
        slug: string;
        description?: string | null;
        module: Types.ModuleType;
        createdAt: any;
        updatedAt: any;
      }> | null;
    } | null;
  } | null;
};

export type ResetUserPasswordWithUrlMutationVariables = Types.Exact<{
  input: Types.ResetPasswordEmailInput;
}>;

export type ResetUserPasswordWithUrlMutation = {
  __typename?: 'Mutation';
  resetUserPasswordWithUrl: boolean;
};

export type ResetPortalUserPasswordWithUrlMutationVariables = Types.Exact<{
  input: Types.ResetPasswordEmailInput;
}>;

export type ResetPortalUserPasswordWithUrlMutation = {
  __typename?: 'Mutation';
  resetPortalUserPasswordWithUrl: boolean;
};

export type ForgotPortalPasswordWithOtpMutationVariables = Types.Exact<{
  input: Types.PasswordWithOtpInput;
}>;

export type ForgotPortalPasswordWithOtpMutation = {
  __typename?: 'Mutation';
  forgotPortalPasswordWithOTP: boolean;
};

export type PortalChangePasswordMutationVariables = Types.Exact<{
  input: Types.PortalAuthChangePasswordInput;
}>;

export type PortalChangePasswordMutation = {
  __typename?: 'Mutation';
  portalChangePassword: boolean;
};

export type GenerateOtpMutationVariables = Types.Exact<{
  input: Types.GenerateOtpInput;
}>;

export type GenerateOtpMutation = {
  __typename?: 'Mutation';
  generateOTP: number;
};

export type CustomerOtpSignInMutationVariables = Types.Exact<{
  input: Types.OtpSignInInput;
}>;

export type CustomerOtpSignInMutation = {
  __typename?: 'Mutation';
  otpSignIn: {
    __typename?: 'AccessToken';
    accessToken: string;
    expiresIn: number;
    refreshExpiresIn: number;
    refreshToken: string;
  };
};

export type CustomerSignInMutationVariables = Types.Exact<{
  input: Types.SignInInput;
}>;

export type CustomerSignInMutation = {
  __typename?: 'Mutation';
  signIn: {
    __typename?: 'AccessToken';
    accessToken: string;
    expiresIn: number;
    refreshExpiresIn: number;
    refreshToken: string;
  };
};

export type CustomerRegisterMutationVariables = Types.Exact<{
  input: Types.RegisterInput;
  token: Types.ValidateSecuredTokenInput;
}>;

export type CustomerRegisterMutation = {
  __typename?: 'Mutation';
  register: {
    __typename?: 'AccessToken';
    accessToken: string;
    expiresIn: number;
    refreshExpiresIn: number;
    refreshToken: string;
  };
};

export type GetCustomerAuthProfileQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetCustomerAuthProfileQuery = {
  __typename?: 'Query';
  getAuthProfile?: {
    __typename?: 'User';
    acceptedLoan: number;
    approvedLoan: number;
    createdAt: any;
    dateOfBirth?: any | null;
    ekycVerified: boolean;
    email?: string | null;
    fullname: string;
    gender: Types.UserGenderType;
    id: number;
    idNo: string;
    idType: string;
    loanOffered: number;
    phoneCode?: string | null;
    phoneNumber?: string | null;
    referralCode?: string | null;
    remark?: string | null;
    status: Types.UserStatusType;
    twoFactorEnabled: boolean;
    updatedAt: any;
    username?: string | null;
  } | null;
};

export type ForgotPasswordWithOtpMutationVariables = Types.Exact<{
  input: Types.PasswordWithOtpInput;
}>;

export type ForgotPasswordWithOtpMutation = {
  __typename?: 'Mutation';
  forgotPasswordWithOTP: boolean;
};

export type IsRegisterableMutationVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
}>;

export type IsRegisterableMutation = {
  __typename?: 'Mutation';
  isRegisterable: boolean;
};

export type ForgotPasswordMutationVariables = Types.Exact<{
  input: Types.PasswordInput;
}>;

export type ForgotPasswordMutation = {
  __typename?: 'Mutation';
  forgotPassword: boolean;
};

export type ValidateSecuredTokenQueryVariables = Types.Exact<{
  input: Types.ValidateSecuredTokenInput;
}>;

export type ValidateSecuredTokenQuery = {
  __typename?: 'Query';
  validateSecuredToken: boolean;
};

export type GenerateSignedUrlMutationVariables = Types.Exact<{
  input: Types.UploadRequest;
}>;

export type GenerateSignedUrlMutation = {
  __typename?: 'Mutation';
  generateSignedUrl: { __typename?: 'SignedUrl'; signedUrl: string };
};

export type UpdateUserProfileMutationVariables = Types.Exact<{
  input: Types.UpdateProfileInput;
}>;

export type UpdateUserProfileMutation = {
  __typename?: 'Mutation';
  updateUserProfile: {
    __typename?: 'User';
    acceptedLoan: number;
    approvedLoan: number;
    createdAt: any;
    dateOfBirth?: any | null;
    ekycVerified: boolean;
    email?: string | null;
    fullname: string;
    gender: Types.UserGenderType;
    id: number;
    idNo: string;
    idType: string;
    loanOffered: number;
    phoneCode?: string | null;
    phoneNumber?: string | null;
    referralCode?: string | null;
    remark?: string | null;
    status: Types.UserStatusType;
    twoFactorEnabled: boolean;
    updatedAt: any;
    username?: string | null;
  };
};

export type GetUsersQueryVariables = Types.Exact<{
  filter?: Types.UserFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.UserSort> | Types.UserSort;
}>;

export type GetUsersQuery = {
  __typename?: 'Query';
  getUsers: {
    __typename?: 'UserConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'User';
      acceptedLoan: number;
      approvedLoan: number;
      createdAt: any;
      dateOfBirth?: any | null;
      ekycVerified: boolean;
      email?: string | null;
      fullname: string;
      gender: Types.UserGenderType;
      id: number;
      idNo: string;
      idType: string;
      loanOffered: number;
      phoneCode?: string | null;
      phoneNumber?: string | null;
      referralCode?: string | null;
      remark?: string | null;
      status: Types.UserStatusType;
      totalApplication: number;
      twoFactorEnabled: boolean;
      updatedAt: any;
      username?: string | null;
      addresses?: Array<{
        __typename?: 'UserAddress';
        address1: string;
        address2: string;
        city: string;
        country: string;
        createdAt: any;
        id: number;
        latitude: string;
        longitude: string;
        postcode: string;
        state: string;
        updatedAt: any;
      }> | null;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type ExportCustomersQueryVariables = Types.Exact<{
  filter?: Types.UserFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.UserSort> | Types.UserSort;
}>;

export type ExportCustomersQuery = {
  __typename?: 'Query';
  exportCustomers: string;
};

export type GetUserQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  getUser: {
    __typename?: 'User';
    acceptedLoan: number;
    approvedLoan: number;
    createdAt: any;
    dateOfBirth?: any | null;
    ekycVerified: boolean;
    email?: string | null;
    fullname: string;
    gender: Types.UserGenderType;
    id: number;
    idNo: string;
    idType: string;
    loanOffered: number;
    phoneCode?: string | null;
    phoneNumber?: string | null;
    referralCode?: string | null;
    remark?: string | null;
    status: Types.UserStatusType;
    totalApplication: number;
    twoFactorEnabled: boolean;
    updatedAt: any;
    username?: string | null;
    addresses?: Array<{
      __typename?: 'UserAddress';
      address1: string;
      address2: string;
      city: string;
      country: string;
      createdAt: any;
      id: number;
      latitude: string;
      longitude: string;
      postcode: string;
      state: string;
      updatedAt: any;
    }> | null;
  };
};

export type UpdateOneUserMutationVariables = Types.Exact<{
  input: Types.UpdateOneUserInput;
}>;

export type UpdateOneUserMutation = {
  __typename?: 'Mutation';
  updateOneUser: {
    __typename?: 'User';
    acceptedLoan: number;
    approvedLoan: number;
    createdAt: any;
    dateOfBirth?: any | null;
    ekycVerified: boolean;
    email?: string | null;
    fullname: string;
    gender: Types.UserGenderType;
    id: number;
    idNo: string;
    idType: string;
    loanOffered: number;
    phoneCode?: string | null;
    phoneNumber?: string | null;
    referralCode?: string | null;
    remark?: string | null;
    status: Types.UserStatusType;
    totalApplication: number;
    twoFactorEnabled: boolean;
    updatedAt: any;
    username?: string | null;
    addresses?: Array<{
      __typename?: 'UserAddress';
      address1: string;
      address2: string;
      city: string;
      country: string;
      createdAt: any;
      id: number;
      latitude: string;
      longitude: string;
      postcode: string;
      state: string;
      updatedAt: any;
    }> | null;
  };
};

export type GetPortalUsersQueryVariables = Types.Exact<{
  filter?: Types.PortalUserFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.PortalUserSort> | Types.PortalUserSort;
}>;

export type GetPortalUsersQuery = {
  __typename?: 'Query';
  getPortalUsers: {
    __typename?: 'PortalUserConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'PortalUser';
      createdAt: any;
      dateOfBirth?: any | null;
      email?: string | null;
      fullname: string;
      gender: Types.UserGenderType;
      id: number;
      lastLoginDate?: any | null;
      phoneCode?: string | null;
      phoneNumber?: string | null;
      reference?: string | null;
      status: Types.PortalUserStatusType;
      twoFactorEnabled: boolean;
      updatedAt: any;
      username?: string | null;
      addresses?: Array<{
        __typename?: 'PortalUserAddress';
        address1: string;
        address2: string;
        city: string;
        country: string;
        createdAt: any;
        id: number;
        postcode: string;
        state: string;
        updatedAt: any;
      }> | null;
      roles?: {
        __typename?: 'Role';
        id: number;
        name: string;
        description: string;
        createdAt: any;
        updatedAt: any;
        totalPortalUser?: number | null;
        permissions?: Array<{
          __typename?: 'Permission';
          id: number;
          name: string;
          slug: string;
          description?: string | null;
          module: Types.ModuleType;
          createdAt: any;
          updatedAt: any;
        }> | null;
      } | null;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetPortalUserQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type GetPortalUserQuery = {
  __typename?: 'Query';
  getPortalUser: {
    __typename?: 'PortalUser';
    createdAt: any;
    dateOfBirth?: any | null;
    email?: string | null;
    fullname: string;
    gender: Types.UserGenderType;
    id: number;
    lastLoginDate?: any | null;
    phoneCode?: string | null;
    phoneNumber?: string | null;
    reference?: string | null;
    status: Types.PortalUserStatusType;
    twoFactorEnabled: boolean;
    updatedAt: any;
    username?: string | null;
    addresses?: Array<{
      __typename?: 'PortalUserAddress';
      address1: string;
      address2: string;
      city: string;
      country: string;
      createdAt: any;
      id: number;
      postcode: string;
      state: string;
      updatedAt: any;
    }> | null;
    roles?: {
      __typename?: 'Role';
      id: number;
      name: string;
      description: string;
      createdAt: any;
      updatedAt: any;
      totalPortalUser?: number | null;
      permissions?: Array<{
        __typename?: 'Permission';
        id: number;
        name: string;
        slug: string;
        description?: string | null;
        module: Types.ModuleType;
        createdAt: any;
        updatedAt: any;
      }> | null;
    } | null;
  };
};

export type CreatePortalUserMutationVariables = Types.Exact<{
  input: Types.CreatePortalUserInput;
}>;

export type CreatePortalUserMutation = {
  __typename?: 'Mutation';
  createPortalUser: {
    __typename?: 'PortalUser';
    createdAt: any;
    dateOfBirth?: any | null;
    email?: string | null;
    fullname: string;
    gender: Types.UserGenderType;
    id: number;
    lastLoginDate?: any | null;
    phoneCode?: string | null;
    phoneNumber?: string | null;
    reference?: string | null;
    status: Types.PortalUserStatusType;
    twoFactorEnabled: boolean;
    updatedAt: any;
    username?: string | null;
    addresses?: Array<{
      __typename?: 'PortalUserAddress';
      address1: string;
      address2: string;
      city: string;
      country: string;
      createdAt: any;
      id: number;
      postcode: string;
      state: string;
      updatedAt: any;
    }> | null;
    roles?: {
      __typename?: 'Role';
      id: number;
      name: string;
      description: string;
      createdAt: any;
      updatedAt: any;
      totalPortalUser?: number | null;
      permissions?: Array<{
        __typename?: 'Permission';
        id: number;
        name: string;
        slug: string;
        description?: string | null;
        module: Types.ModuleType;
        createdAt: any;
        updatedAt: any;
      }> | null;
    } | null;
  };
};

export type UpdatePortalUserMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  update: Types.UpdatePortalUserInput;
}>;

export type UpdatePortalUserMutation = {
  __typename?: 'Mutation';
  updatePortalUser: {
    __typename?: 'PortalUser';
    createdAt: any;
    dateOfBirth?: any | null;
    email?: string | null;
    fullname: string;
    gender: Types.UserGenderType;
    id: number;
    lastLoginDate?: any | null;
    phoneCode?: string | null;
    phoneNumber?: string | null;
    reference?: string | null;
    status: Types.PortalUserStatusType;
    twoFactorEnabled: boolean;
    updatedAt: any;
    username?: string | null;
    addresses?: Array<{
      __typename?: 'PortalUserAddress';
      address1: string;
      address2: string;
      city: string;
      country: string;
      createdAt: any;
      id: number;
      postcode: string;
      state: string;
      updatedAt: any;
    }> | null;
    roles?: {
      __typename?: 'Role';
      id: number;
      name: string;
      description: string;
      createdAt: any;
      updatedAt: any;
      totalPortalUser?: number | null;
      permissions?: Array<{
        __typename?: 'Permission';
        id: number;
        name: string;
        slug: string;
        description?: string | null;
        module: Types.ModuleType;
        createdAt: any;
        updatedAt: any;
      }> | null;
    } | null;
  };
};

export type GetHomeBannersQueryVariables = Types.Exact<{
  filter?: Types.HomeBannerFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.HomeBannerSort> | Types.HomeBannerSort;
}>;

export type GetHomeBannersQuery = {
  __typename?: 'Query';
  getHomeBanners: {
    __typename?: 'HomeBannerOffsetConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'HomeBanner';
      actions: string;
      createdAt: any;
      id: number;
      image: any;
      isInternalLink: boolean;
      mobileImage?: any | null;
      priority: number;
      status: Types.GeneralStatusType;
      title: string;
      updatedAt: any;
      url: string;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetPortalHomeBannerQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type GetPortalHomeBannerQuery = {
  __typename?: 'Query';
  getPortalHomeBanner: {
    __typename?: 'HomeBanner';
    actions: string;
    createdAt: any;
    id: number;
    image: any;
    isInternalLink: boolean;
    mobileImage?: any | null;
    priority: number;
    status: Types.GeneralStatusType;
    title: string;
    updatedAt: any;
    url: string;
  };
};

export type GetPortalHomeBannersQueryVariables = Types.Exact<{
  filter?: Types.HomeBannerFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.HomeBannerSort> | Types.HomeBannerSort;
}>;

export type GetPortalHomeBannersQuery = {
  __typename?: 'Query';
  getPortalHomeBanners: {
    __typename?: 'HomeBannerConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'HomeBanner';
      actions: string;
      createdAt: any;
      id: number;
      image: any;
      isInternalLink: boolean;
      mobileImage?: any | null;
      priority: number;
      status: Types.GeneralStatusType;
      title: string;
      updatedAt: any;
      url: string;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type CreateOneHomeBannerMutationVariables = Types.Exact<{
  input: Types.CreateHomeBannerInput;
}>;

export type CreateOneHomeBannerMutation = {
  __typename?: 'Mutation';
  createOneHomeBanner: {
    __typename?: 'HomeBanner';
    actions: string;
    createdAt: any;
    id: number;
    image: any;
    isInternalLink: boolean;
    mobileImage?: any | null;
    priority: number;
    status: Types.GeneralStatusType;
    title: string;
    updatedAt: any;
    url: string;
  };
};

export type UpdateOneHomeBannerMutationVariables = Types.Exact<{
  input: Types.UpdateOneHomeBannerInput;
}>;

export type UpdateOneHomeBannerMutation = {
  __typename?: 'Mutation';
  updateOneHomeBanner: {
    __typename?: 'HomeBanner';
    actions: string;
    createdAt: any;
    id: number;
    image: any;
    isInternalLink: boolean;
    mobileImage?: any | null;
    priority: number;
    status: Types.GeneralStatusType;
    title: string;
    updatedAt: any;
    url: string;
  };
};

export type DeleteOneHomeBannerMutationVariables = Types.Exact<{
  input: Types.DeleteOneHomeBannerInput;
}>;

export type DeleteOneHomeBannerMutation = {
  __typename?: 'Mutation';
  deleteOneHomeBanner: {
    __typename?: 'HomeBannerDeleteResponse';
    actions?: string | null;
    createdAt?: any | null;
    id?: number | null;
    image?: any | null;
    isInternalLink?: boolean | null;
    mobileImage?: any | null;
    priority?: number | null;
    status?: Types.GeneralStatusType | null;
    title?: string | null;
    updatedAt?: any | null;
    url?: string | null;
  };
};

export type GetPortalApplicationsQueryVariables = Types.Exact<{
  filter?: Types.ApplicationDtoFilter;
  modelName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.ApplicationDtoSort> | Types.ApplicationDtoSort;
}>;

export type GetPortalApplicationsQuery = {
  __typename?: 'Query';
  getPortalApplications: {
    __typename?: 'ApplicationDtoOffsetConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'ApplicationDto';
      actionRequires?: any | null;
      address: any;
      createdAt: any;
      dateApplied?: any | null;
      dateApproved?: any | null;
      deposit: number;
      dipOffered?: any | null;
      emergencyContact: any;
      employmentDetails: any;
      finalApproved?: any | null;
      financeAmount: number;
      financialPlanSnapshot: any;
      id: number;
      monthlyInstalment: number;
      motorCarSnapshot: any;
      motorcarSwap?: boolean | null;
      outletSnapshot: any;
      profitRate: number;
      refNo: string;
      salutation?: string | null;
      status: Types.ApplicationStatusType;
      updatedAt: any;
      userId: number;
      customer?: {
        __typename?: 'User';
        acceptedLoan: number;
        approvedLoan: number;
        createdAt: any;
        dateOfBirth?: any | null;
        ekycVerified: boolean;
        email?: string | null;
        fullname: string;
        gender: Types.UserGenderType;
        id: number;
        idNo: string;
        idType: string;
        loanOffered: number;
        phoneCode?: string | null;
        phoneNumber?: string | null;
        referralCode?: string | null;
        remark?: string | null;
        status: Types.UserStatusType;
        totalApplication: number;
        twoFactorEnabled: boolean;
        updatedAt: any;
        username?: string | null;
        addresses?: Array<{
          __typename?: 'UserAddress';
          address1: string;
          address2: string;
          city: string;
          country: string;
          createdAt: any;
          id: number;
          latitude: string;
          longitude: string;
          postcode: string;
          state: string;
          updatedAt: any;
        }> | null;
      } | null;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetPortalApplicationQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type GetPortalApplicationQuery = {
  __typename?: 'Query';
  getPortalApplication: {
    __typename?: 'ApplicationDto';
    actionRequires?: any | null;
    address: any;
    createdAt: any;
    dateApplied?: any | null;
    dateApproved?: any | null;
    deposit: number;
    dipOffered?: any | null;
    emergencyContact: any;
    employmentDetails: any;
    finalApproved?: any | null;
    financeAmount: number;
    financialPlanSnapshot: any;
    id: number;
    monthlyInstalment: number;
    motorCarSnapshot: any;
    motorcarSwap?: boolean | null;
    outletSnapshot: any;
    profitRate: number;
    refNo: string;
    salutation?: string | null;
    status: Types.ApplicationStatusType;
    updatedAt: any;
    userId: number;
    customer?: {
      __typename?: 'User';
      acceptedLoan: number;
      approvedLoan: number;
      createdAt: any;
      dateOfBirth?: any | null;
      ekycVerified: boolean;
      email?: string | null;
      fullname: string;
      gender: Types.UserGenderType;
      id: number;
      idNo: string;
      idType: string;
      loanOffered: number;
      phoneCode?: string | null;
      phoneNumber?: string | null;
      referralCode?: string | null;
      remark?: string | null;
      status: Types.UserStatusType;
      totalApplication: number;
      twoFactorEnabled: boolean;
      updatedAt: any;
      username?: string | null;
      addresses?: Array<{
        __typename?: 'UserAddress';
        address1: string;
        address2: string;
        city: string;
        country: string;
        createdAt: any;
        id: number;
        latitude: string;
        longitude: string;
        postcode: string;
        state: string;
        updatedAt: any;
      }> | null;
    } | null;
  };
};

export type CreateOneFinancialPlanMutationVariables = Types.Exact<{
  input: Types.CreateFinancialPlanInput;
}>;

export type CreateOneFinancialPlanMutation = {
  __typename?: 'Mutation';
  createOneFinancialPlan: {
    __typename?: 'BasicFinancialPlan';
    autoAssign: boolean;
    calculationMethod: Types.FinancialPlanCalculationType;
    conditions: any;
    createdAt: any;
    id: number;
    image?: any | null;
    isFeatured: boolean;
    maxFinanceRate?: number | null;
    maxTenure?: number | null;
    name: string;
    profitRate: number;
    status: Types.GeneralStatusType;
    tenure: any;
    updatedAt: any;
  };
};

export type GetFinancialPlansQueryVariables = Types.Exact<{
  filter?: Types.FinancialPlanFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.FinancialPlanSort> | Types.FinancialPlanSort;
}>;

export type GetFinancialPlansQuery = {
  __typename?: 'Query';
  getFeatureFinancialPlans: {
    __typename?: 'FinancialPlanOffsetConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'FinancialPlan';
      autoAssign: boolean;
      conditions: any;
      createdAt: any;
      description?: string | null;
      id: number;
      image?: any | null;
      isFeatured: boolean;
      maxFinanceRate?: number | null;
      maxTenure?: number | null;
      name: string;
      profitRate: number;
      status: Types.GeneralStatusType;
      tenure: any;
      updatedAt: any;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetPortalFinancialsPlansQueryVariables = Types.Exact<{
  filter?: Types.BasicFinancialPlanFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.BasicFinancialPlanSort> | Types.BasicFinancialPlanSort;
}>;

export type GetPortalFinancialsPlansQuery = {
  __typename?: 'Query';
  getPortalFinancialsPlans: {
    __typename?: 'BasicFinancialPlanConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'BasicFinancialPlan';
      autoAssign: boolean;
      calculationMethod: Types.FinancialPlanCalculationType;
      conditions: any;
      createdAt: any;
      id: number;
      image?: any | null;
      isFeatured: boolean;
      maxFinanceRate?: number | null;
      maxTenure?: number | null;
      name: string;
      profitRate: number;
      status: Types.GeneralStatusType;
      tenure: any;
      updatedAt: any;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type UpdateOneFinancialPlanMutationVariables = Types.Exact<{
  input: Types.UpdateOneFinancialPlanInput;
}>;

export type UpdateOneFinancialPlanMutation = {
  __typename?: 'Mutation';
  updateOneFinancialPlan: {
    __typename?: 'BasicFinancialPlan';
    autoAssign: boolean;
    calculationMethod: Types.FinancialPlanCalculationType;
    conditions: any;
    createdAt: any;
    id: number;
    image?: any | null;
    isFeatured: boolean;
    maxFinanceRate?: number | null;
    maxTenure?: number | null;
    name: string;
    profitRate: number;
    status: Types.GeneralStatusType;
    tenure: any;
    updatedAt: any;
  };
};

export type GetPortalFinancialsPlanQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type GetPortalFinancialsPlanQuery = {
  __typename?: 'Query';
  getPortalFinancialsPlan: {
    __typename?: 'BasicFinancialPlan';
    autoAssign: boolean;
    calculationMethod: Types.FinancialPlanCalculationType;
    conditions: any;
    createdAt: any;
    id: number;
    image?: any | null;
    isFeatured: boolean;
    maxFinanceRate?: number | null;
    maxTenure?: number | null;
    name: string;
    profitRate: number;
    status: Types.GeneralStatusType;
    tenure: any;
    updatedAt: any;
  };
};

export type DeleteOneFinancialPlanMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type DeleteOneFinancialPlanMutation = {
  __typename?: 'Mutation';
  deleteOneFinancialPlan: boolean;
};

export type CreateApplicationMutationVariables = Types.Exact<{
  input: Types.CreateApplicationInput;
  safeAsDraft?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  supportDocs?: Types.InputMaybe<Array<Types.ImageInput> | Types.ImageInput>;
}>;

export type CreateApplicationMutation = {
  __typename?: 'Mutation';
  createApplication: {
    __typename?: 'ApplicationDto';
    actionRequires?: any | null;
    address: any;
    createdAt: any;
    dateApplied?: any | null;
    deposit: number;
    employmentDetails: any;
    financeAmount: number;
    financialPlanSnapshot: any;
    emergencyContact: any;
    id: number;
    monthlyInstalment: number;
    motorCarSnapshot: any;
    motorcarSwap?: boolean | null;
    outletSnapshot: any;
    profitRate: number;
    refNo: string;
    salutation?: string | null;
    status: Types.ApplicationStatusType;
    updatedAt: any;
    userId: number;
  };
};

export type CancelApplicationMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type CancelApplicationMutation = {
  __typename?: 'Mutation';
  cancelApplication: {
    __typename?: 'ApplicationDto';
    actionRequires?: any | null;
    address: any;
    createdAt: any;
    dateApplied?: any | null;
    deposit: number;
    employmentDetails: any;
    financeAmount: number;
    financialPlanSnapshot: any;
    emergencyContact: any;
    id: number;
    monthlyInstalment: number;
    motorCarSnapshot: any;
    motorcarSwap?: boolean | null;
    outletSnapshot: any;
    profitRate: number;
    refNo: string;
    salutation?: string | null;
    status: Types.ApplicationStatusType;
    updatedAt: any;
    userId: number;
  };
};

export type UpdateApplicationMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  safeAsDraft?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  supportDocs?: Types.InputMaybe<Array<Types.ImageInput> | Types.ImageInput>;
  update: Types.ComputeUpdateApplicationInput;
}>;

export type UpdateApplicationMutation = {
  __typename?: 'Mutation';
  updateApplication: {
    __typename?: 'ApplicationDto';
    actionRequires?: any | null;
    address: any;
    createdAt: any;
    dateApplied?: any | null;
    deposit: number;
    employmentDetails: any;
    financeAmount: number;
    financialPlanSnapshot: any;
    emergencyContact: any;
    id: number;
    monthlyInstalment: number;
    motorCarSnapshot: any;
    motorcarSwap?: boolean | null;
    outletSnapshot: any;
    profitRate: number;
    refNo: string;
    salutation?: string | null;
    status: Types.ApplicationStatusType;
    updatedAt: any;
    userId: number;
  };
};

export type HasApplicationQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<
    Array<Types.ApplicationStatusType> | Types.ApplicationStatusType
  >;
}>;

export type HasApplicationQuery = {
  __typename?: 'Query';
  hasApplication: boolean;
};

export type GetApplicationByStatusQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.ApplicationStatusType>;
}>;

export type GetApplicationByStatusQuery = {
  __typename?: 'Query';
  getApplicationByStatus?: {
    __typename?: 'ApplicationDto';
    actionRequires?: any | null;
    address: any;
    createdAt: any;
    dateApplied?: any | null;
    deposit: number;
    employmentDetails: any;
    financeAmount: number;
    financialPlanSnapshot: any;
    emergencyContact: any;
    id: number;
    monthlyInstalment: number;
    motorCarSnapshot: any;
    motorcarSwap?: boolean | null;
    outletSnapshot: any;
    profitRate: number;
    refNo: string;
    salutation?: string | null;
    status: Types.ApplicationStatusType;
    updatedAt: any;
    userId: number;
  } | null;
};

export type GetPortalOutletsQueryVariables = Types.Exact<{
  filter?: Types.OutletFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.OutletSort> | Types.OutletSort;
}>;

export type GetPortalOutletsQuery = {
  __typename?: 'Query';
  getPortalOutlets: {
    __typename?: 'OutletConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'Outlet';
      address1: string;
      address2: string;
      city: string;
      code: string;
      country: string;
      createdAt: any;
      email: string;
      faxNo?: string | null;
      id: number;
      images: any;
      isFeatured: boolean;
      latitude: string;
      longitude: string;
      name: string;
      postcode: string;
      profileImage?: any | null;
      registrationNo: string;
      state: string;
      status: Types.OutletStatusType;
      totalApplications: number;
      totalMotorcar: number;
      updatedAt: any;
      verified: boolean;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type ExportOutletsQueryVariables = Types.Exact<{
  filter?: Types.OutletFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.OutletSort> | Types.OutletSort;
}>;

export type ExportOutletsQuery = {
  __typename?: 'Query';
  exportOutlets: string;
};

export type GetPortalOutletQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type GetPortalOutletQuery = {
  __typename?: 'Query';
  getPortalOutlet: {
    __typename?: 'Outlet';
    address1: string;
    address2: string;
    city: string;
    code: string;
    country: string;
    createdAt: any;
    email: string;
    faxNo?: string | null;
    id: number;
    images: any;
    isFeatured: boolean;
    latitude: string;
    longitude: string;
    name: string;
    postcode: string;
    profileImage?: any | null;
    registrationNo: string;
    state: string;
    status: Types.OutletStatusType;
    totalApplications: number;
    totalMotorcar: number;
    updatedAt: any;
    verified: boolean;
  };
};

export type CreateOneOutletMutationVariables = Types.Exact<{
  input: Types.CreateOutletInput;
}>;

export type CreateOneOutletMutation = {
  __typename?: 'Mutation';
  createOneOutlet: {
    __typename?: 'Outlet';
    address1: string;
    address2: string;
    city: string;
    code: string;
    country: string;
    createdAt: any;
    email: string;
    faxNo?: string | null;
    id: number;
    images: any;
    isFeatured: boolean;
    latitude: string;
    longitude: string;
    name: string;
    postcode: string;
    profileImage?: any | null;
    registrationNo: string;
    state: string;
    status: Types.OutletStatusType;
    totalApplications: number;
    totalMotorcar: number;
    updatedAt: any;
    verified: boolean;
  };
};

export type UpdateOneOutletMutationVariables = Types.Exact<{
  input: Types.UpdateOneOutletInput;
}>;

export type UpdateOneOutletMutation = {
  __typename?: 'Mutation';
  updateOneOutlet: {
    __typename?: 'Outlet';
    address1: string;
    address2: string;
    city: string;
    code: string;
    country: string;
    createdAt: any;
    email: string;
    faxNo?: string | null;
    id: number;
    images: any;
    isFeatured: boolean;
    latitude: string;
    longitude: string;
    name: string;
    postcode: string;
    profileImage?: any | null;
    registrationNo: string;
    state: string;
    status: Types.OutletStatusType;
    totalApplications: number;
    totalMotorcar: number;
    updatedAt: any;
    verified: boolean;
  };
};

export type AssignOutletMotorcarMutationVariables = Types.Exact<{
  input: Types.AssignOutletMotorcarInput;
}>;

export type AssignOutletMotorcarMutation = {
  __typename?: 'Mutation';
  assignOutletMotorcar: {
    __typename?: 'Outlet';
    address1: string;
    address2: string;
    city: string;
    code: string;
    country: string;
    createdAt: any;
    email: string;
    faxNo?: string | null;
    id: number;
    images: any;
    isFeatured: boolean;
    latitude: string;
    longitude: string;
    name: string;
    postcode: string;
    profileImage?: any | null;
    registrationNo: string;
    state: string;
    status: Types.OutletStatusType;
    totalApplications: number;
    totalMotorcar: number;
    updatedAt: any;
    verified: boolean;
  };
};

export type GetMiscByKeyQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.MiscType>;
}>;

export type GetMiscByKeyQuery = {
  __typename?: 'Query';
  getMiscByKey: {
    __typename?: 'Misc';
    createdAt: any;
    id: number;
    key: Types.MiscType;
    status: Types.GeneralStatusType;
    updatedAt: any;
    value: any;
  };
};

export type CreateOneMiscMutationVariables = Types.Exact<{
  input: Types.CreateOneMiscInput;
}>;

export type CreateOneMiscMutation = {
  __typename?: 'Mutation';
  createOneMisc: {
    __typename?: 'Misc';
    createdAt: any;
    id: number;
    key: Types.MiscType;
    status: Types.GeneralStatusType;
    updatedAt: any;
    value: any;
  };
};

export type GetPortalPoliciesQueryVariables = Types.Exact<{
  filter?: Types.MiscFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.MiscSort> | Types.MiscSort;
}>;

export type GetPortalPoliciesQuery = {
  __typename?: 'Query';
  getPortalPolicies: {
    __typename?: 'MiscOffsetConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'Misc';
      createdAt: any;
      id: number;
      key: Types.MiscType;
      status: Types.GeneralStatusType;
      updatedAt: any;
      value: any;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetPortalMiscQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type GetPortalMiscQuery = {
  __typename?: 'Query';
  getPortalMisc: {
    __typename?: 'Misc';
    createdAt: any;
    id: number;
    key: Types.MiscType;
    status: Types.GeneralStatusType;
    updatedAt: any;
    value: any;
  };
};

export type UpdateOneMiscMutationVariables = Types.Exact<{
  input: Types.UpdateOneMiscInput;
}>;

export type UpdateOneMiscMutation = {
  __typename?: 'Mutation';
  updateOneMisc: {
    __typename?: 'Misc';
    createdAt: any;
    id: number;
    key: Types.MiscType;
    status: Types.GeneralStatusType;
    updatedAt: any;
    value: any;
  };
};

export type GetMotorCarQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['Float']['input']>;
  slug?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type GetMotorCarQuery = {
  __typename?: 'Query';
  getMotorCar?: {
    __typename?: 'MotorCar';
    createdAt: any;
    id: number;
    modelName: string;
    slug: string;
    description?: string | null;
    specification?: any | null;
    sellingPriceEM: number;
    sellingPriceWM: number;
    instalmentRate?: number | null;
    images?: any | null;
    totalPopularityCount?: number | null;
    brand?: {
      __typename?: 'BasicBrand';
      image?: any | null;
      name: string;
      slug: string;
    } | null;
    outlets?: Array<{
      __typename?: 'Outlet';
      address1: string;
      address2: string;
      city: string;
      code: string;
      country: string;
      createdAt: any;
      email: string;
      faxNo?: string | null;
      id: number;
      images: any;
      isFeatured: boolean;
      latitude: string;
      longitude: string;
      name: string;
      postcode: string;
      profileImage?: any | null;
      registrationNo: string;
      slug: string;
      state: string;
      status: Types.OutletStatusType;
      updatedAt: any;
      verified: boolean;
    }> | null;
    instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
    currentPromotion?: {
      __typename?: 'BasicPromotionDTO';
      description?: string | null;
      endDate: any;
      profitRateReduction: number;
      startDate: any;
      title: string;
      instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
    } | null;
    category?: {
      __typename?: 'BasicCategory';
      name: string;
      image?: any | null;
      categoryCode: string;
    } | null;
  } | null;
};

export type GetMotorCarsOutletQueryVariables = Types.Exact<{
  brandSlug?: Types.InputMaybe<Types.Scalars['String']['input']>;
  budget?: Types.InputMaybe<Types.Scalars['JSONObject']['input']>;
  categoryCode?: Types.InputMaybe<Types.Scalars['String']['input']>;
  filter?: Types.MotorCarFilter;
  hasPromotion?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  keyword?: Types.InputMaybe<Types.Scalars['String']['input']>;
  outletStates?: Types.InputMaybe<
    Array<Types.Scalars['String']['input']> | Types.Scalars['String']['input']
  >;
  outletIds?: Types.InputMaybe<
    Array<Types.Scalars['Float']['input']> | Types.Scalars['Float']['input']
  >;
  paging?: Types.OffsetPaging;
  popular?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  rangeSpecification?: Types.InputMaybe<Types.Scalars['JSONObject']['input']>;
  sorting?: Array<Types.MotorCarSort> | Types.MotorCarSort;
  specification?: Types.InputMaybe<Types.Scalars['JSONObject']['input']>;
}>;

export type GetMotorCarsOutletQuery = {
  __typename?: 'Query';
  getMotorCars: {
    __typename?: 'MotorCarOffsetConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'MotorCar';
      createdAt: any;
      id: number;
      modelName: string;
      slug: string;
      description?: string | null;
      specification?: any | null;
      sellingPriceEM: number;
      sellingPriceWM: number;
      instalmentRate?: number | null;
      images?: any | null;
      totalPopularityCount?: number | null;
      brand?: {
        __typename?: 'BasicBrand';
        image?: any | null;
        name: string;
        slug: string;
      } | null;
      outlets?: Array<{
        __typename?: 'Outlet';
        address1: string;
        address2: string;
        city: string;
        code: string;
        country: string;
        createdAt: any;
        email: string;
        faxNo?: string | null;
        id: number;
        images: any;
        isFeatured: boolean;
        latitude: string;
        longitude: string;
        name: string;
        postcode: string;
        profileImage?: any | null;
        registrationNo: string;
        slug: string;
        state: string;
        status: Types.OutletStatusType;
        updatedAt: any;
        verified: boolean;
      }> | null;
      instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
      currentPromotion?: {
        __typename?: 'BasicPromotionDTO';
        description?: string | null;
        endDate: any;
        profitRateReduction: number;
        startDate: any;
        title: string;
        instalment?: {
          __typename?: 'Instalment';
          em: number;
          wm: number;
        } | null;
      } | null;
      category?: {
        __typename?: 'BasicCategory';
        name: string;
        image?: any | null;
        categoryCode: string;
      } | null;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetMotorCarsQueryVariables = Types.Exact<{
  brandSlug?: Types.InputMaybe<Types.Scalars['String']['input']>;
  budget?: Types.InputMaybe<Types.Scalars['JSONObject']['input']>;
  categoryCode?: Types.InputMaybe<Types.Scalars['String']['input']>;
  filter?: Types.MotorCarFilter;
  hasPromotion?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  keyword?: Types.InputMaybe<Types.Scalars['String']['input']>;
  outletStates?: Types.InputMaybe<
    Array<Types.Scalars['String']['input']> | Types.Scalars['String']['input']
  >;
  outletIds?: Types.InputMaybe<
    Array<Types.Scalars['Float']['input']> | Types.Scalars['Float']['input']
  >;
  paging?: Types.OffsetPaging;
  popular?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  rangeSpecification?: Types.InputMaybe<Types.Scalars['JSONObject']['input']>;
  sorting?: Array<Types.MotorCarSort> | Types.MotorCarSort;
  specification?: Types.InputMaybe<Types.Scalars['JSONObject']['input']>;
}>;

export type GetMotorCarsQuery = {
  __typename?: 'Query';
  getMotorCars: {
    __typename?: 'MotorCarOffsetConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'MotorCar';
      id: number;
      modelName: string;
      specification?: any | null;
      images?: any | null;
      slug: string;
      totalPopularityCount?: number | null;
      instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
      currentPromotion?: {
        __typename?: 'BasicPromotionDTO';
        instalment?: {
          __typename?: 'Instalment';
          em: number;
          wm: number;
        } | null;
      } | null;
      brand?: { __typename?: 'BasicBrand'; name: string; slug: string } | null;
      category?: {
        __typename?: 'BasicCategory';
        name: string;
        categoryCode: string;
      } | null;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetMotorCarCountWithFiltersQueryVariables = Types.Exact<{
  brandSlug?: Types.InputMaybe<Types.Scalars['String']['input']>;
  budget?: Types.InputMaybe<Types.Scalars['JSONObject']['input']>;
  categoryCode?: Types.InputMaybe<Types.Scalars['String']['input']>;
  filter?: Types.MotorCarFilter;
  hasPromotion?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  keyword?: Types.InputMaybe<Types.Scalars['String']['input']>;
  outletStates?: Types.InputMaybe<
    Array<Types.Scalars['String']['input']> | Types.Scalars['String']['input']
  >;
  outletIds?: Types.InputMaybe<
    Array<Types.Scalars['Float']['input']> | Types.Scalars['Float']['input']
  >;
  rangeSpecification?: Types.InputMaybe<Types.Scalars['JSONObject']['input']>;
  specification?: Types.InputMaybe<Types.Scalars['JSONObject']['input']>;
}>;

export type GetMotorCarCountWithFiltersQuery = {
  __typename?: 'Query';
  getMotorCarCountWithFilters: any;
};

export type GetMotorCarFiltersQueryVariables = Types.Exact<{
  brandSlug?: Types.InputMaybe<Types.Scalars['String']['input']>;
  budget?: Types.InputMaybe<Types.Scalars['JSONObject']['input']>;
  categoryCode?: Types.InputMaybe<Types.Scalars['String']['input']>;
  filter?: Types.MotorCarFilter;
  hasPromotion?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  keyword?: Types.InputMaybe<Types.Scalars['String']['input']>;
  outletStates?: Types.InputMaybe<
    Array<Types.Scalars['String']['input']> | Types.Scalars['String']['input']
  >;
  outletIds?: Types.InputMaybe<
    Array<Types.Scalars['Float']['input']> | Types.Scalars['Float']['input']
  >;
  rangeSpecification?: Types.InputMaybe<Types.Scalars['JSONObject']['input']>;
  specification?: Types.InputMaybe<Types.Scalars['JSONObject']['input']>;
}>;

export type GetMotorCarFiltersQuery = {
  __typename?: 'Query';
  getMotorCarFilters: any;
};

export type GetPortalMotorCarsQueryVariables = Types.Exact<{
  filter?: Types.MotorCarFilter;
  outletId?: Types.InputMaybe<Types.Scalars['Float']['input']>;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.MotorCarSort> | Types.MotorCarSort;
}>;

export type GetPortalMotorCarsQuery = {
  __typename?: 'Query';
  getPortalMotorCars: {
    __typename?: 'MotorCarOffsetConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'MotorCar';
      createdAt: any;
      description?: string | null;
      id: number;
      images?: any | null;
      instalmentRate?: number | null;
      modelName: string;
      popularityCount: number;
      sellingPriceEM: number;
      sellingPriceWM: number;
      specification?: any | null;
      status: Types.GeneralStatusType;
      updatedAt: any;
      brand?: {
        __typename?: 'BasicBrand';
        slug: string;
        image?: any | null;
        name: string;
        id: number;
      } | null;
      category?: {
        __typename?: 'BasicCategory';
        categoryCode: string;
        image?: any | null;
        name: string;
        id: number;
      } | null;
      financialPlan?: {
        __typename?: 'BasicFinancialPlan';
        autoAssign: boolean;
        calculationMethod: Types.FinancialPlanCalculationType;
        conditions: any;
        createdAt: any;
        description?: string | null;
        id: number;
        image?: any | null;
        name: string;
        profitRate: number;
        status: Types.GeneralStatusType;
        tenure: any;
        updatedAt: any;
      } | null;
      instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
      outlets?: Array<{
        __typename?: 'Outlet';
        address1: string;
        address2: string;
        city: string;
        code: string;
        country: string;
        createdAt: any;
        email: string;
        faxNo?: string | null;
        id: number;
        images: any;
        isFeatured: boolean;
        latitude: string;
        longitude: string;
        name: string;
        postcode: string;
        profileImage?: any | null;
        registrationNo: string;
        state: string;
        status: Types.OutletStatusType;
        totalApplications: number;
        totalMotorcar: number;
        updatedAt: any;
        verified: boolean;
      }> | null;
      currentPromotion?: {
        __typename?: 'BasicPromotionDTO';
        description?: string | null;
        endDate: any;
        profitRateReduction: number;
        startDate: any;
        title: string;
        instalment?: {
          __typename?: 'Instalment';
          em: number;
          wm: number;
        } | null;
      } | null;
      promotions?: {
        __typename?: 'BasicPromotionDTO';
        description?: string | null;
        endDate: any;
        profitRateReduction: number;
        startDate: any;
        title: string;
        id: number;
        instalment?: {
          __typename?: 'Instalment';
          em: number;
          wm: number;
        } | null;
      } | null;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type CreateOneMotorCarMutationVariables = Types.Exact<{
  input: Types.CreateMotorCarInput;
}>;

export type CreateOneMotorCarMutation = {
  __typename?: 'Mutation';
  createOneMotorCar?: {
    __typename?: 'MotorCar';
    createdAt: any;
    description?: string | null;
    id: number;
    images?: any | null;
    instalmentRate?: number | null;
    modelName: string;
    popularityCount: number;
    sellingPriceEM: number;
    sellingPriceWM: number;
    specification?: any | null;
    status: Types.GeneralStatusType;
    updatedAt: any;
    brand?: {
      __typename?: 'BasicBrand';
      slug: string;
      image?: any | null;
      name: string;
      id: number;
    } | null;
    category?: {
      __typename?: 'BasicCategory';
      categoryCode: string;
      image?: any | null;
      name: string;
      id: number;
    } | null;
    financialPlan?: {
      __typename?: 'BasicFinancialPlan';
      autoAssign: boolean;
      calculationMethod: Types.FinancialPlanCalculationType;
      conditions: any;
      createdAt: any;
      description?: string | null;
      id: number;
      image?: any | null;
      name: string;
      profitRate: number;
      status: Types.GeneralStatusType;
      tenure: any;
      updatedAt: any;
    } | null;
    instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
    outlets?: Array<{
      __typename?: 'Outlet';
      address1: string;
      address2: string;
      city: string;
      code: string;
      country: string;
      createdAt: any;
      email: string;
      faxNo?: string | null;
      id: number;
      images: any;
      isFeatured: boolean;
      latitude: string;
      longitude: string;
      name: string;
      postcode: string;
      profileImage?: any | null;
      registrationNo: string;
      state: string;
      status: Types.OutletStatusType;
      totalApplications: number;
      totalMotorcar: number;
      updatedAt: any;
      verified: boolean;
    }> | null;
    currentPromotion?: {
      __typename?: 'BasicPromotionDTO';
      description?: string | null;
      endDate: any;
      profitRateReduction: number;
      startDate: any;
      title: string;
      instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
    } | null;
    promotions?: {
      __typename?: 'BasicPromotionDTO';
      description?: string | null;
      endDate: any;
      profitRateReduction: number;
      startDate: any;
      title: string;
      id: number;
      instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
    } | null;
  } | null;
};

export type GetPortalMotorCarQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type GetPortalMotorCarQuery = {
  __typename?: 'Query';
  getPortalMotorCar?: {
    __typename?: 'MotorCar';
    createdAt: any;
    description?: string | null;
    id: number;
    images?: any | null;
    instalmentRate?: number | null;
    modelName: string;
    popularityCount: number;
    sellingPriceEM: number;
    sellingPriceWM: number;
    specification?: any | null;
    status: Types.GeneralStatusType;
    updatedAt: any;
    brand?: {
      __typename?: 'BasicBrand';
      slug: string;
      image?: any | null;
      name: string;
      id: number;
    } | null;
    category?: {
      __typename?: 'BasicCategory';
      categoryCode: string;
      image?: any | null;
      name: string;
      id: number;
    } | null;
    financialPlan?: {
      __typename?: 'BasicFinancialPlan';
      autoAssign: boolean;
      calculationMethod: Types.FinancialPlanCalculationType;
      conditions: any;
      createdAt: any;
      description?: string | null;
      id: number;
      image?: any | null;
      name: string;
      profitRate: number;
      status: Types.GeneralStatusType;
      tenure: any;
      updatedAt: any;
    } | null;
    instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
    outlets?: Array<{
      __typename?: 'Outlet';
      address1: string;
      address2: string;
      city: string;
      code: string;
      country: string;
      createdAt: any;
      email: string;
      faxNo?: string | null;
      id: number;
      images: any;
      isFeatured: boolean;
      latitude: string;
      longitude: string;
      name: string;
      postcode: string;
      profileImage?: any | null;
      registrationNo: string;
      state: string;
      status: Types.OutletStatusType;
      totalApplications: number;
      totalMotorcar: number;
      updatedAt: any;
      verified: boolean;
    }> | null;
    currentPromotion?: {
      __typename?: 'BasicPromotionDTO';
      description?: string | null;
      endDate: any;
      profitRateReduction: number;
      startDate: any;
      title: string;
      instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
    } | null;
    promotions?: {
      __typename?: 'BasicPromotionDTO';
      description?: string | null;
      endDate: any;
      profitRateReduction: number;
      startDate: any;
      title: string;
      id: number;
      instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
    } | null;
  } | null;
};

export type DeleteOneMotorCarMutationVariables = Types.Exact<{
  input: Types.DeleteOneMotorCarInput;
}>;

export type DeleteOneMotorCarMutation = {
  __typename?: 'Mutation';
  deleteOneMotorCar: {
    __typename?: 'MotorCarDeleteResponse';
    id?: number | null;
    modelName?: string | null;
    status?: Types.GeneralStatusType | null;
  };
};

export type UpdateOneMotorCarMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  input: Types.UpdateMotorCarInput;
}>;

export type UpdateOneMotorCarMutation = {
  __typename?: 'Mutation';
  updateOneMotorCar?: {
    __typename?: 'MotorCar';
    createdAt: any;
    description?: string | null;
    id: number;
    images?: any | null;
    instalmentRate?: number | null;
    modelName: string;
    popularityCount: number;
    sellingPriceEM: number;
    sellingPriceWM: number;
    specification?: any | null;
    status: Types.GeneralStatusType;
    updatedAt: any;
    brand?: {
      __typename?: 'BasicBrand';
      slug: string;
      image?: any | null;
      name: string;
      id: number;
    } | null;
    category?: {
      __typename?: 'BasicCategory';
      categoryCode: string;
      image?: any | null;
      name: string;
      id: number;
    } | null;
    financialPlan?: {
      __typename?: 'BasicFinancialPlan';
      autoAssign: boolean;
      calculationMethod: Types.FinancialPlanCalculationType;
      conditions: any;
      createdAt: any;
      description?: string | null;
      id: number;
      image?: any | null;
      name: string;
      profitRate: number;
      status: Types.GeneralStatusType;
      tenure: any;
      updatedAt: any;
    } | null;
    instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
    outlets?: Array<{
      __typename?: 'Outlet';
      address1: string;
      address2: string;
      city: string;
      code: string;
      country: string;
      createdAt: any;
      email: string;
      faxNo?: string | null;
      id: number;
      images: any;
      isFeatured: boolean;
      latitude: string;
      longitude: string;
      name: string;
      postcode: string;
      profileImage?: any | null;
      registrationNo: string;
      state: string;
      status: Types.OutletStatusType;
      totalApplications: number;
      totalMotorcar: number;
      updatedAt: any;
      verified: boolean;
    }> | null;
    currentPromotion?: {
      __typename?: 'BasicPromotionDTO';
      description?: string | null;
      endDate: any;
      profitRateReduction: number;
      startDate: any;
      title: string;
      instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
    } | null;
    promotions?: {
      __typename?: 'BasicPromotionDTO';
      description?: string | null;
      endDate: any;
      profitRateReduction: number;
      startDate: any;
      title: string;
      id: number;
      instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
    } | null;
  } | null;
};

export type GetCategoriesQueryVariables = Types.Exact<{
  popular?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  fullList?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  filter?: Types.CategoryFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.CategorySort> | Types.CategorySort;
}>;

export type GetCategoriesQuery = {
  __typename?: 'Query';
  getCategories: {
    __typename?: 'CategoryOffsetConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'Category';
      id: number;
      name: string;
      image?: any | null;
      mobileImage?: any | null;
      status: Types.GeneralStatusType;
      categoryCode: string;
      popularityCount: number;
      createdAt: any;
      updatedAt: any;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetPortalCategoriesQueryVariables = Types.Exact<{
  filter?: Types.CategoryFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.CategorySort> | Types.CategorySort;
}>;

export type GetPortalCategoriesQuery = {
  __typename?: 'Query';
  getPortalCategories: {
    __typename?: 'CategoryConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'Category';
      id: number;
      name: string;
      image?: any | null;
      mobileImage?: any | null;
      status: Types.GeneralStatusType;
      categoryCode: string;
      popularityCount: number;
      createdAt: any;
      updatedAt: any;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetCategoryQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type GetCategoryQuery = {
  __typename?: 'Query';
  getCategory: {
    __typename?: 'Category';
    id: number;
    name: string;
    image?: any | null;
    mobileImage?: any | null;
    status: Types.GeneralStatusType;
    categoryCode: string;
    popularityCount: number;
    createdAt: any;
    updatedAt: any;
  };
};

export type GetPortalCategoryQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type GetPortalCategoryQuery = {
  __typename?: 'Query';
  getPortalCategory: {
    __typename?: 'Category';
    id: number;
    name: string;
    image?: any | null;
    mobileImage?: any | null;
    status: Types.GeneralStatusType;
    categoryCode: string;
    popularityCount: number;
    createdAt: any;
    updatedAt: any;
  };
};

export type CreateOneCategoryMutationVariables = Types.Exact<{
  input: Types.CreateOneCategoryInput;
}>;

export type CreateOneCategoryMutation = {
  __typename?: 'Mutation';
  createOneCategory: {
    __typename?: 'Category';
    id: number;
    name: string;
    image?: any | null;
    mobileImage?: any | null;
    status: Types.GeneralStatusType;
    categoryCode: string;
    popularityCount: number;
    createdAt: any;
    updatedAt: any;
  };
};

export type UpdateOneCategoryMutationVariables = Types.Exact<{
  input: Types.UpdateOneCategoryInput;
}>;

export type UpdateOneCategoryMutation = {
  __typename?: 'Mutation';
  updateOneCategory: {
    __typename?: 'Category';
    id: number;
    name: string;
    image?: any | null;
    mobileImage?: any | null;
    status: Types.GeneralStatusType;
    categoryCode: string;
    popularityCount: number;
    createdAt: any;
    updatedAt: any;
  };
};

export type DeleteOneCategoryMutationVariables = Types.Exact<{
  input: Types.DeleteOneCategoryInput;
}>;

export type DeleteOneCategoryMutation = {
  __typename?: 'Mutation';
  deleteOneCategory: {
    __typename?: 'CategoryDeleteResponse';
    categoryCode?: string | null;
    createdAt?: any | null;
    id?: number | null;
    image?: any | null;
    mobileImage?: any | null;
    name?: string | null;
    popularityCount?: number | null;
    status?: Types.GeneralStatusType | null;
    updatedAt?: any | null;
  };
};

export type GetBrandsQueryVariables = Types.Exact<{
  popular?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  fullList?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  outletId?: Types.InputMaybe<Types.Scalars['Float']['input']>;
  outletState?: Types.InputMaybe<Types.Scalars['String']['input']>;
  filter?: Types.BrandFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.BrandSort> | Types.BrandSort;
}>;

export type GetBrandsQuery = {
  __typename?: 'Query';
  getBrands: {
    __typename?: 'BrandOffsetConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'Brand';
      slug: string;
      createdAt: any;
      id: number;
      image?: any | null;
      motorcarCount?: number | null;
      popularityCount: number;
      name: string;
      status: Types.GeneralStatusType;
      updatedAt: any;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetBrandQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['Float']['input']>;
  slug?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type GetBrandQuery = {
  __typename?: 'Query';
  getBrand?: {
    __typename?: 'Brand';
    slug: string;
    createdAt: any;
    id: number;
    image?: any | null;
    motorcarCount?: number | null;
    popularityCount: number;
    name: string;
    status: Types.GeneralStatusType;
    updatedAt: any;
  } | null;
};

export type GetPortalBrandsQueryVariables = Types.Exact<{
  filter?: Types.BrandFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.BrandSort> | Types.BrandSort;
}>;

export type GetPortalBrandsQuery = {
  __typename?: 'Query';
  getPortalBrands: {
    __typename?: 'BrandConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'Brand';
      slug: string;
      createdAt: any;
      id: number;
      image?: any | null;
      motorcarCount?: number | null;
      popularityCount: number;
      name: string;
      status: Types.GeneralStatusType;
      updatedAt: any;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type ExportBrandsQueryVariables = Types.Exact<{
  filter?: Types.BrandFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.BrandSort> | Types.BrandSort;
}>;

export type ExportBrandsQuery = { __typename?: 'Query'; exportBrands: string };

export type GetPortalBrandQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type GetPortalBrandQuery = {
  __typename?: 'Query';
  getPortalBrand: {
    __typename?: 'Brand';
    slug: string;
    createdAt: any;
    id: number;
    image?: any | null;
    motorcarCount?: number | null;
    popularityCount: number;
    name: string;
    status: Types.GeneralStatusType;
    updatedAt: any;
  };
};

export type UpdateOneBrandMutationVariables = Types.Exact<{
  input: Types.UpdateOneBrandInput;
}>;

export type UpdateOneBrandMutation = {
  __typename?: 'Mutation';
  updateOneBrand: {
    __typename?: 'Brand';
    slug: string;
    createdAt: any;
    id: number;
    image?: any | null;
    motorcarCount?: number | null;
    popularityCount: number;
    name: string;
    status: Types.GeneralStatusType;
    updatedAt: any;
  };
};

export type DeleteOneBrandMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type DeleteOneBrandMutation = {
  __typename?: 'Mutation';
  deleteOneBrand: boolean;
};

export type CreateOneBrandMutationVariables = Types.Exact<{
  input: Types.CreateBrandInput;
}>;

export type CreateOneBrandMutation = {
  __typename?: 'Mutation';
  createOneBrand: {
    __typename?: 'Brand';
    slug: string;
    createdAt: any;
    id: number;
    image?: any | null;
    motorcarCount?: number | null;
    popularityCount: number;
    name: string;
    status: Types.GeneralStatusType;
    updatedAt: any;
  };
};

export type GetDashboardDataQueryVariables = Types.Exact<{
  endDate?: Types.InputMaybe<Types.Scalars['DateTime']['input']>;
  startDate?: Types.InputMaybe<Types.Scalars['DateTime']['input']>;
}>;

export type GetDashboardDataQuery = {
  __typename?: 'Query';
  getDashboardData?: {
    __typename?: 'Dashboard';
    adoptionRate?: number | null;
    applStatusCount?: any | null;
    mostAppliedMotorcar?: any | null;
    totalUser?: number | null;
    userApplied?: number | null;
    verifiedUser?: number | null;
    totalApplication?: any | null;
    popularMotorcar?: Array<{
      __typename?: 'MotorCar';
      createdAt: any;
      id: number;
      modelName: string;
      slug: string;
      description?: string | null;
      specification?: any | null;
      sellingPriceEM: number;
      sellingPriceWM: number;
      instalmentRate?: number | null;
      images?: any | null;
      totalPopularityCount?: number | null;
      brand?: {
        __typename?: 'BasicBrand';
        image?: any | null;
        name: string;
        slug: string;
      } | null;
      outlets?: Array<{
        __typename?: 'Outlet';
        address1: string;
        address2: string;
        city: string;
        code: string;
        country: string;
        createdAt: any;
        email: string;
        faxNo?: string | null;
        id: number;
        images: any;
        isFeatured: boolean;
        latitude: string;
        longitude: string;
        name: string;
        postcode: string;
        profileImage?: any | null;
        registrationNo: string;
        slug: string;
        state: string;
        status: Types.OutletStatusType;
        updatedAt: any;
        verified: boolean;
      }> | null;
      instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
      currentPromotion?: {
        __typename?: 'BasicPromotionDTO';
        description?: string | null;
        endDate: any;
        profitRateReduction: number;
        startDate: any;
        title: string;
        instalment?: {
          __typename?: 'Instalment';
          em: number;
          wm: number;
        } | null;
      } | null;
      category?: {
        __typename?: 'BasicCategory';
        name: string;
        image?: any | null;
        categoryCode: string;
      } | null;
    }> | null;
  } | null;
};

export type GetModelsQueryVariables = Types.Exact<{
  filter?: Types.ModelFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.ModelSort> | Types.ModelSort;
}>;

export type GetModelsQuery = {
  __typename?: 'Query';
  getModels: {
    __typename?: 'ModelOffsetConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'Model';
      name: string;
      brandSlug: string;
      brandCode: string;
      slug: string;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetMotorcarsSlugQueryVariables = Types.Exact<{
  promo?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;

export type GetMotorcarsSlugQuery = {
  __typename?: 'Query';
  getMotorcarsSlug?: any | null;
};

export type GetTenureRateQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type GetTenureRateQuery = {
  __typename?: 'Query';
  getTenureRate: Array<{
    __typename?: 'TenureRate';
    tenure: number;
    em: {
      __typename?: 'Pricing';
      amount: number;
      deposit: number;
      instalment: number;
      promotion?: number | null;
      sellingPrice: number;
    };
    wm: {
      __typename?: 'Pricing';
      amount: number;
      deposit: number;
      instalment: number;
      promotion?: number | null;
      sellingPrice: number;
    };
  }>;
};

export type GetEstimatedTenureRateQueryVariables = Types.Exact<{
  financialPlanId: Types.Scalars['Int']['input'];
  priceEM: Types.Scalars['Int']['input'];
  priceWM: Types.Scalars['Int']['input'];
  promotionId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type GetEstimatedTenureRateQuery = {
  __typename?: 'Query';
  getEstimatedTenureRate: Array<{
    __typename?: 'TenureRate';
    tenure: number;
    em: {
      __typename?: 'Pricing';
      amount: number;
      deposit: number;
      instalment: number;
      promotion?: number | null;
      sellingPrice: number;
    };
    wm: {
      __typename?: 'Pricing';
      amount: number;
      deposit: number;
      instalment: number;
      promotion?: number | null;
      sellingPrice: number;
    };
  }>;
};

export type GetEkycUrlQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type GetEkycUrlQuery = { __typename?: 'Query'; getEKYCUrl?: any | null };

export type GetApplicationsQueryVariables = Types.Exact<{
  filter?: Types.ApplicationDtoFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.ApplicationDtoSort> | Types.ApplicationDtoSort;
}>;

export type GetApplicationsQuery = {
  __typename?: 'Query';
  getApplications: {
    __typename?: 'ApplicationDtoOffsetConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'ApplicationDto';
      actionRequires?: any | null;
      address: any;
      createdAt: any;
      dateApplied?: any | null;
      deposit: number;
      employmentDetails: any;
      financeAmount: number;
      financialPlanSnapshot: any;
      emergencyContact: any;
      id: number;
      monthlyInstalment: number;
      motorCarSnapshot: any;
      motorcarSwap?: boolean | null;
      outletSnapshot: any;
      profitRate: number;
      refNo: string;
      salutation?: string | null;
      status: Types.ApplicationStatusType;
      updatedAt: any;
      userId: number;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetApplicationQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type GetApplicationQuery = {
  __typename?: 'Query';
  getApplication: {
    __typename?: 'ApplicationDto';
    actionRequires?: any | null;
    address: any;
    createdAt: any;
    dateApplied?: any | null;
    deposit: number;
    employmentDetails: any;
    financeAmount: number;
    financialPlanSnapshot: any;
    emergencyContact: any;
    id: number;
    monthlyInstalment: number;
    motorCarSnapshot: any;
    motorcarSwap?: boolean | null;
    outletSnapshot: any;
    profitRate: number;
    refNo: string;
    salutation?: string | null;
    status: Types.ApplicationStatusType;
    updatedAt: any;
    userId: number;
  };
};

export type DeleteDraftApplicationMutationVariables = Types.Exact<{
  [key: string]: never;
}>;

export type DeleteDraftApplicationMutation = {
  __typename?: 'Mutation';
  deleteDraftApplication: boolean;
};

export type GetApplicationStatusQueryVariables = Types.Exact<{
  endDate?: Types.InputMaybe<Types.Scalars['DateTime']['input']>;
  modelName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  outletId?: Types.InputMaybe<Types.Scalars['Float']['input']>;
  refNo?: Types.InputMaybe<Types.Scalars['String']['input']>;
  startDate?: Types.InputMaybe<Types.Scalars['DateTime']['input']>;
  status?: Types.InputMaybe<Types.ApplicationStatusType>;
  userId?: Types.InputMaybe<Types.Scalars['Float']['input']>;
}>;

export type GetApplicationStatusQuery = {
  __typename?: 'Query';
  getApplicationStatus: any;
};

export type ExportApplicationsQueryVariables = Types.Exact<{
  filter?: Types.ApplicationDtoFilter;
  modelName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.ApplicationDtoSort> | Types.ApplicationDtoSort;
}>;

export type ExportApplicationsQuery = {
  __typename?: 'Query';
  exportApplications: string;
};

export type GetPortalAppHistoriesQueryVariables = Types.Exact<{
  filter?: Types.ApplicationHistoryFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.ApplicationHistorySort> | Types.ApplicationHistorySort;
}>;

export type GetPortalAppHistoriesQuery = {
  __typename?: 'Query';
  getPortalAppHistories: {
    __typename?: 'ApplicationHistoryConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'ApplicationHistory';
      action: Types.ApplicationHistoryActionType;
      applicationId: number;
      createdAt: any;
      description: string;
      id: number;
      meta: any;
      remark: string;
      title: string;
      updatedAt: any;
      userId: number;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type UtilsUpdateApplMutationVariables = Types.Exact<{
  actionType?: Types.InputMaybe<Types.ApplicationActionTypes>;
  refNo: Types.Scalars['String']['input'];
  status: Types.Scalars['String']['input'];
}>;

export type UtilsUpdateApplMutation = {
  __typename?: 'Mutation';
  utilsUpdateAppl?: boolean | null;
};

export type GetPromotionsQueryVariables = Types.Exact<{
  filter?: Types.PromotionFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.PromotionSort> | Types.PromotionSort;
}>;

export type GetPromotionsQuery = {
  __typename?: 'Query';
  getPromotions: {
    __typename?: 'PromotionConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'Promotion';
      createdAt: any;
      description?: string | null;
      endDate: any;
      id: number;
      profitRateReduction: number;
      startDate: any;
      status: Types.GeneralStatusType;
      title: string;
      updatedAt: any;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetPromotionQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type GetPromotionQuery = {
  __typename?: 'Query';
  getPromotion: {
    __typename?: 'Promotion';
    createdAt: any;
    description?: string | null;
    endDate: any;
    id: number;
    profitRateReduction: number;
    startDate: any;
    status: Types.GeneralStatusType;
    title: string;
    updatedAt: any;
  };
};

export type CreatePromotionMutationVariables = Types.Exact<{
  input: Types.CreateOnePromotionInput;
}>;

export type CreatePromotionMutation = {
  __typename?: 'Mutation';
  createOnePromotion: {
    __typename?: 'Promotion';
    createdAt: any;
    description?: string | null;
    endDate: any;
    id: number;
    profitRateReduction: number;
    startDate: any;
    status: Types.GeneralStatusType;
    title: string;
    updatedAt: any;
  };
};

export type UpdatePromotionMutationVariables = Types.Exact<{
  input: Types.UpdateOnePromotionInput;
}>;

export type UpdatePromotionMutation = {
  __typename?: 'Mutation';
  updateOnePromotion: {
    __typename?: 'Promotion';
    createdAt: any;
    description?: string | null;
    endDate: any;
    id: number;
    profitRateReduction: number;
    startDate: any;
    status: Types.GeneralStatusType;
    title: string;
    updatedAt: any;
  };
};

export type GetPortalProductBannersQueryVariables = Types.Exact<{
  filter?: Types.ProductBannerFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.ProductBannerSort> | Types.ProductBannerSort;
}>;

export type GetPortalProductBannersQuery = {
  __typename?: 'Query';
  getPortalProductBanners: {
    __typename?: 'ProductBannerConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'ProductBanner';
      actions: string;
      createdAt: any;
      id: number;
      image: any;
      isInternalLink: boolean;
      mobileImage?: any | null;
      priority: number;
      status: Types.GeneralStatusType;
      title: string;
      updatedAt: any;
      url: string;
      isFeatured: boolean;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type CreateOneProductBannerMutationVariables = Types.Exact<{
  input: Types.CreateProductBannerInput;
}>;

export type CreateOneProductBannerMutation = {
  __typename?: 'Mutation';
  createOneProductBanner: {
    __typename?: 'ProductBanner';
    actions: string;
    createdAt: any;
    id: number;
    image: any;
    isInternalLink: boolean;
    mobileImage?: any | null;
    priority: number;
    status: Types.GeneralStatusType;
    title: string;
    updatedAt: any;
    url: string;
    isFeatured: boolean;
  };
};

export type UpdateOneProductBannerMutationVariables = Types.Exact<{
  input: Types.UpdateOneProductBannerInput;
}>;

export type UpdateOneProductBannerMutation = {
  __typename?: 'Mutation';
  updateOneProductBanner: {
    __typename?: 'ProductBanner';
    actions: string;
    createdAt: any;
    id: number;
    image: any;
    isInternalLink: boolean;
    mobileImage?: any | null;
    priority: number;
    status: Types.GeneralStatusType;
    title: string;
    updatedAt: any;
    url: string;
    isFeatured: boolean;
  };
};

export type DeleteOneProductBannerMutationVariables = Types.Exact<{
  input: Types.DeleteOneProductBannerInput;
}>;

export type DeleteOneProductBannerMutation = {
  __typename?: 'Mutation';
  deleteOneProductBanner: {
    __typename?: 'ProductBannerDeleteResponse';
    actions?: string | null;
    createdAt?: any | null;
    id?: number | null;
    image?: any | null;
    isInternalLink?: boolean | null;
    mobileImage?: any | null;
    priority?: number | null;
    status?: Types.GeneralStatusType | null;
    title?: string | null;
    updatedAt?: any | null;
    url?: string | null;
    isFeatured?: boolean | null;
  };
};

export type GetPortalProductBannerQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type GetPortalProductBannerQuery = {
  __typename?: 'Query';
  getPortalProductBanner: {
    __typename?: 'ProductBanner';
    actions: string;
    createdAt: any;
    id: number;
    image: any;
    isInternalLink: boolean;
    mobileImage?: any | null;
    priority: number;
    status: Types.GeneralStatusType;
    title: string;
    updatedAt: any;
    url: string;
    isFeatured: boolean;
  };
};

export type GetProductBannersQueryVariables = Types.Exact<{
  filter?: Types.ProductBannerFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.ProductBannerSort> | Types.ProductBannerSort;
}>;

export type GetProductBannersQuery = {
  __typename?: 'Query';
  getProductBanners: {
    __typename?: 'ProductBannerOffsetConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'ProductBanner';
      actions: string;
      createdAt: any;
      id: number;
      image: any;
      isInternalLink: boolean;
      mobileImage?: any | null;
      priority: number;
      status: Types.GeneralStatusType;
      title: string;
      updatedAt: any;
      url: string;
      isFeatured: boolean;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetPromotionBannersQueryVariables = Types.Exact<{
  filter?: Types.PromotionBannerFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.PromotionBannerSort> | Types.PromotionBannerSort;
}>;

export type GetPromotionBannersQuery = {
  __typename?: 'Query';
  getPromotionBanners: {
    __typename?: 'PromotionBannerOffsetConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'PromotionBanner';
      actions: string;
      createdAt: any;
      id: number;
      image: any;
      isInternalLink: boolean;
      mobileImage?: any | null;
      position?: Types.PagePlacementType | null;
      priority: number;
      status: Types.GeneralStatusType;
      title: string;
      updatedAt: any;
      url: string;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetPortalPromotionBannerQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type GetPortalPromotionBannerQuery = {
  __typename?: 'Query';
  getPortalPromotionBanner: {
    __typename?: 'PromotionBanner';
    actions: string;
    createdAt: any;
    id: number;
    image: any;
    isInternalLink: boolean;
    mobileImage?: any | null;
    position?: Types.PagePlacementType | null;
    priority: number;
    status: Types.GeneralStatusType;
    title: string;
    updatedAt: any;
    url: string;
  };
};

export type GetPortalPromotionBannersQueryVariables = Types.Exact<{
  filter?: Types.PromotionBannerFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.PromotionBannerSort> | Types.PromotionBannerSort;
}>;

export type GetPortalPromotionBannersQuery = {
  __typename?: 'Query';
  getPortalPromotionBanners: {
    __typename?: 'PromotionBannerConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'PromotionBanner';
      actions: string;
      createdAt: any;
      id: number;
      image: any;
      isInternalLink: boolean;
      mobileImage?: any | null;
      position?: Types.PagePlacementType | null;
      priority: number;
      status: Types.GeneralStatusType;
      title: string;
      updatedAt: any;
      url: string;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type CreateOnePromotionBannerMutationVariables = Types.Exact<{
  input: Types.CreatePromotionBannerInput;
}>;

export type CreateOnePromotionBannerMutation = {
  __typename?: 'Mutation';
  createOnePromotionBanner: {
    __typename?: 'PromotionBanner';
    actions: string;
    createdAt: any;
    id: number;
    image: any;
    isInternalLink: boolean;
    mobileImage?: any | null;
    position?: Types.PagePlacementType | null;
    priority: number;
    status: Types.GeneralStatusType;
    title: string;
    updatedAt: any;
    url: string;
  };
};

export type DeleteOnePromotionBannerMutationVariables = Types.Exact<{
  input: Types.DeleteOnePromotionBannerInput;
}>;

export type DeleteOnePromotionBannerMutation = {
  __typename?: 'Mutation';
  deleteOnePromotionBanner: {
    __typename?: 'PromotionBannerDeleteResponse';
    actions?: string | null;
    createdAt?: any | null;
    id?: number | null;
    image?: any | null;
    isInternalLink?: boolean | null;
    mobileImage?: any | null;
    position?: Types.PagePlacementType | null;
    priority?: number | null;
    status?: Types.GeneralStatusType | null;
    title?: string | null;
    updatedAt?: any | null;
    url?: string | null;
  };
};

export type UpdateOnePromotionBannerMutationVariables = Types.Exact<{
  input: Types.UpdateOnePromotionBannerInput;
}>;

export type UpdateOnePromotionBannerMutation = {
  __typename?: 'Mutation';
  updateOnePromotionBanner: {
    __typename?: 'PromotionBanner';
    actions: string;
    createdAt: any;
    id: number;
    image: any;
    isInternalLink: boolean;
    mobileImage?: any | null;
    position?: Types.PagePlacementType | null;
    priority: number;
    status: Types.GeneralStatusType;
    title: string;
    updatedAt: any;
    url: string;
  };
};

export type GetPortalFaqsQueryVariables = Types.Exact<{
  filter?: Types.FaqFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.FaqSort> | Types.FaqSort;
}>;

export type GetPortalFaqsQuery = {
  __typename?: 'Query';
  getPortalFaqs: {
    __typename?: 'FaqConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'Faq';
      answer: string;
      createdAt: any;
      id: number;
      priority: number;
      question: string;
      status: Types.GeneralStatusType;
      updatedAt: any;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetPortalFaqQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type GetPortalFaqQuery = {
  __typename?: 'Query';
  getPortalFaq: {
    __typename?: 'Faq';
    answer: string;
    createdAt: any;
    id: number;
    priority: number;
    question: string;
    status: Types.GeneralStatusType;
    updatedAt: any;
  };
};

export type CreateOneFaqMutationVariables = Types.Exact<{
  input: Types.CreateOneFaqInput;
}>;

export type CreateOneFaqMutation = {
  __typename?: 'Mutation';
  createOneFaq: {
    __typename?: 'Faq';
    answer: string;
    createdAt: any;
    id: number;
    priority: number;
    question: string;
    status: Types.GeneralStatusType;
    updatedAt: any;
  };
};

export type DeleteOneFaqMutationVariables = Types.Exact<{
  input: Types.DeleteOneFaqInput;
}>;

export type DeleteOneFaqMutation = {
  __typename?: 'Mutation';
  deleteOneFaq: {
    __typename?: 'FaqDeleteResponse';
    answer?: string | null;
    createdAt?: any | null;
    id?: number | null;
    question?: string | null;
    status?: Types.GeneralStatusType | null;
    updatedAt?: any | null;
  };
};

export type UpdateOneFaqMutationVariables = Types.Exact<{
  input: Types.UpdateOneFaqInput;
}>;

export type UpdateOneFaqMutation = {
  __typename?: 'Mutation';
  updateOneFaq: {
    __typename?: 'Faq';
    answer: string;
    createdAt: any;
    id: number;
    priority: number;
    question: string;
    status: Types.GeneralStatusType;
    updatedAt: any;
  };
};

export type DeletePromotionMutationVariables = Types.Exact<{
  input: Types.DeleteOnePromotionInput;
}>;

export type DeletePromotionMutation = {
  __typename?: 'Mutation';
  deleteOnePromotion: {
    __typename?: 'PromotionDeleteResponse';
    createdAt?: any | null;
    description?: string | null;
    endDate?: any | null;
    id?: number | null;
    profitRateReduction?: number | null;
    startDate?: any | null;
    status?: Types.GeneralStatusType | null;
    title?: string | null;
    updatedAt?: any | null;
  };
};

export type GetFaqsQueryVariables = Types.Exact<{
  filter?: Types.FaqFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.FaqSort> | Types.FaqSort;
}>;

export type GetFaqsQuery = {
  __typename?: 'Query';
  getFaqs: {
    __typename?: 'FaqOffsetConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'Faq';
      answer: string;
      createdAt: any;
      id: number;
      priority: number;
      question: string;
      status: Types.GeneralStatusType;
      updatedAt: any;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetPopularKeywordsQueryVariables = Types.Exact<{
  filter?: Types.PopularSearchFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.PopularSearchSort> | Types.PopularSearchSort;
}>;

export type GetPopularKeywordsQuery = {
  __typename?: 'Query';
  getPopularSearchKeywords: {
    __typename?: 'PopularSearchConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'PopularSearch';
      popularityCount: number;
      searchQuery: string;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type UploadExcelFileMutationVariables = Types.Exact<{
  fileType: Types.DataIoFilesTypes;
  purpose: Types.DataIoPurposeType;
  signedUrl: Types.Scalars['String']['input'];
}>;

export type UploadExcelFileMutation = {
  __typename?: 'Mutation';
  uploadExcelFile: any;
};

export type GetCityStateQueryVariables = Types.Exact<{
  input: Types.Scalars['String']['input'];
}>;

export type GetCityStateQuery = {
  __typename?: 'Query';
  getCityState?: {
    __typename?: 'CityState';
    city: string;
    country: string;
    createdAt: any;
    id: number;
    postcode: string;
    state: string;
    updatedAt: any;
  } | null;
};

export type GetOutletsQueryVariables = Types.Exact<{
  filter?: Types.OutletFilter;
  sorting?: Array<Types.OutletSort> | Types.OutletSort;
  fullList?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  boundingCoordinates?: Types.InputMaybe<Types.Scalars['JSONObject']['input']>;
  brands?: Types.InputMaybe<
    Array<Types.Scalars['String']['input']> | Types.Scalars['String']['input']
  >;
  state?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type GetOutletsQuery = {
  __typename?: 'Query';
  getOutlets: Array<{
    __typename?: 'Outlet';
    address1: string;
    address2: string;
    city: string;
    code: string;
    country: string;
    createdAt: any;
    email: string;
    faxNo?: string | null;
    id: number;
    images: any;
    isFeatured: boolean;
    latitude: string;
    longitude: string;
    name: string;
    postcode: string;
    profileImage?: any | null;
    registrationNo: string;
    slug: string;
    state: string;
    status: Types.OutletStatusType;
    updatedAt: any;
    verified: boolean;
  }>;
};

export type GetOutletQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['Float']['input']>;
  slug?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type GetOutletQuery = {
  __typename?: 'Query';
  getOutlet?: {
    __typename?: 'Outlet';
    address1: string;
    address2: string;
    city: string;
    code: string;
    country: string;
    createdAt: any;
    email: string;
    faxNo?: string | null;
    id: number;
    images: any;
    isFeatured: boolean;
    latitude: string;
    longitude: string;
    name: string;
    postcode: string;
    profileImage?: any | null;
    registrationNo: string;
    slug: string;
    state: string;
    status: Types.OutletStatusType;
    updatedAt: any;
    verified: boolean;
  } | null;
};

export type GetNotificationsQueryVariables = Types.Exact<{
  filter?: Types.NotificationFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.NotificationSort> | Types.NotificationSort;
}>;

export type GetNotificationsQuery = {
  __typename?: 'Query';
  getNotifications: {
    __typename?: 'NotificationOffsetConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'Notification';
      createdAt: any;
      hasRead: boolean;
      id: number;
      message: string;
      meta: any;
      title: string;
      type: Types.NotificationType;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetUnreadNotificationsCountQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetUnreadNotificationsCountQuery = {
  __typename?: 'Query';
  getUnreadNotificationsCount: number;
};

export type MarkAsReadMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type MarkAsReadMutation = {
  __typename?: 'Mutation';
  markAsRead: boolean;
};

export type MarkAllAsReadMutationVariables = Types.Exact<{
  [key: string]: never;
}>;

export type MarkAllAsReadMutation = {
  __typename?: 'Mutation';
  markAllAsRead: boolean;
};

export type GetPortalRolesQueryVariables = Types.Exact<{
  filter?: Types.RoleFilter;
  paging?: Types.OffsetPaging;
  sorting?: Array<Types.RoleSort> | Types.RoleSort;
}>;

export type GetPortalRolesQuery = {
  __typename?: 'Query';
  getPortalRoles: {
    __typename?: 'RoleConnection';
    totalCount: number;
    nodes: Array<{
      __typename?: 'Role';
      id: number;
      name: string;
      description: string;
      createdAt: any;
      updatedAt: any;
      totalPortalUser?: number | null;
      permissions?: Array<{
        __typename?: 'Permission';
        id: number;
        name: string;
        slug: string;
        description?: string | null;
        module: Types.ModuleType;
        createdAt: any;
        updatedAt: any;
      }> | null;
    }>;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
  };
};

export type GetPortalRoleQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type GetPortalRoleQuery = {
  __typename?: 'Query';
  getPortalRole: {
    __typename?: 'Role';
    id: number;
    name: string;
    description: string;
    createdAt: any;
    updatedAt: any;
    totalPortalUser?: number | null;
    permissions?: Array<{
      __typename?: 'Permission';
      id: number;
      name: string;
      slug: string;
      description?: string | null;
      module: Types.ModuleType;
      createdAt: any;
      updatedAt: any;
    }> | null;
  };
};

export type CreateOneRoleMutationVariables = Types.Exact<{
  input: Types.CreateOneRoleInput;
}>;

export type CreateOneRoleMutation = {
  __typename?: 'Mutation';
  createOneRole: {
    __typename?: 'Role';
    id: number;
    name: string;
    description: string;
    createdAt: any;
    updatedAt: any;
    totalPortalUser?: number | null;
    permissions?: Array<{
      __typename?: 'Permission';
      id: number;
      name: string;
      slug: string;
      description?: string | null;
      module: Types.ModuleType;
      createdAt: any;
      updatedAt: any;
    }> | null;
  };
};

export type UpdateOneRoleMutationVariables = Types.Exact<{
  input: Types.UpdateOneRoleInput;
}>;

export type UpdateOneRoleMutation = {
  __typename?: 'Mutation';
  updateOneRole: {
    __typename?: 'Role';
    id: number;
    name: string;
    description: string;
    createdAt: any;
    updatedAt: any;
    totalPortalUser?: number | null;
    permissions?: Array<{
      __typename?: 'Permission';
      id: number;
      name: string;
      slug: string;
      description?: string | null;
      module: Types.ModuleType;
      createdAt: any;
      updatedAt: any;
    }> | null;
  };
};

export type GetPermissionsQueryVariables = Types.Exact<{
  filter?: Types.PermissionFilter;
  sorting?: Array<Types.PermissionSort> | Types.PermissionSort;
}>;

export type GetPermissionsQuery = {
  __typename?: 'Query';
  getPermissions: Array<{
    __typename?: 'Permission';
    id: number;
    name: string;
    slug: string;
    description?: string | null;
    module: Types.ModuleType;
    createdAt: any;
    updatedAt: any;
  }>;
};

export type DeleteOneRoleMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;

export type DeleteOneRoleMutation = {
  __typename?: 'Mutation';
  deleteOneRole: boolean;
};

export type AccessTokenInfoFragment = {
  __typename?: 'AccessToken';
  accessToken: string;
  expiresIn: number;
  refreshExpiresIn: number;
  refreshToken: string;
};

export type PageInfoFragment = {
  __typename?: 'OffsetPageInfo';
  hasNextPage?: boolean | null;
  hasPreviousPage?: boolean | null;
};

export type CustomerUserFragment = {
  __typename?: 'User';
  acceptedLoan: number;
  approvedLoan: number;
  createdAt: any;
  dateOfBirth?: any | null;
  ekycVerified: boolean;
  email?: string | null;
  fullname: string;
  gender: Types.UserGenderType;
  id: number;
  idNo: string;
  idType: string;
  loanOffered: number;
  phoneCode?: string | null;
  phoneNumber?: string | null;
  referralCode?: string | null;
  remark?: string | null;
  status: Types.UserStatusType;
  twoFactorEnabled: boolean;
  updatedAt: any;
  username?: string | null;
};

export type PortalCustomerUserFragment = {
  __typename?: 'User';
  acceptedLoan: number;
  approvedLoan: number;
  createdAt: any;
  dateOfBirth?: any | null;
  ekycVerified: boolean;
  email?: string | null;
  fullname: string;
  gender: Types.UserGenderType;
  id: number;
  idNo: string;
  idType: string;
  loanOffered: number;
  phoneCode?: string | null;
  phoneNumber?: string | null;
  referralCode?: string | null;
  remark?: string | null;
  status: Types.UserStatusType;
  totalApplication: number;
  twoFactorEnabled: boolean;
  updatedAt: any;
  username?: string | null;
  addresses?: Array<{
    __typename?: 'UserAddress';
    address1: string;
    address2: string;
    city: string;
    country: string;
    createdAt: any;
    id: number;
    latitude: string;
    longitude: string;
    postcode: string;
    state: string;
    updatedAt: any;
  }> | null;
};

export type PortalUserFragment = {
  __typename?: 'PortalUser';
  createdAt: any;
  dateOfBirth?: any | null;
  email?: string | null;
  fullname: string;
  gender: Types.UserGenderType;
  id: number;
  lastLoginDate?: any | null;
  phoneCode?: string | null;
  phoneNumber?: string | null;
  reference?: string | null;
  status: Types.PortalUserStatusType;
  twoFactorEnabled: boolean;
  updatedAt: any;
  username?: string | null;
  addresses?: Array<{
    __typename?: 'PortalUserAddress';
    address1: string;
    address2: string;
    city: string;
    country: string;
    createdAt: any;
    id: number;
    postcode: string;
    state: string;
    updatedAt: any;
  }> | null;
  roles?: {
    __typename?: 'Role';
    id: number;
    name: string;
    description: string;
    createdAt: any;
    updatedAt: any;
    totalPortalUser?: number | null;
    permissions?: Array<{
      __typename?: 'Permission';
      id: number;
      name: string;
      slug: string;
      description?: string | null;
      module: Types.ModuleType;
      createdAt: any;
      updatedAt: any;
    }> | null;
  } | null;
};

export type FinancePlanInfoFragment = {
  __typename?: 'FinancialPlan';
  autoAssign: boolean;
  conditions: any;
  createdAt: any;
  description?: string | null;
  id: number;
  image?: any | null;
  isFeatured: boolean;
  maxFinanceRate?: number | null;
  maxTenure?: number | null;
  name: string;
  profitRate: number;
  status: Types.GeneralStatusType;
  tenure: any;
  updatedAt: any;
};

export type PortalFinancePlanInfoFragment = {
  __typename?: 'BasicFinancialPlan';
  autoAssign: boolean;
  calculationMethod: Types.FinancialPlanCalculationType;
  conditions: any;
  createdAt: any;
  id: number;
  image?: any | null;
  isFeatured: boolean;
  maxFinanceRate?: number | null;
  maxTenure?: number | null;
  name: string;
  profitRate: number;
  status: Types.GeneralStatusType;
  tenure: any;
  updatedAt: any;
};

export type MotorCarBasicInfoFragment = {
  __typename?: 'MotorCar';
  id: number;
  modelName: string;
  specification?: any | null;
  images?: any | null;
  slug: string;
  totalPopularityCount?: number | null;
  instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
  currentPromotion?: {
    __typename?: 'BasicPromotionDTO';
    instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
  } | null;
  brand?: { __typename?: 'BasicBrand'; name: string; slug: string } | null;
  category?: {
    __typename?: 'BasicCategory';
    name: string;
    categoryCode: string;
  } | null;
};

export type MotorCarInfoFragment = {
  __typename?: 'MotorCar';
  createdAt: any;
  id: number;
  modelName: string;
  slug: string;
  description?: string | null;
  specification?: any | null;
  sellingPriceEM: number;
  sellingPriceWM: number;
  instalmentRate?: number | null;
  images?: any | null;
  totalPopularityCount?: number | null;
  brand?: {
    __typename?: 'BasicBrand';
    image?: any | null;
    name: string;
    slug: string;
  } | null;
  outlets?: Array<{
    __typename?: 'Outlet';
    address1: string;
    address2: string;
    city: string;
    code: string;
    country: string;
    createdAt: any;
    email: string;
    faxNo?: string | null;
    id: number;
    images: any;
    isFeatured: boolean;
    latitude: string;
    longitude: string;
    name: string;
    postcode: string;
    profileImage?: any | null;
    registrationNo: string;
    slug: string;
    state: string;
    status: Types.OutletStatusType;
    updatedAt: any;
    verified: boolean;
  }> | null;
  instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
  currentPromotion?: {
    __typename?: 'BasicPromotionDTO';
    description?: string | null;
    endDate: any;
    profitRateReduction: number;
    startDate: any;
    title: string;
    instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
  } | null;
  category?: {
    __typename?: 'BasicCategory';
    name: string;
    image?: any | null;
    categoryCode: string;
  } | null;
};

export type PortalMotorCarInfoFragment = {
  __typename?: 'MotorCar';
  createdAt: any;
  description?: string | null;
  id: number;
  images?: any | null;
  instalmentRate?: number | null;
  modelName: string;
  popularityCount: number;
  sellingPriceEM: number;
  sellingPriceWM: number;
  specification?: any | null;
  status: Types.GeneralStatusType;
  updatedAt: any;
  brand?: {
    __typename?: 'BasicBrand';
    slug: string;
    image?: any | null;
    name: string;
    id: number;
  } | null;
  category?: {
    __typename?: 'BasicCategory';
    categoryCode: string;
    image?: any | null;
    name: string;
    id: number;
  } | null;
  financialPlan?: {
    __typename?: 'BasicFinancialPlan';
    autoAssign: boolean;
    calculationMethod: Types.FinancialPlanCalculationType;
    conditions: any;
    createdAt: any;
    description?: string | null;
    id: number;
    image?: any | null;
    name: string;
    profitRate: number;
    status: Types.GeneralStatusType;
    tenure: any;
    updatedAt: any;
  } | null;
  instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
  outlets?: Array<{
    __typename?: 'Outlet';
    address1: string;
    address2: string;
    city: string;
    code: string;
    country: string;
    createdAt: any;
    email: string;
    faxNo?: string | null;
    id: number;
    images: any;
    isFeatured: boolean;
    latitude: string;
    longitude: string;
    name: string;
    postcode: string;
    profileImage?: any | null;
    registrationNo: string;
    state: string;
    status: Types.OutletStatusType;
    totalApplications: number;
    totalMotorcar: number;
    updatedAt: any;
    verified: boolean;
  }> | null;
  currentPromotion?: {
    __typename?: 'BasicPromotionDTO';
    description?: string | null;
    endDate: any;
    profitRateReduction: number;
    startDate: any;
    title: string;
    instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
  } | null;
  promotions?: {
    __typename?: 'BasicPromotionDTO';
    description?: string | null;
    endDate: any;
    profitRateReduction: number;
    startDate: any;
    title: string;
    id: number;
    instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
  } | null;
};

export type CategoryInfoFragment = {
  __typename?: 'Category';
  id: number;
  name: string;
  image?: any | null;
  mobileImage?: any | null;
  status: Types.GeneralStatusType;
  categoryCode: string;
  popularityCount: number;
  createdAt: any;
  updatedAt: any;
};

export type OutletInfoFragment = {
  __typename?: 'Outlet';
  address1: string;
  address2: string;
  city: string;
  code: string;
  country: string;
  createdAt: any;
  email: string;
  faxNo?: string | null;
  id: number;
  images: any;
  isFeatured: boolean;
  latitude: string;
  longitude: string;
  name: string;
  postcode: string;
  profileImage?: any | null;
  registrationNo: string;
  slug: string;
  state: string;
  status: Types.OutletStatusType;
  updatedAt: any;
  verified: boolean;
};

export type PortalOutletInfoFragment = {
  __typename?: 'Outlet';
  address1: string;
  address2: string;
  city: string;
  code: string;
  country: string;
  createdAt: any;
  email: string;
  faxNo?: string | null;
  id: number;
  images: any;
  isFeatured: boolean;
  latitude: string;
  longitude: string;
  name: string;
  postcode: string;
  profileImage?: any | null;
  registrationNo: string;
  state: string;
  status: Types.OutletStatusType;
  totalApplications: number;
  totalMotorcar: number;
  updatedAt: any;
  verified: boolean;
};

export type BrandInfoFragment = {
  __typename?: 'Brand';
  slug: string;
  createdAt: any;
  id: number;
  image?: any | null;
  motorcarCount?: number | null;
  popularityCount: number;
  name: string;
  status: Types.GeneralStatusType;
  updatedAt: any;
};

export type PromotionInfoFragment = {
  __typename?: 'BasicPromotionDTO';
  title: string;
  description?: string | null;
  startDate: any;
  endDate: any;
  profitRateReduction: number;
  instalment?: { __typename?: 'Instalment'; wm: number; em: number } | null;
};

export type PromotionFullInfoFragment = {
  __typename?: 'Promotion';
  createdAt: any;
  description?: string | null;
  endDate: any;
  id: number;
  profitRateReduction: number;
  startDate: any;
  status: Types.GeneralStatusType;
  title: string;
  updatedAt: any;
};

export type PromotionBannerInfoFragment = {
  __typename?: 'PromotionBanner';
  actions: string;
  createdAt: any;
  id: number;
  image: any;
  isInternalLink: boolean;
  mobileImage?: any | null;
  position?: Types.PagePlacementType | null;
  priority: number;
  status: Types.GeneralStatusType;
  title: string;
  updatedAt: any;
  url: string;
};

export type PromotionBannerDeleteInfoFragment = {
  __typename?: 'PromotionBannerDeleteResponse';
  actions?: string | null;
  createdAt?: any | null;
  id?: number | null;
  image?: any | null;
  isInternalLink?: boolean | null;
  mobileImage?: any | null;
  position?: Types.PagePlacementType | null;
  priority?: number | null;
  status?: Types.GeneralStatusType | null;
  title?: string | null;
  updatedAt?: any | null;
  url?: string | null;
};

export type InstalmentInfoFragment = {
  __typename?: 'Instalment';
  em: number;
  wm: number;
};

export type PricingInfoFragment = {
  __typename?: 'Pricing';
  amount: number;
  deposit: number;
  instalment: number;
  promotion?: number | null;
  sellingPrice: number;
};

export type ApplicationInfoFragment = {
  __typename?: 'ApplicationDto';
  actionRequires?: any | null;
  address: any;
  createdAt: any;
  dateApplied?: any | null;
  deposit: number;
  employmentDetails: any;
  financeAmount: number;
  financialPlanSnapshot: any;
  emergencyContact: any;
  id: number;
  monthlyInstalment: number;
  motorCarSnapshot: any;
  motorcarSwap?: boolean | null;
  outletSnapshot: any;
  profitRate: number;
  refNo: string;
  salutation?: string | null;
  status: Types.ApplicationStatusType;
  updatedAt: any;
  userId: number;
};

export type PortalApplicationInfoFragment = {
  __typename?: 'ApplicationDto';
  actionRequires?: any | null;
  address: any;
  createdAt: any;
  dateApplied?: any | null;
  dateApproved?: any | null;
  deposit: number;
  dipOffered?: any | null;
  emergencyContact: any;
  employmentDetails: any;
  finalApproved?: any | null;
  financeAmount: number;
  financialPlanSnapshot: any;
  id: number;
  monthlyInstalment: number;
  motorCarSnapshot: any;
  motorcarSwap?: boolean | null;
  outletSnapshot: any;
  profitRate: number;
  refNo: string;
  salutation?: string | null;
  status: Types.ApplicationStatusType;
  updatedAt: any;
  userId: number;
  customer?: {
    __typename?: 'User';
    acceptedLoan: number;
    approvedLoan: number;
    createdAt: any;
    dateOfBirth?: any | null;
    ekycVerified: boolean;
    email?: string | null;
    fullname: string;
    gender: Types.UserGenderType;
    id: number;
    idNo: string;
    idType: string;
    loanOffered: number;
    phoneCode?: string | null;
    phoneNumber?: string | null;
    referralCode?: string | null;
    remark?: string | null;
    status: Types.UserStatusType;
    totalApplication: number;
    twoFactorEnabled: boolean;
    updatedAt: any;
    username?: string | null;
    addresses?: Array<{
      __typename?: 'UserAddress';
      address1: string;
      address2: string;
      city: string;
      country: string;
      createdAt: any;
      id: number;
      latitude: string;
      longitude: string;
      postcode: string;
      state: string;
      updatedAt: any;
    }> | null;
  } | null;
};

export type PopularSearchInfoFragment = {
  __typename?: 'PopularSearch';
  popularityCount: number;
  searchQuery: string;
};

export type HomeBannerInfoFragment = {
  __typename?: 'HomeBanner';
  actions: string;
  createdAt: any;
  id: number;
  image: any;
  isInternalLink: boolean;
  mobileImage?: any | null;
  priority: number;
  status: Types.GeneralStatusType;
  title: string;
  updatedAt: any;
  url: string;
};

export type HomeBannerDeleteInfoFragment = {
  __typename?: 'HomeBannerDeleteResponse';
  actions?: string | null;
  createdAt?: any | null;
  id?: number | null;
  image?: any | null;
  isInternalLink?: boolean | null;
  mobileImage?: any | null;
  priority?: number | null;
  status?: Types.GeneralStatusType | null;
  title?: string | null;
  updatedAt?: any | null;
  url?: string | null;
};

export type FaqInfoFragment = {
  __typename?: 'Faq';
  answer: string;
  createdAt: any;
  id: number;
  priority: number;
  question: string;
  status: Types.GeneralStatusType;
  updatedAt: any;
};

export type FaqDeleteInfoFragment = {
  __typename?: 'FaqDeleteResponse';
  answer?: string | null;
  createdAt?: any | null;
  id?: number | null;
  question?: string | null;
  status?: Types.GeneralStatusType | null;
  updatedAt?: any | null;
};

export type MiscTypeInfoFragment = {
  __typename?: 'Misc';
  createdAt: any;
  id: number;
  key: Types.MiscType;
  status: Types.GeneralStatusType;
  updatedAt: any;
  value: any;
};

export type NotificationInfoFragment = {
  __typename?: 'Notification';
  createdAt: any;
  hasRead: boolean;
  id: number;
  message: string;
  meta: any;
  title: string;
  type: Types.NotificationType;
};

export type DashboardInfoFragment = {
  __typename?: 'Dashboard';
  adoptionRate?: number | null;
  applStatusCount?: any | null;
  mostAppliedMotorcar?: any | null;
  totalUser?: number | null;
  userApplied?: number | null;
  verifiedUser?: number | null;
  totalApplication?: any | null;
  popularMotorcar?: Array<{
    __typename?: 'MotorCar';
    createdAt: any;
    id: number;
    modelName: string;
    slug: string;
    description?: string | null;
    specification?: any | null;
    sellingPriceEM: number;
    sellingPriceWM: number;
    instalmentRate?: number | null;
    images?: any | null;
    totalPopularityCount?: number | null;
    brand?: {
      __typename?: 'BasicBrand';
      image?: any | null;
      name: string;
      slug: string;
    } | null;
    outlets?: Array<{
      __typename?: 'Outlet';
      address1: string;
      address2: string;
      city: string;
      code: string;
      country: string;
      createdAt: any;
      email: string;
      faxNo?: string | null;
      id: number;
      images: any;
      isFeatured: boolean;
      latitude: string;
      longitude: string;
      name: string;
      postcode: string;
      profileImage?: any | null;
      registrationNo: string;
      slug: string;
      state: string;
      status: Types.OutletStatusType;
      updatedAt: any;
      verified: boolean;
    }> | null;
    instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
    currentPromotion?: {
      __typename?: 'BasicPromotionDTO';
      description?: string | null;
      endDate: any;
      profitRateReduction: number;
      startDate: any;
      title: string;
      instalment?: { __typename?: 'Instalment'; em: number; wm: number } | null;
    } | null;
    category?: {
      __typename?: 'BasicCategory';
      name: string;
      image?: any | null;
      categoryCode: string;
    } | null;
  }> | null;
};

export type ProductBannerInfoFragment = {
  __typename?: 'ProductBanner';
  actions: string;
  createdAt: any;
  id: number;
  image: any;
  isInternalLink: boolean;
  mobileImage?: any | null;
  priority: number;
  status: Types.GeneralStatusType;
  title: string;
  updatedAt: any;
  url: string;
  isFeatured: boolean;
};

export type ProductBannerDeleteInfoFragment = {
  __typename?: 'ProductBannerDeleteResponse';
  actions?: string | null;
  createdAt?: any | null;
  id?: number | null;
  image?: any | null;
  isInternalLink?: boolean | null;
  mobileImage?: any | null;
  priority?: number | null;
  status?: Types.GeneralStatusType | null;
  title?: string | null;
  updatedAt?: any | null;
  url?: string | null;
  isFeatured?: boolean | null;
};

export type CityStateInfoFragment = {
  __typename?: 'CityState';
  city: string;
  country: string;
  createdAt: any;
  id: number;
  postcode: string;
  state: string;
  updatedAt: any;
};

export type RoleInfoFragment = {
  __typename?: 'Role';
  id: number;
  name: string;
  description: string;
  createdAt: any;
  updatedAt: any;
  totalPortalUser?: number | null;
  permissions?: Array<{
    __typename?: 'Permission';
    id: number;
    name: string;
    slug: string;
    description?: string | null;
    module: Types.ModuleType;
    createdAt: any;
    updatedAt: any;
  }> | null;
};

export type PermissionInfoFragment = {
  __typename?: 'Permission';
  id: number;
  name: string;
  slug: string;
  description?: string | null;
  module: Types.ModuleType;
  createdAt: any;
  updatedAt: any;
};

export const AccessTokenInfoFragmentDoc = gql`
  fragment AccessTokenInfo on AccessToken {
    accessToken
    expiresIn
    refreshExpiresIn
    refreshToken
  }
`;
export const PageInfoFragmentDoc = gql`
  fragment PageInfo on OffsetPageInfo {
    hasNextPage
    hasPreviousPage
  }
`;
export const CustomerUserFragmentDoc = gql`
  fragment CustomerUser on User {
    acceptedLoan
    approvedLoan
    createdAt
    dateOfBirth
    ekycVerified
    email
    fullname
    gender
    id
    idNo
    idType
    loanOffered
    phoneCode
    phoneNumber
    referralCode
    remark
    status
    twoFactorEnabled
    updatedAt
    username
  }
`;
export const PermissionInfoFragmentDoc = gql`
  fragment PermissionInfo on Permission {
    id
    name
    slug
    description
    module
    createdAt
    updatedAt
  }
`;
export const RoleInfoFragmentDoc = gql`
  fragment RoleInfo on Role {
    id
    name
    description
    createdAt
    updatedAt
    totalPortalUser
    permissions {
      ...PermissionInfo
    }
  }
  ${PermissionInfoFragmentDoc}
`;
export const PortalUserFragmentDoc = gql`
  fragment PortalUser on PortalUser {
    addresses {
      address1
      address2
      city
      country
      createdAt
      id
      postcode
      state
      updatedAt
    }
    createdAt
    dateOfBirth
    email
    fullname
    gender
    id
    lastLoginDate
    phoneCode
    phoneNumber
    reference
    status
    twoFactorEnabled
    updatedAt
    username
    roles {
      ...RoleInfo
    }
  }
  ${RoleInfoFragmentDoc}
`;
export const FinancePlanInfoFragmentDoc = gql`
  fragment FinancePlanInfo on FinancialPlan {
    autoAssign
    conditions
    createdAt
    description
    id
    image
    isFeatured
    maxFinanceRate
    maxTenure
    name
    profitRate
    status
    tenure
    updatedAt
  }
`;
export const PortalFinancePlanInfoFragmentDoc = gql`
  fragment PortalFinancePlanInfo on BasicFinancialPlan {
    autoAssign
    calculationMethod
    conditions
    createdAt
    id
    image
    isFeatured
    maxFinanceRate
    maxTenure
    name
    profitRate
    status
    tenure
    updatedAt
  }
`;
export const MotorCarBasicInfoFragmentDoc = gql`
  fragment MotorCarBasicInfo on MotorCar {
    id
    modelName
    specification
    instalment {
      em
      wm
    }
    images
    currentPromotion {
      instalment {
        em
        wm
      }
    }
    brand {
      name
      slug
    }
    category {
      name
      categoryCode
    }
    slug
    totalPopularityCount
  }
`;
export const PortalOutletInfoFragmentDoc = gql`
  fragment PortalOutletInfo on Outlet {
    address1
    address2
    city
    code
    country
    createdAt
    email
    faxNo
    id
    images
    isFeatured
    latitude
    longitude
    name
    postcode
    profileImage
    registrationNo
    state
    status
    totalApplications
    totalMotorcar
    updatedAt
    verified
  }
`;
export const PortalMotorCarInfoFragmentDoc = gql`
  fragment PortalMotorCarInfo on MotorCar {
    brand {
      slug
      image
      name
      id
    }
    category {
      categoryCode
      image
      name
      id
    }
    createdAt
    description
    financialPlan {
      autoAssign
      calculationMethod
      conditions
      createdAt
      description
      id
      image
      name
      profitRate
      status
      tenure
      updatedAt
    }
    id
    images
    instalment {
      em
      wm
    }
    instalmentRate
    modelName
    outlets {
      ...PortalOutletInfo
    }
    currentPromotion {
      description
      endDate
      instalment {
        em
        wm
      }
      profitRateReduction
      startDate
      title
    }
    popularityCount
    promotions {
      description
      endDate
      instalment {
        em
        wm
      }
      profitRateReduction
      startDate
      title
      id
    }
    sellingPriceEM
    sellingPriceWM
    specification
    status
    updatedAt
  }
  ${PortalOutletInfoFragmentDoc}
`;
export const CategoryInfoFragmentDoc = gql`
  fragment CategoryInfo on Category {
    id
    name
    image
    mobileImage
    status
    categoryCode
    popularityCount
    createdAt
    updatedAt
  }
`;
export const BrandInfoFragmentDoc = gql`
  fragment BrandInfo on Brand {
    slug
    createdAt
    id
    image
    motorcarCount
    popularityCount
    name
    status
    updatedAt
  }
`;
export const PromotionInfoFragmentDoc = gql`
  fragment PromotionInfo on BasicPromotionDTO {
    title
    description
    startDate
    endDate
    profitRateReduction
    instalment {
      wm
      em
    }
  }
`;
export const PromotionFullInfoFragmentDoc = gql`
  fragment PromotionFullInfo on Promotion {
    createdAt
    description
    endDate
    id
    profitRateReduction
    startDate
    status
    title
    updatedAt
  }
`;
export const PromotionBannerInfoFragmentDoc = gql`
  fragment PromotionBannerInfo on PromotionBanner {
    actions
    createdAt
    id
    image
    isInternalLink
    mobileImage
    position
    priority
    status
    title
    updatedAt
    url
  }
`;
export const PromotionBannerDeleteInfoFragmentDoc = gql`
  fragment PromotionBannerDeleteInfo on PromotionBannerDeleteResponse {
    actions
    createdAt
    id
    image
    isInternalLink
    mobileImage
    position
    priority
    status
    title
    updatedAt
    url
  }
`;
export const InstalmentInfoFragmentDoc = gql`
  fragment InstalmentInfo on Instalment {
    em
    wm
  }
`;
export const PricingInfoFragmentDoc = gql`
  fragment PricingInfo on Pricing {
    amount
    deposit
    instalment
    promotion
    sellingPrice
  }
`;
export const ApplicationInfoFragmentDoc = gql`
  fragment ApplicationInfo on ApplicationDto {
    actionRequires
    address
    createdAt
    dateApplied
    deposit
    employmentDetails
    financeAmount
    financialPlanSnapshot
    emergencyContact
    id
    monthlyInstalment
    motorCarSnapshot
    motorcarSwap
    outletSnapshot
    profitRate
    refNo
    salutation
    status
    updatedAt
    userId
  }
`;
export const PortalCustomerUserFragmentDoc = gql`
  fragment PortalCustomerUser on User {
    acceptedLoan
    addresses {
      address1
      address2
      city
      country
      createdAt
      id
      latitude
      longitude
      postcode
      state
      updatedAt
    }
    approvedLoan
    createdAt
    dateOfBirth
    ekycVerified
    email
    fullname
    gender
    id
    idNo
    idType
    loanOffered
    phoneCode
    phoneNumber
    referralCode
    remark
    status
    totalApplication
    twoFactorEnabled
    updatedAt
    username
  }
`;
export const PortalApplicationInfoFragmentDoc = gql`
  fragment PortalApplicationInfo on ApplicationDto {
    actionRequires
    address
    createdAt
    customer {
      ...PortalCustomerUser
    }
    dateApplied
    dateApproved
    deposit
    dipOffered
    emergencyContact
    employmentDetails
    finalApproved
    financeAmount
    financialPlanSnapshot
    id
    monthlyInstalment
    motorCarSnapshot
    motorcarSwap
    outletSnapshot
    profitRate
    refNo
    salutation
    status
    updatedAt
    userId
  }
  ${PortalCustomerUserFragmentDoc}
`;
export const PopularSearchInfoFragmentDoc = gql`
  fragment PopularSearchInfo on PopularSearch {
    popularityCount
    searchQuery
  }
`;
export const HomeBannerInfoFragmentDoc = gql`
  fragment HomeBannerInfo on HomeBanner {
    actions
    createdAt
    id
    image
    isInternalLink
    mobileImage
    priority
    status
    title
    updatedAt
    url
  }
`;
export const HomeBannerDeleteInfoFragmentDoc = gql`
  fragment HomeBannerDeleteInfo on HomeBannerDeleteResponse {
    actions
    createdAt
    id
    image
    isInternalLink
    mobileImage
    priority
    status
    title
    updatedAt
    url
  }
`;
export const FaqInfoFragmentDoc = gql`
  fragment FaqInfo on Faq {
    answer
    createdAt
    id
    priority
    question
    status
    updatedAt
  }
`;
export const FaqDeleteInfoFragmentDoc = gql`
  fragment FaqDeleteInfo on FaqDeleteResponse {
    answer
    createdAt
    id
    question
    status
    updatedAt
  }
`;
export const MiscTypeInfoFragmentDoc = gql`
  fragment MiscTypeInfo on Misc {
    createdAt
    id
    key
    status
    updatedAt
    value
  }
`;
export const NotificationInfoFragmentDoc = gql`
  fragment NotificationInfo on Notification {
    createdAt
    hasRead
    id
    message
    meta
    title
    type
  }
`;
export const OutletInfoFragmentDoc = gql`
  fragment OutletInfo on Outlet {
    address1
    address2
    city
    code
    country
    createdAt
    email
    faxNo
    id
    images
    isFeatured
    latitude
    longitude
    name
    postcode
    profileImage
    registrationNo
    slug
    state
    status
    updatedAt
    verified
  }
`;
export const MotorCarInfoFragmentDoc = gql`
  fragment MotorCarInfo on MotorCar {
    brand {
      image
      name
      slug
    }
    createdAt
    id
    modelName
    slug
    outlets {
      ...OutletInfo
    }
    description
    specification
    sellingPriceEM
    sellingPriceWM
    instalmentRate
    instalment {
      em
      wm
    }
    images
    currentPromotion {
      description
      endDate
      instalment {
        em
        wm
      }
      profitRateReduction
      startDate
      title
    }
    category {
      name
      image
      categoryCode
    }
    totalPopularityCount
  }
  ${OutletInfoFragmentDoc}
`;
export const DashboardInfoFragmentDoc = gql`
  fragment DashboardInfo on Dashboard {
    adoptionRate
    applStatusCount
    mostAppliedMotorcar
    popularMotorcar {
      ...MotorCarInfo
    }
    totalUser
    userApplied
    verifiedUser
    totalApplication
  }
  ${MotorCarInfoFragmentDoc}
`;
export const ProductBannerInfoFragmentDoc = gql`
  fragment ProductBannerInfo on ProductBanner {
    actions
    createdAt
    id
    image
    isInternalLink
    mobileImage
    priority
    status
    title
    updatedAt
    url
    isFeatured
  }
`;
export const ProductBannerDeleteInfoFragmentDoc = gql`
  fragment ProductBannerDeleteInfo on ProductBannerDeleteResponse {
    actions
    createdAt
    id
    image
    isInternalLink
    mobileImage
    priority
    status
    title
    updatedAt
    url
    isFeatured
  }
`;
export const CityStateInfoFragmentDoc = gql`
  fragment CityStateInfo on CityState {
    city
    country
    createdAt
    id
    postcode
    state
    updatedAt
  }
`;
export const PortalSignInDocument = gql`
  mutation PortalSignIn($input: PortalAuthSignInInput!) {
    portalSignIn(input: $input) {
      ...AccessTokenInfo
    }
  }
  ${AccessTokenInfoFragmentDoc}
`;
export type PortalSignInMutationFn = Apollo.MutationFunction<
  PortalSignInMutation,
  PortalSignInMutationVariables
>;

/**
 * __usePortalSignInMutation__
 *
 * To run a mutation, you first call `usePortalSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePortalSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [portalSignInMutation, { data, loading, error }] = usePortalSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePortalSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PortalSignInMutation,
    PortalSignInMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PortalSignInMutation,
    PortalSignInMutationVariables
  >(PortalSignInDocument, options);
}
export type PortalSignInMutationHookResult = ReturnType<
  typeof usePortalSignInMutation
>;
export type PortalSignInMutationResult =
  Apollo.MutationResult<PortalSignInMutation>;
export type PortalSignInMutationOptions = Apollo.BaseMutationOptions<
  PortalSignInMutation,
  PortalSignInMutationVariables
>;
export const GetPortalAuthProfileDocument = gql`
  query GetPortalAuthProfile {
    getPortalAuthProfile {
      ...PortalUser
    }
  }
  ${PortalUserFragmentDoc}
`;

/**
 * __useGetPortalAuthProfileQuery__
 *
 * To run a query within a React component, call `useGetPortalAuthProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalAuthProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalAuthProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPortalAuthProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPortalAuthProfileQuery,
    GetPortalAuthProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalAuthProfileQuery,
    GetPortalAuthProfileQueryVariables
  >(GetPortalAuthProfileDocument, options);
}
export function useGetPortalAuthProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalAuthProfileQuery,
    GetPortalAuthProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalAuthProfileQuery,
    GetPortalAuthProfileQueryVariables
  >(GetPortalAuthProfileDocument, options);
}
export type GetPortalAuthProfileQueryHookResult = ReturnType<
  typeof useGetPortalAuthProfileQuery
>;
export type GetPortalAuthProfileLazyQueryHookResult = ReturnType<
  typeof useGetPortalAuthProfileLazyQuery
>;
export type GetPortalAuthProfileQueryResult = Apollo.QueryResult<
  GetPortalAuthProfileQuery,
  GetPortalAuthProfileQueryVariables
>;
export const ResetUserPasswordWithUrlDocument = gql`
  mutation ResetUserPasswordWithUrl($input: ResetPasswordEmailInput!) {
    resetUserPasswordWithUrl(input: $input)
  }
`;
export type ResetUserPasswordWithUrlMutationFn = Apollo.MutationFunction<
  ResetUserPasswordWithUrlMutation,
  ResetUserPasswordWithUrlMutationVariables
>;

/**
 * __useResetUserPasswordWithUrlMutation__
 *
 * To run a mutation, you first call `useResetUserPasswordWithUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetUserPasswordWithUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetUserPasswordWithUrlMutation, { data, loading, error }] = useResetUserPasswordWithUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetUserPasswordWithUrlMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetUserPasswordWithUrlMutation,
    ResetUserPasswordWithUrlMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ResetUserPasswordWithUrlMutation,
    ResetUserPasswordWithUrlMutationVariables
  >(ResetUserPasswordWithUrlDocument, options);
}
export type ResetUserPasswordWithUrlMutationHookResult = ReturnType<
  typeof useResetUserPasswordWithUrlMutation
>;
export type ResetUserPasswordWithUrlMutationResult =
  Apollo.MutationResult<ResetUserPasswordWithUrlMutation>;
export type ResetUserPasswordWithUrlMutationOptions =
  Apollo.BaseMutationOptions<
    ResetUserPasswordWithUrlMutation,
    ResetUserPasswordWithUrlMutationVariables
  >;
export const ResetPortalUserPasswordWithUrlDocument = gql`
  mutation ResetPortalUserPasswordWithUrl($input: ResetPasswordEmailInput!) {
    resetPortalUserPasswordWithUrl(input: $input)
  }
`;
export type ResetPortalUserPasswordWithUrlMutationFn = Apollo.MutationFunction<
  ResetPortalUserPasswordWithUrlMutation,
  ResetPortalUserPasswordWithUrlMutationVariables
>;

/**
 * __useResetPortalUserPasswordWithUrlMutation__
 *
 * To run a mutation, you first call `useResetPortalUserPasswordWithUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPortalUserPasswordWithUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPortalUserPasswordWithUrlMutation, { data, loading, error }] = useResetPortalUserPasswordWithUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPortalUserPasswordWithUrlMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPortalUserPasswordWithUrlMutation,
    ResetPortalUserPasswordWithUrlMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ResetPortalUserPasswordWithUrlMutation,
    ResetPortalUserPasswordWithUrlMutationVariables
  >(ResetPortalUserPasswordWithUrlDocument, options);
}
export type ResetPortalUserPasswordWithUrlMutationHookResult = ReturnType<
  typeof useResetPortalUserPasswordWithUrlMutation
>;
export type ResetPortalUserPasswordWithUrlMutationResult =
  Apollo.MutationResult<ResetPortalUserPasswordWithUrlMutation>;
export type ResetPortalUserPasswordWithUrlMutationOptions =
  Apollo.BaseMutationOptions<
    ResetPortalUserPasswordWithUrlMutation,
    ResetPortalUserPasswordWithUrlMutationVariables
  >;
export const ForgotPortalPasswordWithOtpDocument = gql`
  mutation ForgotPortalPasswordWithOtp($input: PasswordWithOTPInput!) {
    forgotPortalPasswordWithOTP(input: $input)
  }
`;
export type ForgotPortalPasswordWithOtpMutationFn = Apollo.MutationFunction<
  ForgotPortalPasswordWithOtpMutation,
  ForgotPortalPasswordWithOtpMutationVariables
>;

/**
 * __useForgotPortalPasswordWithOtpMutation__
 *
 * To run a mutation, you first call `useForgotPortalPasswordWithOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPortalPasswordWithOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPortalPasswordWithOtpMutation, { data, loading, error }] = useForgotPortalPasswordWithOtpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useForgotPortalPasswordWithOtpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgotPortalPasswordWithOtpMutation,
    ForgotPortalPasswordWithOtpMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ForgotPortalPasswordWithOtpMutation,
    ForgotPortalPasswordWithOtpMutationVariables
  >(ForgotPortalPasswordWithOtpDocument, options);
}
export type ForgotPortalPasswordWithOtpMutationHookResult = ReturnType<
  typeof useForgotPortalPasswordWithOtpMutation
>;
export type ForgotPortalPasswordWithOtpMutationResult =
  Apollo.MutationResult<ForgotPortalPasswordWithOtpMutation>;
export type ForgotPortalPasswordWithOtpMutationOptions =
  Apollo.BaseMutationOptions<
    ForgotPortalPasswordWithOtpMutation,
    ForgotPortalPasswordWithOtpMutationVariables
  >;
export const PortalChangePasswordDocument = gql`
  mutation PortalChangePassword($input: PortalAuthChangePasswordInput!) {
    portalChangePassword(input: $input)
  }
`;
export type PortalChangePasswordMutationFn = Apollo.MutationFunction<
  PortalChangePasswordMutation,
  PortalChangePasswordMutationVariables
>;

/**
 * __usePortalChangePasswordMutation__
 *
 * To run a mutation, you first call `usePortalChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePortalChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [portalChangePasswordMutation, { data, loading, error }] = usePortalChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePortalChangePasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PortalChangePasswordMutation,
    PortalChangePasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PortalChangePasswordMutation,
    PortalChangePasswordMutationVariables
  >(PortalChangePasswordDocument, options);
}
export type PortalChangePasswordMutationHookResult = ReturnType<
  typeof usePortalChangePasswordMutation
>;
export type PortalChangePasswordMutationResult =
  Apollo.MutationResult<PortalChangePasswordMutation>;
export type PortalChangePasswordMutationOptions = Apollo.BaseMutationOptions<
  PortalChangePasswordMutation,
  PortalChangePasswordMutationVariables
>;
export const GenerateOtpDocument = gql`
  mutation GenerateOtp($input: GenerateOTPInput!) {
    generateOTP(input: $input)
  }
`;
export type GenerateOtpMutationFn = Apollo.MutationFunction<
  GenerateOtpMutation,
  GenerateOtpMutationVariables
>;

/**
 * __useGenerateOtpMutation__
 *
 * To run a mutation, you first call `useGenerateOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateOtpMutation, { data, loading, error }] = useGenerateOtpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateOtpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GenerateOtpMutation,
    GenerateOtpMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<GenerateOtpMutation, GenerateOtpMutationVariables>(
    GenerateOtpDocument,
    options
  );
}
export type GenerateOtpMutationHookResult = ReturnType<
  typeof useGenerateOtpMutation
>;
export type GenerateOtpMutationResult =
  Apollo.MutationResult<GenerateOtpMutation>;
export type GenerateOtpMutationOptions = Apollo.BaseMutationOptions<
  GenerateOtpMutation,
  GenerateOtpMutationVariables
>;
export const CustomerOtpSignInDocument = gql`
  mutation CustomerOtpSignIn($input: OTPSignInInput!) {
    otpSignIn(input: $input) {
      ...AccessTokenInfo
    }
  }
  ${AccessTokenInfoFragmentDoc}
`;
export type CustomerOtpSignInMutationFn = Apollo.MutationFunction<
  CustomerOtpSignInMutation,
  CustomerOtpSignInMutationVariables
>;

/**
 * __useCustomerOtpSignInMutation__
 *
 * To run a mutation, you first call `useCustomerOtpSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerOtpSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerOtpSignInMutation, { data, loading, error }] = useCustomerOtpSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCustomerOtpSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CustomerOtpSignInMutation,
    CustomerOtpSignInMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CustomerOtpSignInMutation,
    CustomerOtpSignInMutationVariables
  >(CustomerOtpSignInDocument, options);
}
export type CustomerOtpSignInMutationHookResult = ReturnType<
  typeof useCustomerOtpSignInMutation
>;
export type CustomerOtpSignInMutationResult =
  Apollo.MutationResult<CustomerOtpSignInMutation>;
export type CustomerOtpSignInMutationOptions = Apollo.BaseMutationOptions<
  CustomerOtpSignInMutation,
  CustomerOtpSignInMutationVariables
>;
export const CustomerSignInDocument = gql`
  mutation CustomerSignIn($input: SignInInput!) {
    signIn(input: $input) {
      ...AccessTokenInfo
    }
  }
  ${AccessTokenInfoFragmentDoc}
`;
export type CustomerSignInMutationFn = Apollo.MutationFunction<
  CustomerSignInMutation,
  CustomerSignInMutationVariables
>;

/**
 * __useCustomerSignInMutation__
 *
 * To run a mutation, you first call `useCustomerSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerSignInMutation, { data, loading, error }] = useCustomerSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCustomerSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CustomerSignInMutation,
    CustomerSignInMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CustomerSignInMutation,
    CustomerSignInMutationVariables
  >(CustomerSignInDocument, options);
}
export type CustomerSignInMutationHookResult = ReturnType<
  typeof useCustomerSignInMutation
>;
export type CustomerSignInMutationResult =
  Apollo.MutationResult<CustomerSignInMutation>;
export type CustomerSignInMutationOptions = Apollo.BaseMutationOptions<
  CustomerSignInMutation,
  CustomerSignInMutationVariables
>;
export const CustomerRegisterDocument = gql`
  mutation CustomerRegister(
    $input: RegisterInput!
    $token: ValidateSecuredTokenInput!
  ) {
    register(input: $input, token: $token) {
      ...AccessTokenInfo
    }
  }
  ${AccessTokenInfoFragmentDoc}
`;
export type CustomerRegisterMutationFn = Apollo.MutationFunction<
  CustomerRegisterMutation,
  CustomerRegisterMutationVariables
>;

/**
 * __useCustomerRegisterMutation__
 *
 * To run a mutation, you first call `useCustomerRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerRegisterMutation, { data, loading, error }] = useCustomerRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useCustomerRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CustomerRegisterMutation,
    CustomerRegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CustomerRegisterMutation,
    CustomerRegisterMutationVariables
  >(CustomerRegisterDocument, options);
}
export type CustomerRegisterMutationHookResult = ReturnType<
  typeof useCustomerRegisterMutation
>;
export type CustomerRegisterMutationResult =
  Apollo.MutationResult<CustomerRegisterMutation>;
export type CustomerRegisterMutationOptions = Apollo.BaseMutationOptions<
  CustomerRegisterMutation,
  CustomerRegisterMutationVariables
>;
export const GetCustomerAuthProfileDocument = gql`
  query GetCustomerAuthProfile {
    getAuthProfile {
      ...CustomerUser
    }
  }
  ${CustomerUserFragmentDoc}
`;

/**
 * __useGetCustomerAuthProfileQuery__
 *
 * To run a query within a React component, call `useGetCustomerAuthProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerAuthProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerAuthProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomerAuthProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCustomerAuthProfileQuery,
    GetCustomerAuthProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCustomerAuthProfileQuery,
    GetCustomerAuthProfileQueryVariables
  >(GetCustomerAuthProfileDocument, options);
}
export function useGetCustomerAuthProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCustomerAuthProfileQuery,
    GetCustomerAuthProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCustomerAuthProfileQuery,
    GetCustomerAuthProfileQueryVariables
  >(GetCustomerAuthProfileDocument, options);
}
export type GetCustomerAuthProfileQueryHookResult = ReturnType<
  typeof useGetCustomerAuthProfileQuery
>;
export type GetCustomerAuthProfileLazyQueryHookResult = ReturnType<
  typeof useGetCustomerAuthProfileLazyQuery
>;
export type GetCustomerAuthProfileQueryResult = Apollo.QueryResult<
  GetCustomerAuthProfileQuery,
  GetCustomerAuthProfileQueryVariables
>;
export const ForgotPasswordWithOtpDocument = gql`
  mutation ForgotPasswordWithOtp($input: PasswordWithOTPInput!) {
    forgotPasswordWithOTP(input: $input)
  }
`;
export type ForgotPasswordWithOtpMutationFn = Apollo.MutationFunction<
  ForgotPasswordWithOtpMutation,
  ForgotPasswordWithOtpMutationVariables
>;

/**
 * __useForgotPasswordWithOtpMutation__
 *
 * To run a mutation, you first call `useForgotPasswordWithOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordWithOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordWithOtpMutation, { data, loading, error }] = useForgotPasswordWithOtpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useForgotPasswordWithOtpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgotPasswordWithOtpMutation,
    ForgotPasswordWithOtpMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ForgotPasswordWithOtpMutation,
    ForgotPasswordWithOtpMutationVariables
  >(ForgotPasswordWithOtpDocument, options);
}
export type ForgotPasswordWithOtpMutationHookResult = ReturnType<
  typeof useForgotPasswordWithOtpMutation
>;
export type ForgotPasswordWithOtpMutationResult =
  Apollo.MutationResult<ForgotPasswordWithOtpMutation>;
export type ForgotPasswordWithOtpMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordWithOtpMutation,
  ForgotPasswordWithOtpMutationVariables
>;
export const IsRegisterableDocument = gql`
  mutation IsRegisterable($email: String!) {
    isRegisterable(email: $email)
  }
`;
export type IsRegisterableMutationFn = Apollo.MutationFunction<
  IsRegisterableMutation,
  IsRegisterableMutationVariables
>;

/**
 * __useIsRegisterableMutation__
 *
 * To run a mutation, you first call `useIsRegisterableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIsRegisterableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [isRegisterableMutation, { data, loading, error }] = useIsRegisterableMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useIsRegisterableMutation(
  baseOptions?: Apollo.MutationHookOptions<
    IsRegisterableMutation,
    IsRegisterableMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    IsRegisterableMutation,
    IsRegisterableMutationVariables
  >(IsRegisterableDocument, options);
}
export type IsRegisterableMutationHookResult = ReturnType<
  typeof useIsRegisterableMutation
>;
export type IsRegisterableMutationResult =
  Apollo.MutationResult<IsRegisterableMutation>;
export type IsRegisterableMutationOptions = Apollo.BaseMutationOptions<
  IsRegisterableMutation,
  IsRegisterableMutationVariables
>;
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($input: PasswordInput!) {
    forgotPassword(input: $input)
  }
`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useForgotPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument, options);
}
export type ForgotPasswordMutationHookResult = ReturnType<
  typeof useForgotPasswordMutation
>;
export type ForgotPasswordMutationResult =
  Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export const ValidateSecuredTokenDocument = gql`
  query ValidateSecuredToken($input: ValidateSecuredTokenInput!) {
    validateSecuredToken(input: $input)
  }
`;

/**
 * __useValidateSecuredTokenQuery__
 *
 * To run a query within a React component, call `useValidateSecuredTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidateSecuredTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidateSecuredTokenQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useValidateSecuredTokenQuery(
  baseOptions: Apollo.QueryHookOptions<
    ValidateSecuredTokenQuery,
    ValidateSecuredTokenQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ValidateSecuredTokenQuery,
    ValidateSecuredTokenQueryVariables
  >(ValidateSecuredTokenDocument, options);
}
export function useValidateSecuredTokenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ValidateSecuredTokenQuery,
    ValidateSecuredTokenQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ValidateSecuredTokenQuery,
    ValidateSecuredTokenQueryVariables
  >(ValidateSecuredTokenDocument, options);
}
export type ValidateSecuredTokenQueryHookResult = ReturnType<
  typeof useValidateSecuredTokenQuery
>;
export type ValidateSecuredTokenLazyQueryHookResult = ReturnType<
  typeof useValidateSecuredTokenLazyQuery
>;
export type ValidateSecuredTokenQueryResult = Apollo.QueryResult<
  ValidateSecuredTokenQuery,
  ValidateSecuredTokenQueryVariables
>;
export const GenerateSignedUrlDocument = gql`
  mutation generateSignedUrl($input: UploadRequest!) {
    generateSignedUrl(input: $input) {
      signedUrl
    }
  }
`;
export type GenerateSignedUrlMutationFn = Apollo.MutationFunction<
  GenerateSignedUrlMutation,
  GenerateSignedUrlMutationVariables
>;

/**
 * __useGenerateSignedUrlMutation__
 *
 * To run a mutation, you first call `useGenerateSignedUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateSignedUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateSignedUrlMutation, { data, loading, error }] = useGenerateSignedUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateSignedUrlMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GenerateSignedUrlMutation,
    GenerateSignedUrlMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    GenerateSignedUrlMutation,
    GenerateSignedUrlMutationVariables
  >(GenerateSignedUrlDocument, options);
}
export type GenerateSignedUrlMutationHookResult = ReturnType<
  typeof useGenerateSignedUrlMutation
>;
export type GenerateSignedUrlMutationResult =
  Apollo.MutationResult<GenerateSignedUrlMutation>;
export type GenerateSignedUrlMutationOptions = Apollo.BaseMutationOptions<
  GenerateSignedUrlMutation,
  GenerateSignedUrlMutationVariables
>;
export const UpdateUserProfileDocument = gql`
  mutation UpdateUserProfile($input: UpdateProfileInput!) {
    updateUserProfile(input: $input) {
      ...CustomerUser
    }
  }
  ${CustomerUserFragmentDoc}
`;
export type UpdateUserProfileMutationFn = Apollo.MutationFunction<
  UpdateUserProfileMutation,
  UpdateUserProfileMutationVariables
>;

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserProfileMutation,
    UpdateUserProfileMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateUserProfileMutation,
    UpdateUserProfileMutationVariables
  >(UpdateUserProfileDocument, options);
}
export type UpdateUserProfileMutationHookResult = ReturnType<
  typeof useUpdateUserProfileMutation
>;
export type UpdateUserProfileMutationResult =
  Apollo.MutationResult<UpdateUserProfileMutation>;
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserProfileMutation,
  UpdateUserProfileMutationVariables
>;
export const GetUsersDocument = gql`
  query GetUsers(
    $filter: UserFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [UserSort!]! = [{ direction: DESC, field: createdAt }]
  ) {
    getUsers(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...PortalCustomerUser
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${PortalCustomerUserFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
export const ExportCustomersDocument = gql`
  query ExportCustomers(
    $filter: UserFilter! = {}
    $paging: OffsetPaging! = {}
    $sorting: [UserSort!]! = []
  ) {
    exportCustomers(filter: $filter, paging: $paging, sorting: $sorting)
  }
`;

/**
 * __useExportCustomersQuery__
 *
 * To run a query within a React component, call `useExportCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useExportCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExportCustomersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useExportCustomersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ExportCustomersQuery,
    ExportCustomersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ExportCustomersQuery, ExportCustomersQueryVariables>(
    ExportCustomersDocument,
    options
  );
}
export function useExportCustomersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ExportCustomersQuery,
    ExportCustomersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ExportCustomersQuery,
    ExportCustomersQueryVariables
  >(ExportCustomersDocument, options);
}
export type ExportCustomersQueryHookResult = ReturnType<
  typeof useExportCustomersQuery
>;
export type ExportCustomersLazyQueryHookResult = ReturnType<
  typeof useExportCustomersLazyQuery
>;
export type ExportCustomersQueryResult = Apollo.QueryResult<
  ExportCustomersQuery,
  ExportCustomersQueryVariables
>;
export const GetUserDocument = gql`
  query GetUser($id: Int!) {
    getUser(id: $id) {
      ...PortalCustomerUser
    }
  }
  ${PortalCustomerUserFragmentDoc}
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>;
export const UpdateOneUserDocument = gql`
  mutation UpdateOneUser($input: UpdateOneUserInput!) {
    updateOneUser(input: $input) {
      ...PortalCustomerUser
    }
  }
  ${PortalCustomerUserFragmentDoc}
`;
export type UpdateOneUserMutationFn = Apollo.MutationFunction<
  UpdateOneUserMutation,
  UpdateOneUserMutationVariables
>;

/**
 * __useUpdateOneUserMutation__
 *
 * To run a mutation, you first call `useUpdateOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneUserMutation, { data, loading, error }] = useUpdateOneUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOneUserMutation,
    UpdateOneUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOneUserMutation,
    UpdateOneUserMutationVariables
  >(UpdateOneUserDocument, options);
}
export type UpdateOneUserMutationHookResult = ReturnType<
  typeof useUpdateOneUserMutation
>;
export type UpdateOneUserMutationResult =
  Apollo.MutationResult<UpdateOneUserMutation>;
export type UpdateOneUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateOneUserMutation,
  UpdateOneUserMutationVariables
>;
export const GetPortalUsersDocument = gql`
  query GetPortalUsers(
    $filter: PortalUserFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [PortalUserSort!]! = [{ direction: DESC, field: createdAt }]
  ) {
    getPortalUsers(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...PortalUser
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${PortalUserFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPortalUsersQuery__
 *
 * To run a query within a React component, call `useGetPortalUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPortalUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPortalUsersQuery,
    GetPortalUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPortalUsersQuery, GetPortalUsersQueryVariables>(
    GetPortalUsersDocument,
    options
  );
}
export function useGetPortalUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalUsersQuery,
    GetPortalUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPortalUsersQuery, GetPortalUsersQueryVariables>(
    GetPortalUsersDocument,
    options
  );
}
export type GetPortalUsersQueryHookResult = ReturnType<
  typeof useGetPortalUsersQuery
>;
export type GetPortalUsersLazyQueryHookResult = ReturnType<
  typeof useGetPortalUsersLazyQuery
>;
export type GetPortalUsersQueryResult = Apollo.QueryResult<
  GetPortalUsersQuery,
  GetPortalUsersQueryVariables
>;
export const GetPortalUserDocument = gql`
  query GetPortalUser($id: Int!) {
    getPortalUser(id: $id) {
      ...PortalUser
    }
  }
  ${PortalUserFragmentDoc}
`;

/**
 * __useGetPortalUserQuery__
 *
 * To run a query within a React component, call `useGetPortalUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPortalUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPortalUserQuery,
    GetPortalUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPortalUserQuery, GetPortalUserQueryVariables>(
    GetPortalUserDocument,
    options
  );
}
export function useGetPortalUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalUserQuery,
    GetPortalUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPortalUserQuery, GetPortalUserQueryVariables>(
    GetPortalUserDocument,
    options
  );
}
export type GetPortalUserQueryHookResult = ReturnType<
  typeof useGetPortalUserQuery
>;
export type GetPortalUserLazyQueryHookResult = ReturnType<
  typeof useGetPortalUserLazyQuery
>;
export type GetPortalUserQueryResult = Apollo.QueryResult<
  GetPortalUserQuery,
  GetPortalUserQueryVariables
>;
export const CreatePortalUserDocument = gql`
  mutation CreatePortalUser($input: CreatePortalUserInput!) {
    createPortalUser(input: $input) {
      ...PortalUser
    }
  }
  ${PortalUserFragmentDoc}
`;
export type CreatePortalUserMutationFn = Apollo.MutationFunction<
  CreatePortalUserMutation,
  CreatePortalUserMutationVariables
>;

/**
 * __useCreatePortalUserMutation__
 *
 * To run a mutation, you first call `useCreatePortalUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePortalUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPortalUserMutation, { data, loading, error }] = useCreatePortalUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePortalUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePortalUserMutation,
    CreatePortalUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreatePortalUserMutation,
    CreatePortalUserMutationVariables
  >(CreatePortalUserDocument, options);
}
export type CreatePortalUserMutationHookResult = ReturnType<
  typeof useCreatePortalUserMutation
>;
export type CreatePortalUserMutationResult =
  Apollo.MutationResult<CreatePortalUserMutation>;
export type CreatePortalUserMutationOptions = Apollo.BaseMutationOptions<
  CreatePortalUserMutation,
  CreatePortalUserMutationVariables
>;
export const UpdatePortalUserDocument = gql`
  mutation UpdatePortalUser($id: Int!, $update: UpdatePortalUserInput!) {
    updatePortalUser(id: $id, update: $update) {
      ...PortalUser
    }
  }
  ${PortalUserFragmentDoc}
`;
export type UpdatePortalUserMutationFn = Apollo.MutationFunction<
  UpdatePortalUserMutation,
  UpdatePortalUserMutationVariables
>;

/**
 * __useUpdatePortalUserMutation__
 *
 * To run a mutation, you first call `useUpdatePortalUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePortalUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePortalUserMutation, { data, loading, error }] = useUpdatePortalUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdatePortalUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePortalUserMutation,
    UpdatePortalUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdatePortalUserMutation,
    UpdatePortalUserMutationVariables
  >(UpdatePortalUserDocument, options);
}
export type UpdatePortalUserMutationHookResult = ReturnType<
  typeof useUpdatePortalUserMutation
>;
export type UpdatePortalUserMutationResult =
  Apollo.MutationResult<UpdatePortalUserMutation>;
export type UpdatePortalUserMutationOptions = Apollo.BaseMutationOptions<
  UpdatePortalUserMutation,
  UpdatePortalUserMutationVariables
>;
export const GetHomeBannersDocument = gql`
  query GetHomeBanners(
    $filter: HomeBannerFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [HomeBannerSort!]! = []
  ) {
    getHomeBanners(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...HomeBannerInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${HomeBannerInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetHomeBannersQuery__
 *
 * To run a query within a React component, call `useGetHomeBannersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomeBannersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomeBannersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetHomeBannersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetHomeBannersQuery,
    GetHomeBannersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetHomeBannersQuery, GetHomeBannersQueryVariables>(
    GetHomeBannersDocument,
    options
  );
}
export function useGetHomeBannersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHomeBannersQuery,
    GetHomeBannersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetHomeBannersQuery, GetHomeBannersQueryVariables>(
    GetHomeBannersDocument,
    options
  );
}
export type GetHomeBannersQueryHookResult = ReturnType<
  typeof useGetHomeBannersQuery
>;
export type GetHomeBannersLazyQueryHookResult = ReturnType<
  typeof useGetHomeBannersLazyQuery
>;
export type GetHomeBannersQueryResult = Apollo.QueryResult<
  GetHomeBannersQuery,
  GetHomeBannersQueryVariables
>;
export const GetPortalHomeBannerDocument = gql`
  query GetPortalHomeBanner($id: Int!) {
    getPortalHomeBanner(id: $id) {
      ...HomeBannerInfo
    }
  }
  ${HomeBannerInfoFragmentDoc}
`;

/**
 * __useGetPortalHomeBannerQuery__
 *
 * To run a query within a React component, call `useGetPortalHomeBannerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalHomeBannerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalHomeBannerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPortalHomeBannerQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPortalHomeBannerQuery,
    GetPortalHomeBannerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalHomeBannerQuery,
    GetPortalHomeBannerQueryVariables
  >(GetPortalHomeBannerDocument, options);
}
export function useGetPortalHomeBannerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalHomeBannerQuery,
    GetPortalHomeBannerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalHomeBannerQuery,
    GetPortalHomeBannerQueryVariables
  >(GetPortalHomeBannerDocument, options);
}
export type GetPortalHomeBannerQueryHookResult = ReturnType<
  typeof useGetPortalHomeBannerQuery
>;
export type GetPortalHomeBannerLazyQueryHookResult = ReturnType<
  typeof useGetPortalHomeBannerLazyQuery
>;
export type GetPortalHomeBannerQueryResult = Apollo.QueryResult<
  GetPortalHomeBannerQuery,
  GetPortalHomeBannerQueryVariables
>;
export const GetPortalHomeBannersDocument = gql`
  query GetPortalHomeBanners(
    $filter: HomeBannerFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [HomeBannerSort!]! = []
  ) {
    getPortalHomeBanners(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...HomeBannerInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${HomeBannerInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPortalHomeBannersQuery__
 *
 * To run a query within a React component, call `useGetPortalHomeBannersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalHomeBannersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalHomeBannersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPortalHomeBannersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPortalHomeBannersQuery,
    GetPortalHomeBannersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalHomeBannersQuery,
    GetPortalHomeBannersQueryVariables
  >(GetPortalHomeBannersDocument, options);
}
export function useGetPortalHomeBannersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalHomeBannersQuery,
    GetPortalHomeBannersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalHomeBannersQuery,
    GetPortalHomeBannersQueryVariables
  >(GetPortalHomeBannersDocument, options);
}
export type GetPortalHomeBannersQueryHookResult = ReturnType<
  typeof useGetPortalHomeBannersQuery
>;
export type GetPortalHomeBannersLazyQueryHookResult = ReturnType<
  typeof useGetPortalHomeBannersLazyQuery
>;
export type GetPortalHomeBannersQueryResult = Apollo.QueryResult<
  GetPortalHomeBannersQuery,
  GetPortalHomeBannersQueryVariables
>;
export const CreateOneHomeBannerDocument = gql`
  mutation CreateOneHomeBanner($input: CreateHomeBannerInput!) {
    createOneHomeBanner(input: $input) {
      ...HomeBannerInfo
    }
  }
  ${HomeBannerInfoFragmentDoc}
`;
export type CreateOneHomeBannerMutationFn = Apollo.MutationFunction<
  CreateOneHomeBannerMutation,
  CreateOneHomeBannerMutationVariables
>;

/**
 * __useCreateOneHomeBannerMutation__
 *
 * To run a mutation, you first call `useCreateOneHomeBannerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneHomeBannerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneHomeBannerMutation, { data, loading, error }] = useCreateOneHomeBannerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneHomeBannerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOneHomeBannerMutation,
    CreateOneHomeBannerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateOneHomeBannerMutation,
    CreateOneHomeBannerMutationVariables
  >(CreateOneHomeBannerDocument, options);
}
export type CreateOneHomeBannerMutationHookResult = ReturnType<
  typeof useCreateOneHomeBannerMutation
>;
export type CreateOneHomeBannerMutationResult =
  Apollo.MutationResult<CreateOneHomeBannerMutation>;
export type CreateOneHomeBannerMutationOptions = Apollo.BaseMutationOptions<
  CreateOneHomeBannerMutation,
  CreateOneHomeBannerMutationVariables
>;
export const UpdateOneHomeBannerDocument = gql`
  mutation UpdateOneHomeBanner($input: UpdateOneHomeBannerInput!) {
    updateOneHomeBanner(input: $input) {
      ...HomeBannerInfo
    }
  }
  ${HomeBannerInfoFragmentDoc}
`;
export type UpdateOneHomeBannerMutationFn = Apollo.MutationFunction<
  UpdateOneHomeBannerMutation,
  UpdateOneHomeBannerMutationVariables
>;

/**
 * __useUpdateOneHomeBannerMutation__
 *
 * To run a mutation, you first call `useUpdateOneHomeBannerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneHomeBannerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneHomeBannerMutation, { data, loading, error }] = useUpdateOneHomeBannerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneHomeBannerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOneHomeBannerMutation,
    UpdateOneHomeBannerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOneHomeBannerMutation,
    UpdateOneHomeBannerMutationVariables
  >(UpdateOneHomeBannerDocument, options);
}
export type UpdateOneHomeBannerMutationHookResult = ReturnType<
  typeof useUpdateOneHomeBannerMutation
>;
export type UpdateOneHomeBannerMutationResult =
  Apollo.MutationResult<UpdateOneHomeBannerMutation>;
export type UpdateOneHomeBannerMutationOptions = Apollo.BaseMutationOptions<
  UpdateOneHomeBannerMutation,
  UpdateOneHomeBannerMutationVariables
>;
export const DeleteOneHomeBannerDocument = gql`
  mutation DeleteOneHomeBanner($input: DeleteOneHomeBannerInput!) {
    deleteOneHomeBanner(input: $input) {
      ...HomeBannerDeleteInfo
    }
  }
  ${HomeBannerDeleteInfoFragmentDoc}
`;
export type DeleteOneHomeBannerMutationFn = Apollo.MutationFunction<
  DeleteOneHomeBannerMutation,
  DeleteOneHomeBannerMutationVariables
>;

/**
 * __useDeleteOneHomeBannerMutation__
 *
 * To run a mutation, you first call `useDeleteOneHomeBannerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneHomeBannerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneHomeBannerMutation, { data, loading, error }] = useDeleteOneHomeBannerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneHomeBannerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteOneHomeBannerMutation,
    DeleteOneHomeBannerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteOneHomeBannerMutation,
    DeleteOneHomeBannerMutationVariables
  >(DeleteOneHomeBannerDocument, options);
}
export type DeleteOneHomeBannerMutationHookResult = ReturnType<
  typeof useDeleteOneHomeBannerMutation
>;
export type DeleteOneHomeBannerMutationResult =
  Apollo.MutationResult<DeleteOneHomeBannerMutation>;
export type DeleteOneHomeBannerMutationOptions = Apollo.BaseMutationOptions<
  DeleteOneHomeBannerMutation,
  DeleteOneHomeBannerMutationVariables
>;
export const GetPortalApplicationsDocument = gql`
  query GetPortalApplications(
    $filter: ApplicationDtoFilter! = {}
    $modelName: String
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [ApplicationDtoSort!]! = [{ direction: DESC, field: createdAt }]
  ) {
    getPortalApplications(
      filter: $filter
      modelName: $modelName
      paging: $paging
      sorting: $sorting
    ) {
      nodes {
        ...PortalApplicationInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${PortalApplicationInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPortalApplicationsQuery__
 *
 * To run a query within a React component, call `useGetPortalApplicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalApplicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalApplicationsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      modelName: // value for 'modelName'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPortalApplicationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPortalApplicationsQuery,
    GetPortalApplicationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalApplicationsQuery,
    GetPortalApplicationsQueryVariables
  >(GetPortalApplicationsDocument, options);
}
export function useGetPortalApplicationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalApplicationsQuery,
    GetPortalApplicationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalApplicationsQuery,
    GetPortalApplicationsQueryVariables
  >(GetPortalApplicationsDocument, options);
}
export type GetPortalApplicationsQueryHookResult = ReturnType<
  typeof useGetPortalApplicationsQuery
>;
export type GetPortalApplicationsLazyQueryHookResult = ReturnType<
  typeof useGetPortalApplicationsLazyQuery
>;
export type GetPortalApplicationsQueryResult = Apollo.QueryResult<
  GetPortalApplicationsQuery,
  GetPortalApplicationsQueryVariables
>;
export const GetPortalApplicationDocument = gql`
  query GetPortalApplication($id: Int) {
    getPortalApplication(id: $id) {
      ...PortalApplicationInfo
    }
  }
  ${PortalApplicationInfoFragmentDoc}
`;

/**
 * __useGetPortalApplicationQuery__
 *
 * To run a query within a React component, call `useGetPortalApplicationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalApplicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalApplicationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPortalApplicationQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPortalApplicationQuery,
    GetPortalApplicationQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalApplicationQuery,
    GetPortalApplicationQueryVariables
  >(GetPortalApplicationDocument, options);
}
export function useGetPortalApplicationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalApplicationQuery,
    GetPortalApplicationQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalApplicationQuery,
    GetPortalApplicationQueryVariables
  >(GetPortalApplicationDocument, options);
}
export type GetPortalApplicationQueryHookResult = ReturnType<
  typeof useGetPortalApplicationQuery
>;
export type GetPortalApplicationLazyQueryHookResult = ReturnType<
  typeof useGetPortalApplicationLazyQuery
>;
export type GetPortalApplicationQueryResult = Apollo.QueryResult<
  GetPortalApplicationQuery,
  GetPortalApplicationQueryVariables
>;
export const CreateOneFinancialPlanDocument = gql`
  mutation CreateOneFinancialPlan($input: CreateFinancialPlanInput!) {
    createOneFinancialPlan(input: $input) {
      ...PortalFinancePlanInfo
    }
  }
  ${PortalFinancePlanInfoFragmentDoc}
`;
export type CreateOneFinancialPlanMutationFn = Apollo.MutationFunction<
  CreateOneFinancialPlanMutation,
  CreateOneFinancialPlanMutationVariables
>;

/**
 * __useCreateOneFinancialPlanMutation__
 *
 * To run a mutation, you first call `useCreateOneFinancialPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneFinancialPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneFinancialPlanMutation, { data, loading, error }] = useCreateOneFinancialPlanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneFinancialPlanMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOneFinancialPlanMutation,
    CreateOneFinancialPlanMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateOneFinancialPlanMutation,
    CreateOneFinancialPlanMutationVariables
  >(CreateOneFinancialPlanDocument, options);
}
export type CreateOneFinancialPlanMutationHookResult = ReturnType<
  typeof useCreateOneFinancialPlanMutation
>;
export type CreateOneFinancialPlanMutationResult =
  Apollo.MutationResult<CreateOneFinancialPlanMutation>;
export type CreateOneFinancialPlanMutationOptions = Apollo.BaseMutationOptions<
  CreateOneFinancialPlanMutation,
  CreateOneFinancialPlanMutationVariables
>;
export const GetFinancialPlansDocument = gql`
  query GetFinancialPlans(
    $filter: FinancialPlanFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [FinancialPlanSort!]! = []
  ) {
    getFeatureFinancialPlans(
      filter: $filter
      paging: $paging
      sorting: $sorting
    ) {
      nodes {
        ...FinancePlanInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${FinancePlanInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetFinancialPlansQuery__
 *
 * To run a query within a React component, call `useGetFinancialPlansQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFinancialPlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFinancialPlansQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetFinancialPlansQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFinancialPlansQuery,
    GetFinancialPlansQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetFinancialPlansQuery,
    GetFinancialPlansQueryVariables
  >(GetFinancialPlansDocument, options);
}
export function useGetFinancialPlansLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFinancialPlansQuery,
    GetFinancialPlansQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFinancialPlansQuery,
    GetFinancialPlansQueryVariables
  >(GetFinancialPlansDocument, options);
}
export type GetFinancialPlansQueryHookResult = ReturnType<
  typeof useGetFinancialPlansQuery
>;
export type GetFinancialPlansLazyQueryHookResult = ReturnType<
  typeof useGetFinancialPlansLazyQuery
>;
export type GetFinancialPlansQueryResult = Apollo.QueryResult<
  GetFinancialPlansQuery,
  GetFinancialPlansQueryVariables
>;
export const GetPortalFinancialsPlansDocument = gql`
  query GetPortalFinancialsPlans(
    $filter: BasicFinancialPlanFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [BasicFinancialPlanSort!]! = []
  ) {
    getPortalFinancialsPlans(
      filter: $filter
      paging: $paging
      sorting: $sorting
    ) {
      nodes {
        ...PortalFinancePlanInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${PortalFinancePlanInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPortalFinancialsPlansQuery__
 *
 * To run a query within a React component, call `useGetPortalFinancialsPlansQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalFinancialsPlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalFinancialsPlansQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPortalFinancialsPlansQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPortalFinancialsPlansQuery,
    GetPortalFinancialsPlansQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalFinancialsPlansQuery,
    GetPortalFinancialsPlansQueryVariables
  >(GetPortalFinancialsPlansDocument, options);
}
export function useGetPortalFinancialsPlansLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalFinancialsPlansQuery,
    GetPortalFinancialsPlansQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalFinancialsPlansQuery,
    GetPortalFinancialsPlansQueryVariables
  >(GetPortalFinancialsPlansDocument, options);
}
export type GetPortalFinancialsPlansQueryHookResult = ReturnType<
  typeof useGetPortalFinancialsPlansQuery
>;
export type GetPortalFinancialsPlansLazyQueryHookResult = ReturnType<
  typeof useGetPortalFinancialsPlansLazyQuery
>;
export type GetPortalFinancialsPlansQueryResult = Apollo.QueryResult<
  GetPortalFinancialsPlansQuery,
  GetPortalFinancialsPlansQueryVariables
>;
export const UpdateOneFinancialPlanDocument = gql`
  mutation UpdateOneFinancialPlan($input: UpdateOneFinancialPlanInput!) {
    updateOneFinancialPlan(input: $input) {
      ...PortalFinancePlanInfo
    }
  }
  ${PortalFinancePlanInfoFragmentDoc}
`;
export type UpdateOneFinancialPlanMutationFn = Apollo.MutationFunction<
  UpdateOneFinancialPlanMutation,
  UpdateOneFinancialPlanMutationVariables
>;

/**
 * __useUpdateOneFinancialPlanMutation__
 *
 * To run a mutation, you first call `useUpdateOneFinancialPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneFinancialPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneFinancialPlanMutation, { data, loading, error }] = useUpdateOneFinancialPlanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneFinancialPlanMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOneFinancialPlanMutation,
    UpdateOneFinancialPlanMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOneFinancialPlanMutation,
    UpdateOneFinancialPlanMutationVariables
  >(UpdateOneFinancialPlanDocument, options);
}
export type UpdateOneFinancialPlanMutationHookResult = ReturnType<
  typeof useUpdateOneFinancialPlanMutation
>;
export type UpdateOneFinancialPlanMutationResult =
  Apollo.MutationResult<UpdateOneFinancialPlanMutation>;
export type UpdateOneFinancialPlanMutationOptions = Apollo.BaseMutationOptions<
  UpdateOneFinancialPlanMutation,
  UpdateOneFinancialPlanMutationVariables
>;
export const GetPortalFinancialsPlanDocument = gql`
  query GetPortalFinancialsPlan($id: Int!) {
    getPortalFinancialsPlan(id: $id) {
      ...PortalFinancePlanInfo
    }
  }
  ${PortalFinancePlanInfoFragmentDoc}
`;

/**
 * __useGetPortalFinancialsPlanQuery__
 *
 * To run a query within a React component, call `useGetPortalFinancialsPlanQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalFinancialsPlanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalFinancialsPlanQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPortalFinancialsPlanQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPortalFinancialsPlanQuery,
    GetPortalFinancialsPlanQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalFinancialsPlanQuery,
    GetPortalFinancialsPlanQueryVariables
  >(GetPortalFinancialsPlanDocument, options);
}
export function useGetPortalFinancialsPlanLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalFinancialsPlanQuery,
    GetPortalFinancialsPlanQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalFinancialsPlanQuery,
    GetPortalFinancialsPlanQueryVariables
  >(GetPortalFinancialsPlanDocument, options);
}
export type GetPortalFinancialsPlanQueryHookResult = ReturnType<
  typeof useGetPortalFinancialsPlanQuery
>;
export type GetPortalFinancialsPlanLazyQueryHookResult = ReturnType<
  typeof useGetPortalFinancialsPlanLazyQuery
>;
export type GetPortalFinancialsPlanQueryResult = Apollo.QueryResult<
  GetPortalFinancialsPlanQuery,
  GetPortalFinancialsPlanQueryVariables
>;
export const DeleteOneFinancialPlanDocument = gql`
  mutation DeleteOneFinancialPlan($input: Int) {
    deleteOneFinancialPlan(id: $input)
  }
`;
export type DeleteOneFinancialPlanMutationFn = Apollo.MutationFunction<
  DeleteOneFinancialPlanMutation,
  DeleteOneFinancialPlanMutationVariables
>;

/**
 * __useDeleteOneFinancialPlanMutation__
 *
 * To run a mutation, you first call `useDeleteOneFinancialPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneFinancialPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneFinancialPlanMutation, { data, loading, error }] = useDeleteOneFinancialPlanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneFinancialPlanMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteOneFinancialPlanMutation,
    DeleteOneFinancialPlanMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteOneFinancialPlanMutation,
    DeleteOneFinancialPlanMutationVariables
  >(DeleteOneFinancialPlanDocument, options);
}
export type DeleteOneFinancialPlanMutationHookResult = ReturnType<
  typeof useDeleteOneFinancialPlanMutation
>;
export type DeleteOneFinancialPlanMutationResult =
  Apollo.MutationResult<DeleteOneFinancialPlanMutation>;
export type DeleteOneFinancialPlanMutationOptions = Apollo.BaseMutationOptions<
  DeleteOneFinancialPlanMutation,
  DeleteOneFinancialPlanMutationVariables
>;
export const CreateApplicationDocument = gql`
  mutation CreateApplication(
    $input: CreateApplicationInput!
    $safeAsDraft: Boolean
    $supportDocs: [ImageInput!]
  ) {
    createApplication(
      input: $input
      supportDocs: $supportDocs
      safeAsDraft: $safeAsDraft
    ) {
      ...ApplicationInfo
    }
  }
  ${ApplicationInfoFragmentDoc}
`;
export type CreateApplicationMutationFn = Apollo.MutationFunction<
  CreateApplicationMutation,
  CreateApplicationMutationVariables
>;

/**
 * __useCreateApplicationMutation__
 *
 * To run a mutation, you first call `useCreateApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createApplicationMutation, { data, loading, error }] = useCreateApplicationMutation({
 *   variables: {
 *      input: // value for 'input'
 *      safeAsDraft: // value for 'safeAsDraft'
 *      supportDocs: // value for 'supportDocs'
 *   },
 * });
 */
export function useCreateApplicationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateApplicationMutation,
    CreateApplicationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateApplicationMutation,
    CreateApplicationMutationVariables
  >(CreateApplicationDocument, options);
}
export type CreateApplicationMutationHookResult = ReturnType<
  typeof useCreateApplicationMutation
>;
export type CreateApplicationMutationResult =
  Apollo.MutationResult<CreateApplicationMutation>;
export type CreateApplicationMutationOptions = Apollo.BaseMutationOptions<
  CreateApplicationMutation,
  CreateApplicationMutationVariables
>;
export const CancelApplicationDocument = gql`
  mutation CancelApplication($input: Int) {
    cancelApplication(id: $input) {
      ...ApplicationInfo
    }
  }
  ${ApplicationInfoFragmentDoc}
`;
export type CancelApplicationMutationFn = Apollo.MutationFunction<
  CancelApplicationMutation,
  CancelApplicationMutationVariables
>;

/**
 * __useCancelApplicationMutation__
 *
 * To run a mutation, you first call `useCancelApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelApplicationMutation, { data, loading, error }] = useCancelApplicationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelApplicationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CancelApplicationMutation,
    CancelApplicationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CancelApplicationMutation,
    CancelApplicationMutationVariables
  >(CancelApplicationDocument, options);
}
export type CancelApplicationMutationHookResult = ReturnType<
  typeof useCancelApplicationMutation
>;
export type CancelApplicationMutationResult =
  Apollo.MutationResult<CancelApplicationMutation>;
export type CancelApplicationMutationOptions = Apollo.BaseMutationOptions<
  CancelApplicationMutation,
  CancelApplicationMutationVariables
>;
export const UpdateApplicationDocument = gql`
  mutation UpdateApplication(
    $id: Int!
    $safeAsDraft: Boolean
    $supportDocs: [ImageInput!]
    $update: ComputeUpdateApplicationInput!
  ) {
    updateApplication(
      id: $id
      safeAsDraft: $safeAsDraft
      supportDocs: $supportDocs
      update: $update
    ) {
      ...ApplicationInfo
    }
  }
  ${ApplicationInfoFragmentDoc}
`;
export type UpdateApplicationMutationFn = Apollo.MutationFunction<
  UpdateApplicationMutation,
  UpdateApplicationMutationVariables
>;

/**
 * __useUpdateApplicationMutation__
 *
 * To run a mutation, you first call `useUpdateApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateApplicationMutation, { data, loading, error }] = useUpdateApplicationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      safeAsDraft: // value for 'safeAsDraft'
 *      supportDocs: // value for 'supportDocs'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateApplicationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateApplicationMutation,
    UpdateApplicationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateApplicationMutation,
    UpdateApplicationMutationVariables
  >(UpdateApplicationDocument, options);
}
export type UpdateApplicationMutationHookResult = ReturnType<
  typeof useUpdateApplicationMutation
>;
export type UpdateApplicationMutationResult =
  Apollo.MutationResult<UpdateApplicationMutation>;
export type UpdateApplicationMutationOptions = Apollo.BaseMutationOptions<
  UpdateApplicationMutation,
  UpdateApplicationMutationVariables
>;
export const HasApplicationDocument = gql`
  query HasApplication($input: [ApplicationStatusType!]) {
    hasApplication(status: $input)
  }
`;

/**
 * __useHasApplicationQuery__
 *
 * To run a query within a React component, call `useHasApplicationQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasApplicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasApplicationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useHasApplicationQuery(
  baseOptions?: Apollo.QueryHookOptions<
    HasApplicationQuery,
    HasApplicationQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HasApplicationQuery, HasApplicationQueryVariables>(
    HasApplicationDocument,
    options
  );
}
export function useHasApplicationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HasApplicationQuery,
    HasApplicationQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<HasApplicationQuery, HasApplicationQueryVariables>(
    HasApplicationDocument,
    options
  );
}
export type HasApplicationQueryHookResult = ReturnType<
  typeof useHasApplicationQuery
>;
export type HasApplicationLazyQueryHookResult = ReturnType<
  typeof useHasApplicationLazyQuery
>;
export type HasApplicationQueryResult = Apollo.QueryResult<
  HasApplicationQuery,
  HasApplicationQueryVariables
>;
export const GetApplicationByStatusDocument = gql`
  query GetApplicationByStatus($input: ApplicationStatusType) {
    getApplicationByStatus(status: $input) {
      ...ApplicationInfo
    }
  }
  ${ApplicationInfoFragmentDoc}
`;

/**
 * __useGetApplicationByStatusQuery__
 *
 * To run a query within a React component, call `useGetApplicationByStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicationByStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicationByStatusQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetApplicationByStatusQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetApplicationByStatusQuery,
    GetApplicationByStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetApplicationByStatusQuery,
    GetApplicationByStatusQueryVariables
  >(GetApplicationByStatusDocument, options);
}
export function useGetApplicationByStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetApplicationByStatusQuery,
    GetApplicationByStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetApplicationByStatusQuery,
    GetApplicationByStatusQueryVariables
  >(GetApplicationByStatusDocument, options);
}
export type GetApplicationByStatusQueryHookResult = ReturnType<
  typeof useGetApplicationByStatusQuery
>;
export type GetApplicationByStatusLazyQueryHookResult = ReturnType<
  typeof useGetApplicationByStatusLazyQuery
>;
export type GetApplicationByStatusQueryResult = Apollo.QueryResult<
  GetApplicationByStatusQuery,
  GetApplicationByStatusQueryVariables
>;
export const GetPortalOutletsDocument = gql`
  query GetPortalOutlets(
    $filter: OutletFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [OutletSort!]! = []
  ) {
    getPortalOutlets(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...PortalOutletInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${PortalOutletInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPortalOutletsQuery__
 *
 * To run a query within a React component, call `useGetPortalOutletsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalOutletsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalOutletsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPortalOutletsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPortalOutletsQuery,
    GetPortalOutletsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPortalOutletsQuery, GetPortalOutletsQueryVariables>(
    GetPortalOutletsDocument,
    options
  );
}
export function useGetPortalOutletsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalOutletsQuery,
    GetPortalOutletsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalOutletsQuery,
    GetPortalOutletsQueryVariables
  >(GetPortalOutletsDocument, options);
}
export type GetPortalOutletsQueryHookResult = ReturnType<
  typeof useGetPortalOutletsQuery
>;
export type GetPortalOutletsLazyQueryHookResult = ReturnType<
  typeof useGetPortalOutletsLazyQuery
>;
export type GetPortalOutletsQueryResult = Apollo.QueryResult<
  GetPortalOutletsQuery,
  GetPortalOutletsQueryVariables
>;
export const ExportOutletsDocument = gql`
  query ExportOutlets(
    $filter: OutletFilter! = {}
    $paging: OffsetPaging! = {}
    $sorting: [OutletSort!]! = []
  ) {
    exportOutlets(filter: $filter, paging: $paging, sorting: $sorting)
  }
`;

/**
 * __useExportOutletsQuery__
 *
 * To run a query within a React component, call `useExportOutletsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExportOutletsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExportOutletsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useExportOutletsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ExportOutletsQuery,
    ExportOutletsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ExportOutletsQuery, ExportOutletsQueryVariables>(
    ExportOutletsDocument,
    options
  );
}
export function useExportOutletsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ExportOutletsQuery,
    ExportOutletsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ExportOutletsQuery, ExportOutletsQueryVariables>(
    ExportOutletsDocument,
    options
  );
}
export type ExportOutletsQueryHookResult = ReturnType<
  typeof useExportOutletsQuery
>;
export type ExportOutletsLazyQueryHookResult = ReturnType<
  typeof useExportOutletsLazyQuery
>;
export type ExportOutletsQueryResult = Apollo.QueryResult<
  ExportOutletsQuery,
  ExportOutletsQueryVariables
>;
export const GetPortalOutletDocument = gql`
  query GetPortalOutlet($id: Int!) {
    getPortalOutlet(id: $id) {
      ...PortalOutletInfo
    }
  }
  ${PortalOutletInfoFragmentDoc}
`;

/**
 * __useGetPortalOutletQuery__
 *
 * To run a query within a React component, call `useGetPortalOutletQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalOutletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalOutletQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPortalOutletQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPortalOutletQuery,
    GetPortalOutletQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPortalOutletQuery, GetPortalOutletQueryVariables>(
    GetPortalOutletDocument,
    options
  );
}
export function useGetPortalOutletLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalOutletQuery,
    GetPortalOutletQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalOutletQuery,
    GetPortalOutletQueryVariables
  >(GetPortalOutletDocument, options);
}
export type GetPortalOutletQueryHookResult = ReturnType<
  typeof useGetPortalOutletQuery
>;
export type GetPortalOutletLazyQueryHookResult = ReturnType<
  typeof useGetPortalOutletLazyQuery
>;
export type GetPortalOutletQueryResult = Apollo.QueryResult<
  GetPortalOutletQuery,
  GetPortalOutletQueryVariables
>;
export const CreateOneOutletDocument = gql`
  mutation CreateOneOutlet($input: CreateOutletInput!) {
    createOneOutlet(input: $input) {
      ...PortalOutletInfo
    }
  }
  ${PortalOutletInfoFragmentDoc}
`;
export type CreateOneOutletMutationFn = Apollo.MutationFunction<
  CreateOneOutletMutation,
  CreateOneOutletMutationVariables
>;

/**
 * __useCreateOneOutletMutation__
 *
 * To run a mutation, you first call `useCreateOneOutletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneOutletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneOutletMutation, { data, loading, error }] = useCreateOneOutletMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneOutletMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOneOutletMutation,
    CreateOneOutletMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateOneOutletMutation,
    CreateOneOutletMutationVariables
  >(CreateOneOutletDocument, options);
}
export type CreateOneOutletMutationHookResult = ReturnType<
  typeof useCreateOneOutletMutation
>;
export type CreateOneOutletMutationResult =
  Apollo.MutationResult<CreateOneOutletMutation>;
export type CreateOneOutletMutationOptions = Apollo.BaseMutationOptions<
  CreateOneOutletMutation,
  CreateOneOutletMutationVariables
>;
export const UpdateOneOutletDocument = gql`
  mutation UpdateOneOutlet($input: UpdateOneOutletInput!) {
    updateOneOutlet(input: $input) {
      ...PortalOutletInfo
    }
  }
  ${PortalOutletInfoFragmentDoc}
`;
export type UpdateOneOutletMutationFn = Apollo.MutationFunction<
  UpdateOneOutletMutation,
  UpdateOneOutletMutationVariables
>;

/**
 * __useUpdateOneOutletMutation__
 *
 * To run a mutation, you first call `useUpdateOneOutletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneOutletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneOutletMutation, { data, loading, error }] = useUpdateOneOutletMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneOutletMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOneOutletMutation,
    UpdateOneOutletMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOneOutletMutation,
    UpdateOneOutletMutationVariables
  >(UpdateOneOutletDocument, options);
}
export type UpdateOneOutletMutationHookResult = ReturnType<
  typeof useUpdateOneOutletMutation
>;
export type UpdateOneOutletMutationResult =
  Apollo.MutationResult<UpdateOneOutletMutation>;
export type UpdateOneOutletMutationOptions = Apollo.BaseMutationOptions<
  UpdateOneOutletMutation,
  UpdateOneOutletMutationVariables
>;
export const AssignOutletMotorcarDocument = gql`
  mutation AssignOutletMotorcar($input: assignOutletMotorcarInput!) {
    assignOutletMotorcar(input: $input) {
      ...PortalOutletInfo
    }
  }
  ${PortalOutletInfoFragmentDoc}
`;
export type AssignOutletMotorcarMutationFn = Apollo.MutationFunction<
  AssignOutletMotorcarMutation,
  AssignOutletMotorcarMutationVariables
>;

/**
 * __useAssignOutletMotorcarMutation__
 *
 * To run a mutation, you first call `useAssignOutletMotorcarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignOutletMotorcarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignOutletMotorcarMutation, { data, loading, error }] = useAssignOutletMotorcarMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAssignOutletMotorcarMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AssignOutletMotorcarMutation,
    AssignOutletMotorcarMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AssignOutletMotorcarMutation,
    AssignOutletMotorcarMutationVariables
  >(AssignOutletMotorcarDocument, options);
}
export type AssignOutletMotorcarMutationHookResult = ReturnType<
  typeof useAssignOutletMotorcarMutation
>;
export type AssignOutletMotorcarMutationResult =
  Apollo.MutationResult<AssignOutletMotorcarMutation>;
export type AssignOutletMotorcarMutationOptions = Apollo.BaseMutationOptions<
  AssignOutletMotorcarMutation,
  AssignOutletMotorcarMutationVariables
>;
export const GetMiscByKeyDocument = gql`
  query GetMiscByKey($input: MiscType) {
    getMiscByKey(key: $input) {
      ...MiscTypeInfo
    }
  }
  ${MiscTypeInfoFragmentDoc}
`;

/**
 * __useGetMiscByKeyQuery__
 *
 * To run a query within a React component, call `useGetMiscByKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMiscByKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMiscByKeyQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMiscByKeyQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMiscByKeyQuery,
    GetMiscByKeyQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMiscByKeyQuery, GetMiscByKeyQueryVariables>(
    GetMiscByKeyDocument,
    options
  );
}
export function useGetMiscByKeyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMiscByKeyQuery,
    GetMiscByKeyQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMiscByKeyQuery, GetMiscByKeyQueryVariables>(
    GetMiscByKeyDocument,
    options
  );
}
export type GetMiscByKeyQueryHookResult = ReturnType<
  typeof useGetMiscByKeyQuery
>;
export type GetMiscByKeyLazyQueryHookResult = ReturnType<
  typeof useGetMiscByKeyLazyQuery
>;
export type GetMiscByKeyQueryResult = Apollo.QueryResult<
  GetMiscByKeyQuery,
  GetMiscByKeyQueryVariables
>;
export const CreateOneMiscDocument = gql`
  mutation CreateOneMisc($input: CreateOneMiscInput!) {
    createOneMisc(input: $input) {
      ...MiscTypeInfo
    }
  }
  ${MiscTypeInfoFragmentDoc}
`;
export type CreateOneMiscMutationFn = Apollo.MutationFunction<
  CreateOneMiscMutation,
  CreateOneMiscMutationVariables
>;

/**
 * __useCreateOneMiscMutation__
 *
 * To run a mutation, you first call `useCreateOneMiscMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneMiscMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneMiscMutation, { data, loading, error }] = useCreateOneMiscMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneMiscMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOneMiscMutation,
    CreateOneMiscMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateOneMiscMutation,
    CreateOneMiscMutationVariables
  >(CreateOneMiscDocument, options);
}
export type CreateOneMiscMutationHookResult = ReturnType<
  typeof useCreateOneMiscMutation
>;
export type CreateOneMiscMutationResult =
  Apollo.MutationResult<CreateOneMiscMutation>;
export type CreateOneMiscMutationOptions = Apollo.BaseMutationOptions<
  CreateOneMiscMutation,
  CreateOneMiscMutationVariables
>;
export const GetPortalPoliciesDocument = gql`
  query GetPortalPolicies(
    $filter: MiscFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [MiscSort!]! = [{ direction: DESC, field: createdAt }]
  ) {
    getPortalPolicies(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...MiscTypeInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${MiscTypeInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPortalPoliciesQuery__
 *
 * To run a query within a React component, call `useGetPortalPoliciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalPoliciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalPoliciesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPortalPoliciesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPortalPoliciesQuery,
    GetPortalPoliciesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalPoliciesQuery,
    GetPortalPoliciesQueryVariables
  >(GetPortalPoliciesDocument, options);
}
export function useGetPortalPoliciesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalPoliciesQuery,
    GetPortalPoliciesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalPoliciesQuery,
    GetPortalPoliciesQueryVariables
  >(GetPortalPoliciesDocument, options);
}
export type GetPortalPoliciesQueryHookResult = ReturnType<
  typeof useGetPortalPoliciesQuery
>;
export type GetPortalPoliciesLazyQueryHookResult = ReturnType<
  typeof useGetPortalPoliciesLazyQuery
>;
export type GetPortalPoliciesQueryResult = Apollo.QueryResult<
  GetPortalPoliciesQuery,
  GetPortalPoliciesQueryVariables
>;
export const GetPortalMiscDocument = gql`
  query GetPortalMisc($id: Int!) {
    getPortalMisc(id: $id) {
      ...MiscTypeInfo
    }
  }
  ${MiscTypeInfoFragmentDoc}
`;

/**
 * __useGetPortalMiscQuery__
 *
 * To run a query within a React component, call `useGetPortalMiscQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalMiscQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalMiscQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPortalMiscQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPortalMiscQuery,
    GetPortalMiscQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPortalMiscQuery, GetPortalMiscQueryVariables>(
    GetPortalMiscDocument,
    options
  );
}
export function useGetPortalMiscLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalMiscQuery,
    GetPortalMiscQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPortalMiscQuery, GetPortalMiscQueryVariables>(
    GetPortalMiscDocument,
    options
  );
}
export type GetPortalMiscQueryHookResult = ReturnType<
  typeof useGetPortalMiscQuery
>;
export type GetPortalMiscLazyQueryHookResult = ReturnType<
  typeof useGetPortalMiscLazyQuery
>;
export type GetPortalMiscQueryResult = Apollo.QueryResult<
  GetPortalMiscQuery,
  GetPortalMiscQueryVariables
>;
export const UpdateOneMiscDocument = gql`
  mutation UpdateOneMisc($input: UpdateOneMiscInput!) {
    updateOneMisc(input: $input) {
      ...MiscTypeInfo
    }
  }
  ${MiscTypeInfoFragmentDoc}
`;
export type UpdateOneMiscMutationFn = Apollo.MutationFunction<
  UpdateOneMiscMutation,
  UpdateOneMiscMutationVariables
>;

/**
 * __useUpdateOneMiscMutation__
 *
 * To run a mutation, you first call `useUpdateOneMiscMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneMiscMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneMiscMutation, { data, loading, error }] = useUpdateOneMiscMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneMiscMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOneMiscMutation,
    UpdateOneMiscMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOneMiscMutation,
    UpdateOneMiscMutationVariables
  >(UpdateOneMiscDocument, options);
}
export type UpdateOneMiscMutationHookResult = ReturnType<
  typeof useUpdateOneMiscMutation
>;
export type UpdateOneMiscMutationResult =
  Apollo.MutationResult<UpdateOneMiscMutation>;
export type UpdateOneMiscMutationOptions = Apollo.BaseMutationOptions<
  UpdateOneMiscMutation,
  UpdateOneMiscMutationVariables
>;
export const GetMotorCarDocument = gql`
  query GetMotorCar($id: Float, $slug: String) {
    getMotorCar(id: $id, slug: $slug) {
      ...MotorCarInfo
    }
  }
  ${MotorCarInfoFragmentDoc}
`;

/**
 * __useGetMotorCarQuery__
 *
 * To run a query within a React component, call `useGetMotorCarQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMotorCarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMotorCarQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetMotorCarQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMotorCarQuery,
    GetMotorCarQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMotorCarQuery, GetMotorCarQueryVariables>(
    GetMotorCarDocument,
    options
  );
}
export function useGetMotorCarLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMotorCarQuery,
    GetMotorCarQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMotorCarQuery, GetMotorCarQueryVariables>(
    GetMotorCarDocument,
    options
  );
}
export type GetMotorCarQueryHookResult = ReturnType<typeof useGetMotorCarQuery>;
export type GetMotorCarLazyQueryHookResult = ReturnType<
  typeof useGetMotorCarLazyQuery
>;
export type GetMotorCarQueryResult = Apollo.QueryResult<
  GetMotorCarQuery,
  GetMotorCarQueryVariables
>;
export const GetMotorCarsOutletDocument = gql`
  query GetMotorCarsOutlet(
    $brandSlug: String
    $budget: JSONObject
    $categoryCode: String
    $filter: MotorCarFilter! = {}
    $hasPromotion: Boolean
    $keyword: String
    $outletStates: [String!]
    $outletIds: [Float!]
    $paging: OffsetPaging! = { limit: 10 }
    $popular: Boolean = false
    $rangeSpecification: JSONObject
    $sorting: [MotorCarSort!]! = [{ direction: DESC, field: createdAt }]
    $specification: JSONObject
  ) {
    getMotorCars(
      brandSlug: $brandSlug
      budget: $budget
      categoryCode: $categoryCode
      filter: $filter
      hasPromotion: $hasPromotion
      keyword: $keyword
      outletStates: $outletStates
      outletIds: $outletIds
      paging: $paging
      popular: $popular
      rangeSpecification: $rangeSpecification
      sorting: $sorting
      specification: $specification
    ) {
      nodes {
        ...MotorCarInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${MotorCarInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetMotorCarsOutletQuery__
 *
 * To run a query within a React component, call `useGetMotorCarsOutletQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMotorCarsOutletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMotorCarsOutletQuery({
 *   variables: {
 *      brandSlug: // value for 'brandSlug'
 *      budget: // value for 'budget'
 *      categoryCode: // value for 'categoryCode'
 *      filter: // value for 'filter'
 *      hasPromotion: // value for 'hasPromotion'
 *      keyword: // value for 'keyword'
 *      outletStates: // value for 'outletStates'
 *      outletIds: // value for 'outletIds'
 *      paging: // value for 'paging'
 *      popular: // value for 'popular'
 *      rangeSpecification: // value for 'rangeSpecification'
 *      sorting: // value for 'sorting'
 *      specification: // value for 'specification'
 *   },
 * });
 */
export function useGetMotorCarsOutletQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMotorCarsOutletQuery,
    GetMotorCarsOutletQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetMotorCarsOutletQuery,
    GetMotorCarsOutletQueryVariables
  >(GetMotorCarsOutletDocument, options);
}
export function useGetMotorCarsOutletLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMotorCarsOutletQuery,
    GetMotorCarsOutletQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetMotorCarsOutletQuery,
    GetMotorCarsOutletQueryVariables
  >(GetMotorCarsOutletDocument, options);
}
export type GetMotorCarsOutletQueryHookResult = ReturnType<
  typeof useGetMotorCarsOutletQuery
>;
export type GetMotorCarsOutletLazyQueryHookResult = ReturnType<
  typeof useGetMotorCarsOutletLazyQuery
>;
export type GetMotorCarsOutletQueryResult = Apollo.QueryResult<
  GetMotorCarsOutletQuery,
  GetMotorCarsOutletQueryVariables
>;
export const GetMotorCarsDocument = gql`
  query GetMotorCars(
    $brandSlug: String
    $budget: JSONObject
    $categoryCode: String
    $filter: MotorCarFilter! = {}
    $hasPromotion: Boolean
    $keyword: String
    $outletStates: [String!]
    $outletIds: [Float!]
    $paging: OffsetPaging! = { limit: 10 }
    $popular: Boolean = false
    $rangeSpecification: JSONObject
    $sorting: [MotorCarSort!]! = [{ direction: DESC, field: createdAt }]
    $specification: JSONObject
  ) {
    getMotorCars(
      brandSlug: $brandSlug
      budget: $budget
      categoryCode: $categoryCode
      filter: $filter
      hasPromotion: $hasPromotion
      keyword: $keyword
      outletStates: $outletStates
      outletIds: $outletIds
      paging: $paging
      popular: $popular
      rangeSpecification: $rangeSpecification
      sorting: $sorting
      specification: $specification
    ) {
      nodes {
        ...MotorCarBasicInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${MotorCarBasicInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetMotorCarsQuery__
 *
 * To run a query within a React component, call `useGetMotorCarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMotorCarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMotorCarsQuery({
 *   variables: {
 *      brandSlug: // value for 'brandSlug'
 *      budget: // value for 'budget'
 *      categoryCode: // value for 'categoryCode'
 *      filter: // value for 'filter'
 *      hasPromotion: // value for 'hasPromotion'
 *      keyword: // value for 'keyword'
 *      outletStates: // value for 'outletStates'
 *      outletIds: // value for 'outletIds'
 *      paging: // value for 'paging'
 *      popular: // value for 'popular'
 *      rangeSpecification: // value for 'rangeSpecification'
 *      sorting: // value for 'sorting'
 *      specification: // value for 'specification'
 *   },
 * });
 */
export function useGetMotorCarsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMotorCarsQuery,
    GetMotorCarsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMotorCarsQuery, GetMotorCarsQueryVariables>(
    GetMotorCarsDocument,
    options
  );
}
export function useGetMotorCarsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMotorCarsQuery,
    GetMotorCarsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMotorCarsQuery, GetMotorCarsQueryVariables>(
    GetMotorCarsDocument,
    options
  );
}
export type GetMotorCarsQueryHookResult = ReturnType<
  typeof useGetMotorCarsQuery
>;
export type GetMotorCarsLazyQueryHookResult = ReturnType<
  typeof useGetMotorCarsLazyQuery
>;
export type GetMotorCarsQueryResult = Apollo.QueryResult<
  GetMotorCarsQuery,
  GetMotorCarsQueryVariables
>;
export const GetMotorCarCountWithFiltersDocument = gql`
  query GetMotorCarCountWithFilters(
    $brandSlug: String
    $budget: JSONObject
    $categoryCode: String
    $filter: MotorCarFilter! = {}
    $hasPromotion: Boolean
    $keyword: String
    $outletStates: [String!]
    $outletIds: [Float!]
    $rangeSpecification: JSONObject
    $specification: JSONObject
  ) {
    getMotorCarCountWithFilters(
      brandSlug: $brandSlug
      budget: $budget
      categoryCode: $categoryCode
      filter: $filter
      hasPromotion: $hasPromotion
      keyword: $keyword
      outletStates: $outletStates
      outletIds: $outletIds
      rangeSpecification: $rangeSpecification
      specification: $specification
    )
  }
`;

/**
 * __useGetMotorCarCountWithFiltersQuery__
 *
 * To run a query within a React component, call `useGetMotorCarCountWithFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMotorCarCountWithFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMotorCarCountWithFiltersQuery({
 *   variables: {
 *      brandSlug: // value for 'brandSlug'
 *      budget: // value for 'budget'
 *      categoryCode: // value for 'categoryCode'
 *      filter: // value for 'filter'
 *      hasPromotion: // value for 'hasPromotion'
 *      keyword: // value for 'keyword'
 *      outletStates: // value for 'outletStates'
 *      outletIds: // value for 'outletIds'
 *      rangeSpecification: // value for 'rangeSpecification'
 *      specification: // value for 'specification'
 *   },
 * });
 */
export function useGetMotorCarCountWithFiltersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMotorCarCountWithFiltersQuery,
    GetMotorCarCountWithFiltersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetMotorCarCountWithFiltersQuery,
    GetMotorCarCountWithFiltersQueryVariables
  >(GetMotorCarCountWithFiltersDocument, options);
}
export function useGetMotorCarCountWithFiltersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMotorCarCountWithFiltersQuery,
    GetMotorCarCountWithFiltersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetMotorCarCountWithFiltersQuery,
    GetMotorCarCountWithFiltersQueryVariables
  >(GetMotorCarCountWithFiltersDocument, options);
}
export type GetMotorCarCountWithFiltersQueryHookResult = ReturnType<
  typeof useGetMotorCarCountWithFiltersQuery
>;
export type GetMotorCarCountWithFiltersLazyQueryHookResult = ReturnType<
  typeof useGetMotorCarCountWithFiltersLazyQuery
>;
export type GetMotorCarCountWithFiltersQueryResult = Apollo.QueryResult<
  GetMotorCarCountWithFiltersQuery,
  GetMotorCarCountWithFiltersQueryVariables
>;
export const GetMotorCarFiltersDocument = gql`
  query GetMotorCarFilters(
    $brandSlug: String
    $budget: JSONObject
    $categoryCode: String
    $filter: MotorCarFilter! = {}
    $hasPromotion: Boolean
    $keyword: String
    $outletStates: [String!]
    $outletIds: [Float!]
    $rangeSpecification: JSONObject
    $specification: JSONObject
  ) {
    getMotorCarFilters(
      brandSlug: $brandSlug
      budget: $budget
      categoryCode: $categoryCode
      filter: $filter
      hasPromotion: $hasPromotion
      keyword: $keyword
      outletStates: $outletStates
      outletIds: $outletIds
      rangeSpecification: $rangeSpecification
      specification: $specification
    )
  }
`;

/**
 * __useGetMotorCarFiltersQuery__
 *
 * To run a query within a React component, call `useGetMotorCarFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMotorCarFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMotorCarFiltersQuery({
 *   variables: {
 *      brandSlug: // value for 'brandSlug'
 *      budget: // value for 'budget'
 *      categoryCode: // value for 'categoryCode'
 *      filter: // value for 'filter'
 *      hasPromotion: // value for 'hasPromotion'
 *      keyword: // value for 'keyword'
 *      outletStates: // value for 'outletStates'
 *      outletIds: // value for 'outletIds'
 *      rangeSpecification: // value for 'rangeSpecification'
 *      specification: // value for 'specification'
 *   },
 * });
 */
export function useGetMotorCarFiltersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMotorCarFiltersQuery,
    GetMotorCarFiltersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetMotorCarFiltersQuery,
    GetMotorCarFiltersQueryVariables
  >(GetMotorCarFiltersDocument, options);
}
export function useGetMotorCarFiltersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMotorCarFiltersQuery,
    GetMotorCarFiltersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetMotorCarFiltersQuery,
    GetMotorCarFiltersQueryVariables
  >(GetMotorCarFiltersDocument, options);
}
export type GetMotorCarFiltersQueryHookResult = ReturnType<
  typeof useGetMotorCarFiltersQuery
>;
export type GetMotorCarFiltersLazyQueryHookResult = ReturnType<
  typeof useGetMotorCarFiltersLazyQuery
>;
export type GetMotorCarFiltersQueryResult = Apollo.QueryResult<
  GetMotorCarFiltersQuery,
  GetMotorCarFiltersQueryVariables
>;
export const GetPortalMotorCarsDocument = gql`
  query GetPortalMotorCars(
    $filter: MotorCarFilter! = {}
    $outletId: Float
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [MotorCarSort!]! = []
  ) {
    getPortalMotorCars(
      filter: $filter
      outletId: $outletId
      paging: $paging
      sorting: $sorting
    ) {
      nodes {
        ...PortalMotorCarInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${PortalMotorCarInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPortalMotorCarsQuery__
 *
 * To run a query within a React component, call `useGetPortalMotorCarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalMotorCarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalMotorCarsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      outletId: // value for 'outletId'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPortalMotorCarsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPortalMotorCarsQuery,
    GetPortalMotorCarsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalMotorCarsQuery,
    GetPortalMotorCarsQueryVariables
  >(GetPortalMotorCarsDocument, options);
}
export function useGetPortalMotorCarsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalMotorCarsQuery,
    GetPortalMotorCarsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalMotorCarsQuery,
    GetPortalMotorCarsQueryVariables
  >(GetPortalMotorCarsDocument, options);
}
export type GetPortalMotorCarsQueryHookResult = ReturnType<
  typeof useGetPortalMotorCarsQuery
>;
export type GetPortalMotorCarsLazyQueryHookResult = ReturnType<
  typeof useGetPortalMotorCarsLazyQuery
>;
export type GetPortalMotorCarsQueryResult = Apollo.QueryResult<
  GetPortalMotorCarsQuery,
  GetPortalMotorCarsQueryVariables
>;
export const CreateOneMotorCarDocument = gql`
  mutation CreateOneMotorCar($input: CreateMotorCarInput!) {
    createOneMotorCar(input: $input) {
      ...PortalMotorCarInfo
    }
  }
  ${PortalMotorCarInfoFragmentDoc}
`;
export type CreateOneMotorCarMutationFn = Apollo.MutationFunction<
  CreateOneMotorCarMutation,
  CreateOneMotorCarMutationVariables
>;

/**
 * __useCreateOneMotorCarMutation__
 *
 * To run a mutation, you first call `useCreateOneMotorCarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneMotorCarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneMotorCarMutation, { data, loading, error }] = useCreateOneMotorCarMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneMotorCarMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOneMotorCarMutation,
    CreateOneMotorCarMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateOneMotorCarMutation,
    CreateOneMotorCarMutationVariables
  >(CreateOneMotorCarDocument, options);
}
export type CreateOneMotorCarMutationHookResult = ReturnType<
  typeof useCreateOneMotorCarMutation
>;
export type CreateOneMotorCarMutationResult =
  Apollo.MutationResult<CreateOneMotorCarMutation>;
export type CreateOneMotorCarMutationOptions = Apollo.BaseMutationOptions<
  CreateOneMotorCarMutation,
  CreateOneMotorCarMutationVariables
>;
export const GetPortalMotorCarDocument = gql`
  query GetPortalMotorCar($id: Int!) {
    getPortalMotorCar(id: $id) {
      ...PortalMotorCarInfo
    }
  }
  ${PortalMotorCarInfoFragmentDoc}
`;

/**
 * __useGetPortalMotorCarQuery__
 *
 * To run a query within a React component, call `useGetPortalMotorCarQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalMotorCarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalMotorCarQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPortalMotorCarQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPortalMotorCarQuery,
    GetPortalMotorCarQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalMotorCarQuery,
    GetPortalMotorCarQueryVariables
  >(GetPortalMotorCarDocument, options);
}
export function useGetPortalMotorCarLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalMotorCarQuery,
    GetPortalMotorCarQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalMotorCarQuery,
    GetPortalMotorCarQueryVariables
  >(GetPortalMotorCarDocument, options);
}
export type GetPortalMotorCarQueryHookResult = ReturnType<
  typeof useGetPortalMotorCarQuery
>;
export type GetPortalMotorCarLazyQueryHookResult = ReturnType<
  typeof useGetPortalMotorCarLazyQuery
>;
export type GetPortalMotorCarQueryResult = Apollo.QueryResult<
  GetPortalMotorCarQuery,
  GetPortalMotorCarQueryVariables
>;
export const DeleteOneMotorCarDocument = gql`
  mutation DeleteOneMotorCar($input: DeleteOneMotorCarInput!) {
    deleteOneMotorCar(input: $input) {
      id
      modelName
      status
    }
  }
`;
export type DeleteOneMotorCarMutationFn = Apollo.MutationFunction<
  DeleteOneMotorCarMutation,
  DeleteOneMotorCarMutationVariables
>;

/**
 * __useDeleteOneMotorCarMutation__
 *
 * To run a mutation, you first call `useDeleteOneMotorCarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneMotorCarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneMotorCarMutation, { data, loading, error }] = useDeleteOneMotorCarMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneMotorCarMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteOneMotorCarMutation,
    DeleteOneMotorCarMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteOneMotorCarMutation,
    DeleteOneMotorCarMutationVariables
  >(DeleteOneMotorCarDocument, options);
}
export type DeleteOneMotorCarMutationHookResult = ReturnType<
  typeof useDeleteOneMotorCarMutation
>;
export type DeleteOneMotorCarMutationResult =
  Apollo.MutationResult<DeleteOneMotorCarMutation>;
export type DeleteOneMotorCarMutationOptions = Apollo.BaseMutationOptions<
  DeleteOneMotorCarMutation,
  DeleteOneMotorCarMutationVariables
>;
export const UpdateOneMotorCarDocument = gql`
  mutation UpdateOneMotorCar($id: Int!, $input: UpdateMotorCarInput!) {
    updateOneMotorCar(id: $id, input: $input) {
      ...PortalMotorCarInfo
    }
  }
  ${PortalMotorCarInfoFragmentDoc}
`;
export type UpdateOneMotorCarMutationFn = Apollo.MutationFunction<
  UpdateOneMotorCarMutation,
  UpdateOneMotorCarMutationVariables
>;

/**
 * __useUpdateOneMotorCarMutation__
 *
 * To run a mutation, you first call `useUpdateOneMotorCarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneMotorCarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneMotorCarMutation, { data, loading, error }] = useUpdateOneMotorCarMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneMotorCarMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOneMotorCarMutation,
    UpdateOneMotorCarMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOneMotorCarMutation,
    UpdateOneMotorCarMutationVariables
  >(UpdateOneMotorCarDocument, options);
}
export type UpdateOneMotorCarMutationHookResult = ReturnType<
  typeof useUpdateOneMotorCarMutation
>;
export type UpdateOneMotorCarMutationResult =
  Apollo.MutationResult<UpdateOneMotorCarMutation>;
export type UpdateOneMotorCarMutationOptions = Apollo.BaseMutationOptions<
  UpdateOneMotorCarMutation,
  UpdateOneMotorCarMutationVariables
>;
export const GetCategoriesDocument = gql`
  query GetCategories(
    $popular: Boolean = false
    $fullList: Boolean = false
    $filter: CategoryFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [CategorySort!]! = [{ direction: DESC, field: createdAt }]
  ) {
    getCategories(
      popular: $popular
      fullList: $fullList
      filter: $filter
      paging: $paging
      sorting: $sorting
    ) {
      nodes {
        ...CategoryInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${CategoryInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *      popular: // value for 'popular'
 *      fullList: // value for 'fullList'
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCategoriesQuery,
    GetCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(
    GetCategoriesDocument,
    options
  );
}
export function useGetCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCategoriesQuery,
    GetCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(
    GetCategoriesDocument,
    options
  );
}
export type GetCategoriesQueryHookResult = ReturnType<
  typeof useGetCategoriesQuery
>;
export type GetCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetCategoriesLazyQuery
>;
export type GetCategoriesQueryResult = Apollo.QueryResult<
  GetCategoriesQuery,
  GetCategoriesQueryVariables
>;
export const GetPortalCategoriesDocument = gql`
  query GetPortalCategories(
    $filter: CategoryFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [CategorySort!]! = [{ direction: ASC, field: id }]
  ) {
    getPortalCategories(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...CategoryInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${CategoryInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPortalCategoriesQuery__
 *
 * To run a query within a React component, call `useGetPortalCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalCategoriesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPortalCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPortalCategoriesQuery,
    GetPortalCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalCategoriesQuery,
    GetPortalCategoriesQueryVariables
  >(GetPortalCategoriesDocument, options);
}
export function useGetPortalCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalCategoriesQuery,
    GetPortalCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalCategoriesQuery,
    GetPortalCategoriesQueryVariables
  >(GetPortalCategoriesDocument, options);
}
export type GetPortalCategoriesQueryHookResult = ReturnType<
  typeof useGetPortalCategoriesQuery
>;
export type GetPortalCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetPortalCategoriesLazyQuery
>;
export type GetPortalCategoriesQueryResult = Apollo.QueryResult<
  GetPortalCategoriesQuery,
  GetPortalCategoriesQueryVariables
>;
export const GetCategoryDocument = gql`
  query getCategory($id: Int) {
    getCategory(id: $id) {
      ...CategoryInfo
    }
  }
  ${CategoryInfoFragmentDoc}
`;

/**
 * __useGetCategoryQuery__
 *
 * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCategoryQuery,
    GetCategoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCategoryQuery, GetCategoryQueryVariables>(
    GetCategoryDocument,
    options
  );
}
export function useGetCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCategoryQuery,
    GetCategoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCategoryQuery, GetCategoryQueryVariables>(
    GetCategoryDocument,
    options
  );
}
export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>;
export type GetCategoryLazyQueryHookResult = ReturnType<
  typeof useGetCategoryLazyQuery
>;
export type GetCategoryQueryResult = Apollo.QueryResult<
  GetCategoryQuery,
  GetCategoryQueryVariables
>;
export const GetPortalCategoryDocument = gql`
  query getPortalCategory($id: Int!) {
    getPortalCategory(id: $id) {
      ...CategoryInfo
    }
  }
  ${CategoryInfoFragmentDoc}
`;

/**
 * __useGetPortalCategoryQuery__
 *
 * To run a query within a React component, call `useGetPortalCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPortalCategoryQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPortalCategoryQuery,
    GetPortalCategoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalCategoryQuery,
    GetPortalCategoryQueryVariables
  >(GetPortalCategoryDocument, options);
}
export function useGetPortalCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalCategoryQuery,
    GetPortalCategoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalCategoryQuery,
    GetPortalCategoryQueryVariables
  >(GetPortalCategoryDocument, options);
}
export type GetPortalCategoryQueryHookResult = ReturnType<
  typeof useGetPortalCategoryQuery
>;
export type GetPortalCategoryLazyQueryHookResult = ReturnType<
  typeof useGetPortalCategoryLazyQuery
>;
export type GetPortalCategoryQueryResult = Apollo.QueryResult<
  GetPortalCategoryQuery,
  GetPortalCategoryQueryVariables
>;
export const CreateOneCategoryDocument = gql`
  mutation createOneCategory($input: CreateOneCategoryInput!) {
    createOneCategory(input: $input) {
      ...CategoryInfo
    }
  }
  ${CategoryInfoFragmentDoc}
`;
export type CreateOneCategoryMutationFn = Apollo.MutationFunction<
  CreateOneCategoryMutation,
  CreateOneCategoryMutationVariables
>;

/**
 * __useCreateOneCategoryMutation__
 *
 * To run a mutation, you first call `useCreateOneCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCategoryMutation, { data, loading, error }] = useCreateOneCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOneCategoryMutation,
    CreateOneCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateOneCategoryMutation,
    CreateOneCategoryMutationVariables
  >(CreateOneCategoryDocument, options);
}
export type CreateOneCategoryMutationHookResult = ReturnType<
  typeof useCreateOneCategoryMutation
>;
export type CreateOneCategoryMutationResult =
  Apollo.MutationResult<CreateOneCategoryMutation>;
export type CreateOneCategoryMutationOptions = Apollo.BaseMutationOptions<
  CreateOneCategoryMutation,
  CreateOneCategoryMutationVariables
>;
export const UpdateOneCategoryDocument = gql`
  mutation updateOneCategory($input: UpdateOneCategoryInput!) {
    updateOneCategory(input: $input) {
      ...CategoryInfo
    }
  }
  ${CategoryInfoFragmentDoc}
`;
export type UpdateOneCategoryMutationFn = Apollo.MutationFunction<
  UpdateOneCategoryMutation,
  UpdateOneCategoryMutationVariables
>;

/**
 * __useUpdateOneCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateOneCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCategoryMutation, { data, loading, error }] = useUpdateOneCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOneCategoryMutation,
    UpdateOneCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOneCategoryMutation,
    UpdateOneCategoryMutationVariables
  >(UpdateOneCategoryDocument, options);
}
export type UpdateOneCategoryMutationHookResult = ReturnType<
  typeof useUpdateOneCategoryMutation
>;
export type UpdateOneCategoryMutationResult =
  Apollo.MutationResult<UpdateOneCategoryMutation>;
export type UpdateOneCategoryMutationOptions = Apollo.BaseMutationOptions<
  UpdateOneCategoryMutation,
  UpdateOneCategoryMutationVariables
>;
export const DeleteOneCategoryDocument = gql`
  mutation deleteOneCategory($input: DeleteOneCategoryInput!) {
    deleteOneCategory(input: $input) {
      categoryCode
      createdAt
      id
      image
      mobileImage
      name
      popularityCount
      status
      updatedAt
    }
  }
`;
export type DeleteOneCategoryMutationFn = Apollo.MutationFunction<
  DeleteOneCategoryMutation,
  DeleteOneCategoryMutationVariables
>;

/**
 * __useDeleteOneCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteOneCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneCategoryMutation, { data, loading, error }] = useDeleteOneCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteOneCategoryMutation,
    DeleteOneCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteOneCategoryMutation,
    DeleteOneCategoryMutationVariables
  >(DeleteOneCategoryDocument, options);
}
export type DeleteOneCategoryMutationHookResult = ReturnType<
  typeof useDeleteOneCategoryMutation
>;
export type DeleteOneCategoryMutationResult =
  Apollo.MutationResult<DeleteOneCategoryMutation>;
export type DeleteOneCategoryMutationOptions = Apollo.BaseMutationOptions<
  DeleteOneCategoryMutation,
  DeleteOneCategoryMutationVariables
>;
export const GetBrandsDocument = gql`
  query GetBrands(
    $popular: Boolean = false
    $fullList: Boolean = false
    $outletId: Float
    $outletState: String
    $filter: BrandFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [BrandSort!]! = [{ direction: DESC, field: createdAt }]
  ) {
    getBrands(
      popular: $popular
      fullList: $fullList
      filter: $filter
      paging: $paging
      sorting: $sorting
      outletId: $outletId
      outletState: $outletState
    ) {
      nodes {
        ...BrandInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${BrandInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetBrandsQuery__
 *
 * To run a query within a React component, call `useGetBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBrandsQuery({
 *   variables: {
 *      popular: // value for 'popular'
 *      fullList: // value for 'fullList'
 *      outletId: // value for 'outletId'
 *      outletState: // value for 'outletState'
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetBrandsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetBrandsQuery, GetBrandsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBrandsQuery, GetBrandsQueryVariables>(
    GetBrandsDocument,
    options
  );
}
export function useGetBrandsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBrandsQuery,
    GetBrandsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBrandsQuery, GetBrandsQueryVariables>(
    GetBrandsDocument,
    options
  );
}
export type GetBrandsQueryHookResult = ReturnType<typeof useGetBrandsQuery>;
export type GetBrandsLazyQueryHookResult = ReturnType<
  typeof useGetBrandsLazyQuery
>;
export type GetBrandsQueryResult = Apollo.QueryResult<
  GetBrandsQuery,
  GetBrandsQueryVariables
>;
export const GetBrandDocument = gql`
  query GetBrand($id: Float, $slug: String) {
    getBrand(id: $id, slug: $slug) {
      ...BrandInfo
    }
  }
  ${BrandInfoFragmentDoc}
`;

/**
 * __useGetBrandQuery__
 *
 * To run a query within a React component, call `useGetBrandQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBrandQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBrandQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetBrandQuery(
  baseOptions?: Apollo.QueryHookOptions<GetBrandQuery, GetBrandQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBrandQuery, GetBrandQueryVariables>(
    GetBrandDocument,
    options
  );
}
export function useGetBrandLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBrandQuery,
    GetBrandQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBrandQuery, GetBrandQueryVariables>(
    GetBrandDocument,
    options
  );
}
export type GetBrandQueryHookResult = ReturnType<typeof useGetBrandQuery>;
export type GetBrandLazyQueryHookResult = ReturnType<
  typeof useGetBrandLazyQuery
>;
export type GetBrandQueryResult = Apollo.QueryResult<
  GetBrandQuery,
  GetBrandQueryVariables
>;
export const GetPortalBrandsDocument = gql`
  query GetPortalBrands(
    $filter: BrandFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [BrandSort!]! = [{ direction: ASC, field: id }]
  ) {
    getPortalBrands(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...BrandInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${BrandInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPortalBrandsQuery__
 *
 * To run a query within a React component, call `useGetPortalBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalBrandsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPortalBrandsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPortalBrandsQuery,
    GetPortalBrandsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPortalBrandsQuery, GetPortalBrandsQueryVariables>(
    GetPortalBrandsDocument,
    options
  );
}
export function useGetPortalBrandsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalBrandsQuery,
    GetPortalBrandsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalBrandsQuery,
    GetPortalBrandsQueryVariables
  >(GetPortalBrandsDocument, options);
}
export type GetPortalBrandsQueryHookResult = ReturnType<
  typeof useGetPortalBrandsQuery
>;
export type GetPortalBrandsLazyQueryHookResult = ReturnType<
  typeof useGetPortalBrandsLazyQuery
>;
export type GetPortalBrandsQueryResult = Apollo.QueryResult<
  GetPortalBrandsQuery,
  GetPortalBrandsQueryVariables
>;
export const ExportBrandsDocument = gql`
  query ExportBrands(
    $filter: BrandFilter! = {}
    $paging: OffsetPaging! = {}
    $sorting: [BrandSort!]! = []
  ) {
    exportBrands(filter: $filter, paging: $paging, sorting: $sorting)
  }
`;

/**
 * __useExportBrandsQuery__
 *
 * To run a query within a React component, call `useExportBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExportBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExportBrandsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useExportBrandsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ExportBrandsQuery,
    ExportBrandsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ExportBrandsQuery, ExportBrandsQueryVariables>(
    ExportBrandsDocument,
    options
  );
}
export function useExportBrandsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ExportBrandsQuery,
    ExportBrandsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ExportBrandsQuery, ExportBrandsQueryVariables>(
    ExportBrandsDocument,
    options
  );
}
export type ExportBrandsQueryHookResult = ReturnType<
  typeof useExportBrandsQuery
>;
export type ExportBrandsLazyQueryHookResult = ReturnType<
  typeof useExportBrandsLazyQuery
>;
export type ExportBrandsQueryResult = Apollo.QueryResult<
  ExportBrandsQuery,
  ExportBrandsQueryVariables
>;
export const GetPortalBrandDocument = gql`
  query GetPortalBrand($id: Int!) {
    getPortalBrand(id: $id) {
      ...BrandInfo
    }
  }
  ${BrandInfoFragmentDoc}
`;

/**
 * __useGetPortalBrandQuery__
 *
 * To run a query within a React component, call `useGetPortalBrandQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalBrandQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalBrandQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPortalBrandQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPortalBrandQuery,
    GetPortalBrandQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPortalBrandQuery, GetPortalBrandQueryVariables>(
    GetPortalBrandDocument,
    options
  );
}
export function useGetPortalBrandLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalBrandQuery,
    GetPortalBrandQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPortalBrandQuery, GetPortalBrandQueryVariables>(
    GetPortalBrandDocument,
    options
  );
}
export type GetPortalBrandQueryHookResult = ReturnType<
  typeof useGetPortalBrandQuery
>;
export type GetPortalBrandLazyQueryHookResult = ReturnType<
  typeof useGetPortalBrandLazyQuery
>;
export type GetPortalBrandQueryResult = Apollo.QueryResult<
  GetPortalBrandQuery,
  GetPortalBrandQueryVariables
>;
export const UpdateOneBrandDocument = gql`
  mutation UpdateOneBrand($input: UpdateOneBrandInput!) {
    updateOneBrand(input: $input) {
      ...BrandInfo
    }
  }
  ${BrandInfoFragmentDoc}
`;
export type UpdateOneBrandMutationFn = Apollo.MutationFunction<
  UpdateOneBrandMutation,
  UpdateOneBrandMutationVariables
>;

/**
 * __useUpdateOneBrandMutation__
 *
 * To run a mutation, you first call `useUpdateOneBrandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneBrandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneBrandMutation, { data, loading, error }] = useUpdateOneBrandMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneBrandMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOneBrandMutation,
    UpdateOneBrandMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOneBrandMutation,
    UpdateOneBrandMutationVariables
  >(UpdateOneBrandDocument, options);
}
export type UpdateOneBrandMutationHookResult = ReturnType<
  typeof useUpdateOneBrandMutation
>;
export type UpdateOneBrandMutationResult =
  Apollo.MutationResult<UpdateOneBrandMutation>;
export type UpdateOneBrandMutationOptions = Apollo.BaseMutationOptions<
  UpdateOneBrandMutation,
  UpdateOneBrandMutationVariables
>;
export const DeleteOneBrandDocument = gql`
  mutation DeleteOneBrand($input: Int) {
    deleteOneBrand(id: $input)
  }
`;
export type DeleteOneBrandMutationFn = Apollo.MutationFunction<
  DeleteOneBrandMutation,
  DeleteOneBrandMutationVariables
>;

/**
 * __useDeleteOneBrandMutation__
 *
 * To run a mutation, you first call `useDeleteOneBrandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneBrandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneBrandMutation, { data, loading, error }] = useDeleteOneBrandMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneBrandMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteOneBrandMutation,
    DeleteOneBrandMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteOneBrandMutation,
    DeleteOneBrandMutationVariables
  >(DeleteOneBrandDocument, options);
}
export type DeleteOneBrandMutationHookResult = ReturnType<
  typeof useDeleteOneBrandMutation
>;
export type DeleteOneBrandMutationResult =
  Apollo.MutationResult<DeleteOneBrandMutation>;
export type DeleteOneBrandMutationOptions = Apollo.BaseMutationOptions<
  DeleteOneBrandMutation,
  DeleteOneBrandMutationVariables
>;
export const CreateOneBrandDocument = gql`
  mutation CreateOneBrand($input: CreateBrandInput!) {
    createOneBrand(input: $input) {
      ...BrandInfo
    }
  }
  ${BrandInfoFragmentDoc}
`;
export type CreateOneBrandMutationFn = Apollo.MutationFunction<
  CreateOneBrandMutation,
  CreateOneBrandMutationVariables
>;

/**
 * __useCreateOneBrandMutation__
 *
 * To run a mutation, you first call `useCreateOneBrandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneBrandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneBrandMutation, { data, loading, error }] = useCreateOneBrandMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneBrandMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOneBrandMutation,
    CreateOneBrandMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateOneBrandMutation,
    CreateOneBrandMutationVariables
  >(CreateOneBrandDocument, options);
}
export type CreateOneBrandMutationHookResult = ReturnType<
  typeof useCreateOneBrandMutation
>;
export type CreateOneBrandMutationResult =
  Apollo.MutationResult<CreateOneBrandMutation>;
export type CreateOneBrandMutationOptions = Apollo.BaseMutationOptions<
  CreateOneBrandMutation,
  CreateOneBrandMutationVariables
>;
export const GetDashboardDataDocument = gql`
  query GetDashboardData($endDate: DateTime, $startDate: DateTime) {
    getDashboardData(endDate: $endDate, startDate: $startDate) {
      ...DashboardInfo
    }
  }
  ${DashboardInfoFragmentDoc}
`;

/**
 * __useGetDashboardDataQuery__
 *
 * To run a query within a React component, call `useGetDashboardDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDashboardDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDashboardDataQuery({
 *   variables: {
 *      endDate: // value for 'endDate'
 *      startDate: // value for 'startDate'
 *   },
 * });
 */
export function useGetDashboardDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDashboardDataQuery,
    GetDashboardDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDashboardDataQuery, GetDashboardDataQueryVariables>(
    GetDashboardDataDocument,
    options
  );
}
export function useGetDashboardDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDashboardDataQuery,
    GetDashboardDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetDashboardDataQuery,
    GetDashboardDataQueryVariables
  >(GetDashboardDataDocument, options);
}
export type GetDashboardDataQueryHookResult = ReturnType<
  typeof useGetDashboardDataQuery
>;
export type GetDashboardDataLazyQueryHookResult = ReturnType<
  typeof useGetDashboardDataLazyQuery
>;
export type GetDashboardDataQueryResult = Apollo.QueryResult<
  GetDashboardDataQuery,
  GetDashboardDataQueryVariables
>;
export const GetModelsDocument = gql`
  query GetModels(
    $filter: ModelFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [ModelSort!]! = [{ direction: ASC, field: name }]
  ) {
    getModels(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        name
        brandSlug
        brandCode
        slug
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetModelsQuery__
 *
 * To run a query within a React component, call `useGetModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetModelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetModelsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetModelsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetModelsQuery, GetModelsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetModelsQuery, GetModelsQueryVariables>(
    GetModelsDocument,
    options
  );
}
export function useGetModelsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetModelsQuery,
    GetModelsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetModelsQuery, GetModelsQueryVariables>(
    GetModelsDocument,
    options
  );
}
export type GetModelsQueryHookResult = ReturnType<typeof useGetModelsQuery>;
export type GetModelsLazyQueryHookResult = ReturnType<
  typeof useGetModelsLazyQuery
>;
export type GetModelsQueryResult = Apollo.QueryResult<
  GetModelsQuery,
  GetModelsQueryVariables
>;
export const GetMotorcarsSlugDocument = gql`
  query getMotorcarsSlug($promo: Boolean) {
    getMotorcarsSlug(promo: $promo)
  }
`;

/**
 * __useGetMotorcarsSlugQuery__
 *
 * To run a query within a React component, call `useGetMotorcarsSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMotorcarsSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMotorcarsSlugQuery({
 *   variables: {
 *      promo: // value for 'promo'
 *   },
 * });
 */
export function useGetMotorcarsSlugQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMotorcarsSlugQuery,
    GetMotorcarsSlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMotorcarsSlugQuery, GetMotorcarsSlugQueryVariables>(
    GetMotorcarsSlugDocument,
    options
  );
}
export function useGetMotorcarsSlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMotorcarsSlugQuery,
    GetMotorcarsSlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetMotorcarsSlugQuery,
    GetMotorcarsSlugQueryVariables
  >(GetMotorcarsSlugDocument, options);
}
export type GetMotorcarsSlugQueryHookResult = ReturnType<
  typeof useGetMotorcarsSlugQuery
>;
export type GetMotorcarsSlugLazyQueryHookResult = ReturnType<
  typeof useGetMotorcarsSlugLazyQuery
>;
export type GetMotorcarsSlugQueryResult = Apollo.QueryResult<
  GetMotorcarsSlugQuery,
  GetMotorcarsSlugQueryVariables
>;
export const GetTenureRateDocument = gql`
  query GetTenureRate($input: Int) {
    getTenureRate(motorcarId: $input) {
      em {
        ...PricingInfo
      }
      tenure
      wm {
        ...PricingInfo
      }
    }
  }
  ${PricingInfoFragmentDoc}
`;

/**
 * __useGetTenureRateQuery__
 *
 * To run a query within a React component, call `useGetTenureRateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTenureRateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTenureRateQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetTenureRateQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTenureRateQuery,
    GetTenureRateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTenureRateQuery, GetTenureRateQueryVariables>(
    GetTenureRateDocument,
    options
  );
}
export function useGetTenureRateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTenureRateQuery,
    GetTenureRateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTenureRateQuery, GetTenureRateQueryVariables>(
    GetTenureRateDocument,
    options
  );
}
export type GetTenureRateQueryHookResult = ReturnType<
  typeof useGetTenureRateQuery
>;
export type GetTenureRateLazyQueryHookResult = ReturnType<
  typeof useGetTenureRateLazyQuery
>;
export type GetTenureRateQueryResult = Apollo.QueryResult<
  GetTenureRateQuery,
  GetTenureRateQueryVariables
>;
export const GetEstimatedTenureRateDocument = gql`
  query GetEstimatedTenureRate(
    $financialPlanId: Int!
    $priceEM: Int!
    $priceWM: Int!
    $promotionId: Int
  ) {
    getEstimatedTenureRate(
      financialPlanId: $financialPlanId
      priceEM: $priceEM
      priceWM: $priceWM
      promotionId: $promotionId
    ) {
      em {
        ...PricingInfo
      }
      tenure
      wm {
        ...PricingInfo
      }
    }
  }
  ${PricingInfoFragmentDoc}
`;

/**
 * __useGetEstimatedTenureRateQuery__
 *
 * To run a query within a React component, call `useGetEstimatedTenureRateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEstimatedTenureRateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEstimatedTenureRateQuery({
 *   variables: {
 *      financialPlanId: // value for 'financialPlanId'
 *      priceEM: // value for 'priceEM'
 *      priceWM: // value for 'priceWM'
 *      promotionId: // value for 'promotionId'
 *   },
 * });
 */
export function useGetEstimatedTenureRateQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetEstimatedTenureRateQuery,
    GetEstimatedTenureRateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetEstimatedTenureRateQuery,
    GetEstimatedTenureRateQueryVariables
  >(GetEstimatedTenureRateDocument, options);
}
export function useGetEstimatedTenureRateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEstimatedTenureRateQuery,
    GetEstimatedTenureRateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetEstimatedTenureRateQuery,
    GetEstimatedTenureRateQueryVariables
  >(GetEstimatedTenureRateDocument, options);
}
export type GetEstimatedTenureRateQueryHookResult = ReturnType<
  typeof useGetEstimatedTenureRateQuery
>;
export type GetEstimatedTenureRateLazyQueryHookResult = ReturnType<
  typeof useGetEstimatedTenureRateLazyQuery
>;
export type GetEstimatedTenureRateQueryResult = Apollo.QueryResult<
  GetEstimatedTenureRateQuery,
  GetEstimatedTenureRateQueryVariables
>;
export const GetEkycUrlDocument = gql`
  query GetEkycUrl($id: Int!) {
    getEKYCUrl(id: $id)
  }
`;

/**
 * __useGetEkycUrlQuery__
 *
 * To run a query within a React component, call `useGetEkycUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEkycUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEkycUrlQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEkycUrlQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetEkycUrlQuery,
    GetEkycUrlQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetEkycUrlQuery, GetEkycUrlQueryVariables>(
    GetEkycUrlDocument,
    options
  );
}
export function useGetEkycUrlLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEkycUrlQuery,
    GetEkycUrlQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetEkycUrlQuery, GetEkycUrlQueryVariables>(
    GetEkycUrlDocument,
    options
  );
}
export type GetEkycUrlQueryHookResult = ReturnType<typeof useGetEkycUrlQuery>;
export type GetEkycUrlLazyQueryHookResult = ReturnType<
  typeof useGetEkycUrlLazyQuery
>;
export type GetEkycUrlQueryResult = Apollo.QueryResult<
  GetEkycUrlQuery,
  GetEkycUrlQueryVariables
>;
export const GetApplicationsDocument = gql`
  query GetApplications(
    $filter: ApplicationDtoFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [ApplicationDtoSort!]! = [{ direction: DESC, field: createdAt }]
  ) {
    getApplications(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...ApplicationInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${ApplicationInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetApplicationsQuery__
 *
 * To run a query within a React component, call `useGetApplicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicationsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetApplicationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetApplicationsQuery,
    GetApplicationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetApplicationsQuery, GetApplicationsQueryVariables>(
    GetApplicationsDocument,
    options
  );
}
export function useGetApplicationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetApplicationsQuery,
    GetApplicationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetApplicationsQuery,
    GetApplicationsQueryVariables
  >(GetApplicationsDocument, options);
}
export type GetApplicationsQueryHookResult = ReturnType<
  typeof useGetApplicationsQuery
>;
export type GetApplicationsLazyQueryHookResult = ReturnType<
  typeof useGetApplicationsLazyQuery
>;
export type GetApplicationsQueryResult = Apollo.QueryResult<
  GetApplicationsQuery,
  GetApplicationsQueryVariables
>;
export const GetApplicationDocument = gql`
  query GetApplication($id: Int) {
    getApplication(id: $id) {
      ...ApplicationInfo
    }
  }
  ${ApplicationInfoFragmentDoc}
`;

/**
 * __useGetApplicationQuery__
 *
 * To run a query within a React component, call `useGetApplicationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetApplicationQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetApplicationQuery,
    GetApplicationQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetApplicationQuery, GetApplicationQueryVariables>(
    GetApplicationDocument,
    options
  );
}
export function useGetApplicationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetApplicationQuery,
    GetApplicationQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetApplicationQuery, GetApplicationQueryVariables>(
    GetApplicationDocument,
    options
  );
}
export type GetApplicationQueryHookResult = ReturnType<
  typeof useGetApplicationQuery
>;
export type GetApplicationLazyQueryHookResult = ReturnType<
  typeof useGetApplicationLazyQuery
>;
export type GetApplicationQueryResult = Apollo.QueryResult<
  GetApplicationQuery,
  GetApplicationQueryVariables
>;
export const DeleteDraftApplicationDocument = gql`
  mutation DeleteDraftApplication {
    deleteDraftApplication
  }
`;
export type DeleteDraftApplicationMutationFn = Apollo.MutationFunction<
  DeleteDraftApplicationMutation,
  DeleteDraftApplicationMutationVariables
>;

/**
 * __useDeleteDraftApplicationMutation__
 *
 * To run a mutation, you first call `useDeleteDraftApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDraftApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDraftApplicationMutation, { data, loading, error }] = useDeleteDraftApplicationMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteDraftApplicationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteDraftApplicationMutation,
    DeleteDraftApplicationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteDraftApplicationMutation,
    DeleteDraftApplicationMutationVariables
  >(DeleteDraftApplicationDocument, options);
}
export type DeleteDraftApplicationMutationHookResult = ReturnType<
  typeof useDeleteDraftApplicationMutation
>;
export type DeleteDraftApplicationMutationResult =
  Apollo.MutationResult<DeleteDraftApplicationMutation>;
export type DeleteDraftApplicationMutationOptions = Apollo.BaseMutationOptions<
  DeleteDraftApplicationMutation,
  DeleteDraftApplicationMutationVariables
>;
export const GetApplicationStatusDocument = gql`
  query GetApplicationStatus(
    $endDate: DateTime
    $modelName: String
    $outletId: Float
    $refNo: String
    $startDate: DateTime
    $status: ApplicationStatusType
    $userId: Float
  ) {
    getApplicationStatus(
      endDate: $endDate
      modelName: $modelName
      outletId: $outletId
      refNo: $refNo
      startDate: $startDate
      status: $status
      userId: $userId
    )
  }
`;

/**
 * __useGetApplicationStatusQuery__
 *
 * To run a query within a React component, call `useGetApplicationStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicationStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicationStatusQuery({
 *   variables: {
 *      endDate: // value for 'endDate'
 *      modelName: // value for 'modelName'
 *      outletId: // value for 'outletId'
 *      refNo: // value for 'refNo'
 *      startDate: // value for 'startDate'
 *      status: // value for 'status'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetApplicationStatusQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetApplicationStatusQuery,
    GetApplicationStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetApplicationStatusQuery,
    GetApplicationStatusQueryVariables
  >(GetApplicationStatusDocument, options);
}
export function useGetApplicationStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetApplicationStatusQuery,
    GetApplicationStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetApplicationStatusQuery,
    GetApplicationStatusQueryVariables
  >(GetApplicationStatusDocument, options);
}
export type GetApplicationStatusQueryHookResult = ReturnType<
  typeof useGetApplicationStatusQuery
>;
export type GetApplicationStatusLazyQueryHookResult = ReturnType<
  typeof useGetApplicationStatusLazyQuery
>;
export type GetApplicationStatusQueryResult = Apollo.QueryResult<
  GetApplicationStatusQuery,
  GetApplicationStatusQueryVariables
>;
export const ExportApplicationsDocument = gql`
  query ExportApplications(
    $filter: ApplicationDtoFilter! = {}
    $modelName: String
    $paging: OffsetPaging! = {}
    $sorting: [ApplicationDtoSort!]! = [{ direction: DESC, field: createdAt }]
  ) {
    exportApplications(
      filter: $filter
      modelName: $modelName
      paging: $paging
      sorting: $sorting
    )
  }
`;

/**
 * __useExportApplicationsQuery__
 *
 * To run a query within a React component, call `useExportApplicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExportApplicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExportApplicationsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      modelName: // value for 'modelName'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useExportApplicationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ExportApplicationsQuery,
    ExportApplicationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ExportApplicationsQuery,
    ExportApplicationsQueryVariables
  >(ExportApplicationsDocument, options);
}
export function useExportApplicationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ExportApplicationsQuery,
    ExportApplicationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ExportApplicationsQuery,
    ExportApplicationsQueryVariables
  >(ExportApplicationsDocument, options);
}
export type ExportApplicationsQueryHookResult = ReturnType<
  typeof useExportApplicationsQuery
>;
export type ExportApplicationsLazyQueryHookResult = ReturnType<
  typeof useExportApplicationsLazyQuery
>;
export type ExportApplicationsQueryResult = Apollo.QueryResult<
  ExportApplicationsQuery,
  ExportApplicationsQueryVariables
>;
export const GetPortalAppHistoriesDocument = gql`
  query GetPortalAppHistories(
    $filter: ApplicationHistoryFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [ApplicationHistorySort!]! = []
  ) {
    getPortalAppHistories(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        action
        applicationId
        createdAt
        description
        id
        meta
        remark
        title
        updatedAt
        userId
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPortalAppHistoriesQuery__
 *
 * To run a query within a React component, call `useGetPortalAppHistoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalAppHistoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalAppHistoriesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPortalAppHistoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPortalAppHistoriesQuery,
    GetPortalAppHistoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalAppHistoriesQuery,
    GetPortalAppHistoriesQueryVariables
  >(GetPortalAppHistoriesDocument, options);
}
export function useGetPortalAppHistoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalAppHistoriesQuery,
    GetPortalAppHistoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalAppHistoriesQuery,
    GetPortalAppHistoriesQueryVariables
  >(GetPortalAppHistoriesDocument, options);
}
export type GetPortalAppHistoriesQueryHookResult = ReturnType<
  typeof useGetPortalAppHistoriesQuery
>;
export type GetPortalAppHistoriesLazyQueryHookResult = ReturnType<
  typeof useGetPortalAppHistoriesLazyQuery
>;
export type GetPortalAppHistoriesQueryResult = Apollo.QueryResult<
  GetPortalAppHistoriesQuery,
  GetPortalAppHistoriesQueryVariables
>;
export const UtilsUpdateApplDocument = gql`
  mutation UtilsUpdateAppl(
    $actionType: ApplicationActionTypes
    $refNo: String!
    $status: String!
  ) {
    utilsUpdateAppl(actionType: $actionType, refNo: $refNo, status: $status)
  }
`;
export type UtilsUpdateApplMutationFn = Apollo.MutationFunction<
  UtilsUpdateApplMutation,
  UtilsUpdateApplMutationVariables
>;

/**
 * __useUtilsUpdateApplMutation__
 *
 * To run a mutation, you first call `useUtilsUpdateApplMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUtilsUpdateApplMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [utilsUpdateApplMutation, { data, loading, error }] = useUtilsUpdateApplMutation({
 *   variables: {
 *      actionType: // value for 'actionType'
 *      refNo: // value for 'refNo'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUtilsUpdateApplMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UtilsUpdateApplMutation,
    UtilsUpdateApplMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UtilsUpdateApplMutation,
    UtilsUpdateApplMutationVariables
  >(UtilsUpdateApplDocument, options);
}
export type UtilsUpdateApplMutationHookResult = ReturnType<
  typeof useUtilsUpdateApplMutation
>;
export type UtilsUpdateApplMutationResult =
  Apollo.MutationResult<UtilsUpdateApplMutation>;
export type UtilsUpdateApplMutationOptions = Apollo.BaseMutationOptions<
  UtilsUpdateApplMutation,
  UtilsUpdateApplMutationVariables
>;
export const GetPromotionsDocument = gql`
  query GetPromotions(
    $filter: PromotionFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [PromotionSort!]! = [{ direction: DESC, field: createdAt }]
  ) {
    getPromotions(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...PromotionFullInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${PromotionFullInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPromotionsQuery__
 *
 * To run a query within a React component, call `useGetPromotionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPromotionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPromotionsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPromotionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPromotionsQuery,
    GetPromotionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPromotionsQuery, GetPromotionsQueryVariables>(
    GetPromotionsDocument,
    options
  );
}
export function useGetPromotionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPromotionsQuery,
    GetPromotionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPromotionsQuery, GetPromotionsQueryVariables>(
    GetPromotionsDocument,
    options
  );
}
export type GetPromotionsQueryHookResult = ReturnType<
  typeof useGetPromotionsQuery
>;
export type GetPromotionsLazyQueryHookResult = ReturnType<
  typeof useGetPromotionsLazyQuery
>;
export type GetPromotionsQueryResult = Apollo.QueryResult<
  GetPromotionsQuery,
  GetPromotionsQueryVariables
>;
export const GetPromotionDocument = gql`
  query GetPromotion($id: Int!) {
    getPromotion(id: $id) {
      ...PromotionFullInfo
    }
  }
  ${PromotionFullInfoFragmentDoc}
`;

/**
 * __useGetPromotionQuery__
 *
 * To run a query within a React component, call `useGetPromotionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPromotionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPromotionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPromotionQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPromotionQuery,
    GetPromotionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPromotionQuery, GetPromotionQueryVariables>(
    GetPromotionDocument,
    options
  );
}
export function useGetPromotionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPromotionQuery,
    GetPromotionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPromotionQuery, GetPromotionQueryVariables>(
    GetPromotionDocument,
    options
  );
}
export type GetPromotionQueryHookResult = ReturnType<
  typeof useGetPromotionQuery
>;
export type GetPromotionLazyQueryHookResult = ReturnType<
  typeof useGetPromotionLazyQuery
>;
export type GetPromotionQueryResult = Apollo.QueryResult<
  GetPromotionQuery,
  GetPromotionQueryVariables
>;
export const CreatePromotionDocument = gql`
  mutation CreatePromotion($input: CreateOnePromotionInput!) {
    createOnePromotion(input: $input) {
      ...PromotionFullInfo
    }
  }
  ${PromotionFullInfoFragmentDoc}
`;
export type CreatePromotionMutationFn = Apollo.MutationFunction<
  CreatePromotionMutation,
  CreatePromotionMutationVariables
>;

/**
 * __useCreatePromotionMutation__
 *
 * To run a mutation, you first call `useCreatePromotionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePromotionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPromotionMutation, { data, loading, error }] = useCreatePromotionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePromotionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePromotionMutation,
    CreatePromotionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreatePromotionMutation,
    CreatePromotionMutationVariables
  >(CreatePromotionDocument, options);
}
export type CreatePromotionMutationHookResult = ReturnType<
  typeof useCreatePromotionMutation
>;
export type CreatePromotionMutationResult =
  Apollo.MutationResult<CreatePromotionMutation>;
export type CreatePromotionMutationOptions = Apollo.BaseMutationOptions<
  CreatePromotionMutation,
  CreatePromotionMutationVariables
>;
export const UpdatePromotionDocument = gql`
  mutation UpdatePromotion($input: UpdateOnePromotionInput!) {
    updateOnePromotion(input: $input) {
      ...PromotionFullInfo
    }
  }
  ${PromotionFullInfoFragmentDoc}
`;
export type UpdatePromotionMutationFn = Apollo.MutationFunction<
  UpdatePromotionMutation,
  UpdatePromotionMutationVariables
>;

/**
 * __useUpdatePromotionMutation__
 *
 * To run a mutation, you first call `useUpdatePromotionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePromotionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePromotionMutation, { data, loading, error }] = useUpdatePromotionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePromotionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePromotionMutation,
    UpdatePromotionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdatePromotionMutation,
    UpdatePromotionMutationVariables
  >(UpdatePromotionDocument, options);
}
export type UpdatePromotionMutationHookResult = ReturnType<
  typeof useUpdatePromotionMutation
>;
export type UpdatePromotionMutationResult =
  Apollo.MutationResult<UpdatePromotionMutation>;
export type UpdatePromotionMutationOptions = Apollo.BaseMutationOptions<
  UpdatePromotionMutation,
  UpdatePromotionMutationVariables
>;
export const GetPortalProductBannersDocument = gql`
  query GetPortalProductBanners(
    $filter: ProductBannerFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [ProductBannerSort!]! = []
  ) {
    getPortalProductBanners(
      filter: $filter
      paging: $paging
      sorting: $sorting
    ) {
      nodes {
        ...ProductBannerInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${ProductBannerInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPortalProductBannersQuery__
 *
 * To run a query within a React component, call `useGetPortalProductBannersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalProductBannersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalProductBannersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPortalProductBannersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPortalProductBannersQuery,
    GetPortalProductBannersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalProductBannersQuery,
    GetPortalProductBannersQueryVariables
  >(GetPortalProductBannersDocument, options);
}
export function useGetPortalProductBannersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalProductBannersQuery,
    GetPortalProductBannersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalProductBannersQuery,
    GetPortalProductBannersQueryVariables
  >(GetPortalProductBannersDocument, options);
}
export type GetPortalProductBannersQueryHookResult = ReturnType<
  typeof useGetPortalProductBannersQuery
>;
export type GetPortalProductBannersLazyQueryHookResult = ReturnType<
  typeof useGetPortalProductBannersLazyQuery
>;
export type GetPortalProductBannersQueryResult = Apollo.QueryResult<
  GetPortalProductBannersQuery,
  GetPortalProductBannersQueryVariables
>;
export const CreateOneProductBannerDocument = gql`
  mutation CreateOneProductBanner($input: CreateProductBannerInput!) {
    createOneProductBanner(input: $input) {
      ...ProductBannerInfo
    }
  }
  ${ProductBannerInfoFragmentDoc}
`;
export type CreateOneProductBannerMutationFn = Apollo.MutationFunction<
  CreateOneProductBannerMutation,
  CreateOneProductBannerMutationVariables
>;

/**
 * __useCreateOneProductBannerMutation__
 *
 * To run a mutation, you first call `useCreateOneProductBannerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneProductBannerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneProductBannerMutation, { data, loading, error }] = useCreateOneProductBannerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneProductBannerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOneProductBannerMutation,
    CreateOneProductBannerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateOneProductBannerMutation,
    CreateOneProductBannerMutationVariables
  >(CreateOneProductBannerDocument, options);
}
export type CreateOneProductBannerMutationHookResult = ReturnType<
  typeof useCreateOneProductBannerMutation
>;
export type CreateOneProductBannerMutationResult =
  Apollo.MutationResult<CreateOneProductBannerMutation>;
export type CreateOneProductBannerMutationOptions = Apollo.BaseMutationOptions<
  CreateOneProductBannerMutation,
  CreateOneProductBannerMutationVariables
>;
export const UpdateOneProductBannerDocument = gql`
  mutation UpdateOneProductBanner($input: UpdateOneProductBannerInput!) {
    updateOneProductBanner(input: $input) {
      ...ProductBannerInfo
    }
  }
  ${ProductBannerInfoFragmentDoc}
`;
export type UpdateOneProductBannerMutationFn = Apollo.MutationFunction<
  UpdateOneProductBannerMutation,
  UpdateOneProductBannerMutationVariables
>;

/**
 * __useUpdateOneProductBannerMutation__
 *
 * To run a mutation, you first call `useUpdateOneProductBannerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneProductBannerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneProductBannerMutation, { data, loading, error }] = useUpdateOneProductBannerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneProductBannerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOneProductBannerMutation,
    UpdateOneProductBannerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOneProductBannerMutation,
    UpdateOneProductBannerMutationVariables
  >(UpdateOneProductBannerDocument, options);
}
export type UpdateOneProductBannerMutationHookResult = ReturnType<
  typeof useUpdateOneProductBannerMutation
>;
export type UpdateOneProductBannerMutationResult =
  Apollo.MutationResult<UpdateOneProductBannerMutation>;
export type UpdateOneProductBannerMutationOptions = Apollo.BaseMutationOptions<
  UpdateOneProductBannerMutation,
  UpdateOneProductBannerMutationVariables
>;
export const DeleteOneProductBannerDocument = gql`
  mutation DeleteOneProductBanner($input: DeleteOneProductBannerInput!) {
    deleteOneProductBanner(input: $input) {
      ...ProductBannerDeleteInfo
    }
  }
  ${ProductBannerDeleteInfoFragmentDoc}
`;
export type DeleteOneProductBannerMutationFn = Apollo.MutationFunction<
  DeleteOneProductBannerMutation,
  DeleteOneProductBannerMutationVariables
>;

/**
 * __useDeleteOneProductBannerMutation__
 *
 * To run a mutation, you first call `useDeleteOneProductBannerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneProductBannerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneProductBannerMutation, { data, loading, error }] = useDeleteOneProductBannerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneProductBannerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteOneProductBannerMutation,
    DeleteOneProductBannerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteOneProductBannerMutation,
    DeleteOneProductBannerMutationVariables
  >(DeleteOneProductBannerDocument, options);
}
export type DeleteOneProductBannerMutationHookResult = ReturnType<
  typeof useDeleteOneProductBannerMutation
>;
export type DeleteOneProductBannerMutationResult =
  Apollo.MutationResult<DeleteOneProductBannerMutation>;
export type DeleteOneProductBannerMutationOptions = Apollo.BaseMutationOptions<
  DeleteOneProductBannerMutation,
  DeleteOneProductBannerMutationVariables
>;
export const GetPortalProductBannerDocument = gql`
  query GetPortalProductBanner($id: Int!) {
    getPortalProductBanner(id: $id) {
      ...ProductBannerInfo
    }
  }
  ${ProductBannerInfoFragmentDoc}
`;

/**
 * __useGetPortalProductBannerQuery__
 *
 * To run a query within a React component, call `useGetPortalProductBannerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalProductBannerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalProductBannerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPortalProductBannerQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPortalProductBannerQuery,
    GetPortalProductBannerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalProductBannerQuery,
    GetPortalProductBannerQueryVariables
  >(GetPortalProductBannerDocument, options);
}
export function useGetPortalProductBannerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalProductBannerQuery,
    GetPortalProductBannerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalProductBannerQuery,
    GetPortalProductBannerQueryVariables
  >(GetPortalProductBannerDocument, options);
}
export type GetPortalProductBannerQueryHookResult = ReturnType<
  typeof useGetPortalProductBannerQuery
>;
export type GetPortalProductBannerLazyQueryHookResult = ReturnType<
  typeof useGetPortalProductBannerLazyQuery
>;
export type GetPortalProductBannerQueryResult = Apollo.QueryResult<
  GetPortalProductBannerQuery,
  GetPortalProductBannerQueryVariables
>;
export const GetProductBannersDocument = gql`
  query GetProductBanners(
    $filter: ProductBannerFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [ProductBannerSort!]! = [{ direction: DESC, field: createdAt }]
  ) {
    getProductBanners(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...ProductBannerInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${ProductBannerInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetProductBannersQuery__
 *
 * To run a query within a React component, call `useGetProductBannersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductBannersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductBannersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetProductBannersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductBannersQuery,
    GetProductBannersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetProductBannersQuery,
    GetProductBannersQueryVariables
  >(GetProductBannersDocument, options);
}
export function useGetProductBannersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductBannersQuery,
    GetProductBannersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProductBannersQuery,
    GetProductBannersQueryVariables
  >(GetProductBannersDocument, options);
}
export type GetProductBannersQueryHookResult = ReturnType<
  typeof useGetProductBannersQuery
>;
export type GetProductBannersLazyQueryHookResult = ReturnType<
  typeof useGetProductBannersLazyQuery
>;
export type GetProductBannersQueryResult = Apollo.QueryResult<
  GetProductBannersQuery,
  GetProductBannersQueryVariables
>;
export const GetPromotionBannersDocument = gql`
  query GetPromotionBanners(
    $filter: PromotionBannerFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [PromotionBannerSort!]! = []
  ) {
    getPromotionBanners(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...PromotionBannerInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${PromotionBannerInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPromotionBannersQuery__
 *
 * To run a query within a React component, call `useGetPromotionBannersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPromotionBannersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPromotionBannersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPromotionBannersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPromotionBannersQuery,
    GetPromotionBannersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPromotionBannersQuery,
    GetPromotionBannersQueryVariables
  >(GetPromotionBannersDocument, options);
}
export function useGetPromotionBannersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPromotionBannersQuery,
    GetPromotionBannersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPromotionBannersQuery,
    GetPromotionBannersQueryVariables
  >(GetPromotionBannersDocument, options);
}
export type GetPromotionBannersQueryHookResult = ReturnType<
  typeof useGetPromotionBannersQuery
>;
export type GetPromotionBannersLazyQueryHookResult = ReturnType<
  typeof useGetPromotionBannersLazyQuery
>;
export type GetPromotionBannersQueryResult = Apollo.QueryResult<
  GetPromotionBannersQuery,
  GetPromotionBannersQueryVariables
>;
export const GetPortalPromotionBannerDocument = gql`
  query GetPortalPromotionBanner($id: Int!) {
    getPortalPromotionBanner(id: $id) {
      ...PromotionBannerInfo
    }
  }
  ${PromotionBannerInfoFragmentDoc}
`;

/**
 * __useGetPortalPromotionBannerQuery__
 *
 * To run a query within a React component, call `useGetPortalPromotionBannerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalPromotionBannerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalPromotionBannerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPortalPromotionBannerQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPortalPromotionBannerQuery,
    GetPortalPromotionBannerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalPromotionBannerQuery,
    GetPortalPromotionBannerQueryVariables
  >(GetPortalPromotionBannerDocument, options);
}
export function useGetPortalPromotionBannerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalPromotionBannerQuery,
    GetPortalPromotionBannerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalPromotionBannerQuery,
    GetPortalPromotionBannerQueryVariables
  >(GetPortalPromotionBannerDocument, options);
}
export type GetPortalPromotionBannerQueryHookResult = ReturnType<
  typeof useGetPortalPromotionBannerQuery
>;
export type GetPortalPromotionBannerLazyQueryHookResult = ReturnType<
  typeof useGetPortalPromotionBannerLazyQuery
>;
export type GetPortalPromotionBannerQueryResult = Apollo.QueryResult<
  GetPortalPromotionBannerQuery,
  GetPortalPromotionBannerQueryVariables
>;
export const GetPortalPromotionBannersDocument = gql`
  query GetPortalPromotionBanners(
    $filter: PromotionBannerFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [PromotionBannerSort!]! = []
  ) {
    getPortalPromotionBanners(
      filter: $filter
      paging: $paging
      sorting: $sorting
    ) {
      nodes {
        ...PromotionBannerInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${PromotionBannerInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPortalPromotionBannersQuery__
 *
 * To run a query within a React component, call `useGetPortalPromotionBannersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalPromotionBannersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalPromotionBannersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPortalPromotionBannersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPortalPromotionBannersQuery,
    GetPortalPromotionBannersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPortalPromotionBannersQuery,
    GetPortalPromotionBannersQueryVariables
  >(GetPortalPromotionBannersDocument, options);
}
export function useGetPortalPromotionBannersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalPromotionBannersQuery,
    GetPortalPromotionBannersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPortalPromotionBannersQuery,
    GetPortalPromotionBannersQueryVariables
  >(GetPortalPromotionBannersDocument, options);
}
export type GetPortalPromotionBannersQueryHookResult = ReturnType<
  typeof useGetPortalPromotionBannersQuery
>;
export type GetPortalPromotionBannersLazyQueryHookResult = ReturnType<
  typeof useGetPortalPromotionBannersLazyQuery
>;
export type GetPortalPromotionBannersQueryResult = Apollo.QueryResult<
  GetPortalPromotionBannersQuery,
  GetPortalPromotionBannersQueryVariables
>;
export const CreateOnePromotionBannerDocument = gql`
  mutation CreateOnePromotionBanner($input: CreatePromotionBannerInput!) {
    createOnePromotionBanner(input: $input) {
      ...PromotionBannerInfo
    }
  }
  ${PromotionBannerInfoFragmentDoc}
`;
export type CreateOnePromotionBannerMutationFn = Apollo.MutationFunction<
  CreateOnePromotionBannerMutation,
  CreateOnePromotionBannerMutationVariables
>;

/**
 * __useCreateOnePromotionBannerMutation__
 *
 * To run a mutation, you first call `useCreateOnePromotionBannerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOnePromotionBannerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOnePromotionBannerMutation, { data, loading, error }] = useCreateOnePromotionBannerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOnePromotionBannerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOnePromotionBannerMutation,
    CreateOnePromotionBannerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateOnePromotionBannerMutation,
    CreateOnePromotionBannerMutationVariables
  >(CreateOnePromotionBannerDocument, options);
}
export type CreateOnePromotionBannerMutationHookResult = ReturnType<
  typeof useCreateOnePromotionBannerMutation
>;
export type CreateOnePromotionBannerMutationResult =
  Apollo.MutationResult<CreateOnePromotionBannerMutation>;
export type CreateOnePromotionBannerMutationOptions =
  Apollo.BaseMutationOptions<
    CreateOnePromotionBannerMutation,
    CreateOnePromotionBannerMutationVariables
  >;
export const DeleteOnePromotionBannerDocument = gql`
  mutation DeleteOnePromotionBanner($input: DeleteOnePromotionBannerInput!) {
    deleteOnePromotionBanner(input: $input) {
      ...PromotionBannerDeleteInfo
    }
  }
  ${PromotionBannerDeleteInfoFragmentDoc}
`;
export type DeleteOnePromotionBannerMutationFn = Apollo.MutationFunction<
  DeleteOnePromotionBannerMutation,
  DeleteOnePromotionBannerMutationVariables
>;

/**
 * __useDeleteOnePromotionBannerMutation__
 *
 * To run a mutation, you first call `useDeleteOnePromotionBannerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOnePromotionBannerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOnePromotionBannerMutation, { data, loading, error }] = useDeleteOnePromotionBannerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOnePromotionBannerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteOnePromotionBannerMutation,
    DeleteOnePromotionBannerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteOnePromotionBannerMutation,
    DeleteOnePromotionBannerMutationVariables
  >(DeleteOnePromotionBannerDocument, options);
}
export type DeleteOnePromotionBannerMutationHookResult = ReturnType<
  typeof useDeleteOnePromotionBannerMutation
>;
export type DeleteOnePromotionBannerMutationResult =
  Apollo.MutationResult<DeleteOnePromotionBannerMutation>;
export type DeleteOnePromotionBannerMutationOptions =
  Apollo.BaseMutationOptions<
    DeleteOnePromotionBannerMutation,
    DeleteOnePromotionBannerMutationVariables
  >;
export const UpdateOnePromotionBannerDocument = gql`
  mutation UpdateOnePromotionBanner($input: UpdateOnePromotionBannerInput!) {
    updateOnePromotionBanner(input: $input) {
      ...PromotionBannerInfo
    }
  }
  ${PromotionBannerInfoFragmentDoc}
`;
export type UpdateOnePromotionBannerMutationFn = Apollo.MutationFunction<
  UpdateOnePromotionBannerMutation,
  UpdateOnePromotionBannerMutationVariables
>;

/**
 * __useUpdateOnePromotionBannerMutation__
 *
 * To run a mutation, you first call `useUpdateOnePromotionBannerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOnePromotionBannerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOnePromotionBannerMutation, { data, loading, error }] = useUpdateOnePromotionBannerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOnePromotionBannerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOnePromotionBannerMutation,
    UpdateOnePromotionBannerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOnePromotionBannerMutation,
    UpdateOnePromotionBannerMutationVariables
  >(UpdateOnePromotionBannerDocument, options);
}
export type UpdateOnePromotionBannerMutationHookResult = ReturnType<
  typeof useUpdateOnePromotionBannerMutation
>;
export type UpdateOnePromotionBannerMutationResult =
  Apollo.MutationResult<UpdateOnePromotionBannerMutation>;
export type UpdateOnePromotionBannerMutationOptions =
  Apollo.BaseMutationOptions<
    UpdateOnePromotionBannerMutation,
    UpdateOnePromotionBannerMutationVariables
  >;
export const GetPortalFaqsDocument = gql`
  query GetPortalFaqs(
    $filter: FaqFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [FaqSort!]! = []
  ) {
    getPortalFaqs(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...FaqInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${FaqInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPortalFaqsQuery__
 *
 * To run a query within a React component, call `useGetPortalFaqsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalFaqsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalFaqsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPortalFaqsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPortalFaqsQuery,
    GetPortalFaqsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPortalFaqsQuery, GetPortalFaqsQueryVariables>(
    GetPortalFaqsDocument,
    options
  );
}
export function useGetPortalFaqsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalFaqsQuery,
    GetPortalFaqsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPortalFaqsQuery, GetPortalFaqsQueryVariables>(
    GetPortalFaqsDocument,
    options
  );
}
export type GetPortalFaqsQueryHookResult = ReturnType<
  typeof useGetPortalFaqsQuery
>;
export type GetPortalFaqsLazyQueryHookResult = ReturnType<
  typeof useGetPortalFaqsLazyQuery
>;
export type GetPortalFaqsQueryResult = Apollo.QueryResult<
  GetPortalFaqsQuery,
  GetPortalFaqsQueryVariables
>;
export const GetPortalFaqDocument = gql`
  query GetPortalFaq($id: Int!) {
    getPortalFaq(id: $id) {
      ...FaqInfo
    }
  }
  ${FaqInfoFragmentDoc}
`;

/**
 * __useGetPortalFaqQuery__
 *
 * To run a query within a React component, call `useGetPortalFaqQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalFaqQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalFaqQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPortalFaqQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPortalFaqQuery,
    GetPortalFaqQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPortalFaqQuery, GetPortalFaqQueryVariables>(
    GetPortalFaqDocument,
    options
  );
}
export function useGetPortalFaqLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalFaqQuery,
    GetPortalFaqQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPortalFaqQuery, GetPortalFaqQueryVariables>(
    GetPortalFaqDocument,
    options
  );
}
export type GetPortalFaqQueryHookResult = ReturnType<
  typeof useGetPortalFaqQuery
>;
export type GetPortalFaqLazyQueryHookResult = ReturnType<
  typeof useGetPortalFaqLazyQuery
>;
export type GetPortalFaqQueryResult = Apollo.QueryResult<
  GetPortalFaqQuery,
  GetPortalFaqQueryVariables
>;
export const CreateOneFaqDocument = gql`
  mutation CreateOneFaq($input: CreateOneFaqInput!) {
    createOneFaq(input: $input) {
      ...FaqInfo
    }
  }
  ${FaqInfoFragmentDoc}
`;
export type CreateOneFaqMutationFn = Apollo.MutationFunction<
  CreateOneFaqMutation,
  CreateOneFaqMutationVariables
>;

/**
 * __useCreateOneFaqMutation__
 *
 * To run a mutation, you first call `useCreateOneFaqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneFaqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneFaqMutation, { data, loading, error }] = useCreateOneFaqMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneFaqMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOneFaqMutation,
    CreateOneFaqMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateOneFaqMutation,
    CreateOneFaqMutationVariables
  >(CreateOneFaqDocument, options);
}
export type CreateOneFaqMutationHookResult = ReturnType<
  typeof useCreateOneFaqMutation
>;
export type CreateOneFaqMutationResult =
  Apollo.MutationResult<CreateOneFaqMutation>;
export type CreateOneFaqMutationOptions = Apollo.BaseMutationOptions<
  CreateOneFaqMutation,
  CreateOneFaqMutationVariables
>;
export const DeleteOneFaqDocument = gql`
  mutation DeleteOneFaq($input: DeleteOneFaqInput!) {
    deleteOneFaq(input: $input) {
      ...FaqDeleteInfo
    }
  }
  ${FaqDeleteInfoFragmentDoc}
`;
export type DeleteOneFaqMutationFn = Apollo.MutationFunction<
  DeleteOneFaqMutation,
  DeleteOneFaqMutationVariables
>;

/**
 * __useDeleteOneFaqMutation__
 *
 * To run a mutation, you first call `useDeleteOneFaqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneFaqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneFaqMutation, { data, loading, error }] = useDeleteOneFaqMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneFaqMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteOneFaqMutation,
    DeleteOneFaqMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteOneFaqMutation,
    DeleteOneFaqMutationVariables
  >(DeleteOneFaqDocument, options);
}
export type DeleteOneFaqMutationHookResult = ReturnType<
  typeof useDeleteOneFaqMutation
>;
export type DeleteOneFaqMutationResult =
  Apollo.MutationResult<DeleteOneFaqMutation>;
export type DeleteOneFaqMutationOptions = Apollo.BaseMutationOptions<
  DeleteOneFaqMutation,
  DeleteOneFaqMutationVariables
>;
export const UpdateOneFaqDocument = gql`
  mutation UpdateOneFaq($input: UpdateOneFaqInput!) {
    updateOneFaq(input: $input) {
      ...FaqInfo
    }
  }
  ${FaqInfoFragmentDoc}
`;
export type UpdateOneFaqMutationFn = Apollo.MutationFunction<
  UpdateOneFaqMutation,
  UpdateOneFaqMutationVariables
>;

/**
 * __useUpdateOneFaqMutation__
 *
 * To run a mutation, you first call `useUpdateOneFaqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneFaqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneFaqMutation, { data, loading, error }] = useUpdateOneFaqMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneFaqMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOneFaqMutation,
    UpdateOneFaqMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOneFaqMutation,
    UpdateOneFaqMutationVariables
  >(UpdateOneFaqDocument, options);
}
export type UpdateOneFaqMutationHookResult = ReturnType<
  typeof useUpdateOneFaqMutation
>;
export type UpdateOneFaqMutationResult =
  Apollo.MutationResult<UpdateOneFaqMutation>;
export type UpdateOneFaqMutationOptions = Apollo.BaseMutationOptions<
  UpdateOneFaqMutation,
  UpdateOneFaqMutationVariables
>;
export const DeletePromotionDocument = gql`
  mutation DeletePromotion($input: DeleteOnePromotionInput!) {
    deleteOnePromotion(input: $input) {
      createdAt
      description
      endDate
      id
      profitRateReduction
      startDate
      status
      title
      updatedAt
    }
  }
`;
export type DeletePromotionMutationFn = Apollo.MutationFunction<
  DeletePromotionMutation,
  DeletePromotionMutationVariables
>;

/**
 * __useDeletePromotionMutation__
 *
 * To run a mutation, you first call `useDeletePromotionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePromotionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePromotionMutation, { data, loading, error }] = useDeletePromotionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePromotionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePromotionMutation,
    DeletePromotionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeletePromotionMutation,
    DeletePromotionMutationVariables
  >(DeletePromotionDocument, options);
}
export type DeletePromotionMutationHookResult = ReturnType<
  typeof useDeletePromotionMutation
>;
export type DeletePromotionMutationResult =
  Apollo.MutationResult<DeletePromotionMutation>;
export type DeletePromotionMutationOptions = Apollo.BaseMutationOptions<
  DeletePromotionMutation,
  DeletePromotionMutationVariables
>;
export const GetFaqsDocument = gql`
  query GetFaqs(
    $filter: FaqFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [FaqSort!]! = [{ direction: ASC, field: priority }]
  ) {
    getFaqs(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...FaqInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${FaqInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetFaqsQuery__
 *
 * To run a query within a React component, call `useGetFaqsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFaqsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFaqsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetFaqsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetFaqsQuery, GetFaqsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFaqsQuery, GetFaqsQueryVariables>(
    GetFaqsDocument,
    options
  );
}
export function useGetFaqsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetFaqsQuery, GetFaqsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFaqsQuery, GetFaqsQueryVariables>(
    GetFaqsDocument,
    options
  );
}
export type GetFaqsQueryHookResult = ReturnType<typeof useGetFaqsQuery>;
export type GetFaqsLazyQueryHookResult = ReturnType<typeof useGetFaqsLazyQuery>;
export type GetFaqsQueryResult = Apollo.QueryResult<
  GetFaqsQuery,
  GetFaqsQueryVariables
>;
export const GetPopularKeywordsDocument = gql`
  query GetPopularKeywords(
    $filter: PopularSearchFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [PopularSearchSort!]! = [
      { direction: DESC, field: popularityCount }
    ]
  ) {
    getPopularSearchKeywords(
      filter: $filter
      paging: $paging
      sorting: $sorting
    ) {
      nodes {
        ...PopularSearchInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${PopularSearchInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPopularKeywordsQuery__
 *
 * To run a query within a React component, call `useGetPopularKeywordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPopularKeywordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPopularKeywordsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPopularKeywordsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPopularKeywordsQuery,
    GetPopularKeywordsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPopularKeywordsQuery,
    GetPopularKeywordsQueryVariables
  >(GetPopularKeywordsDocument, options);
}
export function useGetPopularKeywordsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPopularKeywordsQuery,
    GetPopularKeywordsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPopularKeywordsQuery,
    GetPopularKeywordsQueryVariables
  >(GetPopularKeywordsDocument, options);
}
export type GetPopularKeywordsQueryHookResult = ReturnType<
  typeof useGetPopularKeywordsQuery
>;
export type GetPopularKeywordsLazyQueryHookResult = ReturnType<
  typeof useGetPopularKeywordsLazyQuery
>;
export type GetPopularKeywordsQueryResult = Apollo.QueryResult<
  GetPopularKeywordsQuery,
  GetPopularKeywordsQueryVariables
>;
export const UploadExcelFileDocument = gql`
  mutation UploadExcelFile(
    $fileType: DataIOFilesTypes!
    $purpose: DataIOPurposeType!
    $signedUrl: String!
  ) {
    uploadExcelFile(
      fileType: $fileType
      purpose: $purpose
      signedUrl: $signedUrl
    )
  }
`;
export type UploadExcelFileMutationFn = Apollo.MutationFunction<
  UploadExcelFileMutation,
  UploadExcelFileMutationVariables
>;

/**
 * __useUploadExcelFileMutation__
 *
 * To run a mutation, you first call `useUploadExcelFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadExcelFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadExcelFileMutation, { data, loading, error }] = useUploadExcelFileMutation({
 *   variables: {
 *      fileType: // value for 'fileType'
 *      purpose: // value for 'purpose'
 *      signedUrl: // value for 'signedUrl'
 *   },
 * });
 */
export function useUploadExcelFileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UploadExcelFileMutation,
    UploadExcelFileMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UploadExcelFileMutation,
    UploadExcelFileMutationVariables
  >(UploadExcelFileDocument, options);
}
export type UploadExcelFileMutationHookResult = ReturnType<
  typeof useUploadExcelFileMutation
>;
export type UploadExcelFileMutationResult =
  Apollo.MutationResult<UploadExcelFileMutation>;
export type UploadExcelFileMutationOptions = Apollo.BaseMutationOptions<
  UploadExcelFileMutation,
  UploadExcelFileMutationVariables
>;
export const GetCityStateDocument = gql`
  query GetCityState($input: String!) {
    getCityState(postcode: $input) {
      ...CityStateInfo
    }
  }
  ${CityStateInfoFragmentDoc}
`;

/**
 * __useGetCityStateQuery__
 *
 * To run a query within a React component, call `useGetCityStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCityStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCityStateQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetCityStateQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCityStateQuery,
    GetCityStateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCityStateQuery, GetCityStateQueryVariables>(
    GetCityStateDocument,
    options
  );
}
export function useGetCityStateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCityStateQuery,
    GetCityStateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCityStateQuery, GetCityStateQueryVariables>(
    GetCityStateDocument,
    options
  );
}
export type GetCityStateQueryHookResult = ReturnType<
  typeof useGetCityStateQuery
>;
export type GetCityStateLazyQueryHookResult = ReturnType<
  typeof useGetCityStateLazyQuery
>;
export type GetCityStateQueryResult = Apollo.QueryResult<
  GetCityStateQuery,
  GetCityStateQueryVariables
>;
export const GetOutletsDocument = gql`
  query GetOutlets(
    $filter: OutletFilter! = {}
    $sorting: [OutletSort!]! = [{ direction: DESC, field: createdAt }]
    $fullList: Boolean
    $boundingCoordinates: JSONObject
    $brands: [String!]
    $state: String
  ) {
    getOutlets(
      filter: $filter
      sorting: $sorting
      fullList: $fullList
      boundingCoordinates: $boundingCoordinates
      brands: $brands
      state: $state
    ) {
      ...OutletInfo
    }
  }
  ${OutletInfoFragmentDoc}
`;

/**
 * __useGetOutletsQuery__
 *
 * To run a query within a React component, call `useGetOutletsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOutletsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOutletsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      fullList: // value for 'fullList'
 *      boundingCoordinates: // value for 'boundingCoordinates'
 *      brands: // value for 'brands'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useGetOutletsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetOutletsQuery,
    GetOutletsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOutletsQuery, GetOutletsQueryVariables>(
    GetOutletsDocument,
    options
  );
}
export function useGetOutletsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOutletsQuery,
    GetOutletsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOutletsQuery, GetOutletsQueryVariables>(
    GetOutletsDocument,
    options
  );
}
export type GetOutletsQueryHookResult = ReturnType<typeof useGetOutletsQuery>;
export type GetOutletsLazyQueryHookResult = ReturnType<
  typeof useGetOutletsLazyQuery
>;
export type GetOutletsQueryResult = Apollo.QueryResult<
  GetOutletsQuery,
  GetOutletsQueryVariables
>;
export const GetOutletDocument = gql`
  query GetOutlet($id: Float, $slug: String) {
    getOutlet(id: $id, slug: $slug) {
      ...OutletInfo
    }
  }
  ${OutletInfoFragmentDoc}
`;

/**
 * __useGetOutletQuery__
 *
 * To run a query within a React component, call `useGetOutletQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOutletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOutletQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetOutletQuery(
  baseOptions?: Apollo.QueryHookOptions<GetOutletQuery, GetOutletQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOutletQuery, GetOutletQueryVariables>(
    GetOutletDocument,
    options
  );
}
export function useGetOutletLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOutletQuery,
    GetOutletQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOutletQuery, GetOutletQueryVariables>(
    GetOutletDocument,
    options
  );
}
export type GetOutletQueryHookResult = ReturnType<typeof useGetOutletQuery>;
export type GetOutletLazyQueryHookResult = ReturnType<
  typeof useGetOutletLazyQuery
>;
export type GetOutletQueryResult = Apollo.QueryResult<
  GetOutletQuery,
  GetOutletQueryVariables
>;
export const GetNotificationsDocument = gql`
  query GetNotifications(
    $filter: NotificationFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [NotificationSort!]! = [{ direction: DESC, field: createdAt }]
  ) {
    getNotifications(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...NotificationInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${NotificationInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetNotificationsQuery__
 *
 * To run a query within a React component, call `useGetNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotificationsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetNotificationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetNotificationsQuery,
    GetNotificationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(
    GetNotificationsDocument,
    options
  );
}
export function useGetNotificationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNotificationsQuery,
    GetNotificationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetNotificationsQuery,
    GetNotificationsQueryVariables
  >(GetNotificationsDocument, options);
}
export type GetNotificationsQueryHookResult = ReturnType<
  typeof useGetNotificationsQuery
>;
export type GetNotificationsLazyQueryHookResult = ReturnType<
  typeof useGetNotificationsLazyQuery
>;
export type GetNotificationsQueryResult = Apollo.QueryResult<
  GetNotificationsQuery,
  GetNotificationsQueryVariables
>;
export const GetUnreadNotificationsCountDocument = gql`
  query GetUnreadNotificationsCount {
    getUnreadNotificationsCount
  }
`;

/**
 * __useGetUnreadNotificationsCountQuery__
 *
 * To run a query within a React component, call `useGetUnreadNotificationsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnreadNotificationsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnreadNotificationsCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUnreadNotificationsCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUnreadNotificationsCountQuery,
    GetUnreadNotificationsCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetUnreadNotificationsCountQuery,
    GetUnreadNotificationsCountQueryVariables
  >(GetUnreadNotificationsCountDocument, options);
}
export function useGetUnreadNotificationsCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUnreadNotificationsCountQuery,
    GetUnreadNotificationsCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUnreadNotificationsCountQuery,
    GetUnreadNotificationsCountQueryVariables
  >(GetUnreadNotificationsCountDocument, options);
}
export type GetUnreadNotificationsCountQueryHookResult = ReturnType<
  typeof useGetUnreadNotificationsCountQuery
>;
export type GetUnreadNotificationsCountLazyQueryHookResult = ReturnType<
  typeof useGetUnreadNotificationsCountLazyQuery
>;
export type GetUnreadNotificationsCountQueryResult = Apollo.QueryResult<
  GetUnreadNotificationsCountQuery,
  GetUnreadNotificationsCountQueryVariables
>;
export const MarkAsReadDocument = gql`
  mutation MarkAsRead($id: Int!) {
    markAsRead(id: $id)
  }
`;
export type MarkAsReadMutationFn = Apollo.MutationFunction<
  MarkAsReadMutation,
  MarkAsReadMutationVariables
>;

/**
 * __useMarkAsReadMutation__
 *
 * To run a mutation, you first call `useMarkAsReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkAsReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markAsReadMutation, { data, loading, error }] = useMarkAsReadMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMarkAsReadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MarkAsReadMutation,
    MarkAsReadMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<MarkAsReadMutation, MarkAsReadMutationVariables>(
    MarkAsReadDocument,
    options
  );
}
export type MarkAsReadMutationHookResult = ReturnType<
  typeof useMarkAsReadMutation
>;
export type MarkAsReadMutationResult =
  Apollo.MutationResult<MarkAsReadMutation>;
export type MarkAsReadMutationOptions = Apollo.BaseMutationOptions<
  MarkAsReadMutation,
  MarkAsReadMutationVariables
>;
export const MarkAllAsReadDocument = gql`
  mutation MarkAllAsRead {
    markAllAsRead
  }
`;
export type MarkAllAsReadMutationFn = Apollo.MutationFunction<
  MarkAllAsReadMutation,
  MarkAllAsReadMutationVariables
>;

/**
 * __useMarkAllAsReadMutation__
 *
 * To run a mutation, you first call `useMarkAllAsReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkAllAsReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markAllAsReadMutation, { data, loading, error }] = useMarkAllAsReadMutation({
 *   variables: {
 *   },
 * });
 */
export function useMarkAllAsReadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MarkAllAsReadMutation,
    MarkAllAsReadMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MarkAllAsReadMutation,
    MarkAllAsReadMutationVariables
  >(MarkAllAsReadDocument, options);
}
export type MarkAllAsReadMutationHookResult = ReturnType<
  typeof useMarkAllAsReadMutation
>;
export type MarkAllAsReadMutationResult =
  Apollo.MutationResult<MarkAllAsReadMutation>;
export type MarkAllAsReadMutationOptions = Apollo.BaseMutationOptions<
  MarkAllAsReadMutation,
  MarkAllAsReadMutationVariables
>;
export const GetPortalRolesDocument = gql`
  query getPortalRoles(
    $filter: RoleFilter! = {}
    $paging: OffsetPaging! = { limit: 10 }
    $sorting: [RoleSort!]! = []
  ) {
    getPortalRoles(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...RoleInfo
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
  ${RoleInfoFragmentDoc}
  ${PageInfoFragmentDoc}
`;

/**
 * __useGetPortalRolesQuery__
 *
 * To run a query within a React component, call `useGetPortalRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalRolesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPortalRolesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPortalRolesQuery,
    GetPortalRolesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPortalRolesQuery, GetPortalRolesQueryVariables>(
    GetPortalRolesDocument,
    options
  );
}
export function useGetPortalRolesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalRolesQuery,
    GetPortalRolesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPortalRolesQuery, GetPortalRolesQueryVariables>(
    GetPortalRolesDocument,
    options
  );
}
export type GetPortalRolesQueryHookResult = ReturnType<
  typeof useGetPortalRolesQuery
>;
export type GetPortalRolesLazyQueryHookResult = ReturnType<
  typeof useGetPortalRolesLazyQuery
>;
export type GetPortalRolesQueryResult = Apollo.QueryResult<
  GetPortalRolesQuery,
  GetPortalRolesQueryVariables
>;
export const GetPortalRoleDocument = gql`
  query getPortalRole($id: Int!) {
    getPortalRole(id: $id) {
      ...RoleInfo
    }
  }
  ${RoleInfoFragmentDoc}
`;

/**
 * __useGetPortalRoleQuery__
 *
 * To run a query within a React component, call `useGetPortalRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortalRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortalRoleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPortalRoleQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPortalRoleQuery,
    GetPortalRoleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPortalRoleQuery, GetPortalRoleQueryVariables>(
    GetPortalRoleDocument,
    options
  );
}
export function useGetPortalRoleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortalRoleQuery,
    GetPortalRoleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPortalRoleQuery, GetPortalRoleQueryVariables>(
    GetPortalRoleDocument,
    options
  );
}
export type GetPortalRoleQueryHookResult = ReturnType<
  typeof useGetPortalRoleQuery
>;
export type GetPortalRoleLazyQueryHookResult = ReturnType<
  typeof useGetPortalRoleLazyQuery
>;
export type GetPortalRoleQueryResult = Apollo.QueryResult<
  GetPortalRoleQuery,
  GetPortalRoleQueryVariables
>;
export const CreateOneRoleDocument = gql`
  mutation createOneRole($input: CreateOneRoleInput!) {
    createOneRole(input: $input) {
      ...RoleInfo
    }
  }
  ${RoleInfoFragmentDoc}
`;
export type CreateOneRoleMutationFn = Apollo.MutationFunction<
  CreateOneRoleMutation,
  CreateOneRoleMutationVariables
>;

/**
 * __useCreateOneRoleMutation__
 *
 * To run a mutation, you first call `useCreateOneRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneRoleMutation, { data, loading, error }] = useCreateOneRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneRoleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOneRoleMutation,
    CreateOneRoleMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateOneRoleMutation,
    CreateOneRoleMutationVariables
  >(CreateOneRoleDocument, options);
}
export type CreateOneRoleMutationHookResult = ReturnType<
  typeof useCreateOneRoleMutation
>;
export type CreateOneRoleMutationResult =
  Apollo.MutationResult<CreateOneRoleMutation>;
export type CreateOneRoleMutationOptions = Apollo.BaseMutationOptions<
  CreateOneRoleMutation,
  CreateOneRoleMutationVariables
>;
export const UpdateOneRoleDocument = gql`
  mutation updateOneRole($input: UpdateOneRoleInput!) {
    updateOneRole(input: $input) {
      ...RoleInfo
    }
  }
  ${RoleInfoFragmentDoc}
`;
export type UpdateOneRoleMutationFn = Apollo.MutationFunction<
  UpdateOneRoleMutation,
  UpdateOneRoleMutationVariables
>;

/**
 * __useUpdateOneRoleMutation__
 *
 * To run a mutation, you first call `useUpdateOneRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneRoleMutation, { data, loading, error }] = useUpdateOneRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneRoleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOneRoleMutation,
    UpdateOneRoleMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOneRoleMutation,
    UpdateOneRoleMutationVariables
  >(UpdateOneRoleDocument, options);
}
export type UpdateOneRoleMutationHookResult = ReturnType<
  typeof useUpdateOneRoleMutation
>;
export type UpdateOneRoleMutationResult =
  Apollo.MutationResult<UpdateOneRoleMutation>;
export type UpdateOneRoleMutationOptions = Apollo.BaseMutationOptions<
  UpdateOneRoleMutation,
  UpdateOneRoleMutationVariables
>;
export const GetPermissionsDocument = gql`
  query getPermissions(
    $filter: PermissionFilter! = {}
    $sorting: [PermissionSort!]! = []
  ) {
    getPermissions(filter: $filter, sorting: $sorting) {
      ...PermissionInfo
    }
  }
  ${PermissionInfoFragmentDoc}
`;

/**
 * __useGetPermissionsQuery__
 *
 * To run a query within a React component, call `useGetPermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPermissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPermissionsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetPermissionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPermissionsQuery,
    GetPermissionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPermissionsQuery, GetPermissionsQueryVariables>(
    GetPermissionsDocument,
    options
  );
}
export function useGetPermissionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPermissionsQuery,
    GetPermissionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPermissionsQuery, GetPermissionsQueryVariables>(
    GetPermissionsDocument,
    options
  );
}
export type GetPermissionsQueryHookResult = ReturnType<
  typeof useGetPermissionsQuery
>;
export type GetPermissionsLazyQueryHookResult = ReturnType<
  typeof useGetPermissionsLazyQuery
>;
export type GetPermissionsQueryResult = Apollo.QueryResult<
  GetPermissionsQuery,
  GetPermissionsQueryVariables
>;
export const DeleteOneRoleDocument = gql`
  mutation deleteOneRole($id: Int!) {
    deleteOneRole(id: $id)
  }
`;
export type DeleteOneRoleMutationFn = Apollo.MutationFunction<
  DeleteOneRoleMutation,
  DeleteOneRoleMutationVariables
>;

/**
 * __useDeleteOneRoleMutation__
 *
 * To run a mutation, you first call `useDeleteOneRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneRoleMutation, { data, loading, error }] = useDeleteOneRoleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOneRoleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteOneRoleMutation,
    DeleteOneRoleMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteOneRoleMutation,
    DeleteOneRoleMutationVariables
  >(DeleteOneRoleDocument, options);
}
export type DeleteOneRoleMutationHookResult = ReturnType<
  typeof useDeleteOneRoleMutation
>;
export type DeleteOneRoleMutationResult =
  Apollo.MutationResult<DeleteOneRoleMutation>;
export type DeleteOneRoleMutationOptions = Apollo.BaseMutationOptions<
  DeleteOneRoleMutation,
  DeleteOneRoleMutationVariables
>;
