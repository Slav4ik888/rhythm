import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Errors } from 'shared/lib/validators';
import { getPayloadError as getError } from 'shared/lib/errors';
import { StateSchemaDashboardTemplates } from './state-schema';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { ViewItemId } from 'entities/dashboard-view';
import { ResGetTemplates, getBunchesTemplates } from '../services';
import { updateEntities } from 'entities/base';
import { SetOpened } from './types';
import { Template } from '../types';



const initialState: StateSchemaDashboardTemplates = {
  loading               : false,
  errors                : {},
  _isMounted            : false,

  entities              : {},
  opened                : false,
  selectedId            : '',
};


export const slice = createSlice({
  name: 'entities/dashboardTemplates',
  initialState,
  reducers: {
    setInitial: (state, { payload }: PayloadAction<StateSchemaDashboardTemplates>) => {
      state.entities   = payload.entities || {};
      state.selectedId = payload.selectedId;
      state.loading    = payload.loading;
      state.errors     = payload.errors;
    },
    setIsMounted: (state) => {
      state._isMounted = true;
    },
    setErrors: (state, { payload }: PayloadAction<Errors>) => {
      state.errors = getError(payload);
    },
    clearErrors: (state) => {
      state.errors = {};
    },
    setOpened: (state, { payload }: PayloadAction<SetOpened>) => {
      state.opened     = payload.opened;
      state.selectedId = payload.selectedId || '';
    },
    setSelectedId: (state, { payload }: PayloadAction<ViewItemId>) => {
      state.selectedId = payload;
    },
    setTemplate:  (state, { payload }: PayloadAction<Template>) => {
      state.entities = updateEntities(state.entities, [payload]);
    },
    // TODO: setDashboardTemplatesFromCache
  },


  extraReducers: builder => {
    // GET-BUNCHES []
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder
      .addCase(getBunchesTemplates.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(getBunchesTemplates.fulfilled, (state, { payload }: PayloadAction<ResGetTemplates>) => {
        const { templates } = payload;

        state.entities = updateEntities(state.entities, templates);
        state.loading  = false;
        state.errors   = {};
      })
      .addCase(getBunchesTemplates.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
    // ADD-GROUP-NEW-ITEMS
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    // builder
    //   .addCase(createGroupViewItems.pending, (state) => {
    //     state.loading = true;
    //     state.errors  = {};
    //   })
    //   .addCase(createGroupViewItems.fulfilled, (state, { payload }: PayloadAction<CreateGroupViewItems>) => {
    //     const { viewItems, companyId, bunchUpdatedMs } = payload;

    //     state.entities            = updateEntities(state.entities, viewItems);
    //     state.loading             = false;
    //     state.errors              = {};
    //   })
    //   .addCase(createGroupViewItems.rejected, (state, { payload }) => {
    //     state.errors  = getError(payload);
    //     state.loading = false;
    //   })
  }
})

export const { actions, reducer } = slice;
