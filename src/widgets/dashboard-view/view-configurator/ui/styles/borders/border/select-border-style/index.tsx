import { FC, memo, useCallback } from 'react';
import { SelectValue } from 'shared/ui/configurators-components';
import { BorderStyleType, ViewItemStylesField, arrayBorderStyles, ViewItem } from 'entities/dashboard-view';



interface Props {
  selectedItem : ViewItem | undefined
  onChange: (field: ViewItemStylesField, value: number | string) => void
}

export const SelectBorderStyle: FC<Props> = memo(({ selectedItem, onChange }) => {
  const handleSelectedStyle = useCallback((selected: BorderStyleType) => onChange('borderStyle', selected), [onChange]);


  return (
    <SelectValue
      selectedValue = {selectedItem?.styles?.borderStyle || 'none'}
      array         = {arrayBorderStyles}
      sx            = {{ root: { width: '80px', mr: 1 }}}
      // @ts-ignore
      onSelect      = {handleSelectedStyle}
    />
  )
});
