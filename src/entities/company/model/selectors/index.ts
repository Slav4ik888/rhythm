import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { getChanges } from 'shared/helpers/objects';
import { StateSchemaCompany as SSC } from '../slice/state-schema';
import { Company, ParamsCompany } from '../types';


export const selectModule = createSelector([(state: StateSchema) => state.company || {} as SSC], (state: SSC) => state);
export const selectLoading = createSelector(selectModule, (state: SSC) => state.loading);
export const selectErrors  = createSelector(selectModule, (state: SSC) => state.errors);
export const selectIsParamsCompanyIdLoaded = createSelector(selectModule, (state: SSC) =>
  state._isParamsCompanyIdLoaded);

export const selectCompany       = createSelector(selectModule, (state: SSC) => state.company || {});
export const selectStoredCompany = createSelector(selectModule, (state: SSC) => state.storedCompany);
export const selectParamsCompany = createSelector(selectModule, (state: SSC) => state.paramsCompany);
export const selectParamsCustomSettings = createSelector(selectParamsCompany, (paramsCompany: ParamsCompany) =>
  paramsCompany?.customSettings || {});
// export const selectCustomSettings = createSelector(selectCompany, (company: Company) => company?.customSettings || {});

// Возвращает объект с изменившимися полями
export const selectParamsChangedCompany = createSelector(selectModule, (state: SSC) =>
  getChanges(state.storedCompany, state.paramsCompany));
// export const selectChangedCompany = createSelector(selectModule, (state: SSC) =>
//   getChanges(state.storedCompany, state.company));
