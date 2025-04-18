import { green, grey } from '@mui/material/colors';
import { pxToRem } from 'shared/styles';
import { SxSmallContainer } from 'entities/dashboard-data';



export const useSmallStyles = (): SxSmallContainer => {
  const baseRootHeight   = 124; // px
  const baseHeaderHeight = 24; // px

  return {
    root: {
      width: '100%',
      height: pxToRem(baseRootHeight),
    },
    header: {
      background: green[100],
      height: pxToRem(baseHeaderHeight),
    },
    content: {
      background: grey[50],// deepPurple[50],
      height: pxToRem(baseRootHeight - baseHeaderHeight),
    },
  }
};
