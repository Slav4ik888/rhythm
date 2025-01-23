import { FC, memo, useMemo } from 'react';
import { Box } from '@mui/material';
import { Increased } from '../../../../../../model/types';
import GrowIcon from './assets/triangle-growth.svg';
import FallIcon from './assets/triangle-fall.svg';
import UnchangedLeftIcon from './assets/triangle-unchanged-left.svg';
import UnchangedRightIcon from './assets/triangle-unchanged-right.svg';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { f, pxToRem } from 'shared/styles';
import { SxSmallContainer } from 'entities/dashboard-data';
import { isNotUndefined } from 'shared/lib/validators';
import { cloneObj } from 'shared/helpers/objects';
import { getColorByIncreased } from 'widgets/dashboard-view/body-content/content-item/growth-icon/model/utils';



const useStyles = (
  theme           : CustomTheme,
  increased       : Increased,
  unchangedBlack? : boolean,
  sx?             : SxSmallContainer
) => {
  const color = getColorByIncreased(theme, increased, unchangedBlack);
  const root  = cloneObj(sx?.growthResult?.growthIcon);
  const scale = `scale(${root?.scale || 1.5})`;

  if (isNotUndefined(root?.scale)) delete root?.scale;
  
  return {
    root: {
      ...f('-c-c'),
      pt : pxToRem(5),
      ...root
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
  unchangedBlack? : boolean  // При отсутствии изменений в результатах красить чёрным цветом
  isLeft?         : boolean  // При отсутствии изменений чёрный треугольник повернуть влево
  value           : string   // '' если нет предыдущего значение, то результат не выводим
  sx?             : SxSmallContainer
}


/** Иконка вверх вниз на месте, показывает положительные или отрицательные изменения */
export const GrowthIcon: FC<Props> = memo(({ value, increased, unchangedBlack, isLeft, sx: style }) => {
  const sx = useStyles(useTheme(), increased, unchangedBlack, style);
  
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
