import { FC, memo, useEffect, useState, useCallback } from 'react';
import { Box, IconButton } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useDashboard } from 'entities/dashboard';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomTheme, pxToRem, useTheme } from 'app/providers/theme';
import { f } from 'app/styles';



const useStyles = (theme: CustomTheme, editMode: boolean) => ({
  root: {
    ...f('-c-c'),
    position     : 'fixed',
    right        : pxToRem(30),
    bottom       : pxToRem(30),
    borderRadius : '50%',
    background   : '#dedede',
  },
  button: {
    width        : pxToRem(70),
    height       : pxToRem(70),
  },
  icon: {
    color: editMode
      ? theme.palette.primary.main
      : theme.palette.dark.main,
    fontSize: '1.5rem',
  }
});


export const DashboardSetEditBtn = memo(() => {
  const { editMode, setEditMode } = useDashboard();
  const sx = useStyles(useTheme(), editMode);

  const [text, setText] = useState<string>('');

  console.log('editMode: ', editMode);

  useEffect(() => {
    setText(editMode ? 'Выключить режим редактирования' : 'Включить режим редактирования');
  }, [editMode]);

  const handleToggle = useCallback(() => setEditMode(! editMode), [editMode, setEditMode]);


  return (
    <Box
      sx      = {sx.root}
      onClick = {handleToggle}
    >
      <Tooltip title={text}>
        <IconButton
          color = {editMode ? 'primary' : 'inherit'}
          sx    = {sx.button}
        >
          <AutoFixHighIcon sx={sx.icon} />
        </IconButton>
      </Tooltip>
    </Box>
  )
});
