import { FC, memo } from 'react';
import { SelectChartType } from './chart-settings/select-chart-type';
import { ChartLabel } from './chart-settings/chart-label';
import { ConfiguratorSubBoxWrapper, ConfiguratorTitle } from 'shared/ui/configurators-components';
import { ChartPointRadius } from './chart-settings/point-radius';
import { ChartPointBackgroundColor } from './chart-settings/point-background-color';
import { ChartBorderColor } from './chart-settings/border-сolor';
import { ChartBackgroundColor } from './chart-settings/background-сolor';
import { ChartBorderWidth } from './chart-settings/border-width';
import { useDashboardView } from 'entities/dashboard-view';
import { ChartTrendCheckbox } from './chart-settings/trend/checkbox';
import { ChartTrendColor } from './chart-settings/trend/сolor';
import { ChartTrendWidth } from './chart-settings/trend/width';
import { AddNewChart, DelChart } from 'features/dashboard-view';
import { ChartKods } from './chart-settings/chart-kods';
import { isNotPie } from 'entities/charts';



/** Отрисовки списка графиков */
export const ViewItemChartSettingsList: FC = memo(() => {
  const { selectedItem } = useDashboardView();

  const notPie = isNotPie(selectedItem);

  return (
    <>
      {
        
        //   ?
            selectedItem.settings?.charts &&
            selectedItem.settings.charts.length > 0 &&
            selectedItem.settings.charts.map((item, index) => (
              <ConfiguratorSubBoxWrapper title={`График ${index + 1}`} key={index}>
                <ConfiguratorTitle title='Общие настройки' type='subtitle1' />
                <SelectChartType index={index} />
                <ChartKods       index={index} />
                
                <ChartLabel      index={index} />
                {/* Выбрать период дат: общий или уникальный */}
                
                {
                  notPie
                    ?
                      <>
                        <ConfiguratorTitle title='Точки' type='subtitle1' />
                        <ChartPointRadius          index={index} />
                        <ChartPointBackgroundColor index={index} />

                        <ConfiguratorTitle title='Линия графика' type='subtitle1' />
                        <ChartBorderWidth     index={index} />
                        <ChartBorderColor     index={index} />
                        <ChartBackgroundColor index={index} />

                        <ConfiguratorTitle title='Линия тренда' type='subtitle1' />
                        <ChartTrendCheckbox index={index} />
                        <ChartTrendWidth    index={index} />
                        <ChartTrendColor    index={index} />
                      </>
                    : <>
                        <ChartBackgroundColor index={index} />
                      </>
                }

                <DelChart index={index} />
              </ConfiguratorSubBoxWrapper>
            ))
          // : 
          //   <ConfiguratorSubBoxWrapper title={'График 1'}>
          //     <ConfiguratorTitle title='Общие настройки' type='subtitle1' />
          //     <SelectChartType index={0} />
          //     <ChartKods       index={0} />
              
          //     <DelChart index={0} />
          //   </ConfiguratorSubBoxWrapper>
      }

      <AddNewChart /> 
    </>
  )
});
