import { FC, memo } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ItemStylesField } from 'entities/card-item';
import { ColorPicker } from 'shared/lib/colors-picker';



interface Props {
  defaultValue : number | string | undefined
  onChange     : (field: ItemStylesField, value: number | string) => void
}

/** color */
export const SetColor: FC<Props> = memo(({ defaultValue = '', onChange }) => {

  const handleColor= (value: string) => onChange('color', value);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle
        bold
        title     = 'color'
        toolTitle = 'color'
      />
      <ColorPicker
        defaultColor = {defaultValue as string}
        onChange     = {handleColor}
      />
    </RowWrapper>
  )
});
