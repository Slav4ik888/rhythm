import { FC, memo, useMemo } from 'react';
import { useDashboardData } from 'entities/dashboard-data';
import { useDashboardView } from 'entities/dashboard-view';
import { IdTitle } from './id-title';
import { Kod } from './kod';
import { KodLabel } from './kod-label';
import { ItemOrder } from './order';
import { TypeRow } from './type-row';
import { getKod } from './utils/get-kod';
import { StatisticPeriodType, StatisticPeriodTypeChip } from 'entities/statistic-type';
import { pxToRem } from 'shared/styles';



/** InfoBlock */
export const InfoBlock: FC = memo(() => {
  const { startEntities } = useDashboardData();
  const { selectedItem } = useDashboardView();

  const { kod, title, periodType } = useMemo((): {
    kod        : string;
    title      : string;
    periodType : StatisticPeriodType;
  } => {
    const kod = getKod(selectedItem);

    return {
      kod,
      title      : startEntities[kod]?.title || '',
      periodType : startEntities[kod]?.periodType || ''
    }
  }, [selectedItem, startEntities]);


  return (
    <>
      <IdTitle selectedId={selectedItem?.id} />
      <TypeRow type={selectedItem?.type} />
      {
        kod && <>
          <Kod kod={kod} periodType={periodType} />
          <KodLabel title={title} /> 
        </>
      }
      <ItemOrder order={selectedItem?.order} />
    </>
  )
});
