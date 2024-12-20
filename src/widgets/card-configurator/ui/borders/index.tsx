import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ItemStyles, ItemStylesField } from 'entities/card-item';
import { Border } from './border';
import { BorderRadius } from './border-radius';
import { BoxShadow } from './box-shadow';



export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none';


interface Props {
  styles   : ItemStyles
  onChange : (field: ItemStylesField, value: number | string) => void
}


/** Рамки */
export const Borders: FC<Props> = memo(({ styles, onChange }) => {
  return (
    <SubHeader title='Рамка'>
      <Border
        borderStyle = {styles.borderStyle}
        borderWidth = {styles.borderWidth}
        borderColor = {styles.borderColor}
        onChange    = {onChange}
      />
      <BorderRadius
        defaultValue = {styles.borderRadius}
        onChange     = {onChange}
      />
      
      <BoxShadow
        defaultValue = {styles.boxShadow}
        onChange     = {onChange}
      />
    </SubHeader>
  )
});
