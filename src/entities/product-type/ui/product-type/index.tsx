import { FC, memo } from 'react';
import Chip from '@mui/material/Chip';
import { Tooltip } from 'shared/ui/tooltip';
import { pxToRem } from 'app/providers/theme';
import { PRODUCT_COLORS_CONFIG } from '../../model/config';
import { ReportsLineChartConfig } from '../../../dashboard/ui/reports';
import { CompanyId } from 'entities/companies';



const useStyle = (companyId: CompanyId, productType: string) => ({
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
    color      : PRODUCT_COLORS_CONFIG[companyId][productType]?.color,
    background : PRODUCT_COLORS_CONFIG[companyId][productType]?.background,
  },
});

interface Props {
  type      : string
  companyId : CompanyId
  config    : ReportsLineChartConfig
}


/**
 * Chip для статистики типа компании: Общая | Сопровождение | Курс | Ритм | Разработка | Конструктор | Прочие	
 */
export const ProductTypeChip: FC<Props> = memo(({ companyId, type, config }) => {
  const sx = useStyle(companyId, type);

  if (! config?.chips?.productType) return null

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
