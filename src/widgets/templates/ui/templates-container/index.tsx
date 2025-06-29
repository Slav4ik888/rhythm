import { FC, memo, useCallback } from 'react';
import { useDashboardTemplates } from 'entities/dashboard-templates';
import Box from '@mui/material/Box';
import { TemplateItemContainer } from './template-item';
import { f } from 'shared/styles';
import { CustomTheme } from 'app/providers/theme';



/** Контейнер с шаблонами */
export const TemplatesContainer: FC = memo(() => {
  const { templates, setSelectedId } = useDashboardTemplates();


  const handleClick = useCallback((id: string) => {
    setSelectedId(id);
  }, [setSelectedId]);


  return (
    <Box
      sx={(theme) => ({
        ...f('c'),
        width     : '100%',
        overflowX : 'scroll',
        background : (theme as CustomTheme).palette.background.paperLight,
        mr        : 2
      })}
    >
      {
        templates.map((template) => (
          <TemplateItemContainer
            key      = {template.id}
            template = {template}
            onClick  = {handleClick}
          />
        ))
      }
    </Box>
  )
});
