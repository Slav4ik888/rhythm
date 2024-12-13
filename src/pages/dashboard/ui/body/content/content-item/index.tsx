import { FC, memo } from 'react';
import { CardItem } from 'entities/card-item';
import { DashboardBodyContentItemBox } from './box';



interface Props {
  item: CardItem
}


/** One card item */
export const DashboardBodyContentItem: FC<Props> = memo(({ item }) => {
  console.log('DashboardBodyContentItem');

  switch (item.type) {
    case 'box': return <DashboardBodyContentItemBox item={item} />;

    default: return <DashboardBodyContentItemBox item={item} />;
  }
});
