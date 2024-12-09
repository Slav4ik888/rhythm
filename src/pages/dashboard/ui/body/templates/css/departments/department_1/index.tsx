import { memo } from 'react';
import { DashboardBoxContainer } from 'entities/blocks';
import { DashboardReportContainer1_0_1 } from './1-0-1';
// import { DashboardReportContainer1_0_2 } from './1-0-2';
import { DashboardReportContainer_1_0_2_Details } from './1-0-2-details';
import { Stack } from '@mui/material';



export const DashboardGroupDepartment1 = memo(() => {
  

  return (
    <DashboardBoxContainer
      title      = 'Персонал'
      titleColor = 'department_1_title'
      bgColor    = 'department_1'
    >
      <Stack spacing={3} direction='row'>
        <DashboardReportContainer1_0_1 />
        {/* <DashboardReportContainer1_0_2 /> */}
        <DashboardReportContainer_1_0_2_Details />
      </Stack>
    </DashboardBoxContainer>
  );
});
