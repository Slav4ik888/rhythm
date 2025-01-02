import { FC, memo, useMemo } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardView } from 'entities/dashboard-view';
import { Box } from '@mui/material';
import { CustomTheme, pxToRem, useTheme } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { isChanges as isChangesFunc } from 'shared/helpers/objects';



const useStyles = (theme: CustomTheme) => ({
  isChanges: {
    position     : 'absolute',
    top          : pxToRem(-40),
    right        : 0,
    border       : `1px solid ${theme.palette.error.main}`,
    borderRadius : '4px',
    color        : theme.palette.error.main,
    fontSize     : pxToRem(10),
    py           : pxToRem(3),
    px           : pxToRem(6),
  }
});


export const IdTitle: FC = memo(() => {
  const sx = useStyles(useTheme());
  const { selectedId, newStoredCard, entities } = useDashboardView();

  /** Есть ли не сохранённые изменения в SelectedItem */
  const isChanges = useMemo(() => {
    if (! selectedId) return false
  
    const currentCardState = entities[selectedId];
    return isChangesFunc(newStoredCard, currentCardState);
  }, [selectedId, newStoredCard, entities]);
  

  return (
    <RowWrapper>
      <ConfiguratorTextTitle
        bold
        title     = 'id'
        toolTitle = 'Item id'
      />
      {
        isChanges ? <Tooltip
          title  = 'Есть несохранённые изменения, для сохранения выберите любой другой элемент или закройти конфигуратор'
          sxSpan = {{ cursor: 'default' }}
        >
            <Box sx={sx.isChanges}>Не сохранён</Box>
          </Tooltip>
        : null
      }
      {selectedId}
    </RowWrapper>
  )
});
