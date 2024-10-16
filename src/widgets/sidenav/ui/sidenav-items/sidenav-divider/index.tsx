import { FC, memo } from 'react';
import Divider from "@mui/material/Divider";
import { useUIConfiguratorController } from 'app/providers/theme';


interface Props {
  k?: string;
}


export const SidenavDivider: FC<Props> = memo(({ k: key }) => {
  const [configuratorState] = useUIConfiguratorController();
  const { mode } = configuratorState;

  return (
    <Divider
      key   = {key}
      light = {mode === 'light'}
    />
  )
});
