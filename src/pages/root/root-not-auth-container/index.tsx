import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import { CircularProgress } from 'shared/ui/circular-progress';
import { f_c_c } from 'app/styles-old';
import s from './styles.module.scss';
import { CustomTheme, useTheme } from 'app/providers/theme-old';



const useStyles = (theme: CustomTheme) => ({
  fill: {
    textAlign       : 'center',
    // backgroundColor : '#000',
    opacity         : 0.8,
    width           : '100%',
    height          : '100%'
  },
  container: {
    ...f_c_c,
    flexDirection : 'column',
    maxWidth      : '1400px',
    height        : '60vh'
  },
  headerTitle: {
    fontSize      : '1rem',
    textTransform : 'uppercase',
    color         : '#a7a7a7',
    zIndex        : 200,
    p             : 3
  },
  mainTitle: {
    fontSize   : { xs: '1.5rem', sm: '3rem', md: '4rem' },
    fontWeight : 600,
    fontFamily : 'Roboto, Arial',
    lineHeight : 1.2,
    color      : theme.palette.primary.main,
    textShadow : '5px 5px 10px black',
    zIndex     : 200
  }
});


/** Главная страница неавторизованного пользователя */
const RootNotAuthContainer: FC = memo(() => {
  const
    sx = useStyles(useTheme() as unknown as CustomTheme);
    // { loading } = useUser();

  // if (loading) return <CircularProgress loading={loading} center size={50} />;


  return (
    <Box className={s.root}>
      <Box className={s.wrapper}>
        <Box sx={sx.fill}>
          <Box sx={sx.container}>
            {/* <Typography sx={sx.headerTitle}>
              
            </Typography> */}
            <Typography sx={sx.mainTitle}>
              Company Rules
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

export default RootNotAuthContainer;
