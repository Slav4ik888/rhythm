import { StateSchema } from 'app/providers/store';
import { DocKey } from '../types';

export const selectModule         = (state: StateSchema) => state.docs;
export const selectLoading        = (state: StateSchema) => selectModule(state).loading;
export const selectErrors         = (state: StateSchema) => selectModule(state).errors;

export const selectDocs           = (state: StateSchema) => selectModule(state).docKeys;
export const selectPolicy         = (state: StateSchema) => selectModule(state).docKeys[DocKey.POLICY];
