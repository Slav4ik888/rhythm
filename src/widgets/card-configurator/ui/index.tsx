import { FC, memo, useCallback } from 'react';
import DrawerStyled from './styled';
import { MDDivider } from 'shared/ui/mui-design-components';
import { ConfiguratorSubHeader as SubHeader, ConfiguratorMainHeader as MainHeader } from 'shared/ui/configurators-components';
import { CardItem, ItemStylesField } from 'entities/card-item';
import { useDashboard } from 'entities/dashboard';
import { Dimensions } from './dimensions';
import { useCompany } from 'entities/company';
import { Indents } from './indents';
import { Borders } from './borders';



interface Props {
  isOpen   : boolean
  selected : CardItem | undefined
  onClose  : () => void
}

export const CardItemConfigurator: FC<Props> = memo(({ isOpen, selected, onClose }) => {
  const { companyId } = useCompany();
  const { changeSelectedStyle } = useDashboard();

  const handleChangeSelectedStyle = useCallback((field: ItemStylesField, value: number | string) => {
    changeSelectedStyle({ companyId, selectedId: (selected as CardItem).id, field, value });
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

      <Dimensions
        styles   = {selected.styles}
        onChange = {handleChangeSelectedStyle}
      />
      
      <Indents cardItemId={selected.id} />

      {/* <SubHeader title='Выравнивание внутреннего содержимого' /> */}
      {/* display - flex, block, inline ... */}
      {/* flex-direction */}
      {/* flex-wrap */}
      {/* align-items */}
      {/* justify-content */}
      {/* <MDDivider /> */}

      <Borders
        styles     = {selected.styles}
        cardItemId = {selected.id}
        onChange   = {handleChangeSelectedStyle}
      />

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
