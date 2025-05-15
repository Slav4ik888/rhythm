import { FC, memo, useCallback, useMemo } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { Box, Typography } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { getChanges, isEmpty, isNotEmpty } from 'shared/helpers/objects';
import { f, pxToRem } from 'shared/styles';
import { useCompany } from 'entities/company';
import { CircularProgress } from 'shared/ui/circular-progress';



const useStyles = (theme: CustomTheme, loading: boolean) => ({
  isChanges: {
    ...f('-c'),
    position     : 'absolute',
    top          : pxToRem(60),
    right        : pxToRem(24),
    height       : pxToRem(20),
    zIndex       : 100,
    opacity      : loading ? 0.5 : 1
  },
  btn: {
    borderRadius : '4px',
    cursor       : 'pointer',
    py           : pxToRem(3),
    px           : pxToRem(6),
    ml           : 2,
  },
  save: {
    border       : `1px solid ${theme.palette.error.main}`,
    color        : theme.palette.error.main,
  },
  cancel: {
    background   : '#d2d2d2',
    color        : '#777',
  },
  text: {
    fontSize     : pxToRem(12),
    lineHeight   : pxToRem(16),
    cursor       : 'pointer',
  }
});


export const UnsavedChanges: FC = memo(() => {
  const { companyId, storedCompany, company, serviceUpdateCompany, cancelCustomSettings } = useCompany();
  const { loading, selectedId, newStoredViewItem, entities, serviceUpdateViewItem, cancelUpdateViewItem } = useDashboardView();
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
  

  const handleCancel = useCallback(() => {
    /** Отменить изменившиеся customSettings */
    if (isNotEmpty(changedCompany)) cancelCustomSettings();

    /** Отменить изменившиеся поля | стили */
    if (isEmpty(changedStyles)) return

    cancelUpdateViewItem();
  }, [selectedId, changedCompany, changedStyles]);


  const handleChange = useCallback(() => {
    /** Сохраняем изменившиеся customSettings */
    if (isNotEmpty(changedCompany)) serviceUpdateCompany({ id: companyId, ...changedCompany });

    /** Сохраняем изменившиеся поля | стили */
    if (isEmpty(changedStyles)) return

    const viewItem = { id: selectedId, ...changedStyles };
    serviceUpdateViewItem({ companyId, viewItem, newStoredViewItem: viewItem });
  }, [selectedId, changedCompany, changedStyles]);


  if (! isChanges) return null;
  

  return (
    <Box sx={sx.isChanges}>
      <Box sx={{ ...sx.btn, ...sx.cancel }} onClick={handleCancel}>
        <Tooltip title='Отменить внесённые изменения'>
          <Typography sx={sx.text}>Отменить</Typography>
        </Tooltip>
      </Box>
      <Box sx={{ ...sx.btn, ...sx.save }} onClick={handleChange}>
        <Tooltip
          title='Для сохранения изменений нажмите эту кнопку,
                или выберите любой другой элемент или закройти конфигуратор.'
        >
          <Typography sx={sx.text}>Cохранить</Typography>
        </Tooltip>
        <CircularProgress
          loading = {loading}
          color   = {sx.save.color}
          size    = {20}
        />
      </Box>
    </Box>
  )
});
