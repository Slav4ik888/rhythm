import { FC, memo, useEffect, useRef } from 'react';
import { useUser } from 'entities/user';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/routes';
import { CompanyProfilePageComponent } from './component';
import { useUI } from 'entities/ui';



const CompanyProfilePage: FC = memo(() => {
  const
    { auth } = useUser(),
    { setErrorStatus } = useUI(),
    navigate = useNavigate();

  
  useEffect(() => {
    // Обнулить если была записана ошибка, например 401, 403...
    setErrorStatus(0);
  }, []);
  

  if (! auth) navigate(RoutePath.LOGIN);

  return (
    <CompanyProfilePageComponent 
      // emailRef    = {emailRef}
      // passwordRef = {passwordRef}
      // errors      = {errors}
      // onSubmit    = {handlerSubmit}
    />
  );
});


export default CompanyProfilePage;
