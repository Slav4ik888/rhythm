import { FC, memo } from 'react';
import { Stack } from '@mui/material';
import { deepPurple, green, orange } from '@mui/material/colors';
import { ReportSmallItemBox, SxSmallContainer } from 'entities/dashboard-data';
import { pxToRem } from 'shared/styles';



const getStyle = (headerBackground : string, contentBackground : string): SxSmallContainer => ({
  root: {
    width: pxToRem(100),
  },
  header: {
    background : headerBackground
  },
  content: {
    background : contentBackground
  }
});


interface Props {
  itemData_1_1_2 : number
  itemData_1_1_3 : number
  itemData_1_1_4 : number
}

/** Правая колонка по сотрудникам */
export const DashboardReportContainer_1_0_2_Details_RightStack: FC<Props> = memo(({ itemData_1_1_2, itemData_1_1_3, itemData_1_1_4 }) => {
  
  const sum = itemData_1_1_2 + itemData_1_1_3 + itemData_1_1_4;
  const ratioProdToOther = Number((itemData_1_1_3 / (itemData_1_1_2 + itemData_1_1_4))?.toFixed(1));


  return (
    <Stack alignItems='flex-end'>
      <ReportSmallItemBox
        type  = 'simple'
        title = 'Всего'
        kod   = '1_0_2'
        value = {sum}
        sx    = {getStyle(orange[200], orange[50])}
      />
      <ReportSmallItemBox
        type  = 'simple'
        title = 'В продаж'
        kod   = '1_1_2'
        value = {itemData_1_1_2}
        sx    = {getStyle(deepPurple[200], deepPurple[50])}
      />
      <ReportSmallItemBox
        type  = 'simple'
        title = 'На производстве'
        kod   = '1_1_3'
        value = {itemData_1_1_3}
        sx    = {getStyle(green[200], green[50])}
      />
      <ReportSmallItemBox
        type  = 'simple'
        title = 'Прочие'
        kod   = '1_1_4'
        value = {itemData_1_1_4}
        sx    = {getStyle(orange[200], orange[50])}
      />
      <ReportSmallItemBox
        type      = 'ratio'
        title     = 'Соотношение'
        toolTitle = 'Соотношение производства ко всем остальным'
        kod       = 'нет'
        value     = {ratioProdToOther}
        ratio     = {1}
        sx        = {getStyle(green[200], green[50])}
      />
    </Stack>
  );
});
