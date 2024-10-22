import { FC, memo, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks';
import { useUI } from 'entities/ui';
import { CssBaseline } from '@mui/material';
import { PageLoader } from 'widgets';
import { isNoEmptyFields, getAllObjValue } from 'shared/helpers/objects';
// import { useTheme, CustomTheme } from 'app/providers/theme';
// import { Navbar } from 'widgets/navbar';
import { MessageBar } from 'widgets/message-bar';
import { ScrollToTop } from 'shared/ui/pages';
import { useSelector } from 'react-redux';
import { selectLoading as selectDashboardLoading } from 'entities/dashboard';
import { Footer } from "widgets/footer";
import { UIConfigurator } from 'widgets/ui-configurator';
import { Navbar } from 'widgets/navbar';


// const useStyles = (theme: CustomTheme) => ({
//   wrapper: {
//     position        : 'relative',
//     display         : 'flex',
//     flexDirection   : 'column',
//     height          : '100%',
//     minHeight       : '100vh',
//     fontFamily      : '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
//     color           : theme.body.color,
//     backgroundColor : theme.body.background
//   },
//   main: {
//     display         : 'flex',
//     flexGrow        : 1,
//     // justifyContent  : screenFormats?.isDesktop ? 'center' : 'flex-start',
//     // height          : 'calc(100vh - 65px)',
//     minHeight       : 'calc(100vh - 4.6875rem)'
//   }
// });


export const Layout: FC = memo(() => {
  console.log('Layout');
  // const sx = useStyles(useTheme());
  const dispatch = useAppDispatch();
  const { pageLoading, errors, setWarningMessage } = useUI();
  const dashboardLoading = useSelector(selectDashboardLoading);
  const loading = pageLoading || dashboardLoading;
  
  
  // Global show errors
  useEffect(() => {
    isNoEmptyFields(errors) && dispatch(setWarningMessage((getAllObjValue(errors))));
  }, [errors]);
 

  return (
    <>
      <CssBaseline />
      <ScrollToTop />
      <Navbar />
      <MessageBar />
      <PageLoader loading={loading} />
      <UIConfigurator />

      <Outlet />
      <Footer />
    </>
  )
});
