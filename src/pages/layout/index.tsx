import { FC, memo, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useUI } from 'entities/ui';
import CssBaseline from '@mui/material/CssBaseline';
import { PageLoader } from 'widgets/page-loader';
import { isNoEmptyFields, getAllObjValue } from 'shared/helpers/objects';
import { MessageBar } from 'widgets/message-bar';
import { ScrollToTop } from 'shared/ui/pages';
import { useDashboardData } from 'entities/dashboard-data';
import { Footer } from 'widgets/footer';
import { UIConfigurator } from 'widgets/ui-configurator';
import { Navbar } from 'widgets/navbar';
import { LayoutWrapper } from './wrapper';
import { useDashboardView } from 'entities/dashboard-view';



export const Layout: FC = memo(() => {
  const { loading: dashboardLoading } = useDashboardData();
  const { loading: viewLoading } = useDashboardView();
  const { pageLoading, errors, setWarningMessage } = useUI();
  const loading = pageLoading || dashboardLoading || viewLoading || false;


  // Global show errors
  useEffect(() => {
    isNoEmptyFields(errors) && setWarningMessage((getAllObjValue(errors)));
  }, [errors, setWarningMessage]);


  return (
    <LayoutWrapper>
      <CssBaseline />
      <MessageBar />
      <PageLoader loading={loading} />
      <ScrollToTop />
      <Navbar />
      <UIConfigurator />

      <Outlet />
      <Footer />
    </LayoutWrapper>
  )
});
