import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';
import { CardItem, CardItemId } from 'entities/dashboard-view';
import { ActivatedCompanyId } from 'entities/company';


export interface AddNewCard {
  companyId   : ActivatedCompanyId
  cardItem    : CardItem
  childrenIds : CardItemId[] // Parent childrenIds for server-side
}

export const addNewCard = createAsyncThunk<
  AddNewCard,
  AddNewCard,
  ThunkConfig<Errors>
>(
  'features/dashboard/addNewCard',
  async (data, thunkApi) => {

    const { dispatch, rejectWithValue, extra } = thunkApi;
    const { cardItem, childrenIds } = data;

    try {
      await extra.api.post(paths.dashboard.view.add, { cardItem, childrenIds });

      return data;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in features/dashboard/addNewCard' });
    }
  }
);
