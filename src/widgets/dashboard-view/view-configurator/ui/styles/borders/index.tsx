import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ViewItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { BorderRow } from './border';
import { BorderRadiusRow } from './border-radius';
import { BoxShadowRow } from './box-shadow';



interface Props {
  onChange: (field: ViewItemStylesField, value: number | string) => void
}


/** Рамки */
export const Borders: FC<Props> = memo(({ onChange }) => {
  const { stylesByViewItemId: styles } = useDashboardView();

  return (
    <SubHeader title='Рамка'>
      <BorderRow
        borderColor = {styles.borderColor}
        onChange    = {onChange}
      />
      <BorderRadiusRow />
      <BoxShadowRow onChange={onChange} />
    </SubHeader>
  )
});
