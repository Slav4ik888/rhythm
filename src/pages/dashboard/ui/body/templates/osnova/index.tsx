import { memo } from 'react';
import { Grid } from '@mui/material';
import MDBox from "shared/ui/mui-design-components/md-box";
import { ComplexStatisticsCard } from 'shared/ui/cards/complex-statistics-card';
import reportsBarChartData from "../../../../../../entities/dashboard-data/model/example-data/reportsBarChartData";
import reportsLineChartData from "../../../../../../entities/dashboard-data/model/example-data/reportsLineChartData";
import { DashboardBodyWrapper } from '../../wrapper';
import { DashboardGroupDepartment7 } from 'pages/dashboard/ui/body/templates/osnova/departments/department_7';
import { DashboardGroupDepartment1 } from 'pages/dashboard/ui/body/templates/osnova/departments/department_1';
import { DashboardGroupDepartment2 } from 'pages/dashboard/ui/body/templates/osnova/departments/department_2';
import { DashboardGroupDepartment3 } from 'pages/dashboard/ui/body/templates/osnova/departments/department_3';
import { DashboardGroupDepartment4 } from 'pages/dashboard/ui/body/templates/osnova/departments/department_4';
import { DashboardGroupDepartment5 } from 'pages/dashboard/ui/body/templates/osnova/departments/department_5';
import { DashboardGroupDepartment6 } from 'pages/dashboard/ui/body/templates/osnova/departments/department_6';


// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";



export const DashboardBody_osnova_g2d7 = memo(() => {
  console.log('Osnova DashboardBody ');

  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardBodyWrapper>
      <DashboardGroupDepartment7 />
      <DashboardGroupDepartment1 />
      <DashboardGroupDepartment2 />
      <DashboardGroupDepartment3 />
      <DashboardGroupDepartment4 />
      <DashboardGroupDepartment5 />
      <DashboardGroupDepartment6 />
      

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <ComplexStatisticsCard
              bgColor="dark"
              icon="weekend"
              title="Bookings"
              count={281}
              percentage={{
                color: "success",
                amount: "+55%",
                label: "than lask week",
              }}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <ComplexStatisticsCard
              icon="leaderboard"
              title="Today's Users"
              count="2,300"
              percentage={{
                color: "success",
                amount: "+3%",
                label: "than last month",
              }}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <ComplexStatisticsCard
              bgColor="success"
              icon="store"
              title="Revenue"
              count="34k"
              percentage={{
                color: "success",
                amount: "+1%",
                label: "than yesterday",
              }}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <ComplexStatisticsCard
              bgColor="primary"
              icon="person_add"
              title="Followers"
              count="+91"
              percentage={{
                color: "success",
                amount: "",
                label: "Just updated",
              }}
            />
          </MDBox>
        </Grid>
      </Grid>

      <MDBox mt={4.5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              {/* <ReportsBarChart
                bgColor="info"
                title="website views"
                description="Last Campaign Performance"
                date="campaign sent 2 days ago"
                chart={reportsBarChartData}
              /> */}
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              {/* <ReportsLineChart
                bgColor="success"
                title="daily sales"
                description={
                  <>
                    (<strong>+15%</strong>) increase in today sales.
                  </>
                }
                date="updated 4 min ago"
                chart={sales}
              /> */}
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              {/* <ReportsLineChart
                bgColor="dark"
                title="completed tasks"
                description="Last Campaign Performance"
                date="just updated"
                chart={tasks}
              /> */}
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>

      {/* <MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrdersOverview />
          </Grid>
        </Grid>
      </MDBox> */}
    </DashboardBodyWrapper>
  );
});
