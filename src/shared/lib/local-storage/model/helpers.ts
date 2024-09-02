import { ColorMode } from 'app/providers/theme';
import { DashboardData } from 'entities/dashboard';
import { setStorageData, getStorageData, removeStorageData } from './main';
import { Names } from './names';


export const setColorMode = (data: ColorMode) => setStorageData('ColorMode', data);
export const getColorMode = () => getStorageData<ColorMode>('ColorMode');


export const setDashboardData = (data: DashboardData) => setStorageData('DashboardData', data);
export const getDashboardData = () => getStorageData<object>('DashboardData') as DashboardData;

/** Auth */
export const setAcceptedCookie = () => setStorageData(Names.ACCEPTED_COOKIE, 'true');
export const getAcceptedCookie = (): string => getStorageData(Names.ACCEPTED_COOKIE);
