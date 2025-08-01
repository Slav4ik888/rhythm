import { FC, memo, useCallback } from 'react';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { useDashboardTemplates } from 'entities/dashboard-templates';
import { DialogInfo } from 'shared/ui/dialogs';
import { UseBase } from 'shared/lib/hooks';
import { TemplatesConfigurator } from '../configurator';
import { TemplatesContainer } from '../templates-container';
import { f } from 'shared/styles';


interface Props {
  hookOpen: UseBase
}

/** Открытое окно с шаблонами */
const TemplatesDialog: FC<Props> = memo(({ hookOpen }) => {
  const { setOpened } = useDashboardTemplates();

  const handleClose = useCallback(() => {
    hookOpen.setOpen(false);
    setOpened(false);
  },
    [hookOpen, setOpened]
  );


  return (
    <DialogInfo
      title    = 'Шаблоны'
      maxWidth = {false}
      hookOpen = {hookOpen}
      onClose  = {handleClose}
      sx       = {{ content: { ...f(), minHeight: 'calc(100vh - 126px)', p: 2 } }}
    >
      <TemplatesContainer />

      <TemplatesConfigurator />
    </DialogInfo>
  )
});

export default TemplatesDialog;
