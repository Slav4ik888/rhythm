import { FC, memo, useCallback } from 'react';
import { useDashboardTemplates } from 'entities/dashboard-templates';
import Box from '@mui/material/Box';
import { TemplateItemContainer } from './template-item';
import { f } from 'shared/styles';



/** Контейнер с шаблонами */
export const TemplatesContainer: FC = memo(() => {
  console.log('TemplatesContainer');
  const { templates } = useDashboardTemplates();


  const handleClose = useCallback(() => {


  }, []);


  return (
    <Box sx={{ ...f('c'), mr: 2 }}>
      {templates.map((template) => (
        <TemplateItemContainer
          key      = {template.id}
          template = {template}
        />
      ))}
    </Box>
  )
});
