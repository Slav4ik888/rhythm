import { FC, memo } from 'react';
import { ItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { ChangeStyleItem, ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';



interface Props {
  onChange: (field: ItemStylesField, value: number | string) => void
}

/** Set fontSize */
export const FontSizeRow: FC<Props> = memo(({ onChange }) => {
  const { styleValueByField } = useDashboardView({ field: 'fontSize' });

  return (
    <RowWrapper>
      <ConfiguratorTextTitle title='font-size' toolTitle='font-size' bold />

      <ChangeStyleItem
        value      = {styleValueByField as number}
        field      = 'fontSize'
        width      = '5rem'
        onCallback = {onChange}
        onSubmit   = {onChange}
      />
    </RowWrapper>
  )
});
