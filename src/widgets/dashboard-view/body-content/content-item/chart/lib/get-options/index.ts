import { ChartConfigOptions, ChartType } from 'entities/charts';
import { getLineOptions } from './get-line-options';



export const getOptions = (type: ChartType, options: ChartConfigOptions): ChartConfigOptions => {
  switch (type) {
    case 'line': return getLineOptions(options)

    default: return getLineOptions(options)
  }
}
