import { FC, memo, ReactNode } from 'react';
import { Box } from '@mui/material';



interface Props {
  children : ReactNode
}

export const UIConfiguratorItemWrapper: FC<Props> = memo(({ children }) => (
  <Box
    sx={{
      display        : 'flex',
      width          : '100%',
      alignItems     : 'center',
      justifyContent : 'space-between',
      py             : 3,
    }}
  >
    {children}
  </Box>
));
