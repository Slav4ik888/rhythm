import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ItemStyles, ItemStylesField } from 'entities/card-item';
import { SetBackground } from './set-background';
import { SetColor } from './set-color';



export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none';


interface Props {
  styles   : ItemStyles
  onChange : (field: ItemStylesField, value: number | string) => void
}

/** Цвет */
export const Colors: FC<Props> = memo(({ styles, onChange }) => {

  return (
    <SubHeader title='Цвет'>
      <SetColor
        defaultValue = {styles.color}
        onChange     = {onChange}
      />
      <SetBackground
        defaultValue = {styles.background}
        onChange     = {onChange}
      />
      {/* opacity */}
    </SubHeader>
  )
});
