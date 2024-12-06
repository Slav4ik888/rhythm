import { FC, memo } from 'react';
import { Chip } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { pxToRem } from 'app/providers/theme';
import { PRODUCT_COLORS_CONFIG } from '../../model/config';
import { ActivatedCompanyId } from 'entities/company';
import { f } from 'app/styles';



const useStyle = (productType: string) => ({
  tooltip: {
    ...f('_c'),
    height     : pxToRem(20),
    cursor     : 'default',
  },
  chip: {
    width      : pxToRem(70),
    height     : pxToRem(15),
    fontSize   : pxToRem(12),
    color      : PRODUCT_COLORS_CONFIG[ActivatedCompanyId.CSS][productType]?.color,
    background : PRODUCT_COLORS_CONFIG[ActivatedCompanyId.CSS][productType]?.background,
  },
});

interface Props {
  type?: string
}


/**
 * Chip для статистики типа компании: Общая | Сопровождение | Курс | Ритм | Разработка | Конструктор | Прочие	
 */
export const ProductTypeChip: FC<Props> = memo(({ type = '' }) => {
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
