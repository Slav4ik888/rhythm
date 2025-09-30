import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, errorHandlers, CustomAxiosError } from 'app/providers/store';
import { Errors } from 'shared/lib/validators';
import { PartialUser } from 'entities/user';
import { userApi } from '../../user';
// import { LS } from 'shared/lib/local-storage';



export type ReqDontShowAgain = PartialUser & {
  settings: {
    hintsDontShowAgain: string[] // all hints ids that user dont want to see again
  }
}


export const dontShowAgain = createAsyncThunk<
  undefined,
  ReqDontShowAgain,
  ThunkConfig<Errors>
>(
  'features/hints/dontShowAgain',
  async (userData, thunkApi) => {
    const { extra: { api }, dispatch, rejectWithValue } = thunkApi;

    try {
      // TODO: if not auth & companyId === undefined
      await userApi.updateUser(api, userData);

      return undefined;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || {
        general: 'Error in features/hints/dontShowAgain'
      });
    }
  }
);
