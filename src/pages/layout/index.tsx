import { FC, memo, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { useUI } from 'entities/ui';
import { CssBaseline } from '@mui/material';
import { PageLoader } from 'widgets';
import { isNoEmptyFields, getAllObjValue } from 'shared/helpers/objects';
import { MessageBar } from 'widgets/message-bar';
import { ScrollToTop } from 'shared/ui/pages';
import { useDashboardData } from 'entities/dashboard-data';
import { Footer } from "widgets/footer";
import { UIConfigurator } from 'widgets/ui-configurator';
import { Navbar } from 'widgets/navbar';
import { LayoutWrapper } from './wrapper';



export const Layout: FC = memo(() => {
  console.log('Layout');
  const { loading: dashboardLoading } = useDashboardData();
  const { pageLoading, errors, setWarningMessage } = useUI();
  const loading = pageLoading || dashboardLoading || false;
  
  
  // Global show errors
  useEffect(() => {
    isNoEmptyFields(errors) && setWarningMessage((getAllObjValue(errors)));
  }, [errors]);
 

  return (
    <LayoutWrapper>
      <CssBaseline />
      <ScrollToTop />
      <Navbar />
      <MessageBar />
      <PageLoader loading={loading} />
      <UIConfigurator />

      <Outlet />
      <Footer />
    </LayoutWrapper>
  )
});
