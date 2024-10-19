import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsCompany, CompanyData } from 'entities/company';
import { paths } from 'shared/api';
import { Errors } from 'shared/lib/validators';


/**
 * Logout User & set initial
 */
export const logout = createAsyncThunk <
  undefined,
  string,
  ThunkConfig<Errors>
>(
  'entitiesUser/logout',
  async (email, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    
    try {
      await extra.api.get(`${paths.auth.logout}/${email}`);
      
      dispatch(actionsCompany.setCompanyData({} as CompanyData));
      return;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue({ general: 'Error in entitiesUser/logout' });
    }
  }
);




    