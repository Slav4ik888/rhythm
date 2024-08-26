import * as React from 'react';
import { Divider, Box } from '@mui/material';
import { UseGroup } from 'shared/lib/hooks';
import { BoxGrow } from 'shared/ui/containers';
import { CancelSubmitBtn } from '../cancel-submit-btn';
import { useStyles } from './use-styles';
import { DeleteButton } from '../delete-button';




type Props = {
  loading         : boolean
  disabledDelete? : boolean
  hookOpen        : UseGroup<unknown>
  submitText?     : string
  onDel?          : () => void
  onClose?        : () => void
  onSubmit        : () => void
}


/** Actions: Delete? Cancel? Submit */
export const Actions: React.FC<Props> = ({ loading, disabledDelete, hookOpen, submitText, onClose, onDel, onSubmit }) => {
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
          disabled   = {! hookOpen.isChanges}
          submitText = {submitText}
          onCancel   = {onClose}
          onSubmit   = {onSubmit}
        />
      </Box>
    </Box>
  );
};
