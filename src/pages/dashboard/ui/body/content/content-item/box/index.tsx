import { FC, memo } from 'react';
import { CardItem, CardItemId, stylesToSx, ItemStyles, ParentsCardItems, useDashboardView } from 'entities/dashboard-view';
import { Box } from '@mui/material';
import { DashboardBodyContentRender } from '../../render-items';



const useStyles = (styles: ItemStyles, editMode: boolean) => {

  const root: any = {
    position: 'relative',
    ...stylesToSx(styles)
  };

  const hover: any = {
    position : 'absolute',
    top      : '-1px',
    bottom   : '-1px',
    left     : '-1px',
    right    : '-1px',
    zIndex   : 1000,
  };

  if (editMode) {
    hover['&:hover'] = {
      border: '3px solid rgb(62 255 10)'
    }
  }

  return {
    root, hover
  }
};


interface Props {
  parentsCardItems : ParentsCardItems
  item             : CardItem
  onSelect         : (id: CardItemId) => void
}

/** Item box */
export const DashboardBodyContentItemBox: FC<Props> = memo(({ parentsCardItems, item, onSelect }) => {
  const { editMode } = useDashboardView();
  const sx = useStyles(item.styles, editMode);

  const handleClick = (e: any) => {
    e.stopPropagation();
    onSelect(item.id);
  };


  return (
    <Box
      id      = {item.id}
      sx      = {sx.root}
      onClick = {handleClick}
    >
      <Box sx={sx.hover} />
      {
        item.label
          ? <>{item.label}</>
          : <DashboardBodyContentRender
              parentsCardItems = {parentsCardItems}
              parentId         = {item.id}
              onSelect         = {onSelect}
            />
      }
    </Box>
  )
});
