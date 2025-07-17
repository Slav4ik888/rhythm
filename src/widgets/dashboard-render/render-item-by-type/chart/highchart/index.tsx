import { FC, memo, useEffect, useMemo, useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getKod, useDashboardViewState, ViewItem } from 'entities/dashboard-view';
import { DashboardStatisticItem, useDashboardData } from 'entities/dashboard-data';
import { getOptions } from './lib';
import { isNotPie } from 'entities/charts';



interface Props {
  isTemplate? : boolean // если рендерится шаблон
  item        : ViewItem
}

/** Item chart */
export const ItemHighchart: FC<Props> = memo(({ item, isTemplate }) => {
  const { activeDates, activeEntities } = useDashboardData();
  const { entities } = useDashboardViewState();

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  // useEffect(() => {
  //   // Динамический импорт для гарантии работы
  //   import('highcharts/highcharts-3d').then(module => {
  //     // module.default(Highcharts);
  //   });
  // }, []);

  const data = useMemo(() => {
    if (isTemplate) {
      // return isNotPie(item)
      //   ? getTemplateData(item)
      //   : getTemplateDataDoughnut(item)
    }
    else {
      const itemsData = item.settings?.charts?.map(chart => {
        const kod = getKod(entities, item, chart);

        return activeEntities[kod] as DashboardStatisticItem<number>
      }) || [];

      return isNotPie(item)
        // ? getData(activeDates, itemsData, item, entities)
        // : getDataDoughnut(itemsData, item)
    }
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeDates, activeEntities, item, entities, isTemplate]
  );



  return (
    <HighchartsReact
      highcharts = {Highcharts}
      options    = {getOptions('pie', {})} // item.settings?.chartOptions || {})}
      ref        = {chartComponentRef}
      // {...props}
    />
  )
});
