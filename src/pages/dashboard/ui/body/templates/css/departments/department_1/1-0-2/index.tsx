import { memo, useMemo } from 'react';
import { ChartConfigDataSets } from 'entities/charts';
import { DashboardReportContainer } from 'entities/blocks';
import { useSelector } from 'react-redux';
import { invertData, ReportsLineChart, ReportsLineChartConfig, selectActiveDates, selectActiveEntities } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';
import { getConditionType } from 'entities/condition-type';
import { pxToRem } from 'app/providers/theme';



/** Доп поля в конфиг данных для графика */
const getDatasetConfig = (dates: any[]): ChartConfigDataSets => {

  const config: ChartConfigDataSets = {
    pointBackgroundColor : "rgb(209 148 58)",
    backgroundColor      : "rgb(209 148 58 / 30%)",
    borderColor          : "rgb(209 148 58)",
  }

  fixPointRadius(config, dates);    

  return config;
}


/** Общее кол-во сотрудников */
export const DashboardReportContainer1_0_2 = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const itemData  = useMemo(() => activeEntities["1-0-2"], [activeEntities]);
  const condition = useMemo(() => getConditionType(activeEntities["1-0-2-C"]?.data), [activeEntities]);
  const dates     = useMemo(() => activeDates[itemData?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);


  if (! itemData) return null;

  const reportConfig: ReportsLineChartConfig = {
    unchangedBlack : true, // При отсутствии изменений в результатах красить чёрным цветом

    header: {
      minHeight: pxToRem(64),
    },
    chips: {
      statisticType : true,
      companyType   : true,
      conditionType : true,
    },
    resultChanges: {
      growthResult: {
        fractionDigits : 1,    // Количество знаков после запятой
        addZero        : true, // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
      },
    },
  };


  const datasetConfig = getDatasetConfig(dates);

  const chartData = {
    labels: dates,
    datasets: {
      ...datasetConfig,
      data: reportConfig.inverted ? invertData(itemData.data as number[]) : itemData.data as number[]
    },
    config: {
      scales: {
        y: {
          suggestedMax: 40 // Добавление  макс значения оси Y
        }
      }
    }
  };


  return (
    <DashboardReportContainer>
      <ReportsLineChart
        item        = {itemData}
        chart       = {chartData}
        condition   = {condition}
        config      = {reportConfig}
      />
    </DashboardReportContainer>
  );
});
