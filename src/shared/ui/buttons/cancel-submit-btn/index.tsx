import { FC, memo } from 'react';
import { Button, ButtonType } from '../button';



type Props = {
  submitText? : string;
  disabled?   : boolean;
  loading?    : boolean;
  onCancel?   : () => void;
  onSubmit    : () => void;
};


/** v.2024.08.26 */
export const CancelSubmitBtn: FC<Props> = memo(({ submitText, disabled, loading, onCancel, onSubmit }) => {

  return (
    <>
      {
        onCancel && <Button
          text     = {'Отмена'}
          variant  = 'outlined'
          type     = {ButtonType.PRIMARY}
          disabled = {disabled || loading}
          sx       = {{ root: { mr: 2 } }}
          onClick  = {onCancel}
        />
      }
      
      <Button
        text     = {`${submitText ? submitText : 'Сохранить'}`}
        disabled = {disabled || loading}
        type     = {ButtonType.PRIMARY}
        onClick  = {onSubmit}
      />
    </>
  )
});
