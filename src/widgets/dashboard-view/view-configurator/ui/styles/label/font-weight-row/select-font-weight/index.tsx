import { FC, memo, useCallback } from 'react';
import { SelectValue } from 'shared/ui/configurators-components';
import { FontWeightType, ViewItemStylesField, arrayFontWeights, useDashboardView, ViewItem } from 'entities/dashboard-view';



interface Props {
  selectedItem : ViewItem | undefined
  onChange     : (field: ViewItemStylesField, value: number | string) => void
}

export const SelectFontWeight: FC<Props> = memo(({ selectedItem, onChange }) => {
  const handleSelectedStyle = useCallback((selected: FontWeightType) => onChange('fontWeight', selected), [onChange]);


  return (
    <SelectValue
      selectedValue = {selectedItem?.styles?.fontWeight as unknown as FontWeightType || 'default'}
      array         = {arrayFontWeights}
      sx            = {{ root: { width: '100px' }}}
      // @ts-ignore
      onSelect      = {handleSelectedStyle}
    />
  )
});
