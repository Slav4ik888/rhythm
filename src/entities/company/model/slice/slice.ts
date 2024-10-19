import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Errors } from 'shared/lib/validators';
import { CompanyData } from '../types';
import { getPayloadError as getError } from 'shared/lib/errors';
import { CompanyId, StateSchemaCompany } from 'entities/company';



const initialState: StateSchemaCompany = {
  companyId   : undefined,
  loading     : false,
  errors      : {},
  companyData : {} as CompanyData,
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
    setCompanyId: (state, { payload }: PayloadAction<CompanyId> ) => {
      state.companyId = payload;
    },
    setCompanyData: (state, { payload }: PayloadAction<CompanyData> ) => {
      state.companyData = payload;
    },
  },

  extraReducers: builder => {
    // GET-DATA-FROM-GOOGLE
    // builder
    //   .addCase(getData.pending, (state) => {
    //     state.loading = true;
    //     state.errors = {};
    //   })
    //   .addCase(getData.fulfilled, (state, { payload }: PayloadAction<PayloadGetData>) => {
    //     const { startEntities = {}, startDates = {}, companyId } = payload;
    //     state.startEntities = startEntities;
    //     state.startDates    = startDates;
    //     state.lastUpdated   = new Date().getTime();

    //     const { activeDates, activeEntities } = getEntitiesByPeriod(startEntities, startDates, state.activePeriod);
    //     state.activeEntities = activeEntities;
    //     state.activeDates    = activeDates;

    //     state.loading     = false;
    //     state.errors      = {};

    //     LS.setDashboardState(companyId, state);
    //   })
    //   .addCase(getData.rejected, (state, { payload }) => {
    //     state.errors  = getError(payload);
    //     state.loading = false;
    //   })
  }
})

export const { actions, reducer } = slice;
