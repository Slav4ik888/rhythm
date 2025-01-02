import { FC, memo, ReactNode } from 'react';
import { CardItem, CardItemId, stylesToSx, ItemStyles, useDashboardView } from 'entities/dashboard-view';
import { Box } from '@mui/material';



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
  item     : CardItem
  children : ReactNode
  onSelect : (id: CardItemId) => void
}

/** Item wrapper */
export const ItemWrapper: FC<Props> = memo(({ item, children, onSelect }) => {
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
        children
      }
    </Box>
  )
});
