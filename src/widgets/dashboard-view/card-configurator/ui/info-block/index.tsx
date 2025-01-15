import { FC, memo } from 'react';
import { IdTitle } from './id-title';
import { TypeRow } from './type-row';



/** InfoBlock */
export const InfoBlock: FC = memo(() => {

  return (
    <>
      <IdTitle />
      <TypeRow />
    </>
  )
});
