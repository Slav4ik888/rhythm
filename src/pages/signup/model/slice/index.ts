import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPayloadError as getError } from 'shared/lib/errors';
import { Errors } from 'shared/lib/validators';
import { signupByLogin } from '../services';
import { StateSchemaSignupPage } from '../types';



const initialState: StateSchemaSignupPage = {
  loading         : false,
  errors          : {}
};


export const slice = createSlice({
  name: 'signupPage',
  initialState,
  reducers: {
    setErrors: (state, { payload }: PayloadAction<Errors>) => {
      state.errors = payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(signupByLogin.pending, (state) => {
        state.errors  = {};
        state.loading = true;
      })
      .addCase(signupByLogin.fulfilled, (state, { payload }) => {
        state.errors  = {};
        state.loading = false;
      })
      .addCase(signupByLogin.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
  }
})

export const { actions, reducer } = slice;
