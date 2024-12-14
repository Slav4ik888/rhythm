import { isNum, isStr } from 'shared/lib/validators';
import { ItemStyles } from '../../types';


/** Содержит ли строка символы 'px' */
const isPx = (str: any): boolean => isStr(str) && /px/.test(str);

/** Убирает из строки символы 'px' */
const removePx = (str: string): string => str.replace(/px/g, '');


/** Sx transform to base format styles */
export const sxToStyles = (sx?: ItemStyles): ItemStyles => {
  const style = { ...sx };

  if (! sx) return style;

  const { width, minWidth, maxWidth, height, minHeight, maxHeight } = sx;
  
  // width
  if (width)    style.width    = isPx(width)    ? `${width}px`    : width;
  if (minWidth) style.minWidth = isPx(minWidth) ? `${minWidth}px` : minWidth;
  if (maxWidth) style.maxWidth = isPx(maxWidth) ? `${maxWidth}px` : maxWidth;

  // height 
  if (height)    style.height    = isPx(height)    ? `${height}px`    : height;
  if (minHeight) style.minHeight = isPx(minHeight) ? `${minHeight}px` : minHeight;
  if (maxHeight) style.maxHeight = isPx(maxHeight) ? `${maxHeight}px` : maxHeight;




  // if (style.color) sx.color = style.color;
  // if (style.background) sx.background = style.background;
  // if (style.fontSize) sx.fontSize = style.fontSize;


  return sx
}
