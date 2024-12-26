import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';
import { CardItem, CardItemId, ItemStyles } from 'entities/dashboard-view';



export interface UpdateChangedStyles {
  companyId     : string
  selectedId    : CardItemId
  changedStyles : ItemStyles
}

/**
 * Обновляем изменившиеся стили у 1 элемента,
 * без сохранения изменений в слайс, тк они уже там
 * в слайсе сохраняем в LS
 */
export const updateChangedStyles = createAsyncThunk<
  UpdateChangedStyles,
  UpdateChangedStyles,
  ThunkConfig<Errors>
>(
  'features/dashboard/updateChangedStyles',
  async (data, thunkApi) => {

    const { dispatch, rejectWithValue, extra } = thunkApi;
    const cardItem: Partial<CardItem> = {
      id     : data.selectedId,
      styles : data.changedStyles
    };

    try {
      await extra.api.post(paths.dashboard.view.update, { cardItem });

      return data;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in features/dashboard/updateChangedStyles' });
    }
  }
);
