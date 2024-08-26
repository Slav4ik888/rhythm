import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, ButtonType } from 'shared/ui/buttons';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/routes';



const useStyles = (theme: CustomTheme) => ({
  root: {
    display    : 'flex',
    alignItems : 'center',
    width      : '100%',
    mt         : 2,
    p          : 1
  },
  btn: {
    textTransform: 'none'
  }
});


interface Props {}


export const PageHeader: FC<Props> = memo(({}) => {
  const
    sx = useStyles(useTheme()),
    navigate = useNavigate();
  

  const handlerClick = () => navigate(RoutePath.ROOT);


  return (
    <Box sx={sx.root}>
      <Button
        text      = {'На главную'}
        variant   = 'text'
        type      = {ButtonType.SECONDARY}
        startIcon = {<ArrowBackIcon />}
        sx        = {{ root: sx.btn }}
        onClick   = {handlerClick}
      />
    </Box>
  );
});
