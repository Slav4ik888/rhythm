import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';
import { CardItem } from 'entities/dashboard-view';
import { ActivatedCompanyId } from 'entities/company';



export interface AddNewCard {
  companyId : ActivatedCompanyId
  cardItem  : CardItem
}

export const addNewCard = createAsyncThunk<
  AddNewCard,
  AddNewCard,
  ThunkConfig<Errors>
>(
  'features/dashboardView/addNewCard',
  async (data, thunkApi) => {

    const { dispatch, rejectWithValue, extra } = thunkApi;
    const { cardItem } = data;

    try {
      await extra.api.post(paths.dashboard.view.add, { cardItem });

      return data;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in features/dashboardView/addNewCard' });
    }
  }
);
