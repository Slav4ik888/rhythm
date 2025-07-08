import { memo } from 'react';
import { MDDivider } from 'shared/ui/mui-design-components';
import { SidebarNavLink } from '../sidebar-items/sidebar-navlink';
import { RoutePath } from 'app/providers/routes';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { usePages } from 'shared/lib/hooks';



export const SidebarMainSheet = memo(() => {
  const { isDashboardSheetMain } = usePages();


  return (
    <>
      <SidebarNavLink
        route  = {RoutePath.DASHBOARD}
        title  = 'Dashboard'
        icon   = {<EqualizerIcon fontSize='small' />}
        active = {isDashboardSheetMain}
      />

      <MDDivider />
    </>
  )
});
