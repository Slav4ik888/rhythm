import { memo, useEffect } from 'react';
import { useCompany } from 'entities/company';
import { actionsDashboard, getInitialState } from 'entities/dashboard';
import { COMPANIES_CONFIG } from '../../model/config';
import { useAppDispatch } from 'shared/lib/hooks';
// import { DashboardBody_demo_pecar } from './templates';
import { CircularProgress } from 'shared/ui/circular-progress';
import { DashboardBodyWrapper } from './wrapper';



export const DashboardBody = memo(() => {
  console.log('DashboardBody ');
  const { companyId } = useCompany();
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (companyId) {
      dispatch(actionsDashboard.setInitial(getInitialState(companyId)));
    }
  }, [companyId]);

   
  return companyId
    ? <DashboardBodyWrapper>
        {COMPANIES_CONFIG[companyId].dashboard}
      </DashboardBodyWrapper>
    
    : <CircularProgress
        loading
        size = {70}
        sx   = {{ root: { top: -100 } }}
      />
      // <DashboardBody_demo_pecar />
});
