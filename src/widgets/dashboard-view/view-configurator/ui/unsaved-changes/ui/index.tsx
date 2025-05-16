import { FC, memo, useCallback, useMemo } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { Box, Typography } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { isEmpty, isNotEmpty } from 'shared/helpers/objects';
import { f, pxToRem } from 'shared/styles';
import { useCompany } from 'entities/company';
import { CircularProgress } from 'shared/ui/circular-progress';
import { isChangedViewItem } from '../model/utils';



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
  const { companyId, changedCompany, serviceUpdateCompany, cancelCustomSettings } = useCompany();
  const { loading, selectedId, changedViewItem, serviceUpdateViewItem, cancelUpdateViewItem } = useDashboardView();
  const sx = useStyles(useTheme(), loading);

  const isChanges = useMemo(() => isChangedViewItem(selectedId, changedCompany, changedViewItem)
    , [selectedId, changedCompany, changedViewItem]);
  

  const handleCancel = useCallback(() => {
    if (isNotEmpty(changedCompany)) cancelCustomSettings(); /** Отменить изменившиеся customSettings */
    if (isNotEmpty(changedViewItem)) cancelUpdateViewItem(); /** Отменить изменившиеся поля | стили */
  }, [selectedId, changedCompany, changedViewItem]);


  const handleChange = useCallback(() => {
    if (isNotEmpty(changedCompany)) serviceUpdateCompany({ id: companyId, ...changedCompany }); /** Сохраняем изменившиеся customSettings */
    if (isEmpty(changedViewItem)) return
    /** Сохраняем изменившиеся поля | стили */
    const viewItem = { id: selectedId, ...changedViewItem };
    serviceUpdateViewItem({ companyId, viewItem, newStoredViewItem: viewItem });
  }, [selectedId, changedCompany, changedViewItem]);


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
