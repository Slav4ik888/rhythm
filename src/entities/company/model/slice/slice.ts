import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Errors } from 'shared/lib/validators';
import { Company } from '../types';
import { getPayloadError as getError } from 'shared/lib/errors';
import { StateSchemaCompany } from 'entities/company';
import { updateCompany } from 'features/company';



const initialState: StateSchemaCompany = {
  loading : false,
  errors  : {},
  company : {} as Company,
};


const slice = createSlice({
  name: 'entities/company',
  initialState,
  reducers: {
    setErrors: (state, { payload }: PayloadAction<Errors>) => {
      state.errors = getError(payload);
    },
    clearErrors: (state) => {
      state.errors = {};
    },
    setCompany: (state, { payload }: PayloadAction<Company> ) => {
      state.company = payload;
    },
  },

  extraReducers: builder => {
    // COMPANY-UPDATE
    builder
      .addCase(updateCompany.pending, (state) => {
        state.loading = true;
        state.errors = {};
      })
      .addCase(updateCompany.fulfilled, (state, { payload }: PayloadAction<Partial<Company>>) => {
        state.company = {
          ...state.company,
          ...payload,
        };
        state.loading = false;
        state.errors  = {};
      })
      .addCase(updateCompany.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
  }
})

export const { actions, reducer } = slice;
