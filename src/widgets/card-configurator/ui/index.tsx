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
import { Colors } from './colors';



interface Props {
  isOpen   : boolean
  selected : CardItem | undefined
  onClose  : () => void
}

export const CardItemConfigurator: FC<Props> = memo(({ isOpen, selected = {} as CardItem, onClose }) => {
  const { companyId } = useCompany();
  const { id, styles } = selected;
  const { changeSelectedStyle } = useDashboard();

  const handleChange = useCallback((field: ItemStylesField, value: number | string) => {
    changeSelectedStyle({ companyId, selectedId: id, field, value });
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

      <Dimensions styles={styles} onChange={handleChange} />
      <Indents cardItemId={id} />

      {/* <SubHeader title='Выравнивание внутреннего содержимого' /> */}
      {/* display - flex, block, inline ... */}
      {/* flex-direction */}
      {/* flex-wrap */}
      {/* align-items */}
      {/* justify-content */}
      {/* <MDDivider /> */}

      <Borders styles={styles} onChange={handleChange} />
      <Colors styles={styles} onChange={handleChange} />

      {/* <SubHeader title='Текст'/> */}
      {/* font-size */}
      {/* font-weight */}
      {/* font-style */}
      {/* font-family */}

      {/* <SubHeader title='Управление'/> */}
      {/* DisplayShow - показать/скрыть элемент, "скрытый" - показывается только в режиме редактирования */}
      {/* Добавить новый элемент выше */}
      {/* Добавить новый элемент ниже */}
      {/* Удалить */}

    </DrawerStyled>
  )
});
