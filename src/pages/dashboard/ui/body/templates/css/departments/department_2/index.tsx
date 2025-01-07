import { memo } from 'react';
import { DashboardBoxContainer } from 'entities/blocks';
import { DashboardReportContainer2_0_1 } from './2-0-1';
import { DashboardReportContainer2_0_1_1 } from './2-0-1-1';
import { DashboardReportContainer2_0_4 } from './2-0-4';
import { DashboardReportContainer2_0_4_1 } from './2-0-4-1';
import { Stack } from '@mui/material';
import { SmallReport_2_6_3 } from './small-report_2_6_3';
import { SmallReport_2_0_3_and_2_6_9 } from './small-report_2_0_3_and_2_6_9';
import { SmallReport_2_6_1 } from './small-report_2_6_1';
import { SmallReport_2_6_2_2 } from './small-report_2_6_2_2';
import { SmallReport_2_6_4_2 } from './small-report_2_6_4_2';
import { SmallReport_2_6_5 } from './small-report_2_6_5';
import { SmallReport_2_osi_ob } from './small-report_2_osi_ob';
import { SmallReport_2_tay_ob } from './small-report_2_tay_ob';
import { SmallReport_2_epi_ob } from './small-report_2_epi_ob';
import { pxToRem } from 'shared/styles';



export const DashboardGroupDepartment2 = memo(() => {
  


  return (
    <DashboardBoxContainer
      title      = 'Продажи и распространение'
      titleColor = 'department_2_title'
      bgColor    = 'department_2'
    >
      <Stack mr={3} spacing={3}>
        <DashboardReportContainer2_0_1 />
        <DashboardReportContainer2_0_1_1 />
      </Stack>

      <Stack mr={3} spacing={3} minWidth={pxToRem(400)}>
        <SmallReport_2_6_3 />            {/* Кол-во активных станций (Нед) */}
        <SmallReport_2_0_3_and_2_6_9 />  {/* Кол-во проданных основных продуктов (Мес) & (Нед) */}
        <SmallReport_2_6_1 />            {/* Кол-во изменений в услугах клиентов(Нед) */}
        <SmallReport_2_6_2_2 />          {/* Кол-во клиентов на периодических услугах (Нед) 2-6-2-2 */}

        {/* Обороты в месяц по менеджерам */}
        <SmallReport_2_tay_ob />
        <SmallReport_2_epi_ob />
        <SmallReport_2_osi_ob />
      </Stack>

      <Stack mr={3} spacing={3}>
        <DashboardReportContainer2_0_4 />
        <DashboardReportContainer2_0_4_1 />
      </Stack>
      
      <Stack spacing={3} minWidth={pxToRem(400)}>
        <SmallReport_2_6_4_2 /> {/* Кол-во активных станций (ЮЛ) (Нед) 2-6-4-2 */}
        <SmallReport_2_6_5 />   {/* Кол-во активных абонентов (Нед) 2-6-5 */}
      </Stack>
    </DashboardBoxContainer>
  );
});
