import { createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxiosError, errorHandlers, ThunkConfig } from 'app/providers/store';
import { actionsUI } from 'entities/ui';
import { Errors } from 'shared/lib/validators';
import { GoogleSheetData } from '../../types';
import cfg from 'shared/api/keys';
import { DashboardPeriod, DashboardData } from 'entities/dashboard';
import { transformGSData } from './utils';



interface ResGetData {
  weekData  : GoogleSheetData
  monthData : GoogleSheetData
}

interface SelectedData {
  selectedPeriod : DashboardPeriod
  dateStart      : number
  dateEnd        : number
}

export const getData = createAsyncThunk<
  DashboardData,
  SelectedData,
  ThunkConfig<Errors>
>(
  'features/dashboard/getData',
  async (selectedData, thunkApi) => {

    const { extra, dispatch, rejectWithValue } = thunkApi;
    const { selectedPeriod, dateStart, dateEnd } = selectedData;
    
    try {
      const { data: { monthData, weekData } } = await extra.api.get<ResGetData>(cfg.URL_OSNOVA);

      dispatch(actionsUI.setSuccessMessage("Данные с гугл-таблицы загружены"));
    
      return {
        weekData  : transformGSData(weekData),
        monthData : transformGSData(monthData),
        selectedPeriod,
        dateStart,
        dateEnd,
        lastUpdated: new Date().getTime()
      };
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in pagesSignup/signupByLogin' });
    }
  }
);
