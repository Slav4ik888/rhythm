import { createAsyncThunk } from '@reduxjs/toolkit';
import cfg from 'app/config';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { getCookie } from './utils';
import { actionsUser, User } from 'entities/user';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';
import { actionsCompany, Company } from 'entities/company';



export interface ResAuthByLogin {
  user    : User
  company : Company
  message : string
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
  'pages/login/authByLogin',
  // eslint-disable-next-line consistent-return
  async (authByLogin, thunkApi) => {
    const
      { extra, dispatch, rejectWithValue } = thunkApi,
      csrfToken = getCookie(cfg.COOKIE_NAME);

    try {
      const { data: { user, company } } = await extra.api
        .post<ResAuthByLogin>(paths.auth.login.byEmail, { authByLogin, csrfToken });

      dispatch(actionsUser.setUser({ user, companyId: user.companyId }));
      dispatch(actionsCompany.setCompany({ company }));
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || {
        general: 'Error in pages/login/authByLogin'
      });
    }
  }
);
