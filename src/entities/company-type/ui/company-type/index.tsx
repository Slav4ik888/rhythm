import { FC, memo } from 'react';
import Chip from '@mui/material/Chip';
// import { Tooltip } from 'shared/ui/tooltip';
import { pxToRem } from 'app/providers/theme';
import { COMPANY_COLORS_CONFIG } from '../../model/config';
import { ReportsLineChartConfig } from '../../../dashboard/ui/reports';
import { CompanyId } from 'entities/companies';



const useStyle = (companyId: CompanyId, companyType : string) => {
  return {
    cursor     : 'default',
    width      : pxToRem(70),
    height     : pxToRem(15),
    fontSize   : pxToRem(12),
    color      : COMPANY_COLORS_CONFIG[companyId][companyType]?.color,
    background : COMPANY_COLORS_CONFIG[companyId][companyType]?.background,
  };
};

interface Props {
  // colorConfig : CompanyColorsConfig
  type      : string
  companyId : CompanyId
  config    : ReportsLineChartConfig
}


/**
 * TODO: сделать ярлыком влевом верхнем углу карточки статистики (поз: абсолют)
 * Chip для статистики типа компании: Общая | Да-Телеком | Бэдком |
 */
export const CompanyTypeChip: FC<Props> = memo(({ companyId, type, config }) => {
  const sx = useStyle(companyId, type);
  // const { label, description } = DASHBOARD_STATISTIC_TYPE[type] || {};

  if (! config?.chips?.companyType) return null

  return (
    // <Tooltip title={description}>
      <Chip
        label = {type}
        size  = "small"
        sx    = {sx}
      />
    // </Tooltip>
  )
});
