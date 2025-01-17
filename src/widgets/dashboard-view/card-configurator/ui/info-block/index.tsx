import { useDashboardView } from 'entities/dashboard-view';
import { FC, memo, useMemo } from 'react';
import { IdTitle } from './id-title';
import { Kod } from './kod';
import { KodLabel } from './kod-label';
import { ItemOrder } from './order';
import { TypeRow } from './type-row';



/** InfoBlock */
export const InfoBlock: FC = memo(() => {
  const { selectedItem } = useDashboardView();
  const isKodLabel = useMemo(() => selectedItem?.settings?.kod, [selectedItem?.settings?.kod]);


  return (
    <>
      <IdTitle />
      <TypeRow />
      {
        isKodLabel && <>
          <Kod />
          <KodLabel /> 
        </>
      }
      <ItemOrder />
    </>
  )
});
