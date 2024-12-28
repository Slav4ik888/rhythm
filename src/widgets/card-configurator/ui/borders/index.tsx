import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { Border } from './border';
import { BorderRadius } from './border-radius';
import { BoxShadow } from './box-shadow';



export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none';


interface Props {
  onChange: (field: ItemStylesField, value: number | string) => void
}


/** Рамки */
export const Borders: FC<Props> = memo(({ onChange }) => {
  const { stylesByCardItemId: styles } = useDashboardView();

  return (
    <SubHeader title='Рамка'>
      <Border
        borderColor = {styles.borderColor}
        onChange    = {onChange}
      />
      <BorderRadius onChange={onChange} />
      <BoxShadow onChange={onChange} />
    </SubHeader>
  )
});
