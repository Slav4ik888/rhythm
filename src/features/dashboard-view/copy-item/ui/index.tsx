import { FC, memo, useCallback } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { Box } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { MDButton } from 'shared/ui/mui-design-components';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { pxToRem } from 'shared/styles';
import CopyIcon from '@mui/icons-material/ContentCopy';



const useStyles = (theme: CustomTheme) => ({
  root: {
    position: 'relative',
  },
  helperText: {
    position  : 'absolute',
    top       : '100%',
    width     : pxToRem(400),
    maxWidth  : pxToRem(400),
    fontSize  : '0.8rem',
    color     : theme.palette.error.dark,
  },
  icon: {
    color    : theme.palette.dark.main,
    fontSize : '20px',
  },
});


/**
 * Копирование элемента в другой элемент
 * для этого его активируем, а затем тыкаем на элемент в который нужно вставить
 */
export const CopyViewItem: FC = memo(() => {
  const sx = useStyles(useTheme());
  const { selectedId, activatedMovementId, setActiveMovementId, clearActivatedMovementId } = useDashboardView();

  const handleToggleActiveMovement = useCallback(() => {
    if (activatedMovementId) clearActivatedMovementId()
    else setActiveMovementId()
  }, [activatedMovementId]);


  return (
    <Box sx={sx.root}>
      {
        selectedId && selectedId === activatedMovementId
          ? <Box sx={sx.helperText}>
            Для копирования этого элемента, кликните на тот элемент, в который хотите его переместить
          </Box>
          : null
      }
      <Tooltip title='Копировать этот элемент в другой'>
        <MDButton
          variant   = 'outlined'
          color     = 'dark'
          onClick   = {handleToggleActiveMovement}
        >
          <CopyIcon sx={sx.icon} />
        </MDButton>
      </Tooltip>
    </Box>
  )
});
