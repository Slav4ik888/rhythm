import { ChartConfigOptions } from 'entities/charts';
// @ts-ignore
import { InteractionMode } from 'node_modules/chart.js/dist/types/index.d.ts';
import { updateObject } from 'shared/helpers/objects';



export const getBarOptions = (options = {} as ChartConfigOptions): ChartConfigOptions => {
  const { scales } = options;

  return updateObject({
    
  }, options);
}
