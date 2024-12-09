import { memo } from 'react';
import { DashboardBoxContainer } from 'entities/blocks';
import { DashboardReportContainer7_0_3 } from './7-0-3';
import { DashboardReportContainer7_0_4 } from './7-0-4';
import { Stack } from '@mui/material';



export const DashboardGroupDepartment7 = memo(() => {


  return (
    <DashboardBoxContainer
      title      = 'Управление'
      titleColor = 'department_7_title'
      bgColor    = 'department_7'
    >
      <Stack spacing={3} direction='row'>
        <DashboardReportContainer7_0_3 />
        <DashboardReportContainer7_0_4 />
      </Stack>
    </DashboardBoxContainer>
  );
});
