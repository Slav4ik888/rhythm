import { StateSchema } from 'app/providers/store';
import { StateSchemaCompany } from '../slice/state-schema';


export const selectModule      = (state: StateSchema) => state.company || {} as StateSchemaCompany;
export const selectCompanyData = (state: StateSchema) => selectModule(state).companyData;

export const selectLoading   = (state: StateSchema) => selectModule(state).loading;
export const selectErrors    = (state: StateSchema) => selectModule(state).errors;
