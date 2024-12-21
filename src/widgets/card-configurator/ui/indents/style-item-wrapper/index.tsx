import { FC, memo, ReactNode } from 'react';
import { Box } from '@mui/material';
import { f } from 'app/styles';



interface Props {
  children: ReactNode
}

/** Wrapper вокруг элемента padding | margin */
export const StyleItemWrapper: FC<Props> = memo(({ children }) => (
  <Box
    sx={{
      ...f('c-c-fs'),
      width: '70px',
    }}
  >
    {
      children
    }
  </Box>
));
