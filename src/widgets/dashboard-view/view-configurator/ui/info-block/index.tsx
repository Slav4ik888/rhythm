import { FC, memo } from 'react';
import { useDashboardData } from 'entities/dashboard-data';
import { useDashboardView } from 'entities/dashboard-view';
import { IdTitle } from './id-title';
import { Kod } from './kod';
import { KodLabel } from './kod-label';
import { ItemOrder } from './order';
import { TypeRow } from './type-row';



/** InfoBlock */
export const InfoBlock: FC = memo(() => {
  const { startEntities } = useDashboardData();
  const { selectedItem, fromGlobalKod: kod } = useDashboardView();

  return (
    <>
      <IdTitle selectedId={selectedItem?.id} />
      <TypeRow type={selectedItem?.type} />
      {
        kod && <>
          <Kod kod={kod} periodType={startEntities[kod]?.periodType || ''} />
          <KodLabel title={startEntities[kod]?.title || ''} /> 
        </>
      }
      <ItemOrder order={selectedItem?.order} />
    </>
  )
});
