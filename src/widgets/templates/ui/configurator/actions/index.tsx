import { FC, memo, useCallback } from 'react';
import { Template, useDashboardTemplates } from 'entities/dashboard-templates';
import { Actions } from 'shared/ui/buttons';
import { useValue } from 'shared/lib/hooks';
import { f } from 'shared/styles';
import Box from '@mui/material/Box';
import { DeleteBtn } from '../delete-btn';



/** Конфигуратор шаблонов */
export const TemplatesConfiguratorActions: FC = memo(() => {
  const { loading, selectedTemplate, serviceUpdateTemplate } = useDashboardTemplates();
  const hookDelete = useValue();

  const handleCancel = useCallback(() => {

  }, []);

  const handleSubmit = useCallback(() => {

  }, []);

  // const handleSubmit = useCallback(() => {
  //   const updatedTemplate: Template = {
  //     ...selectedTemplate,
  //     condition: Condition.ACTIVE
  //   };

  //   serviceUpdateTemplate({
  //     bunchUpdatedMs : Date.now(),
  //     template       : updatedTemplate,
  //     bunchAction    : 'update'
  //   });
  // }, [selectedTemplate, serviceUpdateTemplate]);


  return (
    <Box sx={{ ...f('c'), gap: 2, mt: 2 }}>
      <Actions
        hideIfNotChanges
        loading   = {loading}
        isChanges // {}  TODO: check if changes
        onCancel  = {handleCancel}
        onSubmit  = {handleSubmit}
      />
    </Box>
  )
});
