import { CardItem, CardItemId, ItemStyles, ItemStylesField } from 'entities/card-item';
import { ActivatedCompanyId } from 'entities/company';
import { DashboardPeriod } from '../types';



// View
export interface SetDashboardView {
  companyId : string
  cardItems : CardItem[]
}

export interface ChangeSelectedStyle {
  companyId  : string
  selectedId : CardItemId
  field      : ItemStylesField
  value      : number | string
}

export interface SetSelectedStyle {
  companyId  : string
  selectedId : CardItemId
  styles     : ItemStyles
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
