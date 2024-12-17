import { FC, memo } from 'react';
import { MDDivider } from 'shared/ui/mui-design-components';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ItemStyles, ItemStylesField } from 'entities/card-item';
import { ChangeStyleItemDimensions as ChangeStyle } from './change-style-dimensions';



interface Props {
  styles   : ItemStyles
  onChange : (field: ItemStylesField, value: number | string) => void
}

export const Dimensions: FC<Props> = memo(({ styles, onChange }) => {
  return (
    <>
      <SubHeader title='Размеры'/>
      <ChangeStyle
        bold
        field        = 'width'
        title        = 'width'
        toolTitle    = 'Ширина элемента'
        defaultValue = {styles.width}
        onChange     = {onChange}
      />
      <ChangeStyle
        field        = 'minWidth'
        title        = 'minWidth'
        toolTitle    = 'Мин ширина элемента'
        defaultValue = {styles.minWidth}
        onChange     = {onChange}
      />
      <ChangeStyle
        field        = 'maxWidth'
        title        = 'maxWidth'
        toolTitle    = 'Макс ширина элемента'
        defaultValue = {styles.maxWidth}
        onChange     = {onChange}
      />
      <ChangeStyle
        bold
        field        = 'height'
        title        = 'height'
        toolTitle    = 'Высота элемента'
        defaultValue = {styles.height}
        onChange     = {onChange}
      />
      <ChangeStyle
        field        = 'minHeight'
        title        = 'minHeight'
        toolTitle    = 'Мин высота элемента'
        defaultValue = {styles.minHeight}
        onChange     = {onChange}
      />
      <ChangeStyle
        field        = 'maxHeight'
        title        = 'maxHeight'
        toolTitle    = 'Макс высота элемента'
        defaultValue = {styles.maxHeight}
        onChange     = {onChange}
      />

      <MDDivider mt={1} />
    </>
  )
});
