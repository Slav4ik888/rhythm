import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, errorHandlers, CustomAxiosError } from 'app/providers/store';
import { API_PATHS } from 'shared/api';
import { BunchesUpdated } from 'shared/lib/structures/bunch';
import { Errors } from 'shared/lib/validators';
import { Template } from '../../types';



/** 2025-06-29 */
export interface ResGetTemplates {
  bunchUpdated : BunchesUpdated
  templates    : Template[]
}


export const getTemplates = createAsyncThunk<
  ResGetTemplates,
  undefined,
  ThunkConfig<Errors>
>(
  'entities/dashboardTemplates/getTemplates',
  async (_, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const { data } = await extra.api.get<ResGetTemplates>(API_PATHS.templates.getTemplates);

      return data;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || {
        general: 'Error in entities/dashboardTemplates/getTemplates'
      });
    }
  }
);
