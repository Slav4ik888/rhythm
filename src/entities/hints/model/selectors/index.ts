/* eslint-disable */
import { StateSchema } from 'app/providers/store';
import { StateSchemaHints} from '../slice/state-schema';
import { createSelector } from '@reduxjs/toolkit';



const selectModule          = createSelector([(state: StateSchema) => state.hints || {} as StateSchemaHints], (state: StateSchemaHints) => state);

export const selectLoading  = createSelector(selectModule, (state: StateSchemaHints) => state.loading);
export const selectErrors   = createSelector(selectModule, (state: StateSchemaHints) => state.errors);
export const selectEntities = createSelector(selectModule, (state: StateSchemaHints) => state.entities || {});
export const selectActiveId = createSelector(selectModule, (state: StateSchemaHints) => state.activeId);
