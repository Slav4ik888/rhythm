import { memo, useEffect } from 'react';
import { useDashboardTemplates } from 'entities/dashboard-templates';
import { useValue } from 'shared/lib/hooks';
import { TemplatesDialogAsync as TemplatesDialog } from './dialog.async';



/** Шаблоны */
export const DashboardTemplates = memo(() => {
  const { opened } = useDashboardTemplates();
  const hookOpen = useValue();

  useEffect(() => {
    hookOpen.setOpen(opened);
  },
    [opened, hookOpen]
  );


  if (! opened) return null

  return (
    <TemplatesDialog hookOpen = {hookOpen} />
  )
});
