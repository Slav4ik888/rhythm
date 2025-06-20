import { invertData } from './invert-data'

export interface ReportsBaseConfig {
  inverted?       : boolean // График перевёрнутый, пример - если задолженность уменьшается то это рост
  unchangedBlack? : boolean // При отсутствии изменений в результатах красить чёрным цветом

  header?: {
    minHeight?: string // Минимальная высота "шапки", напр. если заголовок на 2 строки, то нужно выравнить у всех в ряду
  }
}


/** Результат прироста/падения, % | шт, и иконка треуголькин */
export interface GrowthResultConfig {
  // Для процентов
  persent?: {
    display?        : boolean
    fractionDigits? : number  // Количество знаков после запятой
    addZero?        : boolean // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
  }

  // Для чисел
  value?: {
    display?        : boolean
    reduce?         : boolean // Убрать разряды: 12 500 700 => 12.5 млн
    fractionDigits? : number  // Количество знаков после запятой
    addZero?        : boolean // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
  }
}


/** Result changes configuration */
export interface ReportsResultChangesConfig extends ReportsBaseConfig {
  resultChanges?: {
    // Список значений: последний результат и предыдущие
    comparisonIndicators? : {
      valuesCount?    : number  // Сколько значений показывать
      reduce?         : boolean // Убрать разряды: 12 500 700 => 12.5 млн
      fractionDigits? : number  // Количество знаков после запятой
      addZero?        : boolean // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
    }
    growthResult?: GrowthResultConfig
  }
}


export interface ReportsLineChartConfig extends ReportsResultChangesConfig {

  // Chips - показывать или не показывать
  chips?: {
    periodType?    : boolean
    productType?   : boolean
    companyType?   : boolean
    conditionType? : boolean
  }
}


/** Делает invertData (если нужно) */
export const checkInvertData = (config: ReportsBaseConfig | undefined,  data: number[]): number[] => {
  if (! data) return []

  return config?.inverted
    ? invertData(data)
    : data
}
