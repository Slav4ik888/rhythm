import { FC, memo, ReactNode } from 'react';
import { Grid } from '@mui/material';



const useStyles = () => ({
  root: {
    display        : 'flex',
    flexDirection  : 'column',
    alignItems     : 'center',
    justifyContent : 'center',
    flexWrap       : 'nowrap',
    textAlign      : 'center',
    width          : '100%',
    mt             : 1,
    ml             : 0
  }
});


interface Props {
  children: ReactNode
}

export const AuthContentWrapper: FC<Props> = memo(({ children }) => {
  const sx = useStyles();

  return (
    <Grid container spacing={2} sx={sx.root}>
      {
      children
      }
    </Grid>
  );
});
