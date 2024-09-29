
export interface ReportsLineChartConfig {
  // Global values
  inverted?       : boolean // Если график перевёрнутый, то есть если задолженность уменьшается то это рост
  unchangedBlack? : boolean // При отсутствии изменений в результатах красить чёрным цветом

  // Chips - показывать или не показывать
  chips?: {
    statisticType? : boolean
    productType?   : boolean
    companyType?   : boolean
    conditionType? : boolean
  }

  // Result changes configuration
  resultChanges?: {
    // Список значений: последний результат и предыдущие 
    comparisonIndicators? : {
      valuesCount?    : number  // Сколько значений показывать
      reduce?         : boolean // Убрать разряды: 12 500 700 => 12.5007 млн
      fractionDigits? : number  // Количество знаков после запятой
      addZero?        : boolean // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
    }
    // Результат прироста/падения, % | шт, и иконка треуголькин
    growthResult?: {
      fractionDigits? : number  // Количество знаков после запятой
      addZero?        : boolean // Добавлять нули после запятой
    }
  }
}
