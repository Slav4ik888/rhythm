import { FC, memo, useCallback, useMemo } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { Box, Typography } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { getChanges, isChanges as isChangesFunc, isEmpty } from 'shared/helpers/objects';
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
  const { companyId } = useCompany();
  const { selectedId, newStoredCard, entities, updateNewStoredCard, serviceUpdateCardItem } = useDashboardView();

  /** Есть ли не сохранённые изменения в SelectedItem */
  const isChanges = useMemo(() => selectedId
    ? isChangesFunc(newStoredCard, entities[selectedId])
    : false
  , [selectedId, newStoredCard, entities]);
  

  const handleClick = useCallback(() => {
    const changedFields = getChanges(newStoredCard, entities?.[selectedId]);
    
    if (isEmpty(changedFields)) return
    const cardItem = {
      id: selectedId,
      ...changedFields
    };

    serviceUpdateCardItem({ companyId, cardItem });
    updateNewStoredCard(cardItem);
  }, [selectedId, newStoredCard, entities]);


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
