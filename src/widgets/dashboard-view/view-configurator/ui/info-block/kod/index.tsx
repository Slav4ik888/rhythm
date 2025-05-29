import { FC, memo } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { Box } from '@mui/material';
import { f } from 'shared/styles';
import { ChipBySelectedItem } from 'entities/statistic-type';
import { GetFromGlobalKod } from '../../base-features-components';
import { useDashboardView } from 'entities/dashboard-view';



/** Kod item */
export const Kod: FC = memo(() => {
  const { selectedItem } = useDashboardView();

  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Kod' toolTitle='Код статистики' />
      <Box sx={{ ...f('-c-c'), gap: 2 }}>
        <ChipBySelectedItem />
        <GetFromGlobalKod type={selectedItem?.settings?.chipType} />
      </Box>
    </RowWrapper>
  )
});
