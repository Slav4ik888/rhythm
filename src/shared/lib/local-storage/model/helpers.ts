import { UIConfiguratorProviderState } from 'app/providers/theme';
import { PartialCompany, StateSchemaCompany } from 'entities/company';
import { StateSchemaDashboardData } from 'entities/dashboard-data';
import { DashboardTemplatesEntities } from 'entities/dashboard-templates';
import { ViewItem } from 'entities/dashboard-view';
import { StateSchemaUser } from 'entities/user';
import { ResGetData } from 'features/dashboard-data/get-data/model/types';
import { BunchesUpdated } from '../../structures/bunch';
import { setStorageData, getStorageData, removeStorageData } from './main';



/** Auth */
export const setAcceptedCookie = () => setStorageData('AcceptedCookie', { isAccepted: 'true' });
export const getAcceptedCookie = (): string => getStorageData<{ isAccepted: string }>(
  'AcceptedCookie'
)?.isAccepted || 'false';

// User
export const setUserState = (companyId: string, state: StateSchemaUser) => setStorageData(
  `UserState-${companyId}`,
  state
);
export const getUserState = (companyId: string) => getStorageData<StateSchemaUser>(`UserState-${companyId}`);

// Company
export const setLastCompanyId = (companyId: string) => setStorageData('LastCompanyId', { companyId });
export const getLastCompanyId = () => getStorageData<{ companyId: string }>('LastCompanyId')?.companyId;

export const setCompanyState = (companyId: string, state: StateSchemaCompany) => setStorageData(
  `CompanyState-${companyId}`,
  state
);
export const getCompanyState = (companyId: string) => getStorageData<StateSchemaCompany>(`CompanyState-${companyId}`);

export const setParamsCompanyState = (company: PartialCompany) => setStorageData('ParamsCompany', company);
export const getParamsCompanyState = () => getStorageData<PartialCompany>('ParamsCompany');

// Configurator
export const setUIConfiguratorState = (state: UIConfiguratorProviderState) => setStorageData(
  'UIConfiguratorState',
  state
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
export const setDashboardTemplatesEntities = (entities: DashboardTemplatesEntities) => setStorageData(
  'DashboardTemplatesEntities',
  entities
);
export const getDashboardTemplatesEntities = () => getStorageData<DashboardTemplatesEntities>(
  'DashboardTemplatesEntities'
) || {};

/** Dashboard-templates - timestamp of last updated */
export const setDashboardTemplatesBunchUpdated = (updated: BunchesUpdated) => setStorageData(
  'DashboardTemplatesBunchesUpdated',
  updated
);
export const getDashboardTemplatesBunchUpdated = () => getStorageData<BunchesUpdated>(
  'DashboardTemplatesBunchesUpdated'
) || {};

// Dashboard-data
export const setDashboardDataState = (companyId: string, state: StateSchemaDashboardData) => setStorageData(
  `DashboardDataState-${companyId}`,
  state
);
export const getDashboardDataState = (companyId: string) => getStorageData<StateSchemaDashboardData>(
  `DashboardDataState-${companyId}`
);

// Dashboard-view
export const setDashboardViewItems = (companyId: string, items: ViewItem[]) => setStorageData(
  `DashboardViewItems-${companyId}`,
  items
);
export const getDashboardViewItems = (companyId: string) => getStorageData<ViewItem[]>(
  `DashboardViewItems-${companyId}`
) || [];

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
