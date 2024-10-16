import { FC, memo } from 'react';
import { useUIConfiguratorController } from 'app/providers/theme';
import MDButton from 'shared/ui/mui-design-components/md-button';



export const SidenavUpgradeButton: FC = memo(({  }) => {
  const [configuratorState] = useUIConfiguratorController();
  const { sidenavMini, sidenavColor } = configuratorState;
  

  return (
    <MDButton
      fullWidth
      component = "a"
      href      = ""
      target    = "_blank"
      rel       = "noreferrer"
      variant   = "gradient"
      color     = {sidenavColor}
    >
      {sidenavMini ? 'pro' : 'upgrade to pro'}
    </MDButton>
  )
});
