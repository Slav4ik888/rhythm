import { StateSchema } from 'app/providers/store';
import { StateSchemaCompany } from '../slice/state-schema';
import { CompanyId } from '../types';


export const selectModule    = (state: StateSchema) => state.company || {} as StateSchemaCompany;
export const selectCompanyId = (state: StateSchema) => selectModule(state).companyId || CompanyId.OSNOVA;

export const selectLoading   = (state: StateSchema) => selectModule(state).loading;
export const selectErrors    = (state: StateSchema) => selectModule(state).errors;
