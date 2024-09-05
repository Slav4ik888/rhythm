import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LS } from 'shared/lib/local-storage';
import { Errors } from 'shared/lib/validators';
import { DashboardData, DashboardPeriod, DashboardPeriodType, StateSchemaDashboard } from '../types';
import { getPayloadError as getError } from 'shared/lib/errors';
import { getData, ResGetData } from 'features/dashboard';



const initialState: StateSchemaDashboard = {
  weekData    : LS.getDashboardData()?.weekData    || [],
  monthData   : LS.getDashboardData()?.monthData   || [],
  
  period: LS.getDashboardData()?.period || {
    type     : DashboardPeriodType.NINE_MONTHS,
    prevType : DashboardPeriodType.NINE_MONTHS,
    start    : 0,
    end      : 0
  },
  lastUpdated : LS.getDashboardData()?.lastUpdated || 0, // Дата последнего обновления

  loading     : false,
  errors      : {}
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
    setDatePeriod: (state, { payload }: { payload: Partial<DashboardPeriod> }) => {
      if (payload.type) state.period.prevType = state.period.type
      
      state.period = {
        ...state.period,
        ...payload
      };

      LS.setDashboardData({
        ...state,
        period: {
          ...state.period,
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
