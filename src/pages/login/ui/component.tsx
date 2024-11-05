import { FC, memo, MutableRefObject } from 'react';
import { TextField } from '@mui/material';
import { ActionMain, ActionHelps } from 'widgets/auth/action-container';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { reducer as reducerLoginPage } from '../model/slice';
import { AuthContentWrapper, AuthCardHeader, useStylesAuth } from 'shared/ui/pages';
import { GridWrap } from 'shared/ui/containers';
import { useTheme } from 'app/providers/theme';
import { Errors } from 'shared/lib/validators';
import { InnerPageWrapper } from 'shared/ui/wrappers';



const reducers: ReducersList = {
  loginPage: reducerLoginPage
};


interface Props {
  emailRef    : MutableRefObject<null>
  passwordRef : MutableRefObject<null>
  errors      : Errors
  onSubmit    : () => void
}


export const LoginPageComponent: FC<Props> = memo(({ emailRef, passwordRef, errors, onSubmit }) => {
  const sx = useStylesAuth(useTheme());


  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <InnerPageWrapper>
        <AuthCardHeader type='login' />

        <AuthContentWrapper>
          <GridWrap grid={{ sm: 12 }} sx={{ root: sx.gridItem }}>
            <TextField
              fullWidth
              name       = 'email'
              type       = 'email'
              label      = 'Введите email'
              inputRef   = {emailRef}
              helperText = {errors?.email}
              error      = {errors?.email ? true : false}
              sx         = {sx.textField}
            />
          </GridWrap>

          <GridWrap grid={{ sm: 12 }} sx={{ root: sx.gridItem }}>
            <TextField
              fullWidth
              name       = 'password'
              type       = 'password'
              label      = 'Введите пароль'
              inputRef   = {passwordRef}
              helperText = {errors?.password}
              error      = {errors?.password ? true : false}
              sx         = {sx.textField}
            />
          </GridWrap>

          <ActionMain
            type     = 'login'
            onSubmit = {onSubmit}
          />
          <ActionHelps type='login' />
        </AuthContentWrapper>
      </InnerPageWrapper>
    </DynamicModuleLoader>
  );
});
