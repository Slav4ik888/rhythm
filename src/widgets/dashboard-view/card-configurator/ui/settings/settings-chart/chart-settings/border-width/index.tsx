import { FC, memo, useCallback, MouseEvent } from 'react';
import { CardItemCharts, useDashboardView } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { InputByScheme } from 'widgets/dashboard-view/card-configurator/ui/base-features-components';



interface Props {
  index: number // Index charts in settings.charts
}

/** Толщина линии графика */
export const ChartBorderWidth: FC<Props> = memo(({ index }) => {
  const { changeOneDatasetsItem } = useDashboardView();

  const handleChange = useCallback((value: string | number) => {
    changeOneDatasetsItem({ field: 'borderWidth', value, index });
  }, [changeOneDatasetsItem]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Border width' toolTitle='Выберите толщину линии графика' />
      <InputByScheme
        type      = 'number'
        scheme    = 'settings.charts'
        width     = '3rem'
        transform = {(v) => (v as unknown as CardItemCharts[] | undefined)?.[index]?.datasets?.borderWidth as number}
        onChange  = {(e: MouseEvent, v: string | number) => handleChange(v)}
        onBlur    = {(e: MouseEvent, v: string | number) => handleChange(v)}
        onSubmit  = {(e: MouseEvent, v: string | number) => handleChange(v)}
      />
    </RowWrapper>
  )
});
