import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsUI } from 'entities/ui';
import { Errors } from 'shared/lib/validators';
import { PartialUser } from 'entities/user';
import { userApi } from '../api';



/**
 * Owner update User data
 */
export const updateUser = createAsyncThunk <
  PartialUser,
  PartialUser,
  ThunkConfig<Errors>
>(
  'features/user/update',
  async (userData, thunkApi) => {
    const { extra: { api }, dispatch, rejectWithValue } = thunkApi;

    try {
      // TODO: const { data: { userData } } =  PATCH
      // await extra.api.post(API_PATHS.user.update, { userData });
      await userApi.updateUser(api, userData);

      dispatch(actionsUI.setSuccessMessage('Сохранено'));

      return userData;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue({ general: 'Error in features/user/update' });
    }
  }
);
