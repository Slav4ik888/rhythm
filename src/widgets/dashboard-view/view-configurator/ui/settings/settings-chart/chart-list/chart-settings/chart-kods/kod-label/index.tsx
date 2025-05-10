import { FC, memo, useMemo } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardData } from 'entities/dashboard-data';
import { Box } from '@mui/material';



interface Props {
  index: number // Index charts in settings.charts
}

/** Label графика как в гугл таблице */
export const ChartKodLabel: FC<Props> = memo(({ index }) => {
  const { startEntities } = useDashboardData();
  const { selectedItem } = useDashboardView();
  const title = useMemo(() => startEntities[selectedItem.settings?.charts?.[index]?.kod || '']?.title || ''
    , [selectedItem, startEntities]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Kod label' toolTitle='Так записано название статистики в гугл файле' />
      <Box sx={{ fontSize: '1rem', cursor: 'default', textAlign: 'right' }}>
        {title}
      </Box>
    </RowWrapper>
  )
});
