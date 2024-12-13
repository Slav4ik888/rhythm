import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, errorHandlers, CustomAxiosError } from 'app/providers/store';
import { CardItem } from 'entities/card-item';
import { actionsCompany, Company } from 'entities/company';
import { actionsDashboard } from 'entities/dashboard';
import { paths } from 'shared/api';
import { Errors } from 'shared/lib/validators';
import { User } from '../../types';



/** 2024-12-13 */
interface ResGetStartResourseData {
  userData      : User
  companyData   : Company
  dashboardView : CardItem[]
}


export const getStartResourseData = createAsyncThunk <
  User,
  undefined,
  ThunkConfig<Errors>
>(
  'entities/user/getStartResourseData',
  async (pathname, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    
    try {
      const { data: { userData, companyData, dashboardView } } = await extra.api
        .get<ResGetStartResourseData>(paths.user.getStartResourseData);
      
      dispatch(actionsCompany.setCompany(companyData));
      dispatch(actionsDashboard.setDashboardView({ companyId: companyData.id, cardItems: dashboardView }));
      
      return userData;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch, pathname);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in entitiesUser/getStartResourseData' });
    }
  }
);
