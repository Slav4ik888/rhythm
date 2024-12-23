import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { CardItemId, ItemStylesField } from 'entities/card-item';
import { Border } from './border';
import { BorderRadius } from './border-radius';
import { BoxShadow } from './box-shadow';
import { useDashboard } from 'entities/dashboard';



export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none';


interface Props {
  cardItemId : CardItemId
  onChange   : (field: ItemStylesField, value: number | string) => void
}


/** Рамки */
export const Borders: FC<Props> = memo(({ cardItemId, onChange }) => {
  const { stylesByCardItemId: styles } = useDashboard({ cardItemId });

  return (
    <SubHeader title='Рамка'>
      <Border
        cardItemId  = {cardItemId}
        borderColor = {styles.borderColor}
        onChange    = {onChange}
      />
      <BorderRadius
        cardItemId = {cardItemId}
        onChange   = {onChange}
      />
      <BoxShadow
        cardItemId = {cardItemId}
        onChange   = {onChange}
      />
    </SubHeader>
  )
});
