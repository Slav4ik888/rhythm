import { FC, memo, useMemo } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardData } from 'entities/dashboard-data';
import { Box } from '@mui/material';
import { getKod } from '../kod';



/** Label item как в гугл таблице */
export const KodLabel: FC = memo(() => {
  const { startEntities } = useDashboardData();
  const { selectedItem } = useDashboardView();
  const title = useMemo(() => startEntities[getKod(selectedItem)]?.title || '', [selectedItem, startEntities]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Kod label' toolTitle='Так записано название статистики в гугл файле' />
      <Box sx={{ fontSize: '1rem' }}>
        {title}
      </Box>
    </RowWrapper>
  )
});
