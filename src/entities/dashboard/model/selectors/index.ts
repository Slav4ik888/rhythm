import { StateSchema } from 'app/providers/store';
import { StateSchemaDashboard } from '../types';


export const selectModule         = (state: StateSchema) => state.dashboard || {} as StateSchemaDashboard;
export const selectLoading        = (state: StateSchema) => selectModule(state).loading;
export const selectErrors         = (state: StateSchema) => selectModule(state).errors;
export const selectPeriod         = (state: StateSchema) => selectModule(state).period || {};
export const selectDateStart      = (state: StateSchema) => selectPeriod(state).start;
export const selectDateEnd        = (state: StateSchema) => selectPeriod(state).end;
export const selectPeriodType     = (state: StateSchema) => selectPeriod(state).type;
export const selectPeriodPrevType = (state: StateSchema) => selectPeriod(state).prevType;
export const selectLastUpdated    = (state: StateSchema) => selectModule(state).lastUpdated;
export const selectMonthData      = (state: StateSchema) => selectModule(state).monthData;
export const selectWeekData       = (state: StateSchema) => selectModule(state).weekData;
