import { FC, memo, useCallback } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ViewItemStylesField, ViewItem } from 'entities/dashboard-view';
import { ColorPicker } from 'shared/lib/colors-picker';



interface Props {
  selectedItem : ViewItem | undefined
  onChange     : (field: ViewItemStylesField, value: number | string) => void
}

/** color */
export const SetColor: FC<Props> = memo(({ selectedItem, onChange }) => {
  const handleColor = useCallback((value: string) => onChange('color', value), [onChange]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle
        bold
        title     = 'color'
        toolTitle = 'color'
      />
      <ColorPicker
        defaultColor = {selectedItem?.styles?.color}
        onChange     = {handleColor}
      />
    </RowWrapper>
  )
});
