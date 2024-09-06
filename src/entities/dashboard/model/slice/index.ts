import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LS } from 'shared/lib/local-storage';
import { Errors } from 'shared/lib/validators';
import { DashboardPeriod, StateSchemaDashboard } from '../types';
import { getPayloadError as getError } from 'shared/lib/errors';
import { getData, ResGetData } from 'features/dashboard';
import { DashboardPeriodType } from '../config';



const emptyPeriod: DashboardPeriod = {
  type     : DashboardPeriodType.NINE_MONTHS,
  prevType : DashboardPeriodType.NINE_MONTHS,
  start    : undefined,
  end      : undefined
};

  
const initialState: StateSchemaDashboard = {
  weekData       : LS.getDashboardData()?.weekData    || [],
  monthData      : LS.getDashboardData()?.monthData   || [],
  lastUpdated    : LS.getDashboardData()?.lastUpdated || undefined, // Дата последнего обновления
  
  activePeriod   : LS.getDashboardData()?.activePeriod || { ...emptyPeriod },
  selectedPeriod : LS.getDashboardData()?.activePeriod || { ...emptyPeriod },

  loading        : false,
  errors         : {}
};


export const slice = createSlice({
  name: 'entities/dashboard',
  initialState,
  reducers: {
    setErrors: (state, { payload }: PayloadAction<Errors>) => {
      state.errors = getError(payload);
    },
    clearErrors: (state) => {
      state.errors = {};
    },
    setActivePeriod: (state, { payload }: { payload: DashboardPeriod }) => {
      if (payload.type) state.activePeriod.prevType = state.activePeriod.type
      
      state.activePeriod = {
        ...state.activePeriod,
        ...payload
      };

      LS.setDashboardData({
        ...state,
        activePeriod: {
          ...payload
        }
      });
    },
    setSelectedPeriod: (state, { payload }: { payload: Partial<DashboardPeriod> }) => {
      if (payload.type) state.selectedPeriod.prevType = state.selectedPeriod.type
      
      state.selectedPeriod = {
        ...state.selectedPeriod,
        ...payload
      };

      LS.setDashboardData({
        ...state,
        selectedPeriod: {
          ...state.selectedPeriod,
          ...payload
        }
      });
    }
  },

  extraReducers: builder => {
    // GET-DATA-FROM-GOOGLE
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(getData.fulfilled, (state, { payload }: PayloadAction<ResGetData>) => {
        const { weekData = [], monthData = [] } = payload;

        state.weekData    = weekData;
        state.monthData   = monthData;
        state.lastUpdated = new Date().getTime();

        state.loading     = false;
        state.errors      = {};

        LS.setDashboardData({
          ...state,
          weekData,
          monthData
        });
      })
      .addCase(getData.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
  }
})

export const { actions, reducer } = slice;
