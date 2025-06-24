import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, errorHandlers, CustomAxiosError } from 'app/providers/store';
import { ViewItem } from '../../types';
import { paths } from 'shared/api';
import { Errors } from 'shared/lib/validators';
import { LS } from 'shared/lib/local-storage';
import cfg from 'app/config';
import { SetDashboardViewItems } from '../../slice/types';
import { BunchesUpdated } from 'entities/company';



export interface ReqGetBunches {
  companyId      : string
  bunchIds       : string[]
  pathname       : string // For errorHandlers
  bunchesUpdated : BunchesUpdated
  // sheetId?  : string
}


/** 2025-06-23 */
interface ResGetBunches {
  viewItems: ViewItem[]
}


export const getBunches = createAsyncThunk<
  SetDashboardViewItems,
  ReqGetBunches,
  ThunkConfig<Errors>
>(
  'entities/dashboardView/getBunches',
  async (data, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    const { pathname, bunchIds, bunchesUpdated } = data || {};

    try {
      let viewItems = [] as ViewItem[],
        companyId = '';

      // На время разработки, использовать данные сохраннённые в LS,
      // а также случай отсутствия интернета (для разработки)
      if (cfg.IS_DEV) {
        companyId = LS.getLastCompanyId() || '';
        viewItems = LS.getDashboardViewItems(companyId);
      }
      else {
        const { data: { viewItems: vi } } = await extra.api
          .post<ResGetBunches>(paths.dashboard.bunch.get, { companyId: data.companyId, bunchIds });

        viewItems = vi;
        companyId = data.companyId;
      }

      return { companyId, viewItems, bunchesUpdated };
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch, pathname);
      return rejectWithValue((e as CustomAxiosError).response.data || {
        general: 'Error in entities/dashboardView/getBunches'
      });
    }
  }
);
