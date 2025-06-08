import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsUI } from 'entities/ui';
import { paths } from 'shared/api';
import { Errors } from 'shared/lib/validators';



interface ResSendEmailConfirmation {
  message: string
}


/**
 * TODO: перенести в фичи  Auth/signup
 * Повторная отправка ссылки для подтверждения почты
 */
export const sendEmailConfirmation = createAsyncThunk <
  undefined,
  string,
  ThunkConfig<Errors>
>(
  'entities/user/sendEmailConfirmation',
  /* eslint-disable-next-line consistent-return */
  async (email, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const { data: { message } } = await extra.api
        .get<ResSendEmailConfirmation>(`${paths.user.sendEmailConfirmation}/${email}`);

      dispatch(actionsUI.setSuccessMessage(message));
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue({ general: 'Error in entitiesUser/sendEmailConfirmation' });
    }
  }
);
