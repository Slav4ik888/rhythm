import { useUI } from 'entities/ui';
import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRouter } from './providers/routes';

import 'app/styles/index.scss';



export const App: FC = () => {
  const
    { replacePath, setReplacePath } = useUI(),
    navigate = useNavigate(),
    location = useLocation();
    
    
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


  return (
    <AppRouter />
  );
};
