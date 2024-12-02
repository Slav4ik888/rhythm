import { FC, memo } from "react";
import { Box } from '@mui/material';
import { Increased } from '../../../../../model/types';
import { calcIncreased } from '../../model/utils/calc-increased';
import { calcGrowthChange, getGrowIconTypeByIncreased, getReversedIndicators } from '../../model/utils';
import { MeasurementIcon } from './measurement-icon';
import { GrowthChange } from './growth-change';
import { GrowthIcon } from './growth-icon';
import { getFixedFraction } from 'shared/helpers/numbers';
import { ReportsResultChangesConfig, SxSmallContainer } from 'entities/dashboard';



const useStyles = (sx?: SxSmallContainer) => ({
  root: {
    display    : "flex",
    alignItems : "flex-start",
    ml         : 4,
    pt         : "0.3rem",
    ...sx?.growthResult?.root,
  },
});


interface Props {
  data   : number[] // 0 - lastValue, 1 - prevValue, 2 - nextValue
  config : ReportsResultChangesConfig
  sx?    : SxSmallContainer
}


/** Итоговое изменение в процентах | шт | ... */
export const GrowthResult: FC<Props> = memo(({ config, data, sx: style }) => {
  const sx = useStyles(style);
  const { unchangedBlack, inverted } = config;
  const { valuesCount } = config.resultChanges?.comparisonIndicators || {};
  const [lastValue, prevValue] = getReversedIndicators(data, valuesCount); // 0 - lastValue, 1 - prevValue, 2 - nextValue


  const { fractionDigits, addZero } = config.resultChanges?.growthResult || {};
  const growthChange = getFixedFraction(calcGrowthChange(lastValue, prevValue), { fractionDigits, addZero });

  const increased: Increased = calcIncreased(lastValue, prevValue, inverted);
  const resultColor = getGrowIconTypeByIncreased(increased, unchangedBlack);
  

  return (
    <Box sx={sx.root}>
      <GrowthChange
        value     = {growthChange}
        color     = {resultColor}
        increased = {increased}
        sx        = {style}
      />
      <MeasurementIcon
        value = {growthChange}
        color = {resultColor}
        sx    = {style}
      />
      <GrowthIcon
        value          = {growthChange}
        increased      = {increased}
        unchangedBlack = {unchangedBlack}
        sx             = {style}
      />
    </Box>
  );
});
