import { FC, memo, useCallback, MouseEvent } from 'react';
import { ViewItemCharts, useDashboardView } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { InputByScheme } from 'widgets/dashboard-view/view-configurator/ui/base-features-components';
import { pxToRem } from 'shared/styles';



interface Props {
  index: number // Index charts in settings.charts
}

/** Выбор legend label графика */
export const ChartLabel: FC<Props> = memo(({ index }) => {
  const { selectedItem, changeOneDatasetsItem } = useDashboardView();

  const handleChange = useCallback((value: string | number) => {
    changeOneDatasetsItem({ field: 'label', value, index });
  }, [selectedItem, changeOneDatasetsItem]);
  
  if (! Boolean(selectedItem.settings?.chartOptions?.plugins?.legend?.display)) return null


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Chart label' toolTitle='Выберите метку для графика' />
      <InputByScheme
        scheme    = 'settings.charts'
        width     = '100%'
        sx        = {{ field: { height: pxToRem(40)}}}
        transform = {(v) => (v as unknown as ViewItemCharts[] | undefined)?.[index]?.datasets?.label as string}
        onChange  = {(e: MouseEvent, v: string | number) => {}}
        onBlur    = {(e: MouseEvent, v: string | number) => handleChange(v)}
        onSubmit  = {(e: MouseEvent, v: string | number) => handleChange(v)}
      />
    </RowWrapper>
  )
});
