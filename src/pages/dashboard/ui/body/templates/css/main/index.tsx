import { memo } from 'react';
import { DashboardBoxContainer } from 'entities/blocks';
import { DashboardReportContainer7_0_3 } from '../departments/department_7/7-0-3';
import { DashboardReportContainer7_0_4 } from '../departments/department_7/7-0-4';
import { DashboardReportContainer1_0_1 } from '../departments/department_1/1-0-1';
import { DashboardReportContainer1_0_2 } from '../departments/department_1/1-0-2';
import { DashboardReportContainer2_0_1 } from '../departments/department_2/2-0-1';
import { DashboardReportContainer2_0_1_1 } from '../departments/department_2/2-0-1-1';
import { DashboardReportContainer2_0_4 } from '../departments/department_2/2-0-4';
import { DashboardReportContainer2_0_4_1 } from '../departments/department_2/2-0-4-1';
import { DashboardReportContainer3_7_1 } from '../departments/department_3/3-7-1';
import { DashboardReportContainer4_0_2 } from '../departments/department_4/4-0-2';
import { DashboardReportContainer5_0_1 } from '../departments/department_5/5-0-1';
import { DashboardReportContainer6_0_1 } from '../departments/department_6/6-0-1';
import { DashboardReportContainer6_17_3 } from '../departments/department_6/6-17-3';
import { DashboardReportContainer6_17_6 } from '../departments/department_6/6-17-6';
import { DashboardReportContainer6_17_2 } from '../departments/department_6/6-17-2';
import { DashboardReportContainer6_17_7 } from '../departments/department_6/6-17-7';
import { Stack } from '@mui/material';



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
      <DashboardBoxContainer
        title      = 'Управление'
        titleColor = 'department_7_title'
        bgColor    = 'department_7'
      >
        <DashboardReportContainer7_0_3 />
        <DashboardReportContainer7_0_4 />
      </DashboardBoxContainer>

      <DashboardBoxContainer
        title      = 'Персонал'
        titleColor = 'department_1_title'
        bgColor    = 'department_1'
      >
        <DashboardReportContainer1_0_1 />
        <DashboardReportContainer1_0_2 />
      </DashboardBoxContainer>

      <DashboardBoxContainer
        title      = 'Продажи и распространение'
        titleColor = 'department_2_title'
        bgColor    = 'department_2'
      >
        <Stack>
          <DashboardReportContainer2_0_1 />
          <DashboardReportContainer2_0_1_1 />
        </Stack>
        <Stack>
          <DashboardReportContainer2_0_4 />
          <DashboardReportContainer2_0_4_1 />
        </Stack>
      </DashboardBoxContainer>

      <DashboardBoxContainer
        title      = 'Финансы'
        titleColor = 'department_3_title'
        bgColor    = 'department_3'
      >
        <DashboardReportContainer3_7_1 />
      </DashboardBoxContainer>

      <DashboardBoxContainer
        title      = 'Производство'
        titleColor = 'department_4_title'
        bgColor    = 'department_4'
      >
        <DashboardReportContainer4_0_2 />
      </DashboardBoxContainer>
      
      <DashboardBoxContainer
        title      = 'Качество'
        titleColor = 'department_5_title'
        bgColor    = 'department_5'
      >
        <DashboardReportContainer5_0_1 />
      </DashboardBoxContainer>

      <DashboardBoxContainer
        title      = 'Расширение'
        titleColor = 'department_6_title'
        bgColor    = 'department_6'
      >
        <DashboardReportContainer6_0_1 />
        <Stack>
          <DashboardReportContainer6_17_3 />
          <DashboardReportContainer6_17_6 />
        </Stack>

        <Stack>
          <DashboardReportContainer6_17_2 />
          <DashboardReportContainer6_17_7 />
        </Stack>
      </DashboardBoxContainer>
    </>
  );
});
