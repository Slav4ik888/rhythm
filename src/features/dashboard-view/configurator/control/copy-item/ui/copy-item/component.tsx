import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import { Tooltip } from 'shared/ui/tooltip';
import { MDButton } from 'shared/ui/mui-design-components';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { pxToRem } from 'shared/styles';
import CopyIcon from '@mui/icons-material/ContentCopy';
import { ActivatedCopiedType } from 'entities/dashboard-view';



const useStyles = (theme: CustomTheme) => ({
  root: {
    position: 'relative',
  },
  helperText: {
    position  : 'absolute',
    top       : '100%',
    right     : 0,
    width     : pxToRem(400),
    maxWidth  : pxToRem(400),
    fontSize  : '0.8rem',
    color     : theme.palette.error.dark,
  },
  icon: {
    color    : theme.palette.dark.main,
    fontSize : '20px',
  },
  prefix: {
    position  : 'absolute',
    top       : 0,
    right     : pxToRem(9),
    fontSize  : '0.7rem',
    fontWeight: 900,
    color     : '#757575',
  },
});


interface Props {
  type        : ActivatedCopiedType
  selectedId  : string
  activatedId : string | undefined // Id of the activated item, нужен, чтобы вывести подсказку что сделать с выбранным элементом
  onToggle    : () => void
}

export const CopyViewItemComponent: FC<Props> = memo(({ selectedId, type, activatedId, onToggle }) => {
  const sx = useStyles(useTheme());
  const isAll = type === 'copyItemAll';

  return (
    <Box sx={sx.root}>
      {
        selectedId && selectedId === activatedId
          ? <Box sx={sx.helperText}>
            Кликните на тот элемент, в который хотите его поместить скопированный.
            Для отмены - повторно нажмите на кнопку копирования.
          </Box>
          : null
      }
      <Tooltip
        title={`Копировать этот элемент в другой (${isAll ? 'со всеми вложенными элементами' : 'без вложений'})`}
      >
        <MDButton
          variant   = 'outlined'
          color     = 'dark'
          onClick   = {onToggle}
        >
          <CopyIcon sx={sx.icon} />
          <Box sx={sx.prefix}>
            {isAll ? 'All' : '1'}
          </Box>
        </MDButton>
      </Tooltip>
    </Box>
  )
});
