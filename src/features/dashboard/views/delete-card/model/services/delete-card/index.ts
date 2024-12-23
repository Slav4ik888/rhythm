import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';
import { CardItemId } from 'entities/card-item';



export interface DeleteCard {
  companyId : string
  cardItemId  : CardItemId
}

/** Удаляем выбранный элемент */
export const deleteCard = createAsyncThunk<
  DeleteCard,
  DeleteCard,
  ThunkConfig<Errors>
>(
  'features/dashboard/deleteCard',
  async (data, thunkApi) => {

    const { dispatch, rejectWithValue, extra } = thunkApi;
    
    try {
      // TODO: учесть на сервере удаление всех childrenIds, а у них вложенных childrenIds и так далее 
      // await extra.api.post(paths.dashboard.view.add, { cardItem: data.cardItem });


      return data;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in features/dashboard/deleteCard' });
    }
  }
);
