
/**
 * Timestamp last Bunches updated. При любом изменении ViewItems - обновляем
 * [key: BunchId]: timestamp - время последнего изменения
 */
export interface BunchesUpdated {
  [key: string]: number
}
