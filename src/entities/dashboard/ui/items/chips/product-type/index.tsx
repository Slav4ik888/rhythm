import { FC, memo } from 'react';
import Chip from '@mui/material/Chip';
import { Tooltip } from 'shared/ui/tooltip';
import { pxToRem } from 'app/providers/theme';
import { PRODUCT_COLORS_CONFIG } from './color-config';




const useStyle = (productType: string) => ({
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
    color      : PRODUCT_COLORS_CONFIG[productType]?.color,
    background : PRODUCT_COLORS_CONFIG[productType]?.background,
  },
});

interface Props {
  // colorConfig : CompanyColorsConfig
  type : string
}


/**
 * Chip для статистики типа компании: Общая | Сопровождение | Курс | Ритм | Разработка | Конструктор | Прочие	
 */
export const ProductTypeChip: FC<Props> = memo(({ type }) => {
  const sx = useStyle(type);


  return (
    <Tooltip
      title     = {type}
      placement = 'top-start'
      sxSpan    = {sx.tooltip}
    >
      <Chip
        label = {type}
        size  = "small"
        sx    = {sx.chip}
      />
    </Tooltip>
  )
});
