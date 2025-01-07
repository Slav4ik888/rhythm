import { CardItem, CardItemId, ItemStylesField, CardItemSettingsField } from '../types';



export interface SetDashboardView {
  companyId : string
  cardItems : CardItem[]
}

export interface ChangeSelectedStyle {
  selectedId : CardItemId
  field      : ItemStylesField
  value      : number | string
}

export interface ChangeOneSettingsField {
  field      : CardItemSettingsField
  value      : any
}
