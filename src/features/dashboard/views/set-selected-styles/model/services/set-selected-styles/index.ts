import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';
import { CardItem, CardItemId, ItemStyles } from 'entities/card-item';



export interface SetSelectedStyles {
  companyId  : string
  selectedId : CardItemId
  styles     : ItemStyles
}

/** Обновляем все стили у 1 элемента */
export const setSelectedStyles = createAsyncThunk<
  SetSelectedStyles,
  SetSelectedStyles,
  ThunkConfig<Errors>
>(
  'features/dashboard/SetSelectedStyles',
  async (data, thunkApi) => {

    const { dispatch, rejectWithValue, extra } = thunkApi;
    const cardItem: Partial<CardItem> = {
      id     : data.selectedId,
      styles : data.styles
    };

    try {
      await extra.api.post(paths.dashboard.view.update, { cardItem });

      return data;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in features/dashboard/setSelectedStyles' });
    }
  }
);
