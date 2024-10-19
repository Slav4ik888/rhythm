import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsUI } from 'entities/ui';
import { paths } from 'shared/api';
import { Errors } from 'shared/lib/validators';
import { User } from '../../types';



interface ResUpdateUser {
  message: string
}


/**
 * Обновляем данные о пользователе
 */
export const updateUser = createAsyncThunk <
  Partial<User>,
  Partial<User>,
  ThunkConfig<Errors>
>(
  'entities/user/update',
  async (userData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    
    try {
      const { data: { message } } = await extra.api.post<ResUpdateUser>(paths.user.update, { userData });
      
      dispatch(actionsUI.setSuccessMessage(message));
    
      return userData;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue({ general: 'Error in entities/user/update' });
    }
  }
);




    