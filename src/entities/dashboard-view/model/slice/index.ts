import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LS } from 'shared/lib/local-storage';
import { Errors } from 'shared/lib/validators';
import { getPayloadError as getError } from 'shared/lib/errors';
import { ActivatedCopied, StateSchemaDashboardView } from './state-schema';
import {
  deleteViewItem, DeleteViewItem, AddNewViewItem, addNewViewItem, UpdateViewItems, updateViewItems
} from 'features/dashboard-view';
import {
  SetDashboardView, ChangeSelectedStyle, ChangeOneSettingsField, ChangeOneDatasetsItem,
  ChangeOneChartsItem, SetEditMode
} from './types';
import { updateEntities } from 'entities/base';
import { ViewItemId, ViewItemSettings, ViewItemStyles, PartialViewItem } from '../types';
import { cloneObj, updateObject } from 'shared/helpers/objects';
import { updateChartsItem } from '../utils';
import { ChartConfigDatasets } from 'entities/charts';
import { CopyStylesItem, copyStylesViewItem } from 'features/dashboard-view/configurator';
import { __devLog } from 'shared/lib/tests/__dev-log';



const initialState: StateSchemaDashboardView = {
  loading               : false,
  errors                : {},
  _isMounted            : true,

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
    setErrors: (state, { payload }: PayloadAction<Errors>) => {
      state.errors = getError(payload);
    },
    clearErrors: (state) => {
      state.errors = {};
    },

    setDashboardView: (state, { payload }: PayloadAction<SetDashboardView>) => {
      state.entities            = updateEntities(state.entities, payload.viewItems);
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
      // state.entities[payload.id] = updateObject(state.entities[payload.id], payload);
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
    // ADD-NEW-ITEM
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder
      .addCase(addNewViewItem.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(addNewViewItem.fulfilled, (state, { payload }: PayloadAction<AddNewViewItem>) => {
        const { viewItem, companyId } = payload;

        state.entities            = updateEntities(state.entities, [viewItem]);
        state.activatedMovementId = '';
        state.activatedCopied     = undefined;
        state.bright              = false;
        state.loading             = false;
        state.errors              = {};

        LS.setDashboardView(companyId, Object.values(state.entities)); // Save entities to local storage
      })
      .addCase(addNewViewItem.rejected, (state, { payload }) => {
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
        const { viewItems, companyId, newStoredViewItem } = payload;

        state.entities            = updateEntities(state.entities, viewItems);
        // state.entities[viewItem.id] = updateObject(state.entities[viewItem.id], viewItem);
        if (newStoredViewItem) {
          state.newStoredViewItem = updateObject(state.newStoredViewItem, newStoredViewItem);
        }
        state.activatedMovementId = '';
        state.activatedCopied     = undefined;
        state.bright              = false;
        state.isUnsaved           = false;
        state.loading             = false;
        state.errors              = {};

        LS.setDashboardView(companyId, Object.values(state.entities)); // Save entities to local storage
      })
      .addCase(updateViewItems.rejected, (state, { payload }) => {
        state.newStoredViewItem = undefined; // Раз обновление завершилось с ошибкой, то нельзя переключаться на новый элемент
        state.errors  = getError(payload);
        state.loading = false;
      })

    // COPY-STYLES - стили activatedCopied?.id копируются поверх стилей выбранного элемента
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder
      .addCase(copyStylesViewItem.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(copyStylesViewItem.fulfilled, (state, { payload }: PayloadAction<CopyStylesItem>) => {
        const { viewItems, companyId } = payload;

        // Настроено на копирование 1 элемента но передаётся [] тк для отправки на сервер используется update
        if (state.activatedCopied?.id) {
          state.entities[viewItems[0].id] = {
            ...state.entities[viewItems[0].id],
            styles: { ...state.entities[state.activatedCopied.id].styles }
          }
        }
        state.newSelectedId       = viewItems[0].id;
        state.activatedMovementId = '';
        state.activatedCopied     = undefined;
        state.bright              = false;
        state.isUnsaved           = false;
        state.loading             = false;
        state.errors              = {};

        LS.setDashboardView(companyId, Object.values(state.entities)); // Save entities to local storage
      })
      .addCase(copyStylesViewItem.rejected, (state, { payload }) => {
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
        const { companyId, allIds } = payload;

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

        LS.setDashboardView(companyId, Object.values(state.entities)); // Save entities to local storage
      })
      .addCase(deleteViewItem.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
  }
})

export const { actions, reducer } = slice;
