import { StateSchema } from 'app/providers/store';
import { StateSchemaDashboard } from '../types';


export const selectModule         = (state: StateSchema) => state.dashboard || {} as StateSchemaDashboard;
export const selectMonthData      = (state: StateSchema) => selectModule(state).monthData;
export const selectWeekData       = (state: StateSchema) => selectModule(state).weekData;
export const selectLastUpdated    = (state: StateSchema) => selectModule(state).lastUpdated;

export const selectActivePeriod   = (state: StateSchema) => selectModule(state).activePeriod || {};
export const selectSelectedPeriod = (state: StateSchema) => selectModule(state).selectedPeriod || {};

export const selectLoading        = (state: StateSchema) => selectModule(state).loading;
export const selectErrors         = (state: StateSchema) => selectModule(state).errors;
