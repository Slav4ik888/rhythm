import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView, PartialCardItem } from 'entities/dashboard-view';
import { SelectValue } from 'shared/ui/configurators-components/select';
import { getValueByScheme, setValueByScheme } from 'shared/helpers/objects';



interface Props {
  scheme     : string
  array      : string[] | any[] // any if component present
  component? : FC<any> // Если нужен не стандартный компонент вместо item
}

/** Выбор ByField */
export const SelectByField: FC<Props> = memo(({ scheme, array, component }) => {
  const { selectedItem, updateCardItem } = useDashboardView();
  const [selectedValue, setSelectedValue] = useState(getValueByScheme(selectedItem, scheme) || '');

  useEffect(() => {
    setSelectedValue(getValueByScheme(selectedItem, scheme) || '')
  }, [selectedItem, scheme]);

  const handleUpdate = useCallback((v: string | number) => {
    const result: PartialCardItem = {
      id: selectedItem.id
    };

    setValueByScheme(result, scheme, v);
    updateCardItem(result);
  }, [selectedItem, scheme, updateCardItem]);


  return (
    <SelectValue
      selectedValue = {selectedValue}
      array         = {array}
      component     = {component}
      onSelect      = {handleUpdate}
    />
  )
});
