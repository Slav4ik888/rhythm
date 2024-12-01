import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { MDTypography } from 'shared/ui/mui-design-components';
import { ReportsResultChangesConfig } from '../../../../reports';
import { getComparisonValues } from './utils';
import { getReversedIndicators } from '../../model/utils';



const useStyles = () => ({
  root: {
    display       : 'flex',
    flexDirection : 'column',
    alignItems    : 'flex-end',
  },
  item: {
    display       : 'flex',
    alignItems    : 'flex-end',
  },
  firstPrefix: {
    ml            : 0.5,
  },
  prefixSecond: {
    fontSize      : '0.8rem',
    ml            : 0.5,
  },
});


interface Props {
  data    : number[]
  config? : ReportsResultChangesConfig
}


/** Показатели для сравнения */
export const ComparisonIndicators: FC<Props> = memo(({ data, config = {} }) => {
  const sx = useStyles();
  const { valuesCount } = config.resultChanges?.comparisonIndicators || {};

  const values = getComparisonValues(
    getReversedIndicators(data, valuesCount), // 0 - lastValue, 1 - prevValue, 2 - nextValue
    config
  );


  return (
    <Box sx={sx.root}>
      {
        values && values.map((v, i) => (
          <Box sx={sx.item} key={i}>
            <MDTypography
              variant = {i === 0 ? 'h4' : 'body2'}
              color   = {i === 0 ? 'comparisonIndicators_1' : 'dark'}
            >
              {values[i].value}
            </MDTypography>
            {
              values[i].prefix && <MDTypography
                variant = {i === 0 ? 'h6' : 'body2'}
                color   = {i === 0 ? 'comparisonIndicators_1' : 'dark'}
                sx      = {i === 0 ? sx.firstPrefix : sx.prefixSecond}
              >
                {values[i].prefix}
              </MDTypography>
            }
          </Box>
        ))
      }
    </Box>
  );
});
