import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsUI } from 'entities/ui';
import { Errors } from 'shared/lib/validators';
import { API_PATHS } from 'shared/api';
import { User } from 'entities/user';



/**
 * Owner update User data
 */
export const serviceUpdateUser = createAsyncThunk <
  Partial<User>,
  Partial<User>,
  ThunkConfig<Errors>
>(
  'features/user/update',
  async (userData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      // TODO: const { data: { userData } } =  PATCH
      await extra.api.post(API_PATHS.user.update, { userData });

      dispatch(actionsUI.setSuccessMessage('Сохранено'));

      return userData;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue({ general: 'Error in features/user/update' });
    }
  }
);
