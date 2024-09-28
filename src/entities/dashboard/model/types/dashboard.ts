import { DashboardStatisticType } from 'entities/statistic-type';
import { DashboardPeriodType } from '../config/period';



/** Показывает положительные отрицательные или нулевые изменения */
export type Increased = 1 | -1 | 0


/** For chips: StatisticType | ConditionType */
export interface DashboardItemType {
  label       : string
  description : string // Tooltip
}

export interface DashboardPeriodDates {
  start : number | undefined
  end   : number | undefined
}

export interface DashboardPeriod extends DashboardPeriodDates {
  type     : DashboardPeriodType // Выбранный тип
  // prevType : DashboardPeriodType // Предыдущий тип
}

export type DashboardItemData = Array<string | number>

export interface DashboardStatisticItem {
  kod           : string                 // #kod
  statisticType : DashboardStatisticType // #statisticType - тип статистики: мес | нед | мес (кален)
  companyType   : string                 // #companyType - по какой организации: Общая | Да-Телеком | Badcom
  productType   : string                 // #productType - тип продукта: Общая | Сопровождение | Курс | Ритм | Разработка | Конструктор
  title         : string                 // #title - Название статистики / показателя
  data          : DashboardItemData      // Колонка с данными
}

// export type GetDashboardData = Omit<DashboardData, 'lastUpdated'>
