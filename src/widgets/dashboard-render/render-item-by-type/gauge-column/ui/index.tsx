import { FC, memo, useMemo } from 'react';
import { useDashboardViewState, ViewItem, getKod } from 'entities/dashboard-view';
import { useDashboardData } from 'entities/dashboard-data';
import { ItemGaugeColumnComponent } from './component';
import { getIncreased, getInverted } from '../../digit-indicator';



interface Props {
  item        : ViewItem
  isTemplate? : boolean // если рендерится шаблон
}

/** Item GaugeColumn */
export const ItemGaugeColumn: FC<Props> = memo(({ item, isTemplate }) => {
  const { entities } = useDashboardViewState();
  const { activeEntities } = useDashboardData();

  const increased = useMemo(() => getIncreased(getInverted(item, entities), activeEntities, getKod(entities, item)),
    [activeEntities, entities, item]
  );

  console.log('gaugeColumnItems: ', item?.settings?.gaugeColumnItems);

  return (
    <ItemGaugeColumnComponent
      bgcolor = {item?.settings?.gaugeColumnItems?.[0]?.color}
      sx      = {{}}
    />
  )
});
