import { FC, memo } from 'react';
import RootAuthContainer from './root-auth-container';
import RootNotAuthContainer from './root-not-auth-container';


/** Главная страница */
export const RootPage: FC = memo(() => {
  // const
  //   { auth } = useUser();
  
  return (
    <>
      <RootAuthContainer />
      {/* {
        auth ? <RootAuthContainer /> : <RootNotAuthContainer />
      } */}
    </>
  );
});
