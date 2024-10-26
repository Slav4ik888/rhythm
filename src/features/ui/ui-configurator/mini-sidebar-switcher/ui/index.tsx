import { memo, useEffect, useState } from 'react';
import { setSidebarMini, useUIConfiguratorController } from 'app/providers/theme';
import { SwitcherItem } from '../../components/switcher-item';



export const MiniSidebarSwitcher = memo(() => {
  const [checked, setChecked] = useState<boolean>(false);
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { sidebarMini } = configuratorState;

  useEffect(() => {
    setChecked(sidebarMini);
  }, [sidebarMini]);
  
  const toggleMiniSidebar = () => setSidebarMini(dispatch, ! sidebarMini);


  return (
    <SwitcherItem
      title     = 'Свёрнутая'
      checked   = {checked}
      ariaLabel = 'MiniSidebarSwitcher'
      onToggle  = {toggleMiniSidebar}
    />
  )
});
