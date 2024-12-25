import { memo, useCallback } from 'react';
import DrawerStyled from './styled-paper';
import { ConfiguratorMainHeader as MainHeader } from 'shared/ui/configurators-components';
import { ItemStylesField } from 'entities/card-item';
import { useDashboard } from 'entities/dashboard';
import { Dimensions } from './dimensions';
import { useCompany } from 'entities/company';
import { Indents } from './indents';
import { Borders } from './borders';
import { Colors } from './colors';
import { Box } from '@mui/material';
import { f } from 'app/styles';
import { CardId } from './id';
import { Alignment } from './alignment';
import { DangerZone } from './danger-zone';
import { CustomTheme } from 'app/providers/theme';



export const CardItemConfigurator = memo(() => {
  const { companyId } = useCompany();
  const { editMode, selectedId, viewEntities, setEditMode, serviceChangeSelectedStyle } = useDashboard();

  const handleChange = useCallback((field: ItemStylesField, value: number | string) => {
    const styleByField = viewEntities?.[selectedId]?.styles?.[field];

    if (styleByField === value || ! selectedId) return

    serviceChangeSelectedStyle({ companyId, selectedId, field, value });
  }, [selectedId, viewEntities, serviceChangeSelectedStyle]);


  return (
    // @ts-ignore
    <DrawerStyled
      anchor     = 'right'
      variant    = 'permanent'
      // @ts-ignore
      ownerState = {{ editMode }}
    >
      <MainHeader onClose={() => setEditMode(false)} />
      {
        ! selectedId && <Box sx={(theme) => ({ ...f('-c-c'), mt: 8, color: (theme as CustomTheme).palette.error.main })}>
          Выберите элемент для редактирования
        </Box>
      }

      <CardId cardItemId={selectedId} />
      {/* DisplayShow - показать/скрыть элемент, "скрытый" - показывается только в режиме редактирования */}
      <Alignment cardItemId={selectedId} onChange={handleChange} />
      <Dimensions cardItemId={selectedId} onChange={handleChange} />
      <Indents cardItemId={selectedId} />
      <Borders cardItemId={selectedId} onChange={handleChange} />
      <Colors cardItemId={selectedId} onChange={handleChange} />

      {/* <SubHeader title='Текст'/> */}
      {/* font-size */}
      {/* font-weight */}
      {/* font-style */}
      {/* font-family */}

      {/* <SubHeader title='Управление'/> */}
      
      <DangerZone cardItemId={selectedId} />
    </DrawerStyled>
  )
});
