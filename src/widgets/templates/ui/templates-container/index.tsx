import { memo, useEffect } from 'react';
import { useDashboardTemplates } from 'entities/dashboard-templates';
import { useValue } from 'shared/lib/hooks';
import { TemplatesContainerAsync as TemplatesContainer } from './container.async';



/** Окно с шаблонами */
export const DashboardTemplates = memo(() => {
  console.log('DashboardTemplates');
  const { opened } = useDashboardTemplates();
  const hookOpen = useValue();

  useEffect(() => {
    console.log('DashboardTemplates useEffect', opened);
    hookOpen.setOpen(opened);
  }, [opened, hookOpen]);


  if (! opened) return null

  return (
    <TemplatesContainer hookOpen = {hookOpen} />
  )
});
