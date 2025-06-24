import { FC, memo } from 'react';
import { RowWrapper, ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { useDashboardView } from 'entities/dashboard-view';
import { AddNewViewItem } from 'features/dashboard-view';
import { f, pxToRem } from 'shared/styles';
import { AddViewItemElementBtns } from './element-btns';
import { AddViewItemIndicatorsBtns } from './indicators-btns';



/** Строки для добавления разных элементов */
export const AddRows: FC = memo(() => {
  const { selectedId, selectedItem: { type } } = useDashboardView();

  if (type !== 'box') return null

  return (
    <SubHeader title='Добавление элементов'>
      <RowWrapper sx={{ root: { ...f('-c-fe'), flexWrap: 'wrap', gap: pxToRem(8) } }}>
        <AddNewViewItem parentId={selectedId} component={AddViewItemElementBtns} />
      </RowWrapper>

      <RowWrapper sx={{ root: { ...f('-c-fe'), flexWrap: 'wrap', gap: pxToRem(8) } }}>
        {/* TODO: select chart type: line | bar ... */}
        <AddNewViewItem parentId={selectedId} component={AddViewItemIndicatorsBtns} />
      </RowWrapper>
    </SubHeader>
  )
});
