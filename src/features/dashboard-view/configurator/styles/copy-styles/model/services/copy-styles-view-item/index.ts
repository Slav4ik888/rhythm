import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';
import { PartialViewItem } from 'entities/dashboard-view';



export interface CopyStylesItem {
  companyId : string
  viewItem  : PartialViewItem
}


/**
 * Копируем стили для выбранного элемента,
 */
export const copyStylesViewItem = createAsyncThunk<
  CopyStylesItem,
  CopyStylesItem,
  ThunkConfig<Errors>
>(
  'features/dashboardView/copyStylesViewItem',
  async (data, thunkApi) => {
    const { dispatch, rejectWithValue, extra } = thunkApi;

    try {
      await extra.api.post(paths.dashboard.view.update, { viewItem: data.viewItem });

      return data;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in features/dashboardView/copyStylesViewItem' });
    }
  }
);
