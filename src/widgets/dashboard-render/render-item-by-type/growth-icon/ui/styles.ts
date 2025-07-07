import { getColorByIncreased } from '../../digit-indicator/utils';
import { Increased } from 'entities/dashboard-data';


export const getStyles = (
  increased       : Increased,
  unchangedBlack? : boolean,
  scaleValue?     : number,
) => {
  const color = getColorByIncreased(increased, unchangedBlack);
  const scale = `scale(${scaleValue || 1.5})`;


  return {
    svg: {
      transform       : scale,
      WebkitTransform : scale,
      MozTransform    : scale,
    },
    fill: color,
  };
};
