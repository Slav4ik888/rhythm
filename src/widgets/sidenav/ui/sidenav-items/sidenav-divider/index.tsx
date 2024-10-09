import { FC, memo } from 'react';
import Divider from "@mui/material/Divider";
import { MaterialUIControllerProviderState, useMaterialUIController } from 'app/providers/theme-old';


interface Props {
  key?: string;
}


export const SidenavDivider: FC<Props> = memo(({ key }) => {
  const [controller] = useMaterialUIController();
  const { transparentSidenav, whiteSidenav, darkMode } = controller as MaterialUIControllerProviderState;
  

  return (
    <Divider
      key={key}
      light={
        (!darkMode && !whiteSidenav && !transparentSidenav) ||
        (darkMode && !transparentSidenav && whiteSidenav)
      }
    />
  )
});
