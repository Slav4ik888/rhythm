import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsUI } from 'entities/ui';
import { Errors } from 'shared/lib/validators';
import { COMPANIES_CONFIG } from 'shared/api/keys';
import { getEntities } from './utils';
import { ResGetData, PayloadGetData } from '../../types';
import { LS } from 'shared/lib/local-storage';
import { CompanyId } from 'entities/companies';



export const getData = createAsyncThunk<
  PayloadGetData,
  CompanyId,
  ThunkConfig<Errors>
>(
  'features/dashboard/getData',
  async (companyId, thunkApi) => {

    const { extra, dispatch, rejectWithValue } = thunkApi;
    
    try {
      // const { data } = await extra.api.get<ResGetData>(COMPANIES_CONFIG[companyId]);

      // **
      // For development - сохраняем входящие данные в localStorage
      const data = LS.devGetGSData(companyId);
      // console.log('GS data: ', data);
      LS.devSetGSData(companyId, data);

      const gsData = getEntities(data);
      dispatch(actionsUI.setSuccessMessage("Данные с гугл-таблицы загружены"));
    
      return { data: gsData, companyId };
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in pagesSignup/signupByLogin' });
    }
  }
);
