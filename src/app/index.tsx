import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRouter } from './providers/routes';
import { useUser } from 'entities/user';
import 'app/styles/index.scss';
import { NO_SHEET_ID } from 'entities/dashboard-view';
import { useUI } from 'entities/ui';



export const App: FC = () => {
  const { auth, serviceGetStartResourseData } = useUser();
  const { replacePath, setReplacePath } = useUI();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: sheetId подставлять нужный
    serviceGetStartResourseData({ pathname, sheetId: NO_SHEET_ID });
    // screenResizeListener(setScreenFormat);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    // @ts-ignore
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);


  // Replace to saved path
  useEffect(() => {
    if (auth && replacePath) {
      // console.log(`[App]: replace to saved path: ${replacePath}`);

      setReplacePath('');
      navigate(replacePath);
    }
  }, [auth, replacePath, setReplacePath, navigate]);

  return (
    <AppRouter />
  );
};
