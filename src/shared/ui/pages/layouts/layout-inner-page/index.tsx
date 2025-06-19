import { FC, memo, ReactNode } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { PageHeaderPanel } from './page-header-panel';
import { Breakpoint } from '@mui/material/styles';
import { f } from 'shared/styles';
import { PageHeaderTitle } from './page-header-title';



export type LayoutInnerPageType = 'signup' | 'login' | 'user-profile' | 'company-profile'


interface Props {
  type           : LayoutInnerPageType
  containerType? : Breakpoint
  children       : ReactNode
}

/**
 * Layout для внутренних страниц - SignupPage | LoginPage | UserProfilePage | CompanyProfilePage...
 */
export const LayoutInnerPage: FC<Props> = memo(({ type, containerType = 'md', children }) => (
  <Box sx={{ ...f('c-c'), width: '100%', mb: 'auto' }}>
    <PageHeaderPanel />
    <PageHeaderTitle type={type} />
    <Container
      maxWidth = {containerType}
      sx={{
        mb: 4,
        py: { md: 4, xs: 0 },
      }}
    >
      <Paper
        sx={{
          ...f('c-c'),
          position        : 'relative',
          backgroundColor : 'background.paper', // theme.palette.background.paper,
          width           : '100%',
          py              : { md: 8, xs: 0 },
        }}
      >
        {
          children
        }
      </Paper>
    </Container>
  </Box>
));
