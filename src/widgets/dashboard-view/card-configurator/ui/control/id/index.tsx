import { FC, memo } from 'react';
import { AddRows } from './add-row';
import { MovementRow } from './movement-row';



/** CardMain */
export const CardMain: FC = memo(() => {
  return (
    <>
      <MovementRow />
      <AddRows />
    </>
  )
});
