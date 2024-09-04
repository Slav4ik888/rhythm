import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LS } from 'shared/lib/local-storage';
import { Errors } from 'shared/lib/validators';
import { DashboardData, DashboardPeriod, StateSchemaDashboard } from '../types';
import { getPayloadError as getError } from 'shared/lib/errors';
import { getData } from 'features/dashboard';



const initialState: StateSchemaDashboard = {
  weekData       : LS.getDashboardData()?.weekData       || [],
  monthData      : LS.getDashboardData()?.monthData      || [],
  
  selectedPeriod : LS.getDashboardData()?.selectedPeriod || DashboardPeriod.ONE_YEAR,
  dateStart      : LS.getDashboardData()?.dateStart      || 0,
  dateEnd        : LS.getDashboardData()?.dateEnd        || 0,

  lastUpdated    : LS.getDashboardData()?.lastUpdated    || 0, // Дата последнего обновления

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
    setDatePeriod: (state, { payload }: { payload: { selectedPeriod: DashboardPeriod, dateStart: number | undefined, dateEnd: number | undefined } }) => {
      state.selectedPeriod = payload.selectedPeriod;
      state.dateStart      = payload.dateStart;
      state.dateEnd        = payload.dateEnd;

      LS.setDashboardData({
        ...state,
        selectedPeriod : payload.selectedPeriod,
        dateStart      : payload.dateStart,
        dateEnd        : payload.dateEnd
      });
    }
    // For getStartResourseData
    // addDocuments: (state, { payload }: { payload: Document[] }) => {
    //   state.entities = addDocumentsEntities(state.entities, payload);
    //   state.ids      = Object.keys(state.entities);
    //   state.loading  = false;
    //   state.errors   = {};
    // },
    // updateDocument: (state, { payload }: { payload: PartialDocument }) => {
    //   state.entities[payload.id] = {
    //     ...state.entities[payload.id],
    //     ...payload
    //   };
    //   state.loading = false;
    //   state.errors  = {};
    // }
  },

  extraReducers: builder => {
    // GET-DATA-FROM-GOOGLE
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(getData.fulfilled, (state, { payload }: PayloadAction<DashboardData>) => {
        const { weekData = [], monthData = [], selectedPeriod, dateStart, dateEnd, lastUpdated } = payload;

        state.weekData       = weekData;
        state.monthData      = monthData;
        state.selectedPeriod = selectedPeriod;
        state.dateStart      = dateStart;
        state.dateEnd        = dateEnd;
        state.lastUpdated    = lastUpdated;

        state.loading        = false;
        state.errors         = {};

        LS.setDashboardData({
          weekData,
          monthData,
          selectedPeriod,
          dateStart,
          dateEnd,
          lastUpdated
        });
      })
      .addCase(getData.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
  }
})

export const { actions, reducer } = slice;
