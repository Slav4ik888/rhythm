import { FC, memo } from 'react';
import { DashboardStatisticItem } from 'entities/dashboard';
import { Stack } from '@mui/material';
import { DashboardReportContainer_1_0_2_Details_SmallReport as SmallReport_1_0_2 } from './small-report';
import { DoughnutSmallReport } from './doughnut-report';
import { DashboardConditionType } from 'entities/condition-type';
import { DashboardStatisticType } from 'entities/statistic-type';



interface Props {
  dates          : string[]
  itemData       : DashboardStatisticItem<number>
  itemData_1_1_2 : number
  itemData_1_1_3 : number
  itemData_1_1_4 : number
  // condition?     : DashboardConditionType
  // statisticType? : DashboardStatisticType
  // companyType?   : string
  // productType?   : string
}

/** Левая колонка по сотрудникам */
export const DashboardReportContainer_1_0_2_Details_LeftStack: FC<Props> = memo(({ 
  itemData, dates, itemData_1_1_2, itemData_1_1_3, itemData_1_1_4
}) => {

  
  return (
    <Stack width={'80%'}>
      <SmallReport_1_0_2
        itemData      = {itemData}
        // condition     = {condition}
        // statisticType = {statisticType}
        // companyType   = {companyType}
        // productType   = {productType}
        dates         = {dates}
      />

      <DoughnutSmallReport
        itemData_1_1_2={itemData_1_1_2}
        itemData_1_1_3={itemData_1_1_3}
        itemData_1_1_4={itemData_1_1_4}
      />
    </Stack>
  );
});
