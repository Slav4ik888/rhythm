import { ItemBase } from 'entities/base'
import { ChartType } from 'entities/charts'
import { ItemStyles } from './item-styles'

export type CardItemType = 'box' | 'text' | 'divider' | 'chart'

export type CardItemId = string


export interface CardItemSettings {
  // Chart settings
  chartType?: ChartType

  // Chips settings
  // Other settings
}


// export interface CardItemBody {
//   sx?: ItemStyles
// }


export interface CardItem extends ItemBase {
  id           : CardItemId
  parentId     : CardItemId // Where item is child. If no parentId, then parentId === ''
  sheetId      : CardItemId // Main sheet id === ''

  type         : CardItemType
  styles       : ItemStyles

  settings?    : CardItemSettings
}

export type PartialCardItem = Partial<CardItem> & { id: CardItemId }
