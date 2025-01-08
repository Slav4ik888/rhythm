import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { StateSchemaDashboardData, DashboardDataEntities } from '../slice/state-schema';



export const selectModule         = createSelector([(state: StateSchema) => state.dashboardData || {} as StateSchemaDashboardData], (state: StateSchemaDashboardData) => state);

export const selectLoading        = createSelector(selectModule, (state: StateSchemaDashboardData) => state.loading);
export const selectErrors         = createSelector(selectModule, (state: StateSchemaDashboardData) => state.errors);
export const selectIsMounted      = createSelector(selectModule, (state: StateSchemaDashboardData) => state._isMounted);

export const selectStartEntities  = createSelector(selectModule, (state: StateSchemaDashboardData) => state.startEntities || {});
export const selectStartDates     = createSelector(selectModule, (state: StateSchemaDashboardData) => state.startDates || {});

/** Returns sorted list of all kods */
export const selectKods = createSelector(selectStartEntities, (startEntities: DashboardDataEntities) => {
  return Object.values(startEntities).map(entity => entity.kod).sort()
});
  
export const selectLastUpdated    = createSelector(selectModule, (state: StateSchemaDashboardData) => state.lastUpdated);


export const selectActivePeriod   = createSelector(selectModule, (state: StateSchemaDashboardData) => state.activePeriod || {});
export const selectSelectedPeriod = createSelector(selectModule, (state: StateSchemaDashboardData) => state.selectedPeriod || {});

export const selectActiveEntities = createSelector(selectModule, (state: StateSchemaDashboardData) => state.activeEntities || {});
export const selectActiveDates    = createSelector(selectModule, (state: StateSchemaDashboardData) => state.activeDates || {});
