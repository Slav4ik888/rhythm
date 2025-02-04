import { ChartConfigDatasetsField } from 'entities/charts';
import { ViewItem, ViewItemId, ViewItemStylesField, ViewItemSettingsField, ViewItemChartsField } from '../types';



export interface SetDashboardView {
  companyId : string
  viewItems : ViewItem[]
}

export interface ChangeSelectedStyle {
  selectedId : ViewItemId
  field      : ViewItemStylesField
  value      : number | string
}

export interface ChangeOneSettingsField {
  field      : ViewItemSettingsField
  value      : any
}

export interface ChangeOneChartsItem {
  field      : ViewItemChartsField
  index      : number // № графика
  value      : any
}

export interface ChangeOneDatasetsItem {
  field      : ChartConfigDatasetsField
  index      : number // № графика
  value      : any
}
