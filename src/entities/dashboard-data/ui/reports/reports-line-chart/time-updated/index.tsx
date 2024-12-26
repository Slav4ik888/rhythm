import { FC } from "react";
import { MDBox, MDTypography } from "shared/ui/mui-design-components";
import { pxToRem, useUIConfiguratorController } from 'app/providers/theme';
import AccessTimeIcon from '@mui/icons-material/AccessTime';



interface Props {
  date   : string
  light? : boolean // Не понял для чего это, но в Navbar также
}


/** Показывает сколько прошло времени с прошлого обновления */
export const TimeUpdated: FC<Props> = ({ light = false, date }) => {
  const [configuratorState] = useUIConfiguratorController();
  const { mode } = configuratorState;
  const darkMode = mode === "dark";
  
  // For Icon style
  // @ts-ignore
  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
    width  : pxToRem(12),
    height : pxToRem(12),
    mt     : 0.15,
    mr     : 0.5,
    color  : () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (!light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });


  return (
    <MDBox display="flex" alignItems="center">
      {/* @ts-ignore */}
      <AccessTimeIcon sx={iconsStyle} fontSize="small" />
      <MDTypography variant="button" color="text" fontWeight="light">
        {date}
      </MDTypography>
    </MDBox>
  );
}
