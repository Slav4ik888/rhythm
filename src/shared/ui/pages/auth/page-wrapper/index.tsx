import { FC, memo, ReactNode } from 'react';
import { Box, Container, Paper } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { PageHeader } from '../../page-header';



const useStyles = (theme: CustomTheme) => ({
  root: {
    display         : 'flex',
    alignItems      : 'center',
    flexDirection   : 'column',
    width           : '100%'
  },
  container: {
    mb              : 4,
    px              : { xs: 0 }
  },
  paper: {
    position        : 'relative',
    display         : 'flex',
    alignItems      : 'center',
    flexDirection   : 'column',
    backgroundColor : theme.palette.background.paper,
    width           : '100%',
    p               : 4
  }
});


interface Props {
  children: ReactNode
}

export const AuthPageWrapper: FC<Props> = memo(({ children }) => {
  const sx = useStyles(useTheme());

  return (
    <Box sx={sx.root}>
      <PageHeader />
      <Container maxWidth="xs" sx={sx.container}>
        <Paper sx={sx.paper}>
          {
            children
          }
        </Paper>
      </Container>
    </Box>
  );
});
