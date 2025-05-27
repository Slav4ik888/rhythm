import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { sortingArr } from 'shared/helpers/sorting';
import { StateSchemaDashboardData, DashboardDataEntities } from '../slice/state-schema';



export const selectModule         = createSelector([(state: StateSchema) => state.dashboardData || {} as StateSchemaDashboardData], (state: StateSchemaDashboardData) => state);

export const selectLoading        = createSelector(selectModule, (state: StateSchemaDashboardData) => state.loading);
export const selectErrors         = createSelector(selectModule, (state: StateSchemaDashboardData) => state.errors);
export const selectIsMounted      = createSelector(selectModule, (state: StateSchemaDashboardData) => state._isMounted);

export const selectStartEntities  = createSelector(selectModule, (state: StateSchemaDashboardData) => state.startEntities || {});
export const selectStartDates     = createSelector(selectModule, (state: StateSchemaDashboardData) => state.startDates || {});

/** Returns sorted list of all kods */
export const selectKods = createSelector(selectStartEntities, (startEntities: DashboardDataEntities) => {
  return sortingArr(
    Object.values(startEntities).map(entity => ({
      value   : entity.kod, // value тк в SelectValue используется value
      title   : entity.title,
      company : entity.companyType,
      product : entity.productType,
      period  : entity.periodType,
    })),
    'kod'
  )
});

/** Returns StatisticItem by kod */
export const makeSelectItemByKod = (kod: string | undefined) => createSelector(
  [selectStartEntities],
  (startEntities: DashboardDataEntities) => startEntities[kod || ''] || ''
);

export const selectLastUpdated    = createSelector(selectModule, (state: StateSchemaDashboardData) => state.lastUpdated);


export const selectActivePeriod   = createSelector(selectModule, (state: StateSchemaDashboardData) => state.activePeriod || {});
export const selectSelectedPeriod = createSelector(selectModule, (state: StateSchemaDashboardData) => state.selectedPeriod || {});

export const selectActiveEntities = createSelector(selectModule, (state: StateSchemaDashboardData) => state.activeEntities || {});
export const selectActiveDates    = createSelector(selectModule, (state: StateSchemaDashboardData) => state.activeDates || {});
