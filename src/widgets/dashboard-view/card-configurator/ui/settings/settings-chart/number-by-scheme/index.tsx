import { FC, memo, useCallback } from 'react';
import { ItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { ChangeStyleItem, ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { getValueByScheme, setValueByScheme, updateObject } from 'shared/helpers/objects';



interface Props {
  scheme    : string
  title     : string
  toolTitle : string
}

/** 
 * По схеме сохраняет изменени цифровых значений в selectedItem.settings?.chartOptions
 */
export const ChartNumberByScheme: FC<Props> = memo(({ scheme, title, toolTitle }) => {
  const { selectedItem, changeOneSettingsField } = useDashboardView();

  const handleChange = useCallback((_: ItemStylesField, value: string | number) => {
    const result = {};
    const chartOptionsScheme = scheme.split('.').slice(2).join('.'); // Убираем вступление
    setValueByScheme(result, chartOptionsScheme, value);

    changeOneSettingsField({
      field: 'chartOptions',
      value: updateObject(
        selectedItem.settings?.chartOptions || {},
        result
      )
    });
  }, [selectedItem, changeOneSettingsField]);

  const handleClear = () => handleChange('null' as ItemStylesField, null as unknown as string);
  
  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title={title} toolTitle={toolTitle} />
      <ChangeStyleItem
        type       = 'number'
        value      = {getValueByScheme(selectedItem, scheme) as number}
        width      = '3rem'
        onClear    = {handleClear}
        onCallback = {handleChange}
        onSubmit   = {handleChange}
      />
    </RowWrapper>
  )
});
