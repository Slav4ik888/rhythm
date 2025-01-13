import { RgbaColor } from 'react-colorful';
import chroma from "chroma-js";


export function hexToRgba(color: string): RgbaColor {
  const colors = chroma(color).rgb();

  return {
    r: colors[0],
    g: colors[1],
    b: colors[2],
    a: 1,
  };
}
