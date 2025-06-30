import { FC, memo, useCallback } from 'react';
import { useDashboardTemplates } from 'entities/dashboard-templates';
import Box from '@mui/material/Box';
import { f, pxToRem } from 'shared/styles';
import { RowWrapperTitle } from 'shared/ui/configurators-components';
import { TemplatesConfiguratorActions as Actions } from './actions';
import { Tooltip } from 'shared/ui/tooltip';



const styleAtom = {
  borderRadius : '4px',
  border       : '1px solid #b0b0b0',
  cursor       : 'default',
  my           : 1,
  p            : 1
};


/** Конфигуратор шаблонов */
export const TemplatesConfigurator: FC = memo(() => {
  const { selectedId, selectedTemplate, selectedViewItem, activateMainViewItem } = useDashboardTemplates();

  console.log('selectedId: ', selectedId);

  const handleClick = useCallback(() => {
    activateMainViewItem();
  }, [activateMainViewItem]);


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
        <Tooltip
          title = 'Нажмите, чтобы выделить корневой элемент'
        >
          <Box
            onClick = {handleClick}
            sx      = {{ ...styleAtom, cursor: 'pointer' }}
          >
            {selectedTemplate?.id}
          </Box>
        </Tooltip>
      </RowWrapperTitle>

      <RowWrapperTitle
        boldTitle
        title     = 'Id элемента'
        toolTitle = 'Id элемента'
      >
        <Box sx={styleAtom}>{selectedId}</Box>
      </RowWrapperTitle>

      <Actions />
    </Box>
  )
});
