import { Errors } from 'shared/lib/validators';
import { DashboardPeriod, DashboardStatisticItem } from './dashboard';



export interface DashboardEntities {
  [kod: string]: DashboardStatisticItem
}

export interface DashboardDates {
  [statisticType: string]: number[]
}

export interface StateSchemaDashboard {
  // Загруженные данные из гугл-таблицы
  startEntities  : DashboardEntities
  startDates     : DashboardDates
  lastUpdated    : number | undefined   // Дата последнего обновления (загрузки из гугл)

  // Отфильтрованные по периоду дат activePeriod
  
  selectedPeriod : DashboardPeriod // Выбранный на панели, но не активированный период дат
  activePeriod   : DashboardPeriod // Текущий период, по которому отрисованы графики
  activeEntities : DashboardEntities
  activeDates    : DashboardDates

  _isMounted?    : boolean
  loading        : boolean
  errors         : Errors
}
