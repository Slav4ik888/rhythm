import { Errors } from 'shared/lib/validators';
import { DashboardData } from './dashboard';



// export interface DashboardDataEntities {
//   [x: string]: DashboardData
// }


export interface StateSchemaDashboard extends DashboardData {
  loading        : boolean
  errors         : Errors
}
