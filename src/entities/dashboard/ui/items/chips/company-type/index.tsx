import { FC, memo } from 'react';
import Chip from '@mui/material/Chip';
// import { Tooltip } from 'shared/ui/tooltip';
import { pxToRem } from 'app/providers/theme';
// import { CompanyColorsConfig } from './types';
import { COMPANY_COLORS_CONFIG } from './color-config';
import { ReportsLineChartConfig } from '../../../reports';



const useStyle = (companyType : string) => {
  return {
    width      : pxToRem(60),
    height     : pxToRem(18),
    color      : COMPANY_COLORS_CONFIG[companyType]?.color,
    background : COMPANY_COLORS_CONFIG[companyType]?.background,
  };
};

interface Props {
  // colorConfig : CompanyColorsConfig
  companyType : string
  config      : ReportsLineChartConfig
}


/**
 * TODO: сделать ярлыком влевом верхнем углу карточки статистики (поз: абсолют)
 * Chip для статистики типа компании: Общая | Да-Телеком | Бэдком |
 */
export const CompanyTypeChip: FC<Props> = memo(({ companyType, config }) => {
  const sx = useStyle(companyType);
  // const { label, description } = DASHBOARD_STATISTIC_TYPE[type] || {};

  if (! config?.chips?.companyType) return null

  return (
    // <Tooltip title={description}>
      <Chip
        label = {companyType}
        size  = "small"
        sx    = {sx}
      />
    // </Tooltip>
  )
});
