import { ItemBase } from 'entities/base'
import { ChartConfigDatasets, ChartConfigOptions, ChartType } from 'entities/charts'
import { ItemStyles } from './item-styles'



export type CardItemType = 'box' | 'text' | 'divider' | 'chart' | 'chip'

export type CardItemId = string


export interface CardItemCharts {
  kod?       : string
  chartType? : ChartType
  datasets?  : ChartConfigDatasets
}

export type CardItemChartsField = keyof CardItemCharts;

export type ChipType       =  'condition' | 'period' |       'company' | 'product' | 'custom';
export const arrayChipType = ['Состояние',  'Периодичность', 'Компания', 'Продукт',  'Без привязки'];


export interface CardItemSettings {
  [key: string]   : any     // Вспомогательный тип, чтобы не ругалось в компонентах
  // Global settings
  inverted?       : boolean // График перевёрнутый, пример - если задолженность уменьшается то это рост
  unchangedBlack? : boolean // При отсутствии изменений в результатах красить чёрным цветом

  // Chart settings
  charts?       : CardItemCharts[]
  chartOptions? : ChartConfigOptions

  // Chips settings
  kod?      : string
  chipType? : ChipType

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
