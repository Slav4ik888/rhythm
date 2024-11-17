import { memo } from 'react';
import { setIsOpenConfigurator, useUIConfiguratorController } from 'app/providers/theme';
import DrawerStyled from './styled';
import { PaletteModeSwitcher, MiniSidebarSwitcher, SidebarColorSwitcher } from 'features/ui';
import { UIConfiguratorMainHeader as MainHeader } from './main-header';
import { MDDivider } from 'shared/ui/mui-design-components';
import { UIConfiguratorSubHeader as SubHeader } from './sub-header';



export const UIConfigurator = memo(() => {
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { isOpenConfigurator } = configuratorState;

  const handleClose = () => setIsOpenConfigurator(dispatch, false);


  if (! isOpenConfigurator) return null

  return (
    <DrawerStyled
      anchor     = 'right'
      onClose    = {handleClose}
      open       = {isOpenConfigurator}
      // @ts-ignore
      ownerState = {{ isOpenConfigurator }}
    >
      <MainHeader onClose={handleClose} />
      <PaletteModeSwitcher />
      <MDDivider />
      
      <SubHeader title='Боковая панель'/>
      <MiniSidebarSwitcher />
      <SidebarColorSwitcher />
      <MDDivider />

      {/* <SubHeader title='Верхняя панель'/> */}
      {/* navbarBackgroundTheme : NavbarColorName */}
    </DrawerStyled>
  )
});
