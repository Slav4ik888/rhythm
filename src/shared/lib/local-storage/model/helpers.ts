import { ColorMode } from 'app/providers/theme';
import { StateSchemaDashboard } from 'entities/dashboard';
import { setStorageData, getStorageData, removeStorageData } from './main';
import { Names } from './names';


export const setColorMode = (data: ColorMode) => setStorageData('ColorMode', data);
export const getColorMode = () => getStorageData<ColorMode>('ColorMode');


export const setDashboardState = (state: StateSchemaDashboard) => setStorageData('DashboardState', state);
export const getDashboardState = () => getStorageData<object>('DashboardState') as StateSchemaDashboard;

// export const setDashboardData = (data: DashboardData) => setStorageData('DashboardData', data);
// export const getDashboardData = () => getStorageData<object>('DashboardData') as DashboardData;

/** Auth */
export const setAcceptedCookie = () => setStorageData(Names.ACCEPTED_COOKIE, 'true');
export const getAcceptedCookie = (): string => getStorageData(Names.ACCEPTED_COOKIE);
