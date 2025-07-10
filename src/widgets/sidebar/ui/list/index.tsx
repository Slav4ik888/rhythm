import { FC } from 'react';
import List from '@mui/material/List';
import { AddSheetBtn } from 'features/ui/sidebar';
import { RenderRoutes } from '../render-routes';
import { useSidebar } from '../../model/hooks';
import { useDashboardViewState } from 'entities/dashboard-view';



export const SidebarList: FC = () => {
  const { sidebarRoutes, activeSheetId, textColor } = useSidebar();
  const { editMode } = useDashboardViewState();


  return (
    <List>
      <RenderRoutes
        routesList    = {sidebarRoutes}
        activeSheetId = {activeSheetId}
        textColor     = {textColor}
      />
      {
        editMode && <AddSheetBtn />
      }
    </List>
  );
}
