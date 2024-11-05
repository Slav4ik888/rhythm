import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, errorHandlers, CustomAxiosError } from 'app/providers/store';
import { actionsCompany, CompanyData } from 'entities/company';
import { paths } from 'shared/api';
import { Errors } from 'shared/lib/validators';
import { User } from '../../types';



/** 2024-10-18 */
interface ResGetStartResourseData {
  userData    : User
  companyData : CompanyData
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
      const { data: { userData, companyData } } = await extra.api
        .get<ResGetStartResourseData>(paths.user.getStartResourseData);
      
      dispatch(actionsCompany.setCompanyData(companyData));
      
      return userData;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch, pathname);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in entitiesUser/getStartResourseData' });
    }
  }
);
