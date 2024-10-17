import { FC, memo, MutableRefObject } from 'react';
import { useLogin } from 'pages/login';
import { DialogActions } from '@mui/material';
import { ErrorBox } from 'shared/ui/containers';
import { UseValue } from 'shared/lib/hooks';
import { RecoveryPasswordSendButton as SendButton } from './send-button';



const useStyles = () => ({
  root: {
    flexDirection: 'column',
    p  : 0,
    mt : 2
  },
  error: {
    root: {
      mt: 1
    }
  }
});


interface Props {
  emailRef: MutableRefObject<null>
  hookOpen: UseValue<any>
}


export const RecoveryPasswordActions: FC<Props> = memo(({ hookOpen: O, emailRef }) => {
  const
    { root, error } = useStyles(),
    { errors } = useLogin();


  return (
    <DialogActions sx={root}>
      <ErrorBox field='general' errors={errors} sx={error} />
      <SendButton hookOpen={O} emailRef={emailRef} />
    </DialogActions>
  )
});
