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
        defaultValue = {styles.width}
        cardItemId   = {cardItemId}
        onChange     = {onChange}
      />
      <ChangeStyle
        field        = 'minWidth'
        title        = 'minWidth'
        toolTitle    = 'Мин ширина элемента'
        defaultValue = {styles.minWidth}
        cardItemId   = {cardItemId}
        onChange     = {onChange}
      />
      <ChangeStyle
        field        = 'maxWidth'
        title        = 'maxWidth'
        toolTitle    = 'Макс ширина элемента'
        defaultValue = {styles.maxWidth}
        cardItemId   = {cardItemId}
        onChange     = {onChange}
      />
      <ChangeStyle
        bold
        field        = 'height'
        title        = 'height'
        toolTitle    = 'Высота элемента'
        defaultValue = {styles.height}
        cardItemId   = {cardItemId}
        onChange     = {onChange}
      />
      <ChangeStyle
        field        = 'minHeight'
        title        = 'minHeight'
        toolTitle    = 'Мин высота элемента'
        defaultValue = {styles.minHeight}
        cardItemId   = {cardItemId}
        onChange     = {onChange}
      />
      <ChangeStyle
        field        = 'maxHeight'
        title        = 'maxHeight'
        toolTitle    = 'Макс высота элемента'
        defaultValue = {styles.maxHeight}
        cardItemId   = {cardItemId}
        onChange     = {onChange}
      />
    </SubHeader>
  )
});
