import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsCompany, Company } from 'entities/company';
import { API_PATHS } from '../../../api-paths';
import { Errors } from 'shared/lib/validators';


/**
 * Logout User & set initial
 */
export const logout = createAsyncThunk <
  undefined,
  undefined,
  ThunkConfig<Errors>
>(
  'features/user/logout',
  // eslint-disable-next-line consistent-return
  async (_, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      await extra.api.post(API_PATHS.user.logout);

      dispatch(actionsCompany.setCompany({ company: {} as Company }));
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue({ general: 'Error in features/user/logout' });
    }
  }
);
