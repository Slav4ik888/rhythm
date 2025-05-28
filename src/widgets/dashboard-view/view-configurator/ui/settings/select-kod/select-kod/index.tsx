import { FC, memo, useCallback, useState } from 'react';
import { SelectByField } from '../../../base-features-components';
import { useDashboardData } from 'entities/dashboard-data';
import { SelectKodItem } from '../select-kod-item';
import { ViewItem } from 'entities/dashboard-view';
import { SelectKodItemSearchBox } from '../search-box';



interface Props {
  selectedItem : ViewItem | undefined
}

/**  */
export const SelectKod: FC<Props> = memo(({ selectedItem }) => {
  const { kods } = useDashboardData();
  const [searcheďKods, setSearchedKods] = useState(kods);

  const handleSearch = useCallback((value: string) => {
    setSearchedKods(
      kods.filter((kod) => kod.title.toLowerCase().includes(value.toLowerCase()))
    );
  }, [kods]);

  const disabled = Boolean(selectedItem?.settings?.fromGlobalKod);

  if (disabled) return null;

  return (
    <SelectByField
      scheme       = 'settings.kod'
      array        = {searcheďKods}
      component    = {SelectKodItem}
      selectedItem = {selectedItem}
      searchBox    = {SelectKodItemSearchBox}
      onSearch     = {handleSearch}
    />
  )
});
