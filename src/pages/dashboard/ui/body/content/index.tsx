import { memo, useCallback, useMemo } from 'react';
import { DashboardBodyContentRender } from './render-items';
import { CardItemConfigurator } from 'widgets/card-configurator';
import { Box } from '@mui/material';
import { f } from 'app/styles';
import { useCompany } from 'entities/company';
import { getChanges, isEmpty } from 'shared/helpers/objects';
import { CardItemId, useDashboardView } from 'entities/dashboard-view';



export const DashboardBodyContent = memo(() => {
  console.log('DashboardBodyContent');
  const { companyId } = useCompany();
  const { editMode, selectedId, parentsCardItems, entities, setSelectedId, serviceUpdateChangedStyles } = useDashboardView();
  const lastState = useMemo(() => entities?.[selectedId]?.styles, [selectedId]);

  
  const handleSelect = useCallback((id: CardItemId) => {
    if (! editMode) return
    console.log('handleSelect');
    console.log('Selected: ', id);
    setSelectedId(id);

    // Например, выбрали первый раз или удалили карточку
    if (! selectedId) return console.log('! selectedId', selectedId);

    const changedStyles = getChanges(lastState, entities?.[selectedId]?.styles);
    console.log('changedStyles: ', changedStyles);
    
    if (isEmpty(changedStyles)) return

    // Если редактировался другой элемент, то сохраняем стили
    serviceUpdateChangedStyles({ companyId, changedStyles: entities[selectedId].styles, selectedId });
  }, [editMode, selectedId, entities, setSelectedId]);

      
  return (
    <Box sx={{ ...f() }}>
      <DashboardBodyContentRender
        parentsCardItems = {parentsCardItems}
        parentId         = 'no_parentId'
        onSelect         = {handleSelect}
      />
      <CardItemConfigurator />
    </Box>
  )
});
