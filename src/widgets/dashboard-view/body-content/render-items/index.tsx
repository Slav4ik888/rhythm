import { FC, memo } from 'react';
import { DashboardBodyContentItem } from '../content-item';
import { ViewItem, ViewItemId } from 'entities/dashboard-view';
import { getParents } from 'entities/dashboard-view/model/utils';



interface Props {
  rootViewItems : ViewItem[]
  onSelect         : (id: ViewItemId) => void
}

/**
 * Рендерим все корневые ViewItems
 */
export const ContentRenderRootViewItems: FC<Props> = memo(({ rootViewItems, onSelect }) => (
  <>
    {
      rootViewItems.map(item => (
        <DashboardBodyContentItem
          key              = {item.id}
          parentsViewItems = {getParents(Object.values(item.children || {}))}
          item             = {item}
          onSelect         = {onSelect}
        />
      ))
    }
  </>
));
