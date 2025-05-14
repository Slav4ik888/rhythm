import { UIConfiguratorProviderState } from 'app/providers/theme';
import { StateSchemaCompany } from 'entities/company';
import { StateSchemaDashboardData } from 'entities/dashboard-data';
import { DashboardViewEntities, ViewItem } from 'entities/dashboard-view';
import { StateSchemaUser } from 'entities/user';
import { ResGetData } from 'features/dashboard-data/get-data/model/types';
import { setStorageData, getStorageData, removeStorageData } from './main';
import { Names } from './names';


// User
export const setUserState = (companyId: string, state: StateSchemaUser) => setStorageData(`UserState-${companyId}`, state);
export const getUserState = (companyId: string) => (getStorageData<object>(`UserState-${companyId}`) || {}) as StateSchemaUser;

// Company
export const setLastCompanyId = (companyId: string) => setStorageData('LastCompanyState', companyId);
export const getLastCompanyId = () => (getStorageData<object>('LastCompanyState') || '') as unknown as string;

export const setCompanyState = (companyId: string, state: StateSchemaCompany) => setStorageData(`CompanyState-${companyId}`, state);
export const getCompanyState = (companyId: string) => (getStorageData<object>(`CompanyState-${companyId}`) || {}) as StateSchemaCompany;

// Configurator
export const setUIConfiguratorState = (state: UIConfiguratorProviderState) => setStorageData('UIConfiguratorState', state);
export const getUIConfiguratorState = () => (getStorageData<object>('UIConfiguratorState') || {}) as UIConfiguratorProviderState;


export const setDashboardState = (companyId: string, state: StateSchemaDashboardData) => setStorageData(`DashboardState-${companyId}`, state);
export const getDashboardState = (companyId: string) => (getStorageData<object>(`DashboardState-${companyId}`) || {}) as StateSchemaDashboardData;

export const setDashboardView = (companyId: string, views: ViewItem[]) => setStorageData(`DashboardView-${companyId}`, views);
export const getDashboardView = (companyId: string) => (getStorageData<object>(`DashboardView-${companyId}`) || {}) as ViewItem[];
export const setDashboardViewEditMode = (companyId: string, editMode: boolean) => setStorageData(`DashboardViewEditMode-${companyId}`, editMode);
export const getDashboardViewEditMode = (companyId: string): boolean => getStorageData<boolean>(`DashboardViewEditMode-${companyId}`) || false;


export const devSetGSData = (companyId: string, data: ResGetData) => setStorageData(`Dashboard-GSData-${companyId}`, data);
export const devGetGSData = (companyId: string) => getStorageData<object>(`Dashboard-GSData-${companyId}`) as ResGetData;


// export const setDashboardData = (data: DashboardData) => setStorageData('DashboardData', data);
// export const getDashboardData = () => getStorageData<object>('DashboardData') as DashboardData;

/** Auth */
export const setAcceptedCookie = () => setStorageData(Names.ACCEPTED_COOKIE, 'true');
export const getAcceptedCookie = (): string => getStorageData(Names.ACCEPTED_COOKIE);
