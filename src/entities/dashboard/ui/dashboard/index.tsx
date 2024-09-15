import { memo } from 'react';
import { DashboardLayout } from 'shared/ui/layouts/dashboard-layout';
import { DashboardNavbar } from 'widgets/navbar';
import { DashboardFooter } from "widgets/footer";
import { DashboardBody } from '../body';



export const Dashboard = memo(() => {
  console.log('Dashboard ');

  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <DashboardBody />
      <DashboardFooter />
    </DashboardLayout>
  );
})
