import { FC, memo, useMemo } from 'react';
import Box from '@mui/material/Box';
import GrowIcon from './assets/triangle-growth.svg';
import FallIcon from './assets/triangle-fall.svg';
import UnchangedLeftIcon from './assets/triangle-unchanged-left.svg';
import UnchangedRightIcon from './assets/triangle-unchanged-right.svg';
import { f, SxCard } from 'shared/styles';
import { Increased } from 'entities/dashboard-data';
import { getStyles } from './styles';



interface Props {
  increased       : Increased
  unchangedBlack  : boolean | undefined  // При отсутствии изменений в результатах красить чёрным цветом
  isLeft          : boolean | undefined  // При отсутствии изменений чёрный треугольник повернуть влево
  scale           : number  | undefined
  sx              : SxCard
}


/** Иконка вверх вниз на месте, показывает положительные или отрицательные изменения */
export const GrowthIconComponent: FC<Props> = memo(({ increased, unchangedBlack, isLeft, scale, sx: style }) => {
  const icon = useMemo(() => {
    const sx = getStyles(increased, unchangedBlack, scale);
    switch (increased) {
      case 1: return <GrowIcon fill={sx.fill} style={sx.svg} />
      case -1: return <FallIcon fill={sx.fill} style={sx.svg} />

      default:
        if (unchangedBlack) {
          return isLeft
            ? <UnchangedLeftIcon fill={sx.fill} style={sx.svg} />
            : <UnchangedRightIcon fill={sx.fill} style={sx.svg} />
        }
        return <FallIcon fill={sx.fill} style={sx.svg} />
    }
  }, [increased, unchangedBlack, isLeft, scale]);


  return (
    <Box
      sx={{
        ...f('-c-c'),
        ...style?.root
      }}
    >
      {icon}
    </Box>
  );
});
