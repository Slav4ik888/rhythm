import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { CardItemId, ItemStylesField } from 'entities/card-item';
import { ChangeStyleItemDimensions as ChangeStyle } from './change-style-dimensions';
import { useDashboard } from 'entities/dashboard';



interface Props {
  cardItemId : CardItemId
  onChange   : (field: ItemStylesField, value: number | string) => void
}

export const Dimensions: FC<Props> = memo(({ cardItemId, onChange }) => {
  const { stylesByCardItemId: styles } = useDashboard({ cardItemId });
  
  return (
    <SubHeader title='Размеры'>
      <ChangeStyle
        bold
        field        = 'width'
        title        = 'width'
        toolTitle    = 'Ширина элемента'
        value        = {styles.width}
        onChange     = {onChange}
      />
      <ChangeStyle
        field        = 'minWidth'
        title        = 'minWidth'
        toolTitle    = 'Мин ширина элемента'
        value        = {styles.minWidth}
        onChange     = {onChange}
      />
      <ChangeStyle
        field        = 'maxWidth'
        title        = 'maxWidth'
        toolTitle    = 'Макс ширина элемента'
        value        = {styles.maxWidth}
        onChange     = {onChange}
      />
      <ChangeStyle
        bold
        field        = 'height'
        title        = 'height'
        toolTitle    = 'Высота элемента'
        value        = {styles.height}
        onChange     = {onChange}
      />
      <ChangeStyle
        field        = 'minHeight'
        title        = 'minHeight'
        toolTitle    = 'Мин высота элемента'
        value        = {styles.minHeight}
        onChange     = {onChange}
      />
      <ChangeStyle
        field        = 'maxHeight'
        title        = 'maxHeight'
        toolTitle    = 'Макс высота элемента'
        value        = {styles.maxHeight}
        onChange     = {onChange}
      />
    </SubHeader>
  )
});
