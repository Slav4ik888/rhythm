import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { CardItemId, ItemStylesField } from 'entities/card-item';
import { SetBackground } from './set-background';
import { SetColor } from './set-color';



export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none';


interface Props {
  cardItemId: CardItemId
  onChange : (field: ItemStylesField, value: number | string) => void
}

/** Цвет */
export const Colors: FC<Props> = memo(({ cardItemId, onChange }) => {

  return (
    <SubHeader title='Цвет'>
      <SetColor
        cardItemId = {cardItemId}
        onChange   = {onChange}
      />
      <SetBackground
        cardItemId = {cardItemId}
        onChange   = {onChange}
      />
      {/* opacity */}
    </SubHeader>
  )
});
