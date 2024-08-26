import { FC, memo, ReactNode } from 'react';
import Box from '@mui/material/Box';
import { SxCard } from 'app/styles';


type Props = {
  children? : ReactNode
  sx?       : SxCard
}

/** v.2023-06-12 */
export const BoxWrap: FC<Props> = memo(({ sx, children }) => (
  <Box sx={sx?.root}>
    {
      children
    }
  </Box>
));
