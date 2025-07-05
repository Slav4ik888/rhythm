import { Location } from 'react-router-dom';
import { RouteName } from 'app/providers/routes';


/**
 * Является ли эта страница 'dashboard'?
 * @param route
 */
export const isDashboardPage = (location: Location<any>): boolean => {
  const route = location?.pathname?.split('/')?.slice(1);

  return route?.[1] === RouteName.DASHBOARD;
};
