import { FC, memo, ReactNode, useMemo } from 'react';
import { ViewItem, ViewItemId, stylesToSx, ViewItemStyles, useDashboardView } from 'entities/dashboard-view';
import { Box } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { useDashboardData } from 'entities/dashboard-data';



const useStyles = (styles: ViewItemStyles, editMode: boolean) => {
  const root: any = {
    position: 'relative',
    ...stylesToSx(styles),
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
  item     : ViewItem
  children : ReactNode
  onSelect : (id: ViewItemId) => void
}

/** Item wrapper */
export const ItemWrapper: FC<Props> = memo(({ item, children, onSelect }) => {
  const { editMode } = useDashboardView();
  const { kods } = useDashboardData();
  const sx = useStyles(item.styles, editMode);

  const toolTitle = useMemo(() => {
    const result = kods.find(it => it?.value === item.settings?.kod);

    if (editMode) return result
      ? result.value + ' ' + result.title
      : item.settings?.kod ? item.settings?.kod : '';
    
    else return '';
  } , [item, kods, editMode]);

  const handleClick = (e: any) => {
    e.stopPropagation();
    onSelect(item.id);
  };


  return (
    <Tooltip title={toolTitle} enterDelay={0} enterNextDelay={0}>
      <Box
        id      = {item.id}
        sx      = {sx.root}
        onClick = {handleClick}
      >
        {
          editMode && <Box sx={sx.hover} />
        }
        {
          children
        }
      </Box>
    </Tooltip>
  )
});
