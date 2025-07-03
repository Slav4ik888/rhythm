import { FC, memo, useMemo } from 'react';
import { RenderViewItemByType } from './render-item-by-type';
import { ViewItemId, ParentsViewItems } from 'entities/dashboard-view';
import { sortingArr } from 'shared/helpers/sorting';
import { ItemWrapper } from './wrapper-item';



interface Props {
  parents     : ParentsViewItems
  parentId    : ViewItemId // Current Rendered ParentId
  isTemplate? : boolean    // если рендерится шаблон
  onSelect    : (id: ViewItemId) => void
}

/**
 * Подготавливаем корневые компоненты и рендерим всех children
 */
export const DashboardRender: FC<Props> = memo(({ parents, parentId, isTemplate, onSelect }) => {
  const sorted = useMemo(() => sortingArr(parents[parentId], 'order'),
    [parents, parentId]
  );

  if (! parents[parentId]) return null;

  return (
    <>
      {
        sorted.map(item => (
          <ItemWrapper key={item.id} item={item} onSelect={onSelect}>
            <RenderViewItemByType
              parents    = {parents}
              item       = {item}
              isTemplate = {isTemplate}
              onSelect   = {onSelect}
            />
          </ItemWrapper>
        ))
      }
    </>
  )
});
