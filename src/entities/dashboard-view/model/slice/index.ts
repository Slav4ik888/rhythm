import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LS } from 'shared/lib/local-storage';
import { Errors } from 'shared/lib/validators';
import { getPayloadError as getError } from 'shared/lib/errors';
import { ActivatedCopied, StateSchemaDashboardView } from './state-schema';
import { deleteViewItem, DeleteViewItem, UpdateViewItems, updateViewItems } from 'features/dashboard-view';
import {
  SetDashboardViewItems, ChangeSelectedStyle, ChangeOneSettingsField, ChangeOneDatasetsItem,
  ChangeOneChartsItem, SetEditMode
} from './types';
import { updateEntities } from 'entities/base';
import { ViewItemId, ViewItemSettings, ViewItemStyles, PartialViewItem } from '../types';
import { cloneObj, updateObject } from 'shared/helpers/objects';
import { updateChartsItem } from '../utils';
import { ChartConfigDatasets } from 'entities/charts';
import { CreateGroupViewItems, createGroupViewItems } from 'features/dashboard-view/configurator';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { getBunches } from '../services';
import { mergeById } from 'shared/helpers/arrays';



const initialState: StateSchemaDashboardView = {
  loading               : false,
  errors                : {},
  _isMounted            : false,

  editMode              : false,
  entities              : {},

  newSelectedId         : '',
  selectedId            : '',
  bright                : false,
  isUnsaved             : false, // Наличие не сохраненных изменений (в тч customSettings in Company)

  newStoredViewItem     : undefined, // Начальные значения выбранного элемента
  prevStoredViewItem    : undefined, // Начальные значения предыдущего выбранного элемента

  activatedMovementId   : '',        // Активированный Id перемещаемого элемента
  activatedCopied       : undefined, // Активированный Id копируемого элемента
};


