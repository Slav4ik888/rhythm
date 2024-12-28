import { FC, memo } from 'react';
import { ChangeStyleItem, ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ItemStylesField, useDashboardView } from 'entities/dashboard-view';



interface Props {
  onChange: (field: ItemStylesField, value: number | string) => void
}

/** border-radius */
export const BorderRadius: FC<Props> = memo(({ onChange }) => {
  const { styleValueByField } = useDashboardView({ field: 'borderRadius' });
  
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
