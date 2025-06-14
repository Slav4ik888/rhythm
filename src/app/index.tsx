import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRouter } from './providers/routes';
import { useUser } from 'entities/user';
import { useUI } from 'entities/ui';
import 'app/styles/index.scss';
import { useInitialEffect } from 'shared/lib/hooks';



export const App: FC = () => {
  const { auth, serviceGetAuth } = useUser();
  const { replacePath, setReplacePath } = useUI();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useInitialEffect(() => {
    serviceGetAuth({ pathname });
    // TODO: sheetId подставлять нужный
    // serviceGetStartResourseData({ pathname, sheetId: NO_SHEET_ID });
    // screenResizeListener(setScreenFormat);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

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
