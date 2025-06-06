import { FC, memo, useEffect, useState, useCallback } from 'react';
import { Box, IconButton } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useDashboardView } from 'entities/dashboard-view';
import { Tooltip } from 'shared/ui/tooltip';
import { useCompany } from 'entities/company';
import { SxNavbarIcon } from 'widgets/navbar';



interface Props {
  sx: SxNavbarIcon
}

export const DashboardSetEditBtn: FC<Props> = memo(({ sx }) => {
  const { editMode, setEditMode } = useDashboardView();
  const { companyId } = useCompany();
  const [text, setText] = useState<string>('');

  useEffect(() => {
    setText(editMode ? 'Выключить режим редактирования' : 'Включить режим редактирования');
  }, [editMode]);

  const handleToggle = useCallback(() => setEditMode({ editMode: ! editMode, companyId }), [editMode, setEditMode]);


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
