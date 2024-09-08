import { DashboardEntities, DashboardDates } from 'entities/dashboard';


export type GoogleSheetData = Array<Array<string | number>>

export interface ResGetData {
  [k: string]: GoogleSheetData
}

export interface PayloadGetData {
  startEntities : DashboardEntities
  startDates    : DashboardDates
}
