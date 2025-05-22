import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView, PartialViewItem, ViewItem } from 'entities/dashboard-view';
import { SelectValue } from 'shared/ui/configurators-components/select';
import { getValueByScheme, setValueByScheme } from 'shared/helpers/objects';



interface Props {
  selectedItem : ViewItem | undefined
  scheme       : string
  array        : string[] | any[] // any if component present
  component?   : FC<any> // Если нужен не стандартный компонент вместо item
}

/** Выбор ByField */
export const SelectByField: FC<Props> = memo(({ selectedItem, scheme, array, component }) => {
  const { updateViewItem } = useDashboardView();
  const [selectedValue, setSelectedValue] = useState(getValueByScheme(selectedItem, scheme) || '');

  useEffect(() => {
    setSelectedValue(getValueByScheme(selectedItem, scheme) || '');
  }, [selectedItem, scheme, setSelectedValue]);

  const handleUpdate = useCallback((v: string | number) => {
    if (! selectedItem) return;

    const result: PartialViewItem = {
      id: selectedItem.id
    };

    setValueByScheme(result, scheme, v);
    updateViewItem(result);
  }, [selectedItem, scheme, updateViewItem]);


  return (
    <SelectValue
      selectedValue = {selectedValue}
      array         = {array}
      component     = {component}
      onSelect      = {handleUpdate}
    />
  )
});
