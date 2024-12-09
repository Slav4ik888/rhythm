import { green, grey } from '@mui/material/colors';
import { SxSmallContainer } from 'entities/dashboard';



export const useSmallStyles = (): SxSmallContainer => ({
  root: {
    width: '100%',
  },
  header: {
    background: green[100],
  },
  content: {
    background: grey[50],// deepPurple[50],
  },
});
