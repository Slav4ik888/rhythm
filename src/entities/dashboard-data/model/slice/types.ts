import { DashboardPeriod } from '../types';



export interface SetActivePeriod {
  companyId : string
  period    : DashboardPeriod
}

export interface SetSelectedPeriod {
  companyId : string
  period    : Partial<DashboardPeriod>
}
