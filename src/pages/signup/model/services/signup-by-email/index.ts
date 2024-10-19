import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsUser, User } from 'entities/user';
import { actionsCompany, CompanyData } from 'entities/company';
import { SignupData } from '../../types';
import { actionsUI } from 'entities/ui';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';



interface ResSignup {
  newUserData    : User
  newCompanyData : CompanyData
  message        : string
}

export const signupByEmail = createAsyncThunk<
  undefined,
  SignupData,
  ThunkConfig<Errors>
>(
  'pagesSignup/signupByEmail',
  async (signupData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    
    try {
      const { data: { newUserData, newCompanyData, message } } = await extra.api.post<ResSignup>(paths.auth.signup.byEmail, { signupData });
      console.log('data: ', newUserData, newCompanyData, message);
      
      dispatch(actionsUser.setUser(newUserData));
      dispatch(actionsCompany.setCompanyData(newCompanyData));
      dispatch(actionsUI.setSuccessMessage(message));
    
      return;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in pagesSignup/signupByEmail' });
    }
  }
);
