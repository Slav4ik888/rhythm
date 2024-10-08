import { FC, memo, useState } from 'react';
import { useMaterialUIController, setMiniSidenav } from 'app/providers/theme-old';
import { SidenavContainer } from './container';



export const Sidenav: FC = memo(() => {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav } = controller;
  
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  
  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
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
