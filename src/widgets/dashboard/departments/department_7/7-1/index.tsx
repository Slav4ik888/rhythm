import { memo, useMemo } from 'react';
import { ReportsLineChart2, ChartConfigDataSets, ChartConfigOptions } from 'shared/ui/charts';
import { DashboardReportContainer } from 'entities/blocks';
import { useSelector } from 'react-redux';
import { selectActiveDates, selectActiveEntities } from 'entities/dashboard';
import { formatDate } from 'shared/helpers/dates';




const config: ChartConfigOptions = {
  scales: {
    y: {
      grid: {
        color: "#dadada",
      },
      ticks: {
        color: "rgba(0, 0, 0, .8)",
        font: {
          size: 10,
        }
      }
    },
    x: {
      grid: {
        color: "#000",
      },
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
  pointBackgroundColor : "#508dde", // "rgba(0, 0, 0, .8)",
  backgroundColor      : "#a5d2f8",
  borderColor          : "#508dde",
  borderWidth          : 4, // Толщика линии
}




export const DashboardReportContainer7_1 = memo(() => {
  const activeEntities = useSelector(selectActiveEntities);
  const activeDates    = useSelector(selectActiveDates);

  const itemData = useMemo(() => activeEntities["7-1"], [activeEntities]);

  const dates = useMemo(() => activeDates[itemData?.statisticType]
    ?.map((item) => formatDate(item, 'DD.MM.YY')), [activeDates, itemData]);


  if (! itemData) return null;

  return (
    <DashboardReportContainer>
      <ReportsLineChart2
        bgColor="grey-300" // "department_7"
        item={itemData}
        description={
          <>
            (<strong>+15%</strong>) increase in today sales.
          </>
        }
        date="updated 4 min ago"
        chart={{
          labels   : dates,
          datasets : {
            ...datasetConfig,
            // label : "Сумма кредиторской задолженности",
            data  : itemData.data as number[]
          },
          config
        }}
      />
    </DashboardReportContainer>
  );
});
