import { UIConfiguratorProviderState } from 'app/providers/theme';
import { StateSchemaDashboard } from 'entities/dashboard';
import { ResGetData } from 'features/dashboard/get-data/model/types';
import { setStorageData, getStorageData, removeStorageData } from './main';
import { Names } from './names';


export const setUIConfiguratorState = (state: UIConfiguratorProviderState) => setStorageData('UIConfiguratorState', state);
export const getUIConfiguratorState = () => (getStorageData<object>('UIConfiguratorState') || {}) as UIConfiguratorProviderState;


export const setDashboardState = (state: StateSchemaDashboard) => setStorageData('DashboardState', state);
export const getDashboardState = () => (getStorageData<object>('DashboardState') || {}) as StateSchemaDashboard;

export const devSetGSData = (data: ResGetData) => setStorageData('Dashboard-GSData', data);
export const devGetGSData = () => getStorageData<object>('Dashboard-GSData') as ResGetData;


// export const setDashboardData = (data: DashboardData) => setStorageData('DashboardData', data);
// export const getDashboardData = () => getStorageData<object>('DashboardData') as DashboardData;

/** Auth */
export const setAcceptedCookie = () => setStorageData(Names.ACCEPTED_COOKIE, 'true');
export const getAcceptedCookie = (): string => getStorageData(Names.ACCEPTED_COOKIE);
