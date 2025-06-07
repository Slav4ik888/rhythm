import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, AppRoutes, routeConfig, RoutePath } from '../config';
import { Layout } from 'pages/layout';
import { RootPage } from 'pages/root';
import { PageLoader } from 'widgets/page-loader';



export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback(({ path, element, authOnly }: AppRouteProps) => {
    const component = (
      <Suspense fallback={<PageLoader />}>
        {element}
      </Suspense>
    );

    // skip AppRoutes.ROOT
    if (path === AppRoutes.ROOT) return null

    return (
      <Route
        key     = {path}
        path    = {path}
        element = {component}
      />
    )
  }, []);


  return (
    <Routes>
      <Route path={RoutePath[AppRoutes.ROOT]} element={<Layout />}>
        <Route index element={<RootPage />} />
        {
          Object
            .values(routeConfig)
            .map(renderWithWrapper)
        }
      </Route>
    </Routes>
  );
});
