import { FC, memo, useCallback, useMemo } from 'react';
import { Template, useDashboardTemplates } from 'entities/dashboard-templates';
import { DeleteButton } from 'shared/ui/buttons/delete-button';
import { useTheme, CustomTheme } from 'app/providers/theme';
import { UnsavedChangesComponent } from 'shared/ui/configurators-components';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { isNotEmpty } from 'shared/helpers/objects';
import { pxToRem } from 'shared/styles';



export const UnsavedChanges: FC = memo(() => {
  const {
    loading, selectedViewItem, selectedTemplate, isUnsaved, cancelUpdateTemplate, serviceUpdateTemplate
  } = useDashboardTemplates();


  const handleCancel = useCallback(() => {
    cancelUpdateTemplate()
  }, [cancelUpdateTemplate]);


  const handleSubmit = useCallback(() => {
    if (! selectedTemplate) return;

    serviceUpdateTemplate({
      bunchUpdatedMs : Date.now(),
      template       : selectedTemplate,
      bunchAction    : 'update',
      fullSet        : true
    });
  }, [selectedTemplate, serviceUpdateTemplate]);



  if (! isUnsaved) return null;


  return (
    <UnsavedChangesComponent
      loading  = {loading}
      sx       = {{ root: { top: pxToRem(7), right: pxToRem(5) } }}
      onClick  = {handleSubmit}
      onCancel = {handleCancel}
    />
  )
});
