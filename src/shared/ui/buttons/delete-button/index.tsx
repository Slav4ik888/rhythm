import * as React from 'react';
import { UseGroup, useValue } from 'shared/lib/hooks';
import { ConfirmType, DialogConfirm } from 'shared/ui/dialogs';
import { Button, ButtonType } from '../button';



type Props = {
  disabled : boolean | undefined
  hookOpen : UseGroup<unknown>
  onDel?   : () => void
  onClose? : () => void
}


export const DeleteButton: React.FC<Props> = ({ disabled, hookOpen, onClose, onDel }) => {
  const
    confirm = useValue();
  

  const handlerDel = () => {
    confirm.setClose();
    hookOpen.setClose();
    if (onClose) onClose();
    if (onDel) onDel();
  };

  const handlerCancel = () => {
    confirm.setClose();
  };


  if (! onDel) return null
  

  return (
    <>
      <Button
        text     = {'Удалить'}
        type     = {ButtonType.PRIMARY}
        variant  = "outlined"
        disabled = {disabled}
        onClick  = {confirm.setOpen}
        sx       = {{ root: { color: 'red' } }}
      />

      <DialogConfirm
        open     = {confirm.open}
        typeOk   = {ConfirmType.DEL}
        title    = {'Подтверждение удаления'}
        onCancel = {handlerCancel}
        onOk     = {handlerDel}
      />
    </>
  );
};
