import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsUI } from 'entities/ui';
import { Errors } from 'shared/lib/validators';
import { getEntities } from './utils';
import { StartEntitiesData } from '../../types';
import { LS } from 'shared/lib/local-storage';
import { apiWithoutCookie } from 'shared/api';
import { Company } from 'entities/company';
import { __devLog } from 'shared/lib/tests/__dev-log';



export interface ResGetGoogleData {
  companyId : string
  data      : StartEntitiesData
}


export const getData = createAsyncThunk<
  ResGetGoogleData,
  Company, // GoogleData url
  ThunkConfig<Errors>
>(
  'features/dashboard/getData',
  async (company, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;

    try {
      const { data } = await apiWithoutCookie.get(company.googleData.url);

      // **
      // For development - сохраняем входящие данные в localStorage
      // const data = LS.devGetGSData(company.id as ActivatedCompanyId);
      __devLog('GS data: ', data);
      LS.devSetGSData(company.id, data);

      const gsData = getEntities(data);
      __devLog('gsData: ', gsData);
      dispatch(actionsUI.setSuccessMessage('Данные с гугл-таблицы загружены'));

      return { companyId: company.id, data: gsData };
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || {
        general: 'Error in features/dashboard/getData'
      });
    }
  }
);
