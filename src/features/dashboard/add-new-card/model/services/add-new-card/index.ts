import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';
import { CardItem } from 'entities/card-item';
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
  'features/dashboard/addNewCard',
  async (data, thunkApi) => {

    const { dispatch, rejectWithValue, extra } = thunkApi;
    
    try {
      // TODO:
      // await extra.api.post(paths.dashboard.view.add, { cardItem: data.cardItem });


      return data;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in features/dashboard/addNewCard' });
    }
  }
);
