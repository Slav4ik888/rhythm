import { FC, memo } from 'react';
import { MDTypography } from 'shared/ui/mui-design-components';
import { useSelector } from 'react-redux';
import { selectLastUpdated } from 'entities/dashboard';
import { pxToRem } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { formatDate, SUB } from 'shared/helpers/dates';



export const DashboardLastUpdatedText: FC = memo(() => {
  const lastUpdated = useSelector(selectLastUpdated);

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
