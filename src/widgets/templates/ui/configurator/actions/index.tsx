import { FC, memo, useCallback } from 'react';
import { Template, useDashboardTemplates } from 'entities/dashboard-templates';
import { Condition } from 'entities/base';
import { Actions } from 'shared/ui/buttons';



/** Конфигуратор шаблонов */
export const TemplatesConfiguratorActions: FC = memo(() => {
  const { loading, selectedTemplate, serviceUpdateTemplate } = useDashboardTemplates();


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
    <Actions
      hideIfNotChanges
      loading   = {loading}
      isChanges // {}  TODO: check if changes
      onCancel  = {handleCancel}
      onSubmit  = {handleSubmit}
    />
  )
});
