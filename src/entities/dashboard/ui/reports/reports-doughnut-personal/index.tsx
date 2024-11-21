import { FC, memo } from 'react';
import { MDBox } from 'shared/ui/mui-design-components';
import { GradientColorName, GreyColor } from 'app/providers/theme';
import { ChartConfig } from '../../../../charts/model/types';
import { DashboardStatisticItem, ResultChanges } from 'entities/dashboard';
// import { TimeUpdated } from './time-updated';
import { ReportsLineChartConfig } from '../reports-line-chart/config-type';
import { ChipsContainer } from '../../items/chips-container';
import { DashboardConditionType } from 'entities/condition-type';
import { ReportsHeaderTitle } from '../reports-line-chart/header-title';
import { DoughnutChartContainer } from '../doughnut-chart';



interface Props {
  bgColor?   : GradientColorName | GreyColor
  // item       : DashboardStatisticItem
  // description : string | ReactNode
  // date        : string
  chart      : ChartConfig
  // condition? : DashboardConditionType
  // light?      : boolean // Не понял для чего это, но в Navbar также  | light = false
  // config     : ReportsLineChartConfig
}


export const ReportsDoughnutPersonal: FC<Props> = memo(({ bgColor = 'grey-200', chart }) => {

  return (
    <MDBox pb={1} px={1}>
      {/* <ReportsHeaderTitle title={item?.title} config={config} />
    
      <MDBox sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
        <ChipsContainer item={item} config={config} condition={condition} />
        <ResultChanges item={item} config={config} />
      </MDBox> */}
      
      {/* <MDTypography component='div' variant='button' color='text' fontWeight='light'>
        {description}
      </MDTypography> */}

      <DoughnutChartContainer bgColor={bgColor} chart={chart} />

      {/* <Divider />
      <TimeUpdated date={date} light={light} /> */}
    </MDBox>
  );
});
