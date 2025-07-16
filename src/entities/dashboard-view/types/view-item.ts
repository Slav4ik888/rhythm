import { ItemBase } from 'entities/base'
import { ChartConfigDatasets, ChartConfigOptions, ChartType, ChartConfigTrendDatasets } from 'entities/charts'
import { PartialViewItemUpdate } from 'shared/api/features/dashboard-view'
import { Bunch, BunchId } from 'shared/lib/structures'
import { IndicatorsConfig } from './config'
import { ViewItemStyles } from './item-styles'



export type ViewItemType = 'box' | 'text' | 'divider' | 'chart' | 'chip' | 'growthIcon' | 'digitIndicator'


/** v.2025-05-05 */
export interface ViewItemChart {
  kod?           : string
  fromGlobalKod? : boolean // Если true, то Глобальны kod, будет автоматически подтягиваться в этот элемент
  inverted?      : boolean // График перевёрнутый, пример - если задолженность уменьшается то это рост
  chartType?     : ChartType
  datasets?      : ChartConfigDatasets
  isTrend?       : boolean // Показывать ли линию тренда
  trendDataSets? : ChartConfigTrendDatasets
}

export type ViewItemChartField = keyof ViewItemChart

export type ChipType = 'condition' | 'period' | 'company' | 'product' | 'custom'
export type BaseChipType = 'periodType' | 'companyType' | 'productType'


/** v.2025-06-26 */
export type ViewItemSettings = IndicatorsConfig & {
  // Global settings
  display?          : boolean // Показывать ли элемент

  // Kod settings
  kod?              : string  // Код для одиночного элемента Box | Chip | GrowthItem | Indicator
  /** Если true, то это kod, будет автоматически подтягиваться всем children где стоит галка (fromGlobalKod) */
  isGlobalKod?      : boolean
  /** Если true, то это Глобальны kod, будет автоматически подтягиваться в этот элемент */
  fromGlobalKod?    : boolean
  /** Если true, то всем children, у которых где стоит галка (fromGlobalInverted), примениться inverted = true */
  globalInverted?   : boolean

  inverted?         : boolean // Значения переворачиваются в противоположное, пример - если задолженность уменьшается то это рост
  unchangedBlack?   : boolean // При отсутствии изменений в результатах красить чёрным цветом

  // Chart settings
  charts?           : ViewItemChart[]
  chartOptions?     : ChartConfigOptions

  // Chips settings
  chipType?         : ChipType

  // GrowthItem settings
  scale?            : number  // Изменение размера треуголька
  isLeft?           : boolean // При отсутствии изменений чёрный треугольник повернуть влево
}

export type ViewItemSettingsField = keyof ViewItemSettings;


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
