import { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';
import { useUI } from 'entities/ui';
import CssBaseline from '@mui/material/CssBaseline';
import { PageLoader } from 'widgets/page-loader';
import { MessageBar } from 'widgets/message-bar';
import { ScrollToTop } from 'shared/ui/pages';
import { MainLayoutWrapper } from './wrapper';
import { Navbar } from 'widgets/navbar';
import { Footer } from 'widgets/footer';
import { UIConfigurator } from 'widgets/ui-configurator';



export const MainLayout: FC = memo(() => {
  const { pageLoading } = useUI();

  return (
    <MainLayoutWrapper>
      <CssBaseline />
      <MessageBar />
      <PageLoader loading={pageLoading} />
      <ScrollToTop />
      <Navbar />
      <UIConfigurator />

      <Outlet />
      <Footer />
    </MainLayoutWrapper>
  )
});
