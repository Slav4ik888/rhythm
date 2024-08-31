import { FC, memo } from 'react';
import { useMaterialUIController, MaterialUIControllerProviderState } from 'app/providers/theme';
import MDBox from 'shared/ui/mui-design-components/md-box';
import MDButton from 'shared/ui/mui-design-components/md-button';



export const SidenavUpgradeButton: FC = memo(({  }) => {
  const [controller] = useMaterialUIController();
  const { miniSidenav, sidenavColor } = controller as MaterialUIControllerProviderState;
  

  return (
    <MDBox p={2} mt="auto">
      <MDButton
        component="a"
        href=""
        // target="_blank"
        rel="noreferrer"
        variant="gradient"
        color={sidenavColor}
        fullWidth
      >
        {miniSidenav ? 'pro' : 'upgrade to pro'}
      </MDButton>
    </MDBox>
  )
});
