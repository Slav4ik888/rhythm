import { ActivatedCompanyId } from 'entities/company';
import { LS } from 'shared/lib/local-storage';
import { DashboardPeriodType } from '../../config';
import { StateSchemaDashboard } from '../../slice/state-schema';
import { DashboardPeriod } from '../../types';



/** Returns initialState из данных сохранённых в LS by companyId */
export const getInitialState = (companyId: ActivatedCompanyId): StateSchemaDashboard => {
  const emptyPeriod: DashboardPeriod = {
    type  : DashboardPeriodType.NINE_MONTHS,
    start : undefined,
    end   : undefined
  };

  const activePeriod = LS.getDashboardState(companyId).activePeriod || { ...emptyPeriod };
  
  const initialState: StateSchemaDashboard = {
    loading        : false,
    errors         : {},
    _isMounted     : true,

    // View
    editMode       : false,
    viewEntities   : LS.getDashboardView(companyId) || {},
    
    startEntities  : LS.getDashboardState(companyId).startEntities  || {},
    startDates     : LS.getDashboardState(companyId).startDates     || {},
    lastUpdated    : LS.getDashboardState(companyId).lastUpdated    || undefined, // Дата последнего обновления
    
    selectedPeriod : activePeriod,
    activePeriod,
    activeEntities : LS.getDashboardState(companyId).activeEntities || {},
    activeDates    : LS.getDashboardState(companyId).activeDates    || {},
  };

  return initialState;
}
