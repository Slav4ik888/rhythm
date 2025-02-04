import { FC, memo } from 'react';
import { AddRows } from './add-row';
import { MovementRow } from './movement-row';



/** ViewMain */
export const ViewMain: FC = memo(() => {
  return (
    <>
      <MovementRow />
      <AddRows />
    </>
  )
});
