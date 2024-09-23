import { FC, memo } from "react";
import { Box } from '@mui/material';
import { DashboardStatisticItem } from '../../../../model/types';
import { GrowthResult } from './growth-result';
import { ComparisonIndicators } from './comparsion-indicators';
import { getComparisonIndicators } from '../model/utils';
import { ResultChangesConfig } from '../model/types';



const useStyles = () => ({
  root: {
    display        : "flex",
    // justifyContent : "center",
    // alignItems: "center",
  },
});


interface Props {
  item   : DashboardStatisticItem
  config : ResultChangesConfig
}


/** Показывает изменения между последними значениями */
export const ResultChanges: FC<Props> = memo(({ item, config = {} }) => {
  const sx = useStyles();
  const { unchangedBlack, inverted } = config;

  const values = getComparisonIndicators(item.data as number[], config.comparisonIndicators?.valuesCount);


  return (
    <Box sx={sx.root}>
      <ComparisonIndicators
        values = {values}
      />

      <GrowthResult
        values = {values}
        config = {{ unchangedBlack, inverted }}
      />
    </Box>
  );
});
