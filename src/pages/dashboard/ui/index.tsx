import { FC, memo, useMemo } from 'react';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { checkAccess, useCompany } from 'entities/company';
import { DashboardPageContainer } from './container';
import { useUser } from 'entities/user';
import { Navigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'app/providers/routes';



const DashboardPage: FC = memo(() => {
  __devLog('DashboardPage');
  const { paramsCompany } = useCompany();
  const { email } = useUser();
  const dashboardAccess = useMemo(() => checkAccess(paramsCompany, email, 'a.d.f', 'v'),
    [email, paramsCompany]);

  if (! dashboardAccess) return <Navigate to={RoutePath[AppRoutes.NOT_ACCESS]} />;
  else return <DashboardPageContainer />
});

export default DashboardPage;
