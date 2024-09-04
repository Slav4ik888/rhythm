import { FC, memo } from 'react';
import { DashboardRefreshButton } from 'features/dashboard';
import { MDBox, MDTypography } from 'shared/ui/mui-design-components';
import { useSelector } from 'react-redux';
import { selectLastUpdated } from 'entities/dashboard';
import { pxToRem } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { formatDate } from 'shared/helpers/dates';



interface Props {

}


export const DashboardRefresh: FC<Props> = memo(({  }) => {
  const lastUpdated = useSelector(selectLastUpdated);
  const date = formatDate(lastUpdated, "D Month YYYY HH:MM"); //  "DD.MM.YY HH:MM"

  return (
    <MDBox ml={1} display="flex" alignItems='center'>
      <DashboardRefreshButton />
        
      <Tooltip
        title      = {`Последнее обновление было в ${date}`}
        enterDelay = {500}
        sxSpan     = {{ cursor: "default" }}
      >
        <MDTypography fontSize={pxToRem(10)}>{date}</MDTypography>
      </Tooltip>
    </MDBox>
  )
});
