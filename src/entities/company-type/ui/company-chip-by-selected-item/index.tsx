import { FC, memo } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { pxToRem } from 'shared/styles';
import { useDashboardData } from 'entities/dashboard-data';
import { CompanyTypeChip } from '../company-type';
import { useCompany } from 'entities/company';



/** Show Company chip by kod, in Configurator by SelectedItem */
export const CompanyChipBySelectedItem: FC = memo(() => {
  const { customSettings } = useCompany();
  const { startEntities } = useDashboardData();
  const { fromGlobalKod: kod } = useDashboardView();
  const companyType = startEntities[kod]?.companyType;


  return (
    <CompanyTypeChip
      label          = {companyType}
      customSettings = {customSettings}
      sx             = {{
        root: {
          color      : customSettings?.companyType?.[companyType]?.color || 'black',
          background : customSettings?.companyType?.[companyType]?.background || 'rgb(111, 111, 111)',
          width      : pxToRem(90),
          height     : pxToRem(16),
        }
      }}
    />
  )
});
