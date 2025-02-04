import { FC, memo } from 'react';
import { SelectValue } from 'shared/ui/configurators-components';
import { FontWeightType, ViewItemStylesField, arrayFontWeights, useDashboardView } from 'entities/dashboard-view';



interface Props {
  onChange: (field: ViewItemStylesField, value: number | string) => void
}

export const SelectFontWeight: FC<Props> = memo(({ onChange }) => {
  const { styleValueByField } = useDashboardView({ field: 'fontWeight' });

  const handleSelectedStyle = (selected: FontWeightType) => onChange('fontWeight', selected);


  return (
    <SelectValue
      selectedValue = {styleValueByField as string || 'default'}
      array         = {arrayFontWeights}
      sx            = {{ root: { width: '100px' }}}
      // @ts-ignore
      onSelect      = {handleSelectedStyle}
    />
  )
});
