import { FC, memo, useMemo } from 'react';
import { useLogin } from 'pages/login';
import { useSignup } from 'pages/signup';
import { ActionMainComponent } from './component';
import { AuthType } from 'shared/ui/pages';



interface Props {
  type      : AuthType
  disabled? : boolean
  onSubmit  : () => void
}

/** Кнопка "Зарегистрироваться" | "Войти" */
export const ActionMain: FC<Props> = memo(({ type, disabled = false, onSubmit }) => {
  const
    { loading: loginLoading, errors: loginErrors } = useLogin(),
    { loading: signupLoading, errors: signupErrors } = useSignup(),
    
    { textBtn, loading, errors } = useMemo(() => {
      const login = type === 'login';

      return {
        textBtn : login ? 'Войти'      : 'Регистрация',
        loading : login ? loginLoading : signupLoading,
        errors  : login ? loginErrors  : signupErrors
      }
    }, [type, loginLoading, loginErrors, signupLoading, signupErrors]);
  

  return (
    <ActionMainComponent
      textBtn  = {textBtn}
      errors   = {errors}
      loading  = {loading}
      disabled = {disabled}
      onSubmit = {onSubmit}
    />
  )
});
