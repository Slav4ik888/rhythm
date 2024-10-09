import { ColorMode } from 'app/providers/theme-old';
import { CompanyId } from 'entities/companies';
import { StateSchemaDashboard } from 'entities/dashboard';
import { ResGetData } from 'features/dashboard/get-data/model/types';
import { setStorageData, getStorageData, removeStorageData } from './main';
import { Names } from './names';


export const setColorMode = (companyId: CompanyId, data: ColorMode) => setStorageData(companyId + '-ColorMode', data);
export const getColorMode = (companyId: CompanyId) => getStorageData<ColorMode>(companyId + '-ColorMode');


export const setDashboardState = (companyId: CompanyId, state: StateSchemaDashboard) => setStorageData(companyId + '-DashboardState', state);
export const getDashboardState = (companyId: CompanyId) => getStorageData<object>(companyId + '-DashboardState') as StateSchemaDashboard;

export const devSetGSData = (companyId: CompanyId, data: ResGetData) => setStorageData(companyId + '-Dashboard-GSData', data);
export const devGetGSData = (companyId: CompanyId) => getStorageData<object>(companyId + '-Dashboard-GSData') as ResGetData;


// export const setDashboardData = (data: DashboardData) => setStorageData('DashboardData', data);
// export const getDashboardData = () => getStorageData<object>('DashboardData') as DashboardData;

/** Auth */
export const setAcceptedCookie = () => setStorageData(Names.ACCEPTED_COOKIE, 'true');
export const getAcceptedCookie = (): string => getStorageData(Names.ACCEPTED_COOKIE);
