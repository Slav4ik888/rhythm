import { FC, memo } from 'react';
import { SelectValue } from 'shared/ui/configurators-components';
import { BorderStyleType, ItemStylesField, arrayBorderStyles, CardItemId, useDashboardView } from 'entities/dashboard-view';



interface Props {
  cardItemId : CardItemId
  onChange   : (field: ItemStylesField, value: number | string) => void
}

export const BorderStyle: FC<Props> = memo(({ cardItemId, onChange }) => {
  const { styleValueByField } = useDashboardView({ cardItemId, field: 'borderStyle' });

  const handleSelectedStyle = (selected: BorderStyleType) => {
    onChange('borderStyle', selected);
  };


  return (
    <SelectValue
      selectedValue = {styleValueByField as string || 'none'} // selectedStyle}
      array         = {arrayBorderStyles}
      sx            = {{ root: { width: '80px', mr: 1 }}}
      // @ts-ignore
      onSelect      = {handleSelectedStyle}
    />
  )
});
