import { ChartConfigDataSets } from 'shared/ui/charts'


/** Уменьшает толщину круглешка на линии графика, если много значений */
export const fixPointRadius = (config: ChartConfigDataSets, dates: any[]): void => {
  if (dates?.length > 30) config.pointRadius = 0
  else if (dates?.length > 20) config.pointRadius = 3
  else if (dates?.length > 13) config.pointRadius = 4
}
