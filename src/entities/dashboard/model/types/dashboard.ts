import { DashboardPeriodType } from '../config/period';


export type DashboardDataSegment = Array<Array<string | number>>

export interface DashboardPeriod {
  type     : DashboardPeriodType // Выбранный тип
  prevType : DashboardPeriodType // Предыдущий тип
  start    : number | undefined
  end      : number | undefined
}


export interface DashboardData {
  weekData    : DashboardDataSegment
  monthData   : DashboardDataSegment
  lastUpdated : number | undefined // Дата последнего обновления
  
  activePeriod: DashboardPeriod // Текущий период, по которому отрисованы графики
  selectedPeriod: DashboardPeriod // Выбранный на панели, но не активированный период дат
}

// export type GetDashboardData = Omit<DashboardData, 'lastUpdated'>
