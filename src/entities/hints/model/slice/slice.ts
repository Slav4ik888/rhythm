import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchemaHints } from './state-schema';



const initialState: StateSchemaHints = {
  hintsQueue  : [],
  shownHints  : [],
  currentHint : null,
};


export const slice = createSlice({
  name: 'entities/hints',
  initialState,
  reducers: {
    // setLoading: (state, { payload }: PayloadAction<boolean>) => {
    //   state.loading = payload;
    // },
    // setErrors: (state, { payload }: PayloadAction<Errors>) => {
    //   state.errors = payload;
    // },
    // clearErrors: (state) => {
    //   state.errors = {};
    // },
    shownNextHint: (state) => {
      const [nextHint, ...remainingQueue] = state.hintsQueue;

      // Если очередь пуста, скрываем текущую подсказку
      if (! nextHint) {
        state.currentHint = null;
        state.hintsQueue = [];
      }

      // Показываем следующую подсказку из очереди
      state.currentHint = nextHint;
      state.hintsQueue = remainingQueue;
    },
    closeCurrentHint: (state) => {
      console.log('SLICE closeCurrentHint');
      // Добавляем текущую подсказку в показанные и показываем следующую
      const newShownHints = state.currentHint
        ? [...state.shownHints, state.currentHint]
        : state.shownHints;


      const [newCurrentHint, ...newQueue] = state.hintsQueue;
      console.log('newShownHints: ', newShownHints);
      console.log('newCurrentHint: ', newCurrentHint);
      console.log('newQueue: ', newQueue);

      state.shownHints  = newShownHints;
      state.currentHint = newCurrentHint || null;
      state.hintsQueue  = newQueue;
    },
    addHintsToQueue: (state, { payload }: PayloadAction<string[]>) => {
      const newHints = payload.filter(hintId =>
        ! state.shownHints.includes(hintId)    // Ещё не показывали
        && ! state.hintsQueue.includes(hintId) // Нет в очереди (чтобы избежать повторы)
        && state.currentHint !== hintId        // Не текущий
      );

      // Если сейчас нет активной подсказки, сразу показываем первую из новых
      const shouldShowFirstHint = ! state.currentHint && newHints.length > 0;
      const [firstNewHint, ...otherNewHints] = newHints;

      state.currentHint = shouldShowFirstHint ? firstNewHint : state.currentHint;
      state.hintsQueue = shouldShowFirstHint
        ? [...state.hintsQueue, ...otherNewHints]
        : [...state.hintsQueue, ...newHints];
    },
  },
})

export const { actions, reducer } = slice;
