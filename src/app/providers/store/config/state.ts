import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';
import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchemaUI } from 'entities/ui';
import { StateSchemaDashboardData } from 'entities/dashboard-data';
import { StateSchemaCompany } from 'entities/company';
import { StateSchemaUser } from 'entities/user';
import { StateSchemaSignupPage } from 'pages/signup';
import { StateSchemaLoginPage } from 'pages/login';
import { StateSchemaDocs } from 'entities/docs';
// import { StateSchemaTransactions } from 'entities/transactions';
import { StateSchemaDashboardView } from 'entities/dashboard-view';



export interface StateSchema {
  // Entities
  ui           : StateSchemaUI
  user         : StateSchemaUser
  company      : StateSchemaCompany
  // transactions : StateSchemaTransactions

  // Features

  // Async reducer
  signupPage?    : StateSchemaSignupPage
  loginPage?     : StateSchemaLoginPage
  dashboardView? : StateSchemaDashboardView
  dashboardData? : StateSchemaDashboardData
  docs?          : StateSchemaDocs
};


// export const selectProps = (_: StateSchema, props: any) => props;
export const selectState = (state: StateSchema) => state;


export type StateKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateKey, boolean> // True - mounted, false - not mounted

export interface ReducerManager {
  getReducerMap      : () => ReducersMapObject<StateSchema>
  reduce             : (state: StateSchema, action: Action) => any // CombinedState<StateSchema>
  add                : (key: StateKey, reducer: Reducer) => void
  remove             : (key: StateKey) => void
  getMountedReducers : () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api       : AxiosInstance
  navigate? : (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue : T
  extra       : ThunkExtraArg
  state       : StateSchema
}
