import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView, ViewItem } from 'entities/dashboard-view';
import { SelectValue } from 'shared/ui/configurators-components/select';
import { getValueByScheme } from 'shared/helpers/objects';
import { updater } from '../utils';



interface Props {
  selectedItem : ViewItem | undefined
  scheme       : string
  array        : string[] | any[] // any if component present
  searchBox?   : FC<any> // Если нужен не стандартный поиск in SelectValue
  component?   : FC<any> // Если нужен не стандартный компонент вместо item
  disabled?    : boolean
  onSearch?    : (value: string) => void
}

/** 
 * Выбор ByField и сохраняет по схеме измененя в selectedItem
 * в том числе scheme with array
 */
export const SelectByField: FC<Props> = memo(({ selectedItem, scheme, array, disabled, component, searchBox, onSearch }) => {
  const { updateViewItem } = useDashboardView();
  const [selectedValue, setSelectedValue] = useState(getValueByScheme(selectedItem, scheme) || '');

  useEffect(() => {
    setSelectedValue(getValueByScheme(selectedItem, scheme) || '');
  }, [selectedItem, scheme, setSelectedValue]);

  const handleUpdate = useCallback((v: string | number) => {
    updater(v, selectedItem, scheme, updateViewItem);
  }, [selectedItem, scheme, updateViewItem]);


  return (
    <SelectValue
      selectedValue = {selectedValue}
      disabled      = {disabled}
      array         = {array}
      component     = {component}
      searchBox     = {searchBox}
      onSelect      = {handleUpdate}
      onSearch      = {onSearch}
    />
  )
});
