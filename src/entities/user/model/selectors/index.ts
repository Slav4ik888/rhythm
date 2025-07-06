import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { StateSchemaUser } from '../slice/state-schema';
import { User } from '../../types';


export const selectModule = createSelector([(state: StateSchema) => state.user || {} as StateSchemaUser],
  (state: StateSchemaUser) => state);


export const selectIsLoaded         = createSelector(selectModule, (state: StateSchemaUser) => state._isLoaded);
export const selectLoading          = createSelector(selectModule, (state: StateSchemaUser) => state.loading);
export const selectErrors           = createSelector(selectModule, (state: StateSchemaUser) => state.errors);
// export const selectIsLoaded         = createSelector(selectModule, (state: StateSchemaUser) => state._isLoaded);

export const selectAuth             = createSelector(selectModule, (state: StateSchemaUser) => state.auth);
export const selectUser = createSelector(
  selectModule,
  (state: StateSchemaUser) => state.user || {} as User
);
export const selectUserId           = createSelector(selectUser, (state: User) => state.id);
export const selectIsEmailVerified  = createSelector(selectUser, (state: User) => state.emailVerified);
export const selectUserEmail        = createSelector(selectUser, (state: User) => state.email);
export const selectCompanyId        = createSelector(selectUser, (state: User) => state.companyId);
export const selectUserRole         = createSelector(selectUser, (state: User) => state.role);
export const selectIsEditAccess     = createSelector(selectUser, (state: User) => Boolean(state.isEditAccess));
