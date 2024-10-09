import { SxCard } from 'app/styles-old';
import { CustomTheme } from 'app/providers/theme-old';
import { ButtonType, Variant } from './types';



export const useStyles = (
  theme    : CustomTheme,
  sx       : SxCard = {},
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
        ? theme.palette.primary.gradinet : theme.palette.secondary.gradinet
      : 'inherit'


  return {
    root: {
      color,
      background,
      ...sx?.root
    }
  }
};
