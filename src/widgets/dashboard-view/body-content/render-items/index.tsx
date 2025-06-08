import { FC, memo, useMemo } from 'react';
import { DashboardBodyContentItem } from '../content-item';
import { ParentsViewItems, ViewItemId } from 'entities/dashboard-view';
import { sortingArr } from 'shared/helpers/sorting';



interface Props {
  parentsViewItems : ParentsViewItems
  parentId         : ViewItemId // Current Rendered ParentId
  onSelect         : (id: ViewItemId) => void
}

/**
 * Рендерим все parentId`s children
 */
export const ContentRender: FC<Props> = memo(({ parentsViewItems, parentId, onSelect }) => {
  const sorted = useMemo(() => sortingArr(parentsViewItems[parentId], 'order'), [parentsViewItems, parentId]);

  if (! parentsViewItems[parentId]) return null;

  return (
    <>
      {
        sorted.map(item => <DashboardBodyContentItem
          key              = {item.id}
          parentsViewItems = {parentsViewItems}
          item             = {item}
          onSelect         = {onSelect}
        />)
      }
    </>
  )
});
