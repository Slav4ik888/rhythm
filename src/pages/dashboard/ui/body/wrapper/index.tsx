import { FC, memo } from 'react';
import { Box } from '@mui/material';



interface Props {
  children: React.ReactNode
}


export const DashboardBodyWrapper: FC<Props> = memo(({ children }) => (
  <Box
    sx={{
      position  : 'relative',
      width     : 'max-content',
      minWidth  : '100%',
      minHeight : 'calc(100vh - 300px)',
      height    : '100%',
    }}
  >
    {children}
  </Box>
));
