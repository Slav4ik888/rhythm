import { FC, memo, useCallback } from 'react';
import { useDashboardTemplates } from 'entities/dashboard-templates';
import Box from '@mui/material/Box';
import { f, pxToRem } from 'shared/styles';
import { RowWrapperTitle } from 'shared/ui/configurators-components';
import { Condition } from 'entities/base';
import { Actions } from 'shared/ui/buttons';



const styleAtom = {
  borderRadius : '4px',
  border       : '1px solid #b0b0b0',
  width        : '100%',
  my           : 1,
  p            : 1
};


/** Конфигуратор шаблонов */
export const TemplatesConfigurator: FC = memo(() => {
  const { loading, selectedId, selectedTemplate } = useDashboardTemplates();

  console.log('selectedId: ', selectedId);


  const handleCancel = useCallback(() => {


  }, []);

  const handleSubmit = useCallback(() => {


  }, []);


  return (
    <Box sx={{ ...f('c'), minWidth: pxToRem(300) }}>
      <RowWrapperTitle
        boldTitle
        title     = 'Id шаблона'
        toolTitle = 'Id шаблона'
      >
        <Box sx={styleAtom}>{selectedId}</Box>
      </RowWrapperTitle>

      <RowWrapperTitle
        boldTitle
        title     = 'Condition'
        toolTitle = 'Current condition'
      >
        <Box sx={styleAtom}>{selectedTemplate.condition}</Box>
      </RowWrapperTitle>

      {/* { selectedTemplate.condition === Condition.DRAFT && ( */}
      <Actions
        hideIfNotChanges
        loading   = {loading}
        isChanges = {selectedTemplate.condition === Condition.DRAFT}
        onCancel  = {handleCancel}
        onSubmit  = {handleSubmit}
      />
    </Box>
  )
});
