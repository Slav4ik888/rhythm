import { FC, memo, useCallback, useEffect } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { Tooltip, TooltipHTML } from 'shared/ui/tooltip';
import { isEmpty, isNotEmpty } from 'shared/helpers/objects';
import { f, pxToRem } from 'shared/styles';
import { useCompany } from 'entities/company';
import { CircularProgress } from 'shared/ui/circular-progress';
import { isChangedViewItem } from '../model/utils';
import { __devLog } from 'shared/lib/tests/__dev-log';



const useStyles = (theme: CustomTheme, loading: boolean) => ({
  isChanges: {
    ...f('-c'),
    position     : 'absolute',
    top          : pxToRem(80),
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
  const {
    loading, selectedId, changedViewItem, isUnsaved,
    setIsUnsaved, serviceUpdateViewItems, cancelUpdateViewItem
  } = useDashboardView();

  const sx = useStyles(useTheme(), loading);

  useEffect(() => {
    isChangedViewItem(selectedId, changedCompany, changedViewItem, true)
      ? setIsUnsaved(true)
      : setIsUnsaved(false);
  }, [selectedId, changedCompany, changedViewItem, setIsUnsaved]);


  const handleCancel = useCallback(() => {
    if (isNotEmpty(changedCompany)) cancelCustomSettings(); /** Отменить изменившиеся customSettings */
    if (isNotEmpty(changedViewItem)) cancelUpdateViewItem(); /** Отменить изменившиеся поля | стили */
  }, [changedCompany, changedViewItem, cancelCustomSettings, cancelUpdateViewItem]);


  const handleClick = useCallback(() => {
    if (isNotEmpty(changedCompany)) serviceUpdateCompany({ id: companyId, ...changedCompany }); /** Сохраняем изменившиеся customSettings */
    if (isEmpty(changedViewItem)) return
    /** Сохраняем изменившиеся поля | стили */
    const viewItem = { id: selectedId, ...changedViewItem };
    serviceUpdateViewItems({ companyId, viewItems: [viewItem], newStoredViewItem: viewItem });
  }, [companyId, selectedId, changedCompany, changedViewItem, serviceUpdateViewItems, serviceUpdateCompany]);

  const handleConsole = useCallback(() => {
    if (isNotEmpty(changedCompany)) {
      __devLog('changedCompany:', '--force');
      __devLog(JSON.stringify(changedCompany, null, 2), '--force');
    }
    if (isNotEmpty(changedViewItem)) {
      __devLog('changedViewItem:', '--force');
      __devLog(JSON.stringify(changedViewItem, null, 2), '--force');
    }
  }, [changedCompany, changedViewItem]);


  if (! isUnsaved) return null;


  return (
    <Box sx={sx.isChanges}>
      <Box sx={{ ...sx.btn, ...sx.cancel }} onClick={handleConsole}>
        <TooltipHTML title={<>
            {isNotEmpty(changedCompany) && <>
              <p>changedCompany:</p>
              <pre><code>{JSON.stringify(changedCompany, null, 2)}</code></pre>
            </>}
            {isNotEmpty(changedViewItem) && <>
              <p>changedViewItem:</p>
              <pre><code>{JSON.stringify(changedViewItem, null, 2)}</code></pre>
            </>}
          </>}>
          <Typography sx={sx.text}>k</Typography>
        </TooltipHTML>
      </Box>
      <Box sx={{ ...sx.btn, ...sx.cancel }} onClick={handleCancel}>
        <Tooltip title='Отменить внесённые изменения'>
          <Typography sx={sx.text}>Отменить</Typography>
        </Tooltip>
      </Box>
      <Box id='saveBtn' sx={{ ...sx.btn, ...sx.save }} onClick={handleClick}>
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
