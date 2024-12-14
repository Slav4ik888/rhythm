import { CardItem, CardItemId, ItemStylesField } from 'entities/card-item';
import { ActivatedCompanyId } from 'entities/company';
import { DashboardPeriod } from '../types';



// View
export interface SetDashboardView {
  companyId : string
  cardItems : CardItem[]
}

export interface ChangeSelectedStyle {
  selectedId : CardItemId
  field      : ItemStylesField
  value      : number | string
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
