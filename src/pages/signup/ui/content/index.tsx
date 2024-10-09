import * as React from 'react';
import { SignupData, useSignup } from '../../model';
import { TextfieldItem } from 'shared/ui/containers/items';
import { UseGroup } from 'shared/lib/hooks';
import { useTheme } from 'app/providers/theme-old';
import { TextField } from '@mui/material';
import { MutableRefObject } from 'react';
import { GridWrap } from 'shared/ui/containers';
import { useStylesAuth } from 'shared/ui/pages';
import { useTranslation } from 'react-i18next';



type Props = {
  group        : UseGroup<SignupData>
  firstNameRef : MutableRefObject<null>
  emailRef     : MutableRefObject<null>
  passwordRef  : MutableRefObject<null>
}


export const SignupContent: React.FC<Props> = ({ firstNameRef, emailRef, passwordRef, group: S }) => {
  const
    sx = useStylesAuth(useTheme()),
    { t } = useTranslation('auth'),
    { errors } = useSignup();
  

  return (
    <>
      <TextfieldItem
        label      = {t('Название компании')}
        name       = 'companyName'
        scheme     = 'companyName'
        grid       = {{ sm: 12 }}
        sx         = {{ root: sx.gridItem, bg: sx.textField } }
        group      = {S}
        errorField = 'companyName'
        errors     = {errors}
      />

      <GridWrap grid={{ sm: 12 }} sx={{ root: sx.gridItem }}>
        <TextField
          fullWidth
          name       = 'name'
          label      = {t('Ваше имя')}
          inputRef   = {firstNameRef}
          helperText = {errors?.firstName}
          error      = {errors?.firstName ? true : false}
          sx         = {sx.textField}
        />
      </GridWrap>

      <GridWrap grid={{ sm: 12 }} sx={{ root: sx.gridItem }}>
        <TextField
          fullWidth
          name       = 'email'
          type       = 'email'
          label      = {t('Введите email')}
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
          label      = {t('Введите пароль')}
          inputRef   = {passwordRef}
          helperText = {errors?.password}
          error      = {errors?.password ? true : false}
          sx         = {sx.textField}
        />
      </GridWrap>

      <TextfieldItem
        label      = {t('Повторите пароль')}
        type       = 'password'
        name       = 'confirmPassword'
        scheme     = 'confirmPassword'
        grid       = {{ sm: 12 }}
        sx         = {{ root: sx.gridItem, bg: sx.textField }}
        group      = {S}
        errorField = 'confirmPassword'
        errors     = {errors}
      />

      

      {/* <TextfieldItem
        label      = 'Введите email'
        type       = 'email'
        name       = 'email'
        scheme     = 'email'
        grid       = {{ sm: 12 }}
        sx         = {{ root: sx.gridItem, bg: sx.textField } }
        group      = {S}
        errorField = 'email'
        errors     = {errors}
      /> */}

      {/* <TextfieldItem
        label      = 'Введите пароль'
        type       = 'password'
        name       = 'password'
        scheme     = 'password'
        grid       = {{ sm: 12 }}
        sx         = {{ root: sx.gridItem, bg: sx.textField }}
        group      = {S}
        errorField = 'password'
        errors     = {errors}
      /> */}
    </>
  );
};
