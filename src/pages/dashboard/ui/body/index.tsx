import { memo, useEffect } from 'react';
import { ActivatedCompanyId, useCompany } from 'entities/company';
import { actionsDashboard, selectIsMounted, getInitialState } from 'entities/dashboard';
import { COMPANIES_CONFIG } from '../../model/config';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { DashboardBody_demo_pecar } from './templates';



export const DashboardBody = memo(() => {
  console.log('DashboardBody ');
  const { companyId } = useCompany();
  const dispatch = useAppDispatch();
  const isMounted = useSelector(selectIsMounted);


  useEffect(() => {
    if (isMounted) {
      dispatch(actionsDashboard.setInitial(getInitialState(companyId)));
    }
  }, [isMounted]);


  return companyId
    ? COMPANIES_CONFIG[companyId].dashboard
    : <DashboardBody_demo_pecar />
});
