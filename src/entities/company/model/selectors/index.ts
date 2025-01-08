import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { StateSchemaCompany } from '../slice/state-schema';


export const selectModule  = createSelector([(state: StateSchema) => state.company || {} as StateSchemaCompany], (state: StateSchemaCompany) => state);
export const selectCompany = createSelector(selectModule, (state: StateSchemaCompany) => state.company);

export const selectLoading = createSelector(selectModule, (state: StateSchemaCompany) => state.loading);
export const selectErrors  = createSelector(selectModule, (state: StateSchemaCompany) => state.errors);
