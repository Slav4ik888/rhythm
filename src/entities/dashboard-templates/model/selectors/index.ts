/* eslint-disable */
import { StateSchema } from 'app/providers/store';
import { DashboardTemplatesEntities, StateSchemaDashboardTemplates } from '../slice/state-schema';
import { createSelector } from '@reduxjs/toolkit';
import { findTemplateBySelectedId, findViewItemById } from '../utils';



export const selectModule = createSelector([(state: StateSchema) => state.dashboardTemplates || {} as StateSchemaDashboardTemplates],
  (state: StateSchemaDashboardTemplates) => state);

export const selectLoading          = createSelector(selectModule, (state: StateSchemaDashboardTemplates) => state.loading);
export const selectErrors           = createSelector(selectModule, (state: StateSchemaDashboardTemplates) => state.errors);
export const selectIsMounted        = createSelector(selectModule, (state: StateSchemaDashboardTemplates) => state._isMounted);
export const selectBunchesUpdated   = createSelector(selectModule, (state: StateSchemaDashboardTemplates) => state.bunchesUpdated);

export const selectEntities         = createSelector(selectModule, (state: StateSchemaDashboardTemplates) => state.entities || {});
export const selectTemplates        = createSelector(selectEntities, (entities: DashboardTemplatesEntities) => Object.values(entities) || []);

export const selectOpened           = createSelector(selectModule, (state: StateSchemaDashboardTemplates) => state.opened);
export const selectSelectedId       = createSelector(selectModule, (state: StateSchemaDashboardTemplates) => state.selectedId);
export const selectSelectedViewItem = createSelector(
  selectEntities,
  selectSelectedId,
  (entities: DashboardTemplatesEntities, selectedId: string) => findViewItemById(entities, selectedId)
);

export const selectSelectedTemplate = createSelector(
    selectEntities,
    selectSelectedId,
    (entities: DashboardTemplatesEntities, selectedId: string) => findTemplateBySelectedId(entities, selectedId)
);

export const selectViewItems        = createSelector(selectEntities,
  (entities: DashboardTemplatesEntities) => Object.values(entities));
