import { CustomTheme, pxToRem } from 'app/providers/theme';
import { f } from 'app/styles';
import { Props } from '.';



export const useStyles = (theme: CustomTheme, { sx }: Props) => {
  const { header, root, content } = sx;


  return {
    root: {
      ...f('c'),
      // border     : `1px solid ${header.background}`,
      width     : root?.width  || 'max-content',
      height    : root?.height || 'max-content',
      maxHeight : root?.height || 'max-content',
      cursor    : 'default',
      overflow  : 'hidden',
      mb        : 1,
      ...root
    },
    header: {
      ...f('-c-c'),
      py: pxToRem(4),
      pl: pxToRem(8),
      ...header
    },
    title: {
      fontSize   : pxToRem(10),
      fontWeight : 'regular',
      textAlign  : 'center',
      color      : header.color ? header.color : theme.palette.comparisonIndicators_1.main,
    },
    tooltipTitle: {
      width      : '100%',
    },
    content: {
      ...f('-c-c'),
      background : content?.background || 'transparent',
      px         : 2,
      pt         : 1,
      ...content
    }
  }
};
