import { RgbaString } from 'entities/dashboard-view';
import { RgbaColor } from 'react-colorful';



/**
 * background: 'rgba(255, 255, 255, 1)';
 *  => { r: 255, g: 255, b: 255, a: 1 }
 */
export function rgbaStringToRgba(color: RgbaString): RgbaColor | undefined {  
  let result: RgbaColor = {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  };

  if (! color || ! color.startsWith('rgba')) return result

  const res = color.replace('rgba(', '').replace(')', '').split(',');

  result = {
    r: parseInt(res[0])   || 0,
    g: parseInt(res[1])   || 0,
    b: parseInt(res[2])   || 0,
    a: parseFloat(res[3]) || 1,
  };

  return result;
}
