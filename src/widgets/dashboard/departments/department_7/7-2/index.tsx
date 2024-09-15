import { memo, useMemo } from 'react';
import { ReportsLineChart2, ChartConfigDataSets } from 'shared/ui/charts';
import { DashboardReportContainer } from 'entities/blocks';
import { useSelector } from 'react-redux';
import { selectActiveDates, selectActiveEntities } from 'entities/dashboard';
import { formatDate } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';



/** Доп поля в конфиг данных для графика */
const getDatasetConfig = (dates: any[]): ChartConfigDataSets => {

  const config: ChartConfigDataSets = {
    pointBackgroundColor : "#508dde", // "rgba(0, 0, 0, .8)",
    backgroundColor      : "#a5d2f8",
    borderColor          : "#508dde",
  }

  fixPointRadius(config, dates);

  return config;
}



export const DashboardReportContainer7_2 = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const itemData = useMemo(() => activeEntities["7-2"], [activeEntities]);

  const dates = useMemo(() => activeDates[itemData?.statisticType]
    ?.map((item) => formatDate(item, 'DD.MM.YY')), [activeDates, itemData]);


  if (! itemData) return null;

  const datasetConfig = getDatasetConfig(dates);

  const chartData = {
    labels: dates,
    datasets: {
      ...datasetConfig,
      // label : "Резервный фонд",
      data: itemData.data as number[]
    }
  };


  return (
    <DashboardReportContainer>
      <ReportsLineChart2
        bgColor     = "grey-300" // "department_7"
        item        = {itemData}
        description = {<>(<strong>+15%</strong>) increase in today sales.</>}
        date        = "updated 4 min ago"
        chart       = {chartData}
      />
    </DashboardReportContainer>
  );
});
