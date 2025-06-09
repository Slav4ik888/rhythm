import { FC, memo, useCallback, useEffect, useState } from 'react';
import { setMode, setSidebarColor, useUIConfiguratorController } from 'app/providers/theme';
import { PaletteModeSwitcherRowComponent } from './switcher-row';
import { PaletteModeSwitcherIconComponent } from './switcher-icon';



interface Props {
  ui?  : boolean // Toggle row, for ui-configurator
}
export const PaletteModeSwitcher: FC<Props> = memo(({ ui }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { mode } = configuratorState;

  useEffect(() => {
    setChecked(mode === 'light');
  }, [mode]);

  const togglePaletteMode = useCallback(() => {
    setMode(dispatch, mode === 'dark' ? 'light' : 'dark');
    setSidebarColor(dispatch, mode === 'dark' ? 'sidebar_grey' : 'sidebar_black');
  }, [mode, dispatch]);


  return (
    <>
      {
        ui
          ? <PaletteModeSwitcherRowComponent
              darkMode = {! checked}
              onToggle = {togglePaletteMode}
            />
          : <PaletteModeSwitcherIconComponent
              darkMode = {! checked}
              onToggle = {togglePaletteMode}
            />
      }
    </>
  )
});
