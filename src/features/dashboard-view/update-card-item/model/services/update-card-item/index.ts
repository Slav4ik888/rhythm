import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';
import { PartialCardItem } from 'entities/dashboard-view';



export interface UpdateCardItem {
  companyId : string
  cardItem  : PartialCardItem
}

/**
 * Обновляем изменившиеся стили у 1 элемента,
 * без сохранения изменений в слайс, тк они уже там
 * в слайсе сохраняем в LS
 */
export const updateCardItem = createAsyncThunk<
  UpdateCardItem,
  UpdateCardItem,
  ThunkConfig<Errors>
>(
  'features/dashboardView/updateCardItem',
  async (data, thunkApi) => {
    const { dispatch, rejectWithValue, extra } = thunkApi;

    try {
      await extra.api.post(paths.dashboard.view.update, { cardItem: data.cardItem });

      return data;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in features/dashboardView/updateCardItem' });
    }
  }
);
