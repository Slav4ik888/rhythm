import * as React from 'react';
import { UseGroup, useValue } from 'shared/lib/hooks';
import { ConfirmType, DialogConfirm } from '../../dialogs';
import { MDButton } from '../../mui-design-components';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from '../../tooltip';
import { SxCard } from '../../../styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { getIconStyle } from '../../configurators-components';
import { CustomTheme } from 'app/providers/theme';
import IconButton from '@mui/material/IconButton';



type Props = {
  sx?        : SxCard
  toolTitle? : string
  icon?      : boolean
  disabled?  : boolean | undefined
  hookOpen?  : UseGroup<unknown>
  onDel?     : () => void
  onClose?   : () => void
}


/** v.2025-05-01 */
export const DeleteButton: React.FC<Props> = ({
  sx, disabled, toolTitle = '', icon, hookOpen, onClose, onDel
}) => {
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
        {
          icon
            ? (
              <IconButton
                sx      = {{ cursor: 'pointer' }}
                color   = 'inherit'
                onClick = {() => confirm.setOpen()}
              >
                <DeleteOutlineIcon
                  sx={(theme) => ({
                    ...getIconStyle(theme as CustomTheme, disabled ? 'empty' : 'default'),
                    ...sx?.icon
                  })}
                />
              </IconButton>
            )
            : (
              <MDButton
                color     = 'primary'
                children  = 'Удалить'
                variant   = 'outlined'
                disabled  = {disabled}
                startIcon = {<DeleteIcon />}
                sx        = {{ root: { color: 'red', ...sx?.root } }}
                onClick   = {confirm.setOpen}
              />
            )
        }
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
