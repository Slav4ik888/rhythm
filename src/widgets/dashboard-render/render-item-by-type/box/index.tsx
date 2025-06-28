import { FC, memo } from 'react';
import { ViewItem, ViewItemId, ParentsViewItems } from 'entities/dashboard-view';
import { DashboardRender } from '../..';



interface Props {
  parents  : ParentsViewItems
  item     : ViewItem
  onSelect : (id: ViewItemId) => void
}

/** Item box */
export const ItemBox: FC<Props> = memo(({ parents, item, onSelect }) => (
  <DashboardRender
    parents  = {parents}
    parentId = {item.id}
    onSelect = {onSelect}
  />
));
