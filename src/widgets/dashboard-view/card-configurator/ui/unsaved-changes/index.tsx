import { FC, memo, useCallback, useMemo } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { Box, Typography } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { getChanges, isChanges as isChangesFunc, isEmpty, isNotEmpty } from 'shared/helpers/objects';
import { pxToRem } from 'shared/styles';
import { useCompany } from 'entities/company';



const useStyles = (theme: CustomTheme) => ({
  isChanges: {
    position     : 'absolute',
    top          : pxToRem(100),
    right        : pxToRem(24),
    border       : `1px solid ${theme.palette.error.main}`,
    borderRadius : '4px',
    cursor       : 'pointer',
    py           : pxToRem(3),
    px           : pxToRem(6),
    zIndex       : 100,
  },
  text: {
    color        : theme.palette.error.main,
    fontSize     : pxToRem(10),
  }
});


export const UnsavedChanges: FC = memo(() => {
  const sx = useStyles(useTheme());
  const { companyId, storedCompany, company, serviceUpdateCompany } = useCompany();
  const { selectedId, newStoredCard, entities, updateNewStoredCard, serviceUpdateCardItem } = useDashboardView();

  const changedCompany = useMemo(() => getChanges(storedCompany, company)
    , [selectedId, newStoredCard, entities, storedCompany, company]);
  
  const changedStyles = useMemo(() => getChanges(newStoredCard, entities?.[selectedId])
    , [selectedId, newStoredCard, entities, storedCompany, company]);

  /** Есть ли не сохранённые изменения в SelectedItem */
  const isChanges = useMemo(() => {
    if (! selectedId) return false;
    
    // const changedCompany = getChanges(storedCompany, company);
    if (isNotEmpty(changedCompany)) return true

    // const changedStyles = getChanges(newStoredCard, entities?.[selectedId]);
    if (isNotEmpty(changedStyles)) return true

    return false
  }
  , [selectedId, changedCompany, changedStyles]);
  

  const handleClick = useCallback(() => {
    /** Сохраняем изменившиеся customSettings */
    // const changedCompany = getChanges(storedCompany, company);
    if (isNotEmpty(changedCompany)) serviceUpdateCompany({ id: companyId, ...changedCompany });

    /** Сохраняем изменившиеся поля | стили */
    // const changedStyles = getChanges(newStoredCard, entities?.[selectedId]);
    
    if (isEmpty(changedStyles)) return

    const cardItem = { id: selectedId, ...changedStyles };
    serviceUpdateCardItem({ companyId, cardItem });
    updateNewStoredCard(cardItem);
  }, [selectedId, changedCompany, changedStyles]);


  if (! isChanges) return null;
  

  return (
    <Box sx={sx.isChanges} onClick={handleClick}>
      <Tooltip
        title='Есть несохранённые изменения, для сохранения нажмите на эту кнопку,
               или выберите любой другой элемент или закройти конфигуратор.'
      >
        <Typography sx={sx.text}>Не сохранён</Typography>
      </Tooltip>
    </Box>
  )
});
