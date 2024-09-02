import { FC, memo } from 'react';
import { IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Autorenew';
import { useAppDispatch } from 'shared/lib/hooks';
import { getData } from '../../model/services';
import { DashboardPeriod } from 'entities/dashboard';



interface Props {

}


export const DashboardRefreshButton: FC<Props> = memo(({  }) => {
  const dispatch = useAppDispatch();
  const handleRefresh = () => dispatch(getData({
    selectedPeriod : DashboardPeriod.FIVE_YEARS,
    dateStart      : 213,
    dateEnd        : 234
  }));23


  return (
    <IconButton
      color="inherit"
      onClick={handleRefresh}
    >
      <RefreshIcon /> {/* fontSize="small"*/}
    </IconButton>
  )
});
