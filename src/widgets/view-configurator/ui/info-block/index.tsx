import { FC, memo } from 'react';
import { useDashboardData } from 'entities/dashboard-data';
import { useDashboardViewState } from 'entities/dashboard-view';
import { IdTitle } from './id-title';
import { Kod } from './kod';
import { KodLabel } from './kod-label';
import { ItemOrder } from './order';
import { TypeRow } from './type-row';
import { BunchIdRow } from './bunch-id';



/** InfoBlock */
export const InfoBlock: FC = memo(() => {
  const { startEntities } = useDashboardData();
  const { selectedItem, fromGlobalKod: kod } = useDashboardViewState();

  return (
    <>
      <IdTitle    selectedId = {selectedItem?.id} />
      <BunchIdRow bunchId    = {selectedItem?.bunchId} />
      <TypeRow    type       = {selectedItem?.type} />
      {
        kod && <>
          <Kod />
          <KodLabel title={startEntities[kod]?.title || ''} />
        </>
      }
      <ItemOrder order={selectedItem?.order} />
    </>
  )
});
