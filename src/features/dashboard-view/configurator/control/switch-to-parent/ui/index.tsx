import { FC, memo, useCallback } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { Box } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { MDButton } from 'shared/ui/mui-design-components';
import { CustomTheme, useTheme } from 'app/providers/theme';
import SelectedIcon from '@mui/icons-material/TabUnselected';



const useStyles = (theme: CustomTheme) => ({
  root: {
    position: 'relative',
  },
  icon: {
    color    : theme.palette.dark.main,
    fontSize : '20px',
  },
});


/**
 * Переключение на родительский элемент
 * для тех случаев когда его размер совпадает с текущим
 */
export const SwitchToParentViewItem: FC = memo(() => {
  const sx = useStyles(useTheme());
  const { selectedItem, setSelectedId } = useDashboardView();

  const handleClick = useCallback(() => {
    setSelectedId(selectedItem.parentId);
  }, [selectedItem, setSelectedId]);


  return (
    <Box sx={sx.root}>
      <Tooltip title='Переключение на родительский элемент - если его размер совпадает с текущим элементов
       и с помощью курсора его нельзя выделить'>
        <MDButton
          variant   = 'outlined'
          color     = 'dark'
          onClick   = {handleClick}
        >
          <SelectedIcon sx={sx.icon} />
        </MDButton>
      </Tooltip>
    </Box>
  )
});
