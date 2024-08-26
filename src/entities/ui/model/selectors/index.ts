import { StateSchema } from 'app/providers/store';


export const selectModule         = (state: StateSchema) => state.ui;
export const selectLoading        = (state: StateSchema) => selectModule(state).loading;
export const selectPageLoading    = (state: StateSchema) => selectModule(state).pageLoading;

export const selectErrors         = (state: StateSchema) => selectModule(state).errors;
export const selectErrorStatus    = (state: StateSchema) => selectModule(state).errorStatus;

export const selectMessage        = (state: StateSchema) => selectModule(state).message;

export const selectScreenFormats  = (state: StateSchema) => selectModule(state).screenFormats;
export const selectScreenSize     = (state: StateSchema) => selectModule(state).screenSize;

export const selectAcceptedCookie = (state: StateSchema) => selectModule(state).acceptedCookie;
export const selectReplacePath    = (state: StateSchema) => selectModule(state).replacePath;
