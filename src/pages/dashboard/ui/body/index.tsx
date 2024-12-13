import { memo, useEffect } from 'react';
import { useCompany } from 'entities/company';
import { getInitialState, useDashboard } from 'entities/dashboard';
import { COMPANIES_CONFIG } from '../../model/config';
import { CircularProgress } from 'shared/ui/circular-progress';
import { DashboardBodyWrapper } from './wrapper';
import { PageLoader } from 'widgets';
import { DashboardAddNewCardBtn, DashboardSetEditBtn } from 'features/dashboard';
import { DashboardBody_demo_pecar } from './templates';
import { DashboardBodyContent } from './content';



export const DashboardBody = memo(() => {
  console.log('DashboardBody ');
  const { companyId } = useCompany();
  const { isMounted, setInitial } = useDashboard();


  useEffect(() => {
    if (companyId && isMounted) {
      setInitial(getInitialState(companyId));
    }
  }, [companyId, isMounted]);

  // Вначале должен смонтироваться dashboardReducer
  if (! isMounted)  return  <PageLoader loading={true} />


  return companyId
    ? <DashboardBodyWrapper>
        <DashboardSetEditBtn />
        <DashboardAddNewCardBtn />
        <DashboardBodyContent />
      
        {COMPANIES_CONFIG[companyId].dashboard}
      </DashboardBodyWrapper>
    
    : <CircularProgress
        loading
        size = {70}
        sx   = {{ root: { top: -100 } }}
      />
      // <DashboardBody_demo_pecar />
});
