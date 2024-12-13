import { CardItem } from 'entities/card-item';
import { ActivatedCompanyId } from 'entities/company';
import { DashboardPeriod } from '../types';



// View
export interface SetDashboardView {
  companyId : ActivatedCompanyId
  cardItems : CardItem[]
}

// Data
export interface SetActivePeriod {
  companyId : ActivatedCompanyId
  period    : DashboardPeriod
}

export interface SetSelectedPeriod {
  companyId : ActivatedCompanyId
  period    : Partial<DashboardPeriod>
}
