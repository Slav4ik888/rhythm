import { memo } from 'react';
import { CustomTheme, useUIConfiguratorController } from 'app/providers/theme';
import { NavLink } from 'react-router-dom';
import { styles } from './styles';
import { MDBox } from 'shared/ui/mui-design-components';
import { f } from 'shared/styles';
import Typography from '@mui/material/Typography';
import rhythmLogoDark from 'shared/assets/logos/logo_rhythm_small.png';
import { Divider } from 'shared/ui/mui-components';
import { ProgressiveImage } from 'shared/lib/progressiv-image';



export const SidebarLogoLabel = memo(() => {
  const [configuratorState] = useUIConfiguratorController();
  const { sidebarMini, mode } = configuratorState;
  const darkMode = mode === 'dark';
  const rhythmLogo = darkMode ? rhythmLogoDark : rhythmLogoDark; // brandWhite
  const brandName = 'Rhythm Dashboard';


  return (
    <>
      <MDBox pt={3} pb={1} px={3} mb={2} textAlign='center'>
        {/* <ArrowBackBtn /> */}
        <MDBox
          component={NavLink}
          to = '/'
          sx = {{ ...f('-c-c'), cursor: 'pointer' }}
        >
          {
            rhythmLogo && <ProgressiveImage
              alt = 'Ритм лого'
              src = {rhythmLogo}
              sx  = {{ root: { width: '2rem' } }}
            />
          }

          {
            ! sidebarMini && <MDBox sx={(theme: CustomTheme) => styles(theme, { sidebarMini })}>
              <Typography
                component  = 'h6'
                variant    = 'body1'
                textAlign  = 'left'
                sx         = {(theme) => ({ color: (theme as CustomTheme).palette.sidebar.logo })}
              >
                {brandName}
              </Typography>
            </MDBox>
          }
        </MDBox>
      </MDBox>

      <Divider />
    </>
  )
});
