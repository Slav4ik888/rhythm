import { ItemBase } from 'entities/base'
import { ChartConfigDatasets, ChartType } from 'entities/charts'
import { ItemStyles } from './item-styles'



export type CardItemType = 'box' | 'text' | 'divider' | 'chart'

export type CardItemId = string


export interface CardItemCharts {
  kod?       : string
  chartType? : ChartType
  datasets?  : ChartConfigDatasets
}

export interface CardItemSettings {
  // Global settings
  inverted?       : boolean // График перевёрнутый, пример - если задолженность уменьшается то это рост
  unchangedBlack? : boolean // При отсутствии изменений в результатах красить чёрным цветом

  // Chart settings
  charts?: CardItemCharts[]

  // Chips settings
  kod?: string

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
