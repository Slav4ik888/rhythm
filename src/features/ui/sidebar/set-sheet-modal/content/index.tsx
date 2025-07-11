import { forwardRef, MouseEvent } from 'react';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useCompany } from 'entities/company';
import { f } from 'shared/styles';
import Box from '@mui/material/Box';
import { DefaultIconId } from 'shared/assets';
import { SelectIconContainer } from '../select-icon-container';
import { Input } from 'shared/ui/containers';



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
  // ref            : MutableRefObject<unknown>
  sheetTitle     : string
  selectedIconId : DefaultIconId | null
  onSelectIcon   : (iconId: DefaultIconId) => void
  onChangeTitle  : (e: MouseEvent, v: string | number) => void

}

// Define props without 'ref' for forwardRef compatibility
type RefProps = Omit<Props, 'ref'>;

export const SetSheetContent = forwardRef<null, RefProps>(({
  sheetTitle, selectedIconId, onSelectIcon, onChangeTitle
}, ref) => {
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
        <Input
          defaultValue = {sheetTitle}
          errorField   = 'sheetTitle'
          errors       = {errors}
          onChange     = {onChangeTitle}
        />
        {/* <TextField
          fullWidth
          name       = 'sheetTitle'
          type       = 'sheetTitle'
          label      = 'Введите sheetTitle'
          inputRef   = {ref}
          helperText = {errors?.sheetTitle}
          error      = {errors?.sheetTitle ? true : false}
          sx         = {textStyle}
        /> */}
      </Box>
    </DialogContent>
  )
});
