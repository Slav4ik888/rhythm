import { FC, memo } from 'react';
import { MDTypography } from 'shared/ui/mui-design-components';
import { useSelector } from 'react-redux';
import { selectLastUpdated } from 'entities/dashboard';
import { pxToRem } from 'app/providers/theme-old';
import { Tooltip } from 'shared/ui/tooltip';
import { formatDate } from 'shared/helpers/dates';



export const DashboardLastUpdatedText: FC = memo(() => {
  const lastUpdated = useSelector(selectLastUpdated);
  const date = formatDate(lastUpdated, "DD.MM.YY HH:MM"); //  "D Month YYYY HH:MM"

  return (
    <Tooltip
      title      = {`Последнее обновление было в ${date}`}
      enterDelay = {500}
      sxSpan     = {{ cursor: "default" }}
    >
      <MDTypography fontSize={pxToRem(10)}>{date}</MDTypography>
    </Tooltip>
  )
});
