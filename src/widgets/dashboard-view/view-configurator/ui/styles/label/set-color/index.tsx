import { FC, memo } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ViewItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { ColorPicker } from 'shared/lib/colors-picker';



interface Props {
  onChange: (field: ViewItemStylesField, value: number | string) => void
}

/** color */
export const SetColor: FC<Props> = memo(({ onChange }) => {
  const { styleValueByField } = useDashboardView({ field: 'color' });

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
