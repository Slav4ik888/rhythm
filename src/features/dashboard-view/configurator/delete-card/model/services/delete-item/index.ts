import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';
import { ViewItemId } from 'entities/dashboard-view';



export interface DeleteViewItem {
  viewUpdatedMs : number
  companyId     : string
  allIds        : ViewItemId[] // Ids всех вложенных элементов
}

/** Удаляем выбранный элемент */
export const deleteViewItem = createAsyncThunk<
  DeleteViewItem,
  DeleteViewItem,
  ThunkConfig<Errors>
>(
  'features/dashboardView/deleteViewItem',
  async (data, thunkApi) => {
    const { dispatch, rejectWithValue, extra } = thunkApi;

    try {
      // await extra.api.post(paths.dashboard.view.delete, data);

      return data;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || {
        general: 'Error in features/dashboardView/deleteViewItem'
      });
    }
  }
);
