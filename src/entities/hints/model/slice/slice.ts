import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HINTS } from '../../constants';
import { Errors } from 'shared/lib/validators';
import { StateSchemaHints } from './state-schema';
import { updateEntities } from 'entities/base';



const initialState: StateSchemaHints = {
  loading  : false,
  errors   : {},
  activeId : undefined,
  entities : updateEntities({}, HINTS),
};


export const slice = createSlice({
  name: 'entities/hints',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setErrors: (state, { payload }: PayloadAction<Errors>) => {
      state.errors = payload;
    },
    clearErrors: (state) => {
      state.errors = {};
    },
    setIsShown: (state, { payload }: PayloadAction<string>) => {
      state.entities[payload].isShown = true;
    },
  },
})

export const { actions, reducer } = slice;
