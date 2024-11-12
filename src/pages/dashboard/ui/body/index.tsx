import { memo, useEffect } from 'react';
import { CompanyId } from 'entities/company';
import { actionsDashboard, selectIsMounted, getInitialState } from 'entities/dashboard';
import { COMPANIES_CONFIG } from '../../model/config';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks';
import { DashboardBody_demo_pecar } from './templates';



export const DashboardBody = memo(() => {
  console.log('DashboardBody ');
  const dispatch = useAppDispatch();
  const companyId = useParams()?.companyId as CompanyId;
  const isMounted = useSelector(selectIsMounted);


  useEffect(() => {
    if (isMounted) {
      dispatch(actionsDashboard.setInitial(getInitialState()));
    }
  }, [isMounted]);


  return companyId
    ? COMPANIES_CONFIG[companyId].dashboard
    : <DashboardBody_demo_pecar />
});
