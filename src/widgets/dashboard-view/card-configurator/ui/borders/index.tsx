import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { BorderRow } from './border';
import { BorderRadiusRow } from './border-radius';
import { BoxShadowRow } from './box-shadow';



interface Props {
  onChange: (field: ItemStylesField, value: number | string) => void
}


/** Рамки */
export const Borders: FC<Props> = memo(({ onChange }) => {
  const { stylesByCardItemId: styles } = useDashboardView();

  return (
    <SubHeader title='Рамка'>
      <BorderRow
        borderColor = {styles.borderColor}
        onChange    = {onChange}
      />
      <BorderRadiusRow onChange={onChange} />
      <BoxShadowRow onChange={onChange} />
    </SubHeader>
  )
});
