import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { Increased } from '../../../../../model/types';
import { calcIncreased } from '../../model/utils/calc-increased';
import { calcGrowthChange, getGrowIconTypeByIncreased, getReversedIndicators } from '../../model/utils';
import { MeasurementIcon } from './measurement-icon';
import { GrowthChange } from './growth-change';
import { GrowthIcon } from './growth-icon';
import { getFixedFraction } from 'shared/helpers/numbers';
import { ReportsResultChangesConfig, SxSmallContainer } from 'entities/dashboard';
import { f } from 'app/styles';



const useStyles = (sx?: SxSmallContainer) => ({
  root: {
    ...f('-fs'),
    ml : 4,
    pt : '0.3rem',
    ...sx?.growthResult?.root,
  },
  growthChange: {
    ...f('c-fe'),
    
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


  const { display: displayPersent, fractionDigits: fdPersent, addZero: azPersent } = config.resultChanges?.growthResult?.persent || {};
  const growthPersent = getFixedFraction(calcGrowthChange(lastValue, prevValue), { fractionDigits: fdPersent, addZero: azPersent });
  
  const { display: displayValue, fractionDigits: fdValue, addZero: azValue } = config.resultChanges?.growthResult?.value || {};
  const growthValue   = getFixedFraction(lastValue - prevValue, { fractionDigits: fdValue, addZero: azValue });

  const increased: Increased = calcIncreased(lastValue, prevValue, inverted);
  const resultColor = getGrowIconTypeByIncreased(increased, unchangedBlack);
  

  return (
    <Box sx={sx.root}>
      <Box sx={sx.growthChange}>
        {
          displayPersent && <GrowthChange
            value     = {growthPersent}
            color     = {resultColor}
            increased = {increased}
            sx        = {style}
          />
        }
        
        {
          displayValue && <GrowthChange
            value     = {growthValue}
            color     = {resultColor}
            increased = {increased}
            sx        = {style}
          />
        }
      </Box>

      {
        displayPersent && <MeasurementIcon
          value = {growthPersent}
          color = {resultColor}
          sx    = {style}
        />
      }
      <GrowthIcon
        value          = {growthPersent}
        increased      = {increased}
        unchangedBlack = {unchangedBlack}
        sx             = {style}
      />      
    </Box>
  );
});
