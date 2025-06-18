import { forwardRef, MutableRefObject } from 'react';
import { TextFieldItem } from 'shared/ui/mui-components';
import { Errors } from 'shared/lib/validators';



interface Props {
  errors   : Errors | undefined
  ref      : MutableRefObject<HTMLInputElement | null>
  onChange : (e: any) => void
}

// Define props without 'ref' for forwardRef compatibility
type EmailContainerProps = Omit<Props, 'ref'>;

export const EmailContainer = forwardRef<null, EmailContainerProps>(({ errors, onChange }, ref) => (
  <TextFieldItem
    autoFocus
    autoComplete = 'off'
    label        = 'Введите email пользователя'
    name         = 'email'
    type         = 'email'
    ref          = {ref}
    scheme       = 'email'
    errors       = {errors}
    onChange     = {onChange}
  />
));
