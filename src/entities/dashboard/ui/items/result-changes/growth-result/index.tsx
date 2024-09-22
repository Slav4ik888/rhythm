import { FC, memo } from "react";
import { Box } from '@mui/material';
import { Increased } from '../../../../model/types';
import { calcIncreased } from '../utils/calc-increased';
import { calcGrowthChange, getGrowIconTypeByIncreased } from '../utils';
import { MeasurementIcon } from './measurement-icon';
import { GrowthChange } from './growth-change';
import { GrowthIcon } from './growth-icon';



const useStyles = () => ({
  root: {
    display: "flex",
  },
});


interface Props {
  lastValue       : number
  prevValue       : number
  unchangedBlack? : boolean // При отсутствии изменений в результатах красить чёрным цветом
  inverted?     : boolean // Если график перевёрнутый, то есть если задолженность уменьшается то это рост
}


/** Итоговое изменение в процентах | шт | ... */
export const GrowthResult: FC<Props> = memo(({ unchangedBlack, inverted, lastValue, prevValue }) => {
  const sx = useStyles();

  const growthChange = calcGrowthChange(lastValue, prevValue);

  const increased: Increased = calcIncreased(lastValue, prevValue, inverted);
  const resultColor = getGrowIconTypeByIncreased(increased, unchangedBlack);
  

  return (
    <Box sx={sx.root}>
      <GrowthChange
        value = {growthChange}
        color = {resultColor}
      />
      <MeasurementIcon
        value = {growthChange}
        color = {resultColor}
      />
      <GrowthIcon
        unchangedBlack
        increased={increased}
      />
    </Box>
  );
});
