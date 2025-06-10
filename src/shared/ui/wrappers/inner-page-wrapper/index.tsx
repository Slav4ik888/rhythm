import { FC, memo, ReactNode } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { InnerPageHeader } from '../../pages';
import { Breakpoint } from '@mui/material/styles';



const useStyles = (theme: CustomTheme) => ({
  root: {
    display         : 'flex',
    alignItems      : 'center',
    flexDirection   : 'column',
    width           : '100%',
    mb              : 'auto',
  },
  container: {
    mb              : 4,
    px              : { xs: 0 },
  },
  paper: {
    position        : 'relative',
    display         : 'flex',
    alignItems      : 'center',
    flexDirection   : 'column',
    backgroundColor : theme.palette.background.paper,
    width           : '100%',
    p               : 4,
  }
});


interface Props {
  containerType? : Breakpoint
  children       : ReactNode
}

/**
 * Обёртка для внутренних страниц - SignupPage | LoginPage | UserProfilePage | CompanyProfilePage...
 */
export const InnerPageWrapper: FC<Props> = memo(({ containerType = 'xs', children }) => {
  const sx = useStyles(useTheme());

  return (
    <Box sx={sx.root}>
      <InnerPageHeader />
      <Container
        maxWidth = {containerType}
        sx       = {sx.container}
      >
        <Paper sx={sx.paper}>
          {
            children
          }
        </Paper>
      </Container>
    </Box>
  );
});
