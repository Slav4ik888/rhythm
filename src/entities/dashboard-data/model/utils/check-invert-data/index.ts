import { ReportsBaseConfig } from '../../../ui/reports'
import { invertData } from './invert-data'



/** Делает invertData (если нужно) */
export const checkInvertData = (config: ReportsBaseConfig | undefined,  data: number[]): number[] => {

  if (! data) return []
  
  return config?.inverted
    ? invertData(data)
    : data
}
  
