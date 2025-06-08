import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';
import { ViewItem } from 'entities/dashboard-view';



export interface AddNewViewItem {
  companyId : string
  viewItem  : ViewItem
}

export const addNewViewItem = createAsyncThunk<
  AddNewViewItem,
  AddNewViewItem,
  ThunkConfig<Errors>
>(
  'features/dashboardView/addNewViewItem',
  async (data, thunkApi) => {
    const { dispatch, rejectWithValue, extra } = thunkApi;
    const { viewItem } = data;

    try {
      await extra.api.post(paths.dashboard.view.add, { viewItem });

      return data;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || {
        general: 'Error in features/dashboardView/addNewViewItem'
      });
    }
  }
);
