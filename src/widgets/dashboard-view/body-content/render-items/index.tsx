import { FC, memo, useMemo } from 'react';
import { DashboardBodyContentItem } from '../content-item';
import { ParentsCardItems, CardItemId } from 'entities/dashboard-view';
import { sortingArr } from 'shared/helpers/sorting';



interface Props {
  parentsCardItems : ParentsCardItems
  parentId         : CardItemId // Current Rendered ParentId
  onSelect         : (id: CardItemId) => void
}

/**
 * Рендерим все parentId`s children
 */
export const ContentRender: FC<Props> = memo(({ parentsCardItems, parentId, onSelect }) => {

  const sorted = useMemo(() => sortingArr(parentsCardItems[parentId], 'order'), [parentsCardItems, parentId]);
  
  if (! parentsCardItems[parentId]) return null;

  return (
    <>
      {
        sorted.map(item => <DashboardBodyContentItem
          key              = {item.id}
          parentsCardItems = {parentsCardItems}
          item             = {item}
          onSelect         = {onSelect}
        />)
      }
    </>
  )
});
