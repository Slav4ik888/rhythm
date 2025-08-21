import { FC, memo } from 'react';
import { f, pxToRem } from 'shared/styles';
import Box from '@mui/material/Box';



export const FooterTopRightColumn: FC = memo(() => (
  <Box
    sx={{
      ...f('c'),
      minWidth: pxToRem(210),
      gap: 1
    }}
  />
));
