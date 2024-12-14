import { FC, memo, useCallback } from 'react';
import DrawerStyled from './styled';
import { CardItemConfiguratorMainHeader as MainHeader } from './main-header';
import { MDDivider } from 'shared/ui/mui-design-components';
import { CardItemConfiguratorSubHeader as SubHeader } from './sub-header';
import { CardItem, CardItemId, ItemStyles, ItemStylesField } from 'entities/card-item';
import { ChangeStyleItem } from 'features/dashboard';
import { useDashboard } from 'entities/dashboard';



interface Props {
  isOpen   : boolean
  selected : CardItem | undefined
  onClose  : () => void
}

export const CardItemConfigurator: FC<Props> = memo(({ isOpen, selected, onClose }) => {
  const { changeSelectedStyle } = useDashboard();

  const handleChangeSelectedStyle = useCallback((field: ItemStylesField, value: number | string) => {
    if (! selected) return;
    
    changeSelectedStyle({ selectedId: selected.id, field, value });
  }, [selected, changeSelectedStyle]);


  const handleClose = () => onClose();


  if (! isOpen || ! selected) return null

  return (
    <DrawerStyled
      anchor     = 'right'
      onClose    = {handleClose}
      open       = {isOpen}
      // @ts-ignore
      ownerState = {{ isOpen }}
    >
      <MainHeader onClose={handleClose} />

      <SubHeader title='Размеры'/>
      <ChangeStyleItem
        field        = 'width'
        title        = 'width'
        toolTitle    = 'Ширина элемента'
        defaultValue = {selected.styles.width}
        onChange     = {handleChangeSelectedStyle}
      />
      <ChangeStyleItem
        field        = 'height'
        title        = 'height'
        toolTitle    = 'Высота элемента'
        defaultValue = {selected.styles.height}
        onChange     = {handleChangeSelectedStyle}
      />
      <MDDivider />

      <SubHeader title='Отступы'/>
      {/* margin */}
      {/* padding */}
      <MDDivider />

      <SubHeader title='Выравнивание внутреннего содержимого' />
      {/* display - flex, block, inline ... */}
      {/* flex-direction */}
      {/* flex-wrap */}
      {/* align-items */}
      {/* justify-content */}
      <MDDivider />

      <SubHeader title='Рамка'/>
      {/* border */}
      {/* border-radius */}
      {/* border-color */}
      {/* shaddow */}
      <MDDivider />

      <SubHeader title='Цвет'/>
      {/* background-color */}
      {/* background-gradient */}
        {/* liner-gradient state */}
        {/* liner-gradient main */}
        {/* gradus */}
        
      {/* color */}
      {/* opacity */}
      <MDDivider />

      <SubHeader title='Текст'/>
      {/* font-size */}
      {/* font-weight */}
      {/* font-style */}
      {/* font-family */}
      <MDDivider />

      <SubHeader title='Управление'/>
      {/* DisplayShow - показать/скрыть элемент, "скрытый" - показывается только в режиме редактирования */}
      {/* Добавить новый элемент выше */}
      {/* Добавить новый элемент ниже */}
      {/* Удалить */}

    </DrawerStyled>
  )
});
