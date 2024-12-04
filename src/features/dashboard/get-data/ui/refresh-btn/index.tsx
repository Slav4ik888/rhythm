import { FC, memo } from 'react';
import { IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Autorenew';
import { useCompany } from 'entities/company';
import { useDashboard } from 'entities/dashboard';



export const DashboardRefreshButton: FC = memo(() => {
  const { serviceGetData } = useDashboard();
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
