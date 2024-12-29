import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { MDDivider } from 'shared/ui/mui-design-components';
import { DeleteItemContainer as DeleteItem } from 'features/dashboard-view';



export const DangerZone: FC = memo(() => {

  return (
    <>
      <MDDivider mt={8} mb={2} />
    
      <SubHeader title='Опасная зона'>
        <DeleteItem />
      </SubHeader>
    </>
  )
});
