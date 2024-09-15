import { FC, memo } from 'react';
import Chip from '@mui/material/Chip';
import { DashboardStatisticType, DASHBOARD_STATISTIC_TYPE } from '../../../model/config';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomMUITheme, pxToRem, useTheme } from 'app/providers/theme';



const useStyle = ({ palette: { statisticTypeChip } }: CustomMUITheme, type: DashboardStatisticType) => {
  console.log('type: ', type);
  console.log('statisticTypeChip: ', statisticTypeChip);

  return {
    width      : pxToRem(60),
    height     : pxToRem(18),
    color      : statisticTypeChip[type].text,
    background : statisticTypeChip[type].background
  };
};

interface Props {
  type: DashboardStatisticType
}


/** Компонент типа статистики: День | Нед | Мес | */
export const StatisticTypeChip: FC<Props> = memo(({ type }) => {
  console.log('type111: ', type);
  const sx = useStyle(useTheme(), type);
  const { label, description } = DASHBOARD_STATISTIC_TYPE[type] || {};


  return (
    <Tooltip title={description}>
      <Chip
        label = {label}
        size  = "small"
        sx    = {sx}
      />
    </Tooltip>
  )
});
