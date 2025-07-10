import { forwardRef, MutableRefObject } from 'react';
import DialogActions from '@mui/material/DialogActions';
import { ErrorBox } from 'shared/ui/containers';
import { UseValue } from 'shared/lib/hooks';
import { SetSheetSubmitBtn as SubmitBtn } from './submit-btn';
import { f } from 'shared/styles';
import { useCompany } from 'entities/company';
import { DefaultIconId } from 'shared/assets';



interface Props {
  editId         : string  // sheetId if edit
  ref            : MutableRefObject<null>
  selectedIconId : DefaultIconId | null
  hookOpen       : UseValue<any>
}

// Define props without 'ref' for forwardRef compatibility
type RefProps = Omit<Props, 'ref'>;

export const SetSheetActions = forwardRef<null, RefProps>(({ editId, hookOpen: O, selectedIconId }, ref) => {
  const { errors } = useCompany();

  return (
    <DialogActions sx={{ ...f('c'), p  : 0, mt : 2 }}>
      <ErrorBox
        field  = 'general'
        errors = {errors}
        sx     = {{
          root: {
            mt: 1
          }
        }}
      />
      <SubmitBtn
        editId         = {editId}
        ref            = {ref}
        hookOpen       = {O}
        selectedIconId = {selectedIconId}
      />
    </DialogActions>
  )
});
