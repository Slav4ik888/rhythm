import { FC, memo, useMemo } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { Box } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { getChanges, isChanges as isChangesFunc } from 'shared/helpers/objects';
import { pxToRem } from 'shared/styles';



const useStyles = (theme: CustomTheme) => ({
  isChanges: {
    position     : 'absolute',
    top          : pxToRem(100),
    right        : pxToRem(24),
    border       : `1px solid ${theme.palette.error.main}`,
    borderRadius : '4px',
    color        : theme.palette.error.main,
    fontSize     : pxToRem(10),
    py           : pxToRem(3),
    px           : pxToRem(6),
  }
});


export const UnsavedChanges: FC = memo(() => {
  const sx = useStyles(useTheme());
  const { selectedId, newStoredCard, entities } = useDashboardView();

  /** Есть ли не сохранённые изменения в SelectedItem */
  const isChanges = useMemo(() => {
    if (! selectedId) return false
  
    const currentCardState = entities[selectedId];
    const result = isChangesFunc(newStoredCard, currentCardState)
    if (result) {
      console.log('Unsaved Id: ', selectedId);
      console.log(getChanges(currentCardState, newStoredCard));
      console.log('newStoredCard: ', newStoredCard);
      console.log('currentCardState: ', currentCardState);
    }
    
    return result;
  }, [selectedId, newStoredCard, entities]);
  

  return (
    <>
      {
        isChanges ? <Tooltip
          title  = 'Есть несохранённые изменения, для сохранения выберите любой другой элемент или закройти конфигуратор'
          sxSpan = {{ cursor: 'default' }}
        >
            <Box sx={sx.isChanges}>Не сохранён</Box>
          </Tooltip>
        : null
      }
    </>
  )
});
