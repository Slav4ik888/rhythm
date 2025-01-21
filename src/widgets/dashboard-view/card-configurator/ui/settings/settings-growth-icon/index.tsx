import { FC, memo, useCallback, MouseEvent } from 'react';
import { InvertedData } from '../inverted-data';
import { SelectKod } from '../select-kod';
import { UnchangedBlack } from './unchanged-black';
import { IsLeft } from './is-left';
import { Input } from 'shared/ui/containers';
import { PartialCardItem, useDashboardView } from 'entities/dashboard-view';
import { getValueByScheme, setValueByScheme } from 'shared/helpers/objects';



/** Вкладка Settings for GrowthIcon */
export const CardItemGrowthIconSettingsConfigurator: FC = memo(() => {
  const { selectedItem, updateCardItem } = useDashboardView();
  const scheme = 'settings.scale';


  const handleChange = useCallback((e: MouseEvent, v: string | number) => {
    const result: PartialCardItem = {
      id: selectedItem.id
    };

    // const resultValue = ! Boolean(getValueByScheme(selectedItem, scheme));
    setValueByScheme(result, scheme, Number(v));
    updateCardItem(result);
  }, [selectedItem]);


  return (
    <>
      {/* GLOBAL SETTINGS */}
      <InvertedData />

      {/* GROWTH ICON SETTINGS */}
      <SelectKod />
      <UnchangedBlack />
      <IsLeft />

      <Input
        type         = 'number'
        defaultValue = {getValueByScheme(selectedItem, scheme)}
        changesValue = {getValueByScheme(selectedItem, scheme)}
        onBlur       = {handleChange}
        onSubmit     = {handleChange}
      />
      {/* scaleValue      : number  | undefined */}
    </>
  )
});
