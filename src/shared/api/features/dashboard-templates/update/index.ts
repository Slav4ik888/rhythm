import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, errorHandlers, CustomAxiosError } from 'app/providers/store';
import { Template, PartialTemplate } from 'entities/dashboard-templates';
import { API_PATHS } from '../../../api-paths';
import { BunchAction } from 'shared/lib/structures/bunch';
import { Errors } from 'shared/lib/validators';



export interface PartialTemplateUpdate extends PartialTemplate {
  bunchId: string
}

export interface UpdateTemplate {
  bunchUpdatedMs : number
  template       : Template | PartialTemplate // Add | Update
  bunchAction    : BunchAction
}


/** v.2025-06-28 */
export const updateTemplate = createAsyncThunk<
  UpdateTemplate,
  UpdateTemplate,
  ThunkConfig<Errors>
>(
  'features/dashboardTemplates/updateTemplate',
  async (updateData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const { data } = await extra.api.post<UpdateTemplate>(
        API_PATHS.templates.update,
        updateData
      );

      return data;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || {
        general: `Error in features/dashboardTemplates/updateTemplate/${updateData.template.id}`
      });
    }
  }
);
