import { FC, memo } from 'react';
import { CardItem } from 'entities/card-item';
import { Box } from '@mui/material';
import { DashboardBodyContentRender } from '../../render-items';
import { ParentsCardItems } from 'entities/dashboard';



interface Props {
  parentsCardItems : ParentsCardItems
  item             : CardItem
}

/** Item box */
export const DashboardBodyContentItemBox: FC<Props> = memo(({ parentsCardItems, item }) => {
  console.log('DashboardBodyContentItemBox id:', item.id);

  return (
    <Box sx={item.sx}>
      {/* {
        item.content && <DashboardBodyContentItemBoxContent
          content = {item.content}
          sx      = {item.contentSx}
        />
      } */}

      <DashboardBodyContentRender parentsCardItems={parentsCardItems} parentId={item.id} />
    </Box>
  )
});
