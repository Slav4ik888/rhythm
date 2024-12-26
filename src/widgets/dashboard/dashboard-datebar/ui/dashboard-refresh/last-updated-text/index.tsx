import { FC, memo } from 'react';
import { MDTypography } from 'shared/ui/mui-design-components';
import { pxToRem } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { formatDate, SUB } from 'shared/helpers/dates';
import { useDashboardData } from 'entities/dashboard-data';



export const DashboardLastUpdatedText: FC = memo(() => {
  const { lastUpdated } = useDashboardData();

  return (
    <Tooltip
      title      = {`Последнее обновление было в ${formatDate(lastUpdated, 'D Month YYYY HH:MM', SUB.RU)}`}
      enterDelay = {500}
      sxSpan     = {{ cursor: "default" }}
    >
      <MDTypography fontSize={pxToRem(10)}>{formatDate(lastUpdated, "DD.MM.YY HH:MM")}</MDTypography>
    </Tooltip>
  )
});
