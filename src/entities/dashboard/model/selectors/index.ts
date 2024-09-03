import { StateSchema } from 'app/providers/store';
import { StateSchemaDashboard } from '../types';


export const selectModule         = (state: StateSchema) => state.dashboard || {} as StateSchemaDashboard;
export const selectLoading        = (state: StateSchema) => selectModule(state).loading;
export const selectErrors         = (state: StateSchema) => selectModule(state).errors;
export const selectDateEnd        = (state: StateSchema) => selectModule(state).dateEnd;
export const selectDateStart      = (state: StateSchema) => selectModule(state).dateStart;
export const selectLastUpdated    = (state: StateSchema) => selectModule(state).lastUpdated;
export const selectMonthData      = (state: StateSchema) => selectModule(state).monthData;
export const selectWeekData       = (state: StateSchema) => selectModule(state).weekData;
export const selectSelectedPeriod = (state: StateSchema) => selectModule(state).selectedPeriod;
