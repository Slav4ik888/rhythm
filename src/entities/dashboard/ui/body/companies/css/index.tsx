import { memo } from 'react';
import { DashboardBodyWrapper } from '../../body-wrapper';
import { DashboardGroupDepartment7 } from './departments/department_7';
import { DashboardGroupDepartment1 } from './departments/department_1';
import { DashboardGroupDepartment2 } from './departments/department_2';
import { DashboardGroupDepartment3 } from './departments/department_3';
import { DashboardGroupDepartment4 } from './departments/department_4';
import { DashboardGroupDepartment5 } from './departments/department_5';
import { DashboardGroupDepartment6 } from './departments/department_6';




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


export const DashboardBody_css_1d3r8 = memo(() => {
  console.log('CSS DashboardBody ');

  // const sortedBlocks = [...config.blocks].sort((a, b) => a.order - b.order);

  return (
    <DashboardBodyWrapper>
      {/* {
        sortedBlocks.map(block => block.component)
      } */}
      <DashboardGroupDepartment7 />
      <DashboardGroupDepartment1 />
      <DashboardGroupDepartment2 />
      <DashboardGroupDepartment3 />
      <DashboardGroupDepartment4 />
      <DashboardGroupDepartment5 />
      <DashboardGroupDepartment6 />
    </DashboardBodyWrapper>
  );
});
