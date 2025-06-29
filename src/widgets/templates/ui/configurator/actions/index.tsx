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
    const updatedTemplate: Template = {
      ...selectedTemplate,
      condition: Condition.ACTIVE
    };

    serviceUpdateTemplate({
      bunchUpdatedMs : Date.now(),
      template       : updatedTemplate,
      bunchAction    : selectedTemplate.condition === Condition.DRAFT ? 'create' : 'update'
    });
  }, [selectedTemplate, serviceUpdateTemplate]);


  return (
    <Actions
      hideIfNotChanges
      loading   = {loading}
      isChanges = {selectedTemplate.condition === Condition.DRAFT}
      onCancel  = {handleCancel}
      onSubmit  = {handleSubmit}
    />
  )
});
