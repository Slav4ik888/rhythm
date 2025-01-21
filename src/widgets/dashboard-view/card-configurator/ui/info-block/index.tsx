import { FC, memo, useMemo } from 'react';
import { useDashboardData } from 'entities/dashboard-data';
import { useDashboardView } from 'entities/dashboard-view';
import { IdTitle } from './id-title';
import { Kod } from './kod';
import { KodLabel } from './kod-label';
import { ItemOrder } from './order';
import { TypeRow } from './type-row';
import { getKod } from './utils/get-kod';



/** InfoBlock */
export const InfoBlock: FC = memo(() => {
  const { startEntities } = useDashboardData();
  const { selectedItem } = useDashboardView();
  const kod = useMemo(() => getKod(selectedItem), [selectedItem]);
  const title = useMemo(() => startEntities[kod]?.title || '', [selectedItem, startEntities]);


  return (
    <>
      <IdTitle selectedId={selectedItem?.id} />
      <TypeRow type={selectedItem?.type} />
      {
        kod && <>
          <Kod kod={kod} />
          <KodLabel title={title} /> 
        </>
      }
      <ItemOrder order={selectedItem?.order} />
    </>
  )
});
