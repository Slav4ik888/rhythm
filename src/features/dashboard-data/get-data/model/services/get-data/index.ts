import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsUI } from 'entities/ui';
import { Errors } from 'shared/lib/validators';
import { getEntities } from './utils';
import { StartEntitiesData } from '../../types';
import { LS } from 'shared/lib/local-storage';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { API_PATHS } from 'shared/api';



export interface ResGetGoogleData {
  companyId : string
  data      : StartEntitiesData
}


export const getData = createAsyncThunk<
  ResGetGoogleData,
  string,
  ThunkConfig<Errors>
>(
  'features/dashboard/getData',
  async (companyId, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const { data } = await extra.api.post(API_PATHS.google.getData, { companyId });

      // **
      // For development - сохраняем входящие данные в localStorage
      __devLog('GS data: ', data);
      LS.devSetGSData(companyId, data);

      const gsData = getEntities(data);
      __devLog('gsData: ', gsData);
      dispatch(actionsUI.setSuccessMessage('Данные с гугл-таблицы загружены'));

      return {
        companyId,
        data: gsData
      };
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || {
        general: 'Error in features/dashboard/getData'
      });
    }
  }
);
