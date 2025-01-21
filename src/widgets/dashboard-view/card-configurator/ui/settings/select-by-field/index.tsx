import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView, ChipType, CardItemSettingsField } from 'entities/dashboard-view';
import { SelectValue } from 'shared/ui/configurators-components/select';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';



interface Props {
  field      : CardItemSettingsField
  title      : string
  toolTitle  : string
  array      : string[]
  transform? : (value: string) => string
}

/** Выбор ByField */
export const SelectByField: FC<Props> = memo(({ field, title, toolTitle, array }) => {
  const { selectedItem, changeOneSettingsField } = useDashboardView();
  const [selectedValue, setSelectedValue] = useState(selectedItem?.settings?.[field] as string || '');

  useEffect(() => {
    setSelectedValue(selectedItem.settings?.[field] as string || '');
  }, [selectedItem.settings?.[field]]);


  const handleSelectedValue = useCallback((value: string) => {

    setSelectedValue(value as ChipType);
    changeOneSettingsField({ field, value });
  }, [selectedItem, changeOneSettingsField]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title={title} toolTitle={toolTitle} />

      <SelectValue
        selectedValue = {selectedValue}
        array         = {array}
        onSelect      = {handleSelectedValue}
      />
    </RowWrapper>
  )
});
