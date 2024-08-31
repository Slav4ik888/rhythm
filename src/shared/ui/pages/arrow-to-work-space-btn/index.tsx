import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const useStyles = () => ({
  back: {
    cursor: 'pointer'
  }
});


interface Props {
  document: Document
};


export const ArrowToWorkSpaceBtn: FC<Props> = ({ document }) => {
  const
    sx = useStyles(),
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
