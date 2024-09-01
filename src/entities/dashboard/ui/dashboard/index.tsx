import { DashboardLayout } from 'shared/ui/layouts/dashboard-layout';
import { DashboardNavbar } from '../navbar';
import { DashboardFooter } from "../footer";
import { DashboardBody } from '../body';
import { memo, useEffect } from 'react';
import { LS } from 'shared/lib/local-storage';




export const Dashboard = memo(() => {
  console.log('Dashboard ');

  useEffect(() => {
    console.log(LS.getGSData());
    // Сохранить в store
    const transformedGSData = transformGSData(LS.getGSData()?.data1);
    console.log('transformedGSData: ', transformedGSData);
  }, []);

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
