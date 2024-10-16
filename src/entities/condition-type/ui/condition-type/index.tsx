import { FC, memo } from 'react';
import Chip from '@mui/material/Chip';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomTheme, pxToRem, useTheme } from 'app/providers/theme';
import { ReportsLineChartConfig } from '../../../dashboard/ui/reports';
import { CONDITION_TYPE } from '../../model/config';
import { DashboardConditionType } from '../../model/types';



const useStyle = ({ palette: { conditionTypeChip } }: CustomTheme, type?: DashboardConditionType) => {
  if (! type) return null

  return {
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
      color      : conditionTypeChip[type]?.color,
      background : conditionTypeChip[type]?.background,
    },
  }
};


interface Props {
  type?  : DashboardConditionType
  config : ReportsLineChartConfig
}


/** Chip для типа состояния: Могущество | Изобилие | Норма | ЧП  | Опасность | Несущ */
export const ConditionTypeChip: FC<Props> = memo(({ type, config }) => {
  const sx = useStyle(useTheme(), type);

  if (! type) return null
  if (! config?.chips?.conditionType) return null
  
  const { label, description } = CONDITION_TYPE[type] || {};


  return (
    <Tooltip
      title     = {description}
      placement = 'top-start'
      sxSpan    = {sx?.tooltip}
    >
      <Chip
        label = {label}
        size  = "small"
        sx    = {sx?.chip}
      />
    </Tooltip>
  )
});
