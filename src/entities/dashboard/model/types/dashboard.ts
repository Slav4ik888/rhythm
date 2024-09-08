import { DashboardPeriodType } from '../config/period';


// export type DashboardDataSegmentColumnDates = string[]
// export type DashboardDataSegment = DashboardDataSegmentColumn[]

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
  kod            : string            // #kod
  statistic_type : string            // #statistic_type - тип статистики: мес | нед | мес (кален)
  company_type   : string            // #company_type - по какой организации: Общая | Да-Телеком | Badcom
  product_type   : string            // #product_type - тип продукта: Общая | Сопровождение | Курс | Ритм | Разработка | Конструктор
  title          : string            // #title - Название статистики / показателя
  data           : DashboardItemData // Колонка с данными
}

// export interface DashboardDataSegment {
//   header : string[][] // Шапка статистик
//   titles : string[]   // Названия статистик / показателей
//   dates  : string[]   // Колонка с датами
//   data   : Array<Array<string | number>> // Колонки с данными
// }

// export interface DashboardData {
  // weekData       : DashboardDataSegment // Загруженные данные из гугл-таблицы
  // monthData      : DashboardDataSegment
  // lastUpdated    : number | undefined   // Дата последнего обновления (загрузки из гугл)
  
  // selectedPeriod : DashboardPeriod // Выбранный на панели, но не активированный период дат
  // activePeriod   : DashboardPeriod // Текущий период, по которому отрисованы графики
// }

// export type GetDashboardData = Omit<DashboardData, 'lastUpdated'>
