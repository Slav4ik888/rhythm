import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, errorHandlers, CustomAxiosError } from 'app/providers/store';
import { Company, actionsCompany } from 'entities/company';
import { actionsDocuments, Document } from 'entities/documents';
import { actionsFolders, Folder } from 'entities/folders';
import { paths } from 'shared/api';
import { LS } from 'shared/lib/local-storage';
import { Errors } from 'shared/lib/validators';
import { User } from '../../types';



/** 2024-03-06 */
interface ResGetStartResourseData {
  userData    : User
  companyData : Company
  folders     : Folder[]
  breadcrumbs : Folder[]
  documents   : Document[]
}


export const getStartResourseData = createAsyncThunk <
  User,
  string,
  ThunkConfig<Errors>
>(
  'entitiesUser/getStartResourseData',
  async (pathname, thunkApi) => {
    const
      { extra, dispatch, rejectWithValue } = thunkApi,
      activeFolder = LS.getActiveFolder() || {} as Folder;
    
    try {
      const { data: { userData, companyData, folders, breadcrumbs, documents } } = await extra.api
        .post<ResGetStartResourseData>(paths.user.getStartResourseData, { activeFolder });
      
      console.log('folders: ', folders);
      console.log('breadcrumbs: ', breadcrumbs);
      console.log('documents: ', documents);
      
      dispatch(actionsCompany.setCompany(companyData));
      dispatch(actionsFolders.addFolders([...folders, ...breadcrumbs]));
      dispatch(actionsDocuments.addDocuments(documents));
      
      return userData;
    }
    catch (e) {
      errorHandlers(e as CustomAxiosError, dispatch, pathname);
      return rejectWithValue((e as CustomAxiosError).response.data || { general: 'Error in entitiesUser/getStartResourseData' });
    }
  }
);
