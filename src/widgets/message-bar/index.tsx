import { FC, memo, forwardRef, useState, useEffect } from 'react';
import { useUI } from 'entities/ui';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import cfg from 'app/config';



const Alert = forwardRef<HTMLDivElement, AlertProps>((
  props,
  ref,
) => <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />);


const useStyles = () => ({
  root: {
    '& .MuiAlert-filledSuccess': {
      color: '#146900',
      backgroundColor: '#a9e09d', // '#75c563',
      '&:hover': {
        // backgroundColor: fade('#75c563', 0.85),
      },
    },
    '& .MuiAlert-filledWarning': {
      color: '#863800',
      backgroundColor: '#ffc592', // '#bb7000',
      '&:hover': {
        // backgroundColor: fade('#f5776e', 0.85),
      },
    },
    '& .MuiAlert-filledError': {
      color: '#8e0000',
      backgroundColor: '#eca0a0',
      '&:hover': {
        // backgroundColor: fade('#f5776e', 0.85),
      },
    },
  },
  snack: {
    '& .MuiAlert-icon': { mr: { xs: 3, sm: 4 } },
    fontSize: { xs: '0.9rem', sm: '1rem' },
    alignItems: 'center',
    lineHeight: { xs: 1.5, sm: 1.7 },
    pt: { xs: 1, sm: 2 },
    pr: { xs: 3, sm: 4 },
    pb: { xs: 1, sm: 2 },
    pl: { xs: 3, sm: 4 },
    // backgroundColor: theme.palette.secondary.light,
    width: { xs: '100%', sm: '600px' },
    zIndex: 2000,
  }
});


export const MessageBar: FC = memo(() => {
  const
    sx = useStyles(),
    { message, clearMessage } = useUI(),
    [isSnack, setIsSnack] = useState(false);

  useEffect(() => {
    message?.message && setIsSnack(true);
  }, [message?.message]);

  const handleCloseMessageBar = () => {
    clearMessage();
    setIsSnack(false);
  };


  if (! message?.message) return null;


  return (
    <MuiSnackbar
      open             = {isSnack}
      anchorOrigin     = {{ vertical: 'bottom', horizontal: 'center' }}
      autoHideDuration = {message.timeout || cfg.DEFAULT_MESSAGE_TIMEOUT}
      onClose          = {handleCloseMessageBar}
      sx               = {sx.root}
    >
      <Alert
        // variant="outlined"
        severity = {message.type}
        onClose  = {handleCloseMessageBar}
        sx       = {sx.snack}
      >
        {message.message}
      </Alert>
    </MuiSnackbar>
  );
});
