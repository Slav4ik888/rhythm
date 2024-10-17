import { FC, memo, useCallback } from 'react';
import { Typography } from '@mui/material';
import { RecoveryPasswordModal } from './recovery-password-modal';
import { useValue } from 'shared/lib/hooks';
import { useLogin } from 'pages/login';
import { AuthType } from 'shared/ui/pages';



const style = {
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
};


interface Props {
  type: AuthType
}


/** Восстановление пароля (главный контейнер) */
export const RecoveryPassword: FC<Props> = memo(({ type }) => {
  const
    { setErrors } = useLogin(),
    hookOpen = useValue();

  const handlerClick = useCallback(() => {
    setErrors();
    hookOpen.setOpen();
  }, []);

  
  if (type === 'signup') return null
  
  return (
    <>
      <Typography
        variant = 'body2'
        sx      = {style}
        onClick = {handlerClick}
      >
        {'Восстановить пароль'}
      </Typography>

      <RecoveryPasswordModal hookOpen={hookOpen} />
    </>
  );
});
