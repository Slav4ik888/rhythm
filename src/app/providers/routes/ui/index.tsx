import { memo, Suspense, useCallback } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRouteProps, AppRoutes, RoutePath } from '../config';
import { RootPage } from 'pages/root';
import { PageLoader } from 'widgets/page-loader';
import { NotFoundPage } from 'pages/not-found';
import { CompanyProfilePage } from 'pages/company-profile';
import { DashboardPage } from 'pages/dashboard';
import { MainLayout } from '../../../layouts';
import { CompanyPage } from 'pages/company';
import { RequireAuth } from '../require-auth';
import { SignupPage } from 'pages/signup';
import { LoginPage } from 'pages/login';
import { UserProfilePage } from 'pages/user-profile';



export const AppRouter = memo(() => {
  const withFallback = useCallback((element: JSX.Element) => (
    <Suspense fallback={<PageLoader loading />}>
      {element}
    </Suspense>
  ), []);

  // const renderWithWrapper = useCallback(({ path, element, authOnly }: AppRouteProps) => {
  //   const component = (
  //     <Suspense fallback={<PageLoader loading />}>
  //       {element}
  //     </Suspense>
  //   );

  //   // skip AppRoutes.ROOT
  //   if (path === AppRoutes.ROOT) return null

  //   return (
  //     <Route
  //       key     = {path}
  //       path    = {path}
  //       element = {component}
  //     />
  //   )
  // }, []);


  return (
    <Routes>
      <Route path={RoutePath[AppRoutes.ROOT]} element={<MainLayout />}>
        <Route index element={<RootPage />} />
        <Route path={RoutePath[AppRoutes.SIGNUP]} element={withFallback(<SignupPage />)} />
        <Route path={RoutePath[AppRoutes.LOGIN]} element={withFallback(<LoginPage />)} />
        <Route path={RoutePath[AppRoutes.USER_PROFILE]} element={withFallback(<UserProfilePage />)} />
        <Route path={RoutePath[AppRoutes.COMPANY_PROFILE]} element={withFallback(<CompanyProfilePage />)} />
        <Route path={RoutePath[AppRoutes.NOT_FOUND]} element={withFallback(<NotFoundPage />)} />

        <Route path={RoutePath[AppRoutes.SLUG]} element={withFallback(<RequireAuth><CompanyPage /></RequireAuth>)}>
          {/* <Route index element={<CompanyPage />} /> */}
          <Route path={RoutePath[AppRoutes.DASHBOARD]} element={withFallback(<DashboardPage />)} />

        </Route>
        {/* Перехват неправильных путей */}
        <Route path='dashboard/*' element={<Navigate to={RoutePath[AppRoutes.ROOT]} replace />} />

        {/* {
          Object
            .values(routeConfig)
            .map(renderWithWrapper)
        } */}
      </Route>

    </Routes>
  );
});
