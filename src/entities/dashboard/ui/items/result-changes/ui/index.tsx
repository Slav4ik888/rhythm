import { FC, memo } from "react";
import { Box } from '@mui/material';
import { DashboardStatisticItem } from '../../../../model/types';
import { GrowthResult } from './growth-result';
import { ComparisonIndicators } from './comparsion-indicators';
import { getComparisonIndicators } from '../model/utils';
import { ReportsLineChartConfig } from 'shared/ui/charts/line-charts/reports-line-chart2/config-type';



const useStyles = () => ({
  root: {
    display        : "flex",
    // justifyContent : "center",
    // alignItems: "center",
  },
});


interface Props {
  item    : DashboardStatisticItem
  config? : ReportsLineChartConfig
}


/** Показывает изменения между последними значениями */
export const ResultChanges: FC<Props> = memo(({ item, config = {} }) => {
  const sx = useStyles();

  const values = getComparisonIndicators(
    item.data as number[],
    config.resultChanges?.comparisonIndicators?.valuesCount
  );


  return (
    <Box sx={sx.root}>
      <ComparisonIndicators
        values = {values}
        config = {config}
      />

      <GrowthResult
        values = {values}
        config = {config}
      />
    </Box>
  );
});
