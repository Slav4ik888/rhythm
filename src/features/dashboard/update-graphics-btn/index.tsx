import { useCompany } from 'entities/company';
import { actionsDashboard, selectActivePeriod, selectSelectedPeriod } from 'entities/dashboard';
import { FC, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { MDButton } from 'shared/ui/mui-design-components';
import { Tooltip } from 'shared/ui/tooltip';



/** DEPRECATED */
export const UpdateGraphicsBtn: FC = memo(() => {
  const { companyId } = useCompany();
  const dispatch = useAppDispatch();
  const storeActivePeriod   = useSelector(selectActivePeriod);
  const activePeriodType    = storeActivePeriod?.type;
  const activeDateStart     = storeActivePeriod?.start;
  const activeDateEnd       = storeActivePeriod?.end;
  const storeSelectedPeriod = useSelector(selectSelectedPeriod);
  const selectedPeriodType  = storeSelectedPeriod?.type;
  const selectedDateStart   = storeSelectedPeriod?.start;
  const selectedDateEnd     = storeSelectedPeriod?.end;


  const isChanged = useMemo(() =>
    activePeriodType !== selectedPeriodType ||
    activeDateStart  !== selectedDateStart ||
    activeDateEnd    !== selectedDateEnd
    , [activePeriodType, selectedPeriodType, activeDateStart, selectedDateStart, activeDateEnd, selectedDateEnd]);
  
  
  const handleSaveChanges = () => dispatch(actionsDashboard.setActivePeriod({ companyId, period: storeSelectedPeriod }));


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
