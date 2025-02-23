import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ViewItemChartScaleTicks as Ticks } from '../ticks';
import { ViewItemChartScaleGrid as Grid} from '../grid';
import { ViewItemChartScaleYMinMax as MinMax } from './min-max';



/** НАСТРОЙКИ ОСИ Y */
export const ViewItemChartScaleYSettings: FC = memo(() => {
  return (
    <SubHeader title='Ось Y'>
      <MinMax />
      <Grid  scale='y' />
      <Ticks scale='y' />
    </SubHeader>
  )
});
