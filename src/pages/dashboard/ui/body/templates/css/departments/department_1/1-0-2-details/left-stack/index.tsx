import { FC, memo } from 'react';
import { Stack } from '@mui/material';
import { SmallReport_1_0_2 } from './small-report_1_0_2';
import { DoughnutSmallReport } from './doughnut-report';



interface Props {
  itemData_1_1_2 : number
  itemData_1_1_3 : number
  itemData_1_1_4 : number
}

/** Левая колонка по сотрудникам */
export const DashboardReportContainer_1_0_2_Details_LeftStack: FC<Props> = memo(({ 
  itemData_1_1_2, itemData_1_1_3, itemData_1_1_4
}) => {

  
  return (
    <Stack width={'80%'}>
      <SmallReport_1_0_2 />

      <DoughnutSmallReport
        itemData_1_1_2={itemData_1_1_2}
        itemData_1_1_3={itemData_1_1_3}
        itemData_1_1_4={itemData_1_1_4}
      />
    </Stack>
  );
});
