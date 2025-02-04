import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';
import { PartialViewItem } from 'entities/dashboard-view';



export interface UpdateViewItem {
  companyId : string
  viewItem  : PartialViewItem
}

/**
 * Обновляем изменившиеся стили у 1 элемента,
 * без сохранения изменений в слайс, тк они уже там
 * в слайсе сохраняем в LS
 */
export const updateViewItem = createAsyncThunk<
  UpdateViewItem,
  UpdateViewItem,
  ThunkConfig<Errors>
>(
  'features/dashboardView/updateViewItem',
  async (data, thunkApi) => {
    const { dispatch, rejectWithValue, extra } = thunkApi;

    try {
      await extra.api.post(paths.dashboard.view.update, { viewItem: data.viewItem });

      return data;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in features/dashboardView/updateViewItem' });
    }
  }
);
