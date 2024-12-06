import { memo } from 'react';
import { DashboardBoxContainer } from 'entities/blocks';
import { DashboardReportContainer2_0_1 } from './2-0-1';
import { DashboardReportContainer2_0_1_1 } from './2-0-1-1';
import { DashboardReportContainer2_0_4 } from './2-0-4';
import { DashboardReportContainer2_0_4_1 } from './2-0-4-1';
import { Stack } from '@mui/material';
import { SmallReport_2_6_3 } from './small-report_2_6_3';



export const DashboardGroupDepartment2 = memo(() => {
  


  return (
    <DashboardBoxContainer
      title      = 'Продажи и распространение'
      titleColor = 'department_2_title'
      bgColor    = 'department_2'
    >
      <Stack>
        <DashboardReportContainer2_0_1 />
        <DashboardReportContainer2_0_1_1 />
      </Stack>

      <Stack mr={3}>
        <SmallReport_2_6_3 /> {/* Кол-во активных станций */}
        {/* 
            Кол-во проданных основных продуктов
            Кол-во изменений в услугах клиентов
            Кол-во клиентов на периодических услугах
        */}

        {/* Обороты в месяц по менеджерам */}
      </Stack>

      <Stack>
        <DashboardReportContainer2_0_4 />
        <DashboardReportContainer2_0_4_1 />
      </Stack>
      
      <Stack mr={3}>
        {/* 
            Small reports
            Кол-во активных станций (ЮЛ)																			
            Кол-во активных абонентов 
        */}

        {/* Обороты в месяц по менеджерам */}
      </Stack>
    </DashboardBoxContainer>
  );
});
