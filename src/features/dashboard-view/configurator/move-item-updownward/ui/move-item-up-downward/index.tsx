import { FC, memo, useCallback } from 'react';
import { ViewItem, useDashboardView } from 'entities/dashboard-view';
import { Toward, TowardType } from '../../../../../../shared/ui/configurators-components/toward';
import { calcNewOrder } from '../../model/utils/calc-new-order';
import { sortingArr } from 'shared/helpers/sorting';



interface Props {
  viewItem: ViewItem
}

/**
 * Перемещение (изменение order) внутри родителя
 */
export const MoveItemUpdownward: FC<Props> = memo(({ viewItem }) => {
  const { childrenViewItems, updateViewItem } = useDashboardView({ parentId: viewItem.parentId });

  const handleClick = useCallback((type: TowardType) => {
    updateViewItem({
      id    : viewItem.id,
      order : calcNewOrder(type, sortingArr(childrenViewItems, 'order'), viewItem)
    });
  }, [childrenViewItems, updateViewItem, viewItem.parentId]);

  return (
    <>
      <Toward type='up'   onClick={handleClick} />
      <Toward type='down' onClick={handleClick} />
    </>
  )
});
