import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, errorHandlers, CustomAxiosError } from 'app/providers/store';
import { API_PATHS } from '../../../../../shared/api/api-paths';
import { Errors } from 'shared/lib/validators';
// import { LS } from 'shared/lib/local-storage';



export interface ReqGetBunches {
  companyId : string
  hintId    : string | null
}


export const dontShowAgain = createAsyncThunk<
  undefined,
  ReqGetBunches,
  ThunkConfig<Errors>
>(
  'features/hints/dontShowAgain',
  async (data, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    const { hintId, companyId } = data || {};

    try {
      // TODO: if not auth & companyId === undefined
      // TODO: in serverside
      await extra.api.post(API_PATHS.user.update, { companyId, hintId });

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
