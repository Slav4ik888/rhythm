import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';
import { ViewItem } from 'entities/dashboard-view';
import { ActivatedCompanyId } from 'entities/company';



export interface CreateGroupViewItems {
  companyId : ActivatedCompanyId
  viewItems : ViewItem[]
}

export const createGroupViewItems = createAsyncThunk<
  CreateGroupViewItems,
  CreateGroupViewItems,
  ThunkConfig<Errors>
>(
  'features/dashboardView/createGroupViewItems',
  async (data, thunkApi) => {

    const { dispatch, rejectWithValue, extra } = thunkApi;
    const { viewItems } = data;

    try {
      await extra.api.post(paths.dashboard.view.createGroupItems, { viewItems });

      return data;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in features/dashboardView/createGroupViewItems' });
    }
  }
);
