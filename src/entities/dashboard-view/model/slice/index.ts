import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LS } from 'shared/lib/local-storage';
import { Errors } from 'shared/lib/validators';
import { getPayloadError as getError } from 'shared/lib/errors';
import { StateSchemaDashboardView } from './state-schema';
import { deleteCard, DeleteCard, AddNewCard, addNewCard, UpdateCardItem, updateCardItem } from 'features/dashboard-view';
import { SetDashboardView, SetSelectedStyles, ChangeSelectedStyle } from './types';
import { addEntities } from 'entities/base';
import { CardItemId } from '../types';
import { NO_PARENT_ID } from '../consts';
import { updateObject } from 'shared/helpers/objects';



const initialState: StateSchemaDashboardView = {
  loading      : false,
  errors       : {},
  _isMounted   : true,

  editMode     : false,
  entities     : {},
  selectedId   : '',
  storedStyles : {}, // Начальные значения стилей выбранного элемента
  storedCard   : {},
};


export const slice = createSlice({
  name: 'entities/dashboardView',
  initialState,
  reducers: {
    setInitial: (state, { payload }: PayloadAction<StateSchemaDashboardView>) => {
      state.entities   = payload.entities || {},
      state.selectedId = payload.selectedId,
      state.loading    = payload.loading;
      state.errors     = payload.errors;
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
      state.selectedId   = payload;
      state.storedStyles = state.entities[payload]?.styles || {};
      state.storedCard   = state.entities[payload] || {};
    },

    // Изменении 1 field в styles
    changeOneStyleField: (state, { payload }: PayloadAction<ChangeSelectedStyle>) => {
      const { selectedId, field, value } = payload;
      // @ts-ignore
      state.entities[selectedId].styles[field] = value;
    },

    setSelectedStyles: (state, { payload }: PayloadAction<SetSelectedStyles>) => {
      const { selectedId, styles } = payload;
      state.entities[selectedId].styles = styles;
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

        if (cardItem.parentId !== NO_PARENT_ID) {
          updatedEntities[cardItem.parentId].childrenIds.push(cardItem.id);
        }

        state.entities = updatedEntities;
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
        const { cardItem } = payload;
        
        state.entities[cardItem.id] = updateObject(state.entities[cardItem.id], cardItem);
        state.loading = false;
        state.errors  = {};

        LS.setDashboardView(payload.companyId, state.entities); // Save entities to local storage
      })
      .addCase(updateCardItem.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      }),

    // CHANGE-SELECTED-STYLE Изменяем 1 выбранный стиль у элемента
    // builder
    //   .addCase(changeSelectedStyle.pending, (state) => {
    //     state.loading = true;
    //     state.errors  = {};
    //   })
    //   .addCase(changeSelectedStyle.fulfilled, (state, { payload }: PayloadAction<ChangeSelectedStyle>) => {
    //     const { selectedId, field, value, companyId } = payload;
    //     // @ts-ignore
    //     state.entities[selectedId].styles[field] = value;

    //     state.loading = false;
    //     state.errors  = {};
        
    //     LS.setDashboardView(companyId, state.entities); // Save entities to local storage
    //   })
    //   .addCase(changeSelectedStyle.rejected, (state, { payload }) => {
    //     state.errors  = getError(payload);
    //     state.loading = false;
    //   }),
    
    // SET-SELECTED-STYLES Заменяем весь стиль у выбранного элемента
    // builder
    //   .addCase(setSelectedStyles.pending, (state) => {
    //     state.loading = true;
    //     state.errors  = {};
    //   })
    //   .addCase(setSelectedStyles.fulfilled, (state, { payload }: PayloadAction<SetSelectedStyles>) => {
    //     const { selectedId, styles, companyId } = payload;
    //     state.entities[selectedId].styles = styles;
    //     state.loading = false;
    //     state.errors  = {};

    //     LS.setDashboardView(companyId, state.entities); // Save entities to local storage
    //   })
    //   .addCase(setSelectedStyles.rejected, (state, { payload }) => {
    //     state.errors  = getError(payload);
    //     state.loading = false;
    //   }),

    // DELETE-CARD
    builder
      .addCase(deleteCard.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(deleteCard.fulfilled, (state, { payload }: PayloadAction<DeleteCard>) => {
        const { parentChildrenIds, companyId, parentId, allIds } = payload;

        allIds.forEach(id => delete state.entities[id]);

        // deleteAllChildrenFromentities(state.entities, cardItemId);

        // Удаляем у parentId запись из childrenIds
        if (parentId !== NO_PARENT_ID) {
          state.entities[parentId].childrenIds = parentChildrenIds;
        }

        state.selectedId = '';
        state.loading    = false;
        state.errors     = {};

        LS.setDashboardView(companyId, state.entities); // Save entities to local storage
      })
      .addCase(deleteCard.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
      
  }
})

export const { actions, reducer } = slice;
