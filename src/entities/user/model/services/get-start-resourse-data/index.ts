import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, errorHandlers, CustomAxiosError } from 'app/providers/store';
import { CardItem, NO_SHEET_ID } from 'entities/dashboard-view';
import { actionsCompany, Company } from 'entities/company';
import { actionsDashboardView } from 'entities/dashboard-view';
import { paths } from 'shared/api';
import { Errors } from 'shared/lib/validators';
import { User } from '../../types';




export interface ReqGetStartResourseData {
  pathname? : string
  sheetId?  : string
}


/** 2024-12-13 */
interface ResGetStartResourseData {
  userData      : User
  companyData   : Company
  dashboardView : CardItem[]
}


export const getStartResourseData = createAsyncThunk <
  User,
  ReqGetStartResourseData | undefined,
  ThunkConfig<Errors>
>(
  'entities/user/getStartResourseData',
  async(data = {}, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    const { pathname, sheetId = NO_SHEET_ID } = data;
    
    try {
      const { data: { userData, companyData, dashboardView } } = await extra.api
        .get<ResGetStartResourseData>(`${paths.user.getStartResourseData}/${sheetId}`);
      
      dispatch(actionsCompany.setCompany(companyData));
      dispatch(actionsDashboardView.setDashboardView({ companyId: companyData.id, cardItems: dashboardView }));
      
      return userData;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch, pathname);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in entitiesUser/getStartResourseData' });
    }
  }
);
