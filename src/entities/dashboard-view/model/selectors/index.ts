import { StateSchema } from 'app/providers/store';
import { CardItem, CardItemId, ItemStylesField } from '../types';
import { DashboardViewEntities, StateSchemaDashboardView } from '../slice/state-schema';
import { getChildren, getParents } from '../utils';
import { createSelector } from '@reduxjs/toolkit';


export const selectModule       = createSelector([(state: StateSchema) => state.dashboardView || {} as StateSchemaDashboardView], (state: StateSchemaDashboardView) => state);

export const selectLoading      = createSelector(selectModule, (state: StateSchemaDashboardView) => state.loading);
export const selectErrors       = createSelector(selectModule, (state: StateSchemaDashboardView) => state.errors);
export const selectIsMounted    = createSelector(selectModule, (state: StateSchemaDashboardView) => state._isMounted);

export const selectEditMode     = createSelector(selectModule, (state: StateSchemaDashboardView) => state.editMode);
export const selectEntities     = createSelector(selectModule, (state: StateSchemaDashboardView) => state.entities || {});

export const selectSelectedId   = createSelector(selectModule, (state: StateSchemaDashboardView) => state.selectedId);
export const selectSelectedItem = createSelector(selectEntities, selectSelectedId,
  (entities: DashboardViewEntities, selectedId: string) => entities[selectedId] || {});

export const selectNewStoredCard  = createSelector(selectModule, (state: StateSchemaDashboardView) => state.newStoredCard);
export const selectPrevStoredCard = createSelector(selectModule, (state: StateSchemaDashboardView) => state.prevStoredCard);

export const selectCardItems = createSelector(selectEntities,
  (entities: DashboardViewEntities) => Object.values(entities));

/** Returns object ParentsCardItems { [parentId: string]: CardItem[] } */
export const selectParentsCardItems = createSelector(selectCardItems, (items: CardItem[]) => getParents(items));

/** Parent`s children by parentId  */
export const makeSelectChildrenCardItems = (parentId?: CardItemId) => createSelector(
  [selectCardItems, selectSelectedId],
  (items: CardItem[], selectedId: string) => getChildren(items, parentId || selectedId)
);

export const selectCardItemById = createSelector(selectEntities, selectSelectedId,
  (entities: DashboardViewEntities, selectedId: string) => entities[selectedId] || {});

export const selectCardItemStyle = createSelector(selectEntities, selectSelectedId,
  (entities: DashboardViewEntities, selectedId: string) => entities[selectedId]?.styles || {});

export const makeSelectStyleByField = (field: ItemStylesField) => createSelector(
  [selectEntities, selectSelectedId],
  (entities: DashboardViewEntities, selectedId: string) => 
    entities[selectedId]?.styles?.[field]
);

export const selectActivatedMovementId = createSelector(selectModule, (state: StateSchemaDashboardView) => state.activatedMovementId);
  