import { memo, useMemo } from 'react';
import { ChartConfig, ChartConfigDatasets } from 'entities/charts';
import { DashboardReportContainer } from 'entities/blocks';
import { useSelector } from 'react-redux';
import { selectActiveDates, selectActiveEntities, ReportsLineChartConfig, invertData, ReportsLineChart } from 'entities/dashboard';
import { formatDate, SUB } from 'shared/helpers/dates';
import { fixPointRadius } from 'entities/charts';
import { pxToRem } from 'app/providers/theme';



/** Доп поля в конфиг данных для графика */
const getDatasetConfig = (dates: any[]): ChartConfigDatasets => {

  const config: ChartConfigDatasets = {
    pointBackgroundColor : "rgb(194 201 35)",
    backgroundColor      : "rgb(194 201 35 / 30%)",
    borderColor          : "rgb(194 201 35)",
  }

  fixPointRadius(config, dates);

  return config;
}


/** Badcom - Кол-во новых абонентов (нед) */
export const DashboardReportContainer6_17_7 = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const itemData  = useMemo(() => activeEntities["6-17-7"], [activeEntities]);
  const dates     = useMemo(() => activeDates[itemData?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, itemData]);


  if (! itemData) return null;
  
  const reportConfig: ReportsLineChartConfig = {
    header: {
      minHeight: pxToRem(64),
    },
    chips: {
      statisticType : true,
      companyType   : true,
      conditionType : true,
    },
    resultChanges: {
      comparisonIndicators: {
        reduce         : true, // Убрать разряды: 12 500 700 => 12.5007 млн
        fractionDigits : 2,    // Количество знаков после запятой
        addZero        : true, // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
      },
      growthResult: {
        fractionDigits : 1,    // Количество знаков после запятой
        addZero        : true, // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
      },
    },
  };


  const chartData: ChartConfig = {
    labels: dates,
    datasets: {
      ...getDatasetConfig(dates),
      data: reportConfig.inverted ? invertData(itemData.data as number[]) : itemData.data as number[]
    },
    options: {
      // scales: {
      //   y: {
      //     suggestedMax: 40 // Добавление  макс значения оси Y
      //   }
      // }
    }
  };
    


  return (
    <DashboardReportContainer>
      <ReportsLineChart
        item        = {itemData}
        chart       = {chartData}
        config      = {reportConfig}
      />
    </DashboardReportContainer>
  );
});
