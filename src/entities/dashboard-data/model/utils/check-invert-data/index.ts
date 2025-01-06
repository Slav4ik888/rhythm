import { ReportsBaseConfig } from '../../../ui/reports'
import { DashboardStatisticItem } from '../../types'
import { invertData } from './invert-data'



/** Делает invertData если нужно */
export const checkInvertData = (config: ReportsBaseConfig | undefined, itemData: DashboardStatisticItem<number>): number[] => {

  if (! itemData?.data) return []
  
  return config?.inverted
    ? invertData(itemData.data)
    : itemData.data
}
  
