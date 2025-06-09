import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';
import { PartialViewItem } from 'entities/dashboard-view';



export interface UpdateViewItems {
  companyId          : string
  viewItems          : PartialViewItem[]
  newStoredViewItem? : PartialViewItem // для сохранения из UnsavedChanges чтобы сохранился текущий элемент
  // name               : string // for dev - the name of the component calling this function
}

/**
 * Обновляем изменившиеся стили у 1 элемента,
 * без сохранения изменений в слайс, тк они уже там
 * в слайсе сохраняем в LS
 */
export const updateViewItems = createAsyncThunk<
  UpdateViewItems,
  UpdateViewItems,
  ThunkConfig<Errors>
>(
  'features/dashboardView/updateViewItems',
  async (data, thunkApi) => {
    const { dispatch, rejectWithValue, extra } = thunkApi;

    try {
      await extra.api.post(paths.dashboard.view.update, { viewItems: data.viewItems });

      return data;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || {
        general: 'Error in features/dashboardView/updateViewItems'
      });
    }
  }
);
