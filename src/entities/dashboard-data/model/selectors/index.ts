import { StateSchema } from 'app/providers/store';
import { StateSchemaDashboardData } from '../slice/state-schema';



export const selectModule            = (state: StateSchema) => state.dashboardData || {} as StateSchemaDashboardData;

export const selectLoading           = (state: StateSchema) => selectModule(state).loading;
export const selectErrors            = (state: StateSchema) => selectModule(state).errors;
export const selectIsMounted         = (state: StateSchema) => selectModule(state)._isMounted;

export const selectStartEntities     = (state: StateSchema) => selectModule(state).startEntities || {};
export const selectStartDates        = (state: StateSchema) => selectModule(state).startDates || {};
export const selectLastUpdated       = (state: StateSchema) => selectModule(state).lastUpdated;

export const selectActivePeriod      = (state: StateSchema) => selectModule(state).activePeriod || {};
export const selectSelectedPeriod    = (state: StateSchema) => selectModule(state).selectedPeriod || {};

export const selectActiveEntities    = (state: StateSchema) => selectModule(state).activeEntities || {};
export const selectActiveDates       = (state: StateSchema) => selectModule(state).activeDates || {};
