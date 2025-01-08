import { ChartConfigDatasetsField } from 'entities/charts';
import { CardItem, CardItemId, ItemStylesField, CardItemSettingsField, CardItemChartsField } from '../types';



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

export interface ChangeOneChartsItem {
  field      : CardItemChartsField
  index      : number // № графика
  value      : any
}

export interface ChangeOneDatasetsItem {
  field      : ChartConfigDatasetsField
  index      : number // № графика
  value      : any
}
