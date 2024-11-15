import { FC, memo } from 'react';
import { IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Autorenew';
import { useAppDispatch } from 'shared/lib/hooks';
import { getData } from '../../model/services';
import { useCompany } from 'entities/company';



export const DashboardRefreshButton: FC = memo(() => {
  const dispatch = useAppDispatch();
  const { company } = useCompany();
  const handleRefresh = () => dispatch(getData(company?.googleData?.url));


  return (
    <IconButton
      color="inherit"
      onClick={handleRefresh}
    >
      <RefreshIcon />
    </IconButton>
  )
});
