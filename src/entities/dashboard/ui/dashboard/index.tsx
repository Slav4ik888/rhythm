import { DashboardLayout } from 'shared/ui/layouts/dashboard-layout';
import { DashboardNavbar } from '../navbar';
import { DashboardFooter } from "../footer";
import { DashboardBody } from '../body';
import { memo } from 'react';



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
