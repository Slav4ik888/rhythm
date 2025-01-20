import { FC, memo, useMemo } from 'react';
import { Box } from '@mui/material';
import GrowIcon from './assets/triangle-growth.svg';
import FallIcon from './assets/triangle-fall.svg';
import UnchangedLeftIcon from './assets/triangle-unchanged-left.svg';
import UnchangedRightIcon from './assets/triangle-unchanged-right.svg';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { pxToRem, SxCard } from 'shared/styles';
import { getColorByIncreased } from '../model/utils';
import { Increased } from 'entities/dashboard-data';



const useStyles = (
  theme           : CustomTheme,
  increased       : Increased,
  unchangedBlack? : boolean,
  scaleValue?     : number,
  sx?             : SxCard
) => {
  const color = getColorByIncreased(theme, increased, unchangedBlack);
  const scale = `scale(${scaleValue || 1.5})`;

  
  return {
    root: {
      display : 'flex',
      // pt      : pxToRem(5),
      // justifyContent : 'center',
      // alignItems     : 'center',
      ...sx?.root
    },
    svg: {
      transform       : scale,
      WebkitTransform : scale,
      MozTransform    : scale,
    },
    fill: color,
  };
};



interface Props {
  increased       : Increased
  unchangedBlack  : boolean | undefined  // При отсутствии изменений в результатах красить чёрным цветом
  isLeft          : boolean | undefined  // При отсутствии изменений чёрный треугольник повернуть влево
  scaleValue      : number  | undefined
  // value           : string   // '' если нет предыдущего значение, то результат не выводим
  sx              : SxCard
}


/** Иконка вверх вниз на месте, показывает положительные или отрицательные изменения */
export const GrowthIconComponent: FC<Props> = memo(({ increased, unchangedBlack, isLeft, scaleValue, sx: style }) => {
  const sx = useStyles(useTheme(), increased, unchangedBlack, scaleValue, style);
  
  const icon = useMemo(() => {
    switch (increased) {
      case 1 : return <GrowIcon fill={sx.fill} style={sx.svg} />
      case -1: return <FallIcon fill={sx.fill} style={sx.svg} />
      
      default:
        if (unchangedBlack) {
          return isLeft
            ? <UnchangedLeftIcon fill={sx.fill} style={sx.svg} />
            : <UnchangedRightIcon fill={sx.fill} style={sx.svg} />
        }
        return <FallIcon fill={sx.fill} style={sx.svg} />
    }
  }, [increased, unchangedBlack, isLeft]);
  

  // if (! value) return null;
  
  return (
    <Box sx={sx.root}>
      {icon}
    </Box>
  );
});
