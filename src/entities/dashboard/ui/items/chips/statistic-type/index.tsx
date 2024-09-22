import { FC, memo } from 'react';
import Chip from '@mui/material/Chip';
import { DashboardStatisticType, STATISTIC_TYPE } from '../../../../model/config';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomMUITheme, pxToRem, useTheme } from 'app/providers/theme';



const useStyle = ({ palette: { statisticTypeChip } }: CustomMUITheme, type: DashboardStatisticType) => ({
  tooltip: {
    display    : 'flex',
    alignItems : 'center',
    height     : pxToRem(20),
    cursor     : 'default',
  },
  chip: {
    width      : pxToRem(70),
    height     : pxToRem(15),
    fontSize   : pxToRem(12),
    color      : statisticTypeChip[type].color,
    background : statisticTypeChip[type].background,
  },
});


interface Props {
  type: DashboardStatisticType
}


/** Chip для типа статистики: День | Нед | Мес | */
export const StatisticTypeChip: FC<Props> = memo(({ type }) => {
  const sx = useStyle(useTheme(), type);
  const { label, description } = STATISTIC_TYPE[type] || {};


  return (
    <Tooltip
      title     = {description}
      placement = 'top-start'
      sxSpan    = {sx.tooltip}
    >
      <Chip
        label = {label}
        size  = "small"
        sx    = {sx.chip}
      />
    </Tooltip>
  )
});
