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



export const CardItemConfigurator = memo(() => {
  const { companyId } = useCompany();
  const { editMode, selectedId, setEditMode, changeSelectedStyle } = useDashboard();

  const handleChange = useCallback((field: ItemStylesField, value: number | string) => {
    changeSelectedStyle({ companyId, selectedId, field, value });
  }, [selectedId, changeSelectedStyle]);


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
        selectedId
          ? <>
              <Dimensions cardItemId={selectedId} onChange={handleChange} />
              <Indents cardItemId={selectedId} />

              {/* <SubHeader title='Выравнивание внутреннего содержимого' /> */}
              {/* display - flex, block, inline ... */}
              {/* flex-direction */}
              {/* flex-wrap */}
              {/* align-items */}
              {/* justify-content */}
              {/* <MDDivider /> */}

              <Borders cardItemId={selectedId} onChange={handleChange} />
              <Colors cardItemId={selectedId} onChange={handleChange} />

              {/* <SubHeader title='Текст'/> */}
              {/* font-size */}
              {/* font-weight */}
              {/* font-style */}
              {/* font-family */}

              {/* <SubHeader title='Управление'/> */}
              {/* DisplayShow - показать/скрыть элемент, "скрытый" - показывается только в режиме редактирования */}
              {/* Добавить новый элемент выше */}
              {/* Добавить новый элемент ниже */}
              {/* Удалить */}
            </>
          : <Box sx={{ ...f('-c-c'), mt: 8 }}>
            Выберите элемент для редактирования
          </Box>
      }
    </DrawerStyled>
  )
});
