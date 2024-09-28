import { FC, memo } from "react";
import { Box } from '@mui/material';
import { Increased } from '../../../../../model/types';
import { calcIncreased } from '../../model/utils/calc-increased';
import { calcGrowthChange, getGrowIconTypeByIncreased } from '../../model/utils';
import { MeasurementIcon } from './measurement-icon';
import { GrowthChange } from './growth-change';
import { GrowthIcon } from './growth-icon';
import { getFixedFraction } from 'shared/helpers/numbers';
import { ReportsLineChartConfig } from 'shared/ui/charts/line-charts/reports-line-chart2/config-type';



const useStyles = () => ({
  root: {
    display    : "flex",
    alignItems : "flex-start",
    ml         : 2,
  },
});


interface Props {
  values : number[] // 0 - lastValue, 1 - prevValue, 2 - nextValue
  config : ReportsLineChartConfig
}


/** Итоговое изменение в процентах | шт | ... */
export const GrowthResult: FC<Props> = memo(({ config, values }) => {
  const sx = useStyles();
  const { unchangedBlack, inverted } = config;
  const [lastValue, prevValue] = values;

  const growthChange = getFixedFraction(
    calcGrowthChange(lastValue, prevValue),
    config.resultChanges?.growthResult?.fractionDigits
  );

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
        value     = {growthChange}
        increased = {increased}
      />
    </Box>
  );
});
