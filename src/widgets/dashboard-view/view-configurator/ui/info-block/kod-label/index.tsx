import { FC, memo } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { Box } from '@mui/material';



interface Props {
  title: string
}

/** Label item как в гугл таблице */
export const KodLabel: FC<Props> = memo(({ title }) => {
  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Kod label' toolTitle='Так записано название статистики в гугл файле' />
      <Box sx={{ fontSize: '1rem' }}>
        {title}
      </Box>
    </RowWrapper>
  )
});
