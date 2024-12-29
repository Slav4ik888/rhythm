import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { useDashboardView } from 'entities/dashboard-view';
import { LabelRow } from './label-row';



export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none';


/** Card text label */
export const CardLabel: FC = memo(() => {
  const { selectedItem: { type } } = useDashboardView();

  if (type !== 'text') return null

  return (
    <SubHeader title='Текст'>
      <LabelRow />
    </SubHeader>
  )
});
