import { FC, memo, useCallback, useEffect, useRef } from 'react';
import { useLogin } from '../model';
import { getRefValue } from 'shared/lib/refs';
import { AuthByLogin } from '../model/services';
import { validateAuthByLogin } from '../model/validators';
import { LoginPageComponent } from './component';
import { useUI } from 'entities/ui';



const LoginPage: FC = memo(() => {
  const
    { setErrorStatus } = useUI(),
    { loading, errors, setErrors, serviceAuthByLogin } = useLogin(),
    emailRef    = useRef(null),
    passwordRef = useRef(null);


  useEffect(() => {
    // Обнулить если была записана ошибка, например 401, 403...
    setErrorStatus(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [loading, serviceAuthByLogin, setErrors]);


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
