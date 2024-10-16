import { useTheme as useMuiTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Dialog, DialogContent } from '@mui/material';
import { DialogTitle } from '../../dialog-title';
import { UseBase } from 'shared/lib/hooks';
import { ReactNode } from 'react';
import { CustomTheme, useTheme } from 'app/providers/theme';



const useStyles = (theme: CustomTheme, sx?: any) => ({
  root: {
    '& .MuiDialog-paper': {
      width : { xs: '100%' },
      m     : { xs: 0 }
    },
    ...sx?.root
  },
  content: {
    '&.MuiDialogContent-root': {
      background: theme.palette.background.paper,
      p: 4,
      ...sx?.content
    }
  }
});


interface Props {
  hookOpen   : UseBase
  maxWidth?  : 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  fullWidth? : boolean
  title?     : string
  question?  : string
  sx?        : any
  children   : ReactNode
  onClose?   : () => void
}


/**
 * v.2023-09-19
 * Всплывающее окно с каким-то children
 */
export const DialogInfo: React.FC<Props> = ({
  title,
  children,
  question,
  hookOpen  : O,
  sx        : styles,
  maxWidth  = 'md',
  fullWidth = true,
  onClose
}) => {
  const
    sx    = useStyles(useTheme() as unknown as CustomTheme, styles),
    theme = useMuiTheme(),
    greaterSmScreen = useMediaQuery(theme.breakpoints.up('sm'));
  
  const handlerClose = () => {
    if (onClose) return onClose()
    O.setClose();
  };

  if (! O.open || ! children) return null;


  return (
    <Dialog
      open      = {O.open}
      onClose   = {handlerClose}
      sx        = {sx.root}
      maxWidth  = {maxWidth}
      fullWidth = {greaterSmScreen && fullWidth}
    >
      {
        title && <DialogTitle
          children = {title}
          question = {question}
          onClose  = {handlerClose}
        />
      }
      <DialogContent sx={sx.content}>
        {
          children
        }
      </DialogContent>
    </Dialog>
  );
};
