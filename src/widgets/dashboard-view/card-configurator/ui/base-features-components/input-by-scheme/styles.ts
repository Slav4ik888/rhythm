import { CustomTheme } from 'app/providers/theme';
import { f, pxToRem } from 'shared/styles';
import { SxTextfield } from 'shared/ui/containers';



export type SxInputByScheme = SxTextfield & {
  wrapper?: any
}

export const useStyles = (theme: CustomTheme, sx?: SxInputByScheme, width?: string) => ({
  wrapper: {
    position: 'relative',
    ...f('-fs-fs'),
    ...sx?.wrapper,
  },
  textfield: {
    root: {
      ...sx?.root,
    },
    field: {
      width: width || '80px',
      ...sx?.field,
    },
    input: {
      textAlign : 'center',
      padding   : '2px 4px',
      ...sx?.input,
    }
  },
  clearBtn: {
    position : 'absolute',
    top      : pxToRem(-2),
    right    : pxToRem(-16),
    cursor   : 'pointer',
    fontSize : '0.9rem',
    color    : theme.palette.dark.light,
    zIndex   : 1000,
  },
});
