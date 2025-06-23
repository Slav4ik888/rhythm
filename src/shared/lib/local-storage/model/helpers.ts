/* eslint-disable */
import { UIConfiguratorProviderState } from 'app/providers/theme';
import { BunchesUpdated, PartialCompany, StateSchemaCompany } from 'entities/company';
import { StateSchemaDashboardData } from 'entities/dashboard-data';
import { Bunch, ViewItem } from 'entities/dashboard-view';
import { StateSchemaUser } from 'entities/user';
import { ResGetData } from 'features/dashboard-data/get-data/model/types';
import { setStorageData, getStorageData, removeStorageData } from './main';
import { Names } from './names';


// User
export const setUserState = (companyId: string, state: StateSchemaUser) => setStorageData(`UserState-${companyId}`, state);
export const getUserState = (companyId: string) => getStorageData<StateSchemaUser>(`UserState-${companyId}`);

// Company
export const setLastCompanyId = (companyId: string) => setStorageData('LastCompanyId', { companyId });
export const getLastCompanyId = () => getStorageData<{ companyId: string }>('LastCompanyId')?.companyId;

export const setCompanyState = (companyId: string, state: StateSchemaCompany) => setStorageData(`CompanyState-${companyId}`, state);
export const getCompanyState = (companyId: string) => getStorageData<StateSchemaCompany>(`CompanyState-${companyId}`);

export const setParamsCompanyState = (company: PartialCompany) => setStorageData('ParamsCompany', company);
export const getParamsCompanyState = () => getStorageData<PartialCompany>('ParamsCompany');

// Configurator
export const setUIConfiguratorState = (state: UIConfiguratorProviderState) => setStorageData('UIConfiguratorState', state);
export const getUIConfiguratorState = () => getStorageData<UIConfiguratorProviderState>('UIConfiguratorState');


export const setDashboardState = (companyId: string, state: StateSchemaDashboardData) => setStorageData(`DashboardState-${companyId}`, state);
export const getDashboardState = (companyId: string) => getStorageData<StateSchemaDashboardData>(`DashboardState-${companyId}`);

export const setDashboardViewItems = (companyId: string, items: ViewItem[]) => setStorageData(`DashboardViewItems-${companyId}`, items);
export const getDashboardViewItems = (companyId: string) => getStorageData<ViewItem[]>(`DashboardViewItems-${companyId}`) || [];
export const setDashboardViewEditMode = (companyId: string, editMode: boolean) => setStorageData(`DashboardViewEditMode-${companyId}`, { editMode });
export const getDashboardViewEditMode = (companyId: string): boolean => Boolean(getStorageData<{ editMode?: boolean }>(`DashboardViewEditMode-${companyId}`)?.editMode);

/** Timestamp of last update */
export const setDashboardBunchesUpdated = (companyId: string, data: BunchesUpdated) => setStorageData(`DashboardBunchesUpdated-${companyId}`, data);
export const getDashboardBunchesUpdated = (companyId: string) => getStorageData<BunchesUpdated>(`DashboardBunchesUpdated-${companyId}`);


export const devSetGSData = (companyId: string, data: ResGetData) => setStorageData(`Dashboard-GSData-${companyId}`, data);
export const devGetGSData = (companyId: string) => getStorageData<ResGetData>(`Dashboard-GSData-${companyId}`);


// export const setDashboardData = (data: DashboardData) => setStorageData('DashboardData', data);
// export const getDashboardData = () => getStorageData<object>('DashboardData') as DashboardData;

/** Auth */
export const setAcceptedCookie = () => setStorageData(Names.ACCEPTED_COOKIE, { isAccepted: 'true' });
export const getAcceptedCookie = (): string => getStorageData<{ isAccepted: string }>(Names.ACCEPTED_COOKIE)?.isAccepted || 'false';
