import { FC, memo } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ItemStylesField } from 'entities/card-item';
import { ColorPicker } from 'shared/lib/colors-picker';



interface Props {
  defaultValue : number | string | undefined
  onChange     : (field: ItemStylesField, value: number | string) => void
}


/** background */
export const SetBackground: FC<Props> = memo(({ defaultValue = '', onChange }) => {

  const handleBackground = (value: string) => onChange('background', value);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle
        bold
        title     = 'background'
        toolTitle = 'background'
      />
      <ColorPicker
        defaultColor = {defaultValue as string}
        onChange     = {handleBackground}
      />
    </RowWrapper>
  )
});
