import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsUI } from 'entities/ui';
import { Errors } from 'shared/lib/validators';
import { COMPANIES_CONFIG } from 'shared/api/keys';
import { getEntities } from './utils';
import { ResGetData, StartEntitiesData } from '../../types';
import { LS } from 'shared/lib/local-storage';



export const getData = createAsyncThunk<
  StartEntitiesData,
  undefined,
  ThunkConfig<Errors>
>(
  'features/dashboard/getData',
  async (_, thunkApi) => {

    const { extra, dispatch, rejectWithValue } = thunkApi;
    
    try {
      // TODO: брать url из companyData
      const { data } = await extra.api.get<ResGetData>(COMPANIES_CONFIG.css_1d3r8);

      // **
      // For development - сохраняем входящие данные в localStorage
      // const data = LS.devGetGSData();
      // console.log('GS data: ', data);
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
