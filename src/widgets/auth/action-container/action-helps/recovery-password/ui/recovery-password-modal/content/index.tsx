import { FC, memo, MutableRefObject } from 'react';
import { useLogin } from 'pages/login';
import { TextField, Typography, DialogContent } from '@mui/material';



const useStyles = () => ({
  root: {
    '&.MuiDialogContent-root': {
      p: 0
    }
  },
  text: {
    fontSize : {
      xs: '1rem'
    },
    my: {
      xs: 1,
      sm: 2
    }
  }
});


interface Props {
  emailRef: MutableRefObject<unknown>
}


export const RecoveryPasswordContent: FC<Props> = memo(({ emailRef }) => {
  const
    sx = useStyles(),
    { errors } = useLogin();


  return (
    <DialogContent sx={sx.root}>
      <Typography sx={sx.text}>
        {'Введите ваш email, мы отправим на него ссылку для восстановления пароля.'}
      </Typography>

      <TextField
        fullWidth
        name       = 'email'
        type       = 'email'
        label      = {'Введите email'}
        inputRef   = {emailRef}
        helperText = {errors?.email}
        error      = {errors?.email ? true : false}
        sx         = {sx.text}
      />
    </DialogContent>
  )
});
