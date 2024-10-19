import { PaletteMode } from '@mui/material';
import { CompanyId } from 'entities/company';
import { StateSchemaDashboard } from 'entities/dashboard';
import { ResGetData } from 'features/dashboard/get-data/model/types';
import { setStorageData, getStorageData, removeStorageData } from './main';
import { Names } from './names';


export const setPaletteMode = (companyId: CompanyId, data: PaletteMode) => setStorageData(companyId + '-PaletteMode', data);
export const getPaletteMode = (companyId: CompanyId) => getStorageData<PaletteMode>(companyId + '-PaletteMode');


export const setDashboardState = (companyId: CompanyId, state: StateSchemaDashboard) => setStorageData(companyId + '-DashboardState', state);
export const getDashboardState = (companyId: CompanyId) => getStorageData<object>(companyId + '-DashboardState') as StateSchemaDashboard;

export const devSetGSData = (companyId: CompanyId, data: ResGetData) => setStorageData(companyId + '-Dashboard-GSData', data);
export const devGetGSData = (companyId: CompanyId) => getStorageData<object>(companyId + '-Dashboard-GSData') as ResGetData;


// export const setDashboardData = (data: DashboardData) => setStorageData('DashboardData', data);
// export const getDashboardData = () => getStorageData<object>('DashboardData') as DashboardData;

/** Auth */
export const setAcceptedCookie = () => setStorageData(Names.ACCEPTED_COOKIE, 'true');
export const getAcceptedCookie = (): string => getStorageData(Names.ACCEPTED_COOKIE);
