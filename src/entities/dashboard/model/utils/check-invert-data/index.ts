import { ReportsBaseConfig } from '../../../ui/reports'
import { DashboardStatisticItem } from '../../types'
import { invertData } from './invert-data'



/** Делает invertData если нужно */
export const checkInvertData = (config: ReportsBaseConfig, itemData: DashboardStatisticItem<number>): number[] =>
  config.inverted
    ? invertData(itemData.data)
    : itemData.data