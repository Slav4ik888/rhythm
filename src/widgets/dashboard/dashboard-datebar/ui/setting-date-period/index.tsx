import { FC, memo } from 'react';
import { MDBox } from 'shared/ui/mui-design-components';
import { PeriodType, SetPeriodDate, UpdateGraphicsBtn } from 'features/dashboard';



export const SettingDatePeriod: FC = memo(() => (
  <MDBox display='flex'>
    <PeriodType />

    <SetPeriodDate type="start" />
    <SetPeriodDate type="end" />

    <UpdateGraphicsBtn />
  </MDBox>
));