import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/routes';
import { Button, Box } from '@mui/material';
import { f } from 'shared/styles';
import MDButton from 'shared/ui/mui-design-components/md-button';




const useStyles = () => ({
  root: {
    ...f('c-c'),
    display         : 'flex',
    flexDirection   : 'column',
    alignItems      : 'center',
    margin          : '0 auto',
    height          : '100%'
  },
  text: {
    ...f('-c-c'),
    height    : '50vh',
    fontSize  : '1.8rem',
    fontStyle : 'italic'
  },
  btn: {
    width : '25%'
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
      <MDButton
        variant = "gradient"
        color   = "info"
        type    = "button"
        sx      = {{ root: sx.btn }}
        onClick = {handleClick}
      >
        Перейти на главную
      </MDButton>
    </Box>
  );
});
