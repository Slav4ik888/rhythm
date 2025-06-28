import { FC, memo, useMemo, useCallback } from 'react';
import { getParents, useDashboardView } from 'entities/dashboard-view';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { Template, useDashboardTemplates } from 'entities/dashboard-templates';
import Box from '@mui/material/Box';
import { DashboardRender } from 'widgets/dashboard-render';
import { pxToRem } from 'shared/styles';


interface Props {
  template: Template
}

/** Контейнер с 1м шаблоном */
export const TemplateItemContainer: FC<Props> = memo(({ template }) => {
  console.log('TemplateItemContainer: ', template.id);
  // const { selectedId, templates, setOpened } = useDashboardTemplates();
  const parents = useMemo(() => getParents(Object.values(template.viewItems)), [template]);

  const handleSelectViewItem = useCallback((id: string) => {
    console.log('id: ', id);
  }, []);


  return (
    <Box
      sx={{
        width        : 'max-content',
        border       : '1px double #b0b0b0',
        borderRadius : pxToRem(4),
        mb           : 2,
        p            : 2
      }}
    >
      <DashboardRender
        parents  = {parents}
        parentId = {template.id}
        onSelect = {handleSelectViewItem}
      />
    </Box>
  )
});
