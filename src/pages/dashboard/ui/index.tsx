import { FC, memo } from 'react';
import { __devLog } from 'shared/lib/tests/__dev-log';
// import { useAccess } from 'entities/company';
import { DashboardPageContainer } from './container';
// import { Navigate } from 'react-router-dom';
// import { AppRoutes, RoutePath } from 'app/providers/routes';



const DashboardPage: FC = memo(() => <DashboardPageContainer />
  // const { isDashboardAccessView } = useAccess();

  // if (isDashboardAccessView) return <DashboardPageContainer />
  // else return <Navigate to={RoutePath[AppRoutes.NOT_ACCESS]} />;
);

export default DashboardPage;
