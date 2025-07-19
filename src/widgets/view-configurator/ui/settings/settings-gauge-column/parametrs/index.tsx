import { FC, memo, useMemo, useCallback } from 'react';
import { useDashboardViewActions, ViewItem } from 'entities/dashboard-view';
import { GaugeColumnParametrItem } from '../item';
import { cloneObj, setValueByScheme } from 'shared/helpers/objects';



interface Props {
  selectedItem: ViewItem | undefined
}

/** Вкладка Settings for GaugeColumn */
export const GaugeColumnParametrs: FC<Props> = memo(({ selectedItem }) => {
  const { updateViewItems } = useDashboardViewActions();

  const lastIndex = useMemo(() => selectedItem?.settings?.gaugeColumnItems?.length || 0,
    [selectedItem]
  );

  const handleChangeColor = useCallback((index: number, color: string) => {
    if (! selectedItem) return

    const gaugeColumnItems = cloneObj(selectedItem?.settings?.gaugeColumnItems) || [];
    setValueByScheme(gaugeColumnItems, `settings.gaugeColumnItems[${index}].color`, color);

    updateViewItems([{
      id: selectedItem.id,
      settings: {
        ...selectedItem.settings,
        gaugeColumnItems
      }
    }]);
  },
    [selectedItem, updateViewItems]
  );


  return (
    <>
      {selectedItem?.settings?.gaugeColumnItems?.map((_, index) => (
        <GaugeColumnParametrItem
          key           = {index}
          index         = {index}
          selectedItem  = {selectedItem}
          onChangeColor = {handleChangeColor}
        />
      ))}

      <GaugeColumnParametrItem
        index         = {lastIndex}
        selectedItem  = {selectedItem}
        onChangeColor = {handleChangeColor}
      />
    </>
  )
});
