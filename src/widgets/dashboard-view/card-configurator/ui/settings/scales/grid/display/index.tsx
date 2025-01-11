import { FC, memo } from 'react';
import { ChartFlagByScheme } from '../../../flag-by-scheme';



interface Props {
  type: 'x' | 'y'
}

/** Показать/скрыть ось X|Y */
export const ChartGridDisplay: FC<Props> = memo(({ type }) => {
  return (
    <ChartFlagByScheme
      scheme    = {`settings.chartOptions.scales.${type}.grid.display`}
      title     = 'grid.display'
      toolTitle = {`Показать/скрыть ось ${type.toLocaleUpperCase()}`}     
    />
  )
});
