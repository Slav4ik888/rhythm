import { ColorMode } from 'app/providers/theme';
import { StateSchemaDashboard } from 'entities/dashboard';
import { DashboardPeriod } from 'entities/dashboard/model/types';
import { setStorageData, getStorageData, removeStorageData } from './main';
import { Names } from './names';


export const setColorMode = (data: ColorMode) => setStorageData('ColorMode', data);
export const getColorMode = () => getStorageData<ColorMode>('ColorMode');

type LSDashboardData = Omit<StateSchemaDashboard, 'loading' | 'errors'>

export const setDashboardData = (data: LSDashboardData) => setStorageData('DashboardData', data);
export const getDashboardData = () => getStorageData<object>('DashboardData') as LSDashboardData;

/** Auth */
export const setAcceptedCookie = () => setStorageData(Names.ACCEPTED_COOKIE, 'true');
export const getAcceptedCookie = (): string => getStorageData(Names.ACCEPTED_COOKIE);
