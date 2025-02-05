import { FC, memo } from 'react';
import { Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, ButtonType } from 'shared/ui/buttons';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/routes';



const useStyles = () => ({
  root: {
    // position   : 'absolute',
    // top        : 0,
    // left       : 0,
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


export const InnerPageHeader: FC<Props> = memo(({}) => {
  const
    sx = useStyles(),
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
