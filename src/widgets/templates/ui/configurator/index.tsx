import { FC, memo } from 'react';
import { useDashboardTemplates } from 'entities/dashboard-templates';
import Box from '@mui/material/Box';
import { f, pxToRem } from 'shared/styles';
import { RowWrapperTitle } from 'shared/ui/configurators-components';
import { TemplatesConfiguratorActions as Actions } from './actions';



const styleAtom = {
  borderRadius : '4px',
  border       : '1px solid #b0b0b0',
  my           : 1,
  p            : 1
};


/** Конфигуратор шаблонов */
export const TemplatesConfigurator: FC = memo(() => {
  const { selectedId, selectedTemplate } = useDashboardTemplates();

  console.log('selectedId: ', selectedId);


  return (
    <Box
      sx={{
        ...f('c'),
        minWidth     : pxToRem(460),
        border       : '1px solid  #b0b0b0',
        borderRadius : pxToRem(4),
        p            : 2
      }}
    >
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
      <Actions />
    </Box>
  )
});
