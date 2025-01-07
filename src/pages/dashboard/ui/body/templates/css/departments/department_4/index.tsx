import { memo } from 'react';
import { DashboardBoxContainer } from 'entities/blocks';
import { DashboardReportContainer4_0_2 } from './4-0-2';
import { Stack } from '@mui/material';
import { pxToRem } from 'shared/styles';
import { SmallReport_4_tru_b } from './10-otdel/small-report_4_tru_b';
import { SmallReport_4_pro_b } from './10-otdel/small-report_4_pro_b';
import { SmallReport_4_11А_5 } from './11-otdel/small-report_4_11А_5';



export const DashboardGroupDepartment4 = memo(() => {
  


  return (
    <DashboardBoxContainer
      title      = 'Производство'
      titleColor = 'department_4_title'
      bgColor    = 'department_4'
    >
      <Stack mr={3} spacing={3}>
        <DashboardReportContainer4_0_2 />
      </Stack>

      {/* 10 отдел 'Отдел производственного обслуживания' */}
      <Stack mr={3} spacing={3} minWidth={pxToRem(400)}>
        {/* Кол-во        | Соотношение исправных | Общее
            исправной     | ТС ко всем ТС         | кол-во ТС
            техники (Мес) |                       |			
            4-10-2        | 4-10-1	4-10-1-C      | 4-10-3
						    6						        0,60						    10     */}
		
        <SmallReport_4_tru_b /> {/* Трушков (баллы) */}
        <SmallReport_4_pro_b /> {/* Прокопцева (баллы) */}
      </Stack>

      {/* 11А отдел 'Отдел магистральных каналов' */}
      <Stack mr={3} spacing={3} minWidth={pxToRem(400)}>
        {/* 4-11А-1	4-11А-1-C Кол-во магистральных узлов связи с составленным описанием объекта и утверждённым графиком регламентных работ.													
            4-11А-2 Всего магистральных узлов связи													
            Вес кол-ва завершённых инцидентов по СПУТНИКОВЫМ станциям. (перевёрнутый)													
            Вес кол-ва завершённых инцидентов по BADCOM станциям. (перевёрнутый)*/}
        
        <SmallReport_4_11А_5 /> {/* Инженерная группа (всего) */}
        {/* 4_kos_b Косоротиков (баллы) */}
        {/* 4_per_b Перебейносов (баллы) */}
        {/* 4_gol_b Голенко (баллы) */}
      </Stack>

      {/* 12Б отдел 'Отдел производства' */}
      <Stack mr={3} spacing={3} minWidth={pxToRem(400)}>
        {/* 4-12А-1 Кол-во оборудования в ремонте (перевёрнутый) */}

        {/* 4-12Б-6 Всего монтажников */}
        {/* 4-12Б-2 Кол-во завершенных инсталляций (Нед) */}
       	{/* 4-12Б-3	Кол-во завершенных инсталляций (Мес) */}
        
        {/* 4-12Б-7 Всего техподдержки */}
        {/* 4_bel_b Беляев (баллы) */}
        {/* 4_oko_b	Околелов (баллы) */}
        {/* 4_kib_b Кибец (баллы) */}
        {/* 4-12Б-4 Кол-во завершенных инцидентов */}
        {/* 4-12Б-5	4-12Б-5-C Кол-во инцидентов в работе */}
      </Stack>
    </DashboardBoxContainer>
  );
});
