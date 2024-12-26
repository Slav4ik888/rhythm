import { memo, useEffect } from 'react';
import { useCompany } from 'entities/company';
import { getInitialState as getInitialStateData, useDashboardData } from 'entities/dashboard-data';
import { COMPANIES_CONFIG } from '../../model/config';
import { CircularProgress } from 'shared/ui/circular-progress';
import { DashboardBodyWrapper } from './wrapper';
import { PageLoader } from 'widgets';
import { DashboardSetEditBtn } from 'features/dashboard-view';
// import { DashboardBody_demo_pecar } from './templates';
import { DashboardBodyContent } from './content';
import { DashboardBodyPanel } from './panel';
import { getInitialState as getInitialStateView, useDashboardView } from 'entities/dashboard-view';



export const DashboardBody = memo(() => {
  console.log('DashboardBody ');
  const { companyId } = useCompany();
  const { isMounted, setInitial: setInitialData } = useDashboardData();
  const { editMode, setInitial: setInitialView } = useDashboardView();


  useEffect(() => {
    if (companyId && isMounted) {
      setInitialData(getInitialStateData(companyId));
      setInitialView(getInitialStateView(companyId));
    }
  }, [companyId, isMounted]);

  // Вначале должен смонтироваться dashboardReducer
  if (! isMounted)  return  <PageLoader loading={true} />


  return companyId
    ? <DashboardBodyWrapper>
        <DashboardSetEditBtn />
        {
          editMode && <DashboardBodyPanel />
        }
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
