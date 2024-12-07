import { FC, memo } from 'react';
import { Chip } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { pxToRem } from 'app/providers/theme';
import { COMPANY_COLORS_CONFIG } from '../../model/config';
import { ActivatedCompanyId } from 'entities/company';
import { f } from 'app/styles';



const useStyle = (companyType: string) => ({
  tooltip: {
    ...f('-c'),
    height     : pxToRem(20),
    cursor     : 'default',
  },
  chip: {
    width      : pxToRem(70),
    height     : pxToRem(15),
    fontSize   : pxToRem(12),
    color      : COMPANY_COLORS_CONFIG[ActivatedCompanyId.CSS][companyType]?.color,
    background : COMPANY_COLORS_CONFIG[ActivatedCompanyId.CSS][companyType]?.background,
  }
});

interface Props {
  // colorConfig : CompanyColorsConfig
  type?: string
}


/**
 * TODO: сделать ярлыком влевом верхнем углу карточки статистики (поз: абсолют)
 * Chip для статистики типа компании: Общая | Да-Телеком | Бэдком |
 */
export const CompanyTypeChip: FC<Props> = memo(({ type = '' }) => {
  const sx = useStyle(type);
  // const { label, description } = DASHBOARD_STATISTIC_TYPE[type] || {};


  return (
    <Tooltip
      title     = {`Компания ${type}`}
      placement = 'top-start'
      sxSpan    = {sx.tooltip}
    >
      <Chip
        label = {type}
        size  = 'small'
        sx    = {sx.chip}
      />
    </Tooltip>
  )
});
