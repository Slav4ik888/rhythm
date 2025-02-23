import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ViewItemChartScaleTicks as Ticks } from '../ticks';
import { ViewItemChartScaleGrid as Grid} from '../grid';



/** НАСТРОЙКИ ОСИ X */
export const ViewItemChartScaleXSettings: FC = memo(() => {
  return (
    <SubHeader title='Ось X'>
      <Grid  scale='x' />
      <Ticks scale='x' />
    </SubHeader>
  )
});
