import { ChartConfigOptions, ViewItemChart } from 'entities/charts'
import { GaugeColumnItem } from './gauge-column-item'
import { IndicatorsConfig } from './indicators-config'



export type ChipType     = 'condition' | 'period' | 'company' | 'product' | 'custom'
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

  // GaugeColumn
  gaugeColumnItems? : GaugeColumnItem[]
}

export type ViewItemSettingsField = keyof ViewItemSettings
