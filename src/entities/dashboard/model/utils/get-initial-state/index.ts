import { LS } from 'shared/lib/local-storage';
import { DashboardPeriodType } from '../../config';
import { DashboardPeriod, StateSchemaDashboard } from '../../types';



/** Returns initialState из данных сохранённых в LS by companyId */
export const getInitialState = (): StateSchemaDashboard => {
  const emptyPeriod: DashboardPeriod = {
    type  : DashboardPeriodType.NINE_MONTHS,
    start : undefined,
    end   : undefined
  };

  const activePeriod = LS.getDashboardState().activePeriod || { ...emptyPeriod };
  
  const initialState: StateSchemaDashboard = {
    startEntities  : LS.getDashboardState().startEntities  || {},
    startDates     : LS.getDashboardState().startDates     || {},
    lastUpdated    : LS.getDashboardState().lastUpdated    || undefined, // Дата последнего обновления
    
    selectedPeriod : activePeriod,
    activePeriod,
    activeEntities : LS.getDashboardState().activeEntities || {},
    activeDates    : LS.getDashboardState().activeDates    || {},

    _isMounted     : true,
    loading        : false,
    errors         : {}
  };

  return initialState;
}
