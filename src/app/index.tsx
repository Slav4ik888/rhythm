import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRouter } from './providers/routes';
import { useUser } from 'entities/user';
import 'app/styles/index.scss';
import { NO_SHEET_ID } from 'entities/dashboard-view';



export const App: FC = () => {
  const { serviceGetStartResourseData } = useUser();
  const { pathname } = useLocation();
  
  useEffect(() => {
    // TODO: sheetId подставлять нужный
    serviceGetStartResourseData({ pathname, sheetId: NO_SHEET_ID });
    // screenResizeListener(setScreenFormat);
  }, []);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    // @ts-ignore
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);


  return (
    <AppRouter />
  );
};
