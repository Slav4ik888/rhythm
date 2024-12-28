import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { CardItemId } from 'entities/dashboard-view';
import { IdTitle } from './id-title';
import { ControlRow } from './control';



export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none';


interface Props {
  cardItemId: CardItemId
}

/** CardId */
export const CardId: FC<Props> = memo(({ cardItemId }) => {

  return (
    <SubHeader title='Элемент'>
      <IdTitle cardItemId={cardItemId} />
      <ControlRow cardItemId={cardItemId} />
    </SubHeader>
  )
});
