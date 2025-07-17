import * as Highcharts from 'highcharts';
import { ChartType } from 'entities/charts';
import { getDoughnutOptions } from './get-doughnut-options';



export const getOptions = (type: ChartType, options: Highcharts.Options): Highcharts.Options => {
  switch (type) {
    // case 'line': return getLineOptions(options)
    // case 'bar': return getBarOptions(options)
    case 'pie':
    case 'doughnut': return getDoughnutOptions(options)

    default: return getDoughnutOptions(options)
  }
}
