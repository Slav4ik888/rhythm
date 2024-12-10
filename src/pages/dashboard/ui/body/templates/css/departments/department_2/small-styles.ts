import { deepPurple, grey } from '@mui/material/colors';
import { pxToRem } from 'app/providers/theme';
import { SxSmallContainer } from 'entities/dashboard';



export const useSmallStyles = (): SxSmallContainer => {
  const baseRootHeight   = 124; // px
  const baseHeaderHeight = 24; // px

  return {
    root: {
      width: '100%',
      height: pxToRem(baseRootHeight),
    },
    header: {
      background: deepPurple[100],
      height: pxToRem(baseHeaderHeight),
    },
    content: {
      background: grey[50],
      height: pxToRem(baseRootHeight - baseHeaderHeight),
    },
  }
};
