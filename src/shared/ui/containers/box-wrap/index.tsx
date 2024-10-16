import { FC, memo, ReactNode } from 'react';
import Box from '@mui/material/Box';


type Props = {
  children? : ReactNode
  sx?       : any
}

/** v.2023-06-12 */
export const BoxWrap: FC<Props> = memo(({ sx, children }) => (
  <Box sx={sx?.root}>
    {
      children
    }
  </Box>
));
