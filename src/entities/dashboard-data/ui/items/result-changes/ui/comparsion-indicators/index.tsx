import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { MDTypography } from 'shared/ui/mui-design-components';
import { ReportsResultChangesConfig } from '../../../../reports';
import { getComparisonValues } from './utils';
import { getReversedIndicators } from '../../model/utils';
import { Tooltip } from 'shared/ui/tooltip';
import { f } from 'shared/styles';


/* Returns tooltip title for 1 & 2 indexes */
const getTooltip = (index: number) => {
  let title = '';

  if (index === 0) title = 'Последнее';
  else if (index === 1) title = 'Предпоследнее';

  return  index > 2 ? '' : (title  + ' значение в выбранном периоде');
}


const useStyles = () => ({
  root: {
    ...f('c-c-fe'),
    width  : '100%',
    cursor : 'default',
  },
  item: {
    ...f('-fe'),
  },
  firstPrefix: {
    ml : 0.5,
  },
  prefixSecond: {
    fontSize : '0.8rem',
    ml       : 0.5,
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
          <Tooltip title={getTooltip(i)} enterDelay={300} key={i}>
            <Box sx={sx.item}>
              <MDTypography
                variant = {i === 0 ? 'h4' : 'body1'}
                color   = {i === 0 ? 'comparisonIndicators_1' : 'comparisonIndicators_2'}
              >
                {values[i].value}
              </MDTypography>
              {
                values[i].prefix && <MDTypography
                  variant = {i === 0 ? 'h6' : 'body1'}
                  color   = {i === 0 ? 'comparisonIndicators_1' : 'comparisonIndicators_2'}
                  sx      = {i === 0 ? sx.firstPrefix : sx.prefixSecond}
                >
                  {values[i].prefix}
                </MDTypography>
              }
            </Box>
          </Tooltip>
        ))
      }
    </Box>
  );
});
