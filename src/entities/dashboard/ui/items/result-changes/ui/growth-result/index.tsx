import { FC, memo } from "react";
import { Box } from '@mui/material';
import { Increased } from '../../../../../model/types';
import { calcIncreased } from '../../model/utils/calc-increased';
import { calcGrowthChange, getGrowIconTypeByIncreased } from '../../model/utils';
import { MeasurementIcon } from './measurement-icon';
import { GrowthChange } from './growth-change';
import { GrowthIcon } from './growth-icon';
import { getFixedFraction } from 'shared/helpers/numbers';



export interface GrowthResultConfig {
  unchangedBlack? : boolean // При отсутствии изменений в результатах красить чёрным цветом
  inverted?       : boolean // Если график перевёрнутый, то есть если задолженность уменьшается то это рост
  fractionDigits? : number // Количество знаков после запятой
}


const useStyles = () => ({
  root: {
    display    : "flex",
    alignItems : "flex-start",
    ml         : 2,
  },
});


interface Props {
  values : number[] // 0 - lastValue, 1 - prevValue, 2 - nextValue
  config : GrowthResultConfig
}


/** Итоговое изменение в процентах | шт | ... */
export const GrowthResult: FC<Props> = memo(({ config, values }) => {
  console.log('config: ', config);
  const sx = useStyles();
  const { unchangedBlack, inverted } = config;
  const [lastValue, prevValue] = values;

  const growthChange = getFixedFraction(calcGrowthChange(lastValue, prevValue), config.fractionDigits);
  console.log('growthChange: ', growthChange);

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
