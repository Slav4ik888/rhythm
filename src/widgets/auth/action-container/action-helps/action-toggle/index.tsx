import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { AppRoutes } from 'app/providers/routes';
import { ActionToggleButton } from './button';
import { AuthType } from 'shared/ui/pages';



type Props = {
  type: AuthType;
}

export const ActionToggle: FC<Props> = memo(({ type }) => {
  const login = type === 'login';


  return (
    <Box sx={{ mt: 1, mb: 1 }}>
      <ActionToggleButton
        text     = {login ? 'Нет аккаунта? -'   : 'Уже есть аккаунт? -'}
        link     = {login ? AppRoutes.SIGNUP       : AppRoutes.LOGIN}
        linkText = {login ? 'зарегистрируйтесь' : 'войдите'}
      />
    </Box>
  )
});
