import { RoutePath } from 'app/providers/routes';
import { useUser } from 'entities/user';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import RootNotAuthContainer from './root-not-auth-container';



/** Главная страница */
export const RootPage: FC = memo(() => {
  const { auth } = useUser();
  const navigate = useNavigate();

  // TODO: решить ошибку
  // Cannot update a component(`BrowserRouter`) while rendering a different component(`Unknown`).
  if (auth) navigate(RoutePath.DASHBOARD);

  return <RootNotAuthContainer />
});
