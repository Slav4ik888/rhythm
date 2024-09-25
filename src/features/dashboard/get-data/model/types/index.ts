import { CompanyId } from 'entities/companies';
import { DashboardEntities, DashboardDates } from 'entities/dashboard';


export type GoogleSheetData = Array<Array<string | number>>

export interface ResGetData {
  [k: string]: GoogleSheetData
}

export interface StartEntitiesData {
  startEntities : DashboardEntities
  startDates    : DashboardDates
}

export interface PayloadGetData {
  data      : StartEntitiesData
  companyId : CompanyId
}
