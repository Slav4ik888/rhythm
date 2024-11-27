
export interface ReportsLineChartConfig {
  // Global values
  inverted?       : boolean // Если график перевёрнутый, то есть если задолженность уменьшается то это рост
  unchangedBlack? : boolean // При отсутствии изменений в результатах красить чёрным цветом

  // Values of segments
  resultChanges?  : ResultChangesConfig
}


// Result changes configuration
interface ResultChangesConfig {
  comparisonIndicators? : ComparisonIndicatorsConfig
  growthResult?         : GrowthResultConfig
}

interface ComparisonIndicatorsConfig {
  valuesCount?    : number  // Сколько значений показывать
  fractionDigits? : number  // Количество знаков после запятой
  addZero?        : boolean // Добавлять нули после запятой
}

interface GrowthResultConfig {
  fractionDigits? : number  // Количество знаков после запятой
  addZero?        : boolean // Добавлять нули после запятой
}
