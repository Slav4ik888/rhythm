import { memo } from 'react';
import MDBox from 'shared/ui/mui-design-components/md-box';
import MDTypography from 'shared/ui/mui-design-components/md-typography';
import { CustomTheme } from 'app/providers/theme';
import { NavLink } from 'react-router-dom';
import { styles } from './styles';
import brandDark from 'shared/assets/logo_small.png';
import { useUIConfiguratorController } from 'app/providers/theme';
import { MDDivider } from '../../../../shared/ui/mui-design-components';
import { f } from 'shared/styles';



export const SidebarLogoLabel = memo(() => {
  const [configuratorState] = useUIConfiguratorController();
  const { sidebarMini, mode } = configuratorState;
  const darkMode = mode === 'dark';
  const brand = darkMode ? brandDark : brandDark; //brandWhite
  const brandName = 'Rhythm Dashboard';


  return (
    <>
      <MDBox pt={3} pb={1} px={3} mb={2} textAlign='center'>
        {/* <ArrowBackBtn /> */}
        <MDBox
          component={NavLink}
          to = '/'
          sx = {{ ...f('-c-c'), cursor: 'pointer'}}
        >
          {brand && <MDBox component='img' src={brand} alt='Brand' width='2rem' />}

          {
            ! sidebarMini && <MDBox sx={(theme: CustomTheme) => styles(theme, { sidebarMini })}>
              <MDTypography
                component  = 'h6'
                variant    = 'body1'
                fontWeight = 'medium'
                textAlign  = 'left'
                color      = 'white'
              >
                {brandName}
              </MDTypography>
            </MDBox>
          }
        </MDBox>
      </MDBox>
      
      <MDDivider />
    </>
  )
});
