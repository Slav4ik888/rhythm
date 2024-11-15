import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsUI } from 'entities/ui';
import { Errors } from 'shared/lib/validators';
import { getEntities } from './utils';
import { ResGetData, StartEntitiesData } from '../../types';
import { LS } from 'shared/lib/local-storage';
import { apiWithoutCookie } from 'shared/api';



export const getData = createAsyncThunk<
  StartEntitiesData,
  string, // GoogleData url
  ThunkConfig<Errors>
>(
  'features/dashboard/getData',
  async (url, thunkApi) => {

    const { extra, dispatch, rejectWithValue } = thunkApi;
    
    try {
      // const { data } = await extra.api.get<ResGetData>(url);
      // const response = await fetch(url);
      // const { data } = await response.json();
      const { data } = await apiWithoutCookie.get(url);

      // **
      // For development - сохраняем входящие данные в localStorage
      // const data = LS.devGetGSData();
      console.log('GS data: ', data);
      LS.devSetGSData(data);

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
