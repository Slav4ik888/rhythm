import { FC, memo, useCallback } from 'react';
import DrawerStyled from './styled-paper';
import { ConfiguratorMainHeader as MainHeader } from 'shared/ui/configurators-components';
import { useDashboardView, ItemStylesField } from 'entities/dashboard-view';
import { Dimensions } from './dimensions';
import { Indents } from './indents';
import { Borders } from './borders';
import { Colors } from './colors';
import { Box } from '@mui/material';
import { f } from 'app/styles';
import { CardId } from './id';
import { Alignment } from './alignment';
import { DangerZone } from './danger-zone';
import { CustomTheme } from 'app/providers/theme';



interface Props {
  onSaveIfChanges: () => void
}

export const CardItemConfigurator: FC<Props> = memo(({ onSaveIfChanges }) => {
  const { editMode, selectedId, entities, storedStyles, setEditMode, changeOneStyleField } = useDashboardView();

  /** Сохраняем изменения стилей элементов в store */
  const handleChange = useCallback((field: ItemStylesField, value: number | string) => {
    if (entities[selectedId]?.styles?.[field] !== value && selectedId)
      changeOneStyleField({ selectedId, field, value });
  }, [selectedId, entities, changeOneStyleField]);


  /** Сохраняем изменения при закрытии Конфигуратора */
  const handleSaveChanges = useCallback(() => {
    setEditMode(false);
    onSaveIfChanges();
  }, [selectedId, storedStyles, entities]);


  return (
    // @ts-ignore
    <DrawerStyled
      anchor     = 'right'
      variant    = 'permanent'
      // @ts-ignore
      ownerState = {{ editMode }}
    >
      <MainHeader onClose={handleSaveChanges} />
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
