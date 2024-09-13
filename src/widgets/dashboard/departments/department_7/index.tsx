import { memo, useMemo } from 'react';
import { ReportsLineChart2, ChartConfigDataSets, ChartConfigOptions } from 'shared/ui/charts';
import { DashboardBlockContainer, DashboardReportContainer } from 'entities/blocks';
import { useSelector } from 'react-redux';
import { selectActiveDates, selectActiveEntities } from 'entities/dashboard';
import { formatDate } from 'shared/helpers/dates';




const config: ChartConfigOptions = {
  scales: {
    y: {
      grid: {
        color: "rgba(0, 0, 0, .8)",
      },
      ticks: {
        color: "rgba(0, 0, 0, .8)",
        font: {
          size: 10,
        }
      }
    },
    x: {
      ticks: {
        color: "rgba(0, 0, 0, .8)",
        font: {
          size: 10,
        }
      }
    }
  }
};


const datasetConfig: ChartConfigDataSets = {
  pointRadius          : 4, // Толщика точки (круглешков)
  pointBackgroundColor : "rgba(0, 0, 0, .8)",
  borderColor          : "rgba(0, 0, 0, .8)",
  borderWidth          : 4, // Толщика линии
}




export const DashboardGroupDepartment7 = memo(() => {
  console.log('DashboardBlock ');
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const formattedDates = useMemo(() => activeDates['Нед']?.map((item) => formatDate(item, 'DD.MM.YY')), [activeDates]);

  const data7_1 = useMemo(() => activeEntities["7-1"] || {}, [activeEntities]);
  const data7_2 = useMemo(() => activeEntities["7-2"] || {}, [activeEntities]);

  console.log('data7_2: ', data7_2);
  // TODO: Настройку выбора до скольки знаков после запятой округлить значения
  

  return (
    <DashboardBlockContainer bgColor='department_7' my={5} p={3} pt={6} pr={0}>
      <DashboardReportContainer>
        <ReportsLineChart2
          bgColor="grey-400" // "department_7"
          title={data7_1.title}
          description={
            <>
              (<strong>+15%</strong>) increase in today sales.
            </>
          }
          date="updated 4 min ago"
          chart={{
            labels   : formattedDates,
            datasets : {
              ...datasetConfig,
              // label : "Сумма кредиторской задолженности",
              data  : data7_1.data as number[]
            },
            config
          }}
        />
      </DashboardReportContainer>
      <DashboardReportContainer>
        <ReportsLineChart2
          bgColor="grey-400"
          title={data7_2.title}
          description={
            <>
              (<strong>+15%</strong>) increase in today sales.
            </>
          }
          date="updated 4 min ago"
          chart={{
            labels   : formattedDates,
            datasets : {
              ...datasetConfig,
              // label : "Резервный фонд",
              data  : data7_2.data as number[]
            },
            config
          }}
        />
      </DashboardReportContainer>
    </DashboardBlockContainer>
  );
});
