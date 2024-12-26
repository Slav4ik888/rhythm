import { FC, memo } from 'react';
import { DashboardBodyContentItem } from '../content-item';
import { ParentsCardItems, CardItemId } from 'entities/dashboard-view';



interface Props {
  parentsCardItems : ParentsCardItems
  parentId         : CardItemId // Current Rendered ParentId
  onSelect         : (id: CardItemId) => void
}


export const DashboardBodyContentRender: FC<Props> = memo(({ parentsCardItems, parentId, onSelect }) => {

  if (! parentsCardItems[parentId]) return null;

  return (
    <>
      {
        parentsCardItems[parentId].map(item => <DashboardBodyContentItem
          key              = {item.id}
          parentsCardItems = {parentsCardItems}
          item             = {item}
          onSelect         = {onSelect}
        />)
      }
    </>
  )
});
