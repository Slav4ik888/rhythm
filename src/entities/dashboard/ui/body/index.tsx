import { actionsCompany, COMPANIES_CONFIG, CompanyId } from 'entities/companies';
import { actionsDashboard, DashboardBody_demo_pecar, DashboardPeriod, DashboardPeriodType, StateSchemaDashboard } from 'entities/dashboard';
import { selectIsMounted } from 'entities/dashboard/model/selectors';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks';
import { LS } from 'shared/lib/local-storage';



export const DashboardBody = memo(() => {
  console.log('DashboardBody ');
  const dispatch = useAppDispatch();
  const companyId = useParams()?.companyId as CompanyId;
  const isMounted = useSelector(selectIsMounted);


  useEffect(() => {
    if (isMounted) {
      const emptyPeriod: DashboardPeriod = {
        type  : DashboardPeriodType.NINE_MONTHS,
        start : undefined,
        end   : undefined
      };

      const activePeriod = LS.getDashboardState(companyId)?.activePeriod || { ...emptyPeriod };
      
      const initialState: StateSchemaDashboard = {
        startEntities  : LS.getDashboardState(companyId)?.startEntities  || {},
        startDates     : LS.getDashboardState(companyId)?.startDates     || {},
        lastUpdated    : LS.getDashboardState(companyId)?.lastUpdated    || undefined, // Дата последнего обновления
        
        selectedPeriod : activePeriod,
        activePeriod,
        activeEntities : LS.getDashboardState(companyId)?.activeEntities || {},
        activeDates    : LS.getDashboardState(companyId)?.activeDates    || {},

        _isMounted     : true,
        loading        : false,
        errors         : {}
      };
      
      dispatch(actionsCompany.setCompanyId(companyId));
      dispatch(actionsDashboard.setInitial(initialState));
    }
  }, [isMounted]);


  return companyId
    ? COMPANIES_CONFIG[companyId].dashboard
    : <DashboardBody_demo_pecar />
});
