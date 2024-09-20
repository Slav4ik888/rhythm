
export enum AppRoutes {
  ROOT         = 'ROOT',
  DASHBOARD    = 'DASHBOARD',
  DASHBOARD_ID = 'DASHBOARD_ID',
  NOT_FOUND    = 'NOT_FOUND',
}


export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]         : '/',
  [AppRoutes.DASHBOARD]    : '/dashboard',
  [AppRoutes.DASHBOARD_ID] : '/dashboard/:companyId',
  [AppRoutes.NOT_FOUND]    : '*',
};
