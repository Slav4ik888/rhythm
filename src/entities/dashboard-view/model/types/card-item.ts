import { ItemBase } from 'entities/base'
import { ChartConfigDatasets, ChartType } from 'entities/charts'
import { ItemStyles } from './item-styles'



export type CardItemType = 'box' | 'text' | 'divider' | 'chart'

export type CardItemId = string


export interface CardItemSettings {
  // Global settings
  kod?            : string
  inverted?       : boolean // График перевёрнутый, пример - если задолженность уменьшается то это рост
  unchangedBlack? : boolean // При отсутствии изменений в результатах красить чёрным цветом

  // Chart settings
  chartType? : ChartType
  datasets?  : ChartConfigDatasets

  // Chips settings
  // Other settings
}

export type CardItemSettingsField = keyof CardItemSettings;


export interface CardItem extends ItemBase {
  id           : CardItemId
  parentId     : CardItemId // Where item is child. If no parentId, then parentId === ''
  sheetId      : CardItemId // Main sheet id === ''

  type         : CardItemType
  styles       : ItemStyles

  settings?    : CardItemSettings
}

export type PartialCardItem = Partial<CardItem> & { id: CardItemId }
