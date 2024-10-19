import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPayloadError as getError } from 'shared/lib/errors';
import { Errors } from 'shared/lib/validators';
import { signupByEmail } from '../services';
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
      .addCase(signupByEmail.pending, (state) => {
        state.errors  = {};
        state.loading = true;
      })
      .addCase(signupByEmail.fulfilled, (state, { payload }) => {
        state.errors  = {};
        state.loading = false;
      })
      .addCase(signupByEmail.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
  }
})

export const { actions, reducer } = slice;
