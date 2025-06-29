import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Errors } from 'shared/lib/validators';
import { getPayloadError as getError } from 'shared/lib/errors';
import { StateSchemaDashboardTemplates } from './state-schema';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { ViewItemId } from 'entities/dashboard-view';
import { ResGetTemplates, getTemplates } from '../services';
import { updateEntities } from 'entities/base';
import { SetOpened } from './types';
import { Template } from '../types';
import { UpdateTemplate, updateTemplate } from 'shared/api/features/dashboard-templates';
import { LS } from 'shared/lib/local-storage';



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
      .addCase(getTemplates.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(getTemplates.fulfilled, (state, { payload }: PayloadAction<ResGetTemplates>) => {
        const { templates, bunchUpdated } = payload;

        state.entities = updateEntities(state.entities, templates);
        state.loading  = false;
        state.errors   = {};

        LS.setDashboardTemplatesBunchUpdated(bunchUpdated);
      })
      .addCase(getTemplates.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
    // UPDATE TEMPLATE
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder
      .addCase(updateTemplate.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(updateTemplate.fulfilled, (state, { payload }: PayloadAction<UpdateTemplate>) => {
        const { template, bunchUpdatedMs } = payload;

        state.entities = updateEntities(state.entities, [template]);
        state.loading  = false;
        state.errors   = {};

        LS.setDashboardTemplatesBunchUpdated({
          ...LS.getDashboardTemplatesBunchUpdated(),
          [template.bunchId || '1']: bunchUpdatedMs
        });
      })
      .addCase(updateTemplate.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
  }
})

export const { actions, reducer } = slice;
