import { CustomTheme } from 'app/providers/theme';
import { ButtonType, Variant } from './types';



export const useStyles = (
  theme    : CustomTheme,
  sx       : any,
  type     : ButtonType,
  variant  : Variant,
  disabled : boolean | undefined
) => {
  const
    isPrimary   = type === ButtonType.PRIMARY,
    isContained = variant === 'contained';

  const color = isContained
    ? isPrimary
      ? theme.palette.primary.contrastText : theme.palette.secondary.contrastText
    : isPrimary
      ? theme.palette.primary.main : theme.palette.secondary.main;

  const background = disabled
    ? 'inherit'
    : isContained
      ? isPrimary
        ? theme.palette.primary.main : theme.palette.secondary.light
      : 'inherit'


  return {
    root: {
      color,
      background,
      ...sx?.root
    }
  }
};
