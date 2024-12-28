import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ItemStylesField } from 'entities/dashboard-view';
import { SetBackground } from './set-background';
import { SetColor } from './set-color';



export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none';


interface Props {
  onChange: (field: ItemStylesField, value: number | string) => void
}

/** Цвет */
export const Colors: FC<Props> = memo(({ onChange }) => {

  return (
    <SubHeader title='Цвет'>
      <SetColor onChange={onChange} />
      <SetBackground onChange={onChange} />
      {/* opacity */}
    </SubHeader>
  )
});
