import { FC, memo, useCallback } from 'react';
import { useDashboardTemplates } from 'entities/dashboard-templates';
import Box from '@mui/material/Box';
import { f, pxToRem } from 'shared/styles';
import { RowWrapperTitle } from 'shared/ui/configurators-components';
import { TemplatesConfiguratorActions as Actions } from './actions';
import { Tooltip } from 'shared/ui/tooltip';
import { UnsavedChanges } from './unsaved';
import { DeleteBtn } from './delete-btn';



const styleAtom = {
  borderRadius : '4px',
  border       : '1px solid #b0b0b0',
  cursor       : 'default',
  fontSize     : '0.8rem',
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
        ...f('c--sb'),
        position     : 'relative',
        minWidth     : pxToRem(460),
        border       : '1px solid  #b0b0b0',
        borderRadius : pxToRem(4),
        p            : 2,
        pt           : 3
      }}
    >
      <UnsavedChanges />

      <Box sx={{ ...f('c'), height: '100%', color: 'text.main', overflowY: 'auto' }}>
        <RowWrapperTitle
          boldTitle
          title     = 'Id шаблона'
          toolTitle = 'Id шаблона'
        >
          <Box sx={{ ...f('-c'), gap: 1 }}>
            <Tooltip title = 'Нажмите, чтобы выделить корневой элемент'>
              <Box
                onClick = {handleClick}
                sx      = {{ ...styleAtom, cursor: 'pointer' }}
              >
                {selectedTemplate?.id}
              </Box>
            </Tooltip>
            {selectedId && <DeleteBtn type='template' />}
          </Box>
        </RowWrapperTitle>

        <RowWrapperTitle
          boldTitle
          title     = 'Id элемента'
          toolTitle = 'Id элемента'
        >
          <Box sx={{ ...f('-c'), gap: 1 }}>
            <Box sx={styleAtom}>{selectedId}</Box>
            {selectedId && <DeleteBtn type='viewItem' />}
          </Box>
        </RowWrapperTitle>
      </Box>

      <Actions />
    </Box>
  )
});
