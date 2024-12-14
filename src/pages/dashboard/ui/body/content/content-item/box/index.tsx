import { FC, memo } from 'react';
import { CardItem, CardItemId, stylesToSx } from 'entities/card-item';
import { Box } from '@mui/material';
import { DashboardBodyContentRender } from '../../render-items';
import { ParentsCardItems } from 'entities/dashboard';



interface Props {
  parentsCardItems : ParentsCardItems
  item             : CardItem
  onSelect         : (id: CardItemId) => void
}

/** Item box */
export const DashboardBodyContentItemBox: FC<Props> = memo(({ parentsCardItems, item, onSelect }) => {
  console.log('DashboardBodyContentItemBox id:', item.id);

  const handleClick = () => onSelect(item.id);

  return (
    <Box
      sx      = {stylesToSx(item.styles)}
      onClick = {handleClick}
    >
      {/* {
        item.content && <DashboardBodyContentItemBoxContent
          content = {item.content}
          sx      = {item.contentSx}
        />
      } */}

      <DashboardBodyContentRender
        parentsCardItems = {parentsCardItems}
        parentId         = {item.id}
        onSelect         = {onSelect}
      />
    </Box>
  )
});
