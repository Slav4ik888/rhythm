import { FC, memo } from "react";
import { Box } from '@mui/material';
import { DashboardStatisticItem } from '../../../model/types';
import { getLastItem } from 'shared/helpers/arrays';
import { GrowthResult } from './growth-result';
import { ComparisonIndicators } from './comparsion-indicators';



const useStyles = () => ({
  root: {
    display        : "flex",
    // justifyContent : "center",
    // alignItems: "center",
  },
});


interface Props {
  item            : DashboardStatisticItem
  unchangedBlack? : boolean // При отсутствии изменений в результатах красить чёрным цветом
  inverted?     : boolean // Если график перевёрнутый, то есть если задолженность уменьшается то это рост
}


/** Показывает изменения между последними значениями */
export const ResultChanges: FC<Props> = memo(({ item, unchangedBlack, inverted }) => {
  const sx = useStyles();

  const lastValue = getLastItem(item.data)    as number || 0;
  const prevValue = getLastItem(item.data, 1) as number || 0;


  return (
    <Box sx={sx.root}>
      <ComparisonIndicators
        lastValue = {lastValue}
        prevValue = {prevValue}
      />

      <GrowthResult
        lastValue      = {lastValue}
        prevValue      = {prevValue}
        unchangedBlack = {unchangedBlack}
        inverted       = {inverted}
      />
    </Box>
  );
});
