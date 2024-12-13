import { FC, memo } from 'react';
import { CardItem } from 'entities/card-item';
import { Box } from '@mui/material';
import { DashboardBodyContentItemBoxContent } from './content';



interface Props {
  item: CardItem
}

/** Item box */
export const DashboardBodyContentItemBox: FC<Props> = memo(({ item }) => {
  console.log('DashboardBodyContentItemBox');

  return (
    <Box sx={item.sx}>
      {
        item.content && <DashboardBodyContentItemBoxContent
          content = {item.content}
          sx      = {item.contentSx}
        />
      }
    </Box>
  )
});
