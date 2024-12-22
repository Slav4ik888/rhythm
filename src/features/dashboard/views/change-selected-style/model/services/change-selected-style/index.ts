import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';
import { CardItem, CardItemId, ItemStylesField } from 'entities/card-item';



export interface ChangeSelectedStyle {
  companyId  : string
  selectedId : CardItemId
  field      : ItemStylesField
  value      : number | string
}

/** Изменяем 1 выбранный стиль у элемента */
export const changeSelectedStyle = createAsyncThunk<
  ChangeSelectedStyle,
  ChangeSelectedStyle,
  ThunkConfig<Errors>
>(
  'features/dashboard/changeSelectedStyle',
  async (data, thunkApi) => {

    const { dispatch, rejectWithValue, extra } = thunkApi;
    
    try {
      // TODO:
      // await extra.api.post(paths.dashboard.view.add, { cardItem: data.cardItem });


      return data;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in features/dashboard/changeSelectedStyle' });
    }
  }
);
