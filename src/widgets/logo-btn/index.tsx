import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { f_c } from 'app/styles';
import { RoutePath } from 'app/providers/routes';


export enum LogoBtnType {
  HEADER    = 'header',
  FOOTER    = 'footer',
  AUTH      = 'auth'
};


const useStyles = (type: LogoBtnType) => {
  const auth = type === LogoBtnType.AUTH;

  return {
    root: {
      ...f_c,
      fontWeight     : 600,
      fontSize       : '1rem',
      borderStyle    : 'none',
      textDecoration : 'none',
      // width: '130px',
      height         : auth ? '37px' : '50px',
      width          : '150px',
      maxWidth       : '100%',
      color          : '#272727',
      background     : 'inherit',
      border         : 0,
      boxShadow      : 'none',
      m              : 0,
      p              : 0,
      pt             : auth ? 1.5 : 0
    }
  }
};
  

type Props = {
  type: LogoBtnType
}


// Кнопка логотипа
export const LogoBtn: React.FC<Props> = ({ type }) => {
  const { root } = useStyles(type);


  return (
    <Link to={RoutePath.ROOT}>
      <Box sx={root}>
        {/* <img src="./img/logo_rec.png" alt="Логотип" style={{ height: `100%` }} /> */}
        Company Rules
      </Box>
    </Link>
  );
};
