import { FC, memo } from 'react';
import { IconButton } from '@mui/material';
import MDBox from 'shared/ui/mui-design-components/md-box';
import MDTypography from 'shared/ui/mui-design-components/md-typography';
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import { CustomMUITheme } from 'app/providers/theme-old';
import { NavLink } from "react-router-dom";
import {
  useMaterialUIController,
  setMiniSidenav,
  ColorName,
  MaterialUIControllerProviderState,
} from "app/providers/theme-old";
import { styles } from './styles';
import brandDark from 'shared/assets/logo_small.png';



interface Props {
  textColor: ColorName
}


export const SidenavLogoLabel: FC<Props> = memo(({ textColor }) => {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode } = controller as MaterialUIControllerProviderState;
  const brand = (transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandDark; //brandWhite
  const brandName = "Rhythm Dashboard";
  
  const handleSetMiniSidenav = () => setMiniSidenav(dispatch, ! miniSidenav);
  const handleCloseSidenav = () => setMiniSidenav(dispatch, true);


  return (
    <MDBox pt={3} pb={1} px={4} textAlign="center">
      <MDBox
        display={{ xs: "block", xl: "none" }}
        position="absolute"
        top={8}
        right={-4}
        p={1.625}
        onClick={handleCloseSidenav}
        sx={{ cursor: "pointer" }}
      >
        <IconButton
          size="small"
          color="inherit"
          onClick={handleSetMiniSidenav}
        >
          <ArrowBack fontSize="small" color="secondary" />
        </IconButton>
      </MDBox>
      <MDBox component={NavLink} to="/" display="flex" alignItems="center">
        {brand && <MDBox component="img" src={brand} alt="Brand" width="2rem" />}
        <MDBox
          width={!brandName && "100%"}
          sx={(theme: CustomMUITheme) => styles(theme, { miniSidenav })}
        >
          <MDTypography component="h6" variant="button" fontWeight="medium" color={textColor}>
            {brandName}
          </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  )
});
