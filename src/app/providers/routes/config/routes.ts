
export enum AppRoutes {
  ROOT            = 'ROOT',

  // Auth
  SIGNUP          = 'SIGNUP',
  LOGIN           = 'LOGIN',

  USER_PROFILE    = 'USER_PROFILE',
  COMPANY_PROFILE = 'COMPANY_PROFILE',

  SLUG            = 'SLUG',
  DASHBOARD       = 'DASHBOARD',

  NOT_FOUND       = 'NOT_FOUND',
}

export const RouteName: Record<string, string> = {
  [AppRoutes.ROOT]            : '',
  // Auth
  [AppRoutes.SIGNUP]          : 'signup',
  [AppRoutes.LOGIN]           : 'login',
  // Profiles
  [AppRoutes.USER_PROFILE]    : 'user-profile',
  [AppRoutes.COMPANY_PROFILE] : 'company-profile',
  // Dashboard
  [AppRoutes.DASHBOARD]       : 'dashboard',
  [AppRoutes.NOT_FOUND]       : '*',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]            : '/',
  // Auth
  [AppRoutes.SIGNUP]          : '/signup',
  [AppRoutes.LOGIN]           : '/login',
  // Profiles
  [AppRoutes.USER_PROFILE]    : '/user-profile',

  [AppRoutes.SLUG]            : ':companyId',
  // Profiles
  [AppRoutes.COMPANY_PROFILE] : 'company-profile',
  // Dashboard
  [AppRoutes.DASHBOARD]       : 'dashboard',
  [AppRoutes.NOT_FOUND]       : '*',
};
