import { useUI } from 'entities/ui';
import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRouter } from './providers/routes';
import { ThemeProvider } from "@mui/material/styles";
import { useMaterialUIController, theme, themeDark } from './providers/theme-old';


import 'app/styles/index.scss';


export const App: FC = () => {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  
  const
    { replacePath, setReplacePath } = useUI(),
    navigate = useNavigate(),
    { pathname } = useLocation();
  
  
  
    
  useEffect(() => {
    // screenResizeListener(setScreenFormat);
  }, []);

  // Replace to saved path
  // useEffect(() => {
  //   if (auth && replacePath) {
  //     console.log('[App]: replace to saved path: ');

  //     setReplacePath('');
  //     navigate(replacePath);
  //   }
  // }, [auth]);

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
