import { memo, useCallback } from 'react';
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
  const { editMode, selectedId, parentsCardItems, storedCard, entities, setSelectedId, serviceUpdateCardItem } = useDashboardView();


  const handleSelect = useCallback((id: CardItemId) => {
    if (! editMode) return
    setSelectedId(id);
    handleSaveIfChanges();
  }, [editMode, selectedId, entities, setSelectedId]);


  /** Сохраняем изменившиеся поля | стили */
  const handleSaveIfChanges = useCallback(() => {
    if (! selectedId) return // Например, выбрали первый раз или удалили карточку

    const changedFields = getChanges(storedCard, entities?.[selectedId]);
    
    if (isEmpty(changedFields)) return
    const cardItem = {
      id: selectedId,
      ...changedFields
    };

    serviceUpdateCardItem({ companyId, cardItem });
  }, [selectedId, storedCard, entities, serviceUpdateCardItem]);


  return (
    <Box sx={{ ...f() }}>
      <DashboardBodyContentRender
        parentsCardItems = {parentsCardItems}
        parentId         = 'no_parentId'
        onSelect         = {handleSelect}
      />
      <CardItemConfigurator onSaveIfChanges={handleSaveIfChanges} />
    </Box>
  )
});
