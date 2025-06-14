import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsUI } from 'entities/ui';
import { Errors } from 'shared/lib/validators';
import { paths } from 'shared/api';
import { PartialCompany } from 'entities/company';



/**
 * Owner update Company data
 */
export const updateCompany = createAsyncThunk <
  PartialCompany,
  PartialCompany,
  ThunkConfig<Errors>
>(
  'features/company/update',
  async (companyData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      await extra.api.post(paths.company.update, { companyData });

      dispatch(actionsUI.setSuccessMessage('Сохранено'));

      return companyData;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue({ general: 'Error in features/company/update' });
    }
  }
);
