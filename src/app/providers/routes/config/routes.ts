
export enum AppRoutes {
  ROOT       = 'ROOT',
  DASHBOARD  = 'DASHBOARD',
  NOT_FOUND  = 'NOT_FOUND'
}


export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]      : '/',
  [AppRoutes.DASHBOARD] : '/dashboard',
  [AppRoutes.NOT_FOUND] : '*'
};
