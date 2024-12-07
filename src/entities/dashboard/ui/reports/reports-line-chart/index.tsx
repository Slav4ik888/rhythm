import { FC, memo } from 'react';
import { ChartConfig } from '../../../../charts/model/types';
import { DashboardStatisticItem, ResultChanges } from 'entities/dashboard';
import { ReportsLineChartConfig } from './types';
import { ChipsContainer } from '../../items/chips-container';
import { DashboardConditionType } from 'entities/condition-type';
import { ChartContainer, LineChart } from 'entities/charts';
import { Box } from '@mui/material';



interface Props {
  item       : DashboardStatisticItem
  chart      : ChartConfig
  condition? : DashboardConditionType
  config     : ReportsLineChartConfig
}


export const ReportsLineChart: FC<Props> = memo(({ item, config, condition, chart }) => {

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
        <ChipsContainer item={item} config={config} condition={condition} />
        <ResultChanges item={item} config={config} />
      </Box>
      
      <ChartContainer
        sx={{
          root: {
            height : '20rem',
            py     : 2,
            pr     : 0.5,
            mt     : 1,
          }
        }}
      >
        <LineChart chart={chart} />
      </ChartContainer>
    </>
  );
});
