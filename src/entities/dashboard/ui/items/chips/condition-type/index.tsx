import { FC, memo } from 'react';
import Chip from '@mui/material/Chip';
import { DashboardConditionType, CONDITION_TYPE } from '../../../../model/config';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomMUITheme, pxToRem, useTheme } from 'app/providers/theme';



const useStyle = ({ palette: { conditionTypeChip } }: CustomMUITheme, type?: DashboardConditionType) => {
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
  type?: DashboardConditionType
}


/** Chip для типа состояния: Могущество | Изобилие | Норма | ЧП  | Опасность | Несущ */
export const ConditionTypeChip: FC<Props> = memo(({ type }) => {
  const sx = useStyle(useTheme(), type);

  if (! type) return null
  
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
