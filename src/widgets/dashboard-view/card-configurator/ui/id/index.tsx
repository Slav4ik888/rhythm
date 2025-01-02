import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { AddRow } from './add-row';
import { IdTitle } from './id-title';
import { MovementRow } from './movement-row';
import { TypeRow } from './type-row';



/** CardId */
export const CardId: FC = memo(() => {

  return (
    <SubHeader title='Элемент'>
      <IdTitle />
      <TypeRow />
      <MovementRow />
      <AddRow />
    </SubHeader>
  )
});
