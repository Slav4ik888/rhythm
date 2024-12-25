import { StateSchema } from 'app/providers/store';
import { CardItemId, ItemStylesField } from 'entities/card-item';
import { StateSchemaDashboard } from '../slice/state-schema';
import { getChildren, getParents } from '../utils';


export const selectModule            = (state: StateSchema) => state.dashboard || {} as StateSchemaDashboard;

export const selectLoading           = (state: StateSchema) => selectModule(state).loading;
export const selectErrors            = (state: StateSchema) => selectModule(state).errors;
export const selectIsMounted         = (state: StateSchema) => selectModule(state)._isMounted;

// View
export const selectEditMode          = (state: StateSchema) => selectModule(state).editMode;
export const selectSelectedId        = (state: StateSchema) => selectModule(state).selectedId;
export const selectViewEntities      = (state: StateSchema) => selectModule(state).viewEntities || {};
export const selectSelectedItem      = (state: StateSchema) => selectViewEntities(state)[selectSelectedId(state)] || {};

export const selectCardItems         = (state: StateSchema) => Object.values(selectViewEntities(state));
export const selectParentsCardItems  = (state: StateSchema) => getParents(selectCardItems(state));
export const selectChildrenCardItems = (state: StateSchema, parentId: CardItemId) => getChildren(selectCardItems(state), parentId);
export const selectCardItemById      = (state: StateSchema, cardItemId: CardItemId) => selectViewEntities(state)[cardItemId] || {};
export const selectCardItemStyle     = (state: StateSchema, cardItemId: CardItemId) => selectCardItemById(state, cardItemId).styles || {};
export const selectStyleByField      = (state: StateSchema, cardItemId: CardItemId, field: ItemStylesField) => selectCardItemStyle(state, cardItemId)[field];

// Data
export const selectStartEntities     = (state: StateSchema) => selectModule(state).startEntities || {};
export const selectStartDates        = (state: StateSchema) => selectModule(state).startDates || {};
export const selectLastUpdated       = (state: StateSchema) => selectModule(state).lastUpdated;

export const selectActivePeriod      = (state: StateSchema) => selectModule(state).activePeriod || {};
export const selectSelectedPeriod    = (state: StateSchema) => selectModule(state).selectedPeriod || {};

export const selectActiveEntities    = (state: StateSchema) => selectModule(state).activeEntities || {};
export const selectActiveDates       = (state: StateSchema) => selectModule(state).activeDates || {};
