import { FC, memo, useMemo } from "react";
import { Box } from '@mui/material';
import { Increased } from '../../../../../../model/types';
import GrowIcon from './assets/triangle-growth.svg';
import FallIcon from './assets/triangle-fall.svg';
import UnchangedLeftIcon from './assets/triangle-unchanged-left.svg';
import UnchangedRightIcon from './assets/triangle-unchanged-right.svg';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { getColorByIncreased } from '../../../model/utils';



const useStyles = (theme: CustomTheme, increased: Increased, unchangedBlack?: boolean) => {
  const color = getColorByIncreased(theme, increased, unchangedBlack);

  return {
    root: {
      display : "flex",
      pt      : 1.5,
      // justifyContent : "center",
      // alignItems     : "center",
    },
    svg: {
      transform       : "scale(1.5)",
      WebkitTransform : "scale(1.5)",
      MozTransform    : "scale(1.5)",
      
    },
    fill: color,
  };
};



interface Props {
  increased       : Increased
  unchangedBlack? : boolean  // При отсутствии изменений в результатах красить чёрным цветом
  isLeft?         : boolean  // При отсутствии изменений чёрный треугольник повернуть влево
  value           : string // '' если нет предыдущего значение, то результат не выводим
}


/** Иконка вверх вниз на месте, показывает положительные или отрицательные изменения */
export const GrowthIcon: FC<Props> = memo(({ value, increased, unchangedBlack, isLeft }) => {
  const sx = useStyles(useTheme(), increased, unchangedBlack);
  
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
  

  if (! value) return null;
  
  return (
    <Box sx={sx.root}>
      {icon}
    </Box>
  );
});
