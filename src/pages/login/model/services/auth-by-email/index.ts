import { createAsyncThunk } from '@reduxjs/toolkit';
import cfg from 'app/config';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { getCookie } from './utils';
import { actionsUser, getStartResourseData } from 'entities/user';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';



export interface ResAuthByLogin {
  status: string
}


/** Запрашиваемые данные при входе в аккаунт */
export interface AuthByLogin {
  email    : string
  password : string
}


export const authByLogin = createAsyncThunk<
  undefined,
  AuthByLogin,
  ThunkConfig<Errors>
>(
  'pagesLogin/authByLogin',
  // eslint-disable-next-line consistent-return
  async (authByLogin, thunkApi) => {
    const
      { extra, dispatch, rejectWithValue } = thunkApi,
      csrfToken = getCookie(cfg.COOKIE_NAME);

    try {
      await extra.api.post(paths.auth.login.byEmail, { authByLogin, csrfToken });

      dispatch(actionsUser.setAuth(true));
      dispatch(getStartResourseData());
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || {
        general: 'Error in pagesLogin/authByLogin'
      });
    }
  }
);
