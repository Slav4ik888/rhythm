import { FC, memo, useCallback, useEffect } from 'react';
import DrawerStyled from './styled-paper';
import { ConfiguratorMainHeader as MainHeader } from 'shared/ui/configurators-components';
import { useDashboardView, ItemStylesField, CardItem } from 'entities/dashboard-view';
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
import { getChanges, isEmpty } from 'shared/helpers/objects';
import { useCompany } from 'entities/company';



export const CardItemConfigurator: FC = memo(() => {
  const { companyId } = useCompany();
  const { editMode, selectedId, entities, prevStoredCard, setSelectedId, setEditMode, changeOneStyleField, serviceUpdateCardItem } = useDashboardView();

  /** Сохраняем изменившиеся поля | стили */
  useEffect(() => {
    const prevId = (prevStoredCard as CardItem)?.id; // Так как selectedId это уже нововыбранный
    if (! prevId) return // Например, выбрали первый раз или удалили карточку

    const changedFields = getChanges(prevStoredCard, entities?.[prevId]);
    
    if (isEmpty(changedFields)) return
    const cardItem = {
      id: prevId,
      ...changedFields
    };

    serviceUpdateCardItem({ companyId, cardItem });
  }, [selectedId]);


  /** Сохраняем изменения стилей элементов в store */
  const handleChange = useCallback((field: ItemStylesField, value: number | string) => {
    if (entities[selectedId]?.styles?.[field] !== value && selectedId)
      changeOneStyleField({ selectedId, field, value });
  }, [selectedId, entities, changeOneStyleField]);


  /** Сохраняем изменения при закрытии Конфигуратора */
  const handleCloseAndSave = useCallback(() => {
    setEditMode(false);
    setSelectedId(''); // Убираем, чтобы prevStoredCard обновился и произошло сохранение
  }, [selectedId, entities, setEditMode]);


  return (
    // @ts-ignore
    <DrawerStyled
      anchor     = 'right'
      variant    = 'permanent'
      // @ts-ignore
      ownerState = {{ editMode }}
    >
      <MainHeader onClose={handleCloseAndSave} />
      {
        ! selectedId && <Box sx={(theme) => ({ ...f('-c-c'), mt: 8, color: (theme as CustomTheme).palette.error.main })}>
          Выберите элемент для редактирования
        </Box>
      }

      <CardId />
      {/* DisplayShow - показать/скрыть элемент, "скрытый" - показывается только в режиме редактирования */}
      <Alignment onChange={handleChange} />
      <Dimensions onChange={handleChange} />
      <Indents />
      <Borders onChange={handleChange} />
      <Colors onChange={handleChange} />

      {/* <SubHeader title='Текст'/> */}
      {/* font-size */}
      {/* font-weight */}
      {/* font-style */}
      {/* font-family */}

      {/* <SubHeader title='Управление'/> */}
      
      <DangerZone />
    </DrawerStyled>
  )
});
