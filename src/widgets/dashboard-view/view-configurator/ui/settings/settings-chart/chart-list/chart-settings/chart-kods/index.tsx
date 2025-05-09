import { FC, memo } from 'react';
import { SelectKod } from './select-kod';
import { ChartKodLabel } from './kod-label';



interface Props {
  index: number // Index charts in settings.charts
}

/** Выбор кода */
export const ChartKods: FC<Props> = memo(({ index }) => {
  return (
    <>
      <SelectKod     index={index} />
      <ChartKodLabel index={index} />
    </>
  )
});
