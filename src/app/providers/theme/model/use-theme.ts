import { useTheme as muiUseTheme } from '@mui/material/styles';
import { CustomMUITheme } from './types';

export const useTheme = () => muiUseTheme() as CustomMUITheme
