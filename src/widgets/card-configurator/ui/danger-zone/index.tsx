import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { CardItemId } from 'entities/dashboard-view';
import { MDDivider } from 'shared/ui/mui-design-components';
import { DeleteItem } from './delete-item';



interface Props {
  cardItemId: CardItemId
}


export const DangerZone: FC<Props> = memo(({ cardItemId }) => {

  return (
    <>
      <MDDivider mt={8} mb={2} />
    
      <SubHeader title='Опасная зона'>
        <DeleteItem cardItemId={cardItemId} />
      </SubHeader>
    </>
  )
});
