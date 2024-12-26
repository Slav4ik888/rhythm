import { FC, memo } from 'react';
import { IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Autorenew';
import { useCompany } from 'entities/company';
import { useDashboardData } from 'entities/dashboard-data';



export const DashboardRefreshButton: FC = memo(() => {
  const { serviceGetData } = useDashboardData();
  const { company } = useCompany();
  const handleRefresh = () => serviceGetData(company);


  return (
    <IconButton
      color="inherit"
      onClick={handleRefresh}
    >
      <RefreshIcon />
    </IconButton>
  )
});
