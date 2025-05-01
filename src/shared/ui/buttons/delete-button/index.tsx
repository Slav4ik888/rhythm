import * as React from 'react';
import { UseGroup, useValue } from 'shared/lib/hooks';
import { ConfirmType, DialogConfirm } from 'shared/ui/dialogs';
import { MDButton } from 'shared/ui/mui-design-components';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from 'shared/ui/tooltip';
import { SxCard } from 'shared/styles';



type Props = {
  sx?        : SxCard
  toolTitle? : string
  disabled?  : boolean | undefined
  hookOpen?  : UseGroup<unknown>
  onDel?     : () => void
  onClose?   : () => void
}


/** v.2025-05-01 */
export const DeleteButton: React.FC<Props> = ({ sx, disabled, toolTitle = '', hookOpen, onClose, onDel }) => {
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
      <Tooltip title={toolTitle}>
        <MDButton
          color     = 'primary'
          children  = 'Удалить'
          variant   = 'outlined'
          disabled  = {disabled}
          startIcon = {<DeleteIcon />}
          sx        = {{ root: { color: 'red', ...sx?.root } }}
          onClick   = {confirm.setOpen}
        />
      </Tooltip>
      
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
