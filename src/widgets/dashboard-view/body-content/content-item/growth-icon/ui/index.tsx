import { FC, memo, useMemo } from 'react';
import { useDashboardView, ViewItem, ViewItemId, getKod } from 'entities/dashboard-view';
import { ItemWrapper } from '../../wrapper-item';
import { useDashboardData } from 'entities/dashboard-data';
import { GrowthIconComponent } from './component';
import { getIncreased } from '../../digit-indicator';



interface Props {
  item     : ViewItem
  onSelect : (id: ViewItemId) => void
}

/** Item GrowthIcon */
export const ItemGrowthIcon: FC<Props> = memo(({ item, onSelect }) => {
  const { entities } = useDashboardView();
  const { activeEntities } = useDashboardData();
  // const { display, fractionDigits, addZero, kod = '' } = item.settings || {};
  
  // const [lastValue, prevValue] = useMemo(() => {
  //   const data = activeEntities[item.settings?.kod || '']?.data as number[] || [];
  //   return getReversedIndicators(data)
  // }, [activeEntities]);

  // const increased: Increased = calcIncreased(lastValue, prevValue, item.settings?.inverted);
  
  const increased = useMemo(() => getIncreased(item, activeEntities, getKod(entities, item)), [activeEntities, entities, item]);

  return (
    <ItemWrapper item={item} onSelect={onSelect}>
      <GrowthIconComponent
        increased      = {increased}
        unchangedBlack = {item.settings?.unchangedBlack}
        isLeft         = {item.settings?.isLeft}
        scale          = {item.settings?.scale}
        sx             = {{}}
      />
    </ItemWrapper>
  )
});
