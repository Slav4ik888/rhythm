import * as React from 'react';
import { Divider, Box } from '@mui/material';
import { UseGroup } from 'shared/lib/hooks';
import { BoxGrow } from 'shared/ui/containers';
import { CancelSubmitBtn } from '../cancel-submit-btn';
import { useStyles } from './use-styles';
import { DeleteButton } from '../delete-button';




type Props = {
  loading         : boolean // disable button if loading
  disabledDelete? : boolean
  // 1 - Если нужно закрыть верхнего уровня объект после удаления
  // 2 - Если нужно чтобы кнопки (cancel | submit) были доступны только при изменении в объекте верхнего уровня
  hookOpen?       : UseGroup<unknown>
  submitText?     : string
  onDel?          : () => void
  onCancel?        : () => void
  onSubmit        : () => void
}


/**
 * v.2024-11-10
 * Actions: Delete? Cancel? Submit
 */
export const Actions: React.FC<Props> = ({ loading, disabledDelete, hookOpen, submitText, onCancel, onDel, onSubmit }) => {
  const sx = useStyles();

  
  return (
    <Box sx={sx.root}>
      <Divider sx={sx.divider} />
      <Box sx={sx.content}>

        <DeleteButton
          hookOpen = {hookOpen}
          disabled = {disabledDelete}
          onDel    = {onDel}
        />
           
        <BoxGrow />
        
        <CancelSubmitBtn
          loading    = {loading}
          disabled   = {hookOpen && ! hookOpen?.isChanges} // only if hookOpen presented
          submitText = {submitText}
          onCancel   = {onCancel}
          onSubmit   = {onSubmit}
        />
      </Box>
    </Box>
  );
};
