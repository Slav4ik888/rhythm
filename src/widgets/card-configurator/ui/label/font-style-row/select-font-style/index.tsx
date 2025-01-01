import { FC, memo } from 'react';
import { SelectValue } from 'shared/ui/configurators-components';
import { FontStyleType, ItemStylesField, arrayFontStyles, useDashboardView } from 'entities/dashboard-view';



interface Props {
  onChange: (field: ItemStylesField, value: number | string) => void
}

export const SelectFontStyle: FC<Props> = memo(({ onChange }) => {
  const { styleValueByField } = useDashboardView({ field: 'fontStyle' });

  const handleSelectedStyle = (selected: FontStyleType) => { onChange('fontStyle', selected) };


  return (
    <SelectValue
      selectedValue = {styleValueByField as FontStyleType || 'default'} // selectedStyle}
      array         = {arrayFontStyles}
      sx            = {{ root: { width: '100px' }}}
      // @ts-ignore
      onSelect      = {handleSelectedStyle}
    />
  )
});
