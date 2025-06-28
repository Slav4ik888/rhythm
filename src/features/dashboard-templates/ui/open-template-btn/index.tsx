import { FC, memo, useCallback } from 'react';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { Tooltip } from 'shared/ui/tooltip';
import { MDButton } from 'shared/ui/mui-design-components';
import SourceIcon from '@mui/icons-material/Source';
import { pxToRem } from 'shared/styles';
import { brown } from '@mui/material/colors';
import { useDashboardTemplates } from 'entities/dashboard-templates';



/** Кнопка открытия окна с шаблонами */
export const OpenTemplatesBtn: FC = memo(() => {
  console.log('OpenTemplatesBtn');
  const { opened, setOpened } = useDashboardTemplates();

  const handleClick = useCallback(() => {
    console.log('handleClick');
    setOpened({ opened: ! opened });
  }, [opened, setOpened]);


  return (
    <Tooltip title='Добавить новый элемент из шаблона'>
      <MDButton
        variant   = 'outlined'
        color     = 'dark'
        sx        = {{ root: { color: brown[600], fontSize: '0.7rem' } }}
        startIcon = {<SourceIcon sx={{ color: brown[600], fontSize: pxToRem(20) }} />}
        onClick   = {handleClick}
      >
        Templates
      </MDButton>
    </Tooltip>
  )
});
