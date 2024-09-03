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

// 
// DashboardBody
//   |-- DashboardBlock
//        |-- DashboardReport
//             |-- Title
//             |-- Description
//             |-- Chart
//             |-- Indicators
//             |-- Marks
// 
//        |-- DashboardReport
//             |-- Title
//             |-- Description
//             |-- Chart
//             |-- Indicators
//             |-- Marks
// 
//        |-- DashboardReport
//             |-- Title
//             |-- Description
//             |-- Chart
//             |-- Indicators
//             |-- Marks
// 
// 
//   |-- DashboardBlock
//        |-- DashboardReport
//            ...
// 
//   |-- DashboardBlock
//        |-- DashboardReport
//            ...
// 


// 
// LAYERS
// ======================
// App
// Prosesses
// Pages
// Widgets
// Features
// Entities
// Shared
// ----------------------
// 
// SLISES
// ======================
// user
// post
// comment
// ----------------------
// 
// SEGMENTS
// ======================
// UI
// Model
// Lib
// Const
// Api
// Public API
// ----------------------
// 
