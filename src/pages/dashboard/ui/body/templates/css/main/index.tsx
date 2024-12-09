import { memo } from 'react';
import { DashboardBoxContainer } from 'entities/blocks';
import { DashboardReportContainer7_0_3 } from '../departments/department_7/7-0-3';
import { DashboardReportContainer7_0_4 } from '../departments/department_7/7-0-4';
import { DashboardReportContainer1_0_1 } from '../departments/department_1/1-0-1';
import { DashboardReportContainer_1_0_2_Details } from '../departments/department_1/1-0-2-details';
import { DashboardReportContainer3_7_1 } from '../departments/department_3/3-7-1';
import { DashboardReportContainer4_0_2 } from '../departments/department_4/4-0-2';
import { DashboardReportContainer5_0_1 } from '../departments/department_5/5-0-1';
import { DashboardReportContainer6_0_1 } from '../departments/department_6/6-0-1';
import { DashboardReportContainer6_17_3 } from '../departments/department_6/6-17-3';
import { DashboardReportContainer6_17_6 } from '../departments/department_6/6-17-6';
import { DashboardReportContainer6_17_2 } from '../departments/department_6/6-17-2';
import { DashboardReportContainer6_17_7 } from '../departments/department_6/6-17-7';
import { Stack } from '@mui/material';
import { DashboardGroupDepartment2 } from '../departments/department_2';
import { DashboardGroupDepartment1 } from '../departments/department_1';
import { DashboardGroupDepartment4 } from '../departments/department_4';
import { DashboardGroupDepartment3 } from '../departments/department_3';
import { DashboardGroupDepartment5 } from '../departments/department_5';
import { DashboardGroupDepartment6 } from '../departments/department_6';
import { DashboardGroupDepartment7 } from '../departments/department_7';



// const config = {
//   name: 'DashboardBody_css_1d3r8',

//   // body: {} config for <DashboardBodyWrapper />
//   blocks: [
//     {
//       order: 1,
//       // component: <DashboardBoxContainer />,
//     }
//   ]
// }


export const DashboardBodyMain = memo(() => {
  console.log('CSS DashboardBody Main');

  // const sortedBlocks = [...config.blocks].sort((a, b) => a.order - b.order);

  return (
    <>
      {/* {
        sortedBlocks.map(block => block.component)
      } */}

      {/* <DashboardBoxContainer
        title      = 'Управление'
        titleColor = 'department_7_title'
        bgColor    = 'department_7'
      >
        <DashboardReportContainer7_0_3 />
        <DashboardReportContainer7_0_4 />
      </DashboardBoxContainer> */}

      <DashboardGroupDepartment7 />
      <DashboardGroupDepartment1 />
      <DashboardGroupDepartment2 />
      <DashboardGroupDepartment3 />
      <DashboardGroupDepartment4 />
      <DashboardGroupDepartment5 />
      <DashboardGroupDepartment6 />
    </>
  );
});
