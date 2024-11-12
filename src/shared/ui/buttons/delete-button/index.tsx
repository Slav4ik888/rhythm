import * as React from 'react';
import { UseGroup, useValue } from 'shared/lib/hooks';
import { ConfirmType, DialogConfirm } from 'shared/ui/dialogs';
import { MDButton } from 'shared/ui/mui-design-components';



type Props = {
  disabled  : boolean | undefined
  hookOpen? : UseGroup<unknown>
  onDel?    : () => void
  onClose?  : () => void
}


/** v.2024-11-12 */
export const DeleteButton: React.FC<Props> = ({ disabled, hookOpen, onClose, onDel }) => {
  const confirm = useValue();
  

  const handlerDel = () => {
    confirm.setClose();
    hookOpen && hookOpen.setClose();
    onClose && onClose();
    onDel && onDel();
  };

  const handlerCancel = () => {
    confirm.setClose();
  };


  if (! onDel) return null
  

  return (
    <>
      <MDButton
        color    = 'primary'
        children = 'Удалить'
        variant  = "outlined"
        disabled = {disabled}
        onClick  = {confirm.setOpen}
        sx       = {{ root: { color: 'red' } }}
      />

      <DialogConfirm
        open     = {confirm.open}
        typeOk   = {ConfirmType.DEL}
        title    = 'Подтверждение удаления'
        onCancel = {handlerCancel}
        onOk     = {handlerDel}
      />
    </>
  );
};
