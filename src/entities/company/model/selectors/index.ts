import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { getChanges } from 'shared/helpers/objects';
import { StateSchemaCompany } from '../slice/state-schema';
import { Company } from '../types';


export const selectModule         = createSelector([(state: StateSchema) => state.company || {} as StateSchemaCompany], (state: StateSchemaCompany) => state);
export const selectLoading        = createSelector(selectModule, (state: StateSchemaCompany) => state.loading);
export const selectErrors         = createSelector(selectModule, (state: StateSchemaCompany) => state.errors);

export const selectCompany        = createSelector(selectModule, (state: StateSchemaCompany) => state.company || {});
export const selectStoredCompany  = createSelector(selectModule, (state: StateSchemaCompany) => state.storedCompany);
export const selectCustomSettings = createSelector(selectCompany, (company: Company) => company?.customSettings || {});

// Возвращает объект с изменившимися полями
export const selectChangedCompany = createSelector(selectModule, (state: StateSchemaCompany) =>
  getChanges(state.storedCompany, state.company));
