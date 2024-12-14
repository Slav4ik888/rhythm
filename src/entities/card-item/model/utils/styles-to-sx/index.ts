import { isNum } from 'shared/lib/validators';
import { ItemStyles } from '../../types';


/** Base format styles transform to sx */
export const stylesToSx = (style?: ItemStyles): ItemStyles => {
  const sx = { ...style };

  if (! style) return sx;

  const { width, minWidth, maxWidth, height, minHeight, maxHeight } = style;

  // width
  if (width)    sx.width    = isNum(width)    ? `${width}px`    : width;
  if (minWidth) sx.minWidth = isNum(minWidth) ? `${minWidth}px` : minWidth;
  if (maxWidth) sx.maxWidth = isNum(maxWidth) ? `${maxWidth}px` : maxWidth;

  // height 
  if (height)    sx.height    = isNum(height)    ? `${height}px`    : height;
  if (minHeight) sx.minHeight = isNum(minHeight) ? `${minHeight}px` : minHeight;
  if (maxHeight) sx.maxHeight = isNum(maxHeight) ? `${maxHeight}px` : maxHeight;




  // if (style.color) sx.color = style.color;
  // if (style.background) sx.background = style.background;
  // if (style.fontSize) sx.fontSize = style.fontSize;


  return sx
}
