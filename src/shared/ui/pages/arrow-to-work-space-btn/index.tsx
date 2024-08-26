import { FC } from 'react';
import { RoutePath } from 'app/providers/routes';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const useStyles = (theme: CustomTheme) => ({
  back: {
    cursor: 'pointer'
  }
});


interface Props {
  document: Document
};


export const ArrowToWorkSpaceBtn: FC<Props> = ({ document }) => {
  const
    sx = useStyles(useTheme()),
    navigate = useNavigate();
  

  const handlerBack = () => {

    // Navigate
    // navigate(`/${RoutePath.WORK_SPACE}`);
  };


  return (
    <ArrowBackIcon
      sx      = {sx.back}
      onClick = {handlerBack}
    />
  )
};
