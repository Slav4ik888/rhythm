import { ItemBase } from 'entities/base'
import { ChartConfigDatasets, ChartConfigOptions, ChartType } from 'entities/charts'
import { ItemStyles } from './item-styles'



export type CardItemType = 'box' | 'text' | 'divider' | 'chart' | 'chip' | 'growthIcon' | 'digitIndicator'

export type CardItemId = string


export interface CardItemCharts {
  kod?       : string
  chartType? : ChartType
  datasets?  : ChartConfigDatasets
}

export type CardItemChartsField = keyof CardItemCharts

export type ChipType = 'condition' | 'period' | 'company' | 'product' | 'custom'
export type BaseChipType = 'periodType' | 'companyType' | 'productType'

export const chipOptions: Record<ChipType, { label: string; value: ChipType }> = {
  'condition' : { label: 'Состояние',     value: 'condition' },
  'period'    : { label: 'Периодичность', value: 'period' },
  'company'   : { label: 'Компания',      value: 'company' },
  'product'   : { label: 'Продукт',       value: 'product' },
  'custom'    : { label: 'Без привязки',  value: 'custom' },
};
export const arrayChipLabel = Object.values(chipOptions).map(item => item.label);


export interface CardItemSettings {
  // Global settings
  display?        : boolean // Показывать ли элемент
  kod?            : string  // Код для одиночного элемента Chip | GrowthItem |
  inverted?       : boolean // График перевёрнутый, пример - если задолженность уменьшается то это рост
  unchangedBlack? : boolean // При отсутствии изменений в результатах красить чёрным цветом
  fractionDigits? : number  // Количество знаков после запятой
  addZero?        : boolean // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
  
  // Chart settings
  charts?         : CardItemCharts[]
  chartOptions?   : ChartConfigOptions

  // Chips settings
  chipType?       : ChipType

  // GrowthItem settings
  scale?          : number  // Изменение размера треуголька
  isLeft?         : boolean // При отсутствии изменений чёрный треугольник повернуть влево

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
