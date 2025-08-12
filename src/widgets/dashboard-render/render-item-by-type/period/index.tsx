import { FC, memo, useCallback } from 'react';
import { ViewItem, stylesToSx } from 'entities/dashboard-view';
import Box from '@mui/material/Box';
import { f } from 'shared/styles';
import { INDIVIDUAL_PERIOD } from 'entities/charts';
import { PeriodType } from 'entities/dashboard-data';
import { useDashboardViewServices } from 'features/dashboard-view';
import { useCompany } from 'entities/company';
import { getStyles } from './styles';



interface Props {
  item        : ViewItem
  isTemplate? : boolean // если рендерится шаблон
}

/** Item Period */
export const ItemPeriod: FC<Props> = memo(({ item, isTemplate }) => {
  const { paramsCompanyId } = useCompany();
  const { editMode, serviceUpdateViewItems } = useDashboardViewServices();


  const handleClick = useCallback((type: PeriodType) => {
    if (editMode) return // В режиме редактирования не работает переключение

    // TODO: В зависимости от прав пользователя сохранять изменения:
    //  1 - глобально для всех
    //  2 - индивидуально в LS
    //  3 - индивидуально в аккаунт пользователя

    const viewItem = {
      id       : item.id,
      bunchId  : item.bunchId,
      settings : {
        selectedPeriod: type
      }
    };

    serviceUpdateViewItems({
      companyId         : paramsCompanyId,
      viewItems         : [viewItem],
      bunchUpdatedMs    : Date.now(),
    });
  },
    [editMode, item, paramsCompanyId, serviceUpdateViewItems]
  );


  return (
    <>
      {
        // Рендерим через оригинал, тк в БД поля объекта храняться хаотично, а нужно соблюсти последовательность
        Object.keys(INDIVIDUAL_PERIOD).map((keyValue, index) => {
          const value = item.settings?.periods?.[keyValue as keyof typeof INDIVIDUAL_PERIOD];

          if (! value || value.disabled) return null;

          const isActive = item.settings?.selectedPeriod === value.type;

          return (
            <Box
              key     = {index}
              onClick = {() => handleClick(value.type)}
              sx      = {{
                ...(isActive ? getStyles(item.styles) : {}),
                '&:hover': {
                  cursor: 'pointer',
                }
              }}
            >
              {value.title || INDIVIDUAL_PERIOD[value.type]}
            </Box>
          )
        })
      }
    </>
  )
});
