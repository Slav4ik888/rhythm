import { FC, memo, useCallback, useMemo } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { Box, Typography } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { getChanges, isEmpty, isNotEmpty } from 'shared/helpers/objects';
import { pxToRem } from 'shared/styles';
import { useCompany } from 'entities/company';
import { CircularProgress } from 'shared/ui/circular-progress';



const useStyles = (theme: CustomTheme, loading: boolean) => ({
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
    opacity      : loading ? 0.5 : 1
  },
  text: {
    color        : theme.palette.error.main,
    fontSize     : pxToRem(10),
  }
});


export const UnsavedChanges: FC = memo(() => {
  const { companyId, storedCompany, company, serviceUpdateCompany } = useCompany();
  const { loading, selectedId, newStoredViewItem, entities, serviceUpdateViewItem } = useDashboardView();
  const sx = useStyles(useTheme(), loading);

  const changedCompany = useMemo(() => getChanges(storedCompany, company)
    , [selectedId, newStoredViewItem, entities, storedCompany, company]);
  
  const changedStyles = useMemo(() => getChanges(newStoredViewItem, entities?.[selectedId])
    , [selectedId, newStoredViewItem, entities, storedCompany, company]);

  /** Есть ли не сохранённые изменения в SelectedItem */
  const isChanges = useMemo(() => {
    if (! selectedId) return false;
    
    if (isNotEmpty(changedCompany)) {
      return true
    }
    if (isNotEmpty(changedStyles)) {
      console.log('changedStyles: ', changedStyles);
      return true
    }
    return false
  }
  , [selectedId, changedCompany, changedStyles]);
  

  const handleClick = useCallback(() => {
    /** Сохраняем изменившиеся customSettings */
    if (isNotEmpty(changedCompany)) serviceUpdateCompany({ id: companyId, ...changedCompany });

    /** Сохраняем изменившиеся поля | стили */
    if (isEmpty(changedStyles)) return

    const viewItem = { id: selectedId, ...changedStyles };
    serviceUpdateViewItem({ companyId, viewItem });
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
      <CircularProgress
        loading = {loading}
        color   = {sx.text.color}
        size    = {20}
      />
    </Box>
  )
});
