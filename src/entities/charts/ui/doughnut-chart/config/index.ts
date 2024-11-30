import { updateObject } from 'shared/helpers/objects';
import { setValue } from 'shared/lib/charts';
import { ChartConfig, ChartConfigOptions } from '../../../model/types';


/** Doughnut config */
export function doughnutConfig(chartConfig: ChartConfig) {
  const {
    labels,
    datasets,
    options  = {} as ChartConfigOptions
  } = chartConfig
  // const { scales } = options;


  return {
    data: {
      labels,
      datasets: [...datasets.map(item => ({
        label           : item.label,
        data            : item.data,
        backgroundColor : setValue(item.backgroundColor, [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ]),
      }))],
    },
    options: updateObject({
      
    }, options)
  };
}
