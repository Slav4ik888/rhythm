import { FC, memo, useMemo } from 'react';
import { ViewItem } from 'entities/dashboard-view';
import Icon from '@mui/material/Icon';
import { isStr } from 'shared/lib/validators';
import { getIconById } from 'shared/lib/icons';



interface Props {
  item        : ViewItem
  isTemplate? : boolean // если рендерится шаблон
}

/** Item Icon */
export const ItemIcon: FC<Props> = memo(({ item, isTemplate }) => {
  const IconComponent = useMemo(() => getIconById(item.settings?.iconId),
    [item]
  );

  return (
    <>
      {
        isStr(IconComponent)
          ? <Icon>{IconComponent as string}</Icon>
          : <IconComponent />
      }
    </>
  )
});
