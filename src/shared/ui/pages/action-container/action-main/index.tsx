import { FC, memo } from 'react';
import { ActionMainComponent } from './component';
import { LayoutInnerPageType } from '../../layouts/layout-inner-page';
import { Errors } from 'shared/lib/validators';



interface Props {
  loading   : boolean
  errors    : Errors
  type      : LayoutInnerPageType
  disabled? : boolean
  onSubmit  : () => void
}

/** Кнопка "Зарегистрироваться" | "Войти" */
export const ActionMain: FC<Props> = memo(({ type, loading, errors, disabled = false, onSubmit }) => {
  const textBtn = type === 'login' ? 'Войти' : 'Регистрация';

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
