import { useUI } from 'entities/ui';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from '..';
import { FC } from 'react';



interface Props {
  children: JSX.Element
}

export const RequireAuth: FC<Props> = ({ children }) => {
  const
    { errorStatus } = useUI(),
    { pathname } = useLocation();


  if (errorStatus === 401) {
    console.log(401 + ' redirect to LOGIN');
    // console.log('pathname: ', pathname);
    
    return <Navigate
      to    = {RoutePath.LOGIN}
      state = {{ from: pathname }}
      // replace
    />
  }
  else if (errorStatus === 403) {
    console.log(403 + ' redirect to ROOT');
    
    return <Navigate
      to    = {RoutePath.ROOT}
      state = {{ from: pathname }}
      // replace
    />
  }
  else return children
}
