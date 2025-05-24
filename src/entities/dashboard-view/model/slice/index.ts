import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LS } from 'shared/lib/local-storage';
import { Errors } from 'shared/lib/validators';
import { getPayloadError as getError } from 'shared/lib/errors';
import { StateSchemaDashboardView } from './state-schema';
import { deleteViewItem, DeleteViewItem, AddNewViewItem, addNewViewItem, UpdateViewItem, updateViewItem } from 'features/dashboard-view';
import { SetDashboardView, ChangeSelectedStyle, ChangeOneSettingsField, ChangeOneDatasetsItem, ChangeOneChartsItem, SetEditMode } from './types';
import { addEntities } from 'entities/base';
import { ViewItemId, ViewItemSettings, ViewItemStyles, PartialViewItem } from '../types';
// import { NO_PARENT_ID } from '../consts';
import { cloneObj, updateObject } from 'shared/helpers/objects';
import { updateChartsItem } from '../utils';
import { ChartConfigDatasets } from 'entities/charts';



const initialState: StateSchemaDashboardView = {
  loading             : false,
  errors              : {},
  _isMounted          : true,

  editMode            : false,
  entities            : {},
  newSelectedId       : '',
  selectedId          : '',
  light               : false,
  newStoredViewItem   : undefined, // Начальные значения выбранного элемента
  prevStoredViewItem  : undefined, // Начальные значения предыдущего выбранного элемента

  activatedMovementId : '', // Активированный Id перемещаемого элемента
  activatedCopiedId   : '', // Активированный Id копируемого элемента
};


export const slice = createSlice({
  name: 'entities/dashboardView',
  initialState,
  reducers: {
    setInitial: (state, { payload }: PayloadAction<StateSchemaDashboardView>) => {
      state.entities           = payload.entities           || {},
      state.selectedId         = payload.selectedId,
      state.light              = false,
      state.newStoredViewItem  = payload.newStoredViewItem  || undefined,
      state.prevStoredViewItem = payload.prevStoredViewItem || undefined,
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
      state.entities            = addEntities(state.entities, payload.viewItems);
      state.activatedMovementId = '';
      state.activatedCopiedId   = '';
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
      state.prevStoredViewItem = state.newStoredViewItem;
      state.newStoredViewItem  = state.entities[payload] || {};
    },

    /** Подсветка выбранного элемента (selectedId) */
    highlightItem:  (state, { payload }: PayloadAction<boolean>) => {
      state.light = payload;
    },

    /** Обновление изменившихся полей, при сохранении через UnsavedChanges */
    // updateNewStoredViewItem: (state, { payload }: PayloadAction<PartialViewItem>) => {
    //   state.newStoredViewItem = updateObject(state.newStoredViewItem, payload);
    // },
    
    // Перемещение выбранного View-item в другой
    setActiveMovementId: (state) => {
      state.activatedMovementId = state.selectedId;
      state.activatedCopiedId   = '';
    },
    clearActivatedMovementId: (state) => {
      state.activatedMovementId = '';
      state.activatedCopiedId   = '';
    },

    // Копирование выбранного View-item в другой
    setActiveCopiedId: (state) => {
      state.activatedCopiedId   = state.selectedId;
      state.activatedMovementId = '';
    },
    clearActivatedCopiedId: (state) => {
      state.activatedCopiedId   = '';
      state.activatedMovementId = '';
    },

    // Update View-item
    updateViewItem: (state, { payload }: PayloadAction<PartialViewItem>) => {
      state.entities[payload.id] = updateObject(state.entities[payload.id], payload);
      state.activatedMovementId = '';
    },

    cancelUpdateViewItem: (state) => {
      if (state.newStoredViewItem && state.newStoredViewItem.id) {
        state.entities[state.selectedId] = { ...state.newStoredViewItem };
      }
      else {
        // Optionally handle missing data, e.g., throw error or log warning
        console.warn('newStoredViewItem is undefined or invalid');
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
      const selectedId = state.selectedId;
      
      if (state.entities[selectedId]) {
        if (! state.entities[selectedId]?.settings) state.entities[selectedId].settings = {};
        (state.entities[selectedId].settings as ViewItemSettings)[field] = value;
      }
    },

    // Изменение 1 field в settings.charts[index]
    changeOneChartsItem: (state, { payload }: PayloadAction<ChangeOneChartsItem>) => {
      const { field, index, value } = payload;
      const selectedId   = state.selectedId;
      const selectedItem = state.entities[selectedId];

      if (state.entities[selectedId]) {
        if (! state.entities[selectedId]?.settings) state.entities[selectedId].settings = {};
        (state.entities[selectedId].settings as ViewItemSettings).charts = updateChartsItem(selectedItem, index, field, value);
      }
    },

    // Изменение 1 field в settings.charts[index].datasets
    changeOneDatasetsItem: (state, { payload }: PayloadAction<ChangeOneDatasetsItem>) => {
      const { field, index, value } = payload;
      const selectedId   = state.selectedId;
      const selectedItem = state.entities[selectedId];
      const datasets     = cloneObj(selectedItem?.settings?.charts?.[index]?.datasets || {}) as ChartConfigDatasets;
      datasets[field] = value as never;

      if (state.entities[selectedId]) {
        if (! state.entities[selectedId]?.settings) state.entities[selectedId].settings = {};
        (state.entities[selectedId].settings as ViewItemSettings).charts = updateChartsItem(selectedItem, index, 'datasets', datasets);
      }
    },
    
  },


  extraReducers: builder => {
    // ADD-NEW-ITEM
    builder
      .addCase(addNewViewItem.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(addNewViewItem.fulfilled, (state, { payload }: PayloadAction<AddNewViewItem>) => {
        const { viewItem, companyId } = payload;

        state.entities = addEntities(state.entities, [viewItem]);
        state.activatedMovementId = '';
        state.activatedCopiedId   = '';
        state.loading = false;
        state.errors  = {};

        LS.setDashboardView(companyId, Object.values(state.entities)); // Save entities to local storage
      })
      .addCase(addNewViewItem.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      }),
    
    // UPDATE-VIEW-ITEM
    builder
      .addCase(updateViewItem.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(updateViewItem.fulfilled, (state, { payload }: PayloadAction<UpdateViewItem>) => {
        const { viewItem, companyId, newStoredViewItem } = payload;
        
        state.entities[viewItem.id] = updateObject(state.entities[viewItem.id], viewItem);
        if (newStoredViewItem) {
          state.newStoredViewItem = updateObject(state.newStoredViewItem, newStoredViewItem);
        }
        state.activatedMovementId = '';
        state.activatedCopiedId   = '';
        state.loading             = false;
        state.errors              = {};

        LS.setDashboardView(companyId, Object.values(state.entities)); // Save entities to local storage
      })
      .addCase(updateViewItem.rejected, (state, { payload }) => {
        console.log("🚀 ~ .addCase ~ payload:", payload)
        state.newStoredViewItem = undefined; // Раз обновление завершилось с ошибкой, то нельзя переключаться на новый элемент
        state.errors  = getError(payload);
        state.loading = false;
      }),

    // DELETE-VIEW
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
        state.activatedCopiedId   = '';
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
