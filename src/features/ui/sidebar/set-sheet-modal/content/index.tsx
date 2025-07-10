import { forwardRef, MutableRefObject } from 'react';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useCompany } from 'entities/company';
import { f } from 'shared/styles';
import Box from '@mui/material/Box';
import { DefaultIconId } from 'shared/assets';
import { SelectIconContainer } from '../select-icon-container';



const textStyle = {
  fontSize: {
    xs: '1rem'
  },
  mb: {
    xs: 1,
    sm: 2
  }
};


interface Props {
  ref            : MutableRefObject<unknown>
  selectedIconId : DefaultIconId | null
  onSelectIcon   : (iconId: DefaultIconId) => void
}

// Define props without 'ref' for forwardRef compatibility
type RefProps = Omit<Props, 'ref'>;

export const SetSheetContent = forwardRef<null, RefProps>(({ selectedIconId, onSelectIcon }, ref) => {
  const { errors } = useCompany();

  return (
    <DialogContent sx={{ '&.MuiDialogContent-root': { p: 0 } }}>
      <Typography sx={textStyle}>
        Укажите название листа и выберите подходящую иконку
      </Typography>

      <Box sx={{ ...f(), gap: 2 }}>
        <SelectIconContainer
          selectedIconId = {selectedIconId}
          onSelectIcon   = {onSelectIcon}
        />
        <TextField
          fullWidth
          name       = 'sheetTitle'
          type       = 'sheetTitle'
          label      = 'Введите sheetTitle'
          inputRef   = {ref}
          helperText = {errors?.sheetTitle}
          error      = {errors?.sheetTitle ? true : false}
          sx         = {textStyle}
        />
      </Box>
    </DialogContent>
  )
});
