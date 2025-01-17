import { FC, memo, useMemo } from 'react';
import { CardItem, useDashboardView } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { Box } from '@mui/material';


/** Если это состояние, тогда убираем '-C', чтобы вывелся title названия статистики */
export const getKod = (selectedItem: CardItem) => selectedItem?.settings?.kod?.endsWith('-C')
  ? selectedItem?.settings?.kod?.replace('-C', '')
  : selectedItem?.settings?.kod
  || '';


/** Kod item */
export const Kod: FC = memo(() => {
  const { selectedItem } = useDashboardView();
  const title = useMemo(() => getKod(selectedItem), [selectedItem]);

  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Kod' toolTitle='Код статистики' />
      <Box sx={{ fontSize: '1rem' }}>
        {title}
      </Box>
    </RowWrapper>
  )
});
