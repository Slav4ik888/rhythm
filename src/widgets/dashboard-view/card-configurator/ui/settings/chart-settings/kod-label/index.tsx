import { FC, memo, useMemo } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardData } from 'entities/dashboard-data';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { Box } from '@mui/material';



const useStyles = (theme: CustomTheme) => ({
  title: {
    fontSize: '1rem',
  },
});


interface Props {
  index: number // Index charts in settings.charts
}

/** Label графика как в гугл таблице */
export const ChartKodLabel: FC<Props> = memo(({ index }) => {
  const sx = useStyles(useTheme());
  const { startEntities } = useDashboardData();
  const { selectedItem } = useDashboardView();
  const title = useMemo(() => startEntities[selectedItem.settings?.charts?.[index]?.kod || '']?.title || ''
    , [selectedItem, startEntities]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Kod label' toolTitle='Так записано название статистики в гугл файле' />
      <Box sx={sx.title}>
        {title}
      </Box>
    </RowWrapper>
  )
});
