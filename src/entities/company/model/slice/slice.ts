import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Errors } from 'shared/lib/validators';
import { Company, CustomSettings } from '../types';
import { getPayloadError as getError } from 'shared/lib/errors';
import { StateSchemaCompany } from './state-schema';
import { updateCompany } from 'features/company';
import { updateObject } from 'shared/helpers/objects';
import { LS } from 'shared/lib/local-storage';
import { SetCompany } from './types';



const initialState: StateSchemaCompany = {
  loading       : false,
  errors        : {},
  company       : {} as Company,
  storedCompany : undefined,
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
    setCompany: (state, { payload }: PayloadAction<SetCompany>) => {
      state.company       = payload.company;
      state.storedCompany = payload.company;
      LS.setCompanyState(payload.companyId, state);
      LS.setLastCompanyId(payload.companyId);
    },
    updateCustomSettings: (state, { payload }: PayloadAction<Partial<CustomSettings>>) => {
      if (! state.company.customSettings) state.company.customSettings = {};
      state.company.customSettings = updateObject(state.company.customSettings, payload);
    },
    cancelCustomSettings: (state) => {
      if (state.storedCompany) {
        state.company = { ...state.storedCompany };
        state.storedCompany = undefined;
      }
    }
  },

  extraReducers: builder => {
    // COMPANY-UPDATE
    builder
      .addCase(updateCompany.pending, (state) => {
        state.loading = true;
        state.errors = {};
      })
      .addCase(updateCompany.fulfilled, (state, { payload }: PayloadAction<Partial<Company>>) => {
        state.company       = updateObject(state.company, payload);
        state.storedCompany = state.company;
        state.loading       = false;
        state.errors        = {};
      })
      .addCase(updateCompany.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
  }
})

export const { actions, reducer } = slice;
