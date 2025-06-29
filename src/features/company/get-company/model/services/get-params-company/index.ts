import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, errorHandlers, CustomAxiosError } from 'app/providers/store';
import { ParamsCompany } from 'entities/company';
import { API_PATHS } from 'shared/api';
import { Errors } from 'shared/lib/validators';
import { LS } from 'shared/lib/local-storage';
import cfg from 'app/config';
import { cloneObj } from 'shared/helpers/objects';



export interface ReqGetCompany {
  companyId: string
}

export interface SetParamsCompany {
  paramsCompany: ParamsCompany
}

/** 2025-06-13 */
interface ResGetCompany {
  paramsCompanyData : ParamsCompany
}

/** Возвращает данные компании. */
export const getParamsCompany = createAsyncThunk<
  SetParamsCompany, // ResData
  ReqGetCompany,    // ReqData
  ThunkConfig<Errors>
>(
  'features/company/getParamsCompany',
  async ({ companyId }, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      let paramsCompany = {} as ParamsCompany;

      // На время разработки, использовать данные сохраннённые в LS,
      // а также случай отсутствия интернета (для разработки)
      if (cfg.IS_DEV) {
        paramsCompany = LS.getParamsCompanyState() as ParamsCompany;
      }
      else {
        const { data } = await extra.api.get<ParamsCompany>(`${API_PATHS.paramsCompany.get}/${companyId}`);
        paramsCompany = cloneObj(data);
      }

      return { paramsCompany };
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || {
        general: 'Error in features/company/getParamsCompany'
      });
    }
  }
);
