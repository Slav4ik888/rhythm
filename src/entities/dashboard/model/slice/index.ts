import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LS } from 'shared/lib/local-storage';
import { Errors } from 'shared/lib/validators';
import { DashboardPeriod, StateSchemaDashboard } from '../types';
import { getPayloadError as getError } from 'shared/lib/errors';
import { getData, PayloadGetData } from 'features/dashboard';
import { DashboardPeriodType } from '../config';
import { getFilteredDataByPeriod, getFilteredDatesByPeriod } from '../utils';
import {  } from 'features/dashboard/get-data/model/types';


// TODO: validate dates data (проверить даты на упорядоченность и на то, что дата, является датой)


const emptyPeriod: DashboardPeriod = {
  type     : DashboardPeriodType.NINE_MONTHS,
  prevType : DashboardPeriodType.NINE_MONTHS,
  start    : undefined,
  end      : undefined
};


const weekData     = LS.getDashboardData()?.weekData     || [];
const monthData    = LS.getDashboardData()?.weekData     || [];
const activePeriod = LS.getDashboardData()?.activePeriod || { ...emptyPeriod };
  

const initialState: StateSchemaDashboard = {
  weekData,
  monthData,
  lastUpdated              : LS.getDashboardData()?.lastUpdated || undefined, // Дата последнего обновления
  
  selectedPeriod           : activePeriod,
  activePeriod,

  filteredWeekDatesColumn  : getFilteredDatesByPeriod(weekData, activePeriod),
  filteredWeekData         : getFilteredDataByPeriod(weekData, activePeriod),
  filteredMonthDatesColumn : getFilteredDatesByPeriod(monthData, activePeriod),
  filteredMonthData        : getFilteredDataByPeriod(monthData, activePeriod),

  loading                  : false,
  errors                   : {}
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

      state.filteredWeekDatesColumn  = getFilteredDatesByPeriod(state.weekData, payload),
      state.filteredWeekData         = getFilteredDataByPeriod(state.weekData, payload),
      state.filteredMonthDatesColumn = getFilteredDatesByPeriod(state.monthData, payload),
      state.filteredMonthData        = getFilteredDataByPeriod(state.monthData, payload),
    
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
      .addCase(getData.fulfilled, (state, { payload }: PayloadAction<PayloadGetData>) => {
        const { startEntities = {}, startDates = {} } = payload;

        state.startEntities = startEntities;
        state.startDates    = startDates;
        state.lastUpdated = new Date().getTime();

        state.filteredWeekDatesColumn  = getFilteredDatesByPeriod(weekData, state.activePeriod),
        state.filteredWeekData         = getFilteredDataByPeriod(weekData, state.activePeriod),
        state.filteredMonthDatesColumn = getFilteredDatesByPeriod(monthData, state.activePeriod),
        state.filteredMonthData        = getFilteredDataByPeriod(monthData, state.activePeriod),
          
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
