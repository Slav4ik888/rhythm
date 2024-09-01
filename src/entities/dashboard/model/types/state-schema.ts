import { Errors } from 'shared/lib/validators';
import { DashboardData, DashboardPeriod } from './dashboard';



export interface DashboardDataEntities {
  [43: string]: DashboardData
}


export interface StateSchemaDashboard {
  entities       : DashboardDataEntities
  ids            : string[]
  
  selectedPeriod : DashboardPeriod
  dateStart      : number
  dateEnd        : number

  lastUpdated    : number // Дата последнего обновления

  loading        : boolean
  errors         : Errors
}
