/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { memo } from 'react';
import { Grid } from '@mui/material';
import MDBox from "shared/ui/mui-design-components/md-box";
import { ComplexStatisticsCard } from 'shared/ui/cards/complex-statistics-card';
import { ReportsBarChart, ReportsBarChart2, ReportsLineChart, ReportsLineChart2 } from 'shared/ui/charts';
import reportsBarChartData from "../../model/example-data/reportsBarChartData";
import reportsLineChartData from "../../model/example-data/reportsLineChartData";
import { DashboardBlockContainer, DashboardReportContainer } from 'entities/blocks';
import { DashboardBodyWrapper } from './body-wrapper';
import { DashboardGroupDepartment7 } from 'widgets/dashboard/departments/department_7';

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";



export const DashboardBody = memo(() => {
  console.log('DashboardBody ');

  
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardBodyWrapper>
      <DashboardGroupDepartment7 />

      <DashboardBlockContainer width="max-content" bgColor='department_1' my={5} p={3} pr={0}>
        <DashboardReportContainer>
          <ReportsLineChart2
            bgColor="success"
            title="daily sales"
            description={
              <>
                (<strong>+15%</strong>) increase in today sales.
              </>
            }
            date="updated 4 min ago"
            chart={tasks}
          />
        </DashboardReportContainer>
        <DashboardReportContainer>
          <ReportsLineChart2
            bgColor="success"
            title="daily sales"
            description={
              <>
                (<strong>+15%</strong>) increase in today sales.
              </>
            }
            date="updated 4 min ago"
            chart={sales}
          />
        </DashboardReportContainer>
        <DashboardReportContainer>
          <ReportsBarChart2
            color="info"
            title="website views"
            description="Last Campaign Performance"
            date="campaign sent 2 days ago"
            chart={reportsBarChartData}
          />
        </DashboardReportContainer>
      </DashboardBlockContainer>

      <DashboardBlockContainer bgColor='department_2' my={5} p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <ReportsBarChart2
              color="info"
              title="website views"
              description="Last Campaign Performance"
              date="campaign sent 2 days ago"
              chart={reportsBarChartData}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ReportsBarChart2
              color="info"
              title="website views"
              description="Last Campaign Performance"
              date="campaign sent 2 days ago"
              chart={reportsBarChartData}
            />
          </Grid>
        </Grid>
      </DashboardBlockContainer>
      
      <DashboardBlockContainer bgColor='department_3' my={5} p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <ReportsBarChart2
              color="info"
              title="website views"
              description="Last Campaign Performance"
              date="campaign sent 2 days ago"
              chart={reportsBarChartData}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ReportsBarChart2
              color="info"
              title="website views"
              description="Last Campaign Performance"
              date="campaign sent 2 days ago"
              chart={reportsBarChartData}
            />
          </Grid>
        </Grid>
      </DashboardBlockContainer>

      <DashboardBlockContainer bgColor='department_4' my={5} p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <ReportsBarChart2
              color="info"
              title="website views"
              description="Last Campaign Performance"
              date="campaign sent 2 days ago"
              chart={reportsBarChartData}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ReportsBarChart2
              color="info"
              title="website views"
              description="Last Campaign Performance"
              date="campaign sent 2 days ago"
              chart={reportsBarChartData}
            />
          </Grid>
        </Grid>
      </DashboardBlockContainer>

      <DashboardBlockContainer bgColor='department_5' my={5} p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <ReportsBarChart2
              color="info"
              title="website views"
              description="Last Campaign Performance"
              date="campaign sent 2 days ago"
              chart={reportsBarChartData}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ReportsBarChart2
              color="info"
              title="website views"
              description="Last Campaign Performance"
              date="campaign sent 2 days ago"
              chart={reportsBarChartData}
            />
          </Grid>
        </Grid>
      </DashboardBlockContainer>

      <DashboardBlockContainer bgColor='department_6' my={5} p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <ReportsBarChart2
              color="info"
              title="website views"
              description="Last Campaign Performance"
              date="campaign sent 2 days ago"
              chart={reportsBarChartData}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ReportsBarChart2
              color="info"
              title="website views"
              description="Last Campaign Performance"
              date="campaign sent 2 days ago"
              chart={reportsBarChartData}
            />
          </Grid>
        </Grid>
      </DashboardBlockContainer>


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
              <ReportsBarChart
                bgColor="info"
                title="website views"
                description="Last Campaign Performance"
                date="campaign sent 2 days ago"
                chart={reportsBarChartData}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <ReportsLineChart
                bgColor="success"
                title="daily sales"
                description={
                  <>
                    (<strong>+15%</strong>) increase in today sales.
                  </>
                }
                date="updated 4 min ago"
                chart={sales}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <ReportsLineChart
                bgColor="dark"
                title="completed tasks"
                description="Last Campaign Performance"
                date="just updated"
                chart={tasks}
              />
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
