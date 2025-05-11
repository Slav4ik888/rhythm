import { FC, memo, useCallback, MouseEvent } from 'react';
import { ViewItemCharts, useDashboardView } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { InputByScheme } from '../../../base-features-components';
import { isNotPie } from 'entities/charts';
import { getDigit } from 'shared/helpers/numbers';
import { Box } from '@mui/material';
import { f } from 'shared/styles';



/** Глубина выреза для doughnut графика */
export const ChartCutout: FC = memo(() => {
  const { selectedItem, changeOneDatasetsItem } = useDashboardView();

  const handleChange = useCallback((value: string | number) => {
    if (! selectedItem?.settings?.charts?.length) return // Для сохранения должен быть добавлен хотя бы 1 график
    
    changeOneDatasetsItem({ field: 'cutout', value: value + '%', index: 0 });
  }, [changeOneDatasetsItem]);

  if (isNotPie(selectedItem)) return null;
  
  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Cutout' toolTitle='Вырез по центру графика' />
      <Box sx={f()}>
        %
        <InputByScheme
          type      = 'number'
          scheme    = 'settings.charts'
          width     = '3rem'
          transform = {(v) => getDigit((v as unknown as ViewItemCharts[] | undefined)?.[0]?.datasets?.cutout || '')}
          onChange  = {(e: MouseEvent, v: string | number) => handleChange(v)}
          onBlur    = {(e: MouseEvent, v: string | number) => handleChange(v)}
          onSubmit  = {(e: MouseEvent, v: string | number) => handleChange(v)}
        />
      </Box>
    </RowWrapper>
  )
});
