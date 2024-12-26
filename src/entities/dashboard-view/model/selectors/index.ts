import { StateSchema } from 'app/providers/store';
import { CardItemId, ItemStylesField } from '../types';
import { StateSchemaDashboardView } from '../slice/state-schema';
import { getChildren, getParents } from '../utils';


export const selectModule            = (state: StateSchema) => state.dashboardView || {} as StateSchemaDashboardView;

export const selectLoading           = (state: StateSchema) => selectModule(state).loading;
export const selectErrors            = (state: StateSchema) => selectModule(state).errors;
export const selectIsMounted         = (state: StateSchema) => selectModule(state)._isMounted;

export const selectEditMode          = (state: StateSchema) => selectModule(state).editMode;
export const selectSelectedId        = (state: StateSchema) => selectModule(state).selectedId;
export const selectEntities          = (state: StateSchema) => selectModule(state).entities || {};
export const selectSelectedItem      = (state: StateSchema) => selectEntities(state)[selectSelectedId(state)] || {};

export const selectCardItems         = (state: StateSchema) => Object.values(selectEntities(state));
export const selectParentsCardItems  = (state: StateSchema) => getParents(selectCardItems(state));
export const selectChildrenCardItems = (state: StateSchema, parentId: CardItemId) => getChildren(selectCardItems(state), parentId);
export const selectCardItemById      = (state: StateSchema, cardItemId: CardItemId) => selectEntities(state)[cardItemId] || {};
export const selectCardItemStyle     = (state: StateSchema, cardItemId: CardItemId) => selectCardItemById(state, cardItemId).styles || {};
export const selectStyleByField      = (state: StateSchema, cardItemId: CardItemId, field: ItemStylesField) => selectCardItemStyle(state, cardItemId)[field];