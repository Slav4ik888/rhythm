import { FC, memo, useMemo } from 'react';
import { CardItem, CardItemId } from 'entities/dashboard-view';
import { ItemWrapper } from '../../wrapper-item';
import { DashboardStatisticItem, useDashboardData } from 'entities/dashboard-data';
import { getComparisonValues, getReversedIndicators } from '../model/utils';
import { Typography } from '@mui/material';
import { pxToRem } from 'shared/styles';
import { CustomTheme, useTheme } from 'app/providers/theme';



const useStyles = (theme: CustomTheme) => ({
  value: {

  }
});



interface Props {
  item: CardItem
  value: string
}

/** Число */
export const ItemDigitIndicatorValue: FC<Props> = memo(({ item, value }) => {
  const sx = useStyles(useTheme());

  

  if (! value) return null

  return (
    <Typography sx={sx.value}>
      {
        value
      }
    </Typography>
  )
});
