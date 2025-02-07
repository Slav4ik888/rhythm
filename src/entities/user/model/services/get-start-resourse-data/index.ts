import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, errorHandlers, CustomAxiosError } from 'app/providers/store';
import { ViewItem, NO_SHEET_ID } from 'entities/dashboard-view';
import { actionsCompany, Company } from 'entities/company';
import { actionsDashboardView } from 'entities/dashboard-view';
import { paths } from 'shared/api';
import { Errors } from 'shared/lib/validators';
import { User } from '../../types';
import { SetUser } from '../../slice/types';
import { LS } from 'shared/lib/local-storage';
import cfg from 'app/config';
import { cloneObj } from 'shared/helpers/objects';



export interface ReqGetStartResourseData {
  pathname? : string
  sheetId?  : string
}


/** 2024-12-13 */
interface ResGetStartResourseData {
  userData      : User
  companyData   : Company
  dashboardView : ViewItem[]
}


export const getStartResourseData = createAsyncThunk <
  SetUser,
  ReqGetStartResourseData | undefined,
  ThunkConfig<Errors>
>(
  'entities/user/getStartResourseData',
  async(data = {}, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    const { pathname, sheetId = NO_SHEET_ID } = data;
    
    try {
      let user = {} as User, company = {} as Company, viewItems = [] as ViewItem[], companyId = '';

      if (!cfg.IS_DEV) {
        const { data: { userData, companyData, dashboardView } } = await extra.api
          .get<ResGetStartResourseData>(`${paths.user.getStartResourseData}/${sheetId}`);
        user      = cloneObj(userData);
        company   = cloneObj(companyData);
        viewItems = dashboardView;
        companyId = companyData.id;
      }
      else { // На случай отсутствия интернета (для разработки)
        companyId = LS.getLastCompanyId();
        user      = LS.getUserState(companyId)?.user;
        company   = LS.getCompanyState(companyId)?.company;
        viewItems = Object.values(LS.getDashboardView(companyId));
      }

      dispatch(actionsCompany.setCompany({ companyId, company }));
      dispatch(actionsDashboardView.setDashboardView({ companyId, viewItems }));
      
      return { companyId, user };
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch, pathname);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in entitiesUser/getStartResourseData' });
    }
  }
);
