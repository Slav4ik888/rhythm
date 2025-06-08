import { FC, memo, useCallback } from 'react';
import { SelectValue } from 'shared/ui/configurators-components';
import { FontStyleType, ViewItemStylesField, arrayFontStyles, ViewItem } from 'entities/dashboard-view';



interface Props {
  selectedItem : ViewItem | undefined
  onChange     : (field: ViewItemStylesField, value: number | string) => void
}

export const SelectFontStyle: FC<Props> = memo(({ selectedItem, onChange }) => {
  const handleSelectedStyle = useCallback((selected: FontStyleType) => onChange('fontStyle', selected), [onChange]);


  return (
    <SelectValue
      selectedValue = {selectedItem?.styles?.fontStyle || 'default'}
      array         = {arrayFontStyles}
      sx            = {{ root: { width: '100px' } }}
      // @ts-ignore
      onSelect      = {handleSelectedStyle}
    />
  )
});
