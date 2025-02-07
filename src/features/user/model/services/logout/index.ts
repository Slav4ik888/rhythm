import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsCompany, Company } from 'entities/company';
import { paths } from 'shared/api';
import { Errors } from 'shared/lib/validators';


/**
 * Logout User & set initial
 */
export const serviceLogout = createAsyncThunk <
  undefined,
  undefined,
  ThunkConfig<Errors>
>(
  'features/user/logout',
  async (_, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    
    try {
      await extra.api.get(paths.user.logout);
      
      dispatch(actionsCompany.setCompany({ companyId: '', company: {} as Company}));
      return;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue({ general: 'Error in features/user/logout' });
    }
  }
);




    