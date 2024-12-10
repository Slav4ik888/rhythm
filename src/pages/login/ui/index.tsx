import { FC, memo, useCallback, useEffect, useRef } from 'react';
import { useLogin } from '../model';
import { useUser } from 'entities/user';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/routes';
import { getRefValue } from 'shared/lib/refs';
import { AuthByLogin } from '../model/services';
import { validateAuthByLogin } from '../model/validators';
import { LoginPageComponent } from './component';
import { useUI } from 'entities/ui';



const LoginPage: FC = memo(() => {
  const
    { auth } = useUser(),
    { setErrorStatus } = useUI(),
    { loading, errors, setErrors, serviceAuthByLogin } = useLogin(),
    navigate    = useNavigate(),
    emailRef    = useRef(null),
    passwordRef = useRef(null);

  
  useEffect(() => {
    if (auth) navigate(RoutePath.DASHBOARD);
  }, [auth]);
  
  useEffect(() => {
    // Обнулить если была записана ошибка, например 401, 403...
    setErrorStatus(0);
  }, []);
  
  const handlerSubmit = useCallback(() => {
    if (loading) return;

    const userData: AuthByLogin = {
      email    : getRefValue(emailRef),
      password : getRefValue(passwordRef)
    };

    const { valid, errors } = validateAuthByLogin(userData);
    if (! valid) setErrors(errors);
    else serviceAuthByLogin(userData);
  }, [loading]);


  return (
    <LoginPageComponent 
      emailRef    = {emailRef}
      passwordRef = {passwordRef}
      errors      = {errors}
      onSubmit    = {handlerSubmit}
    />
  );
});


export default LoginPage;
