import { setValue } from 'shared/lib/charts';
import { ChartConfig, ChartConfigDatasets, ChartConfigOptions } from '../../../model/types';


/** Doughnut config */
export function doughnutConfig(chartConfig: ChartConfig) {
  const {
    labels   = [] as string[],
    datasets = {} as ChartConfigDatasets,
    options  = {} as ChartConfigOptions
  } = chartConfig
  // const { scales } = options;
  
  return {
    data: {
      labels,
      datasets: [
        {
          label           : datasets.label,
          data            : datasets.data,
          backgroundColor : setValue(datasets.backgroundColor, [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ]),
        },
      ],
    },
    options: {
    },
  };
}
