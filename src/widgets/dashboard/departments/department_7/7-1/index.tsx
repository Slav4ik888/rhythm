import { memo, useMemo } from 'react';
import { ReportsLineChart2, ChartConfigDataSets } from 'shared/ui/charts';
import { DashboardReportContainer } from 'entities/blocks';
import { useSelector } from 'react-redux';
import { DashboardConditionType, invertData, selectActiveDates, selectActiveEntities } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';
import { getLastItem } from 'shared/helpers/arrays';
import { getConditionType } from 'entities/dashboard/model/config';



/** Доп поля в конфиг данных для графика */
const getDatasetConfig = (dates: any[]): ChartConfigDataSets => {

  const config: ChartConfigDataSets = {
    pointBackgroundColor : "rgb(80 141 222 / 100%)",
    backgroundColor      : "rgb(80 141 222 / 30%)",
    borderColor          : "rgb(80 141 222 / 100%)",
  };

  fixPointRadius(config, dates);

  return config;
}



export const DashboardReportContainer7_1 = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const itemData = useMemo(() => activeEntities["7-1"], [activeEntities]);
  const condition = useMemo(() => getConditionType(getLastItem(activeEntities["7-1-C"]?.data as string[])), [activeEntities]);
  const dates = useMemo(() => activeDates[itemData?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);


  if (! itemData) return null;

  const datasetConfig = getDatasetConfig(dates);

  const chartData = {
    labels: dates,
    datasets: {
      ...datasetConfig,
      // label : "Сумма кредиторской задолженности",
      data: invertData(itemData.data as number[])
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
        condition   = {condition} // DashboardConditionType
      />
    </DashboardReportContainer>
  );
});
