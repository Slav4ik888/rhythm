import { FC, memo } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { Box } from '@mui/material';



interface Props {
  kod: string
}

/** Kod item */
export const Kod: FC<Props> = memo(({ kod }) => {

  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Kod' toolTitle='Код статистики' />
      <Box sx={{ fontSize: '1rem' }}>
        {kod}
      </Box>
    </RowWrapper>
  )
});
