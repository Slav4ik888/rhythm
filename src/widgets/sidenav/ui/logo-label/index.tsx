import { FC, memo } from 'react';
import { IconButton } from '@mui/material';
import MDBox from 'shared/ui/mui-design-components/md-box';
import MDTypography from 'shared/ui/mui-design-components/md-typography';
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import { CustomTheme, setSidenavMini, ColorName } from 'app/providers/theme';
import { NavLink } from "react-router-dom";
import { styles } from './styles';
import brandDark from 'shared/assets/logo_small.png';
import { useUIConfiguratorController } from 'app/providers/theme';



interface Props {
  textColor: ColorName
}


export const SidenavLogoLabel: FC<Props> = memo(({ textColor }) => {
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { sidenavMini, mode } = configuratorState;
  const darkMode = mode === "dark";
  const brand = darkMode ? brandDark : brandDark; //brandWhite
  const brandName = "Rhythm Dashboard";
  
  const handleSetSidenavMini = () => setSidenavMini(dispatch, ! sidenavMini);
  const handleCloseSidenav = () => setSidenavMini(dispatch, true);


  return (
    <MDBox pt={3} pb={1} px={4} textAlign="center">
      <MDBox
        display={{ xs: "block", xl: "none" }}
        position="absolute"
        top={8}
        right={-4}
        p={1.625}
        sx={{ cursor: "pointer" }}
        onClick={handleCloseSidenav}
      >
        <IconButton
          size="small"
          color="inherit"
          onClick={handleSetSidenavMini}
        >
          <ArrowBack fontSize="small" color="secondary" />
        </IconButton>
      </MDBox>
      <MDBox component={NavLink} to="/" display="flex" alignItems="center">
        {brand && <MDBox component="img" src={brand} alt="Brand" width="2rem" />}
        <MDBox
          width={!brandName && "100%"}
          sx={(theme: CustomTheme) => styles(theme, { sidenavMini })}
        >
          <MDTypography component="h6" variant="button" fontWeight="medium" color={textColor}>
            {brandName}
          </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  )
});
