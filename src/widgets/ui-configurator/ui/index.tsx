import { memo } from 'react';
import { useUIConfiguratorController } from 'app/providers/theme';
import DrawerStyled from './styled';
import { PaletteModeSwitcher } from 'features/ui';



export const UIConfigurator = memo(() => {
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { openConfigurator } = configuratorState;


  if (! openConfigurator) return null

  return (
    // @ts-ignore
    <DrawerStyled ownerState={openConfigurator}>
      {/* Light / Dark mode : PaletteMode */}
      <PaletteModeSwitcher />
      {/* navbarBackgroundTheme : NavbarColorName */}
    </DrawerStyled>
  )
});
