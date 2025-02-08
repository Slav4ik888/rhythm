import { FC, memo, useCallback } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { Box } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { MDButton } from 'shared/ui/mui-design-components';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { pxToRem } from 'shared/styles';
import SelectedIcon from '@mui/icons-material/TabUnselected';



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
});


/**
 * Активация родительского элемента
 * для тех случаев когда его размер совпадает с текущим
 */
export const SelectParentViewItem: FC = memo(() => {
  const sx = useStyles(useTheme());
  const { selectedItem, setSelectedId } = useDashboardView();

  const handleToggleActiveCopying = useCallback(() => {
    setSelectedId(selectedItem.parentId);
  }, [selectedItem, setSelectedId]);


  return (
    <Box sx={sx.root}>
      <Tooltip title='Активация родительского элемента, если его размер совпадает с текущим элементов и с помощью курсора нельзя выделить'>
        <MDButton
          variant   = 'outlined'
          color     = 'dark'
          onClick   = {handleToggleActiveCopying}
        >
          <SelectedIcon sx={sx.icon} />
        </MDButton>
      </Tooltip>
    </Box>
  )
});
