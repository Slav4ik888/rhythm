import { FC, memo, useCallback, useEffect } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { useDashboardTemplates } from 'entities/dashboard-templates';
import { DialogInfo } from 'shared/ui/dialogs';
import { UseBase, useValue } from 'shared/lib/hooks';
import Box from '@mui/material/Box';


interface Props {
  hookOpen: UseBase
}

/** Окно с шаблонами */
const TemplatesContainer: FC<Props> = memo(({ hookOpen }) => {
  console.log('TemplatesContainer (async)');
  const { selectedId, templates, setOpened } = useDashboardTemplates();

  console.log('selectedId: ', selectedId);


  const handleClose = useCallback(() => {
    console.log('handleClose');
    hookOpen.setOpen(false);
    setOpened({ opened: false });
  }, [hookOpen, setOpened]);


  return (
    <DialogInfo
      title    = 'Шаблоны'
      maxWidth = {false}
      hookOpen = {hookOpen}
      onClose  = {handleClose}
      sx       = {{ content: { height: 'calc(100vh - 126px)' } }}
    >
      {templates.map((template) => (
        <Box key={template.id} sx={{ my: 2 }}>
          {template.id}
        </Box>
      ))}
    </DialogInfo>
  )
});

export default TemplatesContainer;
