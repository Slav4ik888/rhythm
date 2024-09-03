import { FC, memo } from 'react';
import { DashboardRefreshButton } from 'features/dashboard';
import { MDBox, MDTypography } from 'shared/ui/mui-design-components';
import { useSelector } from 'react-redux';
import { selectLastUpdated } from 'entities/dashboard';
import { pxToRem } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import dayjs from 'dayjs';



interface Props {

}


export const DashboardRefresh: FC<Props> = memo(({  }) => {
  const lastUpdated = useSelector(selectLastUpdated);
  console.log('lastUpdated: ', lastUpdated);
  


  return (
    <MDBox ml={1} display="flex" alignItems='center'>
      <DashboardRefreshButton />
        
      <Tooltip
        title      = 'Последнее обновление'
        enterDelay = {500}
        sxSpan     = {{ cursor: "default" }}
      >
        <MDTypography fontSize={pxToRem(10)}>{dayjs(lastUpdated).format('DD.MM.YYYY HH:mm')}</MDTypography>
      </Tooltip>
    </MDBox>
  )
});
