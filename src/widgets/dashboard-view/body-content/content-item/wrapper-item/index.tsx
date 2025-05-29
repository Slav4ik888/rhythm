import { FC, memo, ReactNode, useMemo } from 'react';
import { ViewItem, ViewItemId, stylesToSx, useDashboardView, DashboardViewEntities, isFirstGlobalKodInBranch, getKod } from 'entities/dashboard-view';
import { Box } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { useDashboardData } from 'entities/dashboard-data';



const useStyles = (
  item         : ViewItem, // Отрисовываемый элемент на Дашборде
  editMode     : boolean,
  entities     : DashboardViewEntities,
  selectedItem : ViewItem,
  light        : boolean
) => {
  const root: any = {
    position: 'relative',
    ...stylesToSx(item?.styles),
  };
  
  if (light && item?.id === selectedItem?.id) { // Только для выбранного элемента
    root.boxShadow = '0px 0px 8px 8px rgb(229 12 12)';
    root.transition = 'box-shadow 0.5s ease-in-out'; /* Плавное изменение тени */
  }
  else {
    root.boxShadow = 'none';
    if (item?.styles?.boxShadow) root.boxShadow = item.styles.boxShadow;
  }

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
    };
    // Рамку вокруг Box с isGlobalKod если у текущего выбрано fromGlobalKod
    if (isFirstGlobalKodInBranch(entities, selectedItem?.id, item.id)
      && (selectedItem.settings?.fromGlobalKod || selectedItem.settings?.charts?.filter(it => it.fromGlobalKod)?.length)
    ) {
      hover.border = '2px solid #f31a64';
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
  const { editMode, selectedItem, entities, light } = useDashboardView();
  const { kods } = useDashboardData();
  const sx = useStyles(item, editMode, entities, selectedItem, light);

  const toolTitle = useMemo(() => {
    if (item.type === 'box') return ''; // Тк в 'box' это только для настройки isGlobalKod

    const kod = getKod(entities, item);
    const result = kods.find(it => it?.value === kod);

    if (editMode) return result
      ? result.value + ' ' + result.title
      : kod || '';
    
    else return '';
  } , [item, kods, entities, editMode]);

  const handleClick = (e: any) => {
    e.stopPropagation();
    onSelect(item.id);
  };


  const component = (<Box
    id      = {item.id}
    sx      = {sx.root}
    onClick = {handleClick}
  >
    {
      editMode && <Box sx={sx.hover} />
    }
    {children}
  </Box>);

  if (item.type === 'box') return component;
  else return (
    <Tooltip title={toolTitle} enterDelay={0} enterNextDelay={0}>
      {component}
    </Tooltip>
  )
});
