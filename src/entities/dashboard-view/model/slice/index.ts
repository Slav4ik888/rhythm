import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LS } from 'shared/lib/local-storage';
import { Errors } from 'shared/lib/validators';
import { getPayloadError as getError } from 'shared/lib/errors';
import { StateSchemaDashboardView } from './state-schema';
import { deleteCard, DeleteCard, AddNewCard, addNewCard, UpdateCardItem, updateCardItem } from 'features/dashboard-view';
import { SetDashboardView, ChangeSelectedStyle, ChangeOneSettingsField, ChangeOneDatasetsItem, ChangeOneChartsItem } from './types';
import { addEntities } from 'entities/base';
import { CardItemId, CardItemSettings, ItemStyles, PartialCardItem } from '../types';
// import { NO_PARENT_ID } from '../consts';
import { cloneObj, updateObject } from 'shared/helpers/objects';
import { updateChartsItem } from '../utils';



const initialState: StateSchemaDashboardView = {
  loading             : false,
  errors              : {},
  _isMounted          : true,

  editMode            : false,
  entities            : {},
  selectedId          : '',
  newStoredCard       : {}, // Начальные значения выбранного элемента
  prevStoredCard      : {}, // Начальные значения предыдущего выбранного элемента
  activatedMovementId : '', // Активированный Id перемещаемого элемента
};


export const slice = createSlice({
  name: 'entities/dashboardView',
  initialState,
  reducers: {
    setInitial: (state, { payload }: PayloadAction<StateSchemaDashboardView>) => {
      state.entities       = payload.entities       || {},
      state.selectedId     = payload.selectedId,
      state.newStoredCard  = payload.newStoredCard  || {},
      state.prevStoredCard = payload.prevStoredCard || {},
      state.loading        = payload.loading;
      state.errors         = payload.errors;
    },
    setErrors: (state, { payload }: PayloadAction<Errors>) => {
      state.errors = getError(payload);
    },
    clearErrors: (state) => {
      state.errors = {};
    },

    setDashboardView: (state, { payload }: PayloadAction<SetDashboardView>) => {
      state.entities = addEntities(state.entities, payload.cardItems);

      LS.setDashboardView(payload.companyId, state.entities); // Save entities to local storage
    },

    setEditMode: (state, { payload }: PayloadAction<boolean>) => {
      state.editMode = payload;
      if (! payload) {
        state.selectedId = '';
      }
    },
    
    /** Id выбранного элемента (при editMode === true) */
    setSelectedId: (state, { payload }: PayloadAction<CardItemId>) => {
      state.selectedId     = payload;
      state.prevStoredCard = state.newStoredCard;
      state.newStoredCard  = state.entities[payload] || {};
    },
    
    // Перемещение выбранного Card-item в другой
    setActiveMovementId: (state) => {
      state.activatedMovementId = state.selectedId;
    },
    clearActivatedMovementId: (state) => {
      state.activatedMovementId = '';
    },

    // Update Card-item
    updateCardItem: (state, { payload }: PayloadAction<PartialCardItem>) => {
      state.entities[payload.id] = updateObject(state.entities[payload.id], payload);
      state.activatedMovementId = '';
    },

    // Изменение 1 field в styles
    changeOneStyleField: (state, { payload }: PayloadAction<ChangeSelectedStyle>) => {
      const { selectedId, field, value } = payload;
      // @ts-ignore
      state.entities[selectedId].styles[field] = value;
    },

    setSelectedStyles: (state, { payload }: PayloadAction<ItemStyles>) => {
      state.entities[state.selectedId].styles = payload;
    },

    // Изменение 1 field в settings
    changeOneSettingsField: (state, { payload }: PayloadAction<ChangeOneSettingsField>) => {
      const { field, value } = payload;
      const selectedId = state.selectedId;
      
      if (! state.entities[selectedId].settings) {
        state.entities[selectedId].settings = {};
      }

      // @ts-ignore
      state.entities[selectedId].settings[field] = value;
    },

    // Изменение 1 field в settings.charts[index]
    changeOneChartsItem: (state, { payload }: PayloadAction<ChangeOneChartsItem>) => {
      const { field, index, value } = payload;
      const selectedId   = state.selectedId;
      const selectedItem = state.entities[selectedId];

      if (! state.entities[selectedId].settings) {
        state.entities[selectedId].settings = {};
      }

      // @ts-ignore
      state.entities[selectedId].settings?.charts = updateChartsItem(selectedItem, index, field, value);
    },

    // Изменение 1 field в settings.charts[index].datasets
    changeOneDatasetsItem: (state, { payload }: PayloadAction<ChangeOneDatasetsItem>) => {
      const { field, index, value } = payload;
      const selectedId   = state.selectedId;
      const selectedItem = state.entities[selectedId];
      const datasets     = cloneObj(selectedItem.settings?.charts?.[index]?.datasets || {});
      datasets[field] = value;

      if (! state.entities[selectedId].settings) {
        state.entities[selectedId].settings = {};
      }

      // @ts-ignore
      state.entities[selectedId].settings?.charts = updateChartsItem(selectedItem, index, 'datasets', datasets);
    },
    
  },


  extraReducers: builder => {
    // ADD-NEW-CARD
    builder
      .addCase(addNewCard.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(addNewCard.fulfilled, (state, { payload }: PayloadAction<AddNewCard>) => {
        const { cardItem, companyId } = payload;
        const updatedEntities = addEntities(state.entities, [cardItem]);

        // if (cardItem.parentId !== NO_PARENT_ID) {
        //   updatedEntities[cardItem.parentId].childrenIds.push(cardItem.id);
        // }

        state.entities = updatedEntities;
        state.activatedMovementId = '';
        state.loading = false;
        state.errors  = {};

        LS.setDashboardView(companyId, state.entities); // Save entities to local storage
      })
      .addCase(addNewCard.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      }),
    
    // UPDATE-CARD-ITEM
    builder
      .addCase(updateCardItem.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(updateCardItem.fulfilled, (state, { payload }: PayloadAction<UpdateCardItem>) => {
        const { cardItem, companyId } = payload;
        
        state.entities[cardItem.id] = updateObject(state.entities[cardItem.id], cardItem);
        state.activatedMovementId   = '';
        state.loading               = false;
        state.errors                = {};

        LS.setDashboardView(companyId, state.entities); // Save entities to local storage
      })
      .addCase(updateCardItem.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      }),

    // DELETE-CARD
    builder
      .addCase(deleteCard.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(deleteCard.fulfilled, (state, { payload }: PayloadAction<DeleteCard>) => {
        const { companyId, allIds } = payload;

        allIds.forEach(id => delete state.entities[id]);

        // Удаляем у parentId запись из childrenIds
        // if (parentId !== NO_PARENT_ID) {
        //   state.entities[parentId].childrenIds = parentChildrenIds;
        // }

        state.selectedId          = '';
        state.newStoredCard       = {};
        state.prevStoredCard      = {};
        state.activatedMovementId = '';
        state.loading             = false;
        state.errors              = {};

        LS.setDashboardView(companyId, state.entities); // Save entities to local storage
      })
      .addCase(deleteCard.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
      
  }
})

export const { actions, reducer } = slice;
