import { useCompany } from 'entities/company';
import { useDashboardData } from 'entities/dashboard-data';
import { FC, memo, useMemo } from 'react';
import { MDButton } from 'shared/ui/mui-design-components';
import { Tooltip } from 'shared/ui/tooltip';



/** DEPRECATED */
export const UpdateGraphicsBtn: FC = memo(() => {
  const { companyId } = useCompany();
  const {
    selectedPeriod, activePeriodType, activeDateStart, activeDateEnd, selectedPeriodType, selectedDateStart, selectedDateEnd,
    setActivePeriod
  } = useDashboardData();

  const isChanged = useMemo(() =>
    activePeriodType !== selectedPeriodType ||
    activeDateStart  !== selectedDateStart ||
    activeDateEnd    !== selectedDateEnd
    , [activePeriodType, selectedPeriodType, activeDateStart, selectedDateStart, activeDateEnd, selectedDateEnd]);
  
  
  const handleSaveChanges = () => setActivePeriod({ companyId, period: selectedPeriod });


  if (! isChanged) return null;
  
  return (
    <Tooltip
      title      = 'Применить текущие настройки'
      enterDelay = {500}
      sxSpan     = {{ cursor: "default" }}
    >
      <MDButton
        variant = "gradient"
        color   = "secondary"
        type    = "button"
        onClick = {handleSaveChanges}
      >
        Применить
      </MDButton>
    </Tooltip>
  )
});
