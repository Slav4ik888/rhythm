import { memo, useEffect, useState } from 'react';
import { setIsSidebar, useUIConfiguratorController } from 'app/providers/theme';
import { SwitcherItem } from '../../components/switcher-item';



export const SwitcherSidebarHidden = memo(() => {
  const [checked, setChecked] = useState<boolean>(false);
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { isSidebar } = configuratorState;

  useEffect(() => {
    setChecked(! isSidebar);
  }, [isSidebar]);
  
  const toggle = () => setIsSidebar(dispatch, ! isSidebar);


  return (
    <SwitcherItem
      title     = 'Скрытая'
      checked   = {checked}
      ariaLabel = 'SwitcherSidebarHidden'
      onToggle  = {toggle}
    />
  )
});
