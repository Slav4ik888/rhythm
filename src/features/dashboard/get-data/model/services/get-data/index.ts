import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsUI } from 'entities/ui';
import { Errors } from 'shared/lib/validators';
import cfg from 'shared/api/keys';
import { getEntities } from './utils';
import { ResGetData, PayloadGetData } from '../../types';



export const getData = createAsyncThunk<
  PayloadGetData,
  undefined,
  ThunkConfig<Errors>
>(
  'features/dashboard/getData',
  async (_, thunkApi) => {

    const { extra, dispatch, rejectWithValue } = thunkApi;
    
    try {
      const { data } = await extra.api.get<ResGetData>(cfg.URL_OSNOVA);

      const gsData = getEntities(data);
      dispatch(actionsUI.setSuccessMessage("Данные с гугл-таблицы загружены"));
    
      return gsData;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in pagesSignup/signupByLogin' });
    }
  }
);
