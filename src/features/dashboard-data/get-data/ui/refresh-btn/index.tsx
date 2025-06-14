import { FC, memo, useCallback } from 'react';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Autorenew';
import { useCompany } from 'entities/company';
import { useDashboardData } from 'entities/dashboard-data';
import { SxNavbarIcon } from 'widgets/navbar';



interface Props {
  sx: SxNavbarIcon
}

export const DashboardRefreshButton: FC<Props> = memo(({ sx }) => {
  const { serviceGetData } = useDashboardData();
  const { paramsCompany } = useCompany();
  const handleRefresh = useCallback(() => serviceGetData(paramsCompany), [paramsCompany, serviceGetData]);


  return (
    <IconButton
      color   = 'inherit'
      sx      = {sx.button}
      onClick = {handleRefresh}
    >
      <RefreshIcon sx={sx.icon} />
    </IconButton>
  )
});
