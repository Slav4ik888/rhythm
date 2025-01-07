import { FC, memo } from 'react';
import { ChartConfig, ChartContainer, DoughnutChart } from 'entities/charts';
import { pxToRem } from 'shared/styles';



interface Props {
  itemData_1_1_2 : number
  itemData_1_1_3 : number
  itemData_1_1_4 : number
}


export const DoughnutSmallReport: FC<Props> = memo(({ itemData_1_1_2, itemData_1_1_3, itemData_1_1_4 }) => {
  
  const doughnutChartData: ChartConfig = {
    labels   : ['В продажах', 'На производстве', 'Прочие'],
    datasets : [{
      data            : [itemData_1_1_2, itemData_1_1_3, itemData_1_1_4],
      backgroundColor : ['rgb(141 97 183)', 'rgb(63 122 53)', 'rgb(209 148 58)'],
    }],
    options: {
      plugins: {
        legend: {
          // display: false,
          position : 'bottom',
          align    : 'start',
        }
      },
    }
  };



  return (
    <ChartContainer
      sx={{
        root: {
          width        : pxToRem(280),
          minWidth     : pxToRem(280),
          background   : 'transparent',
          borderRadius : 'none',
          boxShadow    : 'none',
          mt           : 2,
        }
      }}
      children={<DoughnutChart chart={doughnutChartData} />}
    />
  );
});
