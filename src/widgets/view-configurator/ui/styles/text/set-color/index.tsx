import { FC, memo, useCallback } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ViewItemStylesField, ViewItem } from 'entities/dashboard-view';
import { ColorPicker } from 'shared/lib/colors-picker';



interface Props {
  field        : ViewItemStylesField
  selectedItem : ViewItem | undefined
  onChange     : (field: ViewItemStylesField, value: number | string, funcName: string) => void
}

/** color */
export const SetColor: FC<Props> = memo(({ field, selectedItem, onChange }) => {
  const handleColor = useCallback((value: string) => onChange(field, value, 'SetColor'),
    [field, onChange]
  );


  return (
    <RowWrapper>
      <ConfiguratorTextTitle
        bold
        title     = {field}
        toolTitle = 'color'
      />
      <ColorPicker
        defaultColor = {selectedItem?.styles?.[field] as string || ''}
        onChange     = {handleColor}
      />
    </RowWrapper>
  )
});
