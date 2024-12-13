import { CardItem, CardItemId } from 'entities/card-item';
import { Errors } from 'shared/lib/validators';
import { DashboardPeriod, DashboardStatisticItem } from '../types/dashboard';



// VIEW
export interface DashboardViewEntities {
  [cardItemId: CardItemId]: CardItem
}


// DATA
export interface DashboardEntities {
  [kod: string]: DashboardStatisticItem
}

export interface DashboardDates {
  [statisticType: string]: number[]
}



// STATE
export interface StateSchemaDashboard {
  loading        : boolean
  errors         : Errors
  _isMounted     : boolean // Признак того, что Reducer mounted

  // -- View --
  editMode       : boolean // Режим редактирования
  viewEntities   : DashboardViewEntities

  // -- Data --
  // Загруженные данные из гугл-таблицы
  startEntities  : DashboardEntities
  startDates     : DashboardDates
  lastUpdated    : number | undefined // Дата последнего обновления (загрузки из гугл)

  // Отфильтрованные по периоду дат activePeriod
  selectedPeriod : DashboardPeriod // Выбранный на панели, но не активированный период дат
  activePeriod   : DashboardPeriod // Текущий период, по которому отрисованы графики
  activeEntities : DashboardEntities
  activeDates    : DashboardDates
}
