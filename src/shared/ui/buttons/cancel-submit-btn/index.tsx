import { pxToRem } from 'app/providers/theme';
import { FC, memo } from 'react';
import { MDButton } from 'shared/ui/mui-design-components';



interface Props {
  submitText? : string
  disabled?   : boolean
  loading?    : boolean // disable button if loading
  onCancel?   : () => void
  onSubmit    : () => void
}


/**
 * v.2024.11.12
 */
export const CancelSubmitBtn: FC<Props> = memo(({ submitText, disabled, loading, onCancel, onSubmit }) => {

  return (
    <>
      {
        onCancel && <MDButton
          variant  = 'outlined'
          color    = 'secondary'
          disabled = {disabled || loading}
          children = 'Отмена'
          sx       = {{ root: { marginRight: pxToRem(16) } }}
          onClick  = {onCancel}
        />
      }
      
      <MDButton
        disabled = {disabled || loading}
        color    = 'primary'
        children = {`${submitText ? submitText : 'Сохранить'}`}
        onClick  = {onSubmit}
      />
    </>
  )
});
