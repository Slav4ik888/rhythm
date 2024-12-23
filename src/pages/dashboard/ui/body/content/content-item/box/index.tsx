import { FC, memo, MouseEventHandler, useCallback, useMemo, useState } from 'react';
import { CardItem, CardItemId, stylesToSx, ItemStyles } from 'entities/card-item';
import { Box } from '@mui/material';
import { DashboardBodyContentRender } from '../../render-items';
import { ParentsCardItems, useDashboard } from 'entities/dashboard';



const useStyles = (styles: ItemStyles, editMode: boolean, hover?: boolean) => {
  const root: any = {
      ...stylesToSx(styles),
  };

  if (editMode) {
    root['&:hover'] = {
       border: '3px solid rgb(62 255 10)'
    }
  }

  return {
    root
  }
};


interface Props {
  parentsCardItems : ParentsCardItems
  item             : CardItem
  onSelect         : (id: CardItemId) => void
}

/** Item box */
export const DashboardBodyContentItemBox: FC<Props> = memo(({ parentsCardItems, item, onSelect }) => {
  console.log('DashboardBodyContentItemBox id:', item.id);
  const { editMode } = useDashboard();
  const sx = useStyles(item.styles, editMode);

  const handleClick = (e: any) => {
    e.stopPropagation();
    onSelect(item.id);
  };


  // const handleMouseEnter = (e: any) => {
  //   console.log('Enter: ', item.id);
  //   e.stopPropagation();
  //   setHover(true);
  // };

  // const handleMouseLeave = (e: any) => {
  //   console.log('Leave: ', item.id);
  //   e.stopPropagation();
  //   setHover(false);
  // };


  return (
    <Box
      id      = {item.id}
      sx      = {sx.root}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
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
