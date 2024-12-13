import { UIConfiguratorProviderState } from 'app/providers/theme';
import { DashboardViewEntities, StateSchemaDashboard } from 'entities/dashboard';
import { ResGetData } from 'features/dashboard/get-data/model/types';
import { setStorageData, getStorageData, removeStorageData } from './main';
import { Names } from './names';


export const setUIConfiguratorState = (state: UIConfiguratorProviderState) => setStorageData('UIConfiguratorState', state);
export const getUIConfiguratorState = () => (getStorageData<object>('UIConfiguratorState') || {}) as UIConfiguratorProviderState;


export const setDashboardState = (companyId: string, state: StateSchemaDashboard) => setStorageData(`DashboardState-${companyId}`, state);
export const getDashboardState = (companyId: string) => (getStorageData<object>(`DashboardState-${companyId}`) || {}) as StateSchemaDashboard;

export const setDashboardView = (companyId: string, view: DashboardViewEntities) => setStorageData(`DashboardView-${companyId}`, view);
export const getDashboardView = (companyId: string) => (getStorageData<object>(`DashboardView-${companyId}`) || {}) as DashboardViewEntities;


export const devSetGSData = (companyId: string, data: ResGetData) => setStorageData(`Dashboard-GSData-${companyId}`, data);
export const devGetGSData = (companyId: string) => getStorageData<object>(`Dashboard-GSData-${companyId}`) as ResGetData;


// export const setDashboardData = (data: DashboardData) => setStorageData('DashboardData', data);
// export const getDashboardData = () => getStorageData<object>('DashboardData') as DashboardData;

/** Auth */
export const setAcceptedCookie = () => setStorageData(Names.ACCEPTED_COOKIE, 'true');
export const getAcceptedCookie = (): string => getStorageData(Names.ACCEPTED_COOKIE);
