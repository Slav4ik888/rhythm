import { FC, memo } from 'react';
import { IconButton } from '@mui/material';
import MDBox from 'shared/ui/mui-design-components/md-box';
import MDTypography from 'shared/ui/mui-design-components/md-typography';
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import { CustomTheme, setSidenavMini } from 'app/providers/theme';
import { NavLink } from 'react-router-dom';
import { styles } from './styles';
import brandDark from 'shared/assets/logo_small.png';
import { useUIConfiguratorController } from 'app/providers/theme';
import { SidenavDivider } from '../../../../shared/ui/sidenav-divider';



export const SidenavLogoLabel = memo(() => {
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { sidenavMini, mode } = configuratorState;
  const darkMode = mode === 'dark';
  const brand = darkMode ? brandDark : brandDark; //brandWhite
  const brandName = 'Rhythm Dashboard';
  
  const handleSetSidenavMini = () => setSidenavMini(dispatch, ! sidenavMini);
  const handleCloseSidenav = () => setSidenavMini(dispatch, true);


  return (
    <>
      <MDBox pt={3} pb={1} px={3} mb={2} textAlign='center'>
        <MDBox
          display={{ xs: 'block', xl: 'none' }}
          position='absolute'
          top={8}
          right={-4}
          p={1.625}
          sx={{ cursor: 'pointer' }}
          onClick={handleCloseSidenav}
        >
          <IconButton
            size='small'
            color='inherit'
            onClick={handleSetSidenavMini}
          >
            <ArrowBack fontSize='small' color='secondary' />
          </IconButton>
        </MDBox>
        <MDBox component={NavLink} to='/' display='flex' alignItems='center'>
          {brand && <MDBox component='img' src={brand} alt='Brand' width='2rem' />}
          <MDBox
            // width={! brandName && '100%'}
            sx={(theme: CustomTheme) => styles(theme, { sidenavMini })}
          >
            <MDTypography
              component  = 'h6'
              variant    = 'button'
              fontWeight = 'medium'
              textAlign  = 'left'
              color      = 'white'
            >
              {brandName}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
      
      <SidenavDivider />
    </>
  )
});
