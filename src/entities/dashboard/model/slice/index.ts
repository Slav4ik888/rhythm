import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LS } from 'shared/lib/local-storage';
import { Errors } from 'shared/lib/validators';
import { DashboardPeriod, StateSchemaDashboard } from '../types';
import { getPayloadError as getError } from 'shared/lib/errors';



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
    // ADD-DOCUMENT
    // builder
    //   .addCase(addDocument.pending, (state) => {
    //     state.loading = true;
    //     state.errors  = {};
    //   })
    //   .addCase(addDocument.fulfilled, (state, { payload }) => {
    //     state.entities[payload.id] = payload;
    //     state.ids     = Object.keys(state.entities);
    //     state.loading = false;
    //     state.errors  = {};
    //   })
    //   .addCase(addDocument.rejected, (state, { payload }) => {
    //     state.errors  = getError(payload);
    //     state.loading = false;
    //   }),

    // GET-DOCUMENT-BY-ID
    // builder
    //   .addCase(getDocumentById.pending, (state) => {
    //     state.loading = true;
    //     state.errors  = {};
    //   })
    //   .addCase(getDocumentById.fulfilled, (state, { payload }) => {
    //     state.activeDocumentId     = payload.id;
    //     state.entities[payload.id] = payload;
    //     state.ids                  = Object.keys(state.entities);
    //     state.loading              = false;
    //     state.errors               = {};
    //   })
    //   .addCase(getDocumentById.rejected, (state, { payload }) => {
    //     state.errors  = getError(payload);
    //     state.loading = false;
    //   })

    
  }
})

export const { actions, reducer } = slice;
