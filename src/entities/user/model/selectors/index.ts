import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { StateSchemaUser, User } from '../types';


export const selectModule           = createSelector([(state: StateSchema) => state.user || {} as StateSchemaUser], (state: StateSchemaUser) => state);

export const selectLoading          = createSelector(selectModule, (state: StateSchemaUser) => state.loading);
export const selectErrors           = createSelector(selectModule, (state: StateSchemaUser) => state.errors);

export const selectAuth             = createSelector(selectModule, (state: StateSchemaUser) => state.auth);
export const selectUser             = createSelector(selectModule, (state: StateSchemaUser) => state.user || {} as User);
export const selectUserId           = createSelector(selectUser, (state: User) => state.id);
export const selectIsEmailVerified  = createSelector(selectUser, (state: User) => state.emailVerified);
export const selectUserEmail        = createSelector(selectUser, (state: User) => state.email);
export const selectCompanyId        = createSelector(selectUser, (state: User) => state.companyId);
export const selectUserRole         = createSelector(selectUser, (state: User) => state.role);
// export const selectIsRoleSuper     = (state: StateSchema) => selectUser(state).role === Role.SUPER;
// export const selectIsNotRoleSuper  = (state: StateSchema) => selectUser(state).role !== Role.SUPER;
// export const selectIsRoleUser      = (state: StateSchema) => selectUserRole(state) === Role.EMPLOYEE;
