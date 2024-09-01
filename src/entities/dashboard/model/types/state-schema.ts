import { Errors } from 'shared/lib/validators';
import { DashboardData, DashboardPeriod } from './dashboard';



// export interface DashboardDataEntities {
//   [x: string]: DashboardData
// }


export interface StateSchemaDashboard {
  weekData       : DashboardData
  monthData      : DashboardData
  
  selectedPeriod : DashboardPeriod
  dateStart      : number
  dateEnd        : number

  lastUpdated    : number // Дата последнего обновления

  loading        : boolean
  errors         : Errors
}
