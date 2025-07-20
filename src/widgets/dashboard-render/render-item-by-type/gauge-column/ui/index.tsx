import { FC, memo, useMemo } from 'react';
import { useDashboardViewState, ViewItem, getKod } from 'entities/dashboard-view';
import { useDashboardData } from 'entities/dashboard-data';
import { ItemGaugeColumnComponent } from './component';
import { getLastItem } from 'shared/helpers/arrays';
import { findGaugeColumnItem } from '../utils';
import { toNumber } from 'shared/helpers/numbers';



interface Props {
  item        : ViewItem
  isTemplate? : boolean // если рендерится шаблон
}

/** Item GaugeColumn */
export const ItemGaugeColumn: FC<Props> = memo(({ item, isTemplate }) => {
  const { entities } = useDashboardViewState();
  const { activeEntities } = useDashboardData();

  const suitableParameter = useMemo(() => {
    const kod = getKod(entities, item);
    console.log('kod: ', kod);

    const lastItem = toNumber((getLastItem(activeEntities[kod]?.data)));
    console.log('lastItem: ', lastItem);

    return findGaugeColumnItem(lastItem, item?.settings?.gaugeColumnItems)
  },
    [activeEntities, entities, item]
  );
  console.log('Gauge: ', item?.settings?.gaugeColumnItems);


  return (
    <ItemGaugeColumnComponent
      bgcolor = {item?.settings?.gaugeColumnItems?.[0]?.color}
      sx      = {{}}
    />
  )
});
