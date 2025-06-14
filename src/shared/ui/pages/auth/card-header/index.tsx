import { FC, memo } from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



export type AuthType = 'login' | 'signup';


interface Props {
  type: AuthType
}

export const AuthCardHeader: FC<Props> = memo(({ type }) => (
  <>
    {
      type === 'login' && <Avatar sx={{
        // color: theme.palette.secondary.main,
        // backgroundColor:  theme.palette.background.paper,
        // boxShadow: '0px 0px 2px #7c7c7c',
        m: 1
      }}>
        <LockOutlinedIcon />
      </Avatar>
    }
    <Typography component='h1' variant='h5' sx={{ m: '10px auto 20px auto' }}>
      {type === 'login' ? 'Войти' : 'Регистрация'}
    </Typography>
  </>
));
