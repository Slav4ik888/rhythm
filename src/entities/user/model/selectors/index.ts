import { StateSchema } from 'app/providers/store';
import { Role, StateSchemaUser, User } from '../types';


export const selectModule          = (state: StateSchema) => state.user || {} as StateSchemaUser;
// export const selectIsInit          = (state: StateSchema) => selectModule(state)._isInit;
export const selectLoading         = (state: StateSchema) => selectModule(state).loading;
export const selectErrors          = (state: StateSchema) => selectModule(state).errors;
export const selectAuth            = (state: StateSchema) => selectModule(state).auth;
export const selectUser            = (state: StateSchema) => selectModule(state).user || {} as User;
export const selectUserId          = (state: StateSchema) => selectUser(state).id;
export const selectIsEmailVerified = (state: StateSchema) => selectUser(state).emailVerified;
export const selectUserEmail       = (state: StateSchema) => selectUser(state).email;
export const selectCompanyId       = (state: StateSchema) => selectUser(state).companyId;
export const selectUserRole        = (state: StateSchema) => selectUser(state).role;
// export const selectIsRoleSuper     = (state: StateSchema) => selectUser(state).role === Role.SUPER;
// export const selectIsNotRoleSuper  = (state: StateSchema) => selectUser(state).role !== Role.SUPER;
// export const selectIsRoleUser      = (state: StateSchema) => selectUserRole(state) === Role.EMPLOYEE;
