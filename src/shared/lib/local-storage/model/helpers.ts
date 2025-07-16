import { UIConfiguratorProviderState } from 'app/providers/theme';
import { PartialCompany, StateSchemaCompany } from 'entities/company';
import { StateSchemaDashboardData } from 'entities/dashboard-data';
import { Template } from 'entities/dashboard-templates';
import { ViewItem } from 'entities/dashboard-view';
import { BunchesViewItem } from 'entities/dashboard-view/types';
import { StateSchemaUser } from 'entities/user';
import { ResGetData } from 'shared/types';
import { Bunch, BunchesUpdated } from '../../structures/bunch';
import { setStorageData, getStorageData, removeStorageData } from './main';



/** Auth */
export const setAcceptedCookie = () => setStorageData('AcceptedCookie', { isAccepted: 'true' });
export const getAcceptedCookie = (): string => getStorageData<{ isAccepted: string }>(
  'AcceptedCookie'
)?.isAccepted || 'false';

// User
export const setUserState = (companyId: string, data: StateSchemaUser) => setStorageData(
  `UserState-${companyId}`,
  data
);
export const getUserState = (companyId: string) => getStorageData<StateSchemaUser>(`UserState-${companyId}`);

// Company
export const setLastCompanyId = (companyId: string) => setStorageData('LastCompanyId', { companyId });
export const getLastCompanyId = () => getStorageData<{ companyId: string }>('LastCompanyId')?.companyId;

export const setCompanyState = (companyId: string, data: StateSchemaCompany) => setStorageData(
  `CompanyState-${companyId}`,
  data
);
export const getCompanyState = (companyId: string) => getStorageData<StateSchemaCompany>(`CompanyState-${companyId}`);

export const setParamsCompanyState = (data: PartialCompany) => setStorageData('ParamsCompany', data);
export const getParamsCompanyState = () => getStorageData<PartialCompany>('ParamsCompany');

// Configurator
export const setUIConfiguratorState = (data: UIConfiguratorProviderState) => setStorageData(
  'UIConfiguratorState',
  data
);
export const getUIConfiguratorState = () => getStorageData<UIConfiguratorProviderState>('UIConfiguratorState');
export const setDashboardEditMode = (companyId: string, editMode: boolean) => setStorageData(
  `DashboardEditMode-${companyId}`,
  { editMode }
);
export const getDashboardEditMode = (companyId: string): boolean => Boolean(
  getStorageData<{ editMode?: boolean }>(`DashboardEditMode-${companyId}`)?.editMode
);

// Dashboard-templates
export const setDashboardTemplates = (data: Template[]) => setStorageData('DashboardTemplates', data);
export const getDashboardTemplates = () => getStorageData<Template[]>('DashboardTemplates') || [];

/** Dashboard-templates - timestamp of last updated */
export const setDashboardTemplatesBunchesUpdated = (data: BunchesUpdated) => {
  setStorageData('DashboardTemplatesBunchesUpdated', data);
  // Триггерим событие для других вкладок
  window.dispatchEvent(new Event('storage'));
}
export const getDashboardTemplatesBunchesUpdated = () => getStorageData<BunchesUpdated>(
  'DashboardTemplatesBunchesUpdated'
) || {};

// Dashboard-data
export const setDashboardDataState = (companyId: string, data: StateSchemaDashboardData) => setStorageData(
  `DashboardDataState-${companyId}`,
  data
);
export const getDashboardDataState = (companyId: string) => getStorageData<StateSchemaDashboardData>(
  `DashboardDataState-${companyId}`
);

// Dashboard-view
// export const setDashboardViewItems = (companyId: string, items: ViewItem[]) => setStorageData(
//   `DashboardViewItems-${companyId}`,
//   items
// );
// export const getDashboardViewItems = (companyId: string) => getStorageData<ViewItem[]>(
//   `DashboardViewItems-${companyId}`
// ) || [];
export const setDashboardBunches = (companyId: string, bunches: BunchesViewItem) => setStorageData(
  `DashboardBunches-${companyId}`,
  bunches
);
export const getDashboardBunches = (companyId: string) => getStorageData<BunchesViewItem>(
  `DashboardBunches-${companyId}`
) || {};

/** Dashboard-view - timestamp of last updated */
export const setDashboardViewBunchesUpdated = (companyId: string, data: BunchesUpdated) => {
  setStorageData(`DashboardViewBunchesUpdated-${companyId}`, data);
  // Триггерим событие для других вкладок
  window.dispatchEvent(new Event('storage'));
};
export const getDashboardViewBunchesUpdated = (companyId: string) => getStorageData<BunchesUpdated>(
  `DashboardViewBunchesUpdated-${companyId}`
) || {};


// Dev
export const devSetGSData = (companyId: string, data: ResGetData) => setStorageData(
  `Dashboard-GSData-${companyId}`,
  data
);
export const devGetGSData = (companyId: string) => getStorageData<ResGetData>(`Dashboard-GSData-${companyId}`);
