import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { DashboardStatisticItem } from '../../../../../model/types';
import { GrowthResult } from '../growth-result';
import { ComparisonIndicators } from '../comparsion-indicators';
import { ReportsLineChartConfig } from 'entities/dashboard-data';



const useStyles = () => ({
  root: {
    display       : 'flex',
    // justifyContent : 'center',
    // alignItems: 'center',
  },
});


interface Props {
  item    : DashboardStatisticItem
  config? : ReportsLineChartConfig
}


/** Показывает изменения между последними значениями */
export const ResultChanges: FC<Props> = memo(({ item, config = {} }) => {
  const sx = useStyles();

  return (
    <Box sx={sx.root}>
      <ComparisonIndicators
        data   = {item.data as number[]}
        config = {config}
      />

      <GrowthResult
        data   = {item.data as number[]}
        config = {config}
      />
    </Box>
  );
});
