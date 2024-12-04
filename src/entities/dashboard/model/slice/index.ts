import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LS } from 'shared/lib/local-storage';
import { Errors } from 'shared/lib/validators';
import { DashboardPeriod } from '../types';
import { getPayloadError as getError } from 'shared/lib/errors';
import { DashboardPeriodType } from '../config';
import { getEntitiesByPeriod } from '../utils';
import { StateSchemaDashboard } from './state-schema';
import { ActivatedCompanyId } from 'entities/company';
import { ResGetGoogleData, calculateStartDate, getData } from 'features/dashboard';
import { SetActivePeriod, SetSelectedPeriod } from './types';



// TODO: validate dates data (проверить даты на упорядоченность и на то, что дата, является датой)

const emptyPeriod: DashboardPeriod = {
  type  : DashboardPeriodType.NINE_MONTHS,
  start : undefined,
  end   : undefined, //new Date().getTime()
};


const initialState: StateSchemaDashboard = {
  startEntities  : {},
  startDates     : {},
  lastUpdated    : undefined,
  
  selectedPeriod : { ...emptyPeriod },
  activePeriod   : { ...emptyPeriod },
  activeEntities : {},
  activeDates    : {},

  // _isMounted     : false,
  loading        : false,
  errors         : {}
};


export const slice = createSlice({
  name: 'entities/dashboard',
  initialState,
  reducers: {
    setInitial: (state, { payload }: PayloadAction<StateSchemaDashboard>) => {
      state.startEntities  = payload.startEntities;
      state.startDates     = payload.startDates;
      state.lastUpdated    = payload.lastUpdated;
      
      state.selectedPeriod = payload.selectedPeriod;
      state.activePeriod   = payload.activePeriod;
      state.activeEntities = payload.activeEntities;
      state.activeDates    = payload.activeDates;

      state.loading        = payload.loading;
      state.errors         = payload.errors;
    },
    setErrors: (state, { payload }: PayloadAction<Errors>) => {
      state.errors = getError(payload);
    },
    clearErrors: (state) => {
      state.errors = {};
    },
    setActivePeriod: (state, { payload }: PayloadAction<SetActivePeriod>) => {
      state.activePeriod = {
        ...state.activePeriod,
        ...payload.period
      };

      const { activeDates, activeEntities } = getEntitiesByPeriod(state.startEntities, state.startDates, state.activePeriod);
      state.activeEntities = activeEntities;
      state.activeDates    = activeDates;

      // Save state to local storage
      LS.setDashboardState(payload.companyId, state);
    },
    setSelectedPeriod: (state, { payload }: PayloadAction<SetSelectedPeriod>) => {
      const calcedStartDate = calculateStartDate(state.selectedPeriod.end, payload.period.type || state.selectedPeriod.type || DashboardPeriodType.NINE_MONTHS);

      state.activePeriod = {
        ...state.activePeriod,
        ...payload.period,
        start: calcedStartDate
      };

      state.selectedPeriod = {
        ...state.selectedPeriod,
        ...payload.period,
        start: calcedStartDate
      };

      const { activeDates, activeEntities } = getEntitiesByPeriod(state.startEntities, state.startDates, state.activePeriod);
      state.activeEntities = activeEntities;
      state.activeDates    = activeDates;
      
      // Save state to local storage
      // Тк при первом запуске setSelectedPeriod вызывается автоматически, поэтому нужно НЕ затереть имеющиеся данные
      // TODO: перепроверить, возможно это уже надо убрать
      const oldData = LS.getDashboardState(payload.companyId);
      LS.setDashboardState(
        payload.companyId,
        {
          ...oldData,
          activePeriod   : state.activePeriod,
          selectedPeriod : state.selectedPeriod,
        }
      );
    },
  },

  extraReducers: builder => {
    // GET-DATA-FROM-GOOGLE
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.errors = {};
      })
      .addCase(getData.fulfilled, (state, { payload }: PayloadAction<ResGetGoogleData>) => {
        const { startEntities = {}, startDates = {} } = payload.data;
        state.startEntities = startEntities;
        state.startDates    = startDates;
        state.lastUpdated   = new Date().getTime();

        const { activeDates, activeEntities } = getEntitiesByPeriod(startEntities, startDates, state.activePeriod);
        state.activeEntities = activeEntities;
        state.activeDates    = activeDates;

        state.loading     = false;
        state.errors      = {};

        // Save state to local storage
        LS.setDashboardState(payload.companyId, state);
      })
      .addCase(getData.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
  }
})

export const { actions, reducer } = slice;
