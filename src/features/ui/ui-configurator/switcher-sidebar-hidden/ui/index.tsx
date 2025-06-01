import { memo, useEffect, useState } from 'react';
import { setSidebarHidden, useUIConfiguratorController } from 'app/providers/theme';
import { SwitcherItem } from '../../components/switcher-item';



export const SwitcherSidebarHidden = memo(() => {
  const [checked, setChecked] = useState<boolean>(false);
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { sidebarHidden } = configuratorState;

  useEffect(() => {
    setChecked(sidebarHidden);
  }, [sidebarHidden]);
  
  const toggle = () => setSidebarHidden(dispatch, ! sidebarHidden);


  return (
    <SwitcherItem
      title     = 'Скрытая'
      checked   = {checked}
      ariaLabel = 'SwitcherSidebarHidden'
      onToggle  = {toggle}
    />
  )
});