export const slice = createSlice({
  name: 'entities/dashboardView',
  initialState,
  reducers: {
    setInitial: (state, { payload }: PayloadAction<StateSchemaDashboardView>) => {
      state.entities           = payload.entities           || {};
      state.selectedId         = payload.selectedId;
      state.bright             = false;
      state.newStoredViewItem  = payload.newStoredViewItem  || undefined;
      state.prevStoredViewItem = payload.prevStoredViewItem || undefined;
      state.editMode           = payload.editMode           || false;
      state.loading            = payload.loading;
      state.errors             = payload.errors;
    },
    // Только для того, чтобы дождаться отрисовки графиков
    setIsMounted: (state) => {
      state._isMounted = true;
    },
    setErrors: (state, { payload }: PayloadAction<Errors>) => {
      state.errors = getError(payload);
    },
    clearErrors: (state) => {
      state.errors = {};
    },

    // При activatedCopied вначале сохраняем сюда, а затем в БД
    setDashboardViewItems: (state, { payload }: PayloadAction<SetDashboardViewItems>) => {
      state.entities            = updateEntities(state.entities, payload.viewItems);
      state.activatedMovementId = '';
      state.activatedCopied     = undefined;
      state.bright              = false;
    },

    // Берём закэшированную версию
    setDashboardBunchesFromCache: (state, { payload }: PayloadAction<string>) => {
      state.entities            = updateEntities({}, LS.getDashboardViewItems(payload));
      state.activatedMovementId = '';
      state.activatedCopied     = undefined;
      state.bright              = false;
    },

    setEditMode: (state, { payload }: PayloadAction<SetEditMode>) => {
      const { editMode, companyId } = payload;
      state.editMode = editMode;
      LS.setDashboardViewEditMode(companyId, editMode);

      if (! editMode) {
        state.selectedId = '';
      }
    },

    /** Вначале newSelectedId а затем по условию из useEffect */
    setNewSelectedId: (state, { payload }: PayloadAction<ViewItemId>) => {
      state.newSelectedId = payload;
    },

    /**
     * Запускается из useEffect
     * Id выбранного элемента (при editMode === true)
     */
    setSelectedId: (state, { payload }: PayloadAction<ViewItemId>) => {
      state.selectedId         = payload;
      state.newSelectedId      = '';
      state.bright             = false;
      state.prevStoredViewItem = state.newStoredViewItem;
      state.newStoredViewItem  = state.entities[payload] || {};
    },

    /** Подсветка выбранного элемента (selectedId) */
    setBright:  (state, { payload }: PayloadAction<boolean>) => {
      state.bright = payload;
    },

    /** Наличие не сохраненных изменений (в тч customSettings in Company) */
    setIsUnsaved: (state, { payload }: PayloadAction<boolean>) => {
      state.isUnsaved = payload;
    },

    // Перемещение выбранного View-item в другой
    setActiveMovementId: (state) => {
      state.activatedMovementId = state.selectedId;
      state.activatedCopied     = undefined;
      state.bright              = false;
    },
    clearActivatedMovementId: (state) => {
      state.activatedMovementId = '';
      state.activatedCopied     = undefined;
      state.bright              = false;
    },

    // Копирование выбранного View-item в другой
    setActiveCopied: (state, { payload }: PayloadAction<ActivatedCopied>) => {
      state.activatedMovementId = '';
      state.activatedCopied     = { ...payload };
      state.bright              = false;
    },
    clearActivatedCopied: (state) => {
      state.activatedMovementId = '';
      state.activatedCopied     = undefined;
      state.bright              = false;
    },

    // Update View-item
    updateViewItems: (state, { payload }: PayloadAction<PartialViewItem[]>) => {
      state.entities            = updateEntities(state.entities, payload);
      state.activatedMovementId = '';
      state.activatedCopied     = undefined;
      state.bright              = false;
    },

    cancelUpdateViewItem: (state) => {
      if (state.newStoredViewItem && state.newStoredViewItem.id) {
        state.entities[state.selectedId] = { ...state.newStoredViewItem };
      }
      else {
        // Optionally handle missing data, e.g., throw error or log warning
        __devLog('newStoredViewItem is undefined or invalid');
      }
    },

    // Изменение 1 field в styles
    changeOneStyleField: (state, { payload }: PayloadAction<ChangeSelectedStyle>) => {
      const { selectedId, field, value } = payload;
      // @ts-ignore
      state.entities[selectedId]?.styles?.[field] = value;
    },

    setSelectedStyles: (state, { payload }: PayloadAction<ViewItemStyles>) => {
      state.entities[state.selectedId].styles = payload;
    },

    // Изменение 1 field в settings
    changeOneSettingsField: (state, { payload }: PayloadAction<ChangeOneSettingsField>) => {
      const { field, value } = payload;
      const { selectedId } = state;

      if (state.entities[selectedId]) {
        if (! state.entities[selectedId]?.settings) state.entities[selectedId].settings = {};
        (state.entities[selectedId].settings as ViewItemSettings)[field] = value;
      }
    },

    // Изменение 1 field в settings.charts[index]
    changeOneChartsItem: (state, { payload }: PayloadAction<ChangeOneChartsItem>) => {
      const { field, index, value } = payload;
      const { selectedId } = state;
      const selectedItem = state.entities[selectedId];

      if (state.entities[selectedId]) {
        if (! state.entities[selectedId]?.settings) state.entities[selectedId].settings = {};
        (state.entities[selectedId].settings as ViewItemSettings).charts = updateChartsItem(
          selectedItem,
          index,
          field,
          value
        );
      }
    },

    // Изменение 1 field в settings.charts[index].datasets
    changeOneDatasetsItem: (state, { payload }: PayloadAction<ChangeOneDatasetsItem>) => {
      const { field, index, value } = payload;
      const { selectedId } = state;
      const selectedItem = state.entities[selectedId];
      const datasets     = cloneObj(selectedItem?.settings?.charts?.[index]?.datasets || {}) as ChartConfigDatasets;
      datasets[field] = value as never;

      if (state.entities[selectedId]) {
        if (! state.entities[selectedId]?.settings) state.entities[selectedId].settings = {};
        (state.entities[selectedId].settings as ViewItemSettings).charts = updateChartsItem(
          selectedItem,
          index,
          'datasets',
          datasets
        );
      }
    },

  },


  extraReducers: builder => {
    // GET-BUNCHES []
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder
      .addCase(getBunches.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(getBunches.fulfilled, (state, { payload }: PayloadAction<SetDashboardViewItems>) => {
        const { companyId, viewItems, bunchesUpdated } = payload;

        // Нужно чтобы возможные данные из LS НЕ перезатёрлись новыми
        state.entities            = updateEntities(state.entities, viewItems);
        state.activatedMovementId = '';
        state.activatedCopied     = undefined;
        state.bright              = false;
        state.isUnsaved           = false;
        state.loading             = false;
        state.errors              = {};

        const mergedViewItems = mergeById(Object.values(state.entities), viewItems);
        LS.setDashboardViewItems(companyId, mergedViewItems);
        LS.setDashboardBunchesUpdated(companyId, { ...LS.getDashboardBunchesUpdated(companyId), ...bunchesUpdated });
      })
      .addCase(getBunches.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
    // ADD-GROUP-NEW-ITEMS
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder
      .addCase(createGroupViewItems.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(createGroupViewItems.fulfilled, (state, { payload }: PayloadAction<CreateGroupViewItems>) => {
        const { viewItems, companyId, bunchUpdatedMs, bunchAction } = payload;

        state.entities            = updateEntities(state.entities, viewItems);
        state.activatedMovementId = '';
        state.activatedCopied     = undefined;
        state.bright              = false;
        state.loading             = false;
        state.errors              = {};

        LS.setDashboardViewItems(companyId, mergeById(Object.values(state.entities), viewItems));
        LS.setDashboardBunchesUpdated(companyId, {
          ...LS.getDashboardBunchesUpdated(companyId),
          [viewItems[0].bunchId]: bunchUpdatedMs
        });
      })
      .addCase(createGroupViewItems.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })

    // UPDATE-VIEW-ITEMS []
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder
      .addCase(updateViewItems.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(updateViewItems.fulfilled, (state, { payload }: PayloadAction<UpdateViewItems>) => {
        const { viewItems, companyId, newStoredViewItem, bunchUpdatedMs } = payload;

        if (newStoredViewItem) {
          state.newStoredViewItem = updateObject(state.newStoredViewItem, newStoredViewItem);
        }

        state.entities            = updateEntities(state.entities, viewItems);
        state.activatedMovementId = '';
        state.activatedCopied     = undefined;
        state.bright              = false;
        state.isUnsaved           = false;
        state.loading             = false;
        state.errors              = {};

        // Save to LS
        LS.setDashboardViewItems(companyId, Object.values(state.entities));

        const bunchesUpdated: Record<string, number> = {};
        viewItems.forEach(({ bunchId }) => {
          bunchesUpdated[bunchId] = bunchUpdatedMs;
        });
        LS.setDashboardBunchesUpdated(companyId, {
          ...LS.getDashboardBunchesUpdated(companyId),
          ...bunchesUpdated
        });
      })
      .addCase(updateViewItems.rejected, (state, { payload }) => {
        state.newStoredViewItem = undefined; // Раз обновление завершилось с ошибкой, то нельзя переключаться на новый элемент
        state.errors  = getError(payload);
        state.loading = false;
      })

    // DELETE-VIEW
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder
      .addCase(deleteViewItem.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(deleteViewItem.fulfilled, (state, { payload }: PayloadAction<DeleteViewItem>) => {
        const { companyId, allIds, viewUpdatedMs } = payload;

        allIds.forEach(id => delete state.entities[id]);

        state.selectedId          = '';
        state.newStoredViewItem   = undefined;
        state.prevStoredViewItem  = undefined;
        state.activatedMovementId = '';
        state.activatedCopied     = undefined;
        state.bright              = false;
        state.isUnsaved           = false;
        state.loading             = false;
        state.errors              = {};

        // LS.setDashboardView(companyId, Object.values(state.entities)); // Save entities to local storage
        // LS.setDashboardViewUpdated(companyId, viewUpdatedMs);
      })
      .addCase(deleteViewItem.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
  }
})

export const { actions, reducer } = slice;
