import { FC, memo, useState } from 'react';
import { setSidebarMini, useUIConfiguratorController } from 'app/providers/theme';
import { SidebarContainer } from './container';



export const Sidebar: FC = memo(() => {
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { sidebarMini, mode } = configuratorState;
 
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  
  // Open sidebar when mouse enter on mini sidebar
  const handleOnMouseEnter = () => {
    if (sidebarMini && !onMouseEnter) {
      setSidebarMini(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidebar when mouse leave mini sidebar
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setSidebarMini(dispatch, true);
      setOnMouseEnter(false);
    }
  };


  return (
    <SidebarContainer
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    />
  );
});
