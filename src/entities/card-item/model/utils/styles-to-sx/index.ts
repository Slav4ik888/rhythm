import { isNotUndefined as is, isNum } from 'shared/lib/validators';
import { ItemStyles } from '../../types';



const getDimensions = (dim: any) => isNum(dim) ? `${dim}px` : dim;
const getIndents = (v: any) => v ? v / 8 : v;


/**
 * Base format styles transform to sx
 * 
 * DB => sx
 * 
 * DB => display user
 */
export const stylesToSx = (style?: ItemStyles): ItemStyles => {
  const sx = { ...style };

  if (! style) return sx;

  const {
    width, minWidth, maxWidth, height, minHeight, maxHeight,
    borderWidth, borderRadius,
    p, px, py, pt, pb, pr, pl,
    m, mx, my, mt, mb, mr, ml,
   } = style;

  // width
  if (is(width))    sx.width    = getDimensions(width);
  if (is(minWidth)) sx.minWidth = getDimensions(minWidth);
  if (is(maxWidth)) sx.maxWidth = getDimensions(maxWidth);

  // height 
  if (is(height))    sx.height    = getDimensions(height);
  if (is(minHeight)) sx.minHeight = getDimensions(minHeight);
  if (is(maxHeight)) sx.maxHeight = getDimensions(maxHeight);

  // paddings
  if (is(p))  sx.p  = getIndents(p);
  if (is(py)) sx.py = getIndents(py);
  if (is(px)) sx.px = getIndents(px);
  if (is(pt)) sx.pt = getIndents(pt);
  if (is(pr)) sx.pr = getIndents(pr);
  if (is(pb)) sx.pb = getIndents(pb);
  if (is(pl)) sx.pl = getIndents(pl);

  // margins
  if (is(m))  sx.m  = getIndents(m);
  if (is(my)) sx.my = getIndents(my);
  if (is(mx)) sx.mx = getIndents(mx);
  if (is(mt)) sx.mt = getIndents(mt);
  if (is(mr)) sx.mr = getIndents(mr);
  if (is(mb)) sx.mb = getIndents(mb);
  if (is(ml)) sx.ml = getIndents(ml);

  // borders
  if (is(borderWidth))  sx.borderWidth  = borderWidth  + 'px';
  if (is(borderRadius)) sx.borderRadius = borderRadius + 'px';


  return sx
}
