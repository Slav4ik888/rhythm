import { ActivatedCompanyId } from 'entities/company';
import { DashboardPeriod } from '../types';



export interface SetActivePeriod {
  companyId : ActivatedCompanyId
  period    : DashboardPeriod
}

export interface SetSelectedPeriod {
  companyId : ActivatedCompanyId
  period    : Partial<DashboardPeriod>
}
