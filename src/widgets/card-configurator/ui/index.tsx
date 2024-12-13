import { FC, memo } from 'react';
import DrawerStyled from './styled';
import { CardItemConfiguratorMainHeader as MainHeader } from './main-header';
import { MDDivider } from 'shared/ui/mui-design-components';
import { CardItemConfiguratorSubHeader as SubHeader } from './sub-header';
import { CardItemId } from 'entities/card-item';



interface Props {
  isOpen     : boolean
  selectedId : CardItemId
  onClose    : () => void
}

export const CardItemConfigurator: FC<Props> = memo(({ isOpen, selectedId, onClose }) => {


  const handleClose = () => onClose();


  if (! isOpen) return null

  return (
    <DrawerStyled
      anchor     = 'right'
      onClose    = {handleClose}
      open       = {isOpen}
      // @ts-ignore
      ownerState = {{ isOpen }}
    >
      <MainHeader onClose={handleClose} />
      {/* <PaletteModeSwitcher /> */}
      <MDDivider />
      
      <SubHeader title='Боковая панель'/>
      {/* <MiniSidebarSwitcher />
      <SidebarColorSwitcher /> */}
      <MDDivider />

      {/* <SubHeader title='Верхняя панель'/> */}
      {/* navbarBackgroundTheme : NavbarColorName */}
    </DrawerStyled>
  )
});
