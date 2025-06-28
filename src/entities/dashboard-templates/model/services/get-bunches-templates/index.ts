import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, errorHandlers, CustomAxiosError } from 'app/providers/store';
import { paths } from 'shared/api';
import { Errors } from 'shared/lib/validators';
import { Template } from '../../types';



/** 2025-06-27 */
export interface ResGetTemplates {
  templates: Template[]
}


export const getBunchesTemplates = createAsyncThunk<
  ResGetTemplates,
  undefined,
  ThunkConfig<Errors>
>(
  'entities/dashboardTemplates/getBunchTemplates',
  async (_, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const { data: { templates } } = await extra.api.get<ResGetTemplates>(paths.templates.bunch.get);

      return { templates };
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || {
        general: 'Error in entities/dashboardTemplates/getBunchTemplates'
      });
    }
  }
);
