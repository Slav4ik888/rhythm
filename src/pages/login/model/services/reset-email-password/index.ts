import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsUI } from 'entities/ui';
import { paths } from 'shared/api';
import { Errors } from 'shared/lib/validators';


export interface ResResetEmailPassword {
  message: string
}


export const resetEmailPassword = createAsyncThunk<
  undefined,
  string,
  ThunkConfig<Errors>
>(
  'pagesLogin/resetEmailPassword',
  async (email, thunkApi) => {
    const { extra, rejectWithValue, dispatch } = thunkApi;

    try {
      const { data: { message } } = await extra.api.post<ResResetEmailPassword>(paths.auth.login.resetEmailPassword, { email });
      
      dispatch(actionsUI.setSuccessMessage(message));
      return;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error pagesLogin/resetEmailPassword' });
    }
  }
);
