import { FC, memo, useCallback } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';
import { Box } from '@mui/material';
import { f, pxToRem } from 'shared/styles';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { MDButton } from 'shared/ui/mui-design-components';
import { useDashboardView } from 'entities/dashboard-view';



const useStyles = (theme: CustomTheme) => ({
  root: {
    mt: 3,
  },
  icon: {
    color    : theme.palette.dark.main,
    fontSize : '12px',
  },
  box: {
    ...f(),
    fontSize : pxToRem(14),
    gap      : 1,
  },
  button: {
    root: {
      minWidth: 'max-content'
    }
  }
});


interface Props {
  selectedId: string
}

export const IdTitle: FC<Props> = memo(({ selectedId }) => {
  const sx = useStyles(useTheme());
  const { highlightItem } = useDashboardView();

  const handleClick = useCallback(() => {
    const element = document.getElementById(selectedId);
    if (element) {
      element.scrollIntoView({
        behavior : 'smooth',
        block    : 'center',
        inline   : 'center'
      });
    }
    // Подсвечиваем элемент
    highlightItem(true);
    
    // Отменяем подсветку
    setTimeout(() => {
      highlightItem(false);
    }, 2000);

  }, [selectedId, highlightItem]);


  return (
    <RowWrapper sx={{ root: { ...sx.root } }}>
      <ConfiguratorTextTitle bold title='Id' toolTitle='Item id' />
      <Box sx={sx.box}>
        {selectedId}
        <Tooltip title='Показать и подсветить этот элемент'>
          <MDButton
            variant   = 'outlined'
            color     = 'dark'
            size      = 'small'
            sx        = {sx.button}
            onClick   = {handleClick}
          >
            <FilterCenterFocusIcon sx={sx.icon} />
          </MDButton>
        </Tooltip>
      </Box>
    </RowWrapper>
  )
});
