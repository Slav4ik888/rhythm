import { ItemBase } from 'entities/base'
import { PartialViewItemUpdate } from 'shared/api/features/dashboard-view'
import { Bunch, BunchId } from 'shared/lib/structures'
import { ViewItemStyles } from './item-styles'
import { ViewItemSettings } from './view-item-settings'



export type ViewItemType =
  | 'box'
  | 'text'
  | 'divider'
  | 'chart'
  | 'chip'
  | 'growthIcon'
  | 'digitIndicator'
  | 'gaugeColumn'



// ------------------------------------- //
// ------------  VIEW-ITEM  ------------ //
// ----------- v.2025-06-24  ----------- //
// ------------------------------------- //

export type ViewItemId = string

export interface ViewItem extends ItemBase {
  id           : ViewItemId
  bunchId      : BunchId
  parentId     : ViewItemId | 'no_parentId' // 'no_parentId' для корневых элементов
  sheetId      : ViewItemId // Main sheet id === ''

  type         : ViewItemType
  styles       : ViewItemStyles

  settings?    : ViewItemSettings
}

export type PartialViewItem = Partial<ViewItem> & { id: ViewItemId }

export type BunchesViewItem        = Bunch<string, Bunch<string, ViewItem>>
// Для обновления изменения в элементах
export type PartialBunchesViewItem = Bunch<string, Bunch<string, PartialViewItemUpdate>>
