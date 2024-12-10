import { FC, memo, useEffect, useState, useCallback } from 'react';
import { IconButton } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useDashboard } from 'entities/dashboard';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { sxNavbarIconButton } from 'shared/lib/styles/navbar';



const useStyles = (theme: CustomTheme, editMode: boolean) => ({
  button : sxNavbarIconButton(theme),
  icon: {
    color: editMode
      ? theme.palette.primary.main
      : theme.palette.dark.main
  }
});


export const DashboardSetEditBtn = memo(() => {
  const { editMode, setEditMode } = useDashboard();
  const sx = useStyles(useTheme(), editMode);

  const [text, setText] = useState<string>('');


  useEffect(() => {
    setText(editMode ? 'Выключить режим редактирования' : 'Включить режим редактирования');
  }, [editMode]);

  const handleToggle = useCallback(() => setEditMode(! editMode), [editMode]);


  return (
    <Tooltip
      title = {text}
    >
      <IconButton
        color   = {editMode ? 'primary' : 'inherit'}
        sx      = {sx.button}
        onClick = {handleToggle}
      >
        <AutoFixHighIcon
          fontSize = 'small'
          sx       = {sx.icon}
        />
      </IconButton>
    </Tooltip>
  )
});
