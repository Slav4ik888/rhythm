import { memo } from 'react';
import { setIsOpenConfigurator, useUIConfiguratorController } from 'app/providers/theme';
import DrawerStyled from './styled';
import { PaletteModeSwitcher, MiniSidebarSwitcher, SidebarColorSwitcher } from 'features/ui';
import { MDDivider } from 'shared/ui/mui-design-components';
import { ConfiguratorSubHeader as SubHeader, ConfiguratorMainHeader as MainHeader } from 'shared/ui/configurators-components';



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
      
      <SubHeader title='Боковая панель'>
        <MiniSidebarSwitcher />
        <SidebarColorSwitcher />
      </SubHeader>

      {/* <SubHeader title='Верхняя панель'/> */}
      {/* navbarBackgroundTheme : NavbarColorName */}
    </DrawerStyled>
  )
});
