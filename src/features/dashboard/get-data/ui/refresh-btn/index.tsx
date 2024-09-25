import { FC, memo } from 'react';
import { IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Autorenew';
import { useAppDispatch } from 'shared/lib/hooks';
import { getData } from '../../model/services';
import { useSelector } from 'react-redux';
import { selectCompanyId } from 'entities/companies';



export const DashboardRefreshButton: FC = memo(() => {
  const dispatch = useAppDispatch();
  const companyId = useSelector(selectCompanyId);
  const handleRefresh = () => dispatch(getData(companyId));


  return (
    <IconButton
      color="inherit"
      onClick={handleRefresh}
    >
      <RefreshIcon />
    </IconButton>
  )
});
