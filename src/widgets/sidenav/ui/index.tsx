import { FC, memo, useState } from 'react';
import { setSidenavMini, useUIConfiguratorController } from 'app/providers/theme';
import { SidenavContainer } from './container';



export const Sidenav: FC = memo(() => {
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { sidenavMini, mode } = configuratorState;
 
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  
  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (sidenavMini && !onMouseEnter) {
      setSidenavMini(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setSidenavMini(dispatch, true);
      setOnMouseEnter(false);
    }
  };


  return (
    <SidenavContainer
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    />
  );
});
