import { FC, memo, useCallback, MouseEvent } from 'react';
import { ViewItemChart, useDashboardViewActions, ViewItem } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { InputByScheme } from '../../../../../base-features-components';



interface Props {
  index        : number // Index charts in settings.charts
  selectedItem : ViewItem | undefined
}

/** Толщина линии графика */
export const ChartBorderWidth: FC<Props> = memo(({ index, selectedItem }) => {
  const { changeOneDatasetsItem } = useDashboardViewActions();

  const handleChange = useCallback((value: string | number) => {
    changeOneDatasetsItem({ field: 'borderWidth', value, index });
  }, [index, changeOneDatasetsItem]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Border width' toolTitle='Выберите толщину линии графика' />
      <InputByScheme
        type         = 'number'
        selectedItem = {selectedItem}
        scheme       = 'settings.charts'
        width        = '3rem'
        transform    = {(v) => (v as unknown as ViewItemChart[] | undefined)?.[index]?.datasets?.borderWidth as number}
        onChange     = {(e: MouseEvent, v: string | number) => handleChange(v)}
        onBlur       = {(e: MouseEvent, v: string | number) => handleChange(v)}
        onSubmit     = {(e: MouseEvent, v: string | number) => handleChange(v)}
      />
    </RowWrapper>
  )
});
