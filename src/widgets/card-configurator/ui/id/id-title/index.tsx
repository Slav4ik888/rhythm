import { FC, memo } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { CardItemId } from 'entities/card-item';



interface Props {
  cardItemId : CardItemId
}


export const IdTitle: FC<Props> = memo(({ cardItemId }) => {


  return (
    <RowWrapper>
      <ConfiguratorTextTitle
        bold
        title     = 'id'
        toolTitle = 'Item id'
      />
      {cardItemId}
    </RowWrapper>
  )
});
