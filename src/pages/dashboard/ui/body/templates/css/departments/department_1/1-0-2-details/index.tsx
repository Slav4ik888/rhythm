import { memo, useMemo } from 'react';
import { DashboardReportContainer, useDashboard } from 'entities/dashboard';
import { Stack } from '@mui/material';
import { pxToRem } from 'app/providers/theme';
import { DashboardReportContainer_1_0_2_Details_LeftStack as LeftStack } from './left-stack';
import { DashboardReportContainer_1_0_2_Details_RightStack as RightStack } from './right-stack';
import { getLastItem } from 'shared/helpers/arrays';



/** Общее кол-во сотрудников */
export const DashboardReportContainer_1_0_2_Details = memo(() => {
  const { activeEntities } = useDashboard();

  const itemData_1_1_2  = useMemo(() => getLastItem(activeEntities['1-1-2']?.data) as number, [activeEntities]);
  const itemData_1_1_3  = useMemo(() => getLastItem(activeEntities['1-1-3']?.data) as number, [activeEntities]);
  const itemData_1_1_4  = useMemo(() => getLastItem(activeEntities['1-1-4']?.data) as number, [activeEntities]);


  if (! itemData_1_1_2 || ! itemData_1_1_3 || ! itemData_1_1_4) return null;

  return (
    <DashboardReportContainer
      title  = 'Сотрудники'
      config = {{ header: { minHeight: pxToRem(64) } }}
      sx     = {{ root: { width: pxToRem(540) } }}
    >
      <Stack direction='row' mt={2} spacing={2}>
        <LeftStack
          itemData_1_1_2 = {itemData_1_1_2}
          itemData_1_1_3 = {itemData_1_1_3}
          itemData_1_1_4 = {itemData_1_1_4}
        />

        <RightStack
          itemData_1_1_2 = {itemData_1_1_2}
          itemData_1_1_3 = {itemData_1_1_3}
          itemData_1_1_4 = {itemData_1_1_4}
        />
      </Stack>
    </DashboardReportContainer>
  );
});
