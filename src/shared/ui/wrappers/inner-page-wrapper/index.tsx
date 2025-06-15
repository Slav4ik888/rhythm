import { FC, memo, ReactNode } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { InnerPageHeader } from '../../pages';
import { Breakpoint } from '@mui/material/styles';
import { f } from 'shared/styles';



interface Props {
  containerType? : Breakpoint
  children       : ReactNode
}

/**
 * Обёртка для внутренних страниц - SignupPage | LoginPage | UserProfilePage | CompanyProfilePage...
 */
export const InnerPageWrapper: FC<Props> = memo(({ containerType = 'xs', children }) => (
  <Box sx={{ ...f('c-c'), width: '100%', mb: 'auto' }}>
    <InnerPageHeader />
    <Container
      maxWidth = {containerType}
      sx       = {{ mb: 4, px: { xs: 0 } }}
    >
      <Paper
        sx={{
          ...f('c-c'),
          position        : 'relative',
          backgroundColor : 'background.paper', // theme.palette.background.paper,
          width           : '100%',
          p               : 4,
        }}
      >
        {
          children
        }
      </Paper>
    </Container>
  </Box>
));
