import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, errorHandlers, CustomAxiosError } from 'app/providers/store';
import { ViewItem } from '../../types';
import { NO_SHEET_ID } from '../../consts';
import { paths } from 'shared/api';
import { Errors } from 'shared/lib/validators';
import { LS } from 'shared/lib/local-storage';
import cfg from 'app/config';
import { SetDashboardView } from '../../slice/types';



export interface ReqGetViewItems {
  companyId : string
  pathname  : string
  sheetId?  : string
}


/** 2024-12-13 */
interface ResGetViewItems {
  dashboardView : ViewItem[]
}

export const getViewItems = createAsyncThunk<
  SetDashboardView,
  ReqGetViewItems,
  ThunkConfig<Errors>
>(
  'entities/dashboardView/getViewItems',
  async (data, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    const { pathname, sheetId = NO_SHEET_ID } = data || {};

    try {
      let viewItems = [] as ViewItem[],
        companyId = '';

      // На время разработки, использовать данные сохраннённые в LS,
      // а также случай отсутствия интернета (для разработки)
      if (cfg.IS_DEV) {
        companyId = LS.getLastCompanyId() || '';
        viewItems = LS.getDashboardView(companyId) as ViewItem[];
      }
      else {
        const { data: { dashboardView } } = await extra.api
          .post<ResGetViewItems>(paths.dashboard.view.get, { sheetId, companyId: data.companyId });

        viewItems = dashboardView;
        companyId = data.companyId;
      }

      return { companyId, viewItems };
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch, pathname);
      return rejectWithValue((e as CustomAxiosError).response.data || {
        general: 'Error in entities/dashboardView/getViewItems'
      });
    }
  }
);
