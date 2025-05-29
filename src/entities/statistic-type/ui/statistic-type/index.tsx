import { FC, memo } from 'react';
import { Chip } from '@mui/material';
import { STATISTIC_PERIOD_TYPE } from '../../model/config';
import { StatisticPeriodType } from '../../model/types';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { f, pxToRem, SxCard } from 'shared/styles';



const useStyle = ({
  palette: { statisticPeriodTypeChip } }: CustomTheme,
  type : StatisticPeriodType,
  sx?  : SxCard
) => ({
  tooltip: {
    ...f('-c'),
    height     : pxToRem(20),
    cursor     : 'default',
  },
  chip: {
    width      : pxToRem(70),
    height     : pxToRem(15),
    fontSize   : pxToRem(12),
    color      : statisticPeriodTypeChip[type]?.color,
    background : statisticPeriodTypeChip[type]?.background,
    ...sx?.root,
  },
});


interface Props {
  type? : StatisticPeriodType
  sx?   : SxCard
}


/**
 * Chip для типа статистики: День | Нед | Мес |
 */
export const StatisticPeriodTypeChip: FC<Props> = memo(({ type = '' as StatisticPeriodType, sx: styles }) => {
  // TODO: вначале брать цвета из customSettings from useCompany()
  const sx = useStyle(useTheme(), type, styles);
  const { label, description } = STATISTIC_PERIOD_TYPE[type] || {};

  
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
