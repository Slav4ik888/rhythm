import { UIConfiguratorProviderState } from 'app/providers/theme';
import { ActivatedCompanyId } from 'entities/company';
import { StateSchemaDashboard } from 'entities/dashboard';
import { ResGetData } from 'features/dashboard/get-data/model/types';
import { setStorageData, getStorageData, removeStorageData } from './main';
import { Names } from './names';


export const setUIConfiguratorState = (state: UIConfiguratorProviderState) => setStorageData('UIConfiguratorState', state);
export const getUIConfiguratorState = () => (getStorageData<object>('UIConfiguratorState') || {}) as UIConfiguratorProviderState;


export const setDashboardState = (companyId: ActivatedCompanyId, state: StateSchemaDashboard) => setStorageData(`DashboardState-${companyId}`, state);
export const getDashboardState = (companyId: ActivatedCompanyId) => (getStorageData<object>(`DashboardState-${companyId}`) || {}) as StateSchemaDashboard;

export const devSetGSData = (companyId: ActivatedCompanyId, data: ResGetData) => setStorageData(`Dashboard-GSData-${companyId}`, data);
export const devGetGSData = (companyId: ActivatedCompanyId) => getStorageData<object>(`Dashboard-GSData-${companyId}`) as ResGetData;


// export const setDashboardData = (data: DashboardData) => setStorageData('DashboardData', data);
// export const getDashboardData = () => getStorageData<object>('DashboardData') as DashboardData;

/** Auth */
export const setAcceptedCookie = () => setStorageData(Names.ACCEPTED_COOKIE, 'true');
export const getAcceptedCookie = (): string => getStorageData(Names.ACCEPTED_COOKIE);
