import { FC, memo, useMemo } from 'react';
import { CardItem, CardItemId } from 'entities/dashboard-view';
import { ItemWrapper } from '../../wrapper-item';
import { Increased, useDashboardData } from 'entities/dashboard-data';
import { GrowthIconComponent } from './component';
import { calcIncreased, getReversedIndicators } from '../model/utils';



interface Props {
  item     : CardItem
  onSelect : (id: CardItemId) => void
}

/** Item GrowthIcon */
export const ItemGrowthIcon: FC<Props> = memo(({ item, onSelect }) => {
  const { activeEntities } = useDashboardData();
  // const { display, fractionDigits, addZero, kod = '' } = item.settings || {};
  
  const [lastValue, prevValue] = useMemo(() => {
    const data = activeEntities[item.settings?.kod || '']?.data as number[] || [];
    return getReversedIndicators(data)
  }, [activeEntities]);

  const increased: Increased = calcIncreased(lastValue, prevValue, item.settings?.inverted);
  

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
