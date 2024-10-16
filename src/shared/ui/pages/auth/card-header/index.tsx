import { FC, memo } from 'react';
import { Typography, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { AuthType } from 'entities/auth';



const useStyles = (theme: CustomTheme) => ({
  lock: {
    color: theme.palette.secondary.main,
    backgroundColor:  theme.palette.background.paper,
    boxShadow: '0px 0px 2px #7c7c7c',
    m: 1
  },
  pageTitle: {
    m: '10px auto 20px auto'
  }
});


interface Props {
  type: AuthType
}

export const AuthCardHeader: FC<Props> = memo(({ type }) => {
  const
    sx = useStyles(useTheme()),
    title = type === AuthType.SIGNUP ? 'Регистрация' : 'Войти';


  return (
    <>
      <Avatar sx={sx.lock}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="h1" variant="h5" sx={sx.pageTitle}>
        {title}
      </Typography>
    </>
  );
});
