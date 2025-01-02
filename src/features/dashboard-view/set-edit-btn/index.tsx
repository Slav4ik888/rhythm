import { FC, memo, useEffect, useState, useCallback } from 'react';
import { Box, IconButton } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useDashboardView } from 'entities/dashboard-view';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomTheme, pxToRem, useTheme, useUIConfiguratorController } from 'app/providers/theme';
import { f } from 'app/styles';
import { sxNavbarIconButton, sxNavbarIconsStyle } from 'shared/lib/styles/navbar';



const useStyles = (
  theme             : CustomTheme,
  navbarTransparent : boolean,
  light             : boolean | undefined
) => ({
  button : sxNavbarIconButton(theme),
  icon   : sxNavbarIconsStyle(theme, navbarTransparent, light)
});

// const useStyles = (theme: CustomTheme, editMode: boolean) => ({
//   root: {
//     ...f('-c-c'),
//     position     : 'fixed',
//     right        : pxToRem(30),
//     bottom       : pxToRem(30),
//     borderRadius : '50%',
//     background   : '#dedede',
//   },
//   button: {
//     width        : pxToRem(70),
//     height       : pxToRem(70),
//   },
//   icon: {
//     color: editMode
//       ? theme.palette.primary.main
//       : theme.palette.dark.main,
//     fontSize: '1.5rem',
//   }
// });

interface Props {
  light: boolean | undefined
}

export const DashboardSetEditBtn: FC<Props> = memo(({ light }) => {
  const { editMode, setEditMode } = useDashboardView();
  // const sx = useStyles(useTheme(), editMode);
  const [configuratorState] = useUIConfiguratorController();
  const sx = useStyles(useTheme(), configuratorState.navbarTransparent, light);

  const [text, setText] = useState<string>('');

  useEffect(() => {
    setText(editMode ? 'Выключить режим редактирования' : 'Включить режим редактирования');
  }, [editMode]);

  const handleToggle = useCallback(() => setEditMode(! editMode), [editMode, setEditMode]);


  return (
    <Box onClick={handleToggle}>
      <Tooltip title={text}>
        <IconButton
          disableRipple
          color = {editMode ? 'primary' : 'inherit'}
          sx    = {sx.button}
        >
          <AutoFixHighIcon sx={sx.icon} />
        </IconButton>
      </Tooltip>
    </Box>
  )
});
