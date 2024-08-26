import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/routes';
import { Button, Box } from '@mui/material';
import { f_c_c } from 'app/styles';




const useStyles = () => ({
  root: {
    display         : 'flex',
    flexDirection   : 'column',
    margin          : '0 auto',
    height          : '100%'
  },
  text: {
    ...f_c_c,
    height    : '50vh',
    fontSize  : '1.8rem',
    fontStyle : 'italic'
  },
  btn: {
    my: 2
  }
});


export const NotFoundPage: FC = memo(() => {
  const
    sx          = useStyles(),
    nav         = useNavigate(),
    handleClick = () => nav(RoutePath.ROOT);

  return (
    <Box sx={sx.root}>
      <Box sx={sx.text}>
        Извините, запрошенная страница не найдена...
      </Box>
      <Button sx={sx.btn} variant="contained" onClick={handleClick}>
        Перейти на главную
      </Button>
    </Box>
  );
});
