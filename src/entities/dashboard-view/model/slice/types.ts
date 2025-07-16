import { ChartConfigDatasetsField } from 'entities/charts';
import { BunchesUpdated } from 'shared/lib/structures/bunch';
import {
  ViewItemId, ViewItemStylesField, ViewItemSettingsField, ViewItemChartField, ViewItem, BunchesViewItem
 } from '../../types';



export interface SetEditMode {
  editMode  : boolean
  companyId : string
}

export interface SetDashboardViewItems {
  companyId      : string
  viewItems      : ViewItem[]
  bunchesUpdated : BunchesUpdated
}

export interface SetDashboardBunches {
  companyId      : string
  bunches        : BunchesViewItem
  bunchesUpdated : BunchesUpdated
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
  field      : ViewItemChartField
  index      : number // № графика
  value      : any
}

export interface ChangeOneDatasetsItem {
  field      : ChartConfigDatasetsField
  index      : number // № графика
  value      : any
}

export interface SetDashboardBunchesFromCache {
  changedBunches : string[] // Bunches в которых были изменения и их не нужно показывать
  companyId      : string
}
