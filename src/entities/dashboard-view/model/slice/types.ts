import { CardItem, CardItemId, ItemStylesField } from '../types';



export interface SetDashboardView {
  companyId : string
  cardItems : CardItem[]
}

export interface ChangeSelectedStyle {
  selectedId : CardItemId
  field      : ItemStylesField
  value      : number | string
}
