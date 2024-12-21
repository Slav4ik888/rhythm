import { FC, memo } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { CardItemId, ItemStylesField } from 'entities/card-item';
import { ColorPicker } from 'shared/lib/colors-picker';
import { useDashboard } from 'entities/dashboard';



interface Props {
  cardItemId : CardItemId
  onChange   : (field: ItemStylesField, value: number | string) => void
}

/** color */
export const SetColor: FC<Props> = memo(({ cardItemId, onChange }) => {
  const { styleValueByField } = useDashboard({ cardItemId, field: 'color' });

  const handleColor= (value: string) => onChange('color', value);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle
        bold
        title     = 'color'
        toolTitle = 'color'
      />
      <ColorPicker
        defaultColor = {styleValueByField as string}
        onChange     = {handleColor}
      />
    </RowWrapper>
  )
});
