import { FC, memo } from 'react';
import { ReportSmallItemBox } from 'shared/ui/report-items';
import { Stack } from '@mui/material';
import { amber, deepPurple, green, orange } from '@mui/material/colors';



interface Props {
  itemData_1_1_2 : number
  itemData_1_1_3 : number
  itemData_1_1_4 : number
}

/** Правая колонка по сотрудникам */
export const DashboardReportContainer_1_0_2_Details_RightStack: FC<Props> = memo(({
  itemData_1_1_2, itemData_1_1_3, itemData_1_1_4 }) => {
  

  const sum = itemData_1_1_2 + itemData_1_1_3 + itemData_1_1_4;
  const ratioProdToOther = Number((itemData_1_1_3 / (itemData_1_1_2 + itemData_1_1_4))?.toFixed(1));
  const width = 'lg';


  return (
    <Stack alignItems='flex-end'>
      <ReportSmallItemBox
        type           = 'simple'
        width          = {width}
        headerBGColor  = {orange[200]}
        contentBGColor = {orange[50]}
        title          = 'Всего'
        value          = {sum}
      />
      <ReportSmallItemBox
        type           = 'simple'
        width          = {width}
        headerBGColor  = {deepPurple[200]}
        contentBGColor = {deepPurple[50]}
        title          = 'В продаж'
        value          = {itemData_1_1_2}
      />
      <ReportSmallItemBox
        type           = 'simple'
        width          = {width}
        headerBGColor  = {green[200]}
        contentBGColor = {green[50]}
        title          = 'На производстве'
        value          = {itemData_1_1_3}
      />
      <ReportSmallItemBox
        type           = 'simple'
        width          = {width}
        headerBGColor  = {amber[200]}
        contentBGColor = {amber[50]}
        title          = 'Прочие'
        value          = {itemData_1_1_4}
      />
      <ReportSmallItemBox
        type           = 'ratio'
        width          = {width}
        headerBGColor  = {green[200]}
        contentBGColor = {green[50]}
        title          = 'Соотношение'
        toolTitle      = 'Соотношение производства ко всем остальным'
        value          = {ratioProdToOther}
        ratio          = {1}
      />
    </Stack>
  );
});
