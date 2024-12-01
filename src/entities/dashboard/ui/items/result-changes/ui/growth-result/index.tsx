import { FC, memo } from "react";
import { Box } from '@mui/material';
import { Increased } from '../../../../../model/types';
import { calcIncreased } from '../../model/utils/calc-increased';
import { calcGrowthChange, getGrowIconTypeByIncreased, getReversedIndicators } from '../../model/utils';
import { MeasurementIcon } from './measurement-icon';
import { GrowthChange } from './growth-change';
import { GrowthIcon } from './growth-icon';
import { getFixedFraction } from 'shared/helpers/numbers';
import { ReportsResultChangesConfig } from 'entities/dashboard';
import { SxCard } from 'app/providers/theme';



const useStyles = (sx?: SxCard) => ({
  root: {
    display    : "flex",
    alignItems : "flex-start",
    ml         : 4,
    pt         : "0.3rem",
    ...sx?.root,
  },
});


interface Props {
  data   : number[] // 0 - lastValue, 1 - prevValue, 2 - nextValue
  config : ReportsResultChangesConfig
  sx?    : SxCard
}


/** Итоговое изменение в процентах | шт | ... */
export const GrowthResult: FC<Props> = memo(({ config, data, sx: style }) => {
  const sx = useStyles(style);
  const { unchangedBlack, inverted } = config;
  const { valuesCount } = config.resultChanges?.comparisonIndicators || {};
  const [lastValue, prevValue] = getReversedIndicators(data, valuesCount); // 0 - lastValue, 1 - prevValue, 2 - nextValue


  const growthChange = getFixedFraction(
    calcGrowthChange(lastValue, prevValue),
    {
      fractionDigits : config.resultChanges?.growthResult?.fractionDigits,
      addZero        : config.resultChanges?.growthResult?.addZero,
    }
  );

  const increased: Increased = calcIncreased(lastValue, prevValue, inverted);
  const resultColor = getGrowIconTypeByIncreased(increased, unchangedBlack);
  

  return (
    <Box sx={sx.root}>
      <GrowthChange
        value     = {growthChange}
        color     = {resultColor}
        increased = {increased}
      />
      <MeasurementIcon
        value = {growthChange}
        color = {resultColor}
      />
      <GrowthIcon
        value          = {growthChange}
        increased      = {increased}
        unchangedBlack = {unchangedBlack}
      />
    </Box>
  );
});
