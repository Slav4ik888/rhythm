import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LS } from 'shared/lib/local-storage';
import { Errors } from 'shared/lib/validators';
import { DashboardPeriod } from '../types';
import { getPayloadError as getError } from 'shared/lib/errors';
import { DashboardPeriodType } from '../config';
import { getEntitiesByPeriod } from '../utils';
import { StateSchemaDashboard } from './state-schema';
import {
  ResGetGoogleData, calculateStartDate, getData, changeSelectedStyle, ChangeSelectedStyle, SetSelectedStyles,
  deleteCard, DeleteCard
 } from 'features/dashboard';
import { SetActivePeriod, SetDashboardView, SetSelectedPeriod } from './types';
import { CardItemId, NO_PARENT_ID } from 'entities/card-item';
import { addEntities } from 'entities/base';
import { AddNewCard, addNewCard, setSelectedStyles } from 'features/dashboard';



// TODO: validate dates data (проверить даты на упорядоченность и на то, что дата, является датой)

const emptyPeriod: DashboardPeriod = {
  type  : DashboardPeriodType.NINE_MONTHS,
  start : undefined,
  end   : undefined, //new Date().getTime()
};


const initialState: StateSchemaDashboard = {
  loading        : false,
  errors         : {},
  _isMounted     : true,

  // View
  editMode       : false,
  viewEntities   : {},
  selectedId     : '',

  // Data
  startEntities  : {},
  startDates     : {},
  lastUpdated    : undefined,
  
  selectedPeriod : { ...emptyPeriod },
  activePeriod   : { ...emptyPeriod },
  activeEntities : {},
  activeDates    : {},
};


export const slice = createSlice({
  name: 'entities/dashboard',
  initialState,
  reducers: {
    setInitial: (state, { payload }: PayloadAction<StateSchemaDashboard>) => {
      state.viewEntities   = payload.viewEntities || {},

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

    // VIEW
    setDashboardView: (state, { payload }: PayloadAction<SetDashboardView>) => {
      // TODO: Открыть скобки, когда данные будут приходить с сервера, сейчас закрыто чтобы LS не затирались
      // state.viewEntities = addEntities(state.viewEntities, payload.cardItems);

      // LS.setDashboardView(payload.companyId, state.viewEntities); // Save viewEntities to local storage
    },

    setEditMode: (state, { payload }: PayloadAction<boolean>) => {
      state.editMode = payload;
      if (! payload) {
        state.selectedId = '';
      }
    },
    
    /** Id выбранного элемента (при editMode === true) */
    setSelectedId: (state, { payload }: PayloadAction<CardItemId>) => {
      state.selectedId = payload;
    },


    // DATA
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
      
      // Тк при первом запуске setSelectedPeriod вызывается автоматически, поэтому нужно НЕ затереть имеющиеся данные
      // TODO: перепроверить, возможно это уже надо убрать
      const oldData = LS.getDashboardState(payload.companyId); // Save state to local storage
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
    // ----------
    //    DATA
    // ----------

    // GET-DATA-FROM-GOOGLE
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.errors = {};
      })
      .addCase(getData.fulfilled, (state, { payload }: PayloadAction<ResGetGoogleData>) => {
        // Data
        const { startEntities = {}, startDates = {} } = payload.data;
        state.startEntities = startEntities;
        state.startDates    = startDates;
        state.lastUpdated   = new Date().getTime();

        const { activeDates, activeEntities } = getEntitiesByPeriod(startEntities, startDates, state.activePeriod);
        state.activeEntities = activeEntities;
        state.activeDates    = activeDates;

        state.loading     = false;
        state.errors      = {};

        LS.setDashboardState(payload.companyId, state); // Save state to local storage
      })
      .addCase(getData.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      }),

    // ------------
    //    VIEWS
    // ------------

    // ADD-NEW-CARD
    builder
      .addCase(addNewCard.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(addNewCard.fulfilled, (state, { payload }: PayloadAction<AddNewCard>) => {
        const { cardItem, companyId } = payload;
        const updatedEntities = addEntities(state.viewEntities, [cardItem]);

        if (cardItem.parentId !== NO_PARENT_ID) {
          updatedEntities[cardItem.parentId].childrenIds.push(cardItem.id);
        }

        state.viewEntities = updatedEntities;
        state.loading = false;
        state.errors  = {};

        LS.setDashboardView(companyId, state.viewEntities); // Save viewEntities to local storage
      })
      .addCase(addNewCard.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      }),

    // CHANGE-SELECTED-STYLE Изменяем 1 выбранный стиль у элемента
    builder
      .addCase(changeSelectedStyle.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(changeSelectedStyle.fulfilled, (state, { payload }: PayloadAction<ChangeSelectedStyle>) => {
        const { selectedId, field, value, companyId } = payload;
        // @ts-ignore
        state.viewEntities[selectedId].styles[field] = value;

        state.loading = false;
        state.errors  = {};
        
        LS.setDashboardView(companyId, state.viewEntities); // Save viewEntities to local storage
      })
      .addCase(changeSelectedStyle.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      }),
    
    // SET-SELECTED-STYLES Заменяем весь стиль у выбранного элемента
    builder
      .addCase(setSelectedStyles.pending, (state) => {
        state.loading = true;
        state.errors  = {};
      })
      .addCase(setSelectedStyles.fulfilled, (state, { payload }: PayloadAction<SetSelectedStyles>) => {
        const { selectedId, styles, companyId } = payload;
        state.viewEntities[selectedId].styles = styles;
        state.loading = false;
        state.errors  = {};

        LS.setDashboardView(companyId, state.viewEntities); // Save viewEntities to local storage
      })
      .addCase(setSelectedStyles.rejected, (state, { payload }) => {
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
        const { parentChildrenIds, companyId, parentId, allIds } = payload;

        allIds.forEach(id => delete state.viewEntities[id]);

        // deleteAllChildrenFromViewEntities(state.viewEntities, cardItemId);

        // Удаляем у parentId запись из childrenIds
        if (parentId !== NO_PARENT_ID) {
          state.viewEntities[parentId].childrenIds = parentChildrenIds;
        }

        state.selectedId = '';
        state.loading    = false;
        state.errors     = {};

        LS.setDashboardView(companyId, state.viewEntities); // Save viewEntities to local storage
      })
      .addCase(deleteCard.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })
      
  }
})

export const { actions, reducer } = slice;
