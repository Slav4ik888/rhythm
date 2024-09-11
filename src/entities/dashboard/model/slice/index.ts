import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LS } from 'shared/lib/local-storage';
import { Errors } from 'shared/lib/validators';
import { DashboardPeriod, StateSchemaDashboard } from '../types';
import { getPayloadError as getError } from 'shared/lib/errors';
import { getData, PayloadGetData } from 'features/dashboard';
import { DashboardPeriodType } from '../config';
import { getEntitiesByPeriod } from '../utils';



// TODO: validate dates data (проверить даты на упорядоченность и на то, что дата, является датой)


const emptyPeriod: DashboardPeriod = {
  type     : DashboardPeriodType.NINE_MONTHS,
  // prevType : DashboardPeriodType.NINE_MONTHS,
  start    : undefined,
  end      : undefined
};


const startEntities  = LS.getDashboardState()?.startEntities  || {};
const startDates     = LS.getDashboardState()?.startDates     || {};
const activePeriod   = LS.getDashboardState()?.activePeriod   || { ...emptyPeriod };
const activeEntities = LS.getDashboardState()?.activeEntities || {};
const activeDates    = LS.getDashboardState()?.activeDates    || {};


const initialState: StateSchemaDashboard = {
  startEntities,
  startDates,
  lastUpdated              : LS.getDashboardState()?.lastUpdated || undefined, // Дата последнего обновления
  
  selectedPeriod           : activePeriod,
  activePeriod,
  activeEntities,
  activeDates,

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
      // if (payload.type) state.activePeriod.prevType = state.activePeriod.type
      
      state.activePeriod = {
        ...state.activePeriod,
        ...payload
      };

      const { activeDates, activeEntities } = getEntitiesByPeriod(state.startEntities, state.startDates, state.activePeriod);
      state.activeEntities = activeEntities;
      state.activeDates    = activeDates;

      LS.setDashboardState({
        ...state,
        activeEntities,
        activeDates,
        activePeriod: {
          ...payload
        }
      });
    },
    setSelectedPeriod: (state, { payload }: { payload: Partial<DashboardPeriod> }) => {
      // if (payload.type) state.selectedPeriod.prevType = state.selectedPeriod.type
      
      state.selectedPeriod = {
        ...state.selectedPeriod,
        ...payload
      };

      LS.setDashboardState({
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
        state.lastUpdated   = new Date().getTime();

        const { activeDates, activeEntities } = getEntitiesByPeriod(startEntities, startDates, state.activePeriod);
        state.activeEntities = activeEntities;
        state.activeDates    = activeDates;

        state.loading     = false;
        state.errors      = {};

        LS.setDashboardState({
          ...state,
          startEntities,
          startDates,
          activeEntities,
          activeDates,
        });
      })
      .addCase(getData.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
  }
})

export const { actions, reducer } = slice;
