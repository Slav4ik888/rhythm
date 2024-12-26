import { FC, memo } from 'react';
import { ChangeStyleItem, ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { CardItemId, ItemStylesField, useDashboardView } from 'entities/dashboard-view';



interface Props {
  cardItemId : CardItemId
  onChange   : (field: ItemStylesField, value: number | string) => void
}


/** border-radius */
export const BorderRadius: FC<Props> = memo(({ cardItemId, onChange }) => {
  const { styleValueByField } = useDashboardView({ cardItemId, field: 'borderRadius' });
  
  return (
    <RowWrapper>
      <ConfiguratorTextTitle title='border-radius' toolTitle='border-radius' bold />

      <ChangeStyleItem
        value      = {styleValueByField as number}
        field      = 'borderRadius'
        width      = '3rem'
        onCallback = {onChange}
        onSubmit   = {onChange}
      />
    </RowWrapper>
  )
});
