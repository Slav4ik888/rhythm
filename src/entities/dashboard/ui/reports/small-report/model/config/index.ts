import { ChartConfig } from 'entities/charts';
import { updateObject } from 'shared/helpers/objects';



export const createConfig = (config: ChartConfig): ChartConfig => {
  return updateObject({
    labels: [],
    datasets: [],
    options: {
      scales: {
        y: {
        },
        x: {
          display: false,
        }
      },
      plugins: {
        legend: {
          display: false,
        }
      },
      aspectRatio: 1, // или другое значение, которое вам подходит
      maintainAspectRatio: false // важно отключить это свойство, если хотите изменить размер диаграммы
    }
  }, config);
}
