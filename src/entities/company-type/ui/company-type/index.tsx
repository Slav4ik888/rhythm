import { FC, memo } from 'react';
import Chip from '@mui/material/Chip';
// import { Tooltip } from 'shared/ui/tooltip';
import { pxToRem } from 'app/providers/theme';
import { COMPANY_COLORS_CONFIG } from '../../model/config';
import { ActivatedCompanyId } from 'entities/company';



const useStyle = (companyType : string) => {
  return {
    cursor     : 'default',
    width      : pxToRem(70),
    height     : pxToRem(15),
    fontSize   : pxToRem(12),
    color      : COMPANY_COLORS_CONFIG[ActivatedCompanyId.CSS][companyType]?.color,
    background : COMPANY_COLORS_CONFIG[ActivatedCompanyId.CSS][companyType]?.background,
  };
};

interface Props {
  // colorConfig : CompanyColorsConfig
  type: string
}


/**
 * TODO: сделать ярлыком влевом верхнем углу карточки статистики (поз: абсолют)
 * Chip для статистики типа компании: Общая | Да-Телеком | Бэдком |
 */
export const CompanyTypeChip: FC<Props> = memo(({ type }) => {
  const sx = useStyle(type);
  // const { label, description } = DASHBOARD_STATISTIC_TYPE[type] || {};


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
