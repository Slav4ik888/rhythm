import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { IdTitle } from './id-title';
import { ControlRow } from './control';



export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none';


/** CardId */
export const CardId: FC = memo(() => {

  return (
    <SubHeader title='Элемент'>
      <IdTitle />
      <ControlRow />
    </SubHeader>
  )
});
